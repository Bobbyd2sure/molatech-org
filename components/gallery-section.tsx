"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Camera, Users, Heart, Award, Calendar } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function GallerySection() {
  const { isLoading } = useLoading()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Photos", icon: Camera },
    { id: "events", name: "Events", icon: Calendar },
    { id: "students", name: "Students", icon: Users },
    { id: "ceremonies", name: "Ceremonies", icon: Award },
    { id: "community", name: "Community", icon: Heart },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "JAMB Form Distribution Event",
      category: "events",
      description: "Annual JAMB form distribution ceremony in Lagos",
      image: "/placeholder.svg?height=400&width=600&text=JAMB+Distribution+Event",
      date: "March 2024",
    },
    {
      id: 2,
      title: "Student Mentorship Session",
      category: "students",
      description: "One-on-one mentoring with aspiring university students",
      image: "/placeholder.svg?height=400&width=600&text=Mentorship+Session",
      date: "February 2024",
    },
    {
      id: 3,
      title: "Graduation Ceremony",
      category: "ceremonies",
      description: "Celebrating successful students at university graduation",
      image: "/placeholder.svg?height=400&width=600&text=Graduation+Ceremony",
      date: "January 2024",
    },
    {
      id: 4,
      title: "Community Outreach Program",
      category: "community",
      description: "Educational awareness program in rural communities",
      image: "/placeholder.svg?height=400&width=600&text=Community+Outreach",
      date: "December 2023",
    },
    {
      id: 5,
      title: "Scholarship Award Ceremony",
      category: "ceremonies",
      description: "Presenting scholarships to outstanding students",
      image: "/placeholder.svg?height=400&width=600&text=Scholarship+Awards",
      date: "November 2023",
    },
    {
      id: 6,
      title: "Study Group Workshop",
      category: "students",
      description: "Interactive learning session with exam preparation",
      image: "/placeholder.svg?height=400&width=600&text=Study+Workshop",
      date: "October 2023",
    },
    {
      id: 7,
      title: "Educational Summit",
      category: "events",
      description: "Annual educational leadership summit",
      image: "/placeholder.svg?height=400&width=600&text=Educational+Summit",
      date: "September 2023",
    },
    {
      id: 8,
      title: "Community Partnership Meeting",
      category: "community",
      description: "Building partnerships with local organizations",
      image: "/placeholder.svg?height=400&width=600&text=Partnership+Meeting",
      date: "August 2023",
    },
    {
      id: 9,
      title: "Student Success Stories",
      category: "students",
      description: "Celebrating achievements of supported students",
      image: "/placeholder.svg?height=400&width=600&text=Success+Stories",
      date: "July 2023",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20">
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
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4">
                <Camera className="h-4 w-4 mr-2" />
                Photo Gallery
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Moments That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Matter
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Capturing the journey of transformation, celebration, and community building through education and
                mentorship.
              </p>
            </>
          )}
        </div>

        {/* Category Filter */}
        {isLoading ? (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-32" />
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
                  className={`px-6 py-3 rounded-full transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                      : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(9)].map((_, i) => (
                <Skeleton key={i} className="h-80 w-full" style={{ transitionDelay: `${i * 100}ms` }} />
              ))
            : filteredItems.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-200">{item.description}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                              {item.date}
                            </Badge>
                          </div>
                          <p className="text-slate-600 text-sm">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="space-y-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={800}
                        height={600}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">{item.date}</Badge>
                        </div>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
        </div>

        {/* Load More Button */}
        {!isLoading && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
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
