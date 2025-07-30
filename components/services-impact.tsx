"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { GraduationCap, Heart, Users, TrendingUp, Award, MapPin } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function ServicesImpact() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    jamb: 0,
    financial: 0,
    students: 0,
    success: 0,
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startCounting()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const startCounting = () => {
    const duration = 2000 // 2 seconds
    const frameRate = 30 // frames per second
    const totalFrames = (duration / 1000) * frameRate
    let frame = 0

    const targets = {
      jamb: 1000,
      financial: 5000,
      students: 500,
      success: 95,
    }

    const interval = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      if (frame <= totalFrames) {
        setCounts({
          jamb: Math.round(progress * targets.jamb),
          financial: Math.round(progress * targets.financial),
          students: Math.round(progress * targets.students),
          success: Math.round(progress * targets.success),
        })
      } else {
        setCounts(targets)
        clearInterval(interval)
      }
    }, 1000 / frameRate)

    return () => clearInterval(interval)
  }

  const impactStats = [
    {
      title: "JAMB Forms Distributed",
      value: counts.jamb,
      suffix: "+",
      description: "Free forms provided to deserving students",
      icon: GraduationCap,
      color: "emerald",
      progress: 95,
    },
    {
      title: "Financial Support (₦)",
      value: counts.financial,
      suffix: "+",
      description: "Transportation and educational funding",
      icon: Heart,
      color: "rose",
      progress: 88,
    },
    {
      title: "Students Mentored",
      value: counts.students,
      suffix: "+",
      description: "Personalized guidance and support",
      icon: Users,
      color: "blue",
      progress: 92,
    },
    {
      title: "Success Rate",
      value: counts.success,
      suffix: "%",
      description: "Students achieving their educational goals",
      icon: Award,
      color: "amber",
      progress: 95,
    },
  ]

  const impactRegions = [
    { name: "Lagos", students: 150, color: "emerald" },
    { name: "Abuja", students: 120, color: "blue" },
    { name: "Port Harcourt", students: 85, color: "rose" },
    { name: "Kano", students: 65, color: "amber" },
    { name: "Ibadan", students: 50, color: "purple" },
    { name: "Enugu", students: 30, color: "teal" },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-50 border-emerald-200",
      rose: "from-rose-500 to-rose-600 text-rose-600 bg-rose-50 border-rose-200",
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
      amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-50 border-amber-200",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200",
      teal: "from-teal-500 to-teal-600 text-teal-600 bg-teal-50 border-teal-200",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section
      ref={sectionRef}
      id="services-impact"
      className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white"
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
              <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-500/30 mb-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                Impact Metrics
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Measuring Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Impact
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our services have created measurable, positive change in the lives of students across Nigeria. Here's
                the impact by the numbers.
              </p>
            </>
          )}
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => {
            const colorClasses = getColorClasses(stat.color)
            return isLoading ? (
              <Skeleton key={index} className="h-64 w-full" style={{ transitionDelay: `${index * 150}ms` }} />
            ) : (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/10 backdrop-blur-sm ${
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
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-emerald-300 mb-2">{stat.title}</div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-4">{stat.description}</p>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <Progress
                      value={isVisible ? stat.progress : 0}
                      className="h-2 bg-white/20"
                      indicatorClassName="bg-gradient-to-r from-emerald-400 to-teal-400"
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">{stat.progress}% Target</span>
                      <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-500/30">Growing</Badge>
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

        {/* Regional Impact */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Regional Impact</h3>
            <p className="text-slate-300 leading-relaxed">
              Our services reach students across Nigeria, with concentrated efforts in key regions to maximize impact
              and accessibility. Each region presents unique challenges and opportunities for educational support.
            </p>

            {isLoading ? (
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {impactRegions.map((region, index) => {
                  const colorClasses = getColorClasses(region.color)
                  const percentage = Math.round((region.students / 500) * 100)
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span className="font-medium text-white">{region.name}</span>
                        </div>
                        <div className="text-emerald-300 font-semibold">{region.students} students</div>
                      </div>
                      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
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
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Long-term Outcomes</h3>
            <p className="text-slate-300 leading-relaxed">
              Our impact extends beyond immediate educational support to create lasting positive change in students'
              lives and communities. These outcomes demonstrate the sustainable value of our services.
            </p>

            {isLoading ? (
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-32 w-full" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "University Graduation",
                    value: "92%",
                    description: "Students who complete their degrees",
                    color: "emerald",
                  },
                  {
                    title: "Employment Rate",
                    value: "85%",
                    description: "Graduates securing relevant employment",
                    color: "blue",
                  },
                  {
                    title: "Community Return",
                    value: "65%",
                    description: "Alumni giving back to their communities",
                    color: "rose",
                  },
                  {
                    title: "Further Education",
                    value: "40%",
                    description: "Students pursuing advanced degrees",
                    color: "amber",
                  },
                ].map((outcome, index) => {
                  const colorClasses = getColorClasses(outcome.color)
                  return (
                    <Card
                      key={index}
                      className={`border-0 shadow-lg bg-white/10 backdrop-blur-sm transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: `${(index + 6) * 200}ms` }}
                    >
                      <CardContent className="p-4 text-center">
                        <div
                          className={`text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${
                            colorClasses.split(" ")[0]
                          } ${colorClasses.split(" ")[1]}`}
                        >
                          {outcome.value}
                        </div>
                        <div className="font-semibold text-white mb-1">{outcome.title}</div>
                        <p className="text-xs text-slate-300">{outcome.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
