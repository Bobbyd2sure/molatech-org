import { cookies } from 'next/headers'
import type { SupabaseClient } from '@supabase/supabase-js'

const SESSION_COOKIE_NAME = 'admin_session'

// List of allowed admin emails
const ADMIN_EMAILS = [
  'info@molatech.org',
  'admin@molatech.org',
]

// Create Supabase client for auth using dynamic import
async function createAuthClient(): Promise<SupabaseClient | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return null during build time when env vars might not be available
    if (typeof window === 'undefined' && !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return null
    }
    throw new Error('Supabase not configured')
  }

  // Dynamic import to avoid build-time issues
  const { createClient } = await import('@supabase/supabase-js')
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Login admin user using Supabase Auth
export async function loginAdmin(email: string, password: string) {
  const supabase = await createAuthClient()

  if (!supabase) {
    throw new Error('Supabase not configured')
  }

  // Check if email is in allowed admin list
  if (!ADMIN_EMAILS.includes(email.toLowerCase())) {
    throw new Error('Not authorized as admin')
  }

  // Sign in with Supabase Auth
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message || 'Invalid credentials')
  }

  if (!data.session) {
    throw new Error('Failed to create session')
  }

  return {
    token: data.session.access_token,
    expiresAt: new Date(data.session.expires_at! * 1000),
    user: {
      id: data.user.id,
      email: data.user.email!,
      name: data.user.user_metadata?.name || data.user.email?.split('@')[0] || 'Admin',
      role: 'admin',
    },
  }
}

// Get current session
export async function getSession() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value

  if (!sessionToken) return null

  try {
    const supabase = await createAuthClient()

    if (!supabase) return null

    const { data: { user }, error } = await supabase.auth.getUser(sessionToken)

    if (error || !user) return null

    // Check if user is an allowed admin
    if (!ADMIN_EMAILS.includes(user.email?.toLowerCase() || '')) {
      return null
    }

    return {
      user: {
        id: user.id,
        email: user.email!,
        name: user.user_metadata?.name || user.email?.split('@')[0] || 'Admin',
        role: 'admin',
      },
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    }
  } catch {
    return null
  }
}

// Create admin user using Supabase Auth
export async function createAdminUser(email: string, password: string, name?: string) {
  const supabase = await createAuthClient()

  if (!supabase) {
    throw new Error('Supabase not configured')
  }

  // Check if email is in allowed admin list
  if (!ADMIN_EMAILS.includes(email.toLowerCase())) {
    throw new Error('Email not authorized as admin')
  }

  // Create the user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name || email.split('@')[0],
        role: 'admin',
      },
    },
  })

  if (error) {
    throw new Error(error.message || 'Failed to create admin user')
  }

  if (!data.user) {
    throw new Error('Failed to create user')
  }

  return {
    id: data.user.id,
    email: data.user.email!,
    name: data.user.user_metadata?.name || name || email.split('@')[0],
    role: 'admin',
  }
}

// Logout
export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE_NAME)
}

// Session cookie name export for API routes
export { SESSION_COOKIE_NAME }
