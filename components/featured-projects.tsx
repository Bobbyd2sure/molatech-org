"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter } from "@/components/ui/aceternity/animated-modal"
import { MagneticHover } from "@/components/ui/aceternity/magnetic-hover"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Calendar, Users, Award, ArrowRight, Code, Layers, Zap } from "lucide-react"
import Link from "next/link"

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("all")

  const featuredProjects = [
    {
      id: "ecommerce",
      title: "E-commerce Revolution Platform",
      category: "web-development",
      categoryLabel: "Web Development",
      description:
        "A comprehensive e-commerce solution that revolutionized online shopping for our client, featuring AI-powered recommendations, real-time inventory management, and seamless payment processing.",
      longDescription:
        "This project showcases our expertise in building scalable, modern web applications. We implemented a microservices architecture with React frontend, Node.js backend, and integrated multiple third-party services including Stripe for payments, AWS for cloud infrastructure, and custom AI algorithms for product recommendations.",
      imageUrl: "/ecommerce-marte-beauty.png",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Redis", "Docker", "Kubernetes"],
      metrics: [
        { label: "Performance Increase", value: "300%" },
        { label: "User Engagement", value: "+150%" },
        { label: "Conversion Rate", value: "+85%" },
        { label: "Load Time", value: "0.8s" },
      ],
      timeline: "6 months",
      teamSize: "8 developers",
      client: "TechCorp Industries",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "AI-powered product recommendations",
        "Real-time inventory management",
        "Multi-vendor marketplace support",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
        "Secure payment processing",
      ],
      featured: true,
    },
    {
      id: "healthcare",
      title: "Healthcare Patient Portal",
      category: "web-development",
      categoryLabel: "Web Development",
      description:
        "HIPAA-compliant patient management system that streamlined operations for a network of healthcare providers while improving patient experience.",
      longDescription:
        "We developed a secure, HIPAA-compliant patient portal that allows patients to schedule appointments, access medical records, communicate with providers, and manage payments. The system integrates with existing EHR systems and provides healthcare providers with a comprehensive dashboard for patient management.",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20at%2022.03.33.png-2zDd3IARSjHnJx2eKl9nH64jg1UdOz.jpeg",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Docker", "Redis", "Socket.io"],
      metrics: [
        { label: "Operational Efficiency", value: "+65%" },
        { label: "Patient Satisfaction", value: "+90%" },
        { label: "Scheduling Time", value: "-75%" },
        { label: "Paper Usage", value: "-95%" },
      ],
      timeline: "8 months",
      teamSize: "6 developers",
      client: "MediCare Network",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Secure patient records",
        "Appointment scheduling",
        "Telemedicine integration",
        "Billing management",
        "Provider messaging",
        "Insurance verification",
      ],
      featured: true,
    },
    {
      id: "fitness",
      title: "Fitness Tracking Mobile App",
      category: "app-development",
      categoryLabel: "App Development",
      description:
        "Cross-platform mobile application for fitness tracking with social features, personalized workout plans, and nutrition guidance.",
      longDescription:
        "This mobile app helps users track their fitness journey with features like workout tracking, nutrition logging, progress photos, and social sharing. We built it using React Native for cross-platform compatibility, with a Node.js backend and MongoDB for data storage. The app includes gamification elements to keep users motivated.",
      imageUrl: "/fitness-app-fittrack.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Redux", "AWS Amplify"],
      metrics: [
        { label: "App Store Rating", value: "4.8/5" },
        { label: "User Retention", value: "78%" },
        { label: "Downloads", value: "100K+" },
        { label: "Active Users", value: "45K+" },
      ],
      timeline: "5 months",
      teamSize: "5 developers",
      client: "FitLife Inc.",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Workout tracking",
        "Nutrition logging",
        "Progress photos",
        "Social sharing",
        "Personalized plans",
        "Gamification elements",
      ],
      featured: true,
    },
    {
      id: "finance",
      title: "Financial Services Dashboard",
      category: "website-design",
      categoryLabel: "Website Design",
      description:
        "Elegant, conversion-focused design for a financial advisory firm with advanced data visualization and client management tools.",
      longDescription:
        "We designed and developed a comprehensive dashboard for financial advisors to manage client portfolios, track investments, and generate reports. The design focuses on data clarity and accessibility, with a clean, professional aesthetic that builds trust with clients. The system includes advanced charting capabilities and real-time market data integration.",
      imageUrl: "/financial-dashboard-kokonut.png",
      technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS", "Supabase", "Vercel"],
      metrics: [
        { label: "Client Acquisition", value: "+40%" },
        { label: "Advisor Efficiency", value: "+55%" },
        { label: "Client Satisfaction", value: "+75%" },
        { label: "Reporting Time", value: "-80%" },
      ],
      timeline: "4 months",
      teamSize: "4 developers",
      client: "WealthWise Advisors",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Portfolio management",
        "Investment tracking",
        "Client communication",
        "Report generation",
        "Market data integration",
        "Goal tracking",
      ],
      featured: true,
    },
  ]

  const filteredProjects =
    activeTab === "all" ? featuredProjects : featuredProjects.filter((project) => project.category === activeTab)

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams className="opacity-20" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our showcase of successful projects that demonstrate our expertise and innovation
            </motion.p>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-4 max-w-md">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web-development">Web</TabsTrigger>
                <TabsTrigger value="app-development">App</TabsTrigger>
                <TabsTrigger value="website-design">Design</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl border overflow-hidden">
                  {/* Project Image */}
                  <CardItem translateZ="100" className="w-full">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4">
                          <Badge
                            className="bg-gradient-to-r from-purple-500/90 to-blue-500/90 text-white border-0"
                            variant="secondary"
                          >
                            {project.categoryLabel}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardItem>

                  {/* Project Content */}
                  <div className="p-6">
                    <CardItem translateZ="60" className="mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </CardItem>

                    <CardItem translateZ="40" className="mb-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    </CardItem>

                    {/* Technologies */}
                    <CardItem translateZ="30" className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </CardItem>

                    {/* Key Metrics */}
                    <CardItem translateZ="50" className="mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        {project.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="bg-muted/50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-purple-600">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardItem>

                    {/* Actions */}
                    <CardItem translateZ="80" className="mt-auto">
                      <div className="flex gap-2">
                        <Modal>
                          <ModalTrigger className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center">
                            View Details
                          </ModalTrigger>
                          <ModalBody>
                            <ModalContent>
                              {/* Header */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mb-6"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge
                                    variant="secondary"
                                    className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 dark:text-purple-300"
                                  >
                                    {project.categoryLabel}
                                  </Badge>
                                  <Badge variant="outline">Featured Project</Badge>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                  {project.title}
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>
                              </motion.div>

                              {/* Project Image */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-6"
                              >
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src={project.imageUrl || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-48 md:h-64 object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                              </motion.div>

                              {/* Project Details */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-6"
                              >
                                {/* Metrics */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                                    Key Results
                                  </h3>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {project.metrics.map((metric, index) => (
                                      <div
                                        key={index}
                                        className="text-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg"
                                      >
                                        <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                                          {metric.value}
                                        </div>
                                        <div className="text-xs text-neutral-600 dark:text-neutral-400">
                                          {metric.label}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Project Info */}
                                <div className="grid md:grid-cols-3 gap-4">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-purple-600" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                      Timeline: {project.timeline}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-purple-600" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                      Team: {project.teamSize}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4 text-purple-600" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                      Client: {project.client}
                                    </span>
                                  </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                                    Technologies Used
                                  </h3>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                {/* Features */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                                    Key Features
                                  </h3>
                                  <div className="grid md:grid-cols-2 gap-2">
                                    {project.features.map((feature, index) => (
                                      <div key={index} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                          {feature}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Long Description */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                                    Project Overview
                                  </h3>
                                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {project.longDescription}
                                  </p>
                                </div>
                              </motion.div>
                            </ModalContent>

                            <ModalFooter>
                              <div className="flex gap-2 w-full">
                                <Button asChild variant="outline" className="flex-1 bg-transparent">
                                  <Link href={project.githubUrl}>
                                    <Github className="h-4 w-4 mr-2" />
                                    View Code
                                  </Link>
                                </Button>
                                <Button
                                  asChild
                                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                                >
                                  <Link href={project.liveUrl}>
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Live Demo
                                  </Link>
                                </Button>
                              </div>
                            </ModalFooter>
                          </ModalBody>
                        </Modal>

                        <MagneticHover strength={0.1}>
                          <Button
                            asChild
                            variant="outline"
                            size="icon"
                            className="rounded-lg border-purple-500/20 hover:bg-purple-500/10 bg-transparent"
                          >
                            <Link href={project.liveUrl}>
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </MagneticHover>
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-muted/30 p-6 rounded-xl border border-muted text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              150+
            </div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>

          <div className="bg-muted/30 p-6 rounded-xl border border-muted text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>

          <div className="bg-muted/30 p-6 rounded-xl border border-muted text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-500/10 rounded-full">
                <Layers className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
              12
            </div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </div>

          <div className="bg-muted/30 p-6 rounded-xl border border-muted text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-pink-500/10 rounded-full">
                <Zap className="h-6 w-6 text-pink-600" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">Support & Maintenance</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <MagneticHover strength={0.2}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white border-0 shadow-lg group"
            >
              <Link href="/contact">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MagneticHover>
        </motion.div>
      </div>
    </section>
  )
}
