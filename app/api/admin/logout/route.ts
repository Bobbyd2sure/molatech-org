import { NextResponse } from 'next/server'
import { logout, SESSION_COOKIE_NAME } from '@/lib/admin-auth'

export async function POST() {
  try {
    await logout()

    const response = NextResponse.json({ success: true })
    response.cookies.delete(SESSION_COOKIE_NAME)

    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    )
  }
}
