import { createClient } from '@supabase/supabase-js'

// Type definitions for your database tables
export interface ContactSubmission {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  subject?: string
  message: string
  ip_address?: string
  user_agent?: string
  created_at?: string
  status?: 'new' | 'read' | 'replied' | 'archived'
}

export interface Lead {
  id?: string
  phone: string
  source: string
  created_at?: string
}

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: ContactSubmission
        Insert: Omit<ContactSubmission, 'id' | 'created_at'>
        Update: Partial<ContactSubmission>
      }
      leads: {
        Row: Lead
        Insert: Omit<Lead, 'id' | 'created_at'>
        Update: Partial<Lead>
      }
    }
  }
}

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

// Deprecated: Use getSupabaseClient() instead
// Kept for backward compatibility but may be null during build
export const supabase = null as ReturnType<typeof createClient<Database>> | null

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
  return !!(supabaseUrl && supabaseAnonKey)
}
