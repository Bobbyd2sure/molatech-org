import { createServerSupabaseClient } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageSquare, Eye, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

async function getStats() {
  const supabase = createServerSupabaseClient()
  if (!supabase) return null

  // Get blog stats
  const { data: blogStats } = await supabase
    .from('blog_posts')
    .select('id, status, views')

  const totalPosts = blogStats?.length || 0
  const publishedPosts = blogStats?.filter(p => p.status === 'published').length || 0
  const totalViews = blogStats?.reduce((sum, p) => sum + (p.views || 0), 0) || 0

  // Get contact stats
  const { data: contactStats } = await supabase
    .from('contact_submissions')
    .select('id, status, created_at')

  const totalMessages = contactStats?.length || 0
  const newMessages = contactStats?.filter(c => c.status === 'new').length || 0

  // Recent posts
  const { data: recentPosts } = await supabase
    .from('blog_posts')
    .select('id, title, slug, status, created_at')
    .order('created_at', { ascending: false })
    .limit(5)

  // Recent messages
  const { data: recentMessages } = await supabase
    .from('contact_submissions')
    .select('id, first_name, last_name, email, subject, status, created_at')
    .order('created_at', { ascending: false })
    .limit(5)

  return {
    totalPosts,
    publishedPosts,
    totalViews,
    totalMessages,
    newMessages,
    recentPosts: recentPosts || [],
    recentMessages: recentMessages || [],
  }
}

export default async function AdminDashboardPage() {
  const stats = await getStats()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the MolaTech admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalPosts || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.publishedPosts || 0} published
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalViews || 0}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalMessages || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.newMessages || 0} unread
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12%</div>
            <p className="text-xs text-muted-foreground">From last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Posts</CardTitle>
                <CardDescription>Latest blog posts</CardDescription>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/admin/posts">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {stats?.recentPosts && stats.recentPosts.length > 0 ? (
              <div className="space-y-4">
                {stats.recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none truncate max-w-[200px]">
                        {post.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        post.status === 'published'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}
                    >
                      {post.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No posts yet</p>
            )}
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Latest contact submissions</CardDescription>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/admin/messages">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {stats?.recentMessages && stats.recentMessages.length > 0 ? (
              <div className="space-y-4">
                {stats.recentMessages.map((message) => (
                  <div key={message.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {message.first_name} {message.last_name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                        {message.subject}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        message.status === 'new'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                      }`}
                    >
                      {message.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No messages yet</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/admin/posts/new">Create New Post</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/admin/messages">Check Messages</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/" target="_blank">View Website</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
