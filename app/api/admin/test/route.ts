import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    const envCheck = {
      supabaseConfigured: !!(supabaseUrl && supabaseAnonKey),
      supabaseUrl: supabaseUrl ? 'Set' : 'Missing',
      supabaseAnonKey: supabaseAnonKey ? 'Set (hidden)' : 'Missing',
    }

    // Try to create Supabase client
    let clientStatus = 'Not created'
    let users: any = null

    try {
      const { createClient } = await import('@supabase/supabase-js')

      if (supabaseUrl && supabaseAnonKey) {
        const supabase = createClient(supabaseUrl, supabaseAnonKey)
        clientStatus = 'Created successfully'

        // Try to list users (will fail with anon key, but confirms connection)
        const { data, error } = await supabase.auth.admin.listUsers()

        if (error) {
          users = `Error (expected with anon key): ${error.message}`
        } else {
          users = `Found ${data.users.length} users`
        }
      }
    } catch (error: any) {
      clientStatus = `Error: ${error.message}`
    }

    return NextResponse.json({
      status: 'Admin test endpoint',
      environment: envCheck,
      supabaseClient: clientStatus,
      usersCheck: users,
      allowedAdminEmails: [
        'info@molatech.org',
        'admin@molatech.org',
      ],
      instructions: {
        step1: 'Create a user in Supabase with one of the allowed admin emails',
        step2: 'Go to Supabase Dashboard > Authentication > Users > Add User',
        step3: 'Use email: info@molatech.org or admin@molatech.org',
        step4: 'Set a password',
        step5: 'Try logging in at /admin/login',
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: 'Test failed',
        message: error.message,
      },
      { status: 500 }
    )
  }
}
