"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, MapPin, TrendingUp, Play, Pause } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function PhotoTimeline() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [activeYear, setActiveYear] = useState(2024)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
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

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setActiveYear((prev) => {
          const years = Object.keys(timelineData)
            .map(Number)
            .sort((a, b) => b - a)
          const currentIndex = years.indexOf(prev)
          return years[(currentIndex + 1) % years.length]
        })
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay])

  const timelineData = {
    2024: {
      title: "Record-Breaking Year",
      description: "Our most impactful year yet with unprecedented reach and success",
      stats: { students: 200, events: 15, locations: 8 },
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&text=2024+JAMB+Distribution",
          title: "JAMB Distribution 2024",
          description: "Largest single-year distribution of 1,000 JAMB forms",
          date: "March 2024",
          location: "Lagos, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2024+Success+Stories",
          title: "Success Stories Summit",
          description: "Celebrating 95% success rate achievement",
          date: "February 2024",
          location: "Abuja, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2024+Mentorship",
          title: "Mentorship Expansion",
          description: "Launched digital mentorship platform",
          date: "January 2024",
          location: "Nationwide",
        },
      ],
    },
    2023: {
      title: "Digital Transformation",
      description: "Embracing technology to reach more students across Nigeria",
      stats: { students: 150, events: 12, locations: 6 },
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&text=2023+Digital+Platform",
          title: "Digital Platform Launch",
          description: "Launched online mentorship and support platform",
          date: "September 2023",
          location: "Virtual",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2023+Rural+Outreach",
          title: "Rural Community Outreach",
          description: "Extended support to underserved rural areas",
          date: "June 2023",
          location: "Rural Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2023+Partnership",
          title: "University Partnerships",
          description: "Established partnerships with 15 universities",
          date: "March 2023",
          location: "Multiple States",
        },
      ],
    },
    2022: {
      title: "Scaling Impact",
      description: "Expanding our reach and deepening our impact across multiple states",
      stats: { students: 120, events: 10, locations: 5 },
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&text=2022+Scholarship+Program",
          title: "Scholarship Program Launch",
          description: "Introduced comprehensive scholarship opportunities",
          date: "October 2022",
          location: "Lagos, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2022+Alumni+Network",
          title: "Alumni Network Formation",
          description: "Created support network of successful graduates",
          date: "July 2022",
          location: "Abuja, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2022+Community+Centers",
          title: "Community Learning Centers",
          description: "Established learning centers in 3 states",
          date: "April 2022",
          location: "Multiple States",
        },
      ],
    },
    2021: {
      title: "Building Foundations",
      description: "Establishing sustainable systems and partnerships for long-term impact",
      stats: { students: 80, events: 8, locations: 4 },
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&text=2021+Mentorship+Program",
          title: "Structured Mentorship",
          description: "Formalized mentorship program with trained mentors",
          date: "November 2021",
          location: "Port Harcourt, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2021+Financial+Support",
          title: "Financial Support Expansion",
          description: "Increased financial assistance to ₦5,000 per student",
          date: "August 2021",
          location: "Lagos, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2021+Study+Materials",
          title: "Educational Resources",
          description: "Distributed comprehensive study materials",
          date: "May 2021",
          location: "Kano, Nigeria",
        },
      ],
    },
    2020: {
      title: "Adapting to Challenges",
      description: "Innovating our approach during unprecedented global challenges",
      stats: { students: 60, events: 6, locations: 3 },
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&text=2020+Virtual+Support",
          title: "Virtual Support System",
          description: "Adapted to provide remote support during pandemic",
          date: "September 2020",
          location: "Virtual",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2020+Emergency+Fund",
          title: "Emergency Support Fund",
          description: "Created emergency financial assistance program",
          date: "June 2020",
          location: "Nationwide",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2020+Online+Mentoring",
          title: "Online Mentoring",
          description: "Transitioned mentorship to digital platforms",
          date: "March 2020",
          location: "Virtual",
        },
      ],
    },
    2019: {
      title: "Growing Recognition",
      description: "Gaining recognition and expanding our impact across Nigeria",
      stats: { students: 40, events: 5, locations: 3 },
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&text=2019+Media+Recognition",
          title: "Media Recognition",
          description: "Featured in major Nigerian newspapers",
          date: "December 2019",
          location: "National Media",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2019+Workshop+Series",
          title: "Educational Workshops",
          description: "Launched series of educational workshops",
          date: "September 2019",
          location: "Ibadan, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2019+Community+Partnership",
          title: "Community Partnerships",
          description: "Formed partnerships with local organizations",
          date: "June 2019",
          location: "Multiple Communities",
        },
      ],
    },
    2018: {
      title: "The Beginning",
      description: "Starting our journey with a vision to transform educational access",
      stats: { students: 20, events: 3, locations: 2 },
      images: [
        {
          src: "/placeholder.svg?height=300&width=400&text=2018+First+JAMB+Forms",
          title: "First JAMB Distribution",
          description: "Distributed our first 100 JAMB forms",
          date: "October 2018",
          location: "Lagos, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2018+Mentorship+Start",
          title: "Mentorship Begins",
          description: "Started one-on-one mentorship sessions",
          date: "July 2018",
          location: "Lagos, Nigeria",
        },
        {
          src: "/placeholder.svg?height=300&width=400&text=2018+Vision+Launch",
          title: "Vision Launch",
          description: "Launched our educational support initiative",
          date: "April 2018",
          location: "Lagos, Nigeria",
        },
      ],
    },
  }

  const years = Object.keys(timelineData)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <section
      ref={sectionRef}
      id="photo-timeline"
      className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white overflow-hidden"
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
              <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-500/30 mb-4 animate-pulse-glow">
                <TrendingUp className="h-4 w-4 mr-2" />
                Journey Through Time
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Visual
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 animate-gradient">
                  Timeline
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore our journey from humble beginnings to transforming thousands of lives. Each year tells a story
                of growth, impact, and unwavering commitment to educational excellence.
              </p>
            </>
          )}
        </div>

        {/* Timeline Navigation */}
        {!isLoading && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {years.map((year) => (
              <Button
                key={year}
                variant={activeYear === year ? "default" : "outline"}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeYear === year
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
                    : "border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400"
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              className="border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/20"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
            >
              {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
        )}

        {/* Timeline Content */}
        {isLoading ? (
          <div className="space-y-8">
            <Skeleton className="h-32 w-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Skeleton className="h-80 w-full" />
              <Skeleton className="h-80 w-full" />
              <Skeleton className="h-80 w-full" />
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Year Header */}
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-6xl font-bold text-emerald-400 mb-4">{activeYear}</h3>
              <h4 className="text-3xl font-bold text-white mb-4">{timelineData[activeYear].title}</h4>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">{timelineData[activeYear].description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">{timelineData[activeYear].stats.students}+</div>
                  <div className="text-slate-300">Students Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">{timelineData[activeYear].stats.events}</div>
                  <div className="text-slate-300">Events Organized</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{timelineData[activeYear].stats.locations}</div>
                  <div className="text-slate-300">Locations Reached</div>
                </div>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {timelineData[activeYear].images.map((image, index) => (
                <Card
                  key={index}
                  className={`group border-0 shadow-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Hover content */}
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{image.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{image.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                        {image.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{image.description}</p>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <Calendar className="h-4 w-4" />
                          <span>{image.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <MapPin className="h-4 w-4" />
                          <span>{image.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
