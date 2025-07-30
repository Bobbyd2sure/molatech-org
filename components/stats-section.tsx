"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { GraduationCap, Heart, Users, Award, TrendingUp } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function StatsSection() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          setTimeout(() => setProgress(100), 500)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: GraduationCap,
      number: "1,000",
      label: "FREE JAMB FORMS",
      description: "Distributed to aspiring students across Nigeria",
      color: "emerald",
      progress: 95,
      trend: "+150% this year",
    },
    {
      icon: Heart,
      number: "₦5,000",
      label: "TRANSPORT SUPPORT",
      description: "Financial aid for tertiary institution students",
      color: "rose",
      progress: 88,
      trend: "Direct impact",
    },
    {
      icon: Users,
      number: "500+",
      label: "STUDENTS MENTORED",
      description: "Guided towards academic and career success",
      color: "blue",
      progress: 92,
      trend: "Growing community",
    },
    {
      icon: Award,
      number: "95%",
      label: "SUCCESS RATE",
      description: "Students achieving their educational goals",
      color: "amber",
      progress: 95,
      trend: "Proven results",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-50 border-emerald-200",
      rose: "from-rose-500 to-rose-600 text-rose-600 bg-rose-50 border-rose-200",
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
      amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-50 border-amber-200",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30">
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
                <TrendingUp className="h-4 w-4 mr-2" />
                Impact Metrics
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Transforming Lives
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  By The Numbers
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every statistic represents a life touched, a dream supported, and a future made brighter through
                education and community support.
              </p>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className={`text-4xl font-bold ${colorClasses.split(" ")[2]} mb-2`}>{stat.number}</div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4">{stat.description}</p>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <Progress value={isVisible ? stat.progress : 0} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">{stat.progress}% Impact</span>
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
      </div>
    </section>
  )
}
