"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, Apple, SmartphoneIcon as Android, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { FocusCards } from "@/components/ui/aceternity/focus-cards"
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CallToAction from "@/components/call-to-action"

export default function AppDevelopmentPage() {
  const platforms = [
    "iOS (Swift)",
    "Android (Kotlin)",
    "React Native",
    "Flutter",
    "Xamarin",
    "Progressive Web Apps",
    "Ionic",
    "PhoneGap",
  ]

  const features = [
    "Native iOS & Android Development",
    "Cross-Platform Solutions",
    "UI/UX Design",
    "Backend Integration",
    "App Store Optimization",
    "Push Notifications",
    "In-App Purchases",
    "Analytics Integration",
  ]

  const appServices = [
    {
      title: "iOS Development",
      description: "Native iOS apps built with Swift and SwiftUI for optimal performance and user experience.",
      icon: <Apple className="h-8 w-8 text-blue-500" />,
      link: "/services/app-development#ios",
      features: ["Swift & SwiftUI", "App Store Guidelines", "iOS Design Patterns", "Core Data Integration"],
      technologies: ["Swift", "SwiftUI", "Xcode", "Core Data"],
      timeline: "4-12 weeks",
      gradient: "from-blue-500 to-cyan-500",
      src: "/service-app-development.png",
    },
    {
      title: "Android Development",
      description: "Native Android apps using Kotlin and Jetpack Compose for modern, efficient applications.",
      icon: <Android className="h-8 w-8 text-green-500" />,
      link: "/services/app-development#android",
      features: ["Kotlin & Compose", "Material Design", "Android Architecture", "Room Database"],
      technologies: ["Kotlin", "Jetpack Compose", "Android Studio", "Room"],
      timeline: "4-12 weeks",
      gradient: "from-green-500 to-emerald-500",
      src: "/mobile-app-development.png",
    },
    {
      title: "Cross-Platform",
      description: "React Native and Flutter apps that work seamlessly across both iOS and Android platforms.",
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      link: "/services/app-development#cross-platform",
      features: ["Single Codebase", "Native Performance", "Hot Reload", "Platform APIs"],
      technologies: ["React Native", "Flutter", "Dart", "JavaScript"],
      timeline: "3-10 weeks",
      gradient: "from-purple-500 to-pink-500",
      src: "/ui-ux-design-interface.png",
    },
  ]

  const appTestimonials = [
    {
      quote:
        "The mobile app they developed for us has received outstanding feedback from our users. The user interface is intuitive, the performance is excellent, and the features perfectly match our business needs.",
      name: "Michael Chen",
      designation: "Product Manager, InnovateCorp",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Our fitness app built by MolaTech reached 100K downloads in the first month. The cross-platform approach saved us time and budget while delivering native-quality performance.",
      name: "Sarah Williams",
      designation: "CEO, FitLife Technologies",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The e-commerce app they created increased our mobile sales by 60%. The seamless user experience and robust backend integration exceeded our expectations.",
      name: "David Rodriguez",
      designation: "CTO, ShopSmart Inc",
      src: "/placeholder.svg?height=100&width=100",
    },
  ]

  const additionalTestimonials = [
    {
      quote: "Exceptional mobile app development with attention to every detail. Our users love the smooth experience.",
      author: "Emma Thompson",
      role: "Startup Founder",
    },
    {
      quote: "Professional team that delivered our app on time and within budget. Highly recommend their services.",
      author: "James Wilson",
      role: "Product Owner",
    },
    {
      quote: "The best mobile development team we've worked with. They understand both technical and business needs.",
      author: "Lisa Chen",
      role: "Tech Director",
    },
  ]

  const appFaqs = [
    {
      question: "Should I choose native or cross-platform development?",
      answer:
        "The choice depends on your specific needs. Native development offers the best performance and platform-specific features, while cross-platform development is more cost-effective and faster to market. We'll help you choose the best approach based on your requirements, budget, and timeline.",
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "Development time varies based on complexity. A simple app takes 3-6 weeks, while complex apps with advanced features can take 3-6 months. We provide detailed timelines during our initial consultation based on your specific requirements.",
    },
    {
      question: "Do you help with app store submission?",
      answer:
        "Yes, we handle the entire app store submission process for both iOS App Store and Google Play Store. This includes preparing app metadata, screenshots, descriptions, and ensuring compliance with store guidelines.",
    },
    {
      question: "Can you integrate my app with existing systems?",
      answer:
        "Absolutely. We have extensive experience integrating mobile apps with various backend systems, APIs, databases, and third-party services. We ensure seamless data flow between your app and existing infrastructure.",
    },
    {
      question: "Do you provide ongoing app maintenance?",
      answer:
        "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, new feature development, and OS compatibility updates to keep your app running smoothly.",
    },
  ]

  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const featuresRef = useRef(null)
  const testimonialsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden">
        <WavyBackground
          colors={["#6d28d9", "#7c3aed", "#8b5cf6", "#9333ea", "#a855f7", "#c084fc"]}
          waveOpacity={0.3}
          speed="slow"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
        >
          <BackgroundBeams className="opacity-20" />
          <FloatingParticles particleCount={50} particleColor="#8b5cf6" className="opacity-30" />
          <Spotlight className="hidden md:block opacity-50" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <div className="flex flex-col justify-center space-y-4 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="flex justify-center mb-6"
                >
                  <div className="p-4 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
                    <Smartphone className="h-12 w-12 text-primary" />
                  </div>
                </motion.div>

                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                  >
                    <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      Mobile App Development
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-white/80 max-w-3xl mx-auto backdrop-blur-sm bg-black/10 rounded-lg p-4"
                  >
                    Native and cross-platform mobile applications that engage users and drive business growth
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    asChild
                    size="lg"
                    className="group bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30"
                  >
                    <Link href="/start?service=app-development">
                      Start Your App
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/50 hover:bg-white/10"
                  >
                    <Link href="#portfolio">View Apps</Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center"
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card w-auto h-auto rounded-xl">
                    <CardItem translateZ="100" rotateX={5} rotateY={5} className="w-full">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-xl group-hover/card:opacity-100 transition duration-1000"></div>
                        <img
                          alt="Mobile App Development"
                          className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl"
                          src="/mobile-app-development.png"
                        />
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            </div>
          </div>
        </WavyBackground>
      </section>

      {/* App Development Services */}
      <section ref={servicesRef} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <BackgroundBeams className="opacity-30" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              App Development Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect platform for your mobile application
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FocusCards cards={appServices} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
        <Spotlight className="hidden md:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              What We Deliver
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
              Comprehensive mobile app development services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardContainer className="inter-var h-full">
                  <CardBody className="relative group/card h-full">
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <CardContent className="flex items-center gap-3 p-6">
                        <CardItem translateZ="50">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        </CardItem>
                        <CardItem translateZ="30">
                          <span className="font-medium text-gray-900">{feature}</span>
                        </CardItem>
                      </CardContent>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Technologies & Platforms
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isFeaturesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary/10 transition-colors">
                    {platform}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Development Process */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              App Development Process
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
              Our proven methodology ensures successful app delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Strategy", desc: "Define app goals and target audience", icon: "🎯" },
              { step: "2", title: "Design", desc: "Create wireframes and UI/UX design", icon: "🎨" },
              { step: "3", title: "Develop", desc: "Build the app with regular testing", icon: "⚡" },
              { step: "4", title: "Test", desc: "Comprehensive QA and user testing", icon: "🔍" },
              { step: "5", title: "Launch", desc: "App store submission and marketing", icon: "🚀" },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card">
                    <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <CardItem translateZ="50" className="text-center">
                          <div className="text-4xl mb-4">{phase.icon}</div>
                          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            {phase.step}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900">{phase.title}</h3>
                          <p className="text-muted-foreground text-sm">{phase.desc}</p>
                        </CardItem>
                      </CardContent>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              Success Stories
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
              Real results from our mobile app development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="relative group/card h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Fitness Tracking App</CardTitle>
                      <CardDescription>Cross-platform fitness app with social features</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">100K+ downloads in first month</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">4.8-star rating on both stores</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">Featured in App Store</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="relative group/card h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-gray-900">E-commerce Mobile App</CardTitle>
                      <CardDescription>Native shopping app for retail chain</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">60% increase in mobile sales</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">40% improvement in user engagement</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">500K+ active users</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </CardBody>
              </CardContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              What Our App Clients Say
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
              Success stories from businesses we've helped with mobile app development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <AnimatedTestimonials testimonials={appTestimonials} autoplay={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isTestimonialsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <InfiniteMovingCards
              items={additionalTestimonials.map((testimonial) => ({
                quote: testimonial.quote,
                name: testimonial.author,
                title: testimonial.role,
              }))}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="py-8"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={appFaqs} />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA */}
      <CallToAction />
    </div>
  )
}
