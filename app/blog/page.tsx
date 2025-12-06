import type { Metadata } from "next"
import Link from "next/link"
import { createServerSupabaseClient } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowRight, Tag } from "lucide-react"
import type { BlogPost, BlogCategory } from "@/lib/supabase-types"

export const metadata: Metadata = {
  title: "Blog - Tech Insights & Industry News",
  description:
    "Stay updated with the latest technology trends, web development tips, cybersecurity insights, and digital transformation strategies from the MolaTech team.",
  openGraph: {
    title: "Blog - Tech Insights & Industry News | MolaTech",
    description:
      "Stay updated with the latest technology trends and insights from MolaTech.",
  },
}

interface PostWithCategory extends BlogPost {
  blog_categories?: BlogCategory
}

async function getPosts() {
  const supabase = createServerSupabaseClient()
  if (!supabase) return { posts: [], categories: [] }

  const { data: posts } = await supabase
    .from("blog_posts")
    .select(`
      *,
      blog_categories (
        id,
        slug,
        name
      )
    `)
    .eq("status", "published")
    .order("published_at", { ascending: false })

  const { data: categories } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name")

  return {
    posts: (posts || []) as PostWithCategory[],
    categories: categories || [],
  }
}

export default async function BlogPage() {
  const { posts, categories } = await getPosts()
  const featuredPosts = posts.filter((post) => post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Tech Insights & Industry News
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Expert perspectives on technology, web development, cybersecurity, and digital
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="w-full py-12 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.slice(0, 2).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {post.blog_categories && (
                          <Badge variant="secondary">{post.blog_categories.name}</Badge>
                        )}
                        <Badge
                          variant="outline"
                          className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200"
                        >
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            {post.published_at &&
                              new Date(post.published_at).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                          </span>
                          {post.reading_time && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.reading_time}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link key={category.id} href={`/blog/category/${category.slug}`}>
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-purple-100 dark:hover:bg-purple-900/30 cursor-pointer transition-colors"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {category.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      {post.blog_categories && (
                        <Badge variant="secondary" className="w-fit mb-2">
                          {post.blog_categories.name}
                        </Badge>
                      )}
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          {post.published_at &&
                            new Date(post.published_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                        </div>
                        {post.reading_time && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.reading_time}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Let's discuss how our expertise can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                <Link href="/start">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
