import { NextRequest, NextResponse } from 'next/server'
import { loginAdmin, SESSION_COOKIE_NAME } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    console.log('Login attempt for:', email)

    const { token, expiresAt, user } = await loginAdmin(email, password)

    console.log('Login successful for:', email)

    const response = NextResponse.json({
      success: true,
      user,
    })

    // Set session cookie
    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: expiresAt,
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Invalid credentials'
    return NextResponse.json(
      { error: errorMessage },
      { status: 401 }
    )
  }
}
