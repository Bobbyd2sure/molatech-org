"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Zap,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  Settings,
  Workflow,
  RefreshCw,
  Database,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  ShoppingCart,
  BarChart3,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Layers,
  Link2,
  Play,
  Target,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { useState } from "react"
import ContactSection from "@/components/contact-section"
import FAQSection from "@/components/faq-section"

export default function AutomationPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const automationPlatforms = [
    {
      name: "n8n",
      description: "Open-source workflow automation with 400+ integrations",
      icon: Workflow,
      category: "workflow",
      features: ["Self-hosted option", "Visual workflow builder", "Custom nodes", "API integrations"],
    },
    {
      name: "Zapier",
      description: "Connect 6,000+ apps with no-code automation",
      icon: Zap,
      category: "workflow",
      features: ["6,000+ app integrations", "Multi-step zaps", "Filters & formatting", "Webhooks"],
    },
    {
      name: "Make (Integromat)",
      description: "Advanced automation with powerful visual scenarios",
      icon: Settings,
      category: "workflow",
      features: ["Visual scenario builder", "Data transformation", "Error handling", "Scheduling"],
    },
    {
      name: "Power Automate",
      description: "Microsoft's enterprise automation platform",
      icon: RefreshCw,
      category: "enterprise",
      features: ["Microsoft 365 integration", "AI Builder", "Desktop flows", "Business process flows"],
    },
    {
      name: "Airtable Automations",
      description: "Database-driven workflow automation",
      icon: Database,
      category: "database",
      features: ["Trigger-based actions", "Script automation", "Email notifications", "Record updates"],
    },
    {
      name: "HubSpot Workflows",
      description: "Marketing & sales automation",
      icon: Target,
      category: "crm",
      features: ["Lead nurturing", "Email sequences", "Deal automation", "Contact management"],
    },
    {
      name: "Klaviyo",
      description: "E-commerce email & SMS automation",
      icon: Mail,
      category: "marketing",
      features: ["Abandoned cart flows", "Post-purchase automation", "Segmentation", "A/B testing"],
    },
    {
      name: "Shopify Flow",
      description: "E-commerce automation for Shopify stores",
      icon: ShoppingCart,
      category: "ecommerce",
      features: ["Order management", "Inventory alerts", "Customer tagging", "Fraud prevention"],
    },
  ]

  const automationServices = [
    {
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and business processes with intelligent automation",
      icon: Workflow,
      features: [
        "Business process mapping",
        "Multi-platform integration",
        "Error handling & monitoring",
        "Custom workflow development",
      ],
      tools: ["n8n", "Zapier", "Make"],
    },
    {
      title: "E-commerce Automation",
      description: "Automate your online store operations from orders to customer engagement",
      icon: ShoppingCart,
      features: [
        "Order processing automation",
        "Inventory management",
        "Customer communication flows",
        "Abandoned cart recovery",
      ],
      tools: ["Shopify Flow", "Klaviyo", "Zapier"],
    },
    {
      title: "Marketing Automation",
      description: "Scale your marketing efforts with automated campaigns and lead nurturing",
      icon: Mail,
      features: [
        "Email campaign automation",
        "Lead scoring & routing",
        "Social media scheduling",
        "Analytics & reporting",
      ],
      tools: ["HubSpot", "Klaviyo", "Mailchimp"],
    },
    {
      title: "CRM & Sales Automation",
      description: "Automate your sales pipeline and customer relationship management",
      icon: Users,
      features: [
        "Lead capture & qualification",
        "Pipeline automation",
        "Follow-up sequences",
        "Deal management",
      ],
      tools: ["HubSpot", "Salesforce", "Pipedrive"],
    },
    {
      title: "Data & Reporting Automation",
      description: "Automate data collection, transformation, and reporting",
      icon: BarChart3,
      features: [
        "Automated data sync",
        "Report generation",
        "Dashboard updates",
        "Data transformation",
      ],
      tools: ["n8n", "Airtable", "Google Sheets"],
    },
    {
      title: "AI-Powered Automation",
      description: "Leverage AI to create intelligent, adaptive automation workflows",
      icon: Bot,
      features: [
        "ChatGPT integration",
        "Document processing",
        "Sentiment analysis",
        "Predictive automation",
      ],
      tools: ["OpenAI", "n8n", "Make"],
    },
  ]

  const useCases = [
    {
      title: "Lead Generation & Nurturing",
      description: "Automatically capture leads from forms, qualify them, and nurture with personalized sequences",
      icon: Target,
      result: "300% increase in qualified leads",
    },
    {
      title: "Order Fulfillment",
      description: "Automate order processing, inventory updates, and shipping notifications",
      icon: ShoppingCart,
      result: "80% reduction in manual processing",
    },
    {
      title: "Customer Onboarding",
      description: "Create automated welcome sequences, account setup, and training delivery",
      icon: Users,
      result: "50% faster customer activation",
    },
    {
      title: "Invoice & Payment Processing",
      description: "Automate invoice generation, payment reminders, and reconciliation",
      icon: FileText,
      result: "60% faster payment collection",
    },
    {
      title: "Social Media Management",
      description: "Schedule posts, monitor mentions, and automate engagement across platforms",
      icon: MessageSquare,
      result: "40% increase in engagement",
    },
    {
      title: "Appointment Scheduling",
      description: "Automate booking, reminders, and follow-ups for appointments",
      icon: Calendar,
      result: "70% reduction in no-shows",
    },
  ]

  const benefits = [
    {
      title: "Save Time",
      description: "Eliminate hours of repetitive manual tasks every week",
      metric: "20+ hours/week saved",
      icon: Clock,
    },
    {
      title: "Reduce Errors",
      description: "Automated processes are consistent and error-free",
      metric: "99% accuracy rate",
      icon: CheckCircle,
    },
    {
      title: "Scale Operations",
      description: "Handle 10x the workload without adding staff",
      metric: "10x capacity increase",
      icon: TrendingUp,
    },
    {
      title: "Improve Experience",
      description: "Faster response times and consistent communication",
      metric: "85% satisfaction boost",
      icon: Users,
    },
  ]

  const testimonials = [
    {
      quote: "The automation workflows MolaTech built saved us 30 hours per week and eliminated data entry errors completely.",
      name: "Adeola Mwandala",
      title: "CEO, Marte Beauty Inc.",
    },
    {
      quote: "Our e-commerce automation now handles everything from orders to customer follow-ups automatically. Game changer!",
      name: "Thomas Ndhlebe",
      title: "Tenderglove Healthcare",
    },
    {
      quote: "The n8n workflows they created integrate all our tools perfectly. Our team can now focus on growth instead of admin.",
      name: "Mary Smith",
      title: "CEO, Marymia Limited",
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses starting with automation",
      price: "$1,500",
      features: [
        "Up to 5 automated workflows",
        "2 platform integrations",
        "Basic error handling",
        "Email support",
        "1 month maintenance",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Comprehensive automation for growing businesses",
      price: "$4,500",
      features: [
        "Up to 15 automated workflows",
        "Unlimited integrations",
        "Advanced error handling",
        "Priority support",
        "3 months maintenance",
        "Custom dashboard",
        "Training included",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Full-scale automation transformation",
      price: "Custom",
      features: [
        "Unlimited workflows",
        "Custom integrations",
        "24/7 monitoring",
        "Dedicated support",
        "12 months maintenance",
        "On-premise options",
        "SLA guarantee",
        "Team training",
      ],
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "What is workflow automation?",
      answer: "Workflow automation uses software to complete tasks and processes automatically, eliminating manual work. This includes everything from sending emails when a form is submitted, to complex multi-step processes involving multiple applications and decision points.",
    },
    {
      question: "Which automation platform is best for my business?",
      answer: "The best platform depends on your needs. n8n is great for self-hosted, customizable workflows. Zapier excels at simple integrations with 6,000+ apps. Make (Integromat) offers powerful visual automation. We'll recommend the right solution based on your requirements, budget, and technical capabilities.",
    },
    {
      question: "How long does it take to implement automation?",
      answer: "Simple automations can be set up in a few days, while complex enterprise workflows may take 4-8 weeks. We'll provide a timeline based on your specific requirements during our initial consultation.",
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "Yes! We specialize in connecting disparate systems. Whether it's your CRM, e-commerce platform, accounting software, or custom applications, we can create seamless integrations using APIs, webhooks, or dedicated connectors.",
    },
    {
      question: "What happens if an automation fails?",
      answer: "We build robust error handling into all workflows, including automatic retries, error notifications, and fallback procedures. We also provide monitoring dashboards so you can track automation performance in real-time.",
    },
    {
      question: "Do you provide training on managing automations?",
      answer: "Yes, all our packages include training sessions to help your team understand, monitor, and make basic modifications to your automations. We also provide documentation and ongoing support.",
    },
  ]

  const filteredPlatforms = activeCategory === "all"
    ? automationPlatforms
    : automationPlatforms.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-background">
        <BackgroundBeams className="opacity-30" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
              Automation & Workflow Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Automate Your Business, Amplify Your Growth
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Eliminate repetitive tasks, connect your tools, and scale your operations with intelligent workflow automation using n8n, Zapier, Make, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600">
                <Link href="/start">
                  Start Automating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </motion.div>

          {/* Benefits Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background/80 backdrop-blur-sm border rounded-xl p-4 text-center">
                <benefit.icon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">{benefit.metric}</div>
                <div className="text-sm text-muted-foreground">{benefit.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Automation Platforms */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Platforms We Work With</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Platforms & Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're experts in leading automation platforms, helping you choose and implement the right solution
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "workflow", "enterprise", "marketing", "ecommerce", "crm"].map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-orange-200/50">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                    <ul className="space-y-1">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-orange-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Services We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From simple task automation to complex enterprise workflows, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-background to-orange-50/50 dark:to-orange-950/10">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-orange-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-red-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Automation Use Cases</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              See how businesses like yours are saving time and growing faster with automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <useCase.icon className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                <p className="text-white/80 text-sm mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  <TrendingUp className="h-4 w-4" />
                  {useCase.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Client Success</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-8"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Investment</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the right automation package for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative ${tier.popular ? "border-orange-500 border-2 shadow-xl" : ""}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-orange-600">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                    <div className="text-3xl font-bold mb-6 text-orange-600">{tier.price}</div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-orange-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${tier.popular ? "bg-orange-600 hover:bg-orange-700" : ""}`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      <Link href="/start">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Implement Automation</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Discovery", description: "We analyze your current processes and identify automation opportunities" },
              { step: "2", title: "Design", description: "We design efficient workflows and select the right tools for your needs" },
              { step: "3", title: "Build", description: "We implement and test your automations with robust error handling" },
              { step: "4", title: "Launch & Support", description: "We deploy, train your team, and provide ongoing support" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Contact */}
      <ContactSection />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-red-500">
        <div className="container px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how automation can save you time, reduce errors, and help your business scale.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-white/90">
            <Link href="/start">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
