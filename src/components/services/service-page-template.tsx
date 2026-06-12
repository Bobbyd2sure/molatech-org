"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Sparkles, ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { AnimateOnScroll, AnimateOnLoad } from "@/components/services/motion-wrapper"
import GsapEffects from "@/components/gsap/gsap-effects"
import AnimatedIcon from "@/components/gsap/animated-icon"
import ContactSection from "@/components/services/contact-section"
import FAQSection from "@/components/services/faq-section"

const Spotlight = dynamic(
  () => import("@/components/ui/aceternity/spotlight").then((mod) => mod.Spotlight),
  { ssr: false }
)
const BackgroundBeams = dynamic(
  () => import("@/components/ui/aceternity/background-beams").then((mod) => mod.BackgroundBeams),
  { ssr: false }
)
const InfiniteMovingCards = dynamic(
  () => import("@/components/ui/aceternity/infinite-moving-cards").then((mod) => mod.InfiniteMovingCards),
  { ssr: false }
)

// ─── Theme Classes ────────────────────────────────────────────────────────────
/**
 * Pre-resolved Tailwind class strings for each colour slot.
 * Because Tailwind JIT scans source files for complete class strings, theme
 * colours CANNOT be constructed at runtime (e.g. `bg-${color}-600`).
 * Each service page must supply the full string for every slot so JIT detects
 * them in the page file where they are written as literals.
 */
export interface ThemeClasses {
  /** Hero section gradient background — e.g. "bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background" */
  heroBg: string
  /** Badge background + text colour — e.g. "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" */
  badgeBg: string
  /** Gradient used for the h1 text — e.g. "from-blue-600 via-indigo-500 to-blue-600" */
  titleGradient: string
  /** CTA button gradient — e.g. "bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600" */
  buttonGradient: string
  /** Icon foreground colour — e.g. "text-blue-600" */
  iconColor: string
  /** Icon container gradient — e.g. "bg-gradient-to-br from-blue-600 to-indigo-500" */
  iconBg: string
  /** Card soft background tint — e.g. "from-background to-blue-50/30 dark:to-blue-950/10" */
  cardBg: string
  /** Card border colour — e.g. "border-blue-200/50" */
  cardBorder: string
  /** Stats box background — e.g. "bg-blue-50 dark:bg-blue-950/20" */
  statsBg: string
  /** Stats number colour — e.g. "text-blue-600" */
  statsColor: string
  /** Outcomes section gradient background — e.g. "bg-gradient-to-r from-blue-600 to-indigo-500" */
  outcomesBg: string
  /** Outcome badge/callout background — e.g. "bg-blue-50 dark:bg-blue-950/20" */
  outcomeBadgeBg: string
  /** Outcome badge/callout text — e.g. "text-blue-800 dark:text-blue-300" */
  outcomeBadgeText: string
  /** Active filter button — e.g. "bg-blue-600 hover:bg-blue-700" */
  filterActive: string
  /** Popular pricing badge — e.g. "bg-blue-600" */
  pricingPopularBadge: string
  /** Popular pricing card border — e.g. "border-blue-500" */
  pricingPopularBorder: string
  /** Pricing price colour — e.g. "text-blue-600" */
  pricingPriceColor: string
  /** Popular pricing CTA button — e.g. "bg-blue-600 hover:bg-blue-700" */
  pricingPopularBtn: string
  /** Process step left panel gradient — same as iconBg — e.g. "bg-gradient-to-br from-blue-600 to-indigo-500" */
  processStepBg: string
  /** Case studies results panel gradient — e.g. "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/20" */
  caseStudyResultsBg: string
  /** Inline heading accent colour used in case studies / process — e.g. "text-blue-600" */
  accentText: string
  /** CTA section gradient — e.g. "bg-gradient-to-r from-blue-600 to-indigo-500" */
  ctaBg: string
  /** CTA primary button — e.g. "bg-white text-blue-600 hover:bg-white/90" */
  ctaBtn: string
}

// ─── Config Types ─────────────────────────────────────────────────────────────

export interface ServicePageConfig {
  /** Pre-resolved Tailwind class strings for the page colour theme */
  themeClasses: ThemeClasses

