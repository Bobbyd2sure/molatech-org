"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { GlowingStarsBackgroundCard } from "@/components/ui/aceternity/glowing-stars"
import { GridBackground } from "@/components/ui/aceternity/grid-background"
import { AnimatedBackgroundLines } from "@/components/ui/aceternity/animated-background-lines"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import CompanyHistory from "@/components/company-history"
import FAQSection from "@/components/faq-section"
import { cn } from "@/lib/utils"
import GsapEffects from "@/components/gsap/gsap-effects"

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from delivery quality to client communication.",
    icon: "✨",
    gradient: "from-blue-600 via-cyan-400 to-blue-400",
    delay: 0,
  },
  {
    title: "Innovation",
    description:
      "We embrace emerging technologies and approaches to solve complex security and engineering problems.",
    icon: "💡",
    gradient: "from-blue-600 via-cyan-500 to-emerald-400",
    delay: 0.1,
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and transparency in all our business dealings and client relationships.",
    icon: "🛡️",
    gradient: "from-emerald-500 via-cyan-400 to-emerald-400",
    delay: 0.2,
  },
  {
    title: "Client Focus",
    description:
      "We put our clients' needs at the centre of everything we do — your success is the only metric that matters.",
    icon: "🤝",
    gradient: "from-blue-600 via-cyan-400 to-emerald-500",
    delay: 0.3,
  },
  {
    title: "Accountability",
    description:
      "Every deliverable has a named owner, an exit criterion, and a date. We hold ourselves to what we commit.",
    icon: "📋",
    gradient: "from-cyan-400 via-blue-600 to-emerald-500",
    delay: 0.4,
  },
  {
    title: "Continuous Learning",
    description:
      "We invest in ongoing education and certification to stay at the cutting edge of security and engineering.",
    icon: "📚",
    gradient: "from-blue-600 via-cyan-400 to-emerald-400",
    delay: 0.5,
  },
]

const aboutFaqs = [
  {
    question: "When was MolaTech founded?",
    answer:
      "MolaTech was founded in 2023 with a mission to deliver senior-level security and engineering outcomes to mid-market businesses at fixed scope and fixed price.",
  },
  {
    question: "What makes MolaTech different from other tech companies?",
    answer:
      "Our approach combines technical depth with commercial accountability. We don't bill open-ended hours — we scope outcomes, name the deliverables, and price them upfront. The person on the proposal is the person doing the work.",
  },
  {
    question: "What service lines does MolaTech cover?",
    answer:
      "We operate across three service lines: Cybersecurity & GRC (risk assessments, audit-ready evidence, compliance frameworks), engineering (architecture, builds, integrations), and AI automation (workflow automation, AI-powered tooling). Each is delivered as fixed-scope engagements.",
  },
  {
    question: "Do you work with small businesses or only enterprises?",
    answer:
      "We focus on mid-market companies — typically those who need senior-level outcomes but don't yet have the headcount or budget for a full in-house team. Our fixed-scope model makes costs predictable regardless of company size.",
  },
  {
    question: "What certifications and frameworks do you work against?",
    answer:
      "Our work spans SOC 2, ISO 27001, NIST CSF, HIPAA, GDPR, and CIS Controls. Team certifications include CISSP, cloud security specialisations (AWS, Azure, GCP), and relevant engineering credentials. We select the right framework based on your regulatory context.",
  },
  {
    question: "Are you involved in the broader tech community?",
    answer:
      "Yes — we share knowledge through writing, community engagement, and open-source contributions. We believe that raising the baseline for security awareness is good for the whole industry.",
  },
]

