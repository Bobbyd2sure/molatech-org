"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { GraduationCap, Heart, Users, BookOpen, Briefcase, Star, ArrowRight } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function ServicesHero() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: GraduationCap,
      title: "JAMB Form Support",
      description: "Free JAMB forms and comprehensive registration assistance",
      color: "emerald",
    },
    {
      icon: Heart,
      title: "Financial Assistance",
      description: "₦5,000 transport support and educational funding",
      color: "rose",
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "One-on-one guidance and career development",
      color: "blue",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Study materials and learning tools",
      color: "purple",
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Professional skills and job placement",
      color: "amber",
    },
    {
      icon: Star,
      title: "Community Building",
      description: "Support networks and alumni connections",
      color: "teal",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600 text-emerald-600",
      rose: "from-rose-500 to-rose-600 text-rose-600",
      blue: "from-blue-500 to-blue-600 text-blue-600",
      purple: "from-purple-500 to-purple-600 text-purple-600",
      amber: "from-amber-500 to-amber-600 text-amber-600",
      teal: "from-teal-500 to-teal-600 text-teal-600",
    }
    return colors[color as keyof typeof colors]
  }

  const ActiveIcon = services[activeService].icon
  const activeColorClasses = getColorClasses(services[activeService].color)

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  <Badge className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-300 border-emerald-400/30 px-4 py-2 backdrop-blur-sm">
                    <Star className="h-4 w-4 mr-2" />
                    Comprehensive Support
                  </Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 text-teal-300 border-teal-400/30 px-4 py-2 backdrop-blur-sm">
                    <Users className="h-4 w-4 mr-2" />
                    500+ Students Served
                  </Badge>
                </div>
              )}

              {/* Main headline */}
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-16 w-32 mb-2" />
                  <Skeleton className="h-24 w-64 mb-2" />
                  <Skeleton className="h-12 w-80" />
                </div>
              ) : (
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                    <span className="text-white">Empowering</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
                      Educational
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
                      Journeys
                    </span>
                  </h1>

                  <div className="text-2xl md:text-3xl text-emerald-200 font-semibold">
                    Holistic Support Services for Students
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
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  From JAMB form distribution to mentorship and financial support, our comprehensive services are
                  designed to address every aspect of a student's educational journey, ensuring no barrier stands in the
                  way of their success.
                </p>
              )}
            </div>

            {/* CTA Buttons */}
            {isLoading ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-14 w-48" />
                <Skeleton className="h-14 w-48" />
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-2xl"
                  onClick={() => document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 backdrop-blur-sm"
                  onClick={() => document.getElementById("services-contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Support
                  <Heart className="h-5 w-5 ml-2" />
                </Button>
              </div>
            )}
          </div>

          {/* Services Showcase */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Multiple layered spotlight effects */}
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full blur-2xl opacity-40"></div>

              {/* Main showcase container */}
              {isLoading ? (
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20">
                  <Skeleton className="w-full h-[400px] rounded-2xl" />
                </div>
              ) : (
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20">
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${
                        activeColorClasses.split(" ")[0]
                      } ${activeColorClasses.split(" ")[1]} mb-6 shadow-lg animate-bounce`}
                    >
                      <ActiveIcon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{services[activeService].title}</h3>
                    <p className="text-emerald-200 text-lg">{services[activeService].description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {services.map((service, index) => {
                      const colorClasses = getColorClasses(service.color)
                      return (
                        <button
                          key={index}
                          className={`p-4 rounded-xl transition-all duration-300 ${
                            index === activeService
                              ? `bg-gradient-to-r ${colorClasses.split(" ")[0]} ${
                                  colorClasses.split(" ")[1]
                                } text-white shadow-lg`
                              : "bg-white/10 hover:bg-white/20 text-white"
                          }`}
                          onClick={() => setActiveService(index)}
                        >
                          <div className="flex flex-col items-center text-center">
                            <service.icon className="h-6 w-6 mb-2" />
                            <span className="text-sm font-medium">{service.title}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  <div className="mt-8 flex justify-center space-x-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === activeService ? "bg-emerald-400" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Floating achievement badges */}
              {!isLoading && (
                <>
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-full shadow-2xl animate-float">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl animate-float delay-1000">
                    <Heart className="h-8 w-8 fill-current" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
