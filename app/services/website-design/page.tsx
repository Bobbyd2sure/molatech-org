"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Palette, Eye, Users, TrendingUp, Smartphone, Monitor, Zap } from "lucide-react"
import Link from "next/link"
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { FocusCards } from "@/components/ui/aceternity/focus-cards"
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { motion } from "framer-motion"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CallToAction from "@/components/call-to-action"

export default function WebsiteDesignPage() {
  const designServices = [
    {
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging experiences for your audience.",
      icon: <Eye className="h-8 w-8 text-purple-500" />,
      link: "#ui-ux",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      timeline: "2-4 weeks",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "Responsive Design",
      description: "Designs that look perfect and function flawlessly across all devices and screen sizes.",
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      link: "#responsive",
      features: ["Mobile-First", "Cross-Browser", "Touch Optimized", "Performance Focused"],
      technologies: ["CSS Grid", "Flexbox", "Bootstrap", "Tailwind CSS"],
      timeline: "1-3 weeks",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Brand Integration",
      description: "Seamlessly integrate your brand identity into every aspect of your website design.",
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      link: "#branding",
      features: ["Logo Integration", "Color Schemes", "Typography", "Brand Guidelines"],
      technologies: ["Adobe Creative Suite", "Brand Guidelines", "Style Systems"],
      timeline: "1-2 weeks",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Conversion Optimization",
      description: "Strategic design elements optimized to convert visitors into customers and leads.",
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      link: "#conversion",
      features: ["A/B Testing", "CTA Optimization", "Landing Pages", "Analytics Integration"],
      technologies: ["Google Analytics", "Hotjar", "Optimizely", "Unbounce"],
      timeline: "2-6 weeks",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const designFeatures = [
    {
      title: "User-Centered Approach",
      description: "Every design decision is made with your users in mind, ensuring optimal experience and engagement.",
      icon: <Users className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Modern Aesthetics",
      description: "Contemporary designs that stand out and create lasting impressions on your audience.",
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Performance Optimized",
      description: "Beautiful designs that load fast and perform excellently across all devices and connections.",
      icon: <Zap className="h-8 w-8 text-green-600" />,
    },
  ]

  const designProcess = [
    { step: "1", title: "Discovery", desc: "Understanding your brand, goals, and target audience", emoji: "🔍" },
    { step: "2", title: "Research", desc: "Analyzing competitors and industry best practices", emoji: "📊" },
    { step: "3", title: "Strategy", desc: "Defining design goals and user journey mapping", emoji: "🎯" },
    { step: "4", title: "Wireframe", desc: "Creating structure and layout concepts", emoji: "📐" },
    { step: "5", title: "Design", desc: "Crafting beautiful visual designs and prototypes", emoji: "🎨" },
    { step: "6", title: "Test & Refine", desc: "Testing usability and optimizing for best results", emoji: "✨" },
  ]

  const portfolioProjects = [
    {
      title: "E-commerce Fashion Store",
      description: "Modern, conversion-focused design for luxury fashion retailer",
      results: "65% increase in conversions, 40% lower bounce rate",
      imageUrl: "/ecommerce-website-homepage.png",
      category: "E-commerce",
    },
    {
      title: "SaaS Dashboard Redesign",
      description: "User-friendly analytics dashboard with improved UX",
      results: "80% improvement in user engagement, 45% increase in feature adoption",
      imageUrl: "/saas-dashboard-project.png",
      category: "SaaS",
    },
    {
      title: "Healthcare Portal",
      description: "HIPAA-compliant patient portal with intuitive design",
      results: "90% patient satisfaction, 60% reduction in support tickets",
      imageUrl: "/healthcare-portal-project.png",
      category: "Healthcare",
    },
  ]

  const testimonials = [
    {
      quote:
        "The website design exceeded our expectations. The team's attention to detail and understanding of our brand resulted in a 75% increase in lead generation and significantly improved user engagement.",
      name: "Adeola Mwandala",
      designation: "CEO, Marte Beauty Inc.",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Outstanding design work that perfectly captures our brand identity. The new website has improved our conversion rate by 60% and received countless compliments from our clients.",
      name: "Thomas Ndhlebe",
      designation: "Tenderglove Healthcare",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Professional, creative, and results-driven. The responsive design works flawlessly across all devices and has significantly improved our mobile user experience.",
      name: "Mary Smith",
      designation: "CEO, Marymia Limited",
      src: "/placeholder.svg?height=100&width=100",
    },
  ]

  const additionalTestimonials = [
    {
      quote: "Exceptional design quality and attention to detail. Our new website perfectly represents our brand.",
      author: "Adeola Mwandala",
      role: "CEO, Marte Beauty Inc.",
    },
    {
      quote: "The design team understood our vision and delivered beyond expectations. Highly recommended!",
      author: "Thomas Ndhlebe",
      role: "Tenderglove Healthcare",
    },
    {
      quote: "Beautiful, functional design that has significantly improved our online presence and conversions.",
      author: "Mary Smith",
      role: "CEO, Marymia Limited",
    },
  ]

  const faqs = [
    {
      question: "What's included in your website design service?",
      answer:
        "Our website design service includes UI/UX design, responsive layouts, brand integration, wireframing, prototyping, and up to 3 rounds of revisions. We also provide design guidelines and assets for development.",
    },
    {
      question: "How long does the design process take?",
      answer:
        "The timeline varies based on project complexity. Simple websites take 2-4 weeks, while complex e-commerce or enterprise sites may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide the design files and assets?",
      answer:
        "Yes, you'll receive all design files in formats like Figma, Sketch, or Adobe XD, along with exported assets, style guides, and any custom graphics or icons created for your project.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "We specialize in website redesigns to improve user experience, modernize aesthetics, and boost conversions. We'll analyze your current site and create a design that addresses its limitations.",
    },
    {
      question: "Do you handle the development as well?",
      answer:
        "While we focus on design, we work closely with our development team to ensure seamless implementation. We can provide both design and development services as a complete package.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <WavyBackground
          colors={["#8b5cf6", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b"]}
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
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  className="flex justify-center mb-6"
                >
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-purple-500/30">
                    <Palette className="h-12 w-12 text-purple-400" />
                  </div>
                </motion.div>

                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      Beautiful Website Design
                    </span>
                    <br />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    >
                      That Converts
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg" />
                    <p className="relative max-w-[600px] mx-auto text-white/90 md:text-xl p-4">
                      Create stunning, user-centered designs that reflect your brand perfectly and convert visitors into
                      customers
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
                >
                  <Button
                    asChild
                    size="lg"
                    className="group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white border-0 shadow-lg backdrop-blur-sm"
                  >
                    <Link href="/start?service=website-design">
                      Start Design Project
                      <Palette className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                  >
                    <Link href="#portfolio">View Portfolio</Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card w-auto h-auto rounded-xl">
                    <CardItem translateZ="100" rotateX={5} rotateY={5} className="w-full">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-xl group-hover/card:opacity-100 transition duration-1000"></div>
                        <img
                          alt="Website Design Showcase"
                          className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl"
                          src="/ui-ux-design-interface.png"
                          width={550}
                          height={550}
                        />
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-1 h-3 bg-white/60 rounded-full mt-2"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </WavyBackground>
      </section>

      {/* Design Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <BackgroundBeams className="opacity-30" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Our Design Services
              </h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive design solutions tailored to your business needs
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <FocusCards cards={designServices} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
        <Spotlight className="hidden md:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Design Services</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl">
                We combine creativity with strategy to deliver designs that not only look great but drive results
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {designFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var h-full">
                  <CardBody className="relative group/card h-full">
                    <Card className="border-0 bg-background shadow-lg h-full hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardItem translateZ="50">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg">
                              {feature.icon}
                            </div>
                            <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                          </div>
                        </CardItem>
                      </CardHeader>
                      <CardContent>
                        <CardItem translateZ="30">
                          <p className="text-gray-700">{feature.description}</p>
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

      {/* Design Process */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Design Process</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl">
                A proven methodology that ensures exceptional results every time
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var h-full">
                  <CardBody className="relative group/card h-full">
                    <Card className="border-0 bg-background shadow-lg h-full hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <CardItem translateZ="50">
                          <div className="text-4xl mb-4">{phase.emoji}</div>
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            {phase.step}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900">{phase.title}</h3>
                          <p className="text-gray-700 text-sm">{phase.desc}</p>
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

      {/* Portfolio Preview */}
      <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Design Portfolio</h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl">
                Explore our recent design projects and success stories
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var h-full">
                  <CardBody className="relative group/card h-full">
                    <Card className="border-0 bg-background shadow-lg h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <CardItem translateZ="100" className="w-full">
                        <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-t-lg overflow-hidden">
                          <img
                            src={project.imageUrl || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                          />
                        </div>
                      </CardItem>
                      <CardHeader>
                        <CardItem translateZ="50">
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              variant="secondary"
                              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700"
                            >
                              {project.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-gray-900">{project.title}</CardTitle>
                          <CardDescription className="text-gray-700">{project.description}</CardDescription>
                        </CardItem>
                      </CardHeader>
                      <CardContent>
                        <CardItem translateZ="30">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-700">{project.results}</p>
                          </div>
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

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Client Success Stories
              </h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our design services have transformed businesses and delighted clients
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              More Client Feedback
            </h3>
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
      <FAQSection
        title="Frequently Asked Questions"
        description="Common questions about our website design services"
        faqs={faqs}
        className="bg-muted"
      />

      {/* Contact Section */}
      <ContactSection />

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
