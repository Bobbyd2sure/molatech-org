import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/admin-auth'
import { createServerSupabaseClient } from '@/lib/supabase'

// GET single post
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const supabase = createServerSupabaseClient()
    if (!supabase) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    const { data: post, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        blog_categories (
          id,
          slug,
          name
        )
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

// UPDATE post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
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

    // Build update object
    const updateData: Record<string, unknown> = {}
    if (title !== undefined) updateData.title = title
    if (slug !== undefined) updateData.slug = slug
    if (excerpt !== undefined) updateData.excerpt = excerpt
    if (content !== undefined) updateData.content = content
    if (cover_image !== undefined) updateData.cover_image = cover_image
    if (category_id !== undefined) updateData.category_id = category_id
    if (tags !== undefined) updateData.tags = tags
    if (reading_time !== undefined) updateData.reading_time = reading_time
    if (status !== undefined) updateData.status = status
    if (featured !== undefined) updateData.featured = featured

    // Handle published_at
    if (status === 'published' && published_at !== undefined) {
      updateData.published_at = published_at || new Date().toISOString()
    } else if (status === 'published') {
      // Check if already has published_at
      const { data: existingPost } = await supabase
        .from('blog_posts')
        .select('published_at')
        .eq('id', id)
        .single()

      if (!existingPost?.published_at) {
        updateData.published_at = new Date().toISOString()
      }
    }

    const { data: post, error } = await supabase
      .from('blog_posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 400 })
      }
      throw error
    }

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

// DELETE post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only admin can delete
    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Only admins can delete posts' }, { status: 403 })
    }

    const { id } = await params
    const supabase = createServerSupabaseClient()
    if (!supabase) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
