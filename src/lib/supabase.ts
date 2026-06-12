import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

// Re-export Database type and convenience row-type aliases
export type { Database }

/** Row type for contact_submissions table */
export type ContactSubmission =
  Database['public']['Tables']['contact_submissions']['Row']

/** Row type for blog_posts table */
export type BlogPost = Database['public']['Tables']['blog_posts']['Row']

/** Row type for blog_categories table */
export type BlogCategory = Database['public']['Tables']['blog_categories']['Row']

/** Row type for admin_users table */
export type AdminUser = Database['public']['Tables']['admin_users']['Row']

/** Row type for admin_sessions table */
export type AdminSession = Database['public']['Tables']['admin_sessions']['Row']

// Cached client instance
let _supabaseClient: ReturnType<typeof createClient<Database>> | null | undefined = undefined

// Get Supabase client with lazy initialization
// This prevents build-time errors by only creating the client when actually needed
export function getSupabaseClient() {
  // Return cached instance if available
  if (_supabaseClient !== undefined) {
    return _supabaseClient
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== 'undefined' || process.env.NODE_ENV === 'development') {
      console.warn('Supabase environment variables are not set. Database features will be disabled.')
    }
    _supabaseClient = null
    return null
  }

  try {
    _supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false, // For server-side usage
      },
    })
    return _supabaseClient
  } catch (error) {
    console.warn('Failed to create Supabase client:', error)
    _supabaseClient = null
    return null
  }
}

// Server-side client with service role key (for admin operations)
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Supabase service role key not configured')
    return null
  }

  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

// Helper function to check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}
