import { NextRequest, NextResponse } from 'next/server'
import { createAdminUser } from '@/lib/admin-auth'
import { createServerSupabaseClient } from '@/lib/supabase'

// This endpoint should only be used once to create the initial admin user
// After that, it should be disabled or protected

export async function POST(request: NextRequest) {
  try {
    // Check if setup key is provided (simple protection)
    const { email, password, name, setupKey } = await request.json()

    // Simple setup key protection (change this to your own secret)
    const expectedSetupKey = process.env.ADMIN_SETUP_KEY || 'molatech-admin-setup-2025'

    if (setupKey !== expectedSetupKey) {
      return NextResponse.json(
        { error: 'Invalid setup key' },
        { status: 403 }
      )
    }

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if admin already exists
    const supabase = createServerSupabaseClient()
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      )
    }

    const { data: existingAdmin } = await supabase
      .from('admin_users')
      .select('id')
      .limit(1)
      .single()

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin user already exists. Setup can only be run once.' },
        { status: 400 }
      )
    }

    // Create the admin user
    const user = await createAdminUser(email, password, name)

    return NextResponse.json({
      success: true,
      message: 'Admin user created successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error('Setup error:', error)
    return NextResponse.json(
      { error: 'Failed to create admin user' },
      { status: 500 }
    )
  }
}
