"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { BookOpen, PenTool, Calendar, ArrowDown, Lightbulb } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function BlogHero() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [currentArticle, setCurrentArticle] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % featuredArticles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const featuredArticles = [
    {
      src: "/placeholder.svg?height=600&width=800&text=Educational+Mentorship+Article",
      title: "The Power of Educational Mentorship",
      description: "Transforming lives through personalized guidance",
      category: "Education",
      date: "March 2024",
      readTime: "5 min read",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Breaking+Barriers+Article",
      title: "Breaking Educational Barriers",
      description: "Making higher education accessible to all",
      category: "Access",
      date: "February 2024",
      readTime: "7 min read",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Success+Stories+Article",
      title: "Student Success Stories",
      description: "Celebrating achievements and milestones",
      category: "Success Stories",
      date: "January 2024",
      readTime: "4 min read",
    },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      {/* Animated Particle Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Content Side */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              {/* Animated badges */}
              {isLoading ? (
                <div className="flex flex-wrap items-center gap-3">
                  <Skeleton className="h-10 w-40" />
                  <Skeleton className="h-10 w-48" />
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-300 border-emerald-400/30 px-4 py-2 backdrop-blur-sm animate-pulse-glow">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Educational Insights
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 text-teal-300 border-teal-400/30 px-4 py-2 backdrop-blur-sm">
                    <PenTool className="h-4 w-4 mr-2" />
                    50+ Articles Published
                  </Badge>
                </div>
              )}

              {/* Main headline with gradient animation */}
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-16 w-32 mb-2" />
                  <Skeleton className="h-24 w-64 mb-2" />
                  <Skeleton className="h-12 w-80" />
                </div>
              ) : (
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                    <span className="text-white">Educational</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
                      INSIGHTS
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                      & STORIES
                    </span>
                  </h1>

                  <div className="text-2xl md:text-3xl text-emerald-200 font-semibold animate-fadeInUp">
                    Sharing Knowledge That Transforms Lives
                  </div>
                </div>
              )}

              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                  <Skeleton className="h-6 w-4/6" />
                </div>
              ) : (
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl animate-fadeInUp delay-300">
                  Dive into thoughtful articles about education, mentorship, and community building. Discover insights
                  from real experiences and learn how we can create positive change together.
                </p>
              )}
            </div>

            {/* CTA Buttons with hover effects */}
            {isLoading ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-14 w-48" />
                <Skeleton className="h-14 w-48" />
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-500">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25"
                  onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Articles
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
                  onClick={() => document.getElementById("featured-posts")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Latest Insights
                </Button>
              </div>
            )}
          </div>

          {/* Interactive Article Showcase */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

              {/* Main article container with 3D effect */}
              {isLoading ? (
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20">
                  <Skeleton className="w-full h-[500px] rounded-2xl" />
                </div>
              ) : (
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={featuredArticles[currentArticle].src || "/placeholder.svg"}
                      alt={featuredArticles[currentArticle].title}
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover transition-all duration-1000"
                    />

                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Article info overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-emerald-500/80 text-white text-xs">
                            {featuredArticles[currentArticle].category}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold">{featuredArticles[currentArticle].title}</h3>
                        <p className="text-emerald-200">{featuredArticles[currentArticle].description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{featuredArticles[currentArticle].date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <BookOpen className="h-4 w-4" />
                              <span>{featuredArticles[currentArticle].readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Article navigation dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {featuredArticles.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentArticle(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentArticle ? "bg-emerald-400 w-8" : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Floating elements */}
              {!isLoading && (
                <>
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl animate-bounce">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full shadow-2xl animate-bounce delay-1000">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator with animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full shadow-lg border border-emerald-300/30 cursor-pointer hover:bg-white/30 transition-all duration-300">
            <ArrowDown className="h-6 w-6 text-emerald-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
