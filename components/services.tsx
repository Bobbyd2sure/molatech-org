"use client"

import { Globe, Smartphone, Palette, BarChart3, Cloud, Shield, GraduationCap, Users } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { MagneticHover } from "@/components/ui/aceternity/magnetic-hover"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FocusCards } from "@/components/ui/aceternity/focus-cards"

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with the latest technologies to deliver exceptional user experiences.",
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      link: "/services/web-development",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Implementation"],
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      timeline: "2-8 weeks",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      link: "/services/app-development",
      features: ["Cross-Platform", "Native Performance", "Push Notifications", "App Store Optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      timeline: "3-12 weeks",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Website Design",
      description: "Beautiful, responsive designs that reflect your brand and convert visitors into customers.",
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      link: "/services/website-design",
      features: ["UI/UX Design", "Brand Integration", "Conversion Optimization", "Accessibility"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      timeline: "1-4 weeks",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to increase your online presence and attract qualified leads.",
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      link: "/services/digital-marketing",
      features: ["SEO Strategy", "PPC Campaigns", "Social Media", "Analytics"],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush"],
      timeline: "Ongoing",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to optimize your business operations.",
      icon: <Cloud className="h-8 w-8 text-cyan-500" />,
      link: "/services/cloud-solutions",
      features: ["Cloud Migration", "Auto Scaling", "Security", "Monitoring"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      timeline: "2-6 weeks",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions and training to protect your business from threats.",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      link: "/services/cybersecurity",
      features: ["Security Audits", "Penetration Testing", "Training", "Compliance"],
      technologies: ["OWASP", "Nessus", "Metasploit", "Wireshark"],
      timeline: "1-4 weeks",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Training",
      description: "Professional development programs and technical training to upskill your team.",
      icon: <GraduationCap className="h-8 w-8 text-yellow-500" />,
      link: "/services/training",
      features: ["Custom Curriculum", "Hands-on Labs", "Certification", "Ongoing Support"],
      technologies: ["Various", "Industry Standard", "Latest Tools", "Best Practices"],
      timeline: "1-8 weeks",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Consultancy",
      description: "Expert guidance and strategic advice to help you make informed technology decisions.",
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      link: "/services/consultancy",
      features: ["Strategy Planning", "Architecture Review", "Technology Selection", "Process Optimization"],
      technologies: ["Industry Agnostic", "Best Practices", "Modern Stack", "Scalable Solutions"],
      timeline: "1-12 weeks",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden" id="services">
      {/* Background Effects */}
      <BackgroundBeams className="opacity-30" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="space-y-2">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive tech solutions tailored to your business needs
            </motion.p>
          </div>
        </motion.div>

        {/* Focus Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <FocusCards cards={services} />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <MagneticHover strength={0.2}>
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white border-0 shadow-lg"
              >
                <Link href="/start">Start Your Project Today</Link>
              </Button>
            </div>
          </MagneticHover>
        </motion.div>
      </div>
    </section>
  )
}
