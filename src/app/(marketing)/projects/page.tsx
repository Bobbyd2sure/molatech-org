"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import GsapEffects from "@/components/gsap/gsap-effects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
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
} from "lucide-react"
import Link from "next/link"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import ContactSection from "@/components/contact-section"

/**
 * ProjectsPage — Molatech case studies / portfolio page.
 * Ported from legacy site; testimonials with named individuals removed.
 * All purple/violet colours replaced with brand palette:
 *   blue-600 (#2563EB), cyan-400 (#22D3EE), emerald-500 (#10B981).
 */
export default function ProjectsPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const [activeTab, setActiveTab] = useState("all")

  const caseStudies = [
    {
      id: "wonlyai",
      title: "WonlyAI — Commercial AI Subscription Platform",
      category: "ai-automation",
      categoryLabel: "AI & Automation",
      clientLogo: "WA",
      industry: "Sports & Technology · Live, own platform",
      description:
        "A full-stack commercial AI product: tiered subscriptions, entitlement management, and a daily Claude-driven prediction engine running at a fixed, capped unit cost — with a companion mobile app on both app stores.",
      challenge:
        "Operate a complete commercial AI product with six subscription tiers and daily AI inference without runaway costs or manual operations.",
      solution:
        "Built on Supabase with Stripe billing, an n8n-orchestrated daily inference engine with a hard per-run cost ceiling, and a React Native app on Expo for iOS and Android with push notifications tied to daily content drops.",
      results: [
        "Live with paying subscribers",
        "Six subscription tiers served from one engine",
        "Scheduled daily inference with capped unit economics",
        "One mobile codebase shipped to both app stores",
      ],
      imageUrl: "/images/case-studies/wonlyai.png",
      technologies: ["Supabase", "Claude API", "n8n", "Stripe", "React Native", "Expo"],
      metrics: [
        { label: "Subscription tiers", value: "6", icon: Layers },
        { label: "AI runs", value: "Daily", icon: Zap },
        { label: "Inference cost", value: "Capped", icon: Target },
        { label: "App stores", value: "2", icon: TrendingUp },
      ],
      timeline: "Live & operating",
      teamSize: "Principal-led",
      features: [
        "Six-tier subscription billing",
        "Daily automated AI predictions",
        "Hard per-run cost ceiling",
        "iOS & Android mobile app",
        "Push notifications",
        "Entitlement management",
      ],
    },
    {
      id: "grantifier",
      title: "Grantifier — AI Grant Discovery Platform",
      category: "ai-automation",
      categoryLabel: "AI & Automation",
      clientLogo: "GR",
      industry: "Nonprofit Tech · Live, client",
      description:
        "The grant office your NGO never had: matches an organization's profile against a continuously refreshed grant database and drafts the application with AI, ready to edit and export.",
      challenge:
        "NGOs lose weeks finding the right grants and drafting applications, and most can't afford a dedicated grants officer.",
      solution:
        "A platform that ingests grants daily from Grants.gov, EU Funding & Tenders, and UKRI, matches them to the NGO's profile, and drafts applications with Claude for editing and PDF export — with zero manual upkeep on the database.",
      results: [
        "Live at grantifier.co.uk",
        "Daily automated grant ingestion with no manual upkeep",
        "AI matching and application drafting in production",
      ],
      imageUrl: "/images/case-studies/grantifier.png",
      technologies: ["Next.js", "Supabase", "Claude API", "Automated ingestion"],
      metrics: [
        { label: "Grant sources", value: "3", icon: Layers },
        { label: "Ingestion", value: "Daily", icon: Zap },
        { label: "Drafting", value: "AI", icon: Target },
        { label: "Status", value: "Live", icon: Award },
      ],
      timeline: "Live & operating",
      teamSize: "Principal-led",
      features: [
        "Profile-to-grant AI matching",
        "Daily multi-source ingestion",
        "AI application drafting",
        "PDF export",
      ],
    },
    {
      id: "marymia",
      title: "Marymia — African Fashion E-commerce Brand",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      clientLogo: "MM",
      industry: "Fashion & Retail · Live, own brand",
      description:
        "A fashion storefront powered by an AI brand-model pipeline: a custom-trained image model produces consistent editorial campaign imagery, so new collections go live without a photoshoot.",
      challenge:
        "Launching a fashion brand normally means recurring photoshoot costs for every collection — model fees, studio time, and weeks of lead time before a product can go live.",
      solution:
        "Built the storefront and a custom Flux LoRA brand model that generates editorial-grade campaign and product imagery on demand, keeping every drop visually consistent at zero studio cost.",
      results: [
        "Live at shop.marymia.co.uk",
        "Custom AI brand model produces consistent editorial imagery",
        "New collections photographed and listed without studio costs",
      ],
      imageUrl: "/images/case-studies/marymia-fashion.png",
      technologies: ["E-commerce storefront", "Flux LoRA", "AI imagery pipeline", "Brand design"],
      metrics: [
        { label: "Campaign imagery", value: "AI", icon: Target },
        { label: "Studio costs", value: "$0", icon: TrendingUp },
        { label: "Brand model", value: "Custom", icon: Award },
        { label: "Status", value: "Live", icon: Zap },
      ],
      timeline: "Live & operating",
      teamSize: "Principal-led",
      features: [
        "AI brand-model imagery pipeline",
        "Editorial campaign generation",
        "Product catalog & checkout",
        "Consistent persona across drops",
      ],
    },
    {
      id: "care-services",
      title: "Care Services Provider — Website & Zero-Downtime Cutover",
      category: "web-development",
      categoryLabel: "Web Development",
      clientLogo: "CS",
      industry: "Healthcare Services · Live, client (confidential)",
      description:
        "A modern, fast web presence for a US home care provider, cut over from legacy hosting with zero email disruption and a content workflow their team can run without touching code.",
      challenge:
        "The provider needed a credible, modern site their team could update without breaking production — and a migration that wouldn't interrupt the email their operations run on.",
      solution:
        "A Next.js site on Vercel with automated deployments, split-routing DNS (web traffic to Vercel, email kept on the existing mail host), and a locked asset pipeline so photo swaps are filename-only changes.",
      results: [
        "Live in production",
        "Zero-downtime DNS cutover — email untouched",
        "Client-safe content workflow, no code edits needed",
      ],
      imageUrl: "/images/services/web-development.jpg",
      technologies: ["Next.js", "Vercel", "DNS split-routing", "Tailwind CSS"],
      metrics: [
        { label: "Cutover downtime", value: "0", icon: Zap },
        { label: "Deploys", value: "Push", icon: TrendingUp },
        { label: "Content edits", value: "No-code", icon: Target },
        { label: "Status", value: "Live", icon: Award },
      ],
      timeline: "Live & operating",
      teamSize: "Principal-led",
      features: [
        "Automated deployments",
        "Split-routing DNS",
        "Locked asset pipeline",
        "Mobile-optimized design",
      ],
    },
    {
      id: "student-engagement",
      title: "Student Engagement Platform — US High School",
      category: "web-development",
      categoryLabel: "Web Development",
      clientLogo: "SE",
      industry: "Education · Live, client (confidential)",
      description:
        "One dashboard that makes student engagement visible and actionable — attendance, participation, assignments, and belonging with gamified mechanics, so staff act before a student falls behind.",
      challenge:
        "Schools often can't see student disengagement until grades slip — the signals live in separate systems nobody checks daily.",
      solution:
        "A gamified engagement platform on Next.js and Supabase that unifies the signals into one staff dashboard with points and streak mechanics, deployed for a Washington, DC high school.",
      results: [
        "Live and in daily use",
        "Engagement visible and actionable in a single dashboard",
        "Gamified mechanics driving participation",
      ],
      imageUrl: "/images/services/training.jpg",
      technologies: ["Next.js", "Supabase", "TypeScript", "Gamification mechanics"],
      metrics: [
        { label: "Dashboard", value: "1", icon: Layers },
        { label: "Signals unified", value: "4", icon: Target },
        { label: "Mechanics", value: "Gamified", icon: Award },
        { label: "Status", value: "Live", icon: Zap },
      ],
      timeline: "Live & operating",
      teamSize: "Principal-led",
      features: [
        "Attendance & participation tracking",
        "Assignment visibility",
        "Belonging signals",
        "Points & streak mechanics",
      ],
    },
    {
      id: "content-ops",
      title: "Content Operations Platform — Daily Automated Video",
      category: "ai-automation",
      categoryLabel: "AI & Automation",
      clientLogo: "CO",
      industry: "Media & Content · Live, own platform",
      description:
        "A governed agentic production line that scripts, voices, renders, packages, and publishes broadcast-ready video every day — with human approval gates and an audit trail on every run.",
      challenge:
        "Run a daily content operation — scripting, voice synthesis, video rendering, packaging, distribution — without dedicating any headcount to it.",
      solution:
        "Claude drafts the script against an editorial standard, ElevenLabs synthesizes narration, Remotion renders the video programmatically, and n8n orchestrates packaging and scheduled publishing with mobile approval gates and automatic failure recovery.",
      results: [
        "In production with scheduled daily output",
        "The work of a small production team at API unit cost",
        "Audit trail on every run — inputs, decisions, actions, cost",
      ],
      imageUrl: "/images/services/automation.jpg",
      technologies: ["Claude API", "ElevenLabs", "Remotion", "n8n"],
      metrics: [
        { label: "Publishing cadence", value: "Daily", icon: Zap },
        { label: "Dedicated headcount", value: "0", icon: Target },
        { label: "Runs logged", value: "100%", icon: Award },
        { label: "Approval gates", value: "Human", icon: Layers },
      ],
      timeline: "Live & operating",
      teamSize: "Principal-led",
      features: [
        "AI scriptwriting to editorial standard",
        "Voice synthesis & programmatic rendering",
        "Scheduled publishing",
        "Mobile approval gates",
        "Automatic failure recovery",
      ],
    },
    {
      id: "lead-extraction",
      title: "Lead-Extraction Engine",
      category: "ai-automation",
      categoryLabel: "AI & Automation",
      clientLogo: "LE",
      industry: "Growth Operations · Internal, deployable for clients",
      description:
        "A compliant lead-generation engine: source scraping, enrichment, deduplication, scoring, and CAN-SPAM-compliant outreach queues. An asset you own, not a list you rent.",
      challenge:
        "Outbound pipelines starve without a steady source of qualified leads — and bought lists are stale, non-compliant, and rented rather than owned.",
      solution:
        "Automated harvesting of advertiser leads from trade publications with enrichment, dedupe, and scoring against the ideal customer profile, feeding compliant outreach queues. Proven on our own pipeline before any client deployment.",
      results: [
        "380+ qualified leads from a single automated sweep",
        "CAN-SPAM-compliant outreach queues for US campaigns",
        "The same system runs our own outreach today",
      ],
      imageUrl: "/images/services/digital-marketing.jpg",
      technologies: ["Python", "Apify", "Enrichment APIs", "CAN-SPAM workflow"],
      metrics: [
        { label: "Qualified leads", value: "380+", icon: TrendingUp },
        { label: "Sweeps needed", value: "1", icon: Zap },
        { label: "Compliance", value: "CAN-SPAM", icon: Award },
        { label: "Ownership", value: "Yours", icon: Target },
      ],
      timeline: "Live & operating",
      teamSize: "Principal-led",
      features: [
        "Trade-publication source scraping",
        "Enrichment & deduplication",
        "ICP-tuned lead scoring",
        "Compliant outreach queues",
      ],
    },
    {
      id: "aws-audit",
      title: "Cloud Security Audit Automation",
      category: "security",
      categoryLabel: "Cybersecurity",
      clientLogo: "CA",
      industry: "Cloud Security · Internal tooling, deployable for clients",
      description:
        "Automated AWS posture review: Terraform-driven inventory and Python audit scripts that sweep IAM, storage, network, and logging configurations straight into a severity-coded findings register.",
      challenge:
        "Manual cloud posture reviews take days, vary between reviewers, and produce evidence that rarely survives contact with an auditor.",
      solution:
        "Scripted checks built on Terraform inventory and Python/boto3 that write findings directly into our C/H/M/L register format — repeatable on demand after every remediation.",
      results: [
        "A day of manual cloud review compressed into minutes",
        "Findings land in an auditor-usable severity-coded register",
        "Repeatable on demand",
      ],
      imageUrl: "/images/services/cybersecurity.jpg",
      technologies: ["AWS", "Terraform", "Python", "boto3"],
      metrics: [
        { label: "Review time", value: "Minutes", icon: Zap },
        { label: "Config domains", value: "4", icon: Layers },
        { label: "Register format", value: "C/H/M/L", icon: Award },
        { label: "Re-runs", value: "On demand", icon: Target },
      ],
      timeline: "Live & operating",
      teamSize: "Principal-led",
      features: [
        "IAM, storage, network & logging sweeps",
        "Severity-coded findings register",
        "Terraform-driven inventory",
        "Repeatable evidence collection",
      ],
    },
    {
      id: "hipaa-agents",
      title: "8-Agent AI Architecture for Healthcare Services",
      category: "ai-automation",
      categoryLabel: "AI & Automation",
      clientLogo: "HA",
      industry: "Healthcare · Proposal stage, worked example",
      description:
        "A HIPAA-aligned eight-agent architecture for a regulated home-care operator — every agent behind a human approval gate, every action logged, no model ever trained on patient data.",
      challenge:
        "A HIPAA-regulated operator asked what AI could safely automate across intake, scheduling, compliance documentation, and family communication.",
      solution:
        "An eight-agent design with strict PHI boundaries, human approval gates on every agent, and full compliance logging — scoped as a fixed-price starter package with measurable hour-savings targets per workflow.",
      results: [
        "Full written architecture and fixed-scope proposal",
        "100% of agent actions logged and human-gated",
        "A worked example of scoping agentic AI in regulated environments",
      ],
      imageUrl: "/images/services/consultancy.jpg",
      technologies: ["Claude API", "n8n", "HIPAA-aligned design", "Audit logging"],
      metrics: [
        { label: "Agents designed", value: "8", icon: Layers },
        { label: "Actions gated", value: "100%", icon: Award },
        { label: "PHI boundaries", value: "Strict", icon: Target },
        { label: "Pricing", value: "Fixed", icon: TrendingUp },
      ],
      timeline: "Proposal stage",
      teamSize: "Principal-led",
      features: [
        "Eight-agent reference architecture",
        "Human approval gates throughout",
        "Compliance-grade audit logging",
        "Measurable hour-savings targets",
      ],
    },
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "ai-automation", label: "AI & Automation" },
    { value: "web-development", label: "Web Development" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "security", label: "Cybersecurity" },
  ]

  const filteredProjects =
    activeTab === "all" ? caseStudies : caseStudies.filter((project) => project.category === activeTab)

  const stats = [
    { label: "Agentic workflows in production", value: "7", icon: Code },
    { label: "Service lines, one vendor", value: "3", icon: Layers },
    { label: "Hrs/wk automated on our own stack", value: "15+", icon: Award },
  ]

  return (
    <GsapEffects className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
        <BackgroundBeams className="opacity-30" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-reveal inline-block mb-4">
              <Badge variant="secondary">
                Our Portfolio
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium font-heading mb-6">
              {["Case", "Studies", "&", "Projects"].map((word, i) => (
                <span
                  key={i}
                  className="hero-word inline-block bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {word}{"\u00A0"}
                </span>
              ))}
            </h1>
            <p className="hero-reveal text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise in delivering innovative digital
              solutions across various industries.
            </p>

            {/* Stats */}
            <div className="hero-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const statMatch = /^(\d+(?:\.\d+)?)(.*)$/.exec(stat.value)
                return (
                  <div key={index} className="bg-background/50 backdrop-blur-sm border rounded-xl p-4">
                    <stat.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div
                      className="stat-count text-2xl font-medium font-heading bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                      data-to={statMatch?.[1]}
                      data-suffix={statMatch?.[2] ?? ""}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
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
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
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
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                      <div className="relative overflow-hidden rounded-xl border shadow-2xl">
                        <Image
                          src={project.imageUrl || "/images/services/projects.jpg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">
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
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-medium">
                            {project.clientLogo}
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">{project.industry}</p>
                          </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-medium font-heading mb-3">{project.title}</h2>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-muted/50 rounded-lg p-3 text-center">
                            <metric.icon className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                            <div className="text-lg font-medium text-blue-600">{metric.value}</div>
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
                        variant="outline"
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
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-medium text-lg">The Challenge</h3>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                              <Lightbulb className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
                            </div>
                            <h3 className="font-medium text-lg">Our Solution</h3>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                        </div>

                        {/* Results */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                              <TrendingUp className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
                            </div>
                            <h3 className="font-medium text-lg">Results Achieved</h3>
                          </div>
                          <ul className="space-y-2">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mt-8 pt-8 border-t">
                        <h3 className="font-medium text-lg mb-4">Key Features Delivered</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Divider */}
                {index < filteredProjects.length - 1 && (
                  <div className="mt-24 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let&apos;s discuss how we can help bring your vision to life. Our team is ready to create your success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90">
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
    </GsapEffects>
  )
}
