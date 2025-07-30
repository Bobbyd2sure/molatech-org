"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowDown, Award, Users, BookOpen, Sparkles, Star, Heart, GraduationCap, TrendingUp } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function HeroSection() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartY = useRef(0)
  const touchEndY = useRef(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    setIsVisible(true)

    // Rotate through stats with shorter interval on mobile
    const interval = setInterval(
      () => {
        setCurrentStat((prev) => (prev + 1) % 3)
      },
      isMobile ? 2000 : 3000,
    )

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  // Handle touch events for mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndY.current = e.changedTouches[0].clientY
    const diff = touchStartY.current - touchEndY.current

    // If swiped up significantly, scroll to about section
    if (diff > 50) {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const rotatingStats = [
    { number: "1,000", label: "Free JAMB Forms", icon: GraduationCap },
    { number: "₦5,000", label: "Transport Support", icon: Heart },
    { number: "500+", label: "Students Mentored", icon: Users },
  ]

  const CurrentIcon = rotatingStats[currentStat].icon

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      ref={heroRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* First Hero Section - Main Spotlight */}
      <div className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
        {/* Animated background elements - simplified for mobile */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 left-10 w-24 md:w-32 h-24 md:h-32 bg-emerald-400/20 rounded-full blur-2xl md:blur-3xl ${isMobile ? "animate-pulse-mobile" : "animate-pulse"}`}
          ></div>
          <div
            className={`absolute top-40 right-20 w-32 md:w-48 h-32 md:h-48 bg-teal-400/20 rounded-full blur-2xl md:blur-3xl ${isMobile ? "animate-pulse-mobile delay-500" : "animate-pulse delay-1000"}`}
          ></div>
          <div
            className={`absolute bottom-40 left-20 w-28 md:w-40 h-28 md:h-40 bg-cyan-400/20 rounded-full blur-2xl md:blur-3xl ${isMobile ? "animate-pulse-mobile delay-1000" : "animate-pulse delay-2000"}`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-24 md:w-36 h-24 md:h-36 bg-emerald-300/20 rounded-full blur-2xl md:blur-3xl ${isMobile ? "animate-pulse-mobile delay-300" : "animate-pulse delay-500"}`}
          ></div>
        </div>

        {/* Spotlight effect - simplified for mobile */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/50"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Content Side */}
            <div
              className={`space-y-6 md:space-y-8 transition-all duration-500 md:duration-1000 transform-gpu ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-4 md:space-y-6">
                {/* Animated badges */}
                {isLoading ? (
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <Skeleton className="h-8 md:h-10 w-32 md:w-40" />
                    <Skeleton className="h-8 md:h-10 w-36 md:w-48" />
                    <Skeleton className="h-8 md:h-10 w-28 md:w-32" />
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-300 border-emerald-400/30 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-sm">
                      <Award className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Educational Leader
                    </Badge>
                    <Badge className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 text-teal-300 border-teal-400/30 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Community Builder
                    </Badge>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-300 border-cyan-400/30 px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-sm">
                      <Star className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Mentor
                    </Badge>
                  </div>
                )}

                {/* Main headline */}
                {isLoading ? (
                  <div className="space-y-3 md:space-y-4">
                    <Skeleton className="h-12 md:h-16 w-28 md:w-32 mb-1 md:mb-2" />
                    <Skeleton className="h-16 md:h-24 w-48 md:w-64 mb-1 md:mb-2" />
                    <Skeleton className="h-16 md:h-24 w-48 md:w-64 mb-1 md:mb-2" />
                    <Skeleton className="h-10 md:h-12 w-64 md:w-80" />
                  </div>
                ) : (
                  <div className="space-y-2 md:space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
                      <span className="text-white">Meet</span>
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
                        KENNY
                      </span>
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
                        KUNMA
                      </span>
                    </h1>

                    <div className="text-xl sm:text-2xl md:text-3xl text-emerald-200 font-semibold">
                      Transforming Lives Through Education
                    </div>
                  </div>
                )}

                {/* Description */}
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-5 md:h-6 w-full" />
                    <Skeleton className="h-5 md:h-6 w-5/6" />
                    <Skeleton className="h-5 md:h-6 w-4/6" />
                  </div>
                ) : (
                  <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                    A passionate educator and community leader dedicated to breaking down barriers and creating
                    opportunities for students across Nigeria. Every student deserves a chance to succeed.
                  </p>
                )}
              </div>

              {/* Rotating stats */}
              {isLoading ? (
                <Skeleton className="h-20 md:h-24 w-full" />
              ) : (
                <div className="relative">
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 md:p-6 transition-all duration-300 md:duration-500 transform-gpu active:scale-95 md:hover:scale-105">
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 md:p-4 rounded-xl md:rounded-2xl">
                          <CurrentIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white">
                            {rotatingStats[currentStat].number}
                          </div>
                          <div className="text-sm md:text-base text-emerald-300 font-medium">
                            {rotatingStats[currentStat].label}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* CTA Buttons */}
              {isLoading ? (
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Skeleton className="h-12 md:h-14 w-full sm:w-48" />
                  <Skeleton className="h-12 md:h-14 w-full sm:w-48" />
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:from-emerald-700 active:to-teal-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-200 transform active:scale-95 md:hover:scale-105 shadow-xl md:shadow-2xl w-full sm:w-auto"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Discover My Story
                    <Sparkles className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-slate-900 active:bg-emerald-500 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-200 backdrop-blur-sm w-full sm:w-auto"
                    onClick={() => document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    See My Impact
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                  </Button>
                </div>
              )}
            </div>

            {/* Kenny's Professional Image */}
            <div
              className={`relative transition-all duration-500 md:duration-1000 delay-300 transform-gpu ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                {/* Multiple layered spotlight effects - simplified for mobile */}
                <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-2xl md:blur-3xl opacity-30 animate-pulse-mobile md:animate-pulse"></div>
                <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full blur-xl md:blur-2xl opacity-40"></div>
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-full blur-lg md:blur-xl opacity-50"></div>

                {/* Main image container with enhanced 3D styling */}
                {isLoading ? (
                  <div className="relative bg-gradient-to-r from-white via-emerald-50 to-teal-50 p-3 md:p-4 rounded-full shadow-xl md:shadow-2xl border-2 md:border-4 border-white/20 backdrop-blur-sm">
                    <Skeleton className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-full" />
                  </div>
                ) : (
                  <div className="relative bg-gradient-to-r from-white via-emerald-50 to-teal-50 p-3 md:p-4 rounded-full shadow-xl md:shadow-2xl border-2 md:border-4 border-white/20 backdrop-blur-sm transition-all duration-300 active:scale-95 md:hover:scale-105">
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-full overflow-hidden">
                      <Image
                        src="/images/kenny-professional-white.png"
                        alt="Kenny Kunma - Professional Portrait"
                        width={600}
                        height={600}
                        className="rounded-full object-cover w-full h-full shadow-xl md:shadow-2xl"
                        priority={true}
                      />
                    </div>
                  </div>
                )}

                {/* Floating achievement badges - simplified for mobile */}
                {!isLoading && (
                  <>
                    <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 md:p-4 rounded-full shadow-xl md:shadow-2xl animate-bounce">
                      <Star className="h-6 w-6 md:h-8 md:w-8 fill-current" />
                    </div>
                    <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-3 md:p-4 rounded-full shadow-xl md:shadow-2xl animate-bounce delay-1000">
                      <Award className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <div className="absolute top-1/2 -left-6 md:-left-8 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white p-2 md:p-3 rounded-full shadow-xl md:shadow-2xl animate-bounce delay-500">
                      <Heart className="h-5 w-5 md:h-6 md:w-6 fill-current" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - enhanced for mobile with swipe hint */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg border border-emerald-300/30">
            <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-emerald-300" />
          </div>
          {isMobile && (
            <div className="text-xs text-emerald-300 text-center mt-2 animate-pulse">Swipe up to continue</div>
          )}
        </div>
      </div>

      {/* Second Hero Section - Impact Showcase */}
      <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Kenny's Professional Image */}
            <div
              className={`relative order-2 lg:order-1 transition-all duration-500 md:duration-1000 delay-300 md:delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative">
                {/* Decorative background elements - simplified for mobile */}
                <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-br from-emerald-200/30 via-teal-200/30 to-cyan-200/30 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl"></div>

                {/* Professional image container */}
                <Card className="relative border-0 shadow-xl md:shadow-2xl bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-300 active:scale-95 md:hover:scale-105">
                  <CardContent className="p-0">
                    {isLoading ? (
                      <Skeleton className="w-full h-[400px] md:h-[600px] rounded-xl md:rounded-2xl" />
                    ) : (
                      <Image
                        src="/images/kenny-professional-white.png"
                        alt="Kenny Kunma - Professional Portrait"
                        width={600}
                        height={700}
                        className="rounded-xl md:rounded-2xl object-cover w-full h-[400px] md:h-[600px] shadow-lg md:shadow-xl"
                      />
                    )}

                    {/* Overlay stats */}
                    {!isLoading && (
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                        <Card className="bg-white/95 backdrop-blur-md border-0 shadow-lg md:shadow-xl">
                          <CardContent className="p-3 md:p-4">
                            <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                              <div>
                                <div className="text-xl md:text-2xl font-bold text-emerald-600">1,000</div>
                                <div className="text-xs text-slate-600">JAMB Forms</div>
                              </div>
                              <div>
                                <div className="text-xl md:text-2xl font-bold text-teal-600">₦5,000</div>
                                <div className="text-xs text-slate-600">Support Given</div>
                              </div>
                              <div>
                                <div className="text-xl md:text-2xl font-bold text-cyan-600">500+</div>
                                <div className="text-xs text-slate-600">Students</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Floating testimonial */}
                {!isLoading && (
                  <Card className="absolute -top-3 md:-top-4 -right-3 md:-right-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 shadow-xl md:shadow-2xl max-w-[160px] md:max-w-xs">
                    <CardContent className="p-3 md:p-4">
                      <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current text-yellow-300" />
                        ))}
                      </div>
                      <p className="text-xs md:text-sm italic">"Kenny changed my life through education"</p>
                      <p className="text-[10px] md:text-xs text-emerald-200 mt-1">- Former Student</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Impact Content */}
            <div
              className={`space-y-6 md:space-y-8 order-1 lg:order-2 transition-all duration-500 md:duration-1000 delay-500 md:delay-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-4 md:space-y-6">
                {isLoading ? (
                  <Skeleton className="h-8 md:h-10 w-36 md:w-48" />
                ) : (
                  <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 px-3 md:px-4 py-1.5 md:py-2">
                    <TrendingUp className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Making Real Impact
                  </Badge>
                )}

                {isLoading ? (
                  <div className="space-y-3 md:space-y-4">
                    <Skeleton className="h-10 md:h-12 w-36 md:w-48" />
                    <Skeleton className="h-12 md:h-16 w-64 md:w-80" />
                    <Skeleton className="h-8 md:h-10 w-48 md:w-64" />
                  </div>
                ) : (
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Empowering
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                      Nigeria's Future
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-700 mt-1 md:mt-2">
                      One Student at a Time
                    </span>
                  </h2>
                )}

                {/* Description */}
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-5 md:h-6 w-full" />
                    <Skeleton className="h-5 md:h-6 w-5/6" />
                    <Skeleton className="h-5 md:h-6 w-4/6" />
                  </div>
                ) : (
                  <p className="text-base md:text-xl text-slate-600 leading-relaxed">
                    From providing 1,000 free JAMB forms to distributing ₦5,000 in transportation support, Kenny's
                    comprehensive approach to educational assistance has transformed hundreds of lives across Nigeria.
                    His dedication goes beyond financial support to include mentorship, career guidance, and community
                    building.
                  </p>
                )}
              </div>

              <Separator className="my-6 md:my-8" />

              {/* Key achievements grid */}
              {isLoading ? (
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <Skeleton className="h-28 md:h-32 w-full" />
                  <Skeleton className="h-28 md:h-32 w-full" />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100 transition-all duration-300 active:scale-95 md:hover:scale-105">
                    <CardContent className="p-4 md:p-6 text-center">
                      <GraduationCap className="h-8 w-8 md:h-12 md:w-12 text-emerald-600 mx-auto mb-2 md:mb-3" />
                      <div className="text-2xl md:text-3xl font-bold text-emerald-700">95%</div>
                      <div className="text-xs md:text-sm text-emerald-600 font-medium">Success Rate</div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-teal-100 transition-all duration-300 active:scale-95 md:hover:scale-105">
                    <CardContent className="p-4 md:p-6 text-center">
                      <Users className="h-8 w-8 md:h-12 md:w-12 text-teal-600 mx-auto mb-2 md:mb-3" />
                      <div className="text-2xl md:text-3xl font-bold text-teal-700">500+</div>
                      <div className="text-xs md:text-sm text-teal-600 font-medium">Lives Changed</div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* CTA Buttons */}
              {isLoading ? (
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Skeleton className="h-12 md:h-14 w-full sm:w-48" />
                  <Skeleton className="h-12 md:h-14 w-full sm:w-48" />
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:from-emerald-800 active:to-teal-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-200 transform active:scale-95 md:hover:scale-105 shadow-lg w-full sm:w-auto"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Explore Services
                    <BookOpen className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white active:bg-emerald-700 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-200 w-full sm:w-auto"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Support
                    <Heart className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
