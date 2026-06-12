import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FAQSection from "@/components/faq-section"
import { MessageSquare } from "lucide-react"
import FaqHero from "./_hero"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | MolaTech",
  description:
    "Find answers to common questions about MolaTech's services, pricing, process, and support. Get the information you need to start your engagement.",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | MolaTech",
    description:
      "Find answers to common questions about MolaTech's services, pricing, process, and support.",
  },
}

const generalFaqs = [
  {
    question: "What services does MolaTech offer?",
    answer:
      "We deliver three service lines: Cybersecurity & GRC (risk assessments, compliance frameworks, audit-ready evidence packs), engineering (architecture, builds, integrations), and AI automation (workflow automation, AI-powered tooling). Each engagement is scoped as a fixed-price outcome — not open-ended hours.",
  },
  {
    question: "Where is MolaTech based?",
    answer:
      "MolaTech is headquartered in Austin, Texas, USA. We work with clients globally and operate fully remote for all engagements. Our team accommodates different time zones and can flex communication cadences to suit your team.",
  },
  {
    question: "How do I get started with MolaTech?",
    answer:
      "The fastest route is booking a free consultation via our Book page — we'll discuss your requirements, goals, and timeline, then provide a scoped proposal with a fixed price. No obligation, no surprise invoices.",
  },
  {
    question: "Do you work with small businesses or only enterprises?",
    answer:
      "We focus on mid-market companies — typically those who need senior-level security or engineering outcomes but don't have a full in-house team for it yet. Our fixed-scope model keeps costs predictable regardless of your company size.",
  },
]

const projectFaqs = [
  {
    question: "How long does a typical engagement take?",
    answer:
      "It depends on scope. A targeted security assessment might deliver first findings inside two weeks. A full compliance readiness programme or a custom application build typically runs 6–12 weeks. Every engagement starts with a written scope that includes milestones and dates.",
  },
  {
    question: "What is your delivery process?",
    answer:
      "We follow a structured approach: Discovery & Scoping, Execution, Review, and Handover. Throughout, you have a named engagement lead and regular written updates. We use project management tooling to keep progress transparent. At the end, you receive a complete evidence or delivery pack.",
  },
  {
    question: "Will I own the deliverables and intellectual property?",
    answer:
      "Yes. Upon project completion and final payment, you own 100% of the code, reports, evidence packs, and any other deliverables we produce for you. Full source code access and documentation are included.",
  },
  {
    question: "Can you work with our existing systems and tech stack?",
    answer:
      "Yes. We specialise in integrating with existing environments — whether that's connecting to legacy systems, third-party APIs, existing databases, or your current cloud setup. The engagement scoping phase is designed to surface these dependencies upfront.",
  },
]

const pricingFaqs = [
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is fixed per engagement, not hourly. Cost depends on scope and complexity. Contact us or book a consultation for a specific proposal — we'll provide a detailed breakdown with no hidden fees.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. For larger engagements we typically structure payments against milestones — for example 30% on agreement, 40% at midpoint delivery, 30% on completion. We're happy to discuss payment terms that fit your finance cycle.",
  },
  {
    question: "Is there a minimum engagement size?",
    answer:
      "We don't publish a hard minimum, but our fixed-scope model works best for engagements with a clear outcome to deliver. For smaller one-off needs we offer consulting hour packages — just ask.",
  },
  {
    question: "Do you offer ongoing retainer or support arrangements?",
    answer:
      "Yes. After an initial engagement, clients can move to a retainer covering continuous monitoring, periodic re-assessments, ongoing engineering support, or priority response times. We'll propose the right structure based on your ongoing needs.",
  },
]

const technicalFaqs = [
  {
    question: "What frameworks and standards do you work against?",
    answer:
      "We deliver against SOC 2, ISO 27001, NIST CSF, HIPAA, GDPR, and CIS Controls. For engineering, we work across the modern stack: React, Next.js, TypeScript, Node.js, Python, and all major cloud platforms (AWS, Azure, GCP). We select the right framework and tooling based on your context.",
  },
  {
    question: "Do you provide hosting and infrastructure services?",
    answer:
      "Yes. We can design, provision, and help manage cloud infrastructure. We recommend scalable cloud hosting solutions and can manage the full setup or provide guidance if you prefer to run it internally. Everything is documented for handover.",
  },
  {
    question: "How do you approach security in your projects?",
    answer:
      "Security is a first-class concern on every engagement — not a bolt-on. We follow OWASP guidelines, implement secure coding and configuration practices, and produce evidence-backed findings. For security-specific engagements, outputs include a risk register, remediation roadmap, and an audit-ready evidence pack.",
  },
  {
    question: "Will outputs from a security engagement satisfy an auditor?",
    answer:
      "That is the goal. Every security and compliance engagement is designed to produce evidence that satisfies the specific control requirements of your target framework. We have experience preparing clients for SOC 2 Type II, ISO 27001 certification, and NIST CSF self-attestation.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <FaqHero />

      {/* FAQ Sections */}
      <FAQSection
        title="General Questions"
        description="Learn about who we are and what we do"
        faqs={generalFaqs}
        className="bg-white"
      />

      <FAQSection
        title="Project & Process"
        description="Understanding how we work together"
        faqs={projectFaqs}
        className="bg-muted/30"
      />

      <FAQSection
        title="Pricing & Payment"
        description="Transparent information about costs and payment options"
        faqs={pricingFaqs}
        className="bg-white"
      />

      <FAQSection
        title="Technical Questions"
        description="Details about our technology and approach"
        faqs={technicalFaqs}
        className="bg-muted/30"
      />

      {/* CTA */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-emerald-500">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-medium font-heading tracking-tighter">
              Still have questions?
            </h2>
            <p className="max-w-[600px] text-white/90 md:text-lg">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
              Reach out and we&apos;ll get back to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="subtle">
                <Link href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/book">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