  /** Hero section content */
  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    ctaText: string
    ctaLink: string
    secondaryCtaText: string
    secondaryCtaLink: string
  }

  /** Metric tiles rendered below the hero headline */
  benefits: Array<{
    icon: LucideIcon
    metric: string
    title: string
  }>

  /** "What is…" explanatory section */
  whatIs: {
    badge: string
    title: string
    description: string
    items: Array<{
      icon: LucideIcon
      title: string
      description: string
    }>
    stats: {
      title: string
      items: Array<{
        value: string
        description: string
      }>
    }
  }

  /** Filterable technology / platform cards */
  techStack: {
    badge: string
    title: string
    description: string
    /** Filter keys — first entry should be "all" */
    categories: string[]
    items: Array<{
      name: string
      description: string
      icon: LucideIcon
      /** Must match one of the keys in categories */
      category: string
      features: string[]
    }>
  }

  /** Service offering cards */
  services: {
    badge: string
    title: string
    description: string
    items: Array<{
      icon: LucideIcon
      title: string
      description: string
      tools: string[]
      features: string[]
      outcome: string
    }>
  }

  /** Measurable outcomes strip */
  outcomes: Array<{
    icon: LucideIcon
    metric: string
    title: string
    description: string
  }>
  /** Sub-heading text for the outcomes section */
  outcomesDescription: string

  /** Filterable case study cards */
  caseStudies: {
    badge: string
    title: string
    description: string
    /** Industry filter buttons — first entry key should be "all" */
    industryFilters: Array<{ key: string; label: string }>
    items: Array<{
      icon: LucideIcon
      title: string
      /** Displayed under the title as a sub-label */
      client: string
      /** Optional screenshot of the live system, shown as evidence (path under /public) */
      image?: string
      /** Must match one of the industryFilter keys */
      industry: string
      challenge: string
      solution: string
      results: string[]
      tools: string[]
    }>
  }

  /** Industry vertical cards */
  industries: Array<{
    name: string
    icon: LucideIcon
    description: string
    solutions: string[]
  }>

  /** Delivery process steps */
  processSteps: Array<{
    step: string
    title: string
    duration: string
    description: string
    deliverables: string[]
  }>

  /** Testimonial quotes for the infinite moving cards (optional — omit unless quotes are real) */
  testimonials?: Array<{
    quote: string
    name: string
    title: string
  }>

  /** Pricing tier cards */
  pricing: Array<{
    name: string
    price: string
    description: string
    features: string[]
    popular?: boolean
    cta: string
  }>

  /** FAQ accordion items */
  faqs: Array<{
    question: string
    answer: string
  }>

  /** Contact and final CTA section copy */
  contact: {
    /** h2 text for the bottom CTA strip */
    ctaTitle: string
    /** Body paragraph for the bottom CTA strip */
    ctaDescription: string
    /** Smaller disclaimer line beneath the body paragraph */
    ctaDisclaimer: string
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

interface ServicePageTemplateProps {
  config: ServicePageConfig
}

/**
 * Shared layout shell used by all MolaTech service pages.
 *
 * Every section is parameterised via `config`. The JSX structure, spacing,
 * and className values are kept identical to the hand-authored web-development
 * page so that visual output is unchanged — only the data and colour theme vary.
 */
export default function ServicePageTemplate({ config }: ServicePageTemplateProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeIndustry, setActiveIndustry] = useState("all")

  const { themeClasses: t } = config

  const filteredTech =
    activeCategory === "all"
      ? config.techStack.items
      : config.techStack.items.filter((item) => item.category === activeCategory)

  const filteredCaseStudies =
    activeIndustry === "all"
      ? config.caseStudies.items
      : config.caseStudies.items.filter((item) => item.industry === activeIndustry)

  return (
    <GsapEffects className="min-h-screen">

      {/* ─── Hero Section ──────────────────────────────────────────────────────── */}
      <section className={`relative py-20 md:py-32 overflow-hidden ${t.heroBg}`}>
        <Spotlight className="hidden md:block" fill="rgba(34, 211, 238, 0.18)" />
        <BackgroundBeams className="opacity-30" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-reveal inline-block">
              <Badge className={`mb-4 ${t.badgeBg}`}>
                {config.hero.badge}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium font-heading mb-6">
              {config.hero.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={`hero-word inline-block bg-gradient-to-r ${t.titleGradient} bg-clip-text text-transparent`}
                >
                  {word}{"\u00A0"}
                </span>
              ))}
            </h1>
            <p className="hero-reveal text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              {config.hero.subtitle}
            </p>
            <p className="hero-reveal text-base text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              {config.hero.description}
            </p>
            <div className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className={t.buttonGradient}
              >
                <Link href={config.hero.ctaLink}>
                  {config.hero.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={config.hero.secondaryCtaLink}>{config.hero.secondaryCtaText}</Link>
              </Button>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="hero-reveal grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {config.benefits.map((benefit, index) => {
              const metricMatch = /^(\d+(?:\.\d+)?)(.*)$/.exec(benefit.metric)
              return (
                <div key={index} className="bg-background/80 backdrop-blur-sm border rounded-xl p-4 text-center">
                  <AnimatedIcon icon={benefit.icon} className={`h-8 w-8 ${t.iconColor}`} wrapperClassName="mx-auto mb-2" />
                  <div
                    className={`stat-count text-2xl font-medium font-heading ${t.statsColor}`}
                    data-to={metricMatch?.[1]}
                    data-suffix={metricMatch?.[2] ?? ""}
                  >
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">{benefit.title}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── What Is … Section ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">{config.whatIs.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">{config.whatIs.title}</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              {config.whatIs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {config.whatIs.items.map((item, index) => (
              <AnimateOnScroll key={item.title} delay={index * 0.1}>
                <Card className={`h-full border-0 bg-gradient-to-br ${t.cardBg}`}>
                  <CardContent className="p-8">
                    <div className={`h-14 w-14 rounded-xl ${t.iconBg} flex items-center justify-center mb-5`}>
                      <AnimatedIcon icon={item.icon} className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Statistics Box */}
          <AnimateOnScroll className={`mt-12 max-w-4xl mx-auto ${t.statsBg} rounded-2xl p-8 md:p-10`}>
            <h3 className="text-xl font-medium font-heading mb-4 text-center">{config.whatIs.stats.title}</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {config.whatIs.stats.items.map((stat, index) => (
                <div key={index}>
                  <div className={`text-3xl font-medium font-heading ${t.statsColor} mb-1`}>{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Technologies Section ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">{config.techStack.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">{config.techStack.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {config.techStack.description}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {config.techStack.categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? t.filterActive : ""}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTech.map((tech, index) => (
              <AnimateOnScroll key={tech.name} delay={index * 0.1}>
                <Card className={`h-full hover:shadow-lg transition-shadow ${t.cardBorder}`}>
                  <CardContent className="p-6">
                    <div className={`h-12 w-12 rounded-lg ${t.iconBg} flex items-center justify-center mb-4`}>
                      <AnimatedIcon icon={tech.icon} className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
                    <ul className="space-y-1">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className={`h-3 w-3 ${t.iconColor} shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Section ───────────────────────────────────────────────────── */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">{config.services.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">{config.services.title}</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {config.services.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {config.services.items.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={index * 0.1}>
                <Card className={`h-full hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br ${t.cardBg}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`h-14 w-14 rounded-xl ${t.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <AnimatedIcon icon={service.icon} className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1">{service.title}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {service.tools.map((tool, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`h-4 w-4 ${t.iconColor} shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className={`${t.outcomeBadgeBg} rounded-lg p-3 flex items-center gap-2`}>
                      <Sparkles className={`h-4 w-4 ${t.iconColor} shrink-0`} />
                      <p className={`text-sm font-medium ${t.outcomeBadgeText}`}>{service.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Measurable Outcomes ───────────────────────────────────────────────── */}
      <section className={`py-16 md:py-24 ${t.outcomesBg} text-white`}>
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">Measurable Business Outcomes</h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              {config.outcomesDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.outcomes.map((outcome, index) => (
              <AnimateOnScroll
                key={outcome.title}
                delay={index * 0.1}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <AnimatedIcon icon={outcome.icon} className="h-8 w-8" />
                  <span className="text-xl font-medium font-heading">{outcome.metric}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{outcome.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{outcome.description}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Case Studies ──────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">{config.caseStudies.badge}</Badge>
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">{config.caseStudies.title}</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {config.caseStudies.description}
            </p>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {config.caseStudies.industryFilters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeIndustry === filter.key ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveIndustry(filter.key)}
                className={activeIndustry === filter.key ? t.filterActive : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredCaseStudies.map((project, index) => (
              <AnimateOnScroll key={project.title} delay={index * 0.1}>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3">
                      {/* Left: Challenge & Solution */}
                      <div className="md:col-span-2 p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`h-12 w-12 rounded-lg ${t.iconBg} flex items-center justify-center`}>
                            <AnimatedIcon icon={project.icon} className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">{project.client}</p>
                          </div>
                        </div>

                        {project.image && (
                          <a
                            href={project.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block mb-6 rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={project.image}
                              alt={`${project.title} — live homepage screenshot`}
                              className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                              loading="lazy"
                            />
                          </a>
                        )}

                        <div className="space-y-4">
                          <div>
                            <h4 className={`font-semibold text-sm uppercase tracking-wide ${t.accentText} mb-1`}>
                              The Challenge
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                          </div>
                          <div>
                            <h4 className={`font-semibold text-sm uppercase tracking-wide ${t.accentText} mb-1`}>
                              Our Solution
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                          </div>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.tools.map((tool, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Results */}
                      <div className={`${t.caseStudyResultsBg} p-8 flex flex-col justify-center`}>
                        <h4 className={`font-semibold text-sm uppercase tracking-wide ${t.accentText} mb-4`}>
                          Results Achieved
                        </h4>
                        <ul className="space-y-3">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className={`h-5 w-5 ${t.iconColor} shrink-0 mt-0.5`} />
                              <span className="text-sm font-medium">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries We Serve ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Industries</Badge>
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">Industries We Build For</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Every industry has its own data models, compliance requirements, and user expectations. We bring
              deep vertical knowledge to every project -- so your application fits your sector, not just your brief.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.industries.map((industry, index) => (
              <AnimateOnScroll key={industry.name} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`h-12 w-12 rounded-lg ${t.iconBg} flex items-center justify-center mb-4`}>
                      <AnimatedIcon icon={industry.icon} className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <ChevronRight className={`h-3 w-3 ${t.iconColor} shrink-0`} />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Process ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">How We Build Your Application</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our 4-phase delivery process is designed to eliminate ambiguity, keep you informed at every step, and
              ensure what we ship matches what you envisioned -- every single time
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {config.processSteps.map((item, index) => (
              <AnimateOnScroll key={item.step} delay={index * 0.1}>
                <Card className="overflow-hidden border-0 shadow-md">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className={`${t.processStepBg} text-white p-6 md:p-8 md:w-48 flex flex-col items-center justify-center shrink-0`}>
                        <div className="text-5xl font-medium font-heading mb-1">{item.step}</div>
                        <div className="text-sm font-medium opacity-80">{item.duration}</div>
                      </div>
                      <div className="p-6 md:p-8 flex-1">
                        <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                        <div>
                          <h4 className={`text-sm font-semibold uppercase tracking-wide ${t.accentText} mb-2`}>
                            Key Deliverables
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.deliverables.map((deliverable, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials (rendered only when real quotes exist) ─────────────── */}
      {config.testimonials && config.testimonials.length > 0 && (
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Client Success</Badge>
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from businesses that launched high-performance web applications with MolaTech
            </p>
          </div>

          <InfiniteMovingCards
            items={config.testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-8"
          />
        </div>
      </section>
      )}

      {/* ─── Pricing ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Investment</Badge>
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">Pricing Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for every stage of your digital product journey. All packages include discovery,
              design, development, testing, deployment, and post-launch support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {config.pricing.map((tier, index) => (
              <AnimateOnScroll key={tier.name} delay={index * 0.1}>
                <Card className={`h-full relative ${tier.popular ? `${t.pricingPopularBorder} border-2 shadow-xl` : ""}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className={t.pricingPopularBadge}>Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                    <div className={`text-3xl font-medium font-heading mb-6 ${t.pricingPriceColor}`}>{tier.price}</div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`h-4 w-4 ${t.iconColor} shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${tier.popular ? t.pricingPopularBtn : ""}`}
                      variant={tier.popular ? "primary" : "outline"}
                    >
                      <Link href="/start">{tier.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────────────── */}
      <FAQSection
        faqs={config.faqs}
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most from businesses planning their project"
      />

      {/* ─── Contact ───────────────────────────────────────────────────────────── */}
      <ContactSection />

      {/* ─── CTA ───────────────────────────────────────────────────────────────── */}
      <section className={`py-16 md:py-24 ${t.ctaBg}`}>
        <div className="container px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">{config.contact.ctaTitle}</h2>
          <p className="text-white/80 mb-4 max-w-2xl mx-auto">
            {config.contact.ctaDescription}
          </p>
          <p className="text-white/60 mb-8 text-sm">
            {config.contact.ctaDisclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="subtle" className={t.ctaBtn}>
              <Link href="/start">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </GsapEffects>
  )
}
