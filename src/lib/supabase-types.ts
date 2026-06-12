// Supabase Database Types

export interface BlogCategory {
  id: string
  slug: string
  name: string
  description: string | null
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string | null
  content: string
  cover_image: string | null
  category_id: string | null
  author_name: string
  author_role: string | null
  author_avatar: string | null
  tags: string[]
  reading_time: string | null
  status: 'draft' | 'published' | 'archived'
  featured: boolean
  published_at: string | null
  created_at: string
  updated_at: string
  views: number
}

export interface BlogPostWithCategory extends BlogPost {
  category_slug?: string
  category_name?: string
}

export interface AdminUser {
  id: string
  email: string
  password_hash: string
  name: string | null
  role: 'admin' | 'editor' | 'viewer'
  last_login: string | null
  created_at: string
  updated_at: string
}

export interface AdminSession {
  id: string
  user_id: string
  token: string
  expires_at: string
  created_at: string
}

export interface ContactSubmission {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string | null
  subject: string
  message: string
  ip_address: string | null
  user_agent: string | null
  status: 'new' | 'read' | 'replied' | 'archived'
  created_at: string
  updated_at: string
  notes: string | null
}

export interface BlogStats {
  total_posts: number
  published_posts: number
  draft_posts: number
  featured_posts: number
  total_views: number
}

export interface ContactStats {
  total_submissions: number
  new_submissions: number
  read_submissions: number
  replied_submissions: number
  last_7_days: number
  last_30_days: number
}
