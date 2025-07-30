"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Camera, ImageIcon, Users, Calendar, MapPin, TrendingUp, Eye, Heart } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function GalleryStats() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    totalPhotos: 0,
    totalViews: 0,
    eventsDocumented: 0,
    studentsPhotographed: 0,
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateStats()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateStats = () => {
    const duration = 2000
    const frameRate = 30
    const totalFrames = (duration / 1000) * frameRate
    let frame = 0

    const targets = {
      totalPhotos: 500,
      totalViews: 25000,
      eventsDocumented: 45,
      studentsPhotographed: 800,
    }

    const interval = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      if (frame <= totalFrames) {
        setAnimatedStats({
          totalPhotos: Math.round(progress * targets.totalPhotos),
          totalViews: Math.round(progress * targets.totalViews),
          eventsDocumented: Math.round(progress * targets.eventsDocumented),
          studentsPhotographed: Math.round(progress * targets.studentsPhotographed),
        })
      } else {
        setAnimatedStats(targets)
        clearInterval(interval)
      }
    }, 1000 / frameRate)
  }

  const stats = [
    {
      title: "Total Photos",
      value: animatedStats.totalPhotos,
      suffix: "+",
      description: "Moments captured across our journey",
      icon: Camera,
      color: "emerald",
      progress: 85,
      trend: "+15% this year",
    },
    {
      title: "Total Views",
      value: animatedStats.totalViews,
      suffix: "+",
      description: "People reached through our visual stories",
      icon: Eye,
      color: "blue",
      progress: 92,
      trend: "+25% this year",
    },
    {
      title: "Events Documented",
      value: animatedStats.eventsDocumented,
      suffix: "",
      description: "Educational events and ceremonies captured",
      icon: Calendar,
      color: "purple",
      progress: 78,
      trend: "+8 new events",
    },
    {
      title: "Students Photographed",
      value: animatedStats.studentsPhotographed,
      suffix: "+",
      description: "Individual students featured in our gallery",
      icon: Users,
      color: "rose",
      progress: 95,
      trend: "+200 this year",
    },
  ]

  const categories = [
    { name: "Educational Events", count: 180, percentage: 36, color: "emerald" },
    { name: "Student Activities", count: 150, percentage: 30, color: "blue" },
    { name: "Ceremonies", count: 100, percentage: 20, color: "purple" },
    { name: "Community Outreach", count: 70, percentage: 14, color: "rose" },
  ]

  const locations = [
    { name: "Lagos", photos: 120, color: "emerald" },
    { name: "Abuja", photos: 95, color: "blue" },
    { name: "Port Harcourt", photos: 80, color: "purple" },
    { name: "Kano", photos: 65, color: "rose" },
    { name: "Ibadan", photos: 50, color: "amber" },
    { name: "Others", photos: 90, color: "teal" },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-50 border-emerald-200",
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200",
      rose: "from-rose-500 to-rose-600 text-rose-600 bg-rose-50 border-rose-200",
      amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-50 border-amber-200",
      teal: "from-teal-500 to-teal-600 text-teal-600 bg-teal-50 border-teal-200",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section
      ref={sectionRef}
      id="gallery-stats"
      className="py-20 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-4">
              <Skeleton className="h-10 w-40 mx-auto" />
              <Skeleton className="h-16 w-96 mx-auto" />
              <Skeleton className="h-8 w-[500px] max-w-full mx-auto" />
            </div>
          ) : (
            <>
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4 animate-pulse-glow">
                <TrendingUp className="h-4 w-4 mr-2" />
                Gallery Analytics
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Visual
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 animate-gradient">
                  Impact in Numbers
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every photograph represents a moment of transformation, growth, and hope. Here's how our visual
                storytelling has reached and inspired thousands.
              </p>
            </>
          )}
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const colorClasses = getColorClasses(stat.color)
            return isLoading ? (
              <Skeleton key={index} className="h-64 w-full" style={{ transitionDelay: `${index * 150}ms` }} />
            ) : (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} mb-4 shadow-lg`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Number */}
                  <div className={`text-4xl font-bold ${colorClasses.split(" ")[2]} mb-2`}>
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-slate-900 mb-2">{stat.title}</div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4">{stat.description}</p>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <Progress value={isVisible ? stat.progress : 0} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">{stat.progress}% of goal</span>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${colorClasses.split(" ")[3]} ${colorClasses.split(" ")[4]}`}
                      >
                        {stat.trend}
                      </Badge>
                    </div>
                  </div>
                </CardContent>

                {/* Decorative gradient */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} opacity-10 rounded-bl-full`}
                ></div>
              </Card>
            )
          })}
        </div>

        {/* Category Breakdown */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <ImageIcon className="h-6 w-6 text-emerald-600 mr-3" />
                Photo Categories
              </h3>
              <div className="space-y-6">
                {isLoading
                  ? [...Array(4)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)
                  : categories.map((category, index) => {
                      const colorClasses = getColorClasses(category.color)
                      return (
                        <div
                          key={index}
                          className={`transition-all duration-700 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-4 h-4 rounded-full bg-gradient-to-r ${colorClasses.split(" ")[0]} ${
                                  colorClasses.split(" ")[1]
                                }`}
                              ></div>
                              <span className="font-medium text-slate-900">{category.name}</span>
                            </div>
                            <div className="text-slate-600 font-semibold">{category.count} photos</div>
                          </div>
                          <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClasses.split(" ")[0]} ${
                                colorClasses.split(" ")[1]
                              } rounded-full transition-all duration-1000`}
                              style={{ width: `${isVisible ? category.percentage : 0}%` }}
                            ></div>
                          </div>
                          <div className="text-right text-sm text-slate-500 mt-1">{category.percentage}%</div>
                        </div>
                      )
                    })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-emerald-600 mr-3" />
                Geographic Distribution
              </h3>
              <div className="space-y-6">
                {isLoading
                  ? [...Array(6)].map((_, i) => <Skeleton key={i} className="h-10 w-full" />)
                  : locations.map((location, index) => {
                      const colorClasses = getColorClasses(location.color)
                      const percentage = Math.round((location.photos / 500) * 100)
                      return (
                        <div
                          key={index}
                          className={`transition-all duration-700 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-4 h-4 rounded-full bg-gradient-to-r ${colorClasses.split(" ")[0]} ${
                                  colorClasses.split(" ")[1]
                                }`}
                              ></div>
                              <span className="font-medium text-slate-900">{location.name}</span>
                            </div>
                            <div className="text-slate-600 font-semibold">{location.photos} photos</div>
                          </div>
                          <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClasses.split(" ")[0]} ${
                                colorClasses.split(" ")[1]
                              } rounded-full transition-all duration-1000`}
                              style={{ width: `${isVisible ? percentage : 0}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Engagement Metrics */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Community Engagement</h3>
              <p className="text-emerald-100 max-w-2xl mx-auto">
                Our visual stories create meaningful connections and inspire action within our community.
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Average Views per Photo", value: "50", icon: Eye },
                  { label: "Social Media Shares", value: "2.5K", icon: Heart },
                  { label: "Story Engagement Rate", value: "85%", icon: TrendingUp },
                  { label: "Photo Downloads", value: "1.2K", icon: Camera },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-white/20 p-4 rounded-xl mb-3 inline-block">
                      <metric.icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-emerald-200 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