export default function AboutPage() {
  const ref = useRef(null)
  const valuesRef = useRef(null)
  const missionRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" })

  return (
    <GsapEffects className="relative bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">
        <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="hero-reveal inline-block text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">
                  About MolaTech
                </span>
                <h1 className="text-4xl md:text-6xl font-medium font-heading !leading-[1.15] mb-6">
                  {"Senior-level outcomes, fixed scope".split(" ").map((word, i) => (
                    <span
                      key={i}
                      className="hero-word inline-block bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                    >
                      {word}{"\u00A0"}
                    </span>
                  ))}
                </h1>
                <p className="hero-reveal text-lg text-muted-foreground leading-relaxed mb-8">
                  MolaTech delivers security, engineering, and AI automation as fixed-scope engagements
                  for mid-market companies. Founded in 2023, built on the principle that clients should
                  know the price before the work starts.
                </p>
                <div className="hero-reveal">
                  <Button asChild size="lg" variant="primary">
                    <Link href="/contact">Work with us</Link>
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/about.jpg"
                    alt="MolaTech team at work"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <GridBackground className="py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div ref={ref} className="mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-medium font-heading mb-6 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Our Story
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Founded in 2023, MolaTech was built to solve a specific frustration: mid-market
                    companies routinely paying for open-ended engagements where scope, price, and
                    accountability were all unclear.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We fixed that by designing every engagement around a named deliverable, a clear
                    exit criterion, and a date. The person on the proposal is the person doing the
                    work — no bait-and-switch to junior staff.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today we cover three service lines — Cybersecurity &amp; GRC, engineering, and
                    AI automation — delivered as fixed-scope outcomes across security frameworks
                    including SOC 2, ISO 27001, NIST CSF, HIPAA, and GDPR.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <GlowingStarsBackgroundCard className="p-8">
                    <h3 className="text-2xl font-medium font-heading mb-4 text-white">
                      Why Choose Us?
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      What sets us apart is accountability. We don't just build technology or run
                      assessments — we deliver defined outcomes with written scope, agreed pricing,
                      and audit-ready evidence at the end. No hidden invoices, no scope creep by
                      default.
                    </p>
                  </GlowingStarsBackgroundCard>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>

      {/* Mission & Vision */}
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
              <h2 className="text-4xl md:text-5xl font-medium font-heading mb-12 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Our Mission &amp; Vision
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 h-full">
                      <CardItem translateZ="50">
                        <h3 className="text-2xl font-medium font-heading mb-4 text-blue-600">
                          Our Mission
                        </h3>
                      </CardItem>
                      <CardItem translateZ="30">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          To empower businesses through technology — delivering security and
                          engineering outcomes that are technically excellent, commercially
                          predictable, and aligned with our clients' strategic objectives.
                        </p>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>

                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 h-full">
                      <CardItem translateZ="50">
                        <h3 className="text-2xl font-medium font-heading mb-4 text-emerald-600">
                          Our Vision
                        </h3>
                      </CardItem>
                      <CardItem translateZ="30">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          To be the most trusted fixed-scope technology partner for mid-market
                          companies — known for our expertise, integrity, and for always delivering
                          exactly what we scoped.
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

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden bg-white">
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
              <h2 className="text-4xl md:text-5xl font-medium font-heading mb-6 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
                These principles guide every engagement and define who we are as a company
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
                          <CardItem
                            translateZ="60"
                            className="text-4xl mb-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <div
                              className={`w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br ${value.gradient}`}
                            >
                              <span className="text-2xl">{value.icon}</span>
                            </div>
                          </CardItem>

                          <CardItem translateZ="50" className="mb-2">
                            <h3
                              className={`text-2xl font-medium font-heading bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
                            >
                              {value.title}
                            </h3>
                          </CardItem>

                          <CardItem translateZ="40">
                            <p className="text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
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

      {/* FAQ */}
      <FAQSection
        title="About MolaTech: Frequently Asked Questions"
        description="Learn more about our company and our approach to technology solutions"
        faqs={aboutFaqs}
      />

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-white">
        <BackgroundBeams className="absolute inset-0 opacity-60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium font-heading mb-6 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help secure and build your systems with
              fixed-scope engagements and no surprise invoices.
            </p>
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </GsapEffects>
  )
}
