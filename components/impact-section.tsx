"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Quote, TrendingUp, Heart, Users, BookOpen, Award, Star, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function ImpactSection() {
  const [animatedValues, setAnimatedValues] = useState({
    studentsHelped: 0,
    scholarshipsProvided: 0,
    communitiesReached: 0,
    successRate: 0,
  })

  const finalValues = {
    studentsHelped: 2500,
    scholarshipsProvided: 450,
    communitiesReached: 85,
    successRate: 94,
  }

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)

        setAnimatedValues({
          studentsHelped: Math.floor(finalValues.studentsHelped * easeOutQuart),
          scholarshipsProvided: Math.floor(finalValues.scholarshipsProvided * easeOutQuart),
          communitiesReached: Math.floor(finalValues.communitiesReached * easeOutQuart),
          successRate: Math.floor(finalValues.successRate * easeOutQuart),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setAnimatedValues(finalValues)
        }
      }, stepDuration)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("impact-stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stories = [
    {
      name: "Adaora Okafor",
      role: "University of Lagos Graduate",
      story:
        "Thanks to Kenny's support with my JAMB form and mentorship, I was able to pursue my dream of studying Medicine. His guidance was invaluable throughout my journey, and I'm now giving back to my community as a practicing doctor.",
      image: "/young-african-woman-student.png",
      initials: "AO",
      achievement: "Medical Doctor",
      rating: 5,
      location: "Lagos, Nigeria",
    },
    {
      name: "Ibrahim Musa",
      role: "Engineering Student",
      story:
        "The transportation support Kenny provided helped me attend university regularly. Without his help, I would have struggled to complete my education. Now I'm in my final year of Mechanical Engineering with excellent grades.",
      image: "/young-african-male-student.png",
      initials: "IM",
      achievement: "Engineering Student",
      rating: 5,
      location: "Abuja, Nigeria",
    },
    {
      name: "Grace Adeolu",
      role: "Teacher & Mentor",
      story:
        "Kenny's mentorship program didn't just help me academically - it shaped my character and inspired me to give back to my community as an educator. I now run my own tutoring center helping other students.",
      image: "/african-woman-teacher.png",
      initials: "GA",
      achievement: "Educator & Entrepreneur",
      rating: 5,
      location: "Ibadan, Nigeria",
    },
  ]

  const impactAreas = [
    {
      title: "Educational Access",
      description: "Breaking down financial barriers to higher education",
      percentage: 95,
      color: "emerald",
      icon: BookOpen,
      details: "Providing scholarships, educational materials, and mentorship",
    },
    {
      title: "Student Success",
      description: "Graduation and career placement rates",
      percentage: 88,
      color: "blue",
      icon: Award,
      details: "Supporting students from enrollment through career placement",
    },
    {
      title: "Community Growth",
      description: "Alumni giving back to their communities",
      percentage: 92,
      color: "purple",
      icon: Users,
      details: "Creating a ripple effect of positive community impact",
    },
    {
      title: "Sustainable Impact",
      description: "Long-term positive outcomes and continued support",
      percentage: 90,
      color: "amber",
      icon: Heart,
      details: "Building lasting relationships and ongoing mentorship",
    },
  ]

  const keyStats = [
    {
      value: animatedValues.studentsHelped,
      label: "Students Helped",
      icon: Users,
      color: "emerald",
    },
    {
      value: animatedValues.scholarshipsProvided,
      label: "Scholarships Provided",
      icon: Award,
      color: "blue",
    },
    {
      value: animatedValues.communitiesReached,
      label: "Communities Reached",
      icon: Heart,
      color: "purple",
    },
    {
      value: animatedValues.successRate,
      label: "Success Rate %",
      icon: TrendingUp,
      color: "amber",
    },
  ]

  return (
    <section
      id="impact"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse" />
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-6">
            <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-500/30 mb-4 animate-pulse-glow hover:scale-110 transition-all duration-300">
              <TrendingUp className="h-4 w-4 mr-2 animate-bounce" />
              Real Impact Stories
            </Badge>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="h-6 w-6 text-emerald-400 animate-spin" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-gradient bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent bg-300% leading-tight">
            Transforming Lives,
            <span className="block mt-2 animate-float">Building Futures</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            The true measure of success lies in the lives transformed, dreams realized, and the ripple effect of
            positive change in our communities.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-8 space-x-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 text-emerald-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div id="impact-stats" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {keyStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 perspective-1000 hover:rotateX-5 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-pulse-glow">
                      {stat.value.toLocaleString()}
                      {stat.label.includes("%") && "%"}
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Enhanced Success Stories */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-gradient bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Success Stories That Inspire
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 perspective-1000 hover:rotateY-5 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-10 w-10 text-emerald-400 animate-pulse" />
                    <div className="flex space-x-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-200 mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{story.story}"
                  </p>

                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-emerald-400/30 group-hover:border-emerald-400/60 transition-colors duration-300 group-hover:scale-110 transform">
                      <AvatarImage src={story.image || "/placeholder.svg"} alt={story.name} />
                      <AvatarFallback className="bg-emerald-600 text-white font-semibold text-lg">
                        {story.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-lg group-hover:text-emerald-300 transition-colors duration-300">
                        {story.name}
                      </div>
                      <div className="text-slate-400 text-sm mb-1">{story.role}</div>
                      <div className="text-slate-500 text-xs">{story.location}</div>
                    </div>
                  </div>

                  <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-500/30 group-hover:bg-emerald-600/30 transition-colors duration-300 animate-float">
                    {story.achievement}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Impact Metrics */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-gradient bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Impact Areas & Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 perspective-1000 hover:rotateX-10 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardContent className="p-8 relative z-10">
                    <div className="relative mb-6">
                      <div className="relative w-28 h-28 mx-auto">
                        <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            className="text-white/20"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - area.percentage / 100)}`}
                            className="text-emerald-400 transition-all duration-1000 ease-out group-hover:text-emerald-300"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <IconComponent className="h-8 w-8 text-emerald-400 mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-xl font-bold text-white animate-pulse-glow">{area.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 group-hover:text-slate-300 transition-colors duration-300">
                      {area.description}
                    </p>
                    <p className="text-slate-500 text-xs group-hover:text-slate-400 transition-colors duration-300">
                      {area.details}
                    </p>

                    <div className="mt-4">
                      <Progress
                        value={area.percentage}
                        className="h-2 bg-white/20 group-hover:bg-white/30 transition-colors duration-300"
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-gradient bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Be Part of the Change
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Join us in creating more success stories and transforming lives through education and mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-glow">
                Get Involved
              </button>
              <button className="px-8 py-3 border border-emerald-500/50 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
