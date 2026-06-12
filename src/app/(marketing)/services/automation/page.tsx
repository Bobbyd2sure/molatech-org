"use client"

import ServicePageTemplate, { type ServicePageConfig } from "@/components/services/service-page-template"
import {
  CheckCircle,
  Zap,
  Clock,
  Users,
  TrendingUp,
  Settings,
  Workflow,
  RefreshCw,
  Database,
  Mail,
  FileText,
  ShoppingCart,
  BarChart3,
  Globe,
  Cloud,
  Bot,
  Link2,
  Target,
  Shield,
  CircleDollarSign,
  BrainCircuit,
  Building2,
  Headphones,
  Receipt,
  UserCheck,
  Gauge,
  Network,
  Eye,
  Megaphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const config: ServicePageConfig = {
  themeClasses: {
    heroBg:
      "bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background",
    badgeBg:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    titleGradient:
      "from-blue-600 via-cyan-400 to-emerald-400",
    buttonGradient:
      "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600",
    iconColor: "text-blue-600",
    iconBg: "bg-gradient-to-br from-blue-600 to-cyan-500",
    cardBg: "from-background to-blue-50/30 dark:to-blue-950/10",
    cardBorder: "border-blue-200/50",
    statsBg: "bg-blue-50 dark:bg-blue-950/20",
    statsColor: "text-blue-600",
    outcomesBg: "bg-gradient-to-r from-blue-600 to-cyan-500",
    outcomeBadgeBg: "bg-blue-50 dark:bg-blue-950/20",
    outcomeBadgeText: "text-blue-800 dark:text-blue-300",
    filterActive: "bg-blue-600 hover:bg-blue-700",
    pricingPopularBadge: "bg-blue-600",
    pricingPopularBorder: "border-blue-500",
    pricingPriceColor: "text-blue-600",
    pricingPopularBtn: "bg-blue-600 hover:bg-blue-700",
    processStepBg: "bg-gradient-to-br from-blue-600 to-cyan-500",
    caseStudyResultsBg:
      "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/20",
    accentText: "text-blue-600",
    ctaBg: "bg-gradient-to-r from-blue-600 to-cyan-500",
    ctaBtn: "bg-white text-blue-600 hover:bg-white/90",
  },

  // ─── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    badge:            "Business Automation & Workflow Services",
    title:            "Automate Your Business, Amplify Your Growth",
    subtitle:
      "Eliminate repetitive tasks, connect your tools, and scale your operations with intelligent workflow automation. We design, build, and manage end-to-end automation solutions using n8n, Zapier, Make, Power Automate, and AI-powered workflows.",
    description:
      "From simple task automation to complex multi-department process orchestration -- we help businesses of all sizes work smarter, faster, and more profitably.",
    ctaText:          "Start Automating",
    ctaLink:          "/start",
    secondaryCtaText: "View Services",
    secondaryCtaLink: "#services",
  },

  // ─── Benefits ──────────────────────────────────────────────────────────────
  benefits: [
    { title: "Save Time",         metric: "20+ hours/week saved",   icon: Clock },
    { title: "Reduce Errors",     metric: "99% accuracy rate",      icon: CheckCircle },
    { title: "Scale Operations",  metric: "10x capacity increase",  icon: TrendingUp },
    { title: "Improve Experience",metric: "85% satisfaction boost", icon: Users },
  ],

  // ─── What Is Automation ────────────────────────────────────────────────────
  whatIs: {
    badge: "Understanding Automation",
    title: "What Is Business Automation?",
    description:
      "Business automation is the practice of using technology to execute recurring tasks or processes where manual effort can be replaced. It goes far beyond simple shortcuts -- it transforms how your entire organisation operates, communicates, and grows.",
    items: [
      {
        icon:  RefreshCw,
        title: "Eliminating Repetitive Manual Work",
        description:
          "Every business has tasks that employees repeat daily -- copying data between systems, sending follow-up emails, updating spreadsheets, generating reports. Business automation identifies these repetitive tasks and replaces them with software that executes them automatically, accurately, and tirelessly. This frees your team to focus on strategy, creativity, and relationship-building -- the work that actually drives growth.",
      },
      {
        icon:  Link2,
        title: "Connecting Disconnected Systems",
        description:
          "Most businesses use 10-50 different software tools that don't natively talk to each other. Your CRM doesn't sync with your invoicing tool. Your e-commerce platform doesn't update your inventory system. Automation bridges these gaps by creating real-time data flows between your applications, ensuring a single source of truth across your entire operation.",
      },
      {
        icon:  BrainCircuit,
        title: "Intelligent Decision-Making at Scale",
        description:
          "Modern automation goes beyond simple if/then rules. With AI-powered workflows, your automations can classify incoming emails, extract data from documents, score leads based on behaviour, generate personalised responses, and route complex decisions to the right team member. This means faster, smarter decisions without adding headcount.",
      },
      {
        icon:  Network,
        title: "End-to-End Process Orchestration",
        description:
          "True business automation isn't about automating individual tasks in isolation. It's about orchestrating entire business processes from start to finish -- from the moment a lead fills out a form to when they become a paying customer, from when an order is placed to when it's delivered and reviewed. We design automations that handle the complete lifecycle.",
      },
    ],
    stats: {
      title: "Why Businesses Are Automating Now",
      items: [
        {
          value:       "73%",
          description: "of businesses using automation report significant time savings within 3 months",
        },
        {
          value:       "$2.9T",
          description: "estimated value of business process automation market by 2030",
        },
        {
          value:       "45%",
          description: "of work activities can be automated with currently available technology",
        },
      ],
    },
  },

  // ─── Tech Stack (Automation Platforms) ────────────────────────────────────
  techStack: {
    badge:       "Platforms We Work With",
    title:       "Automation Platforms & Tools",
    description: "We're experts in leading automation platforms, helping you choose and implement the right solution for your specific needs",
    categories:  ["all", "workflow", "enterprise", "marketing", "ecommerce", "crm"],
    items: [
      {
        name:        "n8n",
        description: "Open-source workflow automation with 400+ integrations. Self-hostable for full data control.",
        icon:        Workflow,
        category:    "workflow",
        features:    ["Self-hosted option", "Visual workflow builder", "Custom nodes", "API integrations"],
      },
      {
        name:        "Zapier",
        description: "Connect 6,000+ apps with no-code automation for teams of any size.",
        icon:        Zap,
        category:    "workflow",
        features:    ["6,000+ app integrations", "Multi-step zaps", "Filters & formatting", "Webhooks"],
      },
      {
        name:        "Make (Integromat)",
        description: "Advanced automation with powerful visual scenarios and data transformation.",
        icon:        Settings,
        category:    "workflow",
        features:    ["Visual scenario builder", "Data transformation", "Error handling", "Scheduling"],
      },
      {
        name:        "Power Automate",
        description: "Microsoft's enterprise automation platform with deep Office 365 integration.",
        icon:        RefreshCw,
        category:    "enterprise",
        features:    ["Microsoft 365 integration", "AI Builder", "Desktop flows", "Business process flows"],
      },
      {
        name:        "Airtable Automations",
        description: "Database-driven workflow automation with spreadsheet-like flexibility.",
        icon:        Database,
        category:    "workflow",
        features:    ["Trigger-based actions", "Script automation", "Email notifications", "Record updates"],
      },
      {
        name:        "HubSpot Workflows",
        description: "Marketing & sales automation tightly coupled with CRM data.",
        icon:        Target,
        category:    "crm",
        features:    ["Lead nurturing", "Email sequences", "Deal automation", "Contact management"],
      },
      {
        name:        "Klaviyo",
        description: "E-commerce email & SMS automation built for revenue growth.",
        icon:        Mail,
        category:    "marketing",
        features:    ["Abandoned cart flows", "Post-purchase automation", "Segmentation", "A/B testing"],
      },
      {
        name:        "Shopify Flow",
        description: "Native e-commerce automation for Shopify stores.",
        icon:        ShoppingCart,
        category:    "ecommerce",
        features:    ["Order management", "Inventory alerts", "Customer tagging", "Fraud prevention"],
      },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    badge:       "Our Services",
    title:       "Comprehensive Automation Services",
    description: "From simple task automation to complex enterprise-grade workflows, we deliver end-to-end automation solutions tailored to your business needs and growth objectives",
    items: [
      {
        icon:        Workflow,
        title:       "Workflow Automation",
        description:
          "We map your existing business processes, identify bottlenecks and manual touchpoints, then design and build automated workflows that handle everything from simple notifications to complex multi-step operations across dozens of applications.",
        tools:   ["n8n", "Zapier", "Make"],
        features: [
          "Business process mapping & analysis",
          "Multi-platform integration design",
          "Conditional logic & branching flows",
          "Error handling, retries & monitoring",
          "Custom webhook & API development",
          "Workflow versioning & rollback",
        ],
        outcome: "Reduce manual task time by 70-90% and eliminate human error from routine operations.",
      },
      {
        icon:        ShoppingCart,
        title:       "E-commerce Automation",
        description:
          "From the moment a customer lands on your store to post-purchase follow-up, we automate the entire e-commerce lifecycle. Order processing, inventory management, shipping notifications, review requests, loyalty programmes, and returns handling -- all running without manual intervention.",
        tools:   ["Shopify Flow", "Klaviyo", "Zapier"],
        features: [
          "Order processing & fulfilment automation",
          "Real-time inventory sync across channels",
          "Abandoned cart recovery sequences",
          "Customer segmentation & tagging",
          "Review request & UGC collection",
          "Returns & refund processing",
        ],
        outcome: "Recover 15-25% of abandoned carts and reduce order processing time by 80%.",
      },
      {
        icon:        Mail,
        title:       "Marketing Automation",
        description:
          "Scale your marketing without scaling your team. We build sophisticated automation that nurtures leads through personalised email sequences, triggers campaigns based on user behaviour, manages social media posting, and delivers detailed performance analytics -- all on autopilot.",
        tools:   ["HubSpot", "Klaviyo", "Mailchimp"],
        features: [
          "Multi-channel drip campaigns",
          "Behavioural trigger campaigns",
          "Lead scoring & qualification",
          "Social media scheduling & monitoring",
          "A/B testing automation",
          "Campaign performance dashboards",
        ],
        outcome: "Increase marketing-qualified leads by 300% while reducing campaign management time by 60%.",
      },
      {
        icon:        Users,
        title:       "CRM & Sales Automation",
        description:
          "Your sales team should spend time selling, not doing admin. We automate lead capture from every channel, enrich contact data automatically, route leads to the right rep, trigger follow-up sequences, update deal stages, and generate pipeline reports -- so your team closes more deals faster.",
        tools:   ["HubSpot", "Salesforce", "Pipedrive"],
        features: [
          "Omnichannel lead capture & routing",
          "Automatic contact enrichment",
          "Sales sequence automation",
          "Pipeline stage management",
          "Proposal & contract generation",
          "Revenue forecasting dashboards",
        ],
        outcome: "Shorten sales cycles by 30% and increase conversion rates by 25%.",
      },
      {
        icon:        BarChart3,
        title:       "Data & Reporting Automation",
        description:
          "Stop spending hours pulling data from different sources and building reports manually. We create automated pipelines that collect data from all your tools, transform and clean it, and deliver real-time dashboards and scheduled reports to the right people at the right time.",
        tools:   ["n8n", "Airtable", "Google Sheets"],
        features: [
          "Multi-source data aggregation",
          "Automated ETL pipelines",
          "Real-time dashboard creation",
          "Scheduled report generation & delivery",
          "Data quality monitoring & alerts",
          "Custom KPI tracking",
        ],
        outcome: "Save 15+ hours per week on reporting and make decisions based on real-time data.",
      },
      {
        icon:        Bot,
        title:       "AI-Powered Automation",
        description:
          "We integrate large language models and AI services into your workflows to handle tasks that previously required human judgement. Document classification, email triage, content generation, sentiment analysis, chatbot responses, and intelligent data extraction -- powered by AI, orchestrated by automation.",
        tools:   ["OpenAI", "Claude", "n8n", "Make"],
        features: [
          "LLM integration (GPT, Claude, etc.)",
          "Intelligent document processing",
          "AI-powered email triage & response",
          "Chatbot & conversational AI",
          "Sentiment analysis & classification",
          "Predictive analytics workflows",
        ],
        outcome: "Handle 80% of routine enquiries automatically and reduce document processing time by 90%.",
      },
      {
        icon:        Building2,
        title:       "HR & Operations Automation",
        description:
          "Streamline your internal operations from employee onboarding to timesheet management. We automate HR workflows, approval chains, internal communication, task assignment, and compliance tracking so your operations team can focus on people rather than paperwork.",
        tools:   ["Power Automate", "n8n", "Slack"],
        features: [
          "Employee onboarding workflows",
          "Leave & timesheet automation",
          "Approval chain management",
          "Internal notification systems",
          "Compliance & audit trail tracking",
          "Asset & equipment management",
        ],
        outcome: "Reduce onboarding time by 50% and eliminate manual approval bottlenecks.",
      },
      {
        icon:        Headphones,
        title:       "Customer Support Automation",
        description:
          "Deliver faster, more consistent customer support without growing your team. We build automated ticketing systems, AI-powered chatbots, escalation workflows, SLA monitoring, and customer feedback loops that ensure every enquiry gets the right response at the right time.",
        tools:   ["Zendesk", "Intercom", "n8n"],
        features: [
          "Automated ticket creation & routing",
          "AI chatbot first-response",
          "SLA monitoring & escalation",
          "Customer satisfaction surveys",
          "Knowledge base auto-suggestions",
          "Multi-channel support unification",
        ],
        outcome: "Cut first-response time by 75% and handle 3x more tickets without additional staff.",
      },
    ],
  },

  // ─── Outcomes ──────────────────────────────────────────────────────────────
  outcomesDescription:
    "Great automation isn't just about saving time -- it's about delivering measurable business outcomes that compound over time. Here is what our clients consistently achieve.",
  outcomes: [
    {
      icon:        Clock,
      metric:      "20-40 hrs/week saved",
      title:       "Dramatic Time Savings",
      description: "Our clients typically save 20-40 hours per week per department by automating routine tasks. That's equivalent to hiring 1-2 additional full-time employees -- without the overhead, recruitment costs, or management burden.",
    },
    {
      icon:        CheckCircle,
      metric:      "99.9% accuracy",
      title:       "Near-Zero Error Rates",
      description: "Automated processes execute with 99.9% consistency. No typos in customer names, no missed follow-ups, no data entry mistakes, no forgotten steps. Every process runs exactly as designed, every single time.",
    },
    {
      icon:        TrendingUp,
      metric:      "10x capacity",
      title:       "Massive Scale Without Hiring",
      description: "Automation scales linearly without additional cost. Whether you're processing 10 orders a day or 10,000, the automation handles it the same way. Grow your revenue 10x without proportionally growing your team.",
    },
    {
      icon:        Gauge,
      metric:      "90% faster response",
      title:       "Faster Customer Response",
      description: "Automated responses and routing ensure customers hear back in minutes, not hours. Faster response times directly correlate with higher conversion rates, better satisfaction scores, and increased loyalty.",
    },
    {
      icon:        CircleDollarSign,
      metric:      "3-5x ROI in 6 months",
      title:       "Significant Cost Reduction",
      description: "By eliminating manual processing, reducing errors that require rework, and enabling your team to focus on high-value activities, automation typically delivers 3-5x ROI within the first 6 months.",
    },
    {
      icon:        Eye,
      metric:      "360-degree visibility",
      title:       "Complete Visibility & Control",
      description: "Every automated process is logged, monitored, and measurable. You get real-time dashboards showing exactly what's happening in your business, where bottlenecks exist, and how performance trends over time.",
    },
  ],

  // ─── Case Studies ──────────────────────────────────────────────────────────
  caseStudies: {
    badge: "Case Studies",
    title: "Agentic Systems in Production",
    description:
      "We don't sell AI theory — these systems run every day with triggers, reasoning steps, evidence logs, and human gates where the stakes demand one",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "media", label: "Content Ops" },
      { key: "saas", label: "Revenue Ops" },
      { key: "healthcare", label: "Regulated / Healthcare" },
      { key: "growth", label: "Growth Ops" },
      { key: "ecommerce", label: "E-commerce" },
    ],
    items: [
      {
        icon: Sparkles,
        title: "Marymia — African Fashion E-commerce Brand",
        image: "/images/case-studies/marymia-fashion.png",
        client: "Live · Own brand",
        industry: "ecommerce",
        challenge:
          "Launching a fashion brand normally means recurring photoshoot costs for every collection — model fees, studio time, and weeks of lead time before a product can go live.",
        solution:
          "We built the Marymia storefront and a consistent AI brand-model pipeline: a custom-trained image model generates editorial-grade campaign and product imagery on demand, so new drops go from product shot to live listing without a photoshoot.",
        results: [
          "Live at shop.marymia.co.uk",
          "Custom AI brand model produces consistent editorial campaign imagery",
          "New collections photographed and listed without studio costs",
        ],
        tools: ["E-commerce storefront", "Flux LoRA", "AI imagery pipeline", "Brand design"],
      },
      {
        icon: Bot,
        title: "Content Operations Platform — Daily Automated Video",
        client: "Live · Own platform",
        industry: "media",
        challenge:
          "Run a daily content operation — scripting, voice synthesis, video rendering, packaging, distribution — without dedicating any headcount to it.",
        solution:
          "We built a governed agentic production line: Claude drafts the script against an editorial standard, ElevenLabs synthesizes narration, Remotion renders broadcast-ready video programmatically, and the pipeline packages metadata and publishes on schedule — orchestrated by n8n with mobile approval gates and automatic failure recovery.",
        results: [
          "In production with scheduled daily output",
          "The work of a small production team at API unit cost",
          "Audit trail on every run — inputs, decisions, actions, and cost",
        ],
        tools: ["Claude API", "ElevenLabs", "Remotion", "n8n"],
      },
      {
        icon: Zap,
        title: "Daily AI Prediction Engine — WonlyAI",
        image: "/images/case-studies/wonlyai.png",
        client: "Live · Own platform",
        industry: "saas",
        challenge:
          "Generate revenue-driving AI output every single day across six subscription tiers without runaway inference costs.",
        solution:
          "An n8n cron triggers Claude analysis, publishes to the database, and delivers to subscribers — with a hard per-run cost cap so the unit economics are fixed and predictable.",
        results: [
          "Revenue-generating output daily at a fixed inference cost ceiling",
          "Six subscription tiers served from one engine",
          "Runs unattended with failure recovery",
        ],
        tools: ["n8n", "Claude API", "Supabase", "Cost capping"],
      },
      {
        icon: ShieldCheck,
        title: "8-Agent AI Architecture for Healthcare Services",
        client: "Proposal stage · Worked example",
        industry: "healthcare",
        challenge:
          "A HIPAA-regulated home-care operator asked what AI could safely automate across intake, scheduling, compliance documentation, and family communication.",
        solution:
          "We designed an eight-agent architecture with strict PHI boundaries: every agent operates behind a human approval gate, every action is logged for compliance review, and no model ever trains on patient data. Scoped as a fixed-price starter package with measurable hour-savings targets per workflow.",
        results: [
          "Full written architecture and fixed-scope proposal",
          "100% of agent actions logged and human-gated",
          "Available as a worked example of scoping agentic AI in regulated environments",
        ],
        tools: ["Claude API", "n8n", "HIPAA-aligned design", "Audit logging"],
      },
      {
        icon: Megaphone,
        title: "Lead-Extraction Engine",
        client: "Internal engine · Deployable for clients",
        industry: "growth",
        challenge:
          "Outbound pipelines starve without a steady source of qualified leads — and bought lists are stale, non-compliant, and rented rather than owned.",
        solution:
          "We built a compliant lead-generation engine: source scraping of trade publications, enrichment, deduplication, scoring against the ideal customer profile, and a CAN-SPAM-compliant outreach queue. The client keeps the system, the data, and the playbook.",
        results: [
          "380+ qualified advertiser leads from a single automated sweep",
          "CAN-SPAM-compliant outreach queues for US campaigns",
          "An asset you own, not a list you rent — the same system runs our own outreach",
        ],
        tools: ["Python", "Apify", "Enrichment APIs", "CAN-SPAM workflow"],
      },
    ],
  },

  // ─── Industries ────────────────────────────────────────────────────────────
  industries: [
    {
      name:        "E-commerce & Retail",
      icon:        ShoppingCart,
      description: "Order processing, inventory management, customer engagement, abandoned cart recovery, review generation, and returns automation.",
      solutions:   ["Order-to-fulfilment pipelines", "Cross-channel inventory sync", "Customer lifecycle automation", "Dynamic pricing rules"],
    },
    {
      name:        "Professional Services",
      icon:        Building2,
      description: "Client onboarding, project management, time tracking, invoicing, proposal generation, and client communication workflows.",
      solutions:   ["Client intake & onboarding", "Automated invoicing & collection", "Project milestone tracking", "Contract renewal reminders"],
    },
    {
      name:        "Healthcare & Wellness",
      icon:        Shield,
      description: "Appointment scheduling, patient communication, intake forms, billing, compliance tracking, and telehealth coordination.",
      solutions:   ["Appointment booking & reminders", "Patient intake automation", "Insurance verification", "Follow-up care coordination"],
    },
    {
      name:        "SaaS & Technology",
      icon:        Cloud,
      description: "User onboarding, trial-to-paid conversion, churn prevention, feature adoption tracking, and product-led growth automation.",
      solutions:   ["Trial onboarding sequences", "Usage-based alerts & upsells", "Churn risk detection", "Feature announcement flows"],
    },
    {
      name:        "Real Estate",
      icon:        Globe,
      description: "Lead capture from listings, property matching, viewing scheduling, document management, and transaction coordination.",
      solutions:   ["Lead capture from portals", "Automated property matching", "Viewing scheduling & reminders", "Transaction document tracking"],
    },
    {
      name:        "Education & Training",
      icon:        FileText,
      description: "Student enrolment, course delivery, progress tracking, certificate generation, and communication automation.",
      solutions:   ["Enrolment & payment processing", "Course progress tracking", "Certificate auto-generation", "Student engagement campaigns"],
    },
  ],

  // ─── Process ───────────────────────────────────────────────────────────────
  processSteps: [
    {
      step:        "1",
      title:       "Discovery & Audit",
      duration:    "Week 1",
      description:
        "We conduct a comprehensive audit of your current business processes. We interview key team members, map existing workflows, identify manual bottlenecks, calculate time costs, and document every system and tool in use. The output is a detailed Automation Opportunity Report showing exactly where automation will have the highest impact.",
      deliverables: ["Process map documentation", "Time & cost analysis", "Automation opportunity scorecard", "Priority recommendations"],
    },
    {
      step:        "2",
      title:       "Strategy & Design",
      duration:    "Week 2",
      description:
        "Based on the audit, we design your automation architecture. This includes selecting the right platforms, designing workflow logic, planning integrations, defining error handling procedures, and creating a phased implementation roadmap. You'll see exactly what will be built before any work begins.",
      deliverables: ["Automation architecture blueprint", "Platform & tool selection", "Integration specifications", "Implementation timeline"],
    },
    {
      step:        "3",
      title:       "Build & Test",
      duration:    "Weeks 3-5",
      description:
        "Our automation engineers build your workflows using a test-driven approach. Each automation is developed, tested with real data, stress-tested for edge cases, and validated against your requirements. We build in comprehensive error handling, retry logic, and monitoring from day one.",
      deliverables: ["Fully built automation workflows", "Test documentation & results", "Error handling procedures", "Monitoring dashboard setup"],
    },
    {
      step:        "4",
      title:       "Launch, Train & Support",
      duration:    "Week 6+",
      description:
        "We deploy your automations in a controlled rollout, train your team to monitor and manage them, provide comprehensive documentation, and offer ongoing support. We monitor performance closely during the first 30 days and optimise based on real-world results.",
      deliverables: ["Production deployment", "Team training sessions", "Operations documentation", "30-day performance review"],
    },
  ],

  // ─── Pricing ───────────────────────────────────────────────────────────────
  pricing: [
    {
      name:        "Starter",
      price:       "$1,500",
      description: "Perfect for small businesses starting their automation journey. Ideal for automating 2-3 core processes.",
      popular:     false,
      cta:         "Get Started",
      features: [
        "Up to 5 automated workflows",
        "2 platform integrations",
        "Basic error handling & retries",
        "Email support (48hr response)",
        "1 month maintenance included",
        "Basic monitoring dashboard",
        "Documentation & handover",
      ],
    },
    {
      name:        "Professional",
      price:       "$4,500",
      description: "Comprehensive automation for growing businesses ready to transform their operations end-to-end.",
      popular:     true,
      cta:         "Get Started",
      features: [
        "Up to 15 automated workflows",
        "Unlimited platform integrations",
        "Advanced error handling & fallbacks",
        "Priority support (4hr response)",
        "3 months maintenance included",
        "Custom real-time dashboard",
        "Team training sessions (up to 10)",
        "AI-powered workflow components",
        "Monthly performance reviews",
      ],
    },
    {
      name:        "Enterprise",
      price:       "Custom",
      description: "Full-scale automation transformation for established businesses with complex requirements.",
      popular:     false,
      cta:         "Get Started",
      features: [
        "Unlimited workflows",
        "Custom API & integration development",
        "24/7 monitoring & alerting",
        "Dedicated automation engineer",
        "12 months maintenance & optimisation",
        "Self-hosted infrastructure options",
        "SLA guarantee (99.9% uptime)",
        "Comprehensive team training",
        "Quarterly strategy & optimisation reviews",
        "Priority feature development",
      ],
    },
  ],

  // ─── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "What exactly is business automation and how does it work?",
      answer:
        "Business automation uses software to execute tasks and processes that were previously done manually. At its core, automation works through triggers (events that start a workflow), actions (tasks that get performed), and conditions (logic that determines what happens next). For example, when a customer submits a form (trigger), the system can create a CRM contact, send a welcome email, notify the sales team via Slack, and add them to a nurture sequence (actions) -- all in under 30 seconds, with zero manual input.",
    },
    {
      question: "Which automation platform is best for my business?",
      answer:
        "The best platform depends on your needs, budget, and technical requirements. n8n is ideal for businesses that want full control with self-hosting and unlimited workflows at a fixed cost. Zapier excels for teams that need quick, simple integrations across 6,000+ apps. Make (Integromat) offers the most powerful visual builder for complex multi-step scenarios. Power Automate is best for Microsoft-heavy environments. During our discovery phase, we evaluate your tech stack, team capabilities, and growth plans to recommend the perfect fit.",
    },
    {
      question: "How long does it take to implement automation?",
      answer:
        "Timeline depends on complexity. Simple automations (e.g., form submission to CRM + email) can be live in 2-3 days. Medium-complexity projects (e.g., full e-commerce order pipeline) typically take 2-4 weeks. Enterprise-wide transformations involving multiple departments and custom integrations may take 6-12 weeks. We always provide a detailed timeline during our strategy phase, and we use a phased approach so you start seeing value from week one.",
    },
    {
      question: "Can you integrate with our existing tools and custom software?",
      answer:
        "Yes. We specialise in connecting disparate systems. If your tool has an API (most modern software does), we can integrate it. This includes CRMs (HubSpot, Salesforce), e-commerce (Shopify, WooCommerce), accounting (Xero, QuickBooks), communication (Slack, Teams), databases, and custom applications. For tools without APIs, we can often use webhooks, email parsing, or browser automation as alternatives.",
    },
    {
      question: "What happens if an automation fails?",
      answer:
        "We build resilience into every workflow. This includes automatic retry logic (if a service is temporarily unavailable), error notifications (you're alerted immediately via Slack/email), fallback procedures (alternative paths when primary actions fail), data queuing (so nothing is lost during outages), and comprehensive logging (so we can diagnose and fix issues quickly). We also provide monitoring dashboards that give you real-time visibility into automation health.",
    },
    {
      question: "How do you ensure our data is secure?",
      answer:
        "Data security is built into our automation design. We use encrypted connections for all integrations, implement least-privilege access (automations only access the data they need), support self-hosted platforms like n8n for maximum data control, maintain audit logs for compliance, and follow data protection best practices including GDPR considerations. We never store your credentials -- all authentication uses secure OAuth or encrypted API keys.",
    },
    {
      question: "What ROI can we expect from automation?",
      answer:
        "ROI varies by project, but our clients typically see 3-5x return within 6 months. The main sources of value are: time savings (20-40 hours/week per department), error reduction (eliminating costly mistakes), faster operations (reducing lead times and response times), and scale enablement (handling more volume without proportional cost increases). During discovery, we calculate projected ROI specific to your situation so you can make an informed investment decision.",
    },
    {
      question: "Do you provide training and ongoing support?",
      answer:
        "Yes, all packages include training sessions tailored to your team's technical level. We provide hands-on training for monitoring and basic modification of workflows, comprehensive documentation with visual guides, video walkthroughs for complex processes, and ongoing support during the maintenance period. Our goal is to make your team self-sufficient for day-to-day management while being available for complex changes and optimisations.",
    },
    {
      question: "Can automation work with AI and large language models?",
      answer:
        "Absolutely. AI-powered automation is one of our specialities. We integrate LLMs (like GPT and Claude) into workflows for tasks like email triage and auto-response, document classification and data extraction, content generation and personalisation, sentiment analysis and customer intent detection, and intelligent routing based on natural language understanding. AI makes your automations smarter -- they don't just follow rules, they understand context.",
    },
    {
      question: "What if our processes change after automation is built?",
      answer:
        "Business processes evolve, and your automations should too. We design workflows to be modular and adaptable -- making changes straightforward rather than requiring a rebuild. Our maintenance packages include workflow updates as your processes change. We also conduct regular reviews (monthly for Professional, quarterly for Enterprise) to identify optimisation opportunities and align automations with your current operations.",
    },
  ],

  // ─── Contact / CTA ─────────────────────────────────────────────────────────
  contact: {
    ctaTitle:       "Ready to Automate Your Business?",
    ctaDescription: "Tell us about your processes and we'll come back with a clear automation plan, realistic timeline, and transparent pricing. No sales pressure -- just honest advice from experienced automation engineers.",
    ctaDisclaimer:  "Free discovery call included. We'll audit your processes and give you a written proposal at no charge.",
  },
}

/** Automation service page -- renders via the shared ServicePageTemplate. */
export default function AutomationPage() {
  return <ServicePageTemplate config={config} />
}
