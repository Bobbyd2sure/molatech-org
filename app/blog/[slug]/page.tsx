import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { createServerSupabaseClient } from "@/lib/supabase"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowLeft, User, Share2 } from "lucide-react"
import type { BlogPost, BlogCategory } from "@/lib/supabase-types"

interface PostWithCategory extends BlogPost {
  blog_categories?: BlogCategory
}

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string): Promise<PostWithCategory | null> {
  const supabase = createServerSupabaseClient()
  if (!supabase) return null

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select(`
      *,
      blog_categories (
        id,
        slug,
        name
      )
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .single()

  if (error || !post) return null

  // Increment view count
  await supabase
    .from("blog_posts")
    .update({ views: (post.views || 0) + 1 })
    .eq("id", post.id)

  return post as PostWithCategory
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on the MolaTech blog.`,
    openGraph: {
      title: `${post.title} | MolaTech Blog`,
      description: post.excerpt || `Read ${post.title} on the MolaTech blog.`,
      type: "article",
      publishedTime: post.published_at || undefined,
      authors: [post.author_name],
      images: post.cover_image ? [post.cover_image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || undefined,
      images: post.cover_image ? [post.cover_image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen">
      {/* Header */}
      <header className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6 max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="space-y-4">
            {post.blog_categories && (
              <Link href={`/blog/category/${post.blog_categories.slug}`}>
                <Badge
                  variant="secondary"
                  className="hover:bg-purple-100 dark:hover:bg-purple-900/30"
                >
                  {post.blog_categories.name}
                </Badge>
              </Link>
            )}

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4 border-t">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>
                  {post.author_name}
                  {post.author_role && ` - ${post.author_role}`}
                </span>
              </div>
              {post.published_at && (
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}
              {post.reading_time && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.reading_time}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {post.cover_image && (
        <div className="container px-4 md:px-6 max-w-4xl -mt-8">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="container px-4 md:px-6 max-w-4xl py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Simple markdown-like rendering */}
          {post.content.split("\n").map((line, index) => {
            // Handle headers
            if (line.startsWith("# ")) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                  {line.slice(2)}
                </h1>
              )
            }
            if (line.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                  {line.slice(3)}
                </h2>
              )
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                  {line.slice(4)}
                </h3>
              )
            }
            // Handle list items
            if (line.startsWith("- ")) {
              return (
                <li key={index} className="ml-4">
                  {line.slice(2)}
                </li>
              )
            }
            // Handle empty lines as paragraph breaks
            if (line.trim() === "") {
              return <br key={index} />
            }
            // Regular paragraphs
            return (
              <p key={index} className="mb-4">
                {line}
              </p>
            )
          })}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-sm font-medium mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Share */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Share2 className="h-4 w-4" />
              <span>Share this article</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.molatech.org/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.molatech.org/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="w-full py-12 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Ready to Start Your Project?
            </h2>
            <p className="max-w-[600px] text-white/90 md:text-lg">
              Let's turn your ideas into reality with our expert team.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/start">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
