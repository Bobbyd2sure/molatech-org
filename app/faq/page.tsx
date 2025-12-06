import type { Metadata } from "next"
import FAQSection from "@/components/faq-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description:
    "Find answers to common questions about MolaTech's services, pricing, process, and support. Get the information you need to start your project.",
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
      "We offer a comprehensive range of technology services including web development, mobile app development, website design, digital marketing, cloud solutions, cybersecurity consulting, IT training, and workflow automation. Each service is tailored to meet your specific business needs.",
  },
  {
    question: "Where is MolaTech located?",
    answer:
      "MolaTech is headquartered in Austin, Texas, USA. However, we work with clients globally and offer remote collaboration for all our services. Our team can accommodate different time zones and communication preferences.",
  },
  {
    question: "How do I get started with MolaTech?",
    answer:
      "Getting started is easy! Simply visit our 'Start Now' page or contact us through our contact form. We'll schedule a free consultation to discuss your project requirements, goals, and timeline. From there, we'll provide a detailed proposal and project plan.",
  },
  {
    question: "Do you work with small businesses or only enterprises?",
    answer:
      "We work with businesses of all sizes - from startups and small businesses to mid-sized companies and large enterprises. Our solutions are scalable and can be customized to fit your budget and requirements.",
  },
]

const projectFaqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with clear phases: Discovery & Planning, Design, Development, Testing, and Launch. Throughout the process, you'll have regular check-ins and updates. We use project management tools to keep everything transparent and on track.",
  },
  {
    question: "Will I own the code and intellectual property?",
    answer:
      "Yes, absolutely. Upon project completion and final payment, you own 100% of the code, designs, and intellectual property we create for you. We provide full source code access and documentation.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Yes, we specialize in integrating with existing systems and can work with your current tech stack. Whether you need to connect to legacy systems, third-party APIs, or existing databases, we have the expertise to ensure seamless integration.",
  },
]

const pricingFaqs = [
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing varies based on project scope, complexity, and timeline. We offer competitive rates and can work with different budget levels. Contact us for a free quote - we'll provide a detailed breakdown with no hidden fees.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment options. For larger projects, we typically structure payments in milestones (e.g., 30% upfront, 40% at midpoint, 30% upon completion). We can discuss payment terms that work best for your business.",
  },
  {
    question: "Is there a minimum project size?",
    answer:
      "While we don't have a strict minimum, we recommend a minimum budget of $2,500 for custom development projects to ensure quality deliverables. For smaller needs, we can discuss maintenance packages or consulting hours.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, we offer various maintenance and support packages. These include regular updates, security patches, performance monitoring, and priority support. We'll help you choose a plan that fits your needs and budget.",
  },
]

const technicalFaqs = [
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern technologies including React, Next.js, TypeScript, Node.js, Python, and various cloud platforms (AWS, Azure, Google Cloud). For mobile apps, we use React Native and Flutter. We select the best technology stack based on your project requirements.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes, we can help you set up and manage hosting, domain registration, and SSL certificates. We recommend cloud hosting solutions for scalability and reliability, and can manage everything for you or provide guidance if you prefer to handle it yourself.",
  },
  {
    question: "How do you ensure security in your projects?",
    answer:
      "Security is built into every project from the start. We follow OWASP guidelines, implement secure coding practices, conduct security audits, and use encrypted communications. For sensitive applications, we can perform penetration testing and provide detailed security documentation.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "All our websites are built with a mobile-first approach and are fully responsive across all devices. We test on multiple screen sizes and browsers to ensure a consistent, optimal experience for all users.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Got questions? We've got answers. Find everything you need to know about
                working with MolaTech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <FAQSection
        title="General Questions"
        description="Learn about who we are and what we do"
        faqs={generalFaqs}
        className="bg-background"
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
        className="bg-background"
      />

      <FAQSection
        title="Technical Questions"
        description="Details about our technology and approach"
        faqs={technicalFaqs}
        className="bg-muted/30"
      />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Still have questions?
            </h2>
            <p className="max-w-[600px] text-white/90 md:text-lg">
              Can't find what you're looking for? Our team is here to help.
              Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
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
                <Link href="/start">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
