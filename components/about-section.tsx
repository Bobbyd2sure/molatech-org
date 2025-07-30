"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import {
  CheckCircle,
  Target,
  Heart,
  Lightbulb,
  BookOpen,
  Users,
  Award,
  Star,
  Quote,
  TrendingUp,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Globe,
} from "lucide-react"
import { useLoading } from "@/components/loading-provider"

const floatingAnimation = "animate-float"
const pulseGlowAnimation = "animate-pulse-glow"
const gradientAnimation = "animate-gradient"

export function AboutSection() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState(0)
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
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description:
        "Committed to providing quality educational support and resources to every student, regardless of their background.",
      stats: "95% Success Rate",
      color: "emerald",
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Building stronger, more resilient communities through education and sustainable support systems.",
      stats: "500+ Lives Touched",
      color: "rose",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Growth",
      description:
        "Constantly evolving our approaches to meet the changing needs of modern education and student development.",
      stats: "10+ Programs Created",
      color: "blue",
    },
  ]

  const achievements = [
    { text: "Distributed over 1,000 free JAMB forms to underprivileged students", year: "2024", impact: "High" },
    { text: "Provided ₦5,000+ in comprehensive financial support for transportation", year: "2024", impact: "High" },
    { text: "Mentored hundreds of students in academic and career development", year: "2018-2024", impact: "High" },
    { text: "Established sustainable educational support programs", year: "2020", impact: "Medium" },
    { text: "Built strategic partnerships with 15+ educational institutions", year: "2021", impact: "Medium" },
    { text: "Created scholarship opportunities for 50+ deserving students", year: "2022", impact: "High" },
    { text: "Launched digital mentorship platform reaching rural communities", year: "2023", impact: "High" },
    { text: "Organized 25+ educational workshops and seminars", year: "2019-2024", impact: "Medium" },
  ]

  const timeline = [
    {
      year: "2018",
      event: "Started educational mentorship program",
      impact: "50+ students",
      description:
        "Began with small group mentoring sessions in Lagos, focusing on JAMB preparation and university guidance.",
      milestone: "Foundation",
    },
    {
      year: "2019",
      event: "Launched JAMB form distribution initiative",
      impact: "100+ forms",
      description:
        "Recognized the financial barrier of JAMB forms and started providing free forms to deserving students.",
      milestone: "Expansion",
    },
    {
      year: "2020",
      event: "Expanded to financial assistance programs",
      impact: "₦50,000+ distributed",
      description: "Added transportation support and educational material funding to address broader student needs.",
      milestone: "Growth",
    },
    {
      year: "2021",
      event: "Established community partnerships",
      impact: "15+ institutions",
      description: "Built strategic alliances with universities, secondary schools, and community organizations.",
      milestone: "Collaboration",
    },
    {
      year: "2022",
      event: "Reached 300+ students milestone",
      impact: "300+ lives changed",
      description: "Achieved significant scale with comprehensive support programs across multiple states.",
      milestone: "Scale",
    },
    {
      year: "2023",
      event: "Achieved 95% success rate",
      impact: "500+ students supported",
      description: "Refined programs to achieve exceptional outcomes with data-driven mentorship approaches.",
      milestone: "Excellence",
    },
    {
      year: "2024",
      event: "Distributed 1,000 JAMB forms",
      impact: "1,000+ forms distributed",
      description: "Reached historic milestone with largest single-year distribution and ₦5,000 transport support.",
      milestone: "Impact",
    },
  ]

  const skills = [
    {
      name: "Educational Leadership",
      level: 95,
      description: "Guiding educational initiatives and policy development",
    },
    { name: "Student Mentorship", level: 98, description: "One-on-one and group mentoring for academic success" },
    { name: "Community Building", level: 92, description: "Creating sustainable support networks and partnerships" },
    { name: "Program Development", level: 88, description: "Designing and implementing educational support programs" },
    {
      name: "Public Speaking",
      level: 90,
      description: "Inspiring audiences through motivational talks and presentations",
    },
    { name: "Strategic Planning", level: 85, description: "Long-term vision and goal-setting for educational impact" },
  ]

  const personalStory = [
    {
      title: "Early Inspiration",
      content:
        "Growing up in Nigeria, I witnessed firsthand the transformative power of education and the barriers that prevent many talented students from accessing quality learning opportunities. This early exposure to educational inequality sparked my passion for creating change.",
      icon: BookOpen,
      year: "Early Years",
    },
    {
      title: "Educational Journey",
      content:
        "My own educational path was supported by mentors and community members who believed in my potential. This experience taught me the profound impact that guidance and support can have on a student's trajectory.",
      icon: GraduationCap,
      year: "Student Years",
    },
    {
      title: "Professional Development",
      content:
        "Through various roles in education and community development, I gained the skills and insights needed to create systematic change. Each experience reinforced my commitment to educational equity.",
      icon: Briefcase,
      year: "Career Growth",
    },
    {
      title: "Community Impact",
      content:
        "Today, I focus on creating sustainable systems that will continue to support students long after my direct involvement. The goal is to build a legacy of educational empowerment that spans generations.",
      icon: Globe,
      year: "Present Day",
    },
  ]

  const testimonialQuotes = [
    {
      quote:
        "Kenny's mentorship changed the trajectory of my entire life. His belief in my potential gave me the confidence to pursue medicine.",
      author: "Dr. Adaora Okafor",
      role: "Medical Doctor",
      year: "2020 Graduate",
    },
    {
      quote:
        "The financial support was just the beginning. Kenny's ongoing guidance helped me navigate university and build a successful career.",
      author: "Ibrahim Musa",
      role: "Software Engineer",
      year: "2021 Graduate",
    },
    {
      quote:
        "Kenny doesn't just give you a fish; he teaches you to fish and then helps you build your own fishing business.",
      author: "Grace Adeolu",
      role: "Entrepreneur",
      year: "2019 Graduate",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-600 border-emerald-200",
      rose: "from-rose-500 to-rose-600 bg-rose-50 text-rose-600 border-rose-200",
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section ref={sectionRef} id="about" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-emerald-400/30 rounded-full ${floatingAnimation}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
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
                <BookOpen className="h-4 w-4 mr-2" />
                About Kenny
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Dedicated to
                <span
                  className={`block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-300% ${gradientAnimation}`}
                >
                  Educational Excellence
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                A passionate educator, mentor, and community leader committed to breaking down barriers and creating
                pathways to success for students across Nigeria. Every student deserves the opportunity to reach their
                full potential.
              </p>
            </>
          )}
        </div>

        {/* Enhanced Tabs Section */}
        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-white shadow-lg rounded-xl p-1 h-14">
            <TabsTrigger
              value="story"
              className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
            >
              My Story
            </TabsTrigger>
            <TabsTrigger
              value="values"
              className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
            >
              Core Values
            </TabsTrigger>
            <TabsTrigger
              value="journey"
              className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
            >
              Journey
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="impact"
              className="rounded-lg data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-sm font-medium"
            >
              Impact
            </TabsTrigger>
          </TabsList>

          {/* Personal Story Tab */}
          <TabsContent value="story" className="space-y-12">
            {/* Personal Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {isLoading ? (
                <>
                  <Skeleton className="h-96 w-full" />
                  <Skeleton className="h-96 w-full" />
                </>
              ) : (
                personalStory.map((story, index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 bg-white/80 backdrop-blur-sm group ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <CardHeader className="pb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`bg-gradient-to-r from-emerald-100 to-emerald-200 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 ${pulseGlowAnimation}`}
                        >
                          <story.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                          {story.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900">{story.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{story.content}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Detailed Biography */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">My Educational Philosophy</h3>
                    {isLoading ? (
                      <div className="space-y-4">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-5/6" />
                        <Skeleton className="h-6 w-4/6" />
                      </div>
                    ) : (
                      <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                        <p>
                          I believe that education is the most powerful tool for transformation, not just for
                          individuals but for entire communities. My approach combines practical support with
                          mentorship, ensuring that students not only access education but also develop the skills and
                          confidence needed to excel.
                        </p>
                        <p>
                          Over the years, I have learned that sustainable change requires more than just financial
                          assistance. It requires building relationships, creating support systems, and fostering a
                          culture of excellence and mutual support within communities.
                        </p>
                        <p>
                          My work is driven by the belief that every student, regardless of their background, deserves
                          the opportunity to pursue their dreams and contribute meaningfully to society. This philosophy
                          guides every program I develop and every student I mentor.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-slate-900">Quick Facts</h4>
                    {isLoading ? (
                      <div className="space-y-4">
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-full" />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-emerald-600" />
                          <div>
                            <div className="font-semibold text-slate-900">Years Active</div>
                            <div className="text-sm text-slate-600">2018 - Present</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                          <MapPin className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-semibold text-slate-900">Based In</div>
                            <div className="text-sm text-slate-600">Lagos, Nigeria</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                          <Users className="h-5 w-5 text-purple-600" />
                          <div>
                            <div className="font-semibold text-slate-900">Students Mentored</div>
                            <div className="text-sm text-slate-600">500+ and counting</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Quotes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {isLoading ? (
                <>
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-48 w-full" />
                </>
              ) : (
                testimonialQuotes.map((testimonial, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                      <p className="text-slate-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.author}</div>
                        <div className="text-sm text-slate-600">{testimonial.role}</div>
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200 mt-1">
                          {testimonial.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Enhanced Values Tab */}
          <TabsContent value="values" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const colorClasses = getColorClasses(value.color)
                return isLoading ? (
                  <Skeleton key={index} className="h-80 w-full" />
                ) : (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-white/80 backdrop-blur-sm group perspective-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <CardHeader className="pb-4 group-hover:rotateX-5 transition-transform duration-300">
                      <div
                        className={`bg-gradient-to-r ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-all duration-300 ${floatingAnimation}`}
                      >
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900">{value.title}</CardTitle>
                      <Badge
                        className={`${colorClasses.split(" ")[2]} ${colorClasses.split(" ")[3]} ${colorClasses.split(" ")[4]} w-fit`}
                      >
                        {value.stats}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Core Principles */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                  <Target className="h-6 w-6 text-emerald-600 mr-3" />
                  Core Principles
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {isLoading ? (
                    <>
                      <div className="space-y-4">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-5/6" />
                        <Skeleton className="h-6 w-4/6" />
                      </div>
                      <div className="space-y-4">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-5/6" />
                        <Skeleton className="h-6 w-4/6" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-emerald-100 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Equity and Access</h4>
                            <p className="text-slate-600">
                              Ensuring that financial constraints never prevent a deserving student from accessing
                              quality education.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Holistic Development</h4>
                            <p className="text-slate-600">
                              Supporting not just academic achievement but also personal growth, character development,
                              and life skills.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-purple-100 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Sustainable Impact</h4>
                            <p className="text-slate-600">
                              Creating systems and programs that continue to benefit students and communities long-term.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-rose-100 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-rose-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Community Partnership</h4>
                            <p className="text-slate-600">
                              Working collaboratively with educational institutions, families, and community leaders.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-amber-100 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Excellence and Innovation</h4>
                            <p className="text-slate-600">
                              Continuously improving our methods and embracing new approaches to educational support.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="bg-teal-100 p-2 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-teal-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Transparency and Accountability</h4>
                            <p className="text-slate-600">
                              Maintaining open communication and measurable outcomes in all our programs and
                              initiatives.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Journey Tab */}
          <TabsContent value="journey" className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                  <TrendingUp className="h-6 w-6 text-emerald-600 mr-3" />
                  My Educational Journey & Milestones
                </CardTitle>
                <p className="text-slate-600">
                  A timeline of growth, impact, and continuous learning in educational leadership.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {isLoading
                    ? [...Array(7)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
                    : timeline.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-start space-x-6 transition-all duration-700 hover:scale-105 group ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className={`bg-gradient-to-r from-emerald-600 to-emerald-700 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg relative group-hover:scale-125 transition-all duration-300 ${pulseGlowAnimation}`}
                            >
                              {item.year.slice(-2)}
                              <div className="absolute -top-2 -right-2 group-hover:scale-110 transition-transform duration-300">
                                <Badge className="bg-white text-emerald-600 text-xs px-2 py-1">{item.milestone}</Badge>
                              </div>
                            </div>
                            {index < timeline.length - 1 && (
                              <div className="w-0.5 h-24 bg-gradient-to-b from-emerald-300 to-emerald-100 mt-4 group-hover:from-emerald-400 group-hover:to-emerald-200 transition-colors duration-300"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-gradient-to-r from-emerald-50 to-teal-50 group-hover:from-emerald-100 group-hover:to-teal-100 transform group-hover:-translate-y-2">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="text-xl font-semibold text-slate-900">{item.year}</h4>
                                  <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">
                                    {item.impact}
                                  </Badge>
                                </div>
                                <h5 className="text-lg font-medium text-emerald-700 mb-2">{item.event}</h5>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                  <Award className="h-6 w-6 text-emerald-600 mr-3" />
                  Key Achievements & Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {isLoading
                    ? [...Array(8)].map((_, i) => <Skeleton key={i} className="h-20 w-full" />)
                    : achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100 hover:shadow-md transition-all duration-300 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div
                            className={`p-2 rounded-lg ${
                              achievement.impact === "High"
                                ? "bg-emerald-100"
                                : achievement.impact === "Medium"
                                  ? "bg-blue-100"
                                  : "bg-slate-100"
                            }`}
                          >
                            <CheckCircle
                              className={`h-5 w-5 ${
                                achievement.impact === "High"
                                  ? "text-emerald-600"
                                  : achievement.impact === "Medium"
                                    ? "text-blue-600"
                                    : "text-slate-600"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-slate-700 font-medium">{achievement.text}</span>
                              <Badge variant="secondary" className="text-xs">
                                {achievement.year}
                              </Badge>
                            </div>
                            <Badge
                              className={`text-xs ${
                                achievement.impact === "High"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : achievement.impact === "Medium"
                                    ? "bg-blue-50 text-blue-700 border-blue-200"
                                    : "bg-slate-50 text-slate-700 border-slate-200"
                              }`}
                            >
                              {achievement.impact} Impact
                            </Badge>
                          </div>
                        </div>
                      ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* New Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Skills Progress */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                    <Star className="h-6 w-6 text-emerald-600 mr-3" />
                    Core Competencies
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {isLoading
                      ? [...Array(6)].map((_, i) => <Skeleton key={i} className="h-16 w-full" />)
                      : skills.map((skill, index) => (
                          <div
                            key={index}
                            className={`space-y-3 transition-all duration-500 hover:scale-105 group ${
                              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                          >
                            <div className="flex justify-between items-center group-hover:translate-x-2 transition-transform duration-300">
                              <div>
                                <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                                  {skill.name}
                                </h4>
                                <p className="text-sm text-slate-600">{skill.description}</p>
                              </div>
                              <Badge
                                className={`bg-emerald-100 text-emerald-800 border-emerald-300 group-hover:scale-110 transition-transform duration-300 ${pulseGlowAnimation}`}
                              >
                                {skill.level}%
                              </Badge>
                            </div>
                            <div className="relative">
                              <Progress
                                value={isVisible ? skill.level : 0}
                                className="h-3 group-hover:h-4 transition-all duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full group-hover:from-emerald-400/40 group-hover:to-teal-400/40 transition-colors duration-300" />
                            </div>
                          </div>
                        ))}
                  </div>
                </CardContent>
              </Card>

              {/* Active Skill Showcase */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Skill Spotlight</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {isLoading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-3/4" />
                      <Skeleton className="h-20 w-full" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  ) : (
                    <div className="text-center space-y-6">
                      <div className={`relative w-32 h-32 mx-auto ${floatingAnimation}`}>
                        <svg
                          className="w-32 h-32 transform -rotate-90 hover:scale-110 transition-transform duration-300"
                          viewBox="0 0 100 100"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-emerald-200"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - skills[activeSkill].level / 100)}`}
                            className={`text-emerald-600 transition-all duration-1000 ease-out ${pulseGlowAnimation}`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-2xl font-bold text-emerald-600 ${gradientAnimation}`}>
                            {skills[activeSkill].level}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{skills[activeSkill].name}</h3>
                        <p className="text-slate-600">{skills[activeSkill].description}</p>
                      </div>
                      <div className="flex justify-center space-x-2">
                        {skills.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveSkill(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === activeSkill ? "bg-emerald-600" : "bg-emerald-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Impact Tab */}
          <TabsContent value="impact" className="space-y-8">
            {/* Impact Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {isLoading
                ? [...Array(4)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
                : [
                    { number: "1,000+", label: "JAMB Forms Distributed", icon: GraduationCap, color: "emerald" },
                    { number: "₦5,000+", label: "Financial Support Given", icon: Heart, color: "rose" },
                    { number: "500+", label: "Students Mentored", icon: Users, color: "blue" },
                    { number: "95%", label: "Success Rate", icon: TrendingUp, color: "purple" },
                  ].map((stat, index) => (
                    <Card
                      key={index}
                      className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 text-center group perspective-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{
                        transitionDelay: `${index * 150}ms`,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <CardContent className="p-6 group-hover:rotateX-5 transition-transform duration-300">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${
                            stat.color === "emerald"
                              ? "from-emerald-500 to-emerald-600"
                              : stat.color === "rose"
                                ? "from-rose-500 to-rose-600"
                                : stat.color === "blue"
                                  ? "from-blue-500 to-blue-600"
                                  : "from-purple-500 to-purple-600"
                          } mb-4 shadow-lg group-hover:scale-125 transition-all duration-300 ${floatingAnimation}`}
                        >
                          <stat.icon className="h-8 w-8 text-white" />
                        </div>
                        <div
                          className={`text-3xl font-bold mb-2 ${
                            stat.color === "emerald"
                              ? "text-emerald-600"
                              : stat.color === "rose"
                                ? "text-rose-600"
                                : stat.color === "blue"
                                  ? "text-blue-600"
                                  : "text-purple-600"
                          }`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
            </div>

            {/* Call to Action */}
            <Card
              className={`border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all duration-500 transform hover:scale-105 ${pulseGlowAnimation}`}
            >
              <CardContent className="p-8 text-center">
                <h3 className={`text-2xl font-bold mb-4 ${gradientAnimation}`}>Ready to Make a Difference Together?</h3>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Whether you're a student seeking support, an educator looking to collaborate, or someone who shares my
                  passion for educational equity, I'd love to connect with you.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className={`bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg font-semibold transform hover:scale-110 transition-all duration-300 ${floatingAnimation}`}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get In Touch
                  <Users className="h-5 w-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
