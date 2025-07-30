"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Code,
  Globe,
  Smartphone,
  Zap,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Database,
  Layers,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { GridBackground } from "@/components/ui/aceternity/grid-background"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { MagneticHover } from "@/components/ui/aceternity/magnetic-hover"
import { AnimatedGradient } from "@/components/ui/aceternity/animated-gradient"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { BackgroundLines } from "@/components/ui/aceternity/background-lines"
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { useState } from "react"

export default function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("frontend")

  const technologies = {
    frontend: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PHP", "Laravel", "Django", "Express.js"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
    cloud: ["AWS", "Vercel", "Docker", "Kubernetes", "Azure", "Google Cloud"],
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a scalable e-commerce solution with 99.9% uptime",
      results: "35% increase in conversions, 50% faster load times",
      icon: TrendingUp,
      gradient: "from-blue-500 to-blue-700",
      image: "/ecommerce-project.png",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      timeline: "3 months",
      budget: "$25,000 - $50,000",
    },
    {
      title: "SaaS Dashboard",
      description: "Developed a comprehensive analytics dashboard for B2B clients",
      results: "Reduced data processing time by 60%, improved user engagement by 40%",
      icon: Users,
      gradient: "from-purple-500 to-purple-700",
      image: "/saas-dashboard-project.png",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
      timeline: "4 months",
      budget: "$30,000 - $60,000",
    },
    {
      title: "Healthcare Portal",
      description: "Created a HIPAA-compliant patient management system",
      results: "Streamlined operations for 500+ healthcare providers",
      icon: Clock,
      gradient: "from-cyan-500 to-cyan-700",
      image: "/healthcare-portal-project.png",
      technologies: ["Angular", "Django", "PostgreSQL", "Azure"],
      timeline: "6 months",
      budget: "$50,000 - $100,000",
    },
  ]

  const services = [
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Tailored web solutions built from the ground up to meet your specific business requirements.",
      features: ["Custom Architecture", "Scalable Solutions", "API Integration", "Third-party Services"],
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Progressive Web Apps", "Touch Interfaces"],
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience.",
      features: ["Core Web Vitals", "SEO Optimization", "Caching Strategies", "CDN Integration"],
      gradient: "from-orange-500 to-orange-700",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures to protect your data and users.",
      features: ["SSL Certificates", "Data Encryption", "GDPR Compliance", "Security Audits"],
      gradient: "from-red-500 to-red-700",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Robust database architecture for efficient data management and retrieval.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Backup Solutions"],
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      icon: Layers,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and data exchange.",
      features: ["REST APIs", "GraphQL", "API Documentation", "Rate Limiting"],
      gradient: "from-cyan-500 to-cyan-700",
    },
  ]

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "Understanding your requirements, target audience, and business goals",
      details: ["Requirements Analysis", "User Research", "Technical Planning", "Project Roadmap"],
      duration: "1-2 weeks",
    },
    {
      number: "2",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes",
      details: ["UI/UX Design", "Wireframing", "Prototyping", "Design System"],
      duration: "2-3 weeks",
    },
    {
      number: "3",
      title: "Development",
      description: "Building your application with regular updates and testing",
      details: ["Frontend Development", "Backend Development", "Database Setup", "API Integration"],
      duration: "4-12 weeks",
    },
    {
      number: "4",
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality and performance",
      details: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Testing"],
      duration: "1-2 weeks",
    },
    {
      number: "5",
      title: "Deployment",
      description: "Launching your application with monitoring and support",
      details: ["Production Deployment", "Performance Monitoring", "Security Setup", "Documentation"],
      duration: "1 week",
    },
    {
      number: "6",
      title: "Maintenance",
      description: "Ongoing support, updates, and feature enhancements",
      details: ["Bug Fixes", "Security Updates", "Feature Additions", "Performance Optimization"],
      duration: "Ongoing",
    },
  ]

  const testimonials = [
    {
      quote:
        "The web application they built transformed our business operations. The performance improvements were beyond our expectations.",
      name: "Sarah Johnson",
      title: "CTO, TechCorp",
      rating: 5,
    },
    {
      quote:
        "Exceptional attention to detail and technical expertise. They delivered exactly what we needed on time and within budget.",
      name: "Michael Chen",
      title: "Founder, StartupXYZ",
      rating: 5,
    },
    {
      quote:
        "The team's ability to understand complex requirements and translate them into elegant solutions is remarkable.",
      name: "Emily Rodriguez",
      title: "Product Manager, InnovateCo",
      rating: 5,
    },
  ]

  const features = [
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business",
      icon: Layers,
    },
    {
      title: "Real-time Updates",
      description: "Live data synchronization",
      icon: Zap,
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive reporting tools",
      icon: TrendingUp,
    },
    {
      title: "Multi-platform Support",
      description: "Works across all devices",
      icon: Smartphone,
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security measures",
      icon: Shield,
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous performance tracking",
      icon: Clock,
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      features: ["Responsive Design", "Basic CMS", "Contact Forms", "SEO Optimization", "3 Months Support"],
      gradient: "from-blue-500 to-blue-700",
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      features: [
        "Custom Web Application",
        "Database Integration",
        "User Authentication",
        "API Development",
        "6 Months Support",
        "Performance Optimization",
      ],
      gradient: "from-purple-500 to-purple-700",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale applications",
      features: [
        "Complex Web Platform",
        "Advanced Security",
        "Third-party Integrations",
        "Custom Analytics",
        "12 Months Support",
        "Dedicated Team",
        "24/7 Monitoring",
      ],
      gradient: "from-green-500 to-green-700",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced layered background effects */}
        <WavyBackground
          className="absolute inset-0"
          colors={["#8b5cf6", "#3b82f6", "#06b6d4", "#0ea5e9", "#6366f1"]}
          blur={20}
          backgroundFill="white"
          waveWidth={100}
          waveOpacity={0.3}
          speed="slow"
        />
        <Spotlight className="absolute inset-0" fill="rgba(59, 130, 246, 0.15)" />
        <BackgroundBeams className="absolute inset-0 opacity-20" />
        <FloatingParticles className="absolute inset-0" particleCount={40} particleColor="rgba(99, 102, 241, 0.6)" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/80 pointer-events-none" />

        <div className="container mx-auto px-4 py-20 relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-blue-500/10 shadow-lg shadow-blue-500/20"
              >
                <Globe className="h-20 w-20 text-blue-600" />
              </motion.div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent text-gray-900 inline-block"
              >
                Web Development
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent text-gray-900 inline-block"
              >
                Services
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto relative"
            >
              <span className="relative z-10">
                Transform your business with cutting-edge web applications. From concept to deployment, we deliver
                scalable, secure, and high-performance solutions that drive growth.
              </span>
              <span className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-0 rounded-lg"></span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <MagneticHover>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <Link href="/start?service=web-development">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticHover>

              <MagneticHover>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg backdrop-blur-sm bg-white/50"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </MagneticHover>

              <MagneticHover>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg backdrop-blur-sm bg-white/50"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Portfolio PDF
                </Button>
              </MagneticHover>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: "200+", label: "Projects Delivered" },
                { number: "99.9%", label: "Uptime Guarantee" },
                { number: "50+", label: "Happy Clients" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Add a subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-blue-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20">
        <GridBackground className="absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-gray-900">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer>
                  <CardBody className="relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] bg-white border-gray-200 w-full h-auto rounded-xl p-8 border">
                    <CardItem translateZ={50} className="w-full">
                      <AnimatedGradient
                        containerClassName="rounded-xl"
                        className={`p-6 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 backdrop-blur-sm border border-gray-200`}
                      >
                        <CardItem translateZ={75} className="mb-4">
                          <service.icon className="h-12 w-12 text-blue-600" />
                        </CardItem>
                        <CardItem translateZ={60} className="text-xl font-bold text-gray-800 mb-4">
                          {service.title}
                        </CardItem>
                        <CardItem translateZ={50} className="text-gray-800 text-sm mb-6">
                          {service.description}
                        </CardItem>
                        <CardItem translateZ={40} className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </CardItem>
                      </AnimatedGradient>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-20 bg-gray-50">
        <BackgroundLines className="absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-gray-900">
                Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable applications
            </p>
          </motion.div>

          {/* Technology Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(technologies).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {technologies[activeTab as keyof typeof technologies].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="secondary"
                  className="px-6 py-3 text-sm bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-gray-200 text-gray-700 hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20">
        <WavyBackground
          className="absolute inset-0"
          colors={["#c4b5fd", "#93c5fd", "#a5f3fc"]}
          blur={10}
          backgroundFill="white"
          waveOpacity={0.2}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-gray-900">
                Advanced Features
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Enterprise-grade features that set your application apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer>
                  <CardBody className="relative group/card">
                    <CardItem translateZ={50} className="w-full">
                      <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-100 text-center">
                        <CardItem translateZ={75} className="mb-4">
                          <feature.icon className="h-12 w-12 text-purple-600 mx-auto" />
                        </CardItem>
                        <CardItem translateZ={60} className="text-xl font-semibold mb-2 text-gray-800">
                          {feature.title}
                        </CardItem>
                        <CardItem translateZ={40} className="text-gray-800 text-sm">
                          {feature.description}
                        </CardItem>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 bg-gray-50">
        <BackgroundBeams className="absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent text-gray-900">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer>
                  <CardBody className="relative group/card">
                    <CardItem translateZ={50} className="w-full">
                      <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-100">
                        <CardItem translateZ={75} className="mb-6">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                            {step.number}
                          </div>
                        </CardItem>
                        <CardItem translateZ={60} className="text-xl font-semibold mb-2 text-gray-800 text-center">
                          {step.title}
                        </CardItem>
                        <CardItem translateZ={50} className="text-gray-800 text-sm mb-4 text-center">
                          {step.description}
                        </CardItem>
                        <CardItem translateZ={40} className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </CardItem>
                        <CardItem translateZ={30} className="mt-4 text-center">
                          <Badge className="bg-gradient-to-r from-cyan-500/20 to-green-600/20 border border-gray-200 text-gray-700">
                            {step.duration}
                          </Badge>
                        </CardItem>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-20">
        <GridBackground className="absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-gray-900">
                Investment Tiers
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Flexible pricing options to match your project scope and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CardContainer>
                  <CardBody
                    className={`relative group/card ${tier.popular ? "border-purple-500" : "border-gray-200"} bg-white w-full h-auto rounded-xl p-8 border shadow-lg`}
                  >
                    <CardItem translateZ={50} className="w-full">
                      <div
                        className={`p-6 rounded-xl bg-gradient-to-br ${tier.gradient} bg-opacity-5 border border-gray-100 relative`}
                      >
                        {tier.popular && (
                          <CardItem translateZ={80} className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1">
                              Most Popular
                            </Badge>
                          </CardItem>
                        )}
                        <CardItem translateZ={60} className="text-2xl font-bold text-gray-800 mb-2 text-center">
                          {tier.name}
                        </CardItem>
                        <CardItem translateZ={50} className="text-gray-800 text-sm mb-6 text-center">
                          {tier.description}
                        </CardItem>
                        <CardItem translateZ={40} className="space-y-3 mb-6">
                          {tier.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </CardItem>
                        <CardItem translateZ={30}>
                          <MagneticHover>
                            <Button className={`w-full bg-gradient-to-r ${tier.gradient} hover:opacity-90 text-white`}>
                              Get Started
                            </Button>
                          </MagneticHover>
                        </CardItem>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="portfolio" className="relative py-20 bg-gray-50">
        <BackgroundLines className="absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-gray-900">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real projects, real results, real impact on our clients' businesses
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CardContainer>
                  <CardBody className="relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] bg-white border-gray-200 w-full h-auto rounded-xl p-8 border shadow-lg">
                    <CardItem translateZ={50} className="w-full">
                      <div
                        className={`p-6 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-5 border border-gray-100`}
                      >
                        <CardItem translateZ={75} className="mb-4">
                          <div className="flex items-center justify-between">
                            <project.icon className="h-12 w-12 text-blue-600" />
                            <ExternalLink className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
                          </div>
                        </CardItem>
                        <CardItem translateZ={60} className="text-xl font-bold text-gray-800 mb-2">
                          {project.title}
                        </CardItem>
                        <CardItem translateZ={55} className="text-gray-800 text-sm mb-4">
                          {project.description}
                        </CardItem>
                        <CardItem translateZ={50} className="flex items-start gap-2 mb-4">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700">{project.results}</p>
                        </CardItem>
                        <CardItem translateZ={45} className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardItem>
                        <CardItem translateZ={40} className="flex justify-between text-sm text-gray-600">
                          <span>Timeline: {project.timeline}</span>
                          <span>{project.budget}</span>
                        </CardItem>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <WavyBackground
          className="absolute inset-0"
          colors={["#fde68a", "#fca5a5", "#c4b5fd"]}
          blur={10}
          backgroundFill="white"
          waveOpacity={0.2}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent text-gray-900">
                Client Testimonials
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">What our clients say about working with us</p>
          </motion.div>

          <InfiniteMovingCards
            items={testimonials.map((testimonial) => ({
              quote: testimonial.quote,
              name: testimonial.name,
              title: testimonial.title,
            }))}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="mb-8"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gray-50">
        <BackgroundBeams className="absolute inset-0 opacity-10" />
        <FloatingParticles className="absolute inset-0" particleCount={30} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <CardContainer>
              <CardBody className="relative group/card">
                <CardItem translateZ={50} className="w-full">
                  <div className="p-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-gray-200 shadow-xl">
                    <CardItem translateZ={60} className="text-4xl md:text-6xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-gray-900">
                        Ready to Transform Your Business?
                      </span>
                    </CardItem>
                    <CardItem translateZ={50} className="text-xl text-gray-700 mb-8">
                      Let's discuss your project and create something extraordinary together. Get a free consultation
                      and project estimate.
                    </CardItem>
                    <CardItem translateZ={40} className="flex flex-col sm:flex-row gap-4 justify-center">
                      <MagneticHover>
                        <Button
                          asChild
                          size="lg"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                        >
                          <Link href="/start?service=web-development">
                            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </MagneticHover>
                      <MagneticHover>
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-gray-300 text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg"
                        >
                          Schedule Consultation
                        </Button>
                      </MagneticHover>
                    </CardItem>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
