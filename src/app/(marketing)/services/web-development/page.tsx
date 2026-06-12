"use client"

import {
  Code,
  Globe,
  Smartphone,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Database,
  Layers,
  ShoppingCart,
  BarChart3,
  Server,
  Layout,
  Cloud,
  MonitorSmartphone,
  Gauge,
  CircleDollarSign,
  Eye,
  Search,
  Lock,
  Building2,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Home,
  Sparkles,
} from "lucide-react"
import ServicePageTemplate, { type ServicePageConfig } from "@/components/services/service-page-template"

// ─── Page Config ──────────────────────────────────────────────────────────────

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
    badge:              "Custom Web Development Services",
    title:              "Web Applications That Drive Real Business Results",
    subtitle:
      "We design and build custom web applications, e-commerce platforms, SaaS products, and content systems that are fast, secure, scalable, and built to convert. From discovery to launch and beyond.",
    description:
      "No templates. No shortcuts. Every project is architected from scratch around your business goals, your users, and your growth ambitions -- then delivered on time with clean, maintainable code.",
    ctaText:            "Start Your Project",
    ctaLink:            "/start",
    secondaryCtaText:   "View Services",
    secondaryCtaLink:   "#services",
  },

  // ─── Benefits ──────────────────────────────────────────────────────────────
  benefits: [
    { title: "Faster Load Times",   metric: "3x faster",   icon: Zap },
    { title: "More Conversions",    metric: "+40% CVR",    icon: TrendingUp },
    { title: "Uptime Guarantee",    metric: "99.9%",       icon: Globe },
    { title: "Delivery Speed",      metric: "40% faster",  icon: Clock },
  ],

  // ─── What Is Web Development ───────────────────────────────────────────────
  whatIs: {
    badge: "Understanding the Craft",
    title: "What Is Custom Web Development?",
    description:
      "Custom web development is the practice of building web applications tailored precisely to your business needs -- rather than forcing your workflows into a template or off-the-shelf product. It means owning your software, your data, your user experience, and your competitive advantage.",
    items: [
      {
        icon:  Code,
        title: "Custom Applications Built Around Your Business Logic",
        description:
          "Off-the-shelf software forces your business to adapt to someone else's assumptions. Custom web applications are architected around your exact processes, data models, and user journeys. Whether you need a client portal, an internal operations tool, or a customer-facing product, we build software that fits your business -- not the other way around.",
      },
      {
        icon:  Gauge,
        title: "Performance That Directly Impacts Revenue",
        description:
          "A 1-second delay in page load time reduces conversions by 7%. Google's Core Web Vitals directly influence search rankings. Every millisecond matters. We build performance-first -- with server-side rendering, edge delivery, aggressive caching, image optimisation, and code splitting -- so your site is fast everywhere, on every device.",
      },
      {
        icon:  TrendingUp,
        title: "Scalable Architecture for Future Growth",
        description:
          "We design systems that grow with you. Whether you have 100 users today or 100,000 users next year, the architecture should handle it gracefully. We use cloud-native patterns -- horizontal scaling, stateless services, managed databases, CDN delivery -- so growth is never blocked by technical debt.",
      },
      {
        icon:  Shield,
        title: "Security and Compliance Built In From Day One",
        description:
          "Security is not an afterthought -- it's baked into every layer of what we build. From HTTPS and CSRF protection to database encryption, input sanitisation, OAuth authentication, and GDPR-compliant data handling, we follow OWASP best practices and conduct security reviews before every launch.",
      },
    ],
    stats: {
      title: "Why the Web Is Still the Most Powerful Business Channel",
      items: [
        {
          value:       "5.4B",
          description: "internet users globally -- your web application reaches all of them without a distribution platform",
        },
        {
          value:       "88%",
          description: "of online consumers are less likely to return after a bad website experience -- performance is non-negotiable",
        },
        {
          value:       "$6.3T",
          description: "in global e-commerce revenue expected by 2027 -- a custom web presence is a growth-critical asset",
        },
      ],
    },
  },

  // ─── Tech Stack ────────────────────────────────────────────────────────────
  techStack: {
    badge:       "Technologies We Use",
    title:       "Our Technology Stack",
    description: "We use proven, modern technologies selected for performance, developer experience, and long-term maintainability -- never chosen for novelty",
    categories:  ["all", "frontend", "backend", "database", "cloud"],
    items: [
      {
        name:        "React & Next.js",
        description: "The industry standard for building fast, SEO-friendly web applications with server-side rendering and static generation.",
        icon:        Layout,
        category:    "frontend",
        features:    ["Server-side rendering", "Static site generation", "App Router architecture", "React Server Components"],
      },
      {
        name:        "Vue.js & Nuxt",
        description: "Progressive framework ideal for highly interactive dashboards, admin panels, and single-page applications.",
        icon:        MonitorSmartphone,
        category:    "frontend",
        features:    ["Composition API", "Nuxt SSR/SSG", "Pinia state management", "Vue DevTools"],
      },
      {
        name:        "TypeScript",
        description: "Typed superset of JavaScript that eliminates an entire class of runtime errors and makes large codebases maintainable.",
        icon:        Code,
        category:    "frontend",
        features:    ["Strict type safety", "IDE intellisense", "Refactoring confidence", "Self-documenting code"],
      },
      {
        name:        "Node.js & Express",
        description: "High-performance JavaScript runtime for building scalable REST APIs, microservices, and real-time backends.",
        icon:        Server,
        category:    "backend",
        features:    ["Async event loop", "REST & GraphQL APIs", "WebSocket support", "Microservices ready"],
      },
      {
        name:        "Python & Django",
        description: "Batteries-included framework for data-heavy applications, ML integrations, and complex business logic.",
        icon:        Database,
        category:    "backend",
        features:    ["Django ORM", "DRF for APIs", "Celery task queues", "ML/AI integration"],
      },
      {
        name:        "PostgreSQL & Supabase",
        description: "Enterprise-grade relational database with real-time capabilities, row-level security, and instant APIs.",
        icon:        Database,
        category:    "database",
        features:    ["ACID transactions", "Row-level security", "Real-time subscriptions", "Full-text search"],
      },
      {
        name:        "MongoDB & Redis",
        description: "Flexible document storage for unstructured data combined with in-memory caching for sub-millisecond performance.",
        icon:        Layers,
        category:    "database",
        features:    ["Schema flexibility", "Aggregation pipelines", "Redis caching layer", "Session management"],
      },
      {
        name:        "AWS & Vercel",
        description: "Cloud infrastructure for global scale -- from serverless edge deployments to full EC2-backed enterprise workloads.",
        icon:        Cloud,
        category:    "cloud",
        features:    ["Auto-scaling", "CDN & edge network", "CI/CD pipelines", "99.99% uptime SLA"],
      },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    badge:       "Our Services",
    title:       "Comprehensive Web Development Services",
    description: "From a bespoke web application to a high-performance e-commerce platform or a scalable SaaS product -- we cover every dimension of web development with the depth and craftsmanship your business deserves",
    items: [
      {
        icon:        Code,
        title:       "Custom Web Applications",
        description: "We build bespoke web applications from scratch -- designed around your specific business requirements, user workflows, and growth ambitions. No templates, no compromises. Every line of code is written to serve your exact use case with the performance and maintainability your business demands.",
        tools:       ["React", "Next.js", "TypeScript", "Node.js"],
        features: [
          "Requirements discovery & architecture planning",
          "Component-based frontend development",
          "RESTful & GraphQL API design",
          "Third-party service & API integration",
          "Automated testing & QA pipelines",
          "Staged deployment with rollback capability",
        ],
        outcome: "Launch a custom application that fits your processes perfectly and scales as your business grows.",
      },
      {
        icon:        ShoppingCart,
        title:       "E-commerce Development",
        description: "We build high-converting e-commerce experiences that turn browsers into buyers. From product catalogue and checkout flows to inventory management, subscription billing, and post-purchase automation -- every element is optimised for conversion, performance, and customer satisfaction.",
        tools:       ["Next.js", "Shopify", "Stripe", "PostgreSQL"],
        features: [
          "Custom storefront design & development",
          "Conversion-optimised checkout flows",
          "Payment gateway integration (Stripe, PayPal)",
          "Inventory & order management systems",
          "Multi-currency & multi-language support",
          "Post-purchase email & loyalty automation",
        ],
        outcome: "Increase conversion rates by 25-40% with a fast, trust-building shopping experience.",
      },
      {
        icon:        BarChart3,
        title:       "SaaS Platform Development",
        description: "Building a software product requires a different mindset than building a website. We specialise in multi-tenant SaaS architecture -- subscription billing, role-based access control, usage metering, onboarding flows, and the dashboards that keep your customers engaged and renewing.",
        tools:       ["Next.js", "Supabase", "Stripe", "AWS"],
        features: [
          "Multi-tenant database architecture",
          "Subscription billing with Stripe",
          "Role-based access control (RBAC)",
          "Usage analytics & feature flags",
          "Customer onboarding flow design",
          "Admin dashboard & reporting",
        ],
        outcome: "Launch a production-ready SaaS platform with the architecture to support thousands of paying customers.",
      },
      {
        icon:        Smartphone,
        title:       "Progressive Web Apps (PWA)",
        description: "Progressive Web Apps combine the reach of the web with the experience of native mobile apps. Offline capability, push notifications, home screen installation, and near-native performance -- without the friction of app store submissions or the cost of maintaining separate iOS and Android codebases.",
        tools:       ["React", "Next.js", "Workbox", "Vercel"],
        features: [
          "Service worker & offline functionality",
          "Web push notifications",
          "Home screen installation (Add to Home Screen)",
          "Background sync for offline actions",
          "App-like navigation & animations",
          "Lighthouse PWA audit compliance",
        ],
        outcome: "Reach mobile users without native app development costs, with engagement metrics that rival native apps.",
      },
      {
        icon:        Layout,
        title:       "CMS & Content Platforms",
        description: "We build content platforms that give your marketing team the power to publish, update, and manage content without depending on developers. From headless CMS integrations to custom admin interfaces, your team gets full control over your digital presence while developers maintain the technical foundation.",
        tools:       ["Next.js", "Sanity", "Contentful", "TypeScript"],
        features: [
          "Headless CMS integration (Sanity, Contentful)",
          "Custom admin dashboard development",
          "Rich text & media management",
          "SEO metadata management tools",
          "Content approval & workflow systems",
          "Multi-language content management",
        ],
        outcome: "Empower your marketing team to manage content independently, reducing developer dependency by 80%.",
      },
      {
        icon:        Server,
        title:       "API & Backend Development",
        description: "Your frontend is only as good as the API powering it. We design and build robust, well-documented backends -- RESTful APIs, GraphQL schemas, webhook systems, and data pipelines -- that are secure, performant, and built to handle real-world traffic and edge cases.",
        tools:       ["Node.js", "Python", "PostgreSQL", "Redis"],
        features: [
          "RESTful API design & development",
          "GraphQL schema & resolver development",
          "Authentication & authorisation (OAuth, JWT)",
          "Webhook systems & event streaming",
          "Rate limiting, caching & throttling",
          "OpenAPI documentation & SDKs",
        ],
        outcome: "A secure, well-documented API that your team and third-party partners can build on with confidence.",
      },
      {
        icon:        Zap,
        title:       "Performance Optimisation",
        description: "Slow websites cost you customers and search rankings. We audit your existing application, identify bottlenecks, and implement targeted optimisations -- improving Core Web Vitals scores, reducing Time to First Byte, eliminating render-blocking resources, and optimising database queries to deliver measurably faster experiences.",
        tools:       ["Next.js", "Vercel", "Lighthouse", "Datadog"],
        features: [
          "Core Web Vitals audit & improvement plan",
          "Image & media optimisation pipeline",
          "Code splitting & lazy loading",
          "Database query & index optimisation",
          "CDN configuration & cache strategy",
          "Server-side rendering implementation",
        ],
        outcome: "Improve Google PageSpeed scores from below 50 to 90+ and see direct improvement in conversions and rankings.",
      },
      {
        icon:        Lock,
        title:       "Web Application Security",
        description: "We conduct thorough security reviews of existing applications and build security-first from scratch. From OWASP Top 10 vulnerability remediation to penetration testing, dependency auditing, and implementing robust authentication flows -- your users' data and your business reputation are protected.",
        tools:       ["OWASP ZAP", "Snyk", "Auth.js", "AWS WAF"],
        features: [
          "OWASP Top 10 vulnerability assessment",
          "Authentication & session security hardening",
          "Input validation & SQL injection prevention",
          "Dependency vulnerability scanning",
          "HTTPS, CSP & security headers configuration",
          "GDPR & data privacy compliance review",
        ],
        outcome: "Ship with confidence knowing your application has been hardened against the most common attack vectors.",
      },
    ],
  },

  // ─── Outcomes ──────────────────────────────────────────────────────────────
  outcomesDescription:
    "Great web development isn't just about clean code -- it's about delivering outcomes that move your business forward. Here is what our clients consistently achieve.",
  outcomes: [
    {
      icon:        TrendingUp,
      metric:      "40% more conversions",
      title:       "Faster Load Times, Higher Conversions",
      description: "Every second of load time improvement translates directly to conversion gains. Our performance-first approach routinely achieves sub-2-second load times, with clients reporting 20-40% conversion improvements after rebuilds.",
    },
    {
      icon:        Search,
      metric:      "3x organic traffic",
      title:       "Top Search Engine Rankings",
      description: "We build with technical SEO from day one -- semantic HTML, structured data, Core Web Vitals optimisation, and server-side rendering. Clients consistently see significant organic traffic growth within 90 days of launch.",
    },
    {
      icon:        Globe,
      metric:      "99.9% uptime",
      title:       "Zero Downtime at Scale",
      description: "Cloud-native architecture with auto-scaling, load balancing, and redundancy means your application stays up when it matters most. Our deployments achieve 99.9%+ uptime with zero-downtime deployment pipelines.",
    },
    {
      icon:        CircleDollarSign,
      metric:      "50% lower dev costs",
      title:       "Reduced Development Costs Long-Term",
      description: "Clean, modular, well-tested code is dramatically cheaper to maintain and extend. Clients who move from legacy codebases to our modern architecture typically reduce ongoing development costs by 40-60%.",
    },
    {
      icon:        Eye,
      metric:      "65% longer sessions",
      title:       "Better User Engagement",
      description: "Intuitive, fast, accessible interfaces keep users engaged. Clients report significant improvements in session duration, page depth, and return visitor rates after launching applications built with our UX principles.",
    },
    {
      icon:        Clock,
      metric:      "40% faster delivery",
      title:       "Faster Time to Market",
      description: "Our component-based development approach, CI/CD pipelines, and agile delivery methodology means you get to market faster. Most projects ship 30-40% faster than traditional agency timelines without compromising quality.",
    },
  ],

  // ─── Case Studies ──────────────────────────────────────────────────────────
  caseStudies: {
    badge: "Case Studies",
    title: "Shipped and Running",
    description:
      "Production systems we designed, built, and operate — every build ships with monitoring, error tracking, and an architecture a security reviewer can sign off later",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "healthcare", label: "Healthcare" },
      { key: "nonprofit", label: "Nonprofit" },
      { key: "saas", label: "SaaS" },
      { key: "edtech", label: "EdTech" },
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
        icon: Globe,
        title: "Care Services Provider — Website & Zero-Downtime Cutover",
        client: "Live · Client (confidential)",
        industry: "healthcare",
        challenge:
          "A US home care provider needed a credible, fast, modern web presence that their team could update without breaking production.",
        solution:
          "We built a Next.js site on Vercel with automated deployments, split-routing DNS (web traffic to Vercel, email kept on the existing mail host — zero disruption during cutover), and a locked asset pipeline so client photo swaps are filename-only changes with no code edits.",
        results: [
          "Live in production for a US home care provider",
          "Push-to-deploy pipeline with zero-downtime cutover",
          "Client-safe content workflow — photo swaps need no code changes",
        ],
        tools: ["Next.js", "Vercel", "DNS split-routing", "Tailwind CSS"],
      },
      {
        icon: Search,
        title: "Grantifier — AI Grant Discovery Platform",
        image: "/images/case-studies/grantifier.png",
        client: "Live · Client",
        industry: "nonprofit",
        challenge:
          "NGOs lose weeks finding the right grants and drafting applications, and most can't afford a dedicated grants officer.",
        solution:
          "We built a platform that matches an NGO's profile against a continuously refreshed grant database (Grants.gov, EU Funding & Tenders, UKRI) and drafts the application with Claude, ready to edit and export as a PDF. A daily ingestion pipeline keeps the database current without anyone touching it.",
        results: [
          "Live at grantifier.co.uk",
          "Daily automated grant ingestion with no manual upkeep",
          "AI matching and application drafting in production",
        ],
        tools: ["Next.js", "Supabase", "Claude API", "Automated ingestion"],
      },
      {
        icon: Zap,
        title: "WonlyAI — Commercial AI Subscription Platform",
        image: "/images/case-studies/wonlyai.png",
        client: "Live · Own platform",
        industry: "saas",
        challenge:
          "Operate a complete commercial AI product with tiered subscription billing, entitlement management, and daily AI inference at a fixed, predictable unit cost.",
        solution:
          "We built a full-stack platform on Supabase with six subscription tiers and an automated daily inference engine driven by Claude under a hard cost ceiling per run.",
        results: [
          "Live with paying subscribers",
          "Six subscription tiers with entitlement management",
          "Scheduled daily inference with capped unit economics",
        ],
        tools: ["Supabase", "Claude API", "n8n", "Stripe"],
      },
      {
        icon: GraduationCap,
        title: "Student Engagement Platform — US High School",
        client: "Live · Client (confidential)",
        industry: "edtech",
        challenge:
          "Schools often can't see student disengagement until grades slip — attendance, participation, assignments, and belonging live in separate systems nobody checks daily.",
        solution:
          "We built one dashboard that brings attendance, participation, assignments, and belonging together with gamified points and streak mechanics, so staff can act before a student falls behind. Built on Next.js with a Supabase backend and deployed for a Washington, DC high school.",
        results: [
          "Live and in daily use at a US high school",
          "Engagement made visible and actionable in a single dashboard",
          "Gamified mechanics built on Next.js + Supabase",
        ],
        tools: ["Next.js", "Supabase", "TypeScript", "Gamification mechanics"],
      },
    ],
  },

  // ─── Industries ────────────────────────────────────────────────────────────
  industries: [
    {
      name:        "E-commerce & Retail",
      icon:        ShoppingCart,
      description: "Custom storefronts, product configurators, subscription commerce, headless Shopify implementations, and post-purchase automation that drive revenue.",
      solutions:   ["Custom product configurators", "Headless commerce builds", "Subscription & membership platforms", "Inventory & fulfilment portals"],
    },
    {
      name:        "SaaS & Technology",
      icon:        Code,
      description: "Multi-tenant SaaS platforms, developer tools, internal dashboards, and product-led growth infrastructure that acquires and retains paying customers.",
      solutions:   ["Multi-tenant SaaS platforms", "Developer-facing APIs & SDKs", "Product analytics dashboards", "Trial-to-paid onboarding flows"],
    },
    {
      name:        "Healthcare & Wellness",
      icon:        Stethoscope,
      description: "HIPAA-aligned patient portals, telehealth platforms, appointment scheduling systems, and clinical management tools built with privacy first.",
      solutions:   ["Patient self-service portals", "Telehealth video platforms", "Clinical scheduling systems", "Secure document management"],
    },
    {
      name:        "Professional Services",
      icon:        Briefcase,
      description: "Client portals, proposal tools, project management platforms, document management, and billing systems for law firms, agencies, and consultancies.",
      solutions:   ["Client portal development", "Proposal & contract tools", "Time tracking & billing", "Project management platforms"],
    },
    {
      name:        "Education & Training",
      icon:        GraduationCap,
      description: "Learning management systems, course marketplaces, assessment platforms, certificate issuance, and corporate training portals built for scale.",
      solutions:   ["Custom LMS development", "Course marketplaces", "Assessment & quiz engines", "Corporate training portals"],
    },
    {
      name:        "Real Estate & Property",
      icon:        Home,
      description: "Property search platforms, agent portals, landlord & tenant management systems, and mortgage calculators that generate and convert leads.",
      solutions:   ["Property search & listing platforms", "Agent & landlord portals", "Virtual tour integration", "Lead capture & CRM connection"],
    },
  ],

  // ─── Process ───────────────────────────────────────────────────────────────
  processSteps: [
    {
      step:        "1",
      title:       "Discovery & Architecture",
      duration:    "Week 1-2",
      description: "We start by deeply understanding your business, users, and goals. We conduct stakeholder interviews, map user journeys, audit any existing systems, define technical requirements, and select the right technology stack. The output is a detailed technical specification and project plan -- so you know exactly what will be built before we write a line of code.",
      deliverables: ["Technical requirements document", "User journey maps", "System architecture diagram", "Project timeline & milestones"],
    },
    {
      step:        "2",
      title:       "UI/UX Design & Prototyping",
      duration:    "Week 2-4",
      description: "Before development starts, we design and prototype the user experience. This includes wireframing key flows, designing high-fidelity mockups in Figma, building interactive prototypes for user testing, and establishing the component design system. You approve the design before any development begins -- eliminating costly rework later.",
      deliverables: ["Wireframes for all key screens", "High-fidelity Figma designs", "Interactive prototype", "Component design system"],
    },
    {
      step:        "3",
      title:       "Development & Integration",
      duration:    "Week 3-12",
      description: "Our engineers build your application in focused sprints with regular demos. We follow test-driven development, write unit and integration tests, conduct continuous code reviews, and deploy to a staging environment after each sprint. You have full visibility at every stage through shared project management boards and weekly calls.",
      deliverables: ["Staged development with sprint demos", "Test suite & QA documentation", "API documentation", "Staging environment deployment"],
    },
    {
      step:        "4",
      title:       "Launch, Optimise & Support",
      duration:    "Week 12+",
      description: "We execute a controlled production launch with monitoring from day one -- uptime checks, error tracking, performance monitoring, and real-user analytics. We conduct a thorough post-launch review after 30 days, implement any optimisations identified, train your team, and provide ongoing support so you're never left on your own.",
      deliverables: ["Production deployment", "Monitoring & alerting setup", "Team training & documentation", "30-day post-launch review"],
    },
  ],

  // ─── Pricing ───────────────────────────────────────────────────────────────
  pricing: [
    {
      name:        "Starter",
      price:       "$3,000",
      description: "Ideal for startups and SMEs launching their first custom web application or rebuilding a simple site.",
      popular:     false,
      cta:         "Get Started",
      features: [
        "Up to 10 pages or screens",
        "Responsive design (mobile-first)",
        "CMS integration (Sanity or similar)",
        "Contact forms & basic lead capture",
        "SEO fundamentals & meta setup",
        "Performance optimisation (90+ Lighthouse)",
        "1 month post-launch support",
        "Deployment to Vercel or AWS",
      ],
    },
    {
      name:        "Professional",
      price:       "$8,500",
      description: "For businesses building feature-rich web applications, e-commerce platforms, or SaaS products.",
      popular:     true,
      cta:         "Get Started",
      features: [
        "Full custom web application",
        "User authentication & role management",
        "Database design & API development",
        "Payment integration (Stripe)",
        "Admin dashboard & reporting",
        "CI/CD pipeline & staging environment",
        "Performance & SEO optimisation",
        "3 months post-launch support",
        "Team training & documentation",
        "Monthly performance reviews",
      ],
    },
    {
      name:        "Enterprise",
      price:       "Custom",
      description: "Full-scale web platform development for organisations with complex requirements and large user bases.",
      popular:     false,
      cta:         "Get Started",
      features: [
        "End-to-end platform development",
        "Multi-tenant or complex user architecture",
        "Custom integrations & third-party APIs",
        "Advanced security & compliance review",
        "Load testing & performance engineering",
        "Dedicated development team",
        "24/7 monitoring & incident response",
        "12 months maintenance & support",
        "Quarterly roadmap & strategy sessions",
        "SLA guarantee (99.9% uptime)",
      ],
    },
  ],

  // ─── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How long does it take to build a custom web application?",
      answer:   "Timelines depend significantly on scope. A straightforward marketing site or simple web app with 10-15 screens typically takes 4-8 weeks. A full-featured SaaS platform or e-commerce build with custom integrations usually takes 10-16 weeks. Enterprise-scale platforms with complex data models, multi-tenant architecture, and numerous integrations can take 4-8 months. We provide detailed project timelines during our discovery phase, and we use sprint-based delivery so you start seeing working software from week 3 onward.",
    },
    {
      question: "What is the difference between a website and a web application?",
      answer:   "A website is primarily informational -- it presents content to visitors (think brochure sites, blogs, marketing pages). A web application is interactive -- users log in, create data, take actions, and have personalised experiences (think SaaS dashboards, e-commerce platforms, customer portals). Most of what MolaTech builds falls into the web application category: software that runs in a browser and solves specific business problems. We build both, and many projects combine the two -- a marketing site that feeds into a web application.",
    },
    {
      question: "Do you work with existing codebases or only new builds?",
      answer:   "Both. We regularly take over existing codebases for modernisation, performance optimisation, and feature development. When inheriting an existing project, we start with a thorough technical audit to understand what's there, identify the biggest problems and risks, and propose a pragmatic improvement plan. We can either refactor incrementally or plan a full rebuild depending on the technical debt level. We don't impose rewrites unnecessarily -- if the existing foundation is sound, we build on it.",
    },
    {
      question: "Which tech stack do you recommend and why?",
      answer:   "For most web applications in 2024-2025, we recommend Next.js (React) on the frontend with TypeScript, combined with either Supabase (PostgreSQL) or a custom Node.js/Python backend depending on complexity. This stack offers excellent developer experience, outstanding performance via server-side rendering and edge delivery, strong TypeScript support, and massive community backing. However, our recommendation always follows your requirements -- if you have an existing Vue.js or Django codebase, we work with that too. We're technology pragmatists, not zealots.",
    },
    {
      question: "How do you handle project management and communication?",
      answer:   "We use a structured sprint-based approach with clear milestones. You get access to our project management board (Linear or Jira) where you can see every task, its status, and who's responsible. We hold weekly progress calls with screen shares and demos of completed work. Critical decisions go through a shared decision log. You'll never be in the dark -- progress is visible and accessible without needing to ask for updates.",
    },
    {
      question: "What happens after the website or application is launched?",
      answer:   "All packages include a post-launch support period (1-12 months depending on tier). During this period, we monitor for errors and performance issues, address bugs found in production, and implement any small improvements. After the included support period, we offer monthly retainer arrangements for ongoing development, feature additions, and technical maintenance. We also provide full handover documentation and training so your internal team can make day-to-day content and configuration updates independently.",
    },
    {
      question: "How do you approach performance and Core Web Vitals?",
      answer:   "Performance is built in from the start, not bolted on at the end. We target 90+ Lighthouse scores on all new builds. Specific techniques include: server-side rendering or static generation for fast initial page loads, Next.js Image component for automatic image optimisation, code splitting and lazy loading, edge CDN delivery via Vercel or CloudFront, aggressive HTTP caching strategies, and database query optimisation. We benchmark before and after every major change and report on Core Web Vitals as part of our delivery process.",
    },
    {
      question: "Can you integrate with our existing tools and systems?",
      answer:   "Yes -- integration is one of our core competencies. We integrate with CRMs (Salesforce, HubSpot), ERP systems, payment processors (Stripe, PayPal), email platforms (Mailchimp, SendGrid), analytics (Google Analytics, Mixpanel), and hundreds of other services. If your tool has an API (most modern software does), we can connect to it. For legacy systems without APIs, we explore alternatives such as database-level integration, SFTP file exchange, or webhook bridges. We'll tell you honestly if a particular integration is technically infeasible or prohibitively expensive.",
    },
    {
      question: "Do you provide hosting, or do we manage our own infrastructure?",
      answer:   "We offer both models. For most projects, we recommend and set up managed cloud hosting (Vercel, AWS, or GCP) and hand over full control and access to you at launch. You own the infrastructure, you own the bill, and you're never dependent on us to keep the lights on. Alternatively, we can manage hosting as part of an ongoing retainer. We configure CI/CD pipelines, monitoring, alerting, and backup systems regardless of which model you choose.",
    },
    {
      question: "How do you ensure the security of our application?",
      answer:   "Security is a layered discipline and we apply it at every layer. At the application level: parameterised queries to prevent SQL injection, Content Security Policy headers, CSRF protection, secure session management, and input validation. At the authentication level: industry-standard OAuth 2.0 flows, bcrypt password hashing, MFA support, and short-lived JWT tokens with refresh rotation. At the infrastructure level: HTTPS everywhere, Web Application Firewall rules, least-privilege IAM roles, and encrypted storage. Before launch, we conduct a security review against the OWASP Top 10.",
    },
  ],

  // ─── Contact / CTA ─────────────────────────────────────────────────────────
  contact: {
    ctaTitle:       "Ready to Build Something Great?",
    ctaDescription: "Tell us about your project and we'll come back with a clear plan, realistic timeline, and transparent pricing. No sales pressure -- just honest advice from experienced engineers.",
    ctaDisclaimer:  "Free discovery call included. We'll scope your project and give you a written proposal at no charge.",
  },
}

// ─── Page Export ──────────────────────────────────────────────────────────────

/** Web Development service page -- renders via the shared ServicePageTemplate. */
export default function WebDevelopmentPage() {
  return <ServicePageTemplate config={config} />
}
