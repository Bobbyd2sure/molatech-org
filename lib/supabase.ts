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

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: ContactSubmission
        Insert: Omit<ContactSubmission, 'id' | 'created_at'>
        Update: Partial<ContactSubmission>
      }
    }
  }
}

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables are not set. Database features will be disabled.'
  )
}

// Create Supabase client
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false, // For server-side usage
      },
    })
  : null

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
