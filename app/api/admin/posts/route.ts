import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/admin-auth'
import { createServerSupabaseClient } from '@/lib/supabase'

// GET all posts (admin)
export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createServerSupabaseClient()
    if (!supabase) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        blog_categories (
          id,
          slug,
          name
        )
      `)
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// CREATE new post
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createServerSupabaseClient()
    if (!supabase) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    const body = await request.json()
    const {
      title,
      slug,
      excerpt,
      content,
      cover_image,
      category_id,
      tags,
      reading_time,
      status,
      featured,
      published_at,
    } = body

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Title, slug, and content are required' },
        { status: 400 }
      )
    }

    const { data: post, error } = await supabase
      .from('blog_posts')
      .insert({
        title,
        slug,
        excerpt,
        content,
        cover_image,
        category_id,
        tags: tags || [],
        reading_time,
        status: status || 'draft',
        featured: featured || false,
        published_at: status === 'published' ? (published_at || new Date().toISOString()) : null,
        author_name: session.user.name || 'MolaTech Team',
      })
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 400 })
      }
      throw error
    }

    return NextResponse.json({ post }, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
