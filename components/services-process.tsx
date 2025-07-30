"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Heart, Users, Star, ArrowRight, CheckCircle } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function ServicesProcess() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
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

  const processes = {
    jamb: [
      {
        step: 1,
        title: "Application & Assessment",
        description:
          "Students apply for JAMB form support through our online portal or community outreach programs. We assess needs based on academic potential and financial circumstances.",
      },
      {
        step: 2,
        title: "Form Distribution",
        description:
          "Qualified students receive free JAMB forms and are guided through the registration process, ensuring all details are correctly entered.",
      },
      {
        step: 3,
        title: "Exam Preparation",
        description:
          "Students gain access to comprehensive study materials, practice tests, and preparation workshops to maximize their chances of success.",
      },
      {
        step: 4,
        title: "Ongoing Support",
        description:
          "We provide continuous guidance throughout the examination period, including transportation to exam centers and post-exam counseling.",
      },
      {
        step: 5,
        title: "University Placement",
        description:
          "After results are released, we assist with university selection, application processes, and admission guidance.",
      },
    ],
    financial: [
      {
        step: 1,
        title: "Need Assessment",
        description:
          "Students apply for financial assistance, providing details about their educational goals and financial circumstances.",
      },
      {
        step: 2,
        title: "Support Planning",
        description:
          "We develop a personalized support plan, which may include transportation allowances, educational materials, or emergency funding.",
      },
      {
        step: 3,
        title: "Fund Distribution",
        description:
          "Financial support is provided directly to students through secure channels, ensuring transparency and accountability.",
      },
      {
        step: 4,
        title: "Progress Tracking",
        description:
          "We monitor academic progress and financial utilization to ensure resources are effectively supporting educational goals.",
      },
      {
        step: 5,
        title: "Sustainability Planning",
        description:
          "We work with students to develop long-term financial sustainability plans, including scholarship applications and part-time work opportunities.",
      },
    ],
    mentorship: [
      {
        step: 1,
        title: "Mentor Matching",
        description:
          "Students are matched with mentors based on their academic interests, career goals, and personal development needs.",
      },
      {
        step: 2,
        title: "Goal Setting",
        description:
          "Mentors and mentees collaboratively establish clear, achievable academic and personal development goals.",
      },
      {
        step: 3,
        title: "Regular Sessions",
        description:
          "Structured mentoring sessions occur weekly or bi-weekly, focusing on academic guidance, skill development, and personal growth.",
      },
      {
        step: 4,
        title: "Resource Access",
        description:
          "Mentees gain access to specialized resources, networks, and opportunities through their mentors and the broader program.",
      },
      {
        step: 5,
        title: "Progress Evaluation",
        description:
          "Regular assessment of progress toward goals, with adjustments to the mentoring approach as needed for optimal results.",
      },
    ],
  }

  return (
    <section
      ref={sectionRef}
      id="services-process"
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
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4">
                <ArrowRight className="h-4 w-4 mr-2" />
                How It Works
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Support
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Process
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We've developed streamlined processes to ensure students receive timely, effective support at every
                stage of their educational journey.
              </p>
            </>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-8">
            <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
            <Skeleton className="h-[400px] w-full" />
          </div>
        ) : (
          <Tabs defaultValue="jamb" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white shadow-lg rounded-xl p-1 h-14 max-w-2xl mx-auto">
              <TabsTrigger
                value="jamb"
                className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                JAMB Support
              </TabsTrigger>
              <TabsTrigger
                value="financial"
                className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
              >
                <Heart className="h-4 w-4 mr-2" />
                Financial Aid
              </TabsTrigger>
              <TabsTrigger
                value="mentorship"
                className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
              >
                <Users className="h-4 w-4 mr-2" />
                Mentorship
              </TabsTrigger>
            </TabsList>

            {/* JAMB Support Process */}
            <TabsContent value="jamb" className="space-y-8">
              <div className="relative">
                {/* Process timeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 to-emerald-100 transform -translate-x-1/2 hidden md:block"></div>

                {processes.jamb.map((process, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center md:even:flex-row-reverse gap-8 mb-12 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Step number */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg z-10 relative">
                          {process.step}
                        </div>
                        <div className="absolute -inset-2 bg-emerald-400/20 rounded-full blur-md"></div>
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="md:w-1/2">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-emerald-700 mb-2">{process.title}</h3>
                          <p className="text-slate-600">{process.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Financial Aid Process */}
            <TabsContent value="financial" className="space-y-8">
              <div className="relative">
                {/* Process timeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-300 to-rose-100 transform -translate-x-1/2 hidden md:block"></div>

                {processes.financial.map((process, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center md:even:flex-row-reverse gap-8 mb-12 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Step number */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg z-10 relative">
                          {process.step}
                        </div>
                        <div className="absolute -inset-2 bg-rose-400/20 rounded-full blur-md"></div>
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="md:w-1/2">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-rose-700 mb-2">{process.title}</h3>
                          <p className="text-slate-600">{process.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Mentorship Process */}
            <TabsContent value="mentorship" className="space-y-8">
              <div className="relative">
                {/* Process timeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-blue-100 transform -translate-x-1/2 hidden md:block"></div>

                {processes.mentorship.map((process, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center md:even:flex-row-reverse gap-8 mb-12 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Step number */}
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg z-10 relative">
                          {process.step}
                        </div>
                        <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-md"></div>
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="md:w-1/2">
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-blue-700 mb-2">{process.title}</h3>
                          <p className="text-slate-600">{process.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}

        {/* Benefits */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Benefits
            </Badge>
            <h3 className="text-3xl font-bold text-slate-900">Why Our Process Works</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoading
              ? [...Array(3)].map((_, i) => <Skeleton key={i} className="h-64 w-full" />)
              : [
                  {
                    title: "Personalized Approach",
                    description:
                      "We recognize that every student's journey is unique. Our processes are designed to be flexible and adaptable to individual needs and circumstances.",
                    icon: Users,
                    color: "emerald",
                  },
                  {
                    title: "Comprehensive Support",
                    description:
                      "Our holistic approach addresses multiple aspects of a student's educational journey, from financial barriers to academic guidance and emotional support.",
                    icon: Heart,
                    color: "rose",
                  },
                  {
                    title: "Long-term Impact",
                    description:
                      "We focus not just on immediate needs but on building sustainable pathways to success, equipping students with the tools and resources for lifelong achievement.",
                    icon: Star,
                    color: "blue",
                  },
                ].map((benefit, index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${(index + 5) * 200}ms` }}
                  >
                    <CardContent className="p-8">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg ${
                          benefit.color === "emerald"
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                            : benefit.color === "rose"
                              ? "bg-gradient-to-r from-rose-500 to-rose-600"
                              : "bg-gradient-to-r from-blue-500 to-blue-600"
                        }`}
                      >
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
                      <p className="text-slate-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}
