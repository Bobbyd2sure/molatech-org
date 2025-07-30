"use client"

import {
  Globe,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Shield,
  GraduationCap,
  Users,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { MagneticHover } from "@/components/ui/aceternity/magnetic-hover"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("web-development")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      id: "web-development",
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with the latest technologies to deliver exceptional user experiences.",
      image: "/service-web-development.png",
      gradient: "from-purple-500 to-blue-500",
      features: [
        "Responsive web applications",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web apps",
        "API development and integration",
        "Performance optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
      timeline: "2-8 weeks",
      complexity: "Medium to High",
      caseStudy:
        "Helped an e-commerce client increase conversions by 35% through a complete website redesign and optimization.",
      benefits: [
        "Increased online presence",
        "Better user engagement",
        "Higher conversion rates",
        "Improved SEO rankings",
      ],
      process: ["Requirements Analysis", "Design & Prototyping", "Development & Testing", "Deployment & Launch"],
    },
    {
      id: "app-development",
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      image: "/service-app-development.png",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "iOS and Android native apps",
        "Cross-platform development",
        "App UI/UX design",
        "App maintenance and updates",
        "API integration",
        "App Store optimization",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
      timeline: "3-12 weeks",
      complexity: "High",
      caseStudy:
        "Developed a fitness tracking app that achieved over 100,000 downloads in its first month with a 4.8-star rating.",
      benefits: ["Direct customer engagement", "Brand loyalty building", "Revenue generation", "Market expansion"],
      process: ["Market Research", "UI/UX Design", "Development & Testing", "App Store Submission"],
    },
    {
      id: "website-design",
      icon: Palette,
      title: "Website Design",
      description: "Beautiful, responsive designs that reflect your brand and convert visitors into customers.",
      image: "/service-website-design.png",
      gradient: "from-pink-500 to-rose-500",
      features: [
        "User experience (UX) design",
        "User interface (UI) design",
        "Responsive design",
        "Brand integration",
        "Conversion rate optimization",
        "Accessibility compliance",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "Framer", "Webflow"],
      timeline: "1-4 weeks",
      complexity: "Medium",
      caseStudy:
        "Redesigned a B2B website resulting in a 45% increase in lead generation and improved user engagement metrics.",
      benefits: ["Enhanced brand image", "Better user experience", "Increased conversions", "Mobile optimization"],
      process: ["Brand Analysis", "Wireframing", "Visual Design", "Prototype Testing"],
    },
    {
      id: "digital-marketing",
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven strategies to increase your online presence and attract qualified leads.",
      image: "/service-digital-marketing.png",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click (PPC) advertising",
        "Social media marketing",
        "Content marketing",
        "Email marketing campaigns",
        "Analytics and reporting",
      ],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush", "Mailchimp", "HubSpot"],
      timeline: "Ongoing",
      complexity: "Medium",
      caseStudy:
        "Implemented a comprehensive digital marketing strategy that increased organic traffic by 150% and leads by 75% for a SaaS company.",
      benefits: [
        "Increased website traffic",
        "Higher lead generation",
        "Better ROI tracking",
        "Brand awareness growth",
      ],
      process: ["Strategy Development", "Campaign Setup", "Optimization", "Performance Analysis"],
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to optimize your business operations.",
      image: "/service-cloud-solutions.png",
      gradient: "from-cyan-500 to-blue-500",
      features: [
        "Cloud migration",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
        "Cloud security",
        "DevOps implementation",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      timeline: "2-6 weeks",
      complexity: "High",
      caseStudy:
        "Migrated a healthcare provider to a secure cloud infrastructure, reducing IT costs by 40% while improving system reliability.",
      benefits: ["Cost reduction", "Improved scalability", "Enhanced security", "Better reliability"],
      process: ["Infrastructure Assessment", "Migration Planning", "Implementation", "Monitoring & Support"],
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and training to protect your business from threats.",
      image: "/service-cybersecurity.png",
      gradient: "from-red-500 to-orange-500",
      features: [
        "Security assessments",
        "Penetration testing",
        "Security monitoring",
        "Employee security training",
        "Incident response planning",
        "Compliance consulting",
      ],
      technologies: ["OWASP", "Nessus", "Metasploit", "Wireshark", "Splunk", "CrowdStrike"],
      timeline: "1-4 weeks",
      complexity: "High",
      caseStudy:
        "Implemented a comprehensive security program for a financial services firm, preventing potential data breaches and ensuring regulatory compliance.",
      benefits: ["Risk mitigation", "Compliance assurance", "Data protection", "Business continuity"],
      process: ["Security Audit", "Vulnerability Assessment", "Implementation", "Ongoing Monitoring"],
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Training",
      description: "Professional development programs and technical training to upskill your team.",
      image: "/service-training.png",
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Corporate training programs",
        "Individual skill development",
        "Technology workshops",
        "Certification programs",
        "Custom curriculum development",
        "Hands-on learning experiences",
      ],
      technologies: ["Various", "Industry Standard", "Latest Tools", "Best Practices", "LMS", "Virtual Labs"],
      timeline: "1-8 weeks",
      complexity: "Medium",
      caseStudy:
        "Delivered comprehensive training program for a tech startup, resulting in 50% improvement in development speed and 100% team completion rate.",
      benefits: ["Skill enhancement", "Team productivity", "Knowledge retention", "Career advancement"],
      process: ["Needs Assessment", "Curriculum Design", "Training Delivery", "Progress Evaluation"],
    },
    {
      id: "consultancy",
      icon: Users,
      title: "Consultancy",
      description: "Expert guidance and strategic advice to help you make informed technology decisions.",
      image: "/service-consultancy.png",
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Technology strategy development",
        "Digital transformation planning",
        "System architecture design",
        "Performance optimization",
        "Risk assessment",
        "Vendor selection guidance",
      ],
      technologies: [
        "Industry Agnostic",
        "Best Practices",
        "Modern Stack",
        "Scalable Solutions",
        "Enterprise Tools",
        "Analytics",
      ],
      timeline: "1-12 weeks",
      complexity: "Variable",
      caseStudy:
        "Provided strategic consultancy for a manufacturing company's digital transformation, resulting in 30% operational efficiency improvement and $2M cost savings.",
      benefits: ["Strategic clarity", "Cost optimization", "Risk reduction", "Competitive advantage"],
      process: ["Current State Analysis", "Strategy Development", "Implementation Planning", "Change Management"],
    },
  ]

  const currentService = services.find((s) => s.id === activeService) || services[0]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams className="opacity-30" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <FloatingParticles className="opacity-20" />

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions tailored to your business needs. From web development to cybersecurity,
            we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              8 Core Services
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              Expert Team
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Proven Results
            </Badge>
          </div>
        </motion.div>

        {/* Service Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  activeService === service.id
                    ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg scale-105`
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <service.icon className="h-6 w-6 mx-auto mb-2" />
                <span className="text-xs font-medium">{service.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Service Display */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <CardContainer className="w-full">
            <CardBody className="w-full h-auto relative">
              <CardItem
                translateZ={50}
                className={`w-full rounded-2xl overflow-hidden bg-gradient-to-br ${currentService.gradient} p-8 text-white`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <currentService.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{currentService.title}</h2>
                      <p className="text-white/90">{currentService.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Features */}
                    <CardItem translateZ={75} className="w-full">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {currentService.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardItem>

                    {/* Technologies */}
                    <CardItem translateZ={75} className="w-full">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {currentService.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-white/20 text-white border-0">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            Timeline: {currentService.timeline}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Target className="h-4 w-4" />
                            Complexity: {currentService.complexity}
                          </div>
                        </div>
                      </div>
                    </CardItem>

                    {/* Benefits */}
                    <CardItem translateZ={75} className="w-full">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {currentService.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <Star className="h-4 w-4 text-yellow-300" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardItem>
                  </div>

                  {/* Process Timeline */}
                  <CardItem translateZ={60} className="w-full mt-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {currentService.process.map((step, index) => (
                          <div key={index} className="text-center">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                              {index + 1}
                            </div>
                            <p className="text-sm">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardItem>

                  {/* Case Study */}
                  <CardItem translateZ={80} className="w-full mt-8">
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                      <h3 className="text-xl font-semibold mb-3">Success Story</h3>
                      <p className="text-white/90 mb-4">{currentService.caseStudy}</p>
                      <div className="flex gap-4">
                        <MagneticHover>
                          <Button asChild className="bg-white text-black hover:bg-white/90">
                            <Link href={`/contact?service=${currentService.id}`}>
                              Get Started
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                        </MagneticHover>
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                          View Portfolio
                        </Button>
                      </div>
                    </div>
                  </CardItem>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>

        {/* Service Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Service Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white/5 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-center">Timeline</th>
                  <th className="p-4 text-center">Complexity</th>
                  <th className="p-4 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                {services.slice(0, 4).map((service, index) => (
                  <tr key={service.id} className="border-t border-white/10">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <service.icon className="h-5 w-5 text-purple-400" />
                        <span className="font-medium">{service.title}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">{service.timeline}</td>
                    <td className="p-4 text-center">
                      <Badge
                        variant="secondary"
                        className={
                          service.complexity === "High"
                            ? "bg-red-100 text-red-700"
                            : service.complexity === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                        }
                      >
                        {service.complexity}
                      </Badge>
                    </td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{service.benefits[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 text-white/90">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticHover>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </MagneticHover>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
