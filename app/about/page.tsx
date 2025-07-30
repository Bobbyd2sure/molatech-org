"use client"

import { Button } from "@/components/ui/button"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { GlowingStarsBackgroundCard } from "@/components/ui/aceternity/glowing-stars"
import { AnimatedBackgroundLines } from "@/components/ui/aceternity/animated-background-lines"
import { GridBackground } from "@/components/ui/aceternity/grid-background"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import CompanyHistory from "@/components/company-history"
import FAQSection from "@/components/faq-section"
import { cn } from "@/lib/utils"
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { Spotlight } from "@/components/ui/aceternity/spotlight"

export default function AboutPage() {
  const ref = useRef(null)
  const valuesRef = useRef(null)
  const missionRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" })

  // Values data
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client communication.",
      icon: "✨",
      gradient: "from-purple-600 via-pink-500 to-purple-400",
      delay: 0,
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve complex problems and drive progress.",
      icon: "💡",
      gradient: "from-blue-600 via-cyan-500 to-blue-400",
      delay: 0.1,
    },
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in all our business dealings and relationships.",
      icon: "🛡️",
      gradient: "from-emerald-600 via-green-500 to-emerald-400",
      delay: 0.2,
    },
    {
      title: "Client Focus",
      description:
        "We put our clients' needs at the center of everything we do, ensuring their success is our success.",
      icon: "🤝",
      gradient: "from-orange-600 via-amber-500 to-orange-400",
      delay: 0.3,
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients and within our team.",
      icon: "👥",
      gradient: "from-indigo-600 via-violet-500 to-indigo-400",
      delay: 0.4,
    },
    {
      title: "Continuous Learning",
      description: "We invest in ongoing education and skill development for our team to stay at the cutting edge.",
      icon: "📚",
      gradient: "from-teal-600 via-cyan-500 to-teal-400",
      delay: 0.5,
    },
  ]

  // FAQ data for about page
  const aboutFaqs = [
    {
      question: "When was MolaTech founded?",
      answer:
        "MolaTech was founded in 2023 by our CEO Sarah Johnson, who had a vision to create a technology company that truly understood business needs and could deliver solutions that drive real results.",
    },
    {
      question: "What makes MolaTech different from other tech companies?",
      answer:
        "Our approach combines technical excellence with business acumen. We don't just build technology; we create solutions that align with your strategic objectives. Our team brings diverse expertise across multiple industries, allowing us to understand your unique challenges and opportunities.",
    },
    {
      question: "How large is your team?",
      answer:
        "We have a growing team of professionals including developers, designers, project managers, marketing specialists, and cybersecurity experts. Our team continues to expand as we grow our services and client base.",
    },
    {
      question: "Do you have experience in my industry?",
      answer:
        "Despite being a newer company, our team members bring extensive experience from working with clients across numerous industries including healthcare, finance, retail, education, manufacturing, and professional services. This diverse background allows us to bring best practices and innovative approaches to any industry.",
    },
    {
      question: "What certifications and partnerships do you maintain?",
      answer:
        "Our team holds certifications in various technologies and methodologies including AWS, Microsoft Azure, Google Cloud, Agile, CISSP, and more. We maintain strategic partnerships with leading technology providers to ensure we can offer the best solutions for our clients.",
    },
    {
      question: "Are you involved in the local tech community?",
      answer:
        "Yes, we're actively involved in the tech community through meetups, conferences, and educational initiatives. We regularly host workshops and webinars, and our team members frequently speak at industry events to share knowledge and best practices.",
    },
    {
      question: "Do you offer internships or entry-level positions?",
      answer:
        "Yes, we believe in nurturing new talent. We offer internship programs and entry-level positions throughout the year. We partner with local universities and coding bootcamps to provide opportunities for those starting their careers in technology.",
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section with Enhanced Aceternity UI */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <WavyBackground
          className="absolute inset-0"
          backgroundFill="hsl(var(--background))"
          colors={["#8B5CF6", "#3B82F6", "#06B6D4", "#10B981"]}
          waveWidth={50}
          blur={10}
          speed="slow"
          waveOpacity={0.5}
        />
        <BackgroundBeams className="absolute inset-0 opacity-60" />
        <FloatingParticles className="absolute inset-0" particleCount={50} particleColor="#8B5CF6" />
        <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <CardItem translateZ="60" className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 opacity-75 blur-xl animate-pulse"></div>
                      <h1 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        About MolaTech
                      </h1>
                    </div>
                  </CardItem>

                  <CardItem translateZ="40" className="max-w-3xl mx-auto">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg"></div>
                      <p className="relative text-xl md:text-2xl text-muted-foreground leading-relaxed p-6">
                        Transforming businesses through innovative technology solutions since 2023
                      </p>
                    </div>
                  </CardItem>
                </motion.div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Main Content Section with Grid Background */}
      <GridBackground className="py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div ref={ref} className="mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card w-full h-auto rounded-xl">
                    <CardItem translateZ="100" rotateX={2} rotateY={2} className="w-full">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-xl group-hover/card:opacity-100 transition duration-1000"></div>
                        <img
                          src="/modern-tech-team.png"
                          alt="Team at work"
                          className="relative w-full h-auto rounded-lg object-cover shadow-2xl"
                        />
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Our Story
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Founded in 2023, MolaTech has quickly established itself as a leader in digital transformation,
                    helping businesses of all sizes leverage technology to achieve their goals.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our team of experts brings together decades of experience across web development, mobile
                    applications, digital marketing, cloud infrastructure, and cybersecurity. We're passionate about
                    delivering innovative solutions that drive real business results.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <GlowingStarsBackgroundCard className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Us?</h3>
                    <p className="text-gray-200 leading-relaxed">
                      What sets us apart is our client-centered approach. We don't just build technology; we create
                      solutions that address your specific business challenges and opportunities. Our collaborative
                      process ensures that we understand your goals and deliver solutions that exceed expectations.
                    </p>
                  </GlowingStarsBackgroundCard>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>

      {/* Mission & Vision Section with Animated Lines */}
      <AnimatedBackgroundLines className="py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Mission & Vision
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 h-full">
                      <CardItem translateZ="50">
                        <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Our Mission</h3>
                      </CardItem>
                      <CardItem translateZ="30">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          To empower businesses through technology, delivering solutions that are not just technically
                          excellent but also aligned with our clients' strategic objectives.
                        </p>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>

                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 h-full">
                      <CardItem translateZ="50">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Vision</h3>
                      </CardItem>
                      <CardItem translateZ="30">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          To be the most trusted technology partner for businesses seeking digital transformation, known
                          for our expertise, integrity, and client-focused approach.
                        </p>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedBackgroundLines>

      {/* Values Section - Redesigned */}
      <section className="py-24 relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              ref={valuesRef}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
                These principles guide everything we do and define who we are as a company
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: value.delay + 0.2 }}
                  >
                    <CardContainer className="inter-var">
                      <CardBody className="relative group/card">
                        <div
                          className={cn(
                            "relative h-full rounded-xl p-6 overflow-hidden",
                            "before:absolute before:inset-0 before:bg-gradient-to-br",
                            `before:${value.gradient} before:opacity-10 before:transition-opacity before:duration-500`,
                            "hover:before:opacity-20",
                          )}
                        >
                          <div
                            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-70 rounded-t-xl transition-all duration-500 group-hover/card:opacity-100 group-hover/card:h-1.5"
                            style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                          >
                            <div className={`w-full h-full ${value.gradient}`}></div>
                          </div>

                          <CardItem
                            translateZ="60"
                            className="text-4xl mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br opacity-90 shadow-lg"
                            style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                          >
                            <div
                              className={`w-full h-full flex items-center justify-center rounded-full ${value.gradient}`}
                            >
                              <span className="text-2xl">{value.icon}</span>
                            </div>
                          </CardItem>

                          <CardItem translateZ="50" className="mb-2">
                            <h3
                              className={`text-2xl font-bold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
                            >
                              {value.title}
                            </h3>
                          </CardItem>

                          <CardItem translateZ="40">
                            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                          </CardItem>
                        </div>
                      </CardBody>
                    </CardContainer>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <CompanyHistory />

      {/* FAQ Section */}
      <FAQSection
        title="About MolaTech: Frequently Asked Questions"
        description="Learn more about our company and our approach to technology solutions"
        faqs={aboutFaqs}
      />

      {/* CTA Section with Background Beams */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white border-0 px-8 py-3 text-lg"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
