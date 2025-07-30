"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { AnimatedCards } from "@/components/ui/aceternity/animated-cards"
import { motion, useInView } from "framer-motion"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { BackgroundGrid } from "@/components/ui/aceternity/background-grid"
import { MagneticHover } from "@/components/ui/aceternity/magnetic-hover"
import { ImageReveal } from "@/components/ui/aceternity/image-reveal"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { cn } from "@/lib/utils"

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const projectsPerPage = 6

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: "1",
      title: "E-commerce Platform",
      category: "web-development",
      description: "Modern e-commerce solution with advanced filtering and payment processing",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "2",
      title: "Fitness Tracker App",
      category: "app-development",
      description: "Cross-platform mobile app for fitness tracking and social sharing",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "3",
      title: "Financial Services Website",
      category: "website-design",
      description: "Elegant, conversion-focused design for a financial advisory firm",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["Figma", "Next.js", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "4",
      title: "Healthcare Portal",
      category: "web-development",
      description: "Secure patient management system with HIPAA compliance",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "5",
      title: "Real Estate Listings",
      category: "website-design",
      description: "Property listing platform with advanced search and filtering",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "GraphQL", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "6",
      title: "Inventory Management System",
      category: "web-development",
      description: "Cloud-based inventory tracking solution for retail businesses",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["Angular", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "7",
      title: "Restaurant Ordering App",
      category: "app-development",
      description: "Mobile app for table reservations and food ordering",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["Flutter", "Firebase", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "8",
      title: "Corporate Intranet",
      category: "web-development",
      description: "Internal communication and document management platform",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "9",
      title: "Travel Booking Platform",
      category: "website-design",
      description: "Comprehensive travel booking site with personalized recommendations",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Prisma", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "10",
      title: "Event Management System",
      category: "web-development",
      description: "End-to-end solution for event planning and ticket sales",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Django", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "11",
      title: "Delivery Tracking App",
      category: "app-development",
      description: "Real-time package tracking with driver management",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Socket.io", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "12",
      title: "Educational Platform",
      category: "web-development",
      description: "Interactive learning management system with course creation tools",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects", color: "from-purple-500 to-blue-500" },
    { id: "web-development", name: "Web Development", color: "from-green-500 to-teal-500" },
    { id: "app-development", name: "App Development", color: "from-orange-500 to-red-500" },
    { id: "website-design", name: "Website Design", color: "from-pink-500 to-purple-500" },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const currentProjects = filteredProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Create items for the animated cards
  const cardItems = projects.map((project) => ({
    id: project.id,
    content: (
      <MagneticHover strength={0.2}>
        <Card className="w-[300px] overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/20 border-0 bg-gradient-to-br from-background to-muted">
          <div className="aspect-video relative overflow-hidden">
            <ImageReveal
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full"
              direction="up"
            />
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/80 to-blue-500/80 text-white backdrop-blur-sm">
                {categories
                  .find((c) => c.id === project.category)
                  ?.name.replace(" Development", "")
                  .replace(" Design", "")}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <Button size="sm" variant="secondary" className="flex-1">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Live
                </Button>
                <Button size="sm" variant="secondary" className="flex-1">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Button>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.technologies?.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </MagneticHover>
    ),
  }))

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundGrid className="opacity-30" />
      <FloatingParticles className="opacity-60" particleCount={30} />
      <Spotlight className="hidden md:block opacity-40" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Recent Projects
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our portfolio of successful projects across various industries
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8 mb-10"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <MagneticHover strength={0.1}>
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setCurrentPage(0)
                  }}
                  className={cn(
                    "rounded-full relative overflow-hidden transition-all duration-300",
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-0 shadow-lg`
                      : "hover:shadow-md",
                  )}
                >
                  <span className="relative z-10">{category.name}</span>
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  )}
                </Button>
              </MagneticHover>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Cards Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <AnimatedCards items={cardItems} speed="slow" pauseOnHover={true} />
        </motion.div>

        {/* Enhanced 3D Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl border">
                  <div className="relative overflow-hidden rounded-xl">
                    {/* Project Image with 3D Effect */}
                    <CardItem translateZ="100" className="w-full">
                      <div className="aspect-video relative overflow-hidden rounded-lg">
                        <ImageReveal
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full"
                          direction="up"
                        />

                        {/* Overlay with Actions */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex gap-2 w-full">
                            <MagneticHover strength={0.1} className="flex-1">
                              <Button size="sm" variant="secondary" className="w-full backdrop-blur-sm">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Live Demo
                              </Button>
                            </MagneticHover>
                            <MagneticHover strength={0.1} className="flex-1">
                              <Button size="sm" variant="outline" className="w-full backdrop-blur-sm">
                                <Github className="h-3 w-3 mr-1" />
                                Source
                              </Button>
                            </MagneticHover>
                          </div>
                        </motion.div>

                        {/* Category Badge */}
                        <CardItem translateZ="80" className="absolute top-2 right-2">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/90 to-blue-500/90 text-white backdrop-blur-sm">
                            {categories
                              .find((c) => c.id === project.category)
                              ?.name.replace(" Development", "")
                              .replace(" Design", "")}
                          </span>
                        </CardItem>
                      </div>
                    </CardItem>

                    {/* Project Info */}
                    <div className="p-6">
                      <CardItem translateZ="60" className="mb-2">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                      </CardItem>

                      <CardItem translateZ="40" className="mb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                      </CardItem>

                      {/* Technologies */}
                      <CardItem translateZ="20">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className="px-2 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-md border border-primary/20"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            <MagneticHover strength={0.1}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="rounded-full hover:shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
            </MagneticHover>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <motion.button
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentPage === i
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                  onClick={() => setCurrentPage(i)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <MagneticHover strength={0.1}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="rounded-full hover:shadow-lg transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </MagneticHover>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <MagneticHover strength={0.2}>
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white border-0 shadow-lg"
              >
                <span className="relative z-10">View All Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </Button>
            </div>
          </MagneticHover>
        </motion.div>
      </div>
    </section>
  )
}
