"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { GraduationCap, Users, BookOpen, Briefcase, Heart, Star, ArrowRight } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function ServicesSection() {
  const { isLoading } = useLoading()

  const services = [
    {
      icon: GraduationCap,
      title: "JAMB Form Support",
      description:
        "Comprehensive JAMB registration assistance and exam preparation support for aspiring university students.",
      features: ["Free form provision", "Registration guidance", "Exam preparation", "Follow-up support"],
      color: "emerald",
      popular: true,
    },
    {
      icon: Heart,
      title: "Financial Assistance",
      description: "Direct financial support including transportation allowances and educational material funding.",
      features: ["Transport allowances", "Educational materials", "Emergency support", "Scholarship guidance"],
      color: "rose",
      popular: false,
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Personalized mentoring sessions and group workshops for academic and personal development.",
      features: ["One-on-one mentoring", "Career guidance", "Study strategies", "Goal setting workshops"],
      color: "blue",
      popular: false,
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access to comprehensive learning materials, study guides, and digital educational tools.",
      features: ["Study materials", "Online resources", "Practice tests", "Learning platforms"],
      color: "purple",
      popular: false,
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Professional development workshops and career guidance for students and recent graduates.",
      features: ["Resume building", "Interview preparation", "Skill development", "Job placement assistance"],
      color: "amber",
      popular: false,
    },
    {
      icon: Star,
      title: "Community Building",
      description: "Creating supportive networks and communities for ongoing educational and professional growth.",
      features: ["Alumni network", "Peer support groups", "Community events", "Success story sharing"],
      color: "teal",
      popular: false,
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-600 border-emerald-200",
      rose: "from-rose-500 to-rose-600 bg-rose-50 text-rose-600 border-rose-200",
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
      amber: "from-amber-500 to-amber-600 bg-amber-50 text-amber-600 border-amber-200",
      teal: "from-teal-500 to-teal-600 bg-teal-50 text-teal-600 border-teal-200",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="services" className="py-20 bg-white">
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
                <Star className="h-4 w-4 mr-2" />
                Services & Support
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Comprehensive
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Student Support
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From academic guidance to financial assistance, I provide holistic support services designed to address
                every aspect of a student's educational journey.
              </p>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color)
            return isLoading ? (
              <Skeleton key={index} className="h-[400px] w-full" style={{ transitionDelay: `${index * 100}ms` }} />
            ) : (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group bg-white ${
                  service.popular ? "ring-2 ring-emerald-200" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-slate-600">{service.description}</p>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">What's Included:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]}`}
                        ></div>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className={`w-full mt-6 group-hover:bg-gradient-to-r group-hover:${colorClasses.split(" ")[0]} group-hover:${colorClasses.split(" ")[1]} group-hover:text-white group-hover:border-transparent transition-all duration-300`}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>

                {/* Decorative gradient */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} opacity-5 rounded-bl-full`}
                ></div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
