"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Newspaper } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function AsSeenInSection() {
  const { isLoading } = useLoading()
  const [currentIndex, setCurrentIndex] = useState(0)

  const mediaOutlets = [
    {
      name: "The Punch",
      logo: "/placeholder.svg?height=80&width=200&text=The+Punch",
      description: "Educational Leader Making Impact",
      url: "https://punchng.com",
    },
    {
      name: "Vanguard",
      logo: "/placeholder.svg?height=80&width=200&text=Vanguard",
      description: "Transforming Lives Through Education",
      url: "https://vanguardngr.com",
    },
    {
      name: "ThisDay",
      logo: "/placeholder.svg?height=80&width=200&text=ThisDay",
      description: "Youth Empowerment Champion",
      url: "https://thisdaylive.com",
    },
    {
      name: "The Guardian",
      logo: "/placeholder.svg?height=80&width=200&text=The+Guardian",
      description: "Breaking Educational Barriers",
      url: "https://guardian.ng",
    },
    {
      name: "Daily Trust",
      logo: "/placeholder.svg?height=80&width=200&text=Daily+Trust",
      description: "Community Development Leader",
      url: "https://dailytrust.com",
    },
    {
      name: "Premium Times",
      logo: "/placeholder.svg?height=80&width=200&text=Premium+Times",
      description: "Educational Innovation Pioneer",
      url: "https://premiumtimesng.com",
    },
    {
      name: "Leadership",
      logo: "/placeholder.svg?height=80&width=200&text=Leadership",
      description: "Inspiring Student Success",
      url: "https://leadership.ng",
    },
    {
      name: "The Nation",
      logo: "/placeholder.svg?height=80&width=200&text=The+Nation",
      description: "Building Educational Futures",
      url: "https://thenationonlineng.net",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(mediaOutlets.length / 4))
    }, 3000)
    return () => clearInterval(interval)
  }, [mediaOutlets.length])

  const getVisibleItems = () => {
    const itemsPerSlide = 4
    const start = currentIndex * itemsPerSlide
    const end = start + itemsPerSlide
    return mediaOutlets.slice(start, end)
  }

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-4">
              <Skeleton className="h-8 w-32 mx-auto" />
              <Skeleton className="h-12 w-64 mx-auto" />
            </div>
          ) : (
            <>
              <Badge className="bg-slate-100 text-slate-800 border-slate-300 mb-4">
                <Newspaper className="h-4 w-4 mr-2" />
                Media Coverage
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                As Featured In
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Leading Nigerian Media
                </span>
              </h2>
            </>
          )}
        </div>

        {/* Sliding Media Logos */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {isLoading ? (
              <div className="flex space-x-8 w-full">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-24 w-48 flex-shrink-0" />
                ))}
              </div>
            ) : (
              <div className="flex space-x-8 w-full">
                {getVisibleItems().map((outlet, index) => (
                  <div
                    key={`${currentIndex}-${index}`}
                    className="flex-shrink-0 w-1/4 group cursor-pointer"
                    onClick={() => window.open(outlet.url, "_blank")}
                  >
                    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-emerald-200">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <img
                          src={outlet.logo || "/placeholder.svg"}
                          alt={outlet.name}
                          className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div>
                          <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
                            {outlet.name}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1">{outlet.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Slide Indicators */}
        {!isLoading && (
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(Math.ceil(mediaOutlets.length / 4))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-emerald-600 w-8" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* Stats */}
        {!isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">50+</div>
              <div className="text-sm text-slate-600">Media Features</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">8</div>
              <div className="text-sm text-slate-600">Major Publications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">2M+</div>
              <div className="text-sm text-slate-600">Media Reach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">95%</div>
              <div className="text-sm text-slate-600">Positive Coverage</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
