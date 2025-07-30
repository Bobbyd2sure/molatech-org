"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, Grid, List, Shuffle, Download, Share2, Heart, Eye } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function InteractiveGallery() {
  const { isLoading } = useLoading()
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("date")
  const [isVisible, setIsVisible] = useState(false)
  const [likedImages, setLikedImages] = useState<number[]>([])
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

  const galleryImages = [
    {
      id: 1,
      title: "JAMB Registration Support",
      description: "Helping students complete their JAMB registration process",
      image: "/placeholder.svg?height=300&width=400&text=JAMB+Registration",
      category: "Support",
      date: "2024-03-15",
      views: 1247,
      likes: 89,
      tags: ["JAMB", "Registration", "Support"],
    },
    {
      id: 2,
      title: "Mentorship Circle",
      description: "Group mentorship session with aspiring students",
      image: "/placeholder.svg?height=300&width=400&text=Mentorship+Circle",
      category: "Mentorship",
      date: "2024-03-10",
      views: 892,
      likes: 67,
      tags: ["Mentorship", "Group", "Students"],
    },
    {
      id: 3,
      title: "Success Celebration",
      description: "Celebrating students who gained university admission",
      image: "/placeholder.svg?height=300&width=400&text=Success+Celebration",
      category: "Achievement",
      date: "2024-03-05",
      views: 1456,
      likes: 123,
      tags: ["Success", "Celebration", "University"],
    },
    {
      id: 4,
      title: "Study Materials Distribution",
      description: "Providing free study materials to students",
      image: "/placeholder.svg?height=300&width=400&text=Study+Materials",
      category: "Resources",
      date: "2024-02-28",
      views: 743,
      likes: 54,
      tags: ["Materials", "Study", "Free"],
    },
    {
      id: 5,
      title: "Community Workshop",
      description: "Educational workshop in rural community",
      image: "/placeholder.svg?height=300&width=400&text=Community+Workshop",
      category: "Outreach",
      date: "2024-02-20",
      views: 634,
      likes: 41,
      tags: ["Community", "Workshop", "Rural"],
    },
    {
      id: 6,
      title: "Scholarship Award Ceremony",
      description: "Presenting scholarships to deserving students",
      image: "/placeholder.svg?height=300&width=400&text=Scholarship+Awards",
      category: "Achievement",
      date: "2024-02-15",
      views: 1834,
      likes: 156,
      tags: ["Scholarship", "Awards", "Students"],
    },
    {
      id: 7,
      title: "Peer Learning Session",
      description: "Students learning from each other",
      image: "/placeholder.svg?height=300&width=400&text=Peer+Learning",
      category: "Education",
      date: "2024-02-10",
      views: 567,
      likes: 38,
      tags: ["Peer", "Learning", "Collaboration"],
    },
    {
      id: 8,
      title: "Career Guidance Workshop",
      description: "Professional development and career guidance",
      image: "/placeholder.svg?height=300&width=400&text=Career+Guidance",
      category: "Development",
      date: "2024-02-05",
      views: 923,
      likes: 72,
      tags: ["Career", "Guidance", "Professional"],
    },
    {
      id: 9,
      title: "Digital Literacy Training",
      description: "Teaching essential digital skills to students",
      image: "/placeholder.svg?height=300&width=400&text=Digital+Training",
      category: "Technology",
      date: "2024-01-30",
      views: 445,
      likes: 29,
      tags: ["Digital", "Technology", "Skills"],
    },
  ]

  const filteredImages = galleryImages
    .filter(
      (image) =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "views":
          return b.views - a.views
        case "likes":
          return b.likes - a.likes
        default:
          return 0
      }
    })

  const toggleLike = (imageId: number) => {
    setLikedImages((prev) => (prev.includes(imageId) ? prev.filter((id) => id !== imageId) : [...prev, imageId]))
  }

  const shuffleImages = () => {
    // This would trigger a re-render with shuffled order
    setSortBy("shuffle")
  }

  return (
    <section
      ref={sectionRef}
      id="interactive-gallery"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20"
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
                <Grid className="h-4 w-4 mr-2" />
                Interactive Gallery
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Explore &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 animate-gradient">
                  Discover
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Dive deeper into our visual collection with advanced search, filtering, and interactive features. Find
                the stories that resonate with you.
              </p>
            </>
          )}
        </div>

        {/* Search and Filter Controls */}
        {!isLoading && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-12 border border-emerald-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search photos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-emerald-200 rounded-md focus:border-emerald-500 focus:ring-emerald-500 bg-white"
              >
                <option value="date">Sort by Date</option>
                <option value="views">Sort by Views</option>
                <option value="likes">Sort by Likes</option>
              </select>

              {/* View Mode */}
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={shuffleImages} className="hover:bg-emerald-50">
                  <Shuffle className="h-4 w-4" />
                </Button>
              </div>

              {/* Results Count */}
              <div className="text-sm text-slate-600 text-center md:text-right">
                {filteredImages.length} of {galleryImages.length} photos
              </div>
            </div>
          </div>
        )}

        {/* Gallery Content */}
        {isLoading ? (
          <div
            className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-8`}
          >
            {[...Array(9)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        ) : (
          <div
            className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-8`}
          >
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className={`group border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${viewMode === "list" ? "flex flex-row" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
                  <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : ""}`}>
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      width={400}
                      height={300}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        viewMode === "list" ? "h-full" : "h-64"
                      }`}
                    />

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                        onClick={() => toggleLike(image.id)}
                      >
                        <Heart
                          className={`h-4 w-4 ${likedImages.includes(image.id) ? "fill-red-500 text-red-500" : ""}`}
                        />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-600/90 text-white">{image.category}</Badge>
                    </div>
                  </div>

                  <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {image.title}
                      </h3>
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        {new Date(image.date).toLocaleDateString()}
                      </Badge>
                    </div>

                    <p className="text-slate-600 text-sm mb-4">{image.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {image.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs border-emerald-200 text-emerald-600 hover:bg-emerald-50 cursor-pointer"
                          onClick={() => setSearchTerm(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{image.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart
                            className={`h-4 w-4 ${likedImages.includes(image.id) ? "fill-red-500 text-red-500" : ""}`}
                          />
                          <span>{image.likes + (likedImages.includes(image.id) ? 1 : 0)}</span>
                        </div>
                      </div>
                      <div className="text-emerald-600 font-medium">{image.category}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No photos found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search terms or filters</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSortBy("date")
              }}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
