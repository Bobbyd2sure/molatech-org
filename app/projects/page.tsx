"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ExternalLink,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Code,
  Layers,
  Zap,
  CheckCircle,
  TrendingUp,
  Target,
  Lightbulb,
  Quote,
} from "lucide-react"
import Link from "next/link"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import ContactSection from "@/components/contact-section"

export default function ProjectsPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [activeTab, setActiveTab] = useState("all")

  const caseStudies = [
    {
      id: "martebeauty",
      title: "Marte Beauty E-commerce Platform",
      category: "web-development",
      categoryLabel: "E-commerce",
      client: "Marte Beauty",
      clientLogo: "MB",
      industry: "Beauty & Cosmetics",
      description:
        "A stunning luxury beauty e-commerce platform with the tagline 'Embrace Your Beauty - We Amplify Its Radiance', featuring international shipping, promotional campaigns, and premium cosmetics products.",
      challenge:
        "Marte Beauty needed a sophisticated e-commerce platform that could showcase their premium cosmetics line, handle international orders across multiple regions, run seasonal promotions like Black Friday campaigns, and capture leads through newsletter signups.",
      solution:
        "We developed a premium e-commerce experience using Shopify with custom theme development. The solution includes multi-currency support, promotional banners system, newsletter integration with Klaviyo, live chat support, and a beautiful dark-themed design that highlights their product photography.",
      results: [
        "350% increase in online sales within first year",
        "45% improvement in conversion rate",
        "Free shipping threshold drove 60% higher AOV",
        "35% Black Friday campaign conversion rate",
        "20,000+ newsletter subscribers acquired",
      ],
      testimonial: {
        quote:
          "MolaTech transformed our online presence completely. Their e-commerce solution helped us increase conversions dramatically and our customer engagement has never been higher. The platform perfectly captures our brand essence.",
        author: "Adeola Mwandala",
        role: "CEO, Marte Beauty Inc.",
      },
      imageUrl: "/project-martebeauty.png",
      technologies: ["Shopify", "Liquid", "JavaScript", "TailwindCSS", "Klaviyo", "Shopify Chat", "Google Analytics", "Meta Pixel"],
      metrics: [
        { label: "Sales Growth", value: "350%", icon: TrendingUp },
        { label: "Conversion", value: "+45%", icon: Target },
        { label: "Subscribers", value: "20K+", icon: Users },
        { label: "AOV Increase", value: "+60%", icon: Zap },
      ],
      timeline: "4 months",
      teamSize: "5 developers",
      features: [
        "Premium dark-themed design",
        "Multi-currency international shipping",
        "Black Friday promotional system",
        "Newsletter popup integration",
        "Live chat support",
        "Product collections & categories",
        "Mobile-optimized checkout",
        "Social media integration",
      ],
      featured: true,
    },
    {
      id: "wonlyai",
      title: "Wonly AI - Sports Predictions Platform",
      category: "web-development",
      categoryLabel: "Web Development",
      client: "Wonly AI",
      clientLogo: "WA",
      industry: "Sports & Technology",
      description:
        "A premium sports predictions platform delivering expert football betting analysis with an impressive 87% win rate across 200+ football leagues worldwide.",
      challenge:
        "Wonly AI needed a sophisticated platform that could deliver real-time sports predictions, handle high traffic during match days, provide detailed analysis, and offer tiered subscription plans for different user needs.",
      solution:
        "We developed a high-performance predictions platform using Next.js with real-time data feeds, advanced analytics dashboards, secure payment integration for VIP subscriptions, and a responsive design optimized for mobile users checking predictions on-the-go.",
      results: [
        "87% prediction accuracy rate achieved",
        "200+ football leagues covered worldwide",
        "10,000+ active subscribers in first year",
        "99.9% platform uptime during peak events",
        "4.9/5 user satisfaction rating",
      ],
      testimonial: {
        quote:
          "MolaTech built us an incredible platform that handles thousands of users during peak match times without any issues. The accuracy of our prediction delivery and the user experience has been outstanding.",
        author: "Ben Davies",
        role: "Founder, Wonly AI",
      },
      imageUrl: "/project-wonlyai.png",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Socket.io", "TailwindCSS"],
      metrics: [
        { label: "Win Rate", value: "87%", icon: TrendingUp },
        { label: "Leagues", value: "200+", icon: Target },
        { label: "Uptime", value: "99.9%", icon: Zap },
        { label: "Rating", value: "4.9/5", icon: Award },
      ],
      timeline: "4 months",
      teamSize: "5 developers",
      features: [
        "Real-time predictions",
        "Expert analysis dashboard",
        "VIP subscription tiers",
        "Live scores integration",
        "Daily betting tips",
        "Historical performance tracking",
        "Mobile-optimized design",
        "Secure payment processing",
      ],
      featured: true,
    },
    {
      id: "shapemia",
      title: "Shapemia E-commerce Platform",
      category: "web-development",
      categoryLabel: "E-commerce",
      client: "Shapemia",
      clientLogo: "SM",
      industry: "Fashion & Retail",
      description:
        "A modern e-commerce platform for premium shapewear and activewear, featuring inclusive sizing from XS to 4XL, celebrating body positivity and confidence.",
      challenge:
        "Shapemia needed an e-commerce platform that could showcase their inclusive product range beautifully, handle international orders with multiple currencies, and provide a seamless shopping experience that aligned with their body-positive brand messaging.",
      solution:
        "We created a stunning e-commerce experience with high-quality product imagery, intuitive size guides, multi-currency support (GBP, USD, EUR), fast checkout flow, and a design that celebrates diversity and body confidence throughout the customer journey.",
      results: [
        "250% increase in online sales",
        "45% improvement in conversion rate",
        "60% reduction in cart abandonment",
        "35% increase in average order value",
        "4.8/5 customer satisfaction score",
      ],
      testimonial: {
        quote:
          "The e-commerce platform MolaTech delivered perfectly captures our brand essence. The beautiful design and smooth shopping experience have significantly boosted our sales and customer satisfaction.",
        author: "John White",
        role: "Founder, Shapemia",
      },
      imageUrl: "/project-shapemia.png",
      technologies: ["Shopify", "Liquid", "JavaScript", "TailwindCSS", "Klaviyo", "Stripe", "Google Analytics"],
      metrics: [
        { label: "Sales Growth", value: "250%", icon: TrendingUp },
        { label: "Conversion", value: "+45%", icon: Target },
        { label: "Cart Recovery", value: "+60%", icon: Users },
        { label: "AOV Increase", value: "+35%", icon: Zap },
      ],
      timeline: "3 months",
      teamSize: "4 developers",
      features: [
        "Inclusive size range (XS-4XL)",
        "Multi-currency support",
        "High-quality product galleries",
        "Size guide integration",
        "Bestseller collections",
        "Email marketing integration",
        "Fast checkout process",
        "Mobile-first design",
      ],
      featured: true,
    },
    {
      id: "winsecure247",
      title: "WinSecure247 Sports Platform",
      category: "website-design",
      categoryLabel: "Website Design",
      client: "WinSecure247 Services",
      clientLogo: "WS",
      industry: "Sports & Entertainment",
      description:
        "A professional sports promotion and talent development platform connecting athletes with opportunities, managing 500+ athletes and coordinating 100+ events annually.",
      challenge:
        "WinSecure247 needed a professional platform to showcase their sports promotion services, talent programs, and establish credibility in the competitive sports management industry while providing easy access for athletes and partners.",
      solution:
        "We designed a clean, professional website with a modern green color scheme reflecting growth and energy. The platform features athlete profiles, event management, partnership opportunities, and a talent program application system.",
      results: [
        "500+ athletes represented on platform",
        "100+ events coordinated annually",
        "300% increase in partnership inquiries",
        "24/7 platform availability",
        "85% increase in talent applications",
      ],
      testimonial: {
        quote:
          "MolaTech created a platform that truly represents our commitment to sports excellence. The professional design has helped us attract more athletes and partners than ever before.",
        author: "Mary Smith",
        role: "CEO, Marymia Limited",
      },
      imageUrl: "/project-winsecure247.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Framer Motion"],
      metrics: [
        { label: "Athletes", value: "500+", icon: Users },
        { label: "Events", value: "100+", icon: Calendar },
        { label: "Inquiries", value: "+300%", icon: TrendingUp },
        { label: "Availability", value: "24/7", icon: Zap },
      ],
      timeline: "2 months",
      teamSize: "3 developers",
      features: [
        "Athlete profiles & portfolios",
        "Event management system",
        "Talent program applications",
        "Partnership inquiry forms",
        "Sports news & updates",
        "Contact management",
        "Responsive design",
        "Performance analytics",
      ],
      featured: true,
    },
    {
      id: "tenderglove-healthcare",
      title: "Tenderglove Healthcare Platform",
      category: "web-development",
      categoryLabel: "Web Development",
      client: "Tenderglove Healthcare",
      clientLogo: "TH",
      industry: "Healthcare",
      description:
        "A comprehensive healthcare management platform designed to streamline patient care, appointment scheduling, and medical record management for Tenderglove Healthcare services.",
      challenge:
        "Tenderglove Healthcare needed a modern, user-friendly platform to manage patient appointments, medical records, and communication between healthcare providers and patients while ensuring data security and compliance.",
      solution:
        "We developed a secure healthcare platform with intuitive patient portals, appointment booking systems, electronic health records management, and secure messaging between patients and healthcare providers. The system prioritizes ease of use while maintaining strict data protection standards.",
      results: [
        "70% improvement in appointment booking efficiency",
        "85% increase in patient satisfaction",
        "60% reduction in administrative workload",
        "95% patient data accuracy achieved",
        "40% decrease in missed appointments",
      ],
      testimonial: {
        quote:
          "MolaTech delivered exactly what we needed - a platform that puts patients first while making our staff's work easier. The system has transformed how we deliver healthcare services.",
        author: "Thomas Ndhlebe",
        role: "Tenderglove Healthcare",
      },
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-08%20at%2022.03.33.png-2zDd3IARSjHnJx2eKl9nH64jg1UdOz.jpeg",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Twilio", "Stripe", "TailwindCSS", "Redis"],
      metrics: [
        { label: "Efficiency", value: "+70%", icon: TrendingUp },
        { label: "Satisfaction", value: "+85%", icon: Users },
        { label: "Admin Work", value: "-60%", icon: Zap },
        { label: "Accuracy", value: "95%", icon: Target },
      ],
      timeline: "5 months",
      teamSize: "6 developers",
      features: [
        "Patient appointment booking",
        "Electronic health records",
        "Secure patient messaging",
        "Staff scheduling system",
        "Billing & invoicing",
        "Appointment reminders",
        "Patient portal access",
        "Analytics dashboard",
      ],
      featured: true,
    },
    {
      id: "fitness-app",
      title: "FitTrack Mobile Application",
      category: "app-development",
      categoryLabel: "App Development",
      client: "FitLife Inc.",
      clientLogo: "FL",
      industry: "Health & Fitness",
      description:
        "Cross-platform mobile application for fitness tracking with social features, personalized workout plans, nutrition guidance, and gamification elements to keep users motivated.",
      challenge:
        "FitLife Inc. wanted to create a fitness app that stood out in a crowded market by offering truly personalized experiences, social engagement features, and motivation through gamification while maintaining excellent performance on both iOS and Android.",
      solution:
        "We built a feature-rich React Native app with AI-powered workout personalization, social challenges, nutrition tracking with barcode scanning, wearable device integration, and an engaging gamification system with rewards and achievements.",
      results: [
        "4.8/5 App Store rating achieved",
        "100K+ downloads in first quarter",
        "78% user retention rate",
        "45K+ monthly active users",
        "65% daily engagement rate",
      ],
      testimonial: {
        quote:
          "MolaTech delivered an exceptional fitness app that our users absolutely love. The combination of personalization, social features, and gamification has created incredible user engagement.",
        author: "Samuel Jones",
        role: "Founder, FitLife Inc.",
      },
      imageUrl: "/fitness-app-fittrack.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Redux", "AWS Amplify", "TensorFlow Lite"],
      metrics: [
        { label: "App Rating", value: "4.8/5", icon: Award },
        { label: "Downloads", value: "100K+", icon: TrendingUp },
        { label: "Retention", value: "78%", icon: Users },
        { label: "Active Users", value: "45K+", icon: Target },
      ],
      timeline: "5 months",
      teamSize: "5 developers",
      features: [
        "AI workout personalization",
        "Nutrition tracking",
        "Progress photos",
        "Social challenges",
        "Achievement system",
        "Wearable integration",
        "Video workouts",
        "Community forums",
      ],
      featured: false,
    },
    {
      id: "financial-dashboard",
      title: "Financial Services Dashboard",
      category: "website-design",
      categoryLabel: "Website Design",
      client: "WealthWise Advisors",
      clientLogo: "WW",
      industry: "Financial Services",
      description:
        "Elegant, conversion-focused financial services platform with advanced data visualization, client portfolio management, real-time market data, and comprehensive reporting tools.",
      challenge:
        "WealthWise Advisors required a sophisticated financial dashboard that could present complex financial data in an intuitive way, while maintaining the highest security standards for sensitive client information and building trust through professional design.",
      solution:
        "We designed and developed a comprehensive financial dashboard featuring advanced D3.js visualizations, real-time market data integration, automated reporting, compliance monitoring, and a clean, professional interface that builds client trust.",
      results: [
        "40% increase in client acquisition",
        "55% improvement in advisor efficiency",
        "75% increase in client satisfaction",
        "80% reduction in report generation time",
        "60% improvement in data accuracy",
      ],
      testimonial: {
        quote:
          "The financial dashboard MolaTech created has transformed how we serve our clients. The intuitive design and powerful analytics have significantly improved our efficiency and client relationships.",
        author: "Mary Smith",
        role: "CEO, Marymia Limited",
      },
      imageUrl: "/financial-dashboard-kokonut.png",
      technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS", "Supabase", "Vercel", "Chart.js"],
      metrics: [
        { label: "Client Growth", value: "+40%", icon: TrendingUp },
        { label: "Efficiency", value: "+55%", icon: Zap },
        { label: "Satisfaction", value: "+75%", icon: Users },
        { label: "Report Time", value: "-80%", icon: Calendar },
      ],
      timeline: "4 months",
      teamSize: "4 developers",
      features: [
        "Portfolio management",
        "Investment tracking",
        "Client communication hub",
        "Automated reporting",
        "Market data integration",
        "Goal tracking",
        "Risk assessment tools",
        "Compliance monitoring",
      ],
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web-development", label: "Web Development" },
    { value: "app-development", label: "App Development" },
    { value: "website-design", label: "Website Design" },
  ]

  const filteredProjects =
    activeTab === "all" ? caseStudies : caseStudies.filter((project) => project.category === activeTab)

  const stats = [
    { label: "Projects Completed", value: "150+", icon: Code },
    { label: "Client Satisfaction", value: "98%", icon: Users },
    { label: "Industries Served", value: "12+", icon: Layers },
    { label: "Years Experience", value: "10+", icon: Award },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
        <BackgroundBeams className="opacity-30" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Case Studies & Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise in delivering innovative digital
              solutions across various industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-background/50 backdrop-blur-sm border rounded-xl p-4"
                >
                  <stat.icon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-24">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Case Study Card */}
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                      <div className="relative overflow-hidden rounded-xl border shadow-2xl">
                        <img
                          src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
                          alt={project.title}
                          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0">
                            {project.categoryLabel}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
                            {project.clientLogo}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{project.client}</p>
                            <p className="text-xs text-muted-foreground">{project.industry}</p>
                          </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h2>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-muted/50 rounded-lg p-3 text-center">
                            <metric.icon className="h-4 w-4 text-purple-600 mx-auto mb-1" />
                            <div className="text-lg font-bold text-purple-600">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <p className="text-sm font-medium mb-2">Technologies Used</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 6 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.timeline}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.teamSize}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                      >
                        <Link href={`#${project.id}-details`}>
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expanded Case Study Details */}
                <div id={`${project.id}-details`} className="mt-12 scroll-mt-24">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/30">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Challenge */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                              <Target className="h-5 w-5 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="font-semibold text-lg">The Challenge</h3>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                              <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-lg">Our Solution</h3>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                        </div>

                        {/* Results */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                              <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="font-semibold text-lg">Results Achieved</h3>
                          </div>
                          <ul className="space-y-2">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mt-8 pt-8 border-t">
                        <h3 className="font-semibold text-lg mb-4">Key Features Delivered</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-8 pt-8 border-t">
                        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 relative">
                          <Quote className="absolute top-4 left-4 h-8 w-8 text-purple-500/20" />
                          <blockquote className="text-lg italic text-foreground/90 mb-4 pl-8">
                            "{project.testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center gap-3 pl-8">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                              {project.testimonial.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{project.testimonial.author}</p>
                              <p className="text-xs text-muted-foreground">{project.testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Divider */}
                {index < filteredProjects.length - 1 && (
                  <div className="mt-24 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how we can help bring your vision to life. Our team is ready to create your success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-white/90">
                <Link href="/start">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
