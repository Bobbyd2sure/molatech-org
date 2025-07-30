"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Calendar, Clock, ArrowRight, Search, Filter, Tag } from "lucide-react"
import { useLoading } from "@/components/loading-provider"
import { useState, useEffect } from "react"

export function BlogSection() {
  const { isLoading } = useLoading()
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [animateCards, setAnimateCards] = useState<boolean>(false)
  const [hoveredPostId, setHoveredPostId] = useState<number | null>(null)

  const categories = ["All", "Education", "Access", "Success Stories", "Community", "Technology"]

  const blogPosts = [
    {
      id: 1,
      title: "The Power of Educational Mentorship in Nigeria",
      excerpt:
        "Exploring how personalized mentorship can transform the educational journey of Nigerian students and create lasting impact in communities.",
      category: "Education",
      readTime: "5 min read",
      date: "March 15, 2024",
      image: "/placeholder.svg?height=300&width=500&text=Educational+Mentorship",
      featured: true,
    },
    {
      id: 2,
      title: "Breaking Barriers: Making Higher Education Accessible",
      excerpt:
        "Discussing the challenges facing students in accessing higher education and practical solutions to overcome financial and social barriers.",
      category: "Access",
      readTime: "7 min read",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=300&width=500&text=Higher+Education+Access",
      featured: false,
    },
    {
      id: 3,
      title: "Success Stories: From JAMB Forms to University Graduation",
      excerpt:
        "Celebrating the achievements of students who received support and went on to excel in their academic and professional careers.",
      category: "Success Stories",
      readTime: "4 min read",
      date: "March 5, 2024",
      image: "/placeholder.svg?height=300&width=500&text=Success+Stories",
      featured: false,
    },
    {
      id: 4,
      title: "Building Sustainable Educational Support Systems",
      excerpt:
        "How communities can create lasting educational support networks that continue to benefit students for generations to come.",
      category: "Community",
      readTime: "6 min read",
      date: "February 28, 2024",
      image: "/placeholder.svg?height=300&width=500&text=Support+Systems",
      featured: false,
    },
    {
      id: 5,
      title: "The Role of Technology in Modern Education",
      excerpt:
        "Examining how digital tools and platforms can enhance learning experiences and make education more accessible to all students.",
      category: "Technology",
      readTime: "8 min read",
      date: "February 20, 2024",
      image: "/placeholder.svg?height=300&width=500&text=Education+Technology",
      featured: false,
    },
    {
      id: 6,
      title: "Empowering Rural Communities Through Education",
      excerpt:
        "Strategies for bringing quality educational opportunities to underserved rural communities and creating pathways to success.",
      category: "Community",
      readTime: "5 min read",
      date: "February 15, 2024",
      image: "/placeholder.svg?height=300&width=500&text=Rural+Education",
      featured: false,
    },
  ]

  useEffect(() => {
    if (!isLoading) {
      // Trigger animation after a short delay
      const timer = setTimeout(() => {
        setAnimateCards(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  const featuredPost = blogPosts.find((post) => post.featured)

  const filteredPosts = blogPosts
    .filter((post) => !post.featured)
    .filter(
      (post) =>
        (activeCategory === "All" || post.category === activeCategory) &&
        (searchQuery === "" ||
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())),
    )

  // Particle background component
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-500/10 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="blog" className="py-20 bg-white relative overflow-hidden">
      <ParticleBackground />

      {/* Decorative gradient background */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-50 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-gradient-radial from-teal-50 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-4">
              <Skeleton className="h-10 w-40 mx-auto" />
              <Skeleton className="h-16 w-96 mx-auto" />
              <Skeleton className="h-8 w-[500px] max-w-full mx-auto" />
            </div>
          ) : (
            <>
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4 animate-float">
                <BookOpen className="h-4 w-4 mr-2" />
                Latest Insights
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 perspective-1000">
                <span className="inline-block transform transition-all duration-700 hover:rotateX-5">Educational</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-300% animate-gradient">
                  Blog & Insights
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto transform transition-all duration-500">
                Sharing thoughts, experiences, and insights on education, mentorship, and community building to inspire
                positive change.
              </p>
            </>
          )}
        </div>

        {/* Search and Filter */}
        {!isLoading && (
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white rounded-xl shadow-lg backdrop-blur-sm bg-opacity-80 border border-emerald-100 animate-pulse-glow">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <Filter size={18} className="text-slate-500 flex-shrink-0" />
                {categories.map((category) => (
                  <Badge
                    key={category}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Featured Post */}
        {isLoading ? (
          <div className="mb-16">
            <Skeleton className="h-96 w-full" />
          </div>
        ) : (
          featuredPost && (
            <Card
              className="mb-16 border-0 shadow-xl overflow-hidden group perspective-1000"
              style={{
                backgroundImage: "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              onMouseEnter={() => setHoveredPostId(featuredPost.id)}
              onMouseLeave={() => setHoveredPostId(null)}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white animate-pulse-glow">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4 transform transition-all duration-500 group-hover:translate-x-2">
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-emerald-200">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10 border-2 border-emerald-200 transition-all duration-300 group-hover:border-emerald-400">
                          <AvatarImage src="/images/kenny-hero.jpg" alt="Kenny Kunma" />
                          <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">KK</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-slate-900">Kenny Kunma</div>
                          <div className="text-sm text-slate-600">Educational Leader</div>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          )
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-96 w-full" style={{ transitionDelay: `${i * 100}ms` }} />
              ))
            : filteredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className={`group border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform perspective-1000 bg-white overflow-hidden ${
                    animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform:
                      hoveredPostId === post.id ? "translateY(-8px) rotateX(2deg)" : "translateY(0) rotateX(0)",
                  }}
                  onMouseEnter={() => setHoveredPostId(post.id)}
                  onMouseLeave={() => setHoveredPostId(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors duration-300"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 relative">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="space-y-4 relative">
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8 border border-emerald-200 group-hover:border-emerald-300 transition-all duration-300">
                            <AvatarImage src="/images/kenny-hero.jpg" alt="Kenny Kunma" />
                            <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-semibold">
                              KK
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium text-slate-700">Kenny Kunma</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-2 rounded-full transition-all duration-300 transform group-hover:scale-110"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>

        {/* Empty state when no posts match filters */}
        {!isLoading && filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-lg border border-slate-100 mt-8">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Tag className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No posts found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
            <Button
              variant="outline"
              onClick={() => {
                setActiveCategory("All")
                setSearchQuery("")
              }}
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* View All Posts Button */}
        {!isLoading && filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View All Posts
              <BookOpen className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Newsletter signup */}
        {!isLoading && (
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden">
              {/* Background with animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 bg-300% animate-gradient"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-emerald-300/20 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-teal-300/20 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Subscribe to our newsletter</h3>
                <p className="text-slate-600 mb-6">
                  Get the latest educational insights and updates delivered directly to your inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  />
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </Button>
                </div>

                <p className="text-xs text-slate-500 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
