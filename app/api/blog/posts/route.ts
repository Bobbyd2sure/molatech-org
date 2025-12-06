import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    if (!supabase) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select(`
        id,
        slug,
        title,
        excerpt,
        cover_image,
        author_name,
        author_role,
        tags,
        reading_time,
        featured,
        published_at,
        views,
        blog_categories (
          id,
          slug,
          name
        )
      `)
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
