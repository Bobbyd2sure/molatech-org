"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Camera, Heart, Users, Award, Calendar, MapPin, Eye, Download } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function FeaturedGallery() {
  const { isLoading } = useLoading()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: "all", name: "All Photos", icon: Camera, count: 24 },
    { id: "events", name: "Events", icon: Calendar, count: 8 },
    { id: "students", name: "Students", icon: Users, count: 10 },
    { id: "ceremonies", name: "Ceremonies", icon: Award, count: 6 },
  ]

  const featuredImages = [
    {
      id: 1,
      title: "JAMB Form Distribution Ceremony",
      category: "events",
      description: "Annual ceremony distributing 200 free JAMB forms to deserving students in Lagos",
      image: "/placeholder.svg?height=400&width=600&text=JAMB+Distribution+Lagos",
      date: "March 15, 2024",
      location: "Lagos, Nigeria",
      views: 1247,
      featured: true,
      tags: ["JAMB", "Education", "Support"],
    },
    {
      id: 2,
      title: "Student Success Celebration",
      category: "ceremonies",
      description: "Celebrating 50 students who gained university admission through our support",
      image: "/placeholder.svg?height=400&width=600&text=Success+Celebration",
      date: "February 28, 2024",
      location: "Abuja, Nigeria",
      views: 892,
      featured: true,
      tags: ["Success", "Celebration", "Achievement"],
    },
    {
      id: 3,
      title: "Mentorship Workshop Session",
      category: "students",
      description: "Interactive mentorship workshop with 30 aspiring university students",
      image: "/placeholder.svg?height=400&width=600&text=Mentorship+Workshop",
      date: "February 20, 2024",
      location: "Port Harcourt, Nigeria",
      views: 654,
      featured: false,
      tags: ["Mentorship", "Workshop", "Guidance"],
    },
    {
      id: 4,
      title: "Community Outreach Program",
      category: "events",
      description: "Educational awareness program in rural communities",
      image: "/placeholder.svg?height=400&width=600&text=Community+Outreach",
      date: "February 10, 2024",
      location: "Kano, Nigeria",
      views: 743,
      featured: false,
      tags: ["Community", "Outreach", "Rural"],
    },
    {
      id: 5,
      title: "Scholarship Award Ceremony",
      category: "ceremonies",
      description: "Presenting scholarships to 25 outstanding students",
      image: "/placeholder.svg?height=400&width=600&text=Scholarship+Awards",
      date: "January 25, 2024",
      location: "Ibadan, Nigeria",
      views: 1156,
      featured: true,
      tags: ["Scholarship", "Awards", "Excellence"],
    },
    {
      id: 6,
      title: "Study Group Formation",
      category: "students",
      description: "Organizing study groups for JAMB preparation",
      image: "/placeholder.svg?height=400&width=600&text=Study+Groups",
      date: "January 15, 2024",
      location: "Enugu, Nigeria",
      views: 567,
      featured: false,
      tags: ["Study", "Groups", "Preparation"],
    },
    {
      id: 7,
      title: "Educational Summit 2024",
      category: "events",
      description: "Annual educational leadership summit with 200+ attendees",
      image: "/placeholder.svg?height=400&width=600&text=Educational+Summit",
      date: "January 5, 2024",
      location: "Lagos, Nigeria",
      views: 1834,
      featured: true,
      tags: ["Summit", "Leadership", "Education"],
    },
    {
      id: 8,
      title: "Graduation Day Celebration",
      category: "ceremonies",
      description: "Celebrating graduates who received our support",
      image: "/placeholder.svg?height=400&width=600&text=Graduation+Day",
      date: "December 20, 2023",
      location: "Abuja, Nigeria",
      views: 2156,
      featured: true,
      tags: ["Graduation", "Success", "Achievement"],
    },
    {
      id: 9,
      title: "Peer Mentoring Session",
      category: "students",
      description: "Senior students mentoring junior colleagues",
      image: "/placeholder.svg?height=400&width=600&text=Peer+Mentoring",
      date: "December 10, 2023",
      location: "Port Harcourt, Nigeria",
      views: 445,
      featured: false,
      tags: ["Peer", "Mentoring", "Support"],
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? featuredImages : featuredImages.filter((img) => img.category === selectedCategory)

  return (
    <section
      ref={sectionRef}
      id="featured-gallery"
      className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-slate-50"
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
                <Camera className="h-4 w-4 mr-2" />
                Featured Collection
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Moments That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 animate-gradient">
                  Define Our Journey
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A curated collection of our most impactful moments, showcasing the transformation and growth of students
                across Nigeria through our educational support programs.
              </p>
            </>
          )}
        </div>

        {/* Enhanced Category Filter */}
        {isLoading ? (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-14 w-32" />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                      : "border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                  <Badge
                    variant="secondary"
                    className={`ml-2 ${
                      selectedCategory === category.id ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        )}

        {/* Enhanced Gallery Grid with Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {isLoading
            ? [...Array(9)].map((_, i) => (
                <Skeleton
                  key={i}
                  className={`w-full ${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-96" : "h-72"} break-inside-avoid`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                />
              ))
            : filteredImages.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card
                      className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden break-inside-avoid mb-8 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                      onMouseEnter={() => setHoveredImage(item.id)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          {item.featured && (
                            <div className="absolute top-4 left-4 z-10">
                              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white animate-pulse-glow">
                                Featured
                              </Badge>
                            </div>
                          )}

                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={600}
                            height={400}
                            className={`w-full h-auto object-cover transition-all duration-700 ${
                              hoveredImage === item.id ? "scale-110" : "scale-100"
                            }`}
                          />

                          {/* Gradient overlay */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                              hoveredImage === item.id ? "opacity-100" : "opacity-0"
                            }`}
                          ></div>

                          {/* Hover content */}
                          <div
                            className={`absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500 ${
                              hoveredImage === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                          >
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-200 mb-3">{item.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-xs">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{item.date}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1 text-xs">
                                <Eye className="h-3 w-3" />
                                <span>{item.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                              {item.date.split(",")[1]?.trim() || item.date}
                            </Badge>
                          </div>
                          <p className="text-slate-600 text-sm mb-3">{item.description}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="text-xs border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-slate-500">
                              <MapPin className="h-4 w-4" />
                              <span>{item.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-slate-500">
                              <Eye className="h-4 w-4" />
                              <span>{item.views} views</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    <div className="space-y-6">
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={800}
                          height={600}
                          className="w-full h-auto max-h-[60vh] object-cover rounded-lg"
                        />
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                          {item.featured && (
                            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">Featured</Badge>
                          )}
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-slate-200">
                          <div className="text-center">
                            <Calendar className="h-5 w-5 mx-auto mb-1 text-emerald-600" />
                            <div className="text-sm font-medium text-slate-900">{item.date}</div>
                          </div>
                          <div className="text-center">
                            <MapPin className="h-5 w-5 mx-auto mb-1 text-emerald-600" />
                            <div className="text-sm font-medium text-slate-900">{item.location}</div>
                          </div>
                          <div className="text-center">
                            <Eye className="h-5 w-5 mx-auto mb-1 text-emerald-600" />
                            <div className="text-sm font-medium text-slate-900">{item.views} views</div>
                          </div>
                          <div className="text-center">
                            <Heart className="h-5 w-5 mx-auto mb-1 text-emerald-600" />
                            <div className="text-sm font-medium text-slate-900">
                              {Math.floor(item.views * 0.1)} likes
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} className="bg-emerald-100 text-emerald-800 border-emerald-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
        </div>

        {/* Load More Button */}
        {!isLoading && (
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Load More Photos
              <Camera className="h-5 w-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
