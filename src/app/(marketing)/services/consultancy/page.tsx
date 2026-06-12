"use client"

import {
  TrendingUp,
  Target,
  BarChart3,
  Shield,
  Layers,
  Network,
  CircleDollarSign,
  Eye,
  Gauge,
  BrainCircuit,
  Search,
  Map,
  Database,
  Settings,
  Cpu,
  Briefcase,
  Factory,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react"
import ServicePageTemplate, { type ServicePageConfig } from "@/components/services/service-page-template"

// ─── Colour Theme ─────────────────────────────────────────────────────────────
// All Tailwind class strings are written as full literals here so that the
// Tailwind JIT compiler detects and includes them in the output bundle.
const themeClasses: ServicePageConfig["themeClasses"] = {
  heroBg:               "bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background",
  badgeBg:              "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  titleGradient:        "from-blue-600 via-cyan-400 to-emerald-400",
  buttonGradient:       "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600",
  iconColor:            "text-blue-600",
  iconBg:               "bg-gradient-to-br from-blue-600 to-cyan-500",
  cardBg:               "from-background to-blue-50/30 dark:to-blue-950/10",
  cardBorder:           "border-blue-200/50",
  statsBg:              "bg-blue-50 dark:bg-blue-950/20",
  statsColor:           "text-blue-600",
  outcomesBg:           "bg-gradient-to-r from-blue-600 to-cyan-500",
  outcomeBadgeBg:       "bg-blue-50 dark:bg-blue-950/20",
  outcomeBadgeText:     "text-blue-800 dark:text-blue-300",
  filterActive:         "bg-blue-600 hover:bg-blue-700",
  pricingPopularBadge:  "bg-blue-600",
  pricingPopularBorder: "border-blue-500",
  pricingPriceColor:    "text-blue-600",
  pricingPopularBtn:    "bg-blue-600 hover:bg-blue-700",
  processStepBg:        "bg-gradient-to-br from-blue-600 to-cyan-500",
  caseStudyResultsBg:   "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/20",
  accentText:           "text-blue-600",
  ctaBg:                "bg-gradient-to-r from-blue-600 to-cyan-500",
  ctaBtn:               "bg-white text-blue-600 hover:bg-white/90",
}

// ─── Page Config ──────────────────────────────────────────────────────────────

const config: ServicePageConfig = {
  themeClasses,

  // ─── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    badge:            "Technology Consultancy & Strategic Advisory",
    title:            "Expert Technology Strategy That Drives Real Business Growth",
    subtitle:
      "Independent technology consultancy that translates complex IT decisions into clear business outcomes. We design technology strategies, conduct audits, build roadmaps, and guide vendor selection -- helping your business invest in technology with confidence.",
    description:
      "From digital transformation strategy to software architecture consulting -- we bring senior expertise, structured methodology, and vendor-neutral advice to every engagement.",
    ctaText:          "Book a Consultation",
    ctaLink:          "/start?service=consultancy",
    secondaryCtaText: "Explore Services",
    secondaryCtaLink: "#services",
  },

  // ─── Benefits ──────────────────────────────────────────────────────────────
  benefits: [
    { title: "Faster Decisions",   metric: "3x faster decisions", icon: Gauge },
    { title: "Cost Avoidance",     metric: "40% cost reduction",  icon: CircleDollarSign },
    { title: "Strategic Clarity",  metric: "12-month roadmaps",   icon: Map },
    { title: "Risk Reduction",     metric: "80% fewer surprises", icon: Shield },
  ],

  // ─── What Is IT Consultancy ────────────────────────────────────────────────
  whatIs: {
    badge: "Understanding Consultancy",
    title: "What Is IT & Technology Consultancy?",
    description:
      "Technology consultancy is the practice of providing independent expert advice that helps businesses make better technology decisions, reduce risk, and align IT investments with commercial objectives. It goes far beyond technical recommendations -- it is strategic partnership at the intersection of business and technology.",
    items: [
      {
        icon:  BrainCircuit,
        title: "Strategic Technology Leadership",
        description:
          "IT consultancy gives your business access to senior-level technology expertise without the full-time overhead of a CTO or IT Director. Our consultants become embedded partners who understand your commercial objectives, challenge your assumptions, and design technology strategies that drive measurable business outcomes. We translate complex technical decisions into clear business language so leadership teams can make informed, confident choices.",
      },
      {
        icon:  Eye,
        title: "Independent, Vendor-Neutral Advice",
        description:
          "Unlike vendors who push their own products, MolaTech consultants are entirely independent. We evaluate your situation objectively, recommend solutions based solely on fit, and help you avoid expensive vendor lock-in. Whether you need cloud migration, a new CRM, or an enterprise architecture review, our advice is driven by your best interests -- not a commission.",
      },
      {
        icon:  Network,
        title: "Bridging Business and Technology",
        description:
          "One of the most common challenges businesses face is misalignment between IT teams and commercial leadership. Our consultants are fluent in both worlds -- they understand P&L, growth targets, and competitive dynamics as well as system architecture, cloud infrastructure, and software development. We close the gap, ensuring technology investments directly support business strategy.",
      },
      {
        icon:  Layers,
        title: "Structured, Proven Methodologies",
        description:
          "We apply internationally recognised frameworks -- TOGAF for enterprise architecture, ITIL for service management, Agile for delivery, Design Thinking for innovation, and OKRs for goal alignment -- tailored to your context. This ensures rigour, repeatability, and results rather than ad hoc guesswork. Every engagement is structured, documented, and measured.",
      },
    ],
    stats: {
      title: "Why Businesses Invest in Technology Consultancy",
      items: [
        {
          value:       "70%",
          description: "of digital transformation programmes fail without independent strategic oversight and governance",
        },
        {
          value:       "£4.8T",
          description: "wasted on failed or underperforming IT projects globally each year due to poor strategy and planning",
        },
        {
          value:       "2.5x",
          description: "more likely to deliver technology projects on time and on budget with a clear roadmap and governance",
        },
      ],
    },
  },

  // ─── Expertise Areas (mapped to techStack slot) ────────────────────────────
  techStack: {
    badge:       "Areas of Expertise",
    title:       "Consultancy Expertise Areas",
    description: "We bring deep expertise across all major technology strategy domains. Filter by area to explore how we can help with your specific challenge.",
    categories:  ["all", "strategy", "audit", "infrastructure", "architecture", "data", "operations", "vendor"],
    items: [
      {
        name:        "Digital Transformation",
        description: "End-to-end strategy for digitalising legacy businesses and processes.",
        icon:        Cpu,
        category:    "strategy",
        features: [
          "Digital maturity assessment",
          "Transformation roadmap development",
          "Legacy system modernisation strategy",
          "Change management planning",
        ],
      },
      {
        name:        "Technology Audit & Assessment",
        description: "Comprehensive review of your existing technology stack and operations.",
        icon:        Search,
        category:    "audit",
        features: [
          "Current-state architecture review",
          "Security & compliance gap analysis",
          "Performance benchmarking",
          "Technical debt quantification",
        ],
      },
      {
        name:        "IT Infrastructure Planning",
        description: "Design resilient, scalable infrastructure matched to your growth trajectory.",
        icon:        Network,
        category:    "infrastructure",
        features: [
          "Cloud strategy (AWS, Azure, GCP)",
          "On-premise vs. hybrid evaluation",
          "Disaster recovery planning",
          "Capacity and scaling models",
        ],
      },
      {
        name:        "Software Architecture",
        description: "Expert guidance on application design, integrations, and platform selection.",
        icon:        Layers,
        category:    "architecture",
        features: [
          "Microservices vs. monolith analysis",
          "API strategy and design",
          "Integration architecture",
          "Platform & vendor evaluation",
        ],
      },
      {
        name:        "Data Strategy & Analytics",
        description: "Build a data foundation that turns raw information into competitive advantage.",
        icon:        Database,
        category:    "data",
        features: [
          "Data governance framework",
          "Analytics platform selection",
          "Data warehouse design",
          "BI and reporting strategy",
        ],
      },
      {
        name:        "Process Optimisation",
        description: "Identify inefficiencies, redesign workflows, and eliminate operational waste.",
        icon:        Settings,
        category:    "operations",
        features: [
          "Business process mapping",
          "Lean and Six Sigma analysis",
          "Automation opportunity identification",
          "Operational KPI framework",
        ],
      },
      {
        name:        "Vendor Selection & Management",
        description: "Navigate the vendor landscape with confidence and negotiate from a position of strength.",
        icon:        Briefcase,
        category:    "vendor",
        features: [
          "RFP/RFI development",
          "Vendor evaluation scorecards",
          "Contract review and negotiation support",
          "Supplier relationship management",
        ],
      },
      {
        name:        "Technology Roadmap Development",
        description: "A clear, prioritised 12-36 month technology roadmap tied to your business goals.",
        icon:        Map,
        category:    "strategy",
        features: [
          "Initiative prioritisation matrix",
          "Budget and resource planning",
          "Risk and dependency mapping",
          "Quarterly review cadence",
        ],
      },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    badge:       "Our Services",
    title:       "Comprehensive Consultancy Services",
    description:
      "From one-off technology audits to long-term transformation programmes, we deliver consultancy services that produce clear strategies, actionable roadmaps, and measurable business outcomes",
    items: [
      {
        icon:  Cpu,
        title: "Digital Transformation Strategy",
        description:
          "We help established businesses navigate the shift from analogue to digital -- not just by implementing technology, but by redesigning the operating model, culture, and processes that technology must support. We start with your commercial objectives and work backwards to a transformation strategy that is achievable, funded, and properly governed.",
        tools: ["TOGAF", "Design Thinking", "Agile", "OKRs"],
        features: [
          "Digital maturity benchmarking against peers",
          "Future-state operating model design",
          "Legacy system modernisation pathway",
          "Change management and adoption strategy",
          "Digital culture and capability building",
          "Governance structure and steering committee setup",
        ],
        outcome:
          "Clients reduce digital transformation timelines by 35% and avoid common failure patterns that derail 70% of transformation programmes.",
      },
      {
        icon:  Search,
        title: "Technology Audit & Health Check",
        description:
          "Before investing in new technology, you need to understand what you already have. Our technology audit provides an honest, comprehensive assessment of your current IT landscape -- identifying risks, inefficiencies, technical debt, and missed opportunities. We deliver findings in plain language with clear, prioritised recommendations.",
        tools: ["ITIL", "CIS Controls", "ISO 27001", "NIST"],
        features: [
          "Full inventory of systems, tools, and infrastructure",
          "Security posture and vulnerability assessment",
          "Performance and reliability benchmarking",
          "Technical debt analysis and remediation prioritisation",
          "Licensing and cost optimisation review",
          "Compliance gap analysis (GDPR, ISO 27001, etc.)",
        ],
        outcome:
          "Businesses typically uncover 20-30% in avoidable technology spend and eliminate critical security vulnerabilities within 60 days of an audit.",
      },
      {
        icon:  Network,
        title: "IT Infrastructure & Cloud Planning",
        description:
          "Whether you're scaling rapidly, migrating to the cloud, or planning a data centre exit, infrastructure decisions have long-lasting cost and capability implications. We help you design the right infrastructure architecture for your current needs and future growth -- balancing performance, cost, resilience, and security.",
        tools: ["AWS", "Azure", "GCP", "Terraform", "ITIL"],
        features: [
          "Cloud readiness assessment and migration strategy",
          "Multi-cloud and hybrid architecture design",
          "Disaster recovery and business continuity planning",
          "Infrastructure cost modelling and optimisation",
          "Network architecture and security design",
          "Vendor and managed service provider selection",
        ],
        outcome:
          "Our clients achieve an average 32% reduction in infrastructure costs while improving uptime and security posture significantly.",
      },
      {
        icon:  Layers,
        title: "Software Architecture Consulting",
        description:
          "Poor architectural decisions made early compound into expensive problems later. Our software architecture consultants review existing systems, advise on new builds, and guide technology selection so your applications are scalable, maintainable, and aligned with your long-term platform strategy.",
        tools: ["REST", "GraphQL", "Kubernetes", "Docker", "TOGAF"],
        features: [
          "Existing architecture review and risk assessment",
          "Microservices vs. monolith analysis",
          "API strategy, design standards, and governance",
          "Integration architecture and middleware selection",
          "Database design and technology selection",
          "Technology stack evaluation and recommendations",
        ],
        outcome:
          "Sound architecture decisions from the start reduce future rebuild costs by up to 60% and accelerate feature delivery by 40%.",
      },
      {
        icon:  Database,
        title: "Data Strategy & Analytics Consulting",
        description:
          "Most businesses collect vast amounts of data but struggle to turn it into actionable insight. We help you design a coherent data strategy -- from governance and quality to analytics platforms and AI readiness -- so your data becomes a genuine competitive asset rather than a compliance burden.",
        tools: ["dbt", "Snowflake", "Power BI", "Looker", "BigQuery"],
        features: [
          "Data governance framework and policy development",
          "Data quality assessment and improvement roadmap",
          "Analytics platform selection and implementation strategy",
          "Data warehouse and lakehouse architecture design",
          "BI reporting strategy and KPI framework",
          "AI and machine learning readiness assessment",
        ],
        outcome:
          "Clients move from intuition-based decisions to data-driven operations, typically improving decision speed by 50% and accuracy by 35%.",
      },
      {
        icon:  Settings,
        title: "Process Optimisation Consulting",
        description:
          "Inefficient processes cost businesses enormous amounts in wasted time, errors, and missed opportunities. We map your current workflows, identify bottlenecks and waste, apply Lean and Six Sigma principles, and design optimised processes that are then supported by the right technology -- not the other way around.",
        tools: ["BPMN", "Lean", "Six Sigma", "Agile", "Kaizen"],
        features: [
          "Business process mapping and documentation",
          "Lean waste identification and elimination",
          "Process redesign and standardisation",
          "Automation opportunity identification",
          "KPI and performance measurement framework",
          "Continuous improvement programme design",
        ],
        outcome:
          "Process optimisation engagements typically deliver 25-45% efficiency gains and reduce operational error rates by over 60%.",
      },
      {
        icon:  Briefcase,
        title: "Vendor Selection & Management",
        description:
          "Choosing the wrong technology vendor is one of the costliest mistakes a business can make. We manage the full vendor selection lifecycle -- from requirements definition to contract negotiation -- ensuring you select partners who will deliver, at a price that represents genuine value, with terms that protect your interests.",
        tools: ["Gartner MQ", "Forrester Wave", "RFP Templates", "SLA frameworks"],
        features: [
          "Requirements gathering and specification development",
          "RFP/RFI creation and vendor market mapping",
          "Evaluation scorecard design and scoring facilitation",
          "Vendor due diligence and reference checking",
          "Contract review and negotiation strategy",
          "Ongoing vendor performance management framework",
        ],
        outcome:
          "Our clients consistently negotiate 15-25% better pricing and avoid vendor lock-in that costs businesses millions in switching costs.",
      },
      {
        icon:  Map,
        title: "Technology Roadmap Development",
        description:
          "A technology roadmap turns your business strategy into a structured, funded plan for technology investment. We facilitate the process of understanding your business objectives, assessing current capabilities, identifying gaps, and sequencing initiatives in a pragmatic 12-36 month roadmap that leadership, IT, and the board can all align behind.",
        tools: ["OKRs", "MoSCoW", "TOGAF", "Agile Portfolio Management"],
        features: [
          "Business objectives and technology alignment workshop",
          "Current capability assessment and gap analysis",
          "Initiative identification and business case development",
          "Prioritisation framework and portfolio sequencing",
          "Budget and resource estimation",
          "Governance model and review cadence",
        ],
        outcome:
          "Organisations with a clear technology roadmap are 2.5x more likely to deliver technology initiatives on time and within budget.",
      },
    ],
  },

  // ─── Outcomes ──────────────────────────────────────────────────────────────
  outcomesDescription:
    "Good consultancy is measured by business results, not reports. Here are the tangible outcomes our clients consistently achieve through our technology strategy engagements.",
  outcomes: [
    {
      icon:        Target,
      metric:      "2.5x faster decisions",
      title:       "Strategic Clarity",
      description:
        "Leadership teams gain a clear, shared understanding of where technology should take the business over the next 12-36 months. Decisions become faster, more confident, and better aligned across departments.",
    },
    {
      icon:        CircleDollarSign,
      metric:      "20-40% cost reduction",
      title:       "Significant Cost Savings",
      description:
        "Technology audits and vendor negotiations consistently surface 20-40% in avoidable costs through licence consolidation, infrastructure right-sizing, contract renegotiation, and elimination of redundant tools.",
    },
    {
      icon:        Shield,
      metric:      "80% fewer incidents",
      title:       "Risk Elimination",
      description:
        "Proactive identification of security vulnerabilities, compliance gaps, architectural weaknesses, and vendor risks before they become expensive crises. Most clients resolve critical risks within 90 days of engagement.",
    },
    {
      icon:        Gauge,
      metric:      "35% faster delivery",
      title:       "Accelerated Delivery",
      description:
        "With a clear roadmap, optimised architecture, and proper governance in place, technology teams deliver projects faster and with fewer surprises. Scope creep drops dramatically when strategy is well-defined.",
    },
    {
      icon:        TrendingUp,
      metric:      "15-25% better pricing",
      title:       "Better Vendor Outcomes",
      description:
        "Independent vendor selection and negotiation support ensures you choose the right partners, pay the right price, and have contracts that protect your interests throughout the relationship.",
    },
    {
      icon:        BarChart3,
      metric:      "50% faster insights",
      title:       "Data-Driven Operations",
      description:
        "A coherent data strategy turns scattered information into a business intelligence asset. Decision-makers get real-time dashboards and insights that replace intuition with evidence.",
    },
  ],

  // ─── Case Studies ──────────────────────────────────────────────────────────
  caseStudies: {
    badge: "Case Studies",
    title: "Senior Advisory, Worked Examples",
    description:
      "How we scope, design, and lead technology work — including in regulated environments",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "ai", label: "AI Leadership" },
      { key: "healthcare", label: "Regulated / Healthcare" },
    ],
    items: [
      {
        icon: Users,
        title: "Fractional AI Leadership",
        client: "Flagship engagement model · Active client",
        industry: "ai",
        challenge:
          "Mid-market companies want an AI and automation layer but can't justify a full-time senior AI hire — and one-off automation projects decay without an owner.",
        solution:
          "A senior operator embedded part-time who designs, builds, and runs your AI and automation layer — agent architectures, integration pipelines, and governance — then leaves your team owning the systems.",
        results: [
          "Active anchor engagement running on this model",
          "Agentic workflows designed, shipped, and operated in production",
          "Systems and playbooks handed over — not dependencies",
        ],
        tools: ["Claude API", "n8n", "Supabase", "Workflow governance"],
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
    ],
  },

  // ─── Industries ────────────────────────────────────────────────────────────
  industries: [
    {
      name:        "Financial Services",
      icon:        Landmark,
      description:
        "Technology strategy, regulatory compliance, digital banking transformation, data governance, and legacy system modernisation for banks, insurers, and investment firms.",
      solutions: [
        "Regulatory technology strategy",
        "Core system modernisation",
        "Data governance and compliance",
        "Digital product roadmaps",
      ],
    },
    {
      name:        "Manufacturing & Engineering",
      icon:        Factory,
      description:
        "Industry 4.0 strategy, ERP selection and optimisation, supply chain technology, IoT and predictive maintenance planning, and operational technology consulting.",
      solutions: [
        "Industry 4.0 roadmap",
        "ERP selection and implementation oversight",
        "Supply chain technology strategy",
        "OT/IT convergence planning",
      ],
    },
    {
      name:        "Healthcare & Life Sciences",
      icon:        HeartPulse,
      description:
        "Clinical system strategy, patient data governance, GDPR and HL7 compliance, digital health platform selection, and interoperability architecture.",
      solutions: [
        "Clinical systems strategy",
        "Patient data governance",
        "Regulatory compliance (GDPR, HL7)",
        "Digital health roadmaps",
      ],
    },
    {
      name:        "Retail & E-commerce",
      icon:        ShoppingCart,
      description:
        "EPOS and inventory system selection, omnichannel technology strategy, customer data platform design, and retail technology vendor management.",
      solutions: [
        "Omnichannel technology strategy",
        "EPOS and ERP selection",
        "Customer data platform design",
        "Retail analytics strategy",
      ],
    },
    {
      name:        "Professional Services",
      icon:        Briefcase,
      description:
        "Practice management system selection, client portal strategy, knowledge management, pricing and billing technology, and remote working infrastructure.",
      solutions: [
        "Practice management selection",
        "Client portal strategy",
        "Knowledge management systems",
        "Billing and time-tracking optimisation",
      ],
    },
    {
      name:        "Education & Training",
      icon:        GraduationCap,
      description:
        "Student information system strategy, e-learning platform selection, campus technology planning, data governance, and EdTech vendor management.",
      solutions: [
        "Student information system selection",
        "E-learning strategy",
        "Campus technology planning",
        "EdTech vendor management",
      ],
    },
  ],

  // ─── Process ───────────────────────────────────────────────────────────────
  processSteps: [
    {
      step:        "1",
      title:       "Discovery & Assessment",
      duration:    "Weeks 1-2",
      description:
        "We begin every engagement with a structured discovery phase designed to build a complete picture of your business objectives, current technology landscape, key stakeholders, pain points, and constraints. We conduct interviews with leadership and operational staff, review existing documentation, and assess current systems. The output is a Discovery Report that validates the scope of the engagement and ensures we're solving the right problems.",
      deliverables: [
        "Stakeholder interview summaries",
        "Current-state technology map",
        "Problem statement and scope confirmation",
        "Engagement charter and success metrics",
      ],
    },
    {
      step:        "2",
      title:       "Analysis & Strategy Development",
      duration:    "Weeks 3-5",
      description:
        "With a thorough understanding of your context, we apply structured analytical frameworks to develop strategic options and recommendations. This phase involves benchmarking against industry best practice, evaluating technology options, modelling costs and benefits, assessing risks, and synthesising findings into clear strategic recommendations. Every recommendation is grounded in evidence and tied to a business outcome.",
      deliverables: [
        "Gap analysis and findings report",
        "Strategic options and trade-off analysis",
        "Risk register and mitigation strategies",
        "Draft strategy and recommendations",
      ],
    },
    {
      step:        "3",
      title:       "Roadmap & Planning",
      duration:    "Weeks 5-7",
      description:
        "We translate strategy into an actionable implementation plan. This includes sequencing initiatives based on priority and dependencies, defining resource and budget requirements, establishing governance structures, and developing a detailed 12-36 month technology roadmap. We facilitate workshops with key stakeholders to validate priorities and build organisational alignment before any execution begins.",
      deliverables: [
        "Technology roadmap (12-36 months)",
        "Business cases for priority initiatives",
        "Budget and resource plan",
        "Governance framework and decision rights",
      ],
    },
    {
      step:        "4",
      title:       "Execution Support & Review",
      duration:    "Ongoing",
      description:
        "Strategy without execution support delivers limited value. We offer ongoing advisory retainers and project oversight to ensure your roadmap is executed effectively. This includes programme governance, vendor management oversight, progress reviews, course corrections as circumstances change, and periodic roadmap refresh sessions. We remain your independent technology partner throughout the journey.",
      deliverables: [
        "Monthly progress and steering reports",
        "Vendor performance reviews",
        "Quarterly roadmap refresh",
        "Ongoing advisory and escalation support",
      ],
    },
  ],

  // ─── Pricing ───────────────────────────────────────────────────────────────
  pricing: [
    {
      name:        "Advisory",
      price:       "£2,500",
      description:
        "Focused consultancy for specific challenges. Ideal for technology audits, vendor selection, or a single strategic question.",
      popular: false,
      cta:     "Get Started",
      features: [
        "Scoped engagement (2-4 weeks)",
        "Discovery interviews (up to 5 stakeholders)",
        "Findings and recommendations report",
        "1 x strategy presentation to leadership",
        "Email support during engagement",
        "30-day follow-up call included",
        "Action plan with priorities",
      ],
    },
    {
      name:        "Strategic",
      price:       "£7,500",
      description:
        "Comprehensive strategy and roadmap development for businesses ready to make confident technology investments.",
      popular: true,
      cta:     "Get Started",
      features: [
        "Full discovery and assessment (4-6 weeks)",
        "Unlimited stakeholder interviews",
        "Current-state technology audit",
        "12-month technology roadmap",
        "Business cases for top 3 initiatives",
        "Executive workshop facilitation",
        "Vendor evaluation support",
        "3-month advisory retainer included",
        "Quarterly roadmap review",
      ],
    },
    {
      name:        "Transformation",
      price:       "Custom",
      description:
        "End-to-end consultancy partnership for organisations undergoing significant technology change.",
      popular: false,
      cta:     "Get Started",
      features: [
        "Multi-phase engagement (3-12+ months)",
        "Dedicated senior consultant",
        "Full digital transformation programme design",
        "Programme governance and oversight",
        "Vendor selection and negotiation management",
        "Change management strategy",
        "36-month technology roadmap",
        "Monthly steering committee reports",
        "Unlimited advisory access",
        "Annual strategy refresh",
      ],
    },
  ],

  // ─── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "What does an IT consultancy engagement actually involve?",
      answer:
        "An IT consultancy engagement is a structured process where our experts work alongside your leadership and technology teams to understand your business objectives, assess your current technology landscape, identify gaps and opportunities, and develop clear recommendations and plans. Depending on the scope, this could mean a focused 2-week technology audit, a comprehensive digital transformation strategy, or an ongoing advisory relationship. Every engagement begins with a discovery phase, proceeds through analysis, and delivers documented recommendations with a clear implementation roadmap.",
    },
    {
      question: "How is MolaTech different from a software vendor or implementer?",
      answer:
        "We are entirely independent and vendor-neutral. Software vendors and system integrators have a financial incentive to sell you their own products and implementations. MolaTech consultants have no such conflict of interest -- we evaluate every option on its merits and recommend what's genuinely right for your business. We can also manage vendor selection processes on your behalf, ensuring you're not relying on a supplier's own marketing materials to make million-pound decisions.",
    },
    {
      question: "Do we need a consultancy if we already have an internal IT team?",
      answer:
        "Yes, in many cases. Internal IT teams are typically focused on day-to-day operations and delivery -- they rarely have the bandwidth or cross-industry perspective to step back and conduct objective strategic reviews. Our consultants provide an external viewpoint, benchmarks from working across multiple industries, structured methodologies, and the seniority to challenge existing assumptions. We work alongside your internal team rather than replacing them, and we always leave your team better equipped to execute the strategy we develop together.",
    },
    {
      question: "What frameworks and methodologies do you use?",
      answer:
        "We apply the right framework for the right situation rather than imposing a one-size-fits-all approach. For enterprise architecture we use TOGAF. For IT service management and governance we apply ITIL. For agile delivery planning we use Agile and SAFe. For process analysis we apply Lean and Six Sigma. For innovation workshops we use Design Thinking. For goal alignment we use OKRs. Every framework we apply is explained clearly so your team understands the approach and can continue to use it independently.",
    },
    {
      question: "How long does a typical consultancy engagement take?",
      answer:
        "Duration depends entirely on scope. A focused technology audit typically takes 3-4 weeks. A full digital transformation strategy takes 6-10 weeks. A technology roadmap development engagement typically runs 6-8 weeks including stakeholder workshops. Ongoing advisory retainers run quarterly or annually. We provide a clear timeline at the outset of every engagement and are transparent about what can realistically be delivered within your timeframe and budget.",
    },
    {
      question: "Can you help with both strategy and implementation?",
      answer:
        "Yes. MolaTech is a full-service technology partner. Our consultancy practice develops strategy and roadmaps, while our development and engineering teams can execute specific elements of that roadmap -- whether that's building a custom application, implementing automation, migrating infrastructure, or developing a data platform. This means the people who designed your strategy are available to support its delivery, eliminating the typical disconnect between strategy consultants and implementers.",
    },
    {
      question: "How do you ensure your recommendations are practical and achievable?",
      answer:
        "Practicality is central to how we work. Every recommendation we make is tested against your actual budget constraints, team capabilities, existing technology commitments, and organisational change capacity. We don't produce aspirational blueprints that sit on a shelf -- we develop phased roadmaps that account for reality. We also build business cases for every major recommendation so you can secure internal approval with confidence.",
    },
    {
      question: "What is a technology roadmap and why do we need one?",
      answer:
        "A technology roadmap is a structured, visual plan that sequences your technology investments over a 12-36 month horizon. It maps each initiative to a business objective, assigns an indicative budget and timeline, identifies dependencies between projects, and establishes governance for ongoing prioritisation. Without a roadmap, technology investments tend to be reactive and fragmented -- driven by whoever makes the most noise rather than by strategic priority. Organisations with a clear technology roadmap are 2.5x more likely to deliver projects on time and within budget.",
    },
    {
      question: "How do you handle confidential business information?",
      answer:
        "All client information is treated with complete confidentiality. We sign Non-Disclosure Agreements at the outset of every engagement and maintain strict information security practices throughout. Engagement outputs are shared only with authorised stakeholders. We never reference a client by name without explicit written permission, which is why our case studies use general client descriptions. GDPR compliance is built into our operating procedures as standard.",
    },
    {
      question: "What does the onboarding process look like for a new consultancy client?",
      answer:
        "After an initial consultation call to understand your situation and objectives, we propose a clearly scoped Statement of Work that defines deliverables, timeline, and investment. Once agreed, we schedule a kick-off session with key stakeholders to align on goals, access requirements, and communication preferences. We then move into the discovery phase immediately. Most clients have their first substantive findings within two weeks of starting. We provide weekly progress updates throughout to ensure there are no surprises.",
    },
  ],

  // ─── Contact / CTA ─────────────────────────────────────────────────────────
  contact: {
    ctaTitle:       "Ready to Make Smarter Technology Decisions?",
    ctaDescription:
      "Let's talk about your technology challenges and objectives. We'll have a no-obligation conversation, understand your situation, and tell you honestly whether and how we can help.",
    ctaDisclaimer:
      "No sales pitch. No jargon. Just an honest conversation about your technology challenges and how we solve them.",
  },
}

// ─── Page Export ──────────────────────────────────────────────────────────────

/** Consultancy service page -- renders via the shared ServicePageTemplate. */
export default function ConsultancyPage() {
  return <ServicePageTemplate config={config} />
}
