"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Heart, Users, Quote, Star } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function ServicesTestimonials() {
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

  const testimonials = {
    jamb: [
      {
        name: "Adaora Okafor",
        role: "Medical Student",
        institution: "University of Lagos",
        content:
          "The JAMB form support I received from Kenny was life-changing. Not only did I get the form for free, but the preparation materials and guidance helped me score in the top percentile. I'm now pursuing my dream of becoming a doctor.",
        image: "/young-african-woman-student.png",
        initials: "AO",
      },
      {
        name: "Emeka Nwosu",
        role: "Engineering Student",
        institution: "Federal University of Technology",
        content:
          "Without Kenny's JAMB support program, I wouldn't have been able to register for the exam. The study materials and mock tests were incredibly helpful, and I'm now studying Electrical Engineering with a bright future ahead.",
        image: "/placeholder.svg?height=100&width=100&text=EN",
        initials: "EN",
      },
      {
        name: "Fatima Ibrahim",
        role: "Law Student",
        institution: "Ahmadu Bello University",
        content:
          "The comprehensive support I received through the JAMB program went beyond just providing the form. The mentorship and exam strategies helped me achieve a score I never thought possible. I'm forever grateful.",
        image: "/placeholder.svg?height=100&width=100&text=FI",
        initials: "FI",
      },
    ],
    financial: [
      {
        name: "Ibrahim Musa",
        role: "Computer Science Student",
        institution: "University of Ibadan",
        content:
          "The ₦5,000 transportation support made it possible for me to attend classes regularly. Without this assistance, I would have struggled to complete my education due to the long distance between my home and campus.",
        image: "/young-african-male-student.png",
        initials: "IM",
      },
      {
        name: "Chioma Eze",
        role: "Accounting Student",
        institution: "Lagos State University",
        content:
          "Kenny's financial assistance program helped me purchase essential textbooks and materials that I couldn't afford. This support directly contributed to my academic success and reduced the financial burden on my family.",
        image: "/placeholder.svg?height=100&width=100&text=CE",
        initials: "CE",
      },
      {
        name: "Yusuf Abdullahi",
        role: "Architecture Student",
        institution: "Covenant University",
        content:
          "The emergency financial support I received during a family crisis allowed me to continue my education without interruption. Kenny's program understands that financial challenges can arise unexpectedly.",
        image: "/placeholder.svg?height=100&width=100&text=YA",
        initials: "YA",
      },
    ],
    mentorship: [
      {
        name: "Grace Adeolu",
        role: "Business Administration Graduate",
        institution: "University of Nigeria",
        content:
          "Kenny's mentorship transformed my approach to education and career planning. The guidance I received helped me develop not just academically but as a leader. I now run my own business while mentoring others.",
        image: "/african-woman-teacher.png",
        initials: "GA",
      },
      {
        name: "David Okonkwo",
        role: "Medical Laboratory Science Student",
        institution: "University of Port Harcourt",
        content:
          "The one-on-one mentoring sessions provided clarity and direction when I was struggling with my career path. My mentor's insights and encouragement helped me overcome challenges and excel in my studies.",
        image: "/placeholder.svg?height=100&width=100&text=DO",
        initials: "DO",
      },
      {
        name: "Amina Mohammed",
        role: "Economics Student",
        institution: "Bayero University Kano",
        content:
          "Being part of the mentorship program connected me with professionals in my field and opened doors to internships and networking opportunities I wouldn't have accessed otherwise. The guidance was invaluable.",
        image: "/placeholder.svg?height=100&width=100&text=AM",
        initials: "AM",
      },
    ],
  }

  return (
    <section
      ref={sectionRef}
      id="services-testimonials"
      className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-slate-50"
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
                <Quote className="h-4 w-4 mr-2" />
                Success Stories
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Hear From Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Students
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real stories from students whose lives have been transformed through our comprehensive support services.
              </p>
            </>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-8">
            <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Skeleton className="h-80 w-full" />
              <Skeleton className="h-80 w-full" />
              <Skeleton className="h-80 w-full" />
            </div>
          </div>
        ) : (
          <Tabs defaultValue="jamb" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white shadow-lg rounded-xl p-1 h-14 max-w-2xl mx-auto">
              <TabsTrigger
                value="jamb"
                className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                JAMB Support Stories
              </TabsTrigger>
              <TabsTrigger
                value="financial"
                className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
              >
                <Heart className="h-4 w-4 mr-2" />
                Financial Aid Stories
              </TabsTrigger>
              <TabsTrigger
                value="mentorship"
                className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
              >
                <Users className="h-4 w-4 mr-2" />
                Mentorship Stories
              </TabsTrigger>
            </TabsList>

            {/* JAMB Support Testimonials */}
            <TabsContent value="jamb" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.jamb.map((testimonial, index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8">
                      {/* Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-slate-600 mb-8 italic leading-relaxed">"{testimonial.content}"</p>

                      {/* Author */}
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-14 w-14 border-2 border-emerald-200">
                          <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-slate-900 text-lg">{testimonial.name}</div>
                          <div className="text-slate-600 text-sm">{testimonial.role}</div>
                          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200 mt-1">
                            {testimonial.institution}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Financial Aid Testimonials */}
            <TabsContent value="financial" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.financial.map((testimonial, index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8">
                      {/* Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-slate-600 mb-8 italic leading-relaxed">"{testimonial.content}"</p>

                      {/* Author */}
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-14 w-14 border-2 border-rose-200">
                          <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback className="bg-rose-100 text-rose-700 font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-slate-900 text-lg">{testimonial.name}</div>
                          <div className="text-slate-600 text-sm">{testimonial.role}</div>
                          <Badge variant="secondary" className="bg-rose-50 text-rose-700 border-rose-200 mt-1">
                            {testimonial.institution}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Mentorship Testimonials */}
            <TabsContent value="mentorship" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.mentorship.map((testimonial, index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-8">
                      {/* Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-slate-600 mb-8 italic leading-relaxed">"{testimonial.content}"</p>

                      {/* Author */}
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-14 w-14 border-2 border-blue-200">
                          <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-slate-900 text-lg">{testimonial.name}</div>
                          <div className="text-slate-600 text-sm">{testimonial.role}</div>
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 mt-1">
                            {testimonial.institution}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </section>
  )
}
