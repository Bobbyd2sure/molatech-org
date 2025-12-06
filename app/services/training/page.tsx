"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { GraduationCap, Users, Clock, CheckCircle, BookOpen, Zap, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Aceternity UI Components
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { TextReveal } from "@/components/ui/aceternity/text-reveal"
import { FocusCards } from "@/components/ui/aceternity/focus-cards"
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { BackgroundLines } from "@/components/ui/aceternity/background-lines"
import { AnimatedBackgroundLines } from "@/components/ui/aceternity/animated-background-lines"
import { GridBackground } from "@/components/ui/aceternity/grid-background"
import { FlipWords } from "@/components/ui/aceternity/flip-words"
import { GlowingStarsBackgroundCard } from "@/components/ui/aceternity/glowing-stars"
import { ParallaxScroll } from "@/components/ui/aceternity/parallax-scroll"
import { ImageReveal } from "@/components/ui/aceternity/image-reveal"

// Import other components
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CallToAction from "@/components/call-to-action"

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState("webDev")

  // Training Programs Data
  const trainingPrograms = [
    {
      id: "webDev",
      title: "Web Development",
      courses: [
        { name: "Full-Stack JavaScript", duration: "12 weeks", level: "Intermediate" },
        { name: "React Mastery", duration: "8 weeks", level: "Advanced" },
        { name: "Next.js & Server Components", duration: "6 weeks", level: "Advanced" },
        { name: "Frontend Fundamentals", duration: "10 weeks", level: "Beginner" },
        { name: "Backend with Node.js", duration: "8 weeks", level: "Intermediate" },
        { name: "Web Performance Optimization", duration: "4 weeks", level: "Advanced" },
      ],
    },
    {
      id: "mobileDev",
      title: "Mobile Development",
      courses: [
        { name: "React Native Fundamentals", duration: "10 weeks", level: "Intermediate" },
        { name: "iOS Development with Swift", duration: "12 weeks", level: "Intermediate" },
        { name: "Android Development with Kotlin", duration: "12 weeks", level: "Intermediate" },
        { name: "Cross-Platform App Development", duration: "8 weeks", level: "Advanced" },
        { name: "Mobile UX Design", duration: "6 weeks", level: "Beginner" },
        { name: "Mobile App Testing", duration: "4 weeks", level: "Intermediate" },
      ],
    },
    {
      id: "cloudComputing",
      title: "Cloud Computing",
      courses: [
        { name: "AWS Solutions Architect", duration: "10 weeks", level: "Advanced" },
        { name: "Azure Fundamentals", duration: "6 weeks", level: "Beginner" },
        { name: "Google Cloud Platform", duration: "8 weeks", level: "Intermediate" },
        { name: "Cloud Security", duration: "6 weeks", level: "Advanced" },
        { name: "DevOps & CI/CD", duration: "8 weeks", level: "Intermediate" },
        { name: "Kubernetes Mastery", duration: "6 weeks", level: "Advanced" },
      ],
    },
    {
      id: "dataScience",
      title: "Data Science",
      courses: [
        { name: "Python for Data Science", duration: "8 weeks", level: "Beginner" },
        { name: "Machine Learning Fundamentals", duration: "10 weeks", level: "Intermediate" },
        { name: "Deep Learning with TensorFlow", duration: "12 weeks", level: "Advanced" },
        { name: "Data Visualization", duration: "6 weeks", level: "Intermediate" },
        { name: "Big Data Analytics", duration: "8 weeks", level: "Advanced" },
        { name: "Natural Language Processing", duration: "6 weeks", level: "Advanced" },
      ],
    },
  ]

  // Training Formats
  const trainingFormats = [
    {
      title: "Corporate Training",
      description: "Customized training programs delivered at your workplace for your entire team.",
      icon: Users,
      features: [
        "On-site or remote delivery options",
        "Customized curriculum based on team needs",
        "Team building exercises integrated into learning",
        "Progress tracking and reporting",
        "Post-training support and resources",
        "Certification preparation",
      ],
      color: "from-purple-500 to-indigo-700",
    },
    {
      title: "Individual Courses",
      description: "Self-paced or instructor-led courses for individual professional development.",
      icon: GraduationCap,
      features: [
        "Flexible scheduling options",
        "One-on-one mentoring sessions",
        "Personalized learning paths",
        "Industry-recognized certification programs",
        "Career guidance and networking",
        "Lifetime access to course materials",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Workshops & Bootcamps",
      description: "Intensive short-term programs focused on specific skills and technologies.",
      icon: Zap,
      features: [
        "Immersive hands-on learning experience",
        "Real-world projects and case studies",
        "Expert instructors with industry experience",
        "Networking with peers and professionals",
        "Small class sizes for personalized attention",
        "Job placement assistance",
      ],
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Online Learning",
      description: "Flexible digital learning experiences accessible from anywhere in the world.",
      icon: BookOpen,
      features: [
        "24/7 access to course materials",
        "Interactive learning modules",
        "Live virtual classroom sessions",
        "Discussion forums and peer collaboration",
        "Self-paced learning options",
        "Mobile-friendly platform",
      ],
      color: "from-green-500 to-emerald-600",
    },
  ]

  // Learning Process Steps
  const learningProcess = [
    {
      icon: "🔍",
      title: "Skills Assessment",
      description:
        "We begin with a comprehensive assessment of your current skills and knowledge gaps to create a personalized learning plan.",
    },
    {
      icon: "🎯",
      title: "Custom Curriculum",
      description:
        "Our experts design a tailored curriculum that addresses your specific learning objectives and career goals.",
    },
    {
      icon: "📚",
      title: "Immersive Learning",
      description: "Engage in hands-on, project-based learning experiences guided by industry professionals.",
    },
    {
      icon: "💻",
      title: "Practical Application",
      description: "Apply your new skills to real-world projects that simulate actual workplace challenges.",
    },
    {
      icon: "🔄",
      title: "Continuous Feedback",
      description: "Receive ongoing feedback and guidance to refine your skills and address any learning challenges.",
    },
    {
      icon: "🏆",
      title: "Certification",
      description: "Complete your training with industry-recognized certifications that validate your expertise.",
    },
  ]

  // Case Studies
  const caseStudies = [
    {
      company: "TechNova Startup",
      industry: "Technology",
      challenge:
        "Needed to upskill their development team on modern web technologies to accelerate product development.",
      solution: "12-week custom Full-Stack JavaScript training program for their 20-person development team.",
      results: [
        "100% team completion rate",
        "50% improvement in development speed",
        "Successful launch of 3 new product features",
        "Reduced technical debt by 40%",
      ],
      image: "/tech-startup-team-training.png",
    },
    {
      company: "Global Financial Services",
      industry: "Finance",
      challenge: "Required comprehensive cybersecurity training for 500+ employees to meet compliance requirements.",
      solution: "Developed a modular cybersecurity awareness program with role-specific training paths.",
      results: [
        "90% reduction in security incidents",
        "100% compliance with industry regulations",
        "Improved security culture across organization",
        "Successful security audit with zero findings",
      ],
      image: "/corporate-cybersecurity-training.png",
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Needed to transition their team from legacy systems to cloud-based infrastructure.",
      solution: "Customized AWS and Azure training program with focus on HIPAA compliance and security.",
      results: [
        "Successful migration to cloud infrastructure",
        "35% reduction in operational costs",
        "Improved system reliability from 99.5% to 99.99%",
        "Enhanced data security protocols",
      ],
      image: "/healthcare-cloud-training.png",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      quote:
        "The training program completely transformed our development team's capabilities. We're now shipping features twice as fast with higher quality code.",
      name: "Adeola Mwandala",
      title: "CEO, Marte Beauty Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The cybersecurity training was comprehensive and engaging. Our employees actually enjoyed the learning process, which made implementation much smoother.",
      name: "Thomas Ndhlebe",
      title: "Tenderglove Healthcare",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The cloud migration training was exactly what our team needed. The hands-on approach ensured everyone was confident before we started our actual migration.",
      name: "Mary Smith",
      title: "CEO, Marymia Limited",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Additional testimonials for infinite moving cards
  const additionalTestimonials = [
    {
      quote:
        "The React Native course helped me transition from web to mobile development seamlessly. Highly recommended!",
      name: "Adeola Mwandala",
      title: "CEO, Marte Beauty Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The AWS certification training was intense but incredibly valuable. I passed the exam on my first attempt.",
      name: "Thomas Ndhlebe",
      title: "Tenderglove Healthcare",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "The corporate training program was tailored perfectly to our team's needs. Worth every penny.",
      name: "Mary Smith",
      title: "CEO, Marymia Limited",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Training packages
  const trainingPackages = [
    {
      title: "Starter",
      description: "For individuals or small teams getting started with new technologies",
      features: [
        "Access to foundational courses",
        "Self-paced learning materials",
        "Basic certification preparation",
        "Community forum access",
        "3 months of support",
        "Digital certificate of completion",
      ],
      isPopular: false,
    },
    {
      title: "Professional",
      description: "For teams seeking comprehensive skills development and certification",
      features: [
        "Access to all courses and workshops",
        "Instructor-led sessions",
        "Advanced certification preparation",
        "1-on-1 mentoring sessions",
        "12 months of support",
        "Priority access to new content",
        "Team progress reporting",
        "Custom learning paths",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      description: "For organizations requiring custom training solutions at scale",
      features: [
        "Fully customized curriculum",
        "On-site or remote training options",
        "Executive briefings and workshops",
        "Dedicated training manager",
        "Enterprise-wide license",
        "White-labeled learning portal",
        "Integration with HR systems",
        "Quarterly skill gap analysis",
        "Unlimited support",
      ],
      isPopular: false,
    },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "How are your training programs delivered?",
      answer:
        "Our training programs are delivered through multiple formats including in-person workshops, live virtual classrooms, self-paced online courses, and hybrid approaches. We tailor the delivery method to your team's needs and preferences.",
    },
    {
      question: "Do you offer custom training programs?",
      answer:
        "Yes, we specialize in developing custom training programs tailored to your organization's specific needs, technologies, and skill gaps. Our team works closely with you to design a curriculum that addresses your unique challenges.",
    },
    {
      question: "Are your trainers industry professionals?",
      answer:
        "Absolutely. All our trainers are experienced industry professionals with at least 8+ years of hands-on experience in their respective fields. They bring real-world expertise and practical insights to every training session.",
    },
    {
      question: "Do you provide certification preparation?",
      answer:
        "Yes, many of our training programs include preparation for industry-recognized certifications. We offer practice exams, study materials, and focused coaching to help participants successfully obtain their certifications.",
    },
    {
      question: "How do you measure training effectiveness?",
      answer:
        "We use a comprehensive approach to measure training effectiveness, including pre and post-training assessments, practical skill evaluations, project completions, certification pass rates, and post-training surveys to ensure learning objectives are met.",
    },
    {
      question: "Can training be scheduled around our work hours?",
      answer:
        "Yes, we offer flexible scheduling options including evenings, weekends, and distributed learning approaches to minimize disruption to your team's work schedule while maximizing learning effectiveness.",
    },
  ]

  // Training statistics
  const trainingStats = [
    { value: "98%", label: "Satisfaction Rate" },
    { value: "92%", label: "Certification Pass Rate" },
    { value: "85%", label: "Skills Application" },
    { value: "40%", label: "Average Productivity Increase" },
    { value: "250+", label: "Enterprise Clients" },
    { value: "15,000+", label: "Professionals Trained" },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Aceternity UI */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <WavyBackground className="absolute inset-0 z-0" colors={["#8b5cf6", "#6366f1", "#4f46e5", "#4338ca"]} />
        <BackgroundBeams className="absolute inset-0 z-10 opacity-40" />
        <FloatingParticles
          className="absolute inset-0 z-20"
          quantity={40}
          colors={["#c4b5fd", "#a78bfa", "#8b5cf6"]}
          min={3}
          max={8}
        />
        <Spotlight className="absolute inset-0 z-30" fill="#a855f7" />

        <div className="container relative z-40 px-4 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex justify-center"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Professional Training
                </span>
                <br />
                <FlipWords
                  className="text-gray-900"
                  words={["for Modern Tech Teams", "for Career Advancement", "for Digital Transformation"]}
                />
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto backdrop-blur-sm bg-white/30 p-4 rounded-lg"
            >
              Empower your team with cutting-edge technology skills through our comprehensive, expert-led training
              programs designed for today's digital landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Link href="/start?service=training">Book Training Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50">
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <CardContainer className="w-full max-w-md">
              <CardBody className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 relative group/card rounded-xl p-6">
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Professional Training"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </CardItem>
                <CardItem translateZ="50" className="mt-4 text-xl font-semibold text-center text-gray-900">
                  Expert-Led Training Programs
                </CardItem>
                <CardItem translateZ="60" className="mt-2 text-sm text-center text-gray-600">
                  Hands-on learning experiences with industry professionals
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-600 text-sm mb-2">Scroll to explore</span>
            <ChevronRight className="h-6 w-6 text-gray-600 transform rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Training Statistics */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <BackgroundLines className="absolute inset-0 z-0 opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <TextReveal text="Training Impact" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our training programs deliver measurable results for professionals and organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {trainingStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <CardContainer className="w-full">
                  <CardBody className="bg-white border border-indigo-100 rounded-xl p-6 text-center h-full">
                    <CardItem translateZ="50" className="text-3xl md:text-4xl font-bold text-indigo-600">
                      {stat.value}
                    </CardItem>
                    <CardItem translateZ="30" className="text-sm md:text-base text-gray-700 mt-2">
                      {stat.label}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats with FocusCards */}
      <section className="py-20 relative overflow-hidden">
        <GridBackground className="absolute inset-0 z-0 opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Flexible Options</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Formats</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the training delivery method that works best for your team and objectives
            </p>
          </div>

          <FocusCards className="max-w-5xl mx-auto">
            {trainingFormats.map((format, index) => (
              <div key={index} className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${format.color} opacity-80 rounded-xl`} />
                <div className="relative h-full p-8 flex flex-col">
                  <div className="p-3 bg-white/20 rounded-full w-fit mb-4">
                    <format.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{format.title}</h3>
                  <p className="text-white/90 mb-6">{format.description}</p>
                  <div className="mt-auto">
                    <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {format.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-white flex-shrink-0" />
                          <span className="text-white/90 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </FocusCards>
        </div>
      </section>

      {/* Training Programs with Tabs */}
      <section id="programs" className="py-20 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
        <AnimatedBackgroundLines className="absolute inset-0 z-0 opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Comprehensive Curriculum</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our diverse range of technology training programs designed to build in-demand skills
            </p>
          </div>

          <Tabs defaultValue="webDev" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {trainingPrograms.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className={`${activeTab === program.id ? "bg-indigo-600 text-white" : "bg-white"} border border-indigo-200`}
                >
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {trainingPrograms.map((program) => (
              <TabsContent
                key={program.id}
                value={program.id}
                className="focus-visible:outline-none focus-visible:ring-0"
              >
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{program.title} Courses</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {program.courses.map((course, idx) => (
                        <Card key={idx} className="overflow-hidden border-indigo-100">
                          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 pb-4">
                            <CardTitle className="text-lg text-gray-900">{course.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-indigo-600" />
                                <span className="text-sm text-gray-700">{course.duration}</span>
                              </div>
                              <Badge
                                variant={
                                  course.level === "Beginner"
                                    ? "outline"
                                    : course.level === "Intermediate"
                                      ? "secondary"
                                      : "default"
                                }
                              >
                                {course.level}
                              </Badge>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full mt-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                            >
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-20 relative overflow-hidden">
        <WavyBackground className="absolute inset-0 z-0 opacity-30" colors={["#c7d2fe", "#e0e7ff", "#eef2ff"]} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Proven Methodology</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Learning Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A structured approach to ensure effective skill development and knowledge retention
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CardContainer className="w-full">
                    <CardBody className="bg-white border border-indigo-100 rounded-xl p-6 h-full">
                      <CardItem translateZ="60" className="text-4xl mb-4">
                        {step.icon}
                      </CardItem>
                      <CardItem translateZ="50" className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </CardItem>
                      <CardItem translateZ="40" className="text-gray-700">
                        {step.description}
                      </CardItem>
                      <CardItem translateZ="30" className="mt-4 text-sm text-indigo-600 font-medium">
                        Step {index + 1} of {learningProcess.length}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0 opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Success Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Case Studies</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from our comprehensive training programs across different industries
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-16 last:mb-0"
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <ImageReveal>
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.company}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                      />
                    </ImageReveal>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <Badge className="mb-2 bg-indigo-100 text-indigo-800">{study.industry}</Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Challenge:</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Solution:</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <GlowingStarsBackgroundCard className="absolute inset-0 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Client Feedback</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from professionals and organizations who have transformed through our training programs
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>

          <div className="max-w-6xl mx-auto">
            <InfiniteMovingCards items={additionalTestimonials} direction="right" speed="slow" />
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
        <BackgroundLines className="absolute inset-0 z-0 opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Investment Options</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Packages</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Flexible training solutions designed to fit your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trainingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`h-full rounded-xl overflow-hidden border ${pkg.isPopular ? "border-indigo-400" : "border-gray-200"}`}
                >
                  {pkg.isPopular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div
                    className={`p-8 ${pkg.isPopular ? "bg-gradient-to-br from-indigo-50 to-purple-50" : "bg-white"}`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            className={`h-5 w-5 ${pkg.isPopular ? "text-indigo-600" : "text-green-500"} flex-shrink-0 mt-0.5`}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button
                        className={`w-full ${pkg.isPopular ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
                        variant={pkg.isPopular ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="py-20 relative overflow-hidden">
        <GridBackground className="absolute inset-0 z-0 opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Expert Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Instructors</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn from industry professionals with extensive real-world experience
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ParallaxScroll
              images={[
                {
                  src: "/placeholder.svg?height=400&width=300",
                  alt: "John Davis - Web Development Lead",
                },
                {
                  src: "/placeholder.svg?height=400&width=300",
                  alt: "Sarah Chen - Mobile Development Specialist",
                },
                {
                  src: "/placeholder.svg?height=400&width=300",
                  alt: "Marcus Johnson - Cloud Architecture Expert",
                },
                {
                  src: "/placeholder.svg?height=400&width=300",
                  alt: "Priya Patel - Data Science Instructor",
                },
                {
                  src: "/placeholder.svg?height=400&width=300",
                  alt: "Carlos Rodriguez - Cybersecurity Specialist",
                },
                {
                  src: "/placeholder.svg?height=400&width=300",
                  alt: "Jennifer Kim - UX/UI Design Lead",
                },
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50">
              View All Instructors
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0 opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <FAQSection
            title="Frequently Asked Questions"
            description="Find answers to common questions about our training programs and services"
            faqs={faqItems}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <WavyBackground className="absolute inset-0 z-0 opacity-30" colors={["#c7d2fe", "#e0e7ff", "#eef2ff"]} />

        <div className="container mx-auto px-4 relative z-10">
          <ContactSection />
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Upskill Your Team?"
        description="Invest in your team's growth with our professional training programs"
        primaryActionText="Book Training Consultation"
        primaryActionLink="/start?service=training"
        secondaryActionText="View Programs"
        secondaryActionLink="#programs"
      />
    </div>
  )
}
