"use client"

import {
  Smartphone,
  TrendingUp,
  Globe,
  Zap,
  Database,
  Shield,
  BarChart3,
  Cloud,
  Layers,
  CircleDollarSign,
  BrainCircuit,
  Building2,
  ShoppingCart,
  Gauge,
  Eye,
  Apple,
  MonitorSmartphone,
  TabletSmartphone,
  AppWindow,
  Server,
  RefreshCw,
  Star,
  Rocket,
  Code2,
  GitBranch,
  Boxes,
  GraduationCap,
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
    badge:            "Mobile & Web App Development",
    title:            "Apps That Users Love. Revenue That Grows.",
    subtitle:
      "We design and build native iOS, native Android, cross-platform, and Progressive Web Apps that engage your users, integrate with your systems, and scale with your business -- delivered in weeks, not months.",
    description:
      "From MVP validation to enterprise-grade platforms, we cover the full product lifecycle -- strategy, UX design, development, launch, and growth engineering.",
    ctaText:          "Start Your App Project",
    ctaLink:          "/start",
    secondaryCtaText: "View Services",
    secondaryCtaLink: "#services",
  },

  // ─── Benefits ──────────────────────────────────────────────────────────────
  benefits: [
    { title: "Faster to Market",  metric: "8-16 weeks",       icon: Rocket },
    { title: "User Retention",    metric: "4.7+ avg rating",  icon: Star },
    { title: "Revenue Growth",    metric: "3x revenue lift",  icon: TrendingUp },
    { title: "Global Reach",      metric: "2B+ devices reached", icon: Globe },
  ],

  // ─── What Is App Development ───────────────────────────────────────────────
  whatIs: {
    badge:       "Understanding App Development",
    title:       "What Is Custom App Development?",
    description:
      "Custom app development is the process of designing, building, and launching a software application tailored to your specific business requirements, users, and brand -- rather than adapting a generic off-the-shelf solution. It is the difference between wearing a suit made to measure and buying one off the rack.",
    items: [
      {
        icon:  Smartphone,
        title: "A Direct Channel to Your Customers",
        description:
          "A mobile app is the most personal digital touchpoint you can own. Unlike a website visit, an app lives on your customer's device -- in their pocket, on their home screen, within reach 24/7. Push notifications, offline functionality, biometric authentication, and native device features allow you to create experiences that web alone cannot match. Businesses with dedicated apps see 3x higher engagement and significantly better customer lifetime value than those relying on mobile browsers alone.",
      },
      {
        icon:  Layers,
        title: "A Platform That Scales With Your Business",
        description:
          "Custom app development means you own the platform entirely. Unlike off-the-shelf software where you're constrained by someone else's roadmap, a bespoke app evolves as your business does. You can add new features, integrate with emerging technologies, pivot your service model, and expand into new markets -- all without waiting for a third-party vendor to catch up. This ownership is a strategic business asset.",
      },
      {
        icon:  Code2,
        title: "Native Performance vs Cross-Platform Intelligence",
        description:
          "Modern app development is no longer an either/or choice. React Native and Flutter have matured to the point where a single codebase can deliver near-native performance across iOS and Android simultaneously, reducing development time and cost by 40-60% versus building two native apps. For performance-critical applications -- real-time trading, AR/VR, complex graphics -- Swift (iOS) and Kotlin (Android) remain the gold standard. We help you choose the right approach based on your users' expectations and your business constraints.",
      },
      {
        icon:  Server,
        title: "API-First Architecture for the Modern Stack",
        description:
          "The best apps are not monoliths -- they are lean frontends backed by powerful, well-designed APIs and cloud infrastructure. We build every application with an API-first philosophy: clean, documented, versioned endpoints that power not just your mobile app, but your web portal, partner integrations, and future products. This approach means your mobile app is always in sync with your backend, scales effortlessly, and can support multiple client surfaces simultaneously.",
      },
    ],
    stats: {
      title: "Why Mobile Apps Are a Must-Have Business Asset",
      items: [
        {
          value:       "7.3B",
          description: "mobile users worldwide -- your app reaches them directly without browser friction or SEO competition",
        },
        {
          value:       "3x",
          description: "higher engagement for businesses with dedicated mobile apps versus those relying on mobile browser experiences alone",
        },
        {
          value:       "40-60%",
          description: "cost reduction achieved by cross-platform development versus building separate native iOS and Android apps",
        },
      ],
    },
  },

  // ─── Tech Stack ────────────────────────────────────────────────────────────
  techStack: {
    badge:       "Technologies We Use",
    title:       "Our App Development Stack",
    description: "We use proven, modern frameworks and backend platforms selected for performance, cross-platform reach, and long-term maintainability -- never chosen for novelty",
    categories:  ["all", "cross-platform", "native", "web", "backend"],
    items: [
      {
        name:        "React Native",
        description: "Cross-platform framework by Meta. Write once, run on iOS and Android with near-native performance.",
        icon:        RefreshCw,
        category:    "cross-platform",
        features:    ["Single JavaScript codebase", "Native UI components", "Expo integration", "Hot reload development"],
      },
      {
        name:        "Flutter",
        description: "Google's UI toolkit for building beautiful, natively compiled apps from a single Dart codebase.",
        icon:        Zap,
        category:    "cross-platform",
        features:    ["Dart language", "Custom widget library", "60fps animations", "Web & desktop support"],
      },
      {
        name:        "Swift / SwiftUI",
        description: "Apple's native development language for iOS, macOS, watchOS, and tvOS applications.",
        icon:        Apple,
        category:    "native",
        features:    ["Full iOS API access", "SwiftUI declarative UI", "Core Data & CloudKit", "ARKit & Vision"],
      },
      {
        name:        "Kotlin / Jetpack Compose",
        description: "Google's modern Android development stack with declarative UI and powerful Jetpack libraries.",
        icon:        Smartphone,
        category:    "native",
        features:    ["Jetpack Compose UI", "Coroutines & Flow", "Room database", "WorkManager"],
      },
      {
        name:        "Progressive Web Apps",
        description: "Web applications that deliver app-like experiences -- installable, offline-capable, and fast.",
        icon:        Globe,
        category:    "web",
        features:    ["Offline mode with service workers", "Push notifications", "Home screen install", "No app store required"],
      },
      {
        name:        "Expo",
        description: "The fastest way to build React Native apps -- batteries-included toolchain for mobile development.",
        icon:        AppWindow,
        category:    "cross-platform",
        features:    ["Managed workflow", "EAS Build & Submit", "OTA updates", "50+ pre-built modules"],
      },
      {
        name:        "Firebase",
        description: "Google's mobile backend platform for authentication, real-time data, cloud functions, and analytics.",
        icon:        Cloud,
        category:    "backend",
        features:    ["Real-time database", "Authentication", "Cloud Functions", "Crashlytics monitoring"],
      },
      {
        name:        "Supabase",
        description: "Open-source Firebase alternative with PostgreSQL, auth, storage, and edge functions.",
        icon:        Database,
        category:    "backend",
        features:    ["PostgreSQL database", "Row-level security", "Real-time subscriptions", "S3-compatible storage"],
      },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    badge:       "Our Services",
    title:       "Comprehensive App Development Services",
    description: "From a native iOS flagship to a cross-platform startup MVP or an enterprise field app -- we cover every dimension of mobile and web app development with the craftsmanship your business deserves",
    items: [
      {
        icon:        Apple,
        title:       "iOS Native App Development",
        description: "We build premium iOS applications using Swift and SwiftUI that meet Apple's stringent design guidelines and performance standards. From consumer apps to enterprise tools, we leverage the full depth of the iOS SDK to deliver experiences that feel at home on iPhone and iPad -- fast, beautiful, and intuitive.",
        tools:       ["Swift", "SwiftUI", "Xcode", "TestFlight"],
        features: [
          "Swift & SwiftUI development",
          "Core Data & CloudKit integration",
          "ARKit, Vision & Core ML",
          "Apple Pay & StoreKit in-app purchases",
          "App Store optimisation & submission",
          "TestFlight beta distribution",
        ],
        outcome: "Achieve 4.7+ App Store ratings by building to Apple's Human Interface Guidelines from day one.",
      },
      {
        icon:        Smartphone,
        title:       "Android Native App Development",
        description: "Our Android development team builds high-performance applications using Kotlin and Jetpack Compose. We follow Material You design principles, handle Android's device fragmentation challenges, and ensure your app works flawlessly across thousands of Android device configurations.",
        tools:       ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"],
        features: [
          "Kotlin & Jetpack Compose UI",
          "Room database & WorkManager",
          "Google Pay & Play Billing",
          "Firebase & Google services integration",
          "Play Store submission & ASO",
          "ProGuard code obfuscation & security",
        ],
        outcome: "Launch across 3 billion Android devices with optimised performance across all screen sizes.",
      },
      {
        icon:        TabletSmartphone,
        title:       "Cross-Platform App Development",
        description: "Build once, ship to both iOS and Android simultaneously. Using React Native or Flutter, we deliver apps that look and feel native on each platform while sharing 85-90% of the codebase. This approach cuts development time and cost significantly without sacrificing quality or user experience.",
        tools:       ["React Native", "Flutter", "Expo", "Dart"],
        features: [
          "React Native or Flutter codebase",
          "Platform-specific UI adaptations",
          "Shared business logic & API layer",
          "Native module bridges when needed",
          "Expo managed or bare workflow",
          "OTA updates without App Store delays",
        ],
        outcome: "Reduce development cost by 40-60% while launching simultaneously on iOS and Android.",
      },
      {
        icon:        MonitorSmartphone,
        title:       "Progressive Web Apps (PWA)",
        description: "Progressive Web Apps deliver the best of web and mobile: installable on the home screen, functional offline, and capable of sending push notifications -- all without app store friction. Ideal for content-heavy platforms, marketplaces, and B2B tools where broad accessibility and zero-install adoption matter most.",
        tools:       ["Next.js", "Workbox", "Web Push API", "IndexedDB"],
        features: [
          "Service worker & offline caching",
          "Web push notification support",
          "Home screen installation",
          "Responsive across all devices",
          "Fast loading with Lighthouse optimisation",
          "No app store approval needed",
        ],
        outcome: "Reach users on any device instantly -- no downloads, no friction, no App Store dependencies.",
      },
      {
        icon:        Building2,
        title:       "Enterprise Mobile Applications",
        description: "We design and build secure, scalable enterprise mobile applications for field teams, internal operations, and B2B platforms. From field service management to enterprise resource planning interfaces, we build apps that integrate deeply with existing enterprise systems -- SAP, Salesforce, Microsoft 365 -- and meet enterprise-grade security requirements.",
        tools:       ["React Native", "Swift", "Kotlin", "Azure AD"],
        features: [
          "MDM & enterprise policy compliance",
          "SSO integration (SAML, OAuth, LDAP)",
          "Offline-first with sync architecture",
          "ERP & CRM deep integration",
          "Role-based access control",
          "Enterprise security scanning & auditing",
        ],
        outcome: "Empower field teams with offline-capable apps that sync seamlessly when connectivity returns.",
      },
      {
        icon:        Server,
        title:       "API Design & Backend Development",
        description: "Every great app needs a robust backend. We design and build the APIs, databases, authentication systems, and cloud infrastructure that power your mobile application. Our API-first approach ensures your backend can serve your app, your web portal, and future integrations from a single, well-documented source of truth.",
        tools:       ["Node.js", "Supabase", "Firebase", "PostgreSQL"],
        features: [
          "RESTful & GraphQL API design",
          "Authentication & authorisation (JWT, OAuth)",
          "Real-time features with WebSockets",
          "Supabase or Firebase backend setup",
          "Cloud infrastructure on AWS, GCP, or Azure",
          "API documentation (OpenAPI/Swagger)",
        ],
        outcome: "Scale from 100 to 1 million users without re-architecting your backend infrastructure.",
      },
      {
        icon:        Eye,
        title:       "App UI/UX Design",
        description: "Beautiful design is not optional -- it is the difference between an app users love and one they delete. Our design process begins with deep user research, competitive analysis, and information architecture. We create high-fidelity prototypes tested with real users before a single line of code is written, ensuring the final product is both stunning and intuitive.",
        tools:       ["Figma", "Principle", "Maze", "Hotjar"],
        features: [
          "User research & persona development",
          "Information architecture & user flows",
          "High-fidelity wireframes & prototypes",
          "Interactive Figma prototypes",
          "Usability testing with real users",
          "Design system & component library creation",
        ],
        outcome: "Reduce user drop-off by 50% through validated, research-backed UX before development begins.",
      },
      {
        icon:        GitBranch,
        title:       "App Maintenance & Growth Engineering",
        description: "Launching is the beginning, not the end. We provide comprehensive post-launch support including OS compatibility updates, performance optimisation, bug fixes, new feature development, and growth engineering. We monitor your app's analytics, crash reports, and user feedback to continuously improve the experience and drive engagement.",
        tools:       ["Sentry", "Firebase Analytics", "Mixpanel", "Fastlane"],
        features: [
          "OS version compatibility updates",
          "Performance monitoring & optimisation",
          "Crash reporting & bug resolution",
          "A/B testing & feature experimentation",
          "App Store & Play Store listing optimisation",
          "Monthly performance reports",
        ],
        outcome: "Maintain 99.9% crash-free session rates and continuously improve your App Store rankings.",
      },
    ],
  },

  // ─── Outcomes ──────────────────────────────────────────────────────────────
  outcomesDescription:
    "Great app development isn't just about clean code -- it's about delivering outcomes that move your business forward. Here is what our clients consistently achieve.",
  outcomes: [
    {
      icon:        Rocket,
      metric:      "8-16 weeks to launch",
      title:       "Faster Time to Market",
      description: "Our streamlined development process, pre-built component libraries, and Agile sprint methodology consistently deliver production-ready apps in 8-16 weeks. We don't just build fast -- we build right, with proper architecture that eliminates costly rewrites down the line.",
    },
    {
      icon:        Star,
      metric:      "4.7+ avg store rating",
      title:       "Higher User Engagement",
      description: "Apps built with our UX-first methodology average 4.7+ star ratings on app stores. We obsess over user flows, loading times, and micro-interactions because engaged users are retained users -- and retained users drive revenue.",
    },
    {
      icon:        CircleDollarSign,
      metric:      "3x revenue increase",
      title:       "Significant Revenue Growth",
      description: "Mobile-first businesses consistently outperform their competitors. Whether through in-app purchases, subscription models, or improved customer retention, our clients see an average 3x revenue increase from their digital channel within 12 months of launch.",
    },
    {
      icon:        Gauge,
      metric:      "40-60% cost reduction",
      title:       "Reduced Development Cost",
      description: "Cross-platform development with React Native or Flutter reduces your investment by 40-60% compared to building separate native apps. You get both iOS and Android simultaneously, maintained from a single codebase by a unified team.",
    },
    {
      icon:        TrendingUp,
      metric:      "Scales to millions of users",
      title:       "Scalable Architecture",
      description: "We build with growth in mind from day one. Our API-first, cloud-native architectures handle user growth from thousands to millions without re-engineering. The infrastructure scales automatically with demand, and you only pay for what you use.",
    },
    {
      icon:        Shield,
      metric:      "OWASP compliant",
      title:       "Enterprise-Grade Security",
      description: "Every app we build undergoes security review covering authentication, data encryption, secure API communication, and OWASP mobile security standards. For regulated industries, we implement compliance-ready architectures from the start.",
    },
  ],

  // ─── Case Studies ──────────────────────────────────────────────────────────
  caseStudies: {
    badge: "Case Studies",
    title: "Apps in Production",
    description:
      "Mobile and full-stack product work — shipped to real app stores with real users",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "saas", label: "SaaS" },
      { key: "edtech", label: "EdTech" },
    ],
    items: [
      {
        icon: Smartphone,
        title: "WonlyAI Mobile — iOS & Android App",
        image: "/images/case-studies/wonlyai.png",
        client: "Live · Own platform",
        industry: "saas",
        challenge:
          "Extend a live subscription platform to mobile so subscribers get predictions and updates on their phones, without building two separate native codebases.",
        solution:
          "We shipped a React Native app on Expo for both iOS and Android, sharing the Supabase backend with the web platform, with push notifications wired to the daily prediction engine.",
        results: [
          "One codebase shipped to both app stores",
          "Push notifications tied to daily content drops",
          "Shared backend with the web platform — no duplicate logic",
        ],
        tools: ["React Native", "Expo", "Supabase", "Push notifications"],
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
      name:        "FinTech & Banking",
      icon:        CircleDollarSign,
      description: "Digital wallets, payment apps, investment platforms, insurance tech, and banking super-apps built with financial-grade security and regulatory compliance.",
      solutions:   ["Digital wallet & payments", "Investment & trading apps", "Loan origination platforms", "Insurance claim management"],
    },
    {
      name:        "Healthcare & MedTech",
      icon:        Shield,
      description: "Patient-facing health apps, clinical workflow tools, telemedicine platforms, and medical device companion apps built to HIPAA/GDPR standards.",
      solutions:   ["Telemedicine & virtual consultations", "Patient monitoring & wearables", "Clinical workflow apps", "Mental health & wellness"],
    },
    {
      name:        "E-commerce & Retail",
      icon:        ShoppingCart,
      description: "Consumer shopping apps, marketplace platforms, loyalty programmes, and omnichannel retail experiences with rich product browsing and frictionless checkout.",
      solutions:   ["Native shopping apps", "Marketplace platforms", "Loyalty & rewards apps", "Inventory management tools"],
    },
    {
      name:        "SaaS & Enterprise",
      icon:        Building2,
      description: "Mobile companions for web SaaS platforms, enterprise dashboards, field service apps, and internal business tools for distributed teams.",
      solutions:   ["B2B SaaS mobile dashboards", "Field service management", "Enterprise resource planning", "Internal team tools"],
    },
    {
      name:        "Education & Training",
      icon:        BrainCircuit,
      description: "Learning management apps, corporate training platforms, skill assessment tools, and certification systems that drive completion and measurable outcomes.",
      solutions:   ["E-learning platforms", "Corporate training apps", "Student management systems", "Assessment & certification"],
    },
    {
      name:        "Logistics & Operations",
      icon:        Layers,
      description: "Fleet tracking, delivery management, warehouse apps, driver companions, and supply chain visibility tools that keep complex operations running smoothly.",
      solutions:   ["Fleet & route management", "Delivery driver apps", "Warehouse management", "Supply chain visibility"],
    },
  ],

  // ─── Process ───────────────────────────────────────────────────────────────
  processSteps: [
    {
      step:        "1",
      title:       "Discovery & Strategy",
      duration:    "Week 1-2",
      description: "We begin every project with a structured discovery phase. This involves stakeholder interviews to understand your business goals, user research to map who your app is for and what problems it solves, competitive analysis to identify gaps and opportunities, and technical discovery to understand your existing systems and integration requirements. The output is a comprehensive Product Requirements Document and a phased roadmap that aligns development investment with business impact.",
      deliverables: ["Product Requirements Document (PRD)", "User personas & journey maps", "Competitive landscape analysis", "Phased development roadmap & timeline"],
    },
    {
      step:        "2",
      title:       "UX/UI Design & Prototyping",
      duration:    "Week 3-5",
      description: "Design is where your product becomes real before any code is written. Our design process starts with information architecture and user flow mapping, moves through low-fidelity wireframes, and culminates in high-fidelity interactive prototypes built in Figma. We conduct usability testing sessions with real users from your target audience and iterate based on their feedback. Nothing moves to development until the design is validated and approved. We also create a comprehensive design system that ensures visual consistency throughout the app and beyond.",
      deliverables: ["Information architecture & user flows", "Wireframes & interactive Figma prototype", "Usability testing report & iterations", "Complete design system & component library"],
    },
    {
      step:        "3",
      title:       "Agile Development & QA",
      duration:    "Week 6-14",
      description: "Development follows a two-week Agile sprint cycle. Each sprint delivers a working increment of the application that you can see, test, and provide feedback on -- no surprises at the end. We write automated tests for all business-critical flows, conduct manual QA on real devices across multiple OS versions, and run performance profiling to catch memory leaks and slow renders early. Security review is integrated throughout, not bolted on at the end. You have daily visibility into progress through shared project management tooling and weekly sprint review calls.",
      deliverables: ["Working app increments every 2 weeks", "Automated test suite (unit & integration)", "QA reports across 20+ device/OS combinations", "Security audit & penetration testing report"],
    },
    {
      step:        "4",
      title:       "Launch, Growth & Optimisation",
      duration:    "Week 15+",
      description: "Launch is a controlled process, not a leap of faith. We manage App Store and Google Play submissions, write compelling store listings, prepare screenshots and preview videos, and handle the back-and-forth with Apple and Google's review teams. Post-launch, we monitor crash rates, performance metrics, and user analytics closely. We run A/B tests on key flows, respond to user reviews, and plan the next development iteration based on real data. Your app doesn't stand still -- it grows.",
      deliverables: ["App Store & Play Store submission & approval", "Store listing optimisation (ASO)", "Analytics & monitoring setup", "Post-launch 30-day performance review & roadmap"],
    },
  ],

  // ─── Pricing ───────────────────────────────────────────────────────────────
  pricing: [
    {
      name:        "Starter",
      price:       "$12,000",
      description: "Perfect for MVPs and early-stage products. Validate your idea with a polished, functional app without enterprise-scale investment.",
      popular:     false,
      cta:         "Get Started",
      features: [
        "Single platform (iOS or Android) or PWA",
        "Up to 8 screens & core user flows",
        "UX wireframes & design",
        "Supabase or Firebase backend",
        "Basic authentication (email/social)",
        "App Store / Play Store submission",
        "30 days post-launch support",
        "Source code ownership",
      ],
    },
    {
      name:        "Professional",
      price:       "$28,000",
      description: "The most popular choice for startups and SMEs building a full-featured product for real-world scale.",
      popular:     true,
      cta:         "Get Started",
      features: [
        "Cross-platform iOS + Android (React Native / Flutter)",
        "Up to 20 screens with complex flows",
        "Full UI/UX design & usability testing",
        "Custom API & backend development",
        "Payment integration (Stripe / Apple Pay / Google Pay)",
        "Push notifications & analytics",
        "Admin dashboard for content management",
        "90 days post-launch support & maintenance",
        "Performance monitoring setup (Sentry, Mixpanel)",
      ],
    },
    {
      name:        "Enterprise",
      price:       "Custom",
      description: "Full-scale product development for businesses with complex requirements, integrations, and growth ambitions.",
      popular:     false,
      cta:         "Get Started",
      features: [
        "Native iOS + Android or cross-platform",
        "Unlimited screens & custom flows",
        "Advanced UX research & design sprints",
        "Scalable cloud infrastructure (AWS / GCP / Azure)",
        "SSO, SAML & enterprise auth integration",
        "ERP / CRM / legacy system integration",
        "Dedicated development team",
        "12 months maintenance & growth engineering",
        "SLA guarantee & 24/7 monitoring",
        "Quarterly roadmap & strategy reviews",
      ],
    },
  ],

  // ─── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does it cost to build a mobile app?",
      answer:   "App development cost depends on complexity, platform, and features. A simple MVP (single platform, core flows, basic backend) typically starts from £10,000-£20,000. A full-featured cross-platform app with custom backend, payments, and admin dashboard ranges from £25,000-£60,000. Enterprise applications with deep system integrations, complex architecture, and ongoing dedicated teams are priced on scope. We always provide a detailed quote after a discovery call -- we never give ballpark estimates that become expensive surprises later.",
    },
    {
      question: "Should I build native or cross-platform?",
      answer:   "This is the most common question we get, and the honest answer is: it depends. Cross-platform (React Native or Flutter) is the right choice for 80% of projects -- it cuts cost and time by 40-60% while delivering near-native performance. Native (Swift for iOS, Kotlin for Android) is recommended when you need deep platform-specific APIs (ARKit, complex hardware integration), maximum graphics performance (3D games, real-time rendering), or when your iOS and Android user bases have significantly different needs. We'll recommend the right approach for your specific situation during discovery.",
    },
    {
      question: "How long does it take to build and launch an app?",
      answer:   "A well-scoped MVP takes 8-12 weeks from kick-off to App Store submission. A full-featured product with complex backend, payments, and multiple user types typically takes 14-20 weeks. These timelines assume that requirements are defined, stakeholders are available for weekly reviews, and design feedback is prompt. The biggest cause of timeline overruns is scope creep and delayed decision-making -- our project management process actively prevents both.",
    },
    {
      question: "Do you handle App Store and Google Play submission?",
      answer:   "Yes, completely. We manage the entire submission process for both Apple App Store and Google Play Store. This includes setting up developer accounts if needed, preparing metadata (title, description, keywords for ASO), creating screenshots and preview videos, ensuring compliance with each platform's review guidelines, and managing the back-and-forth with Apple and Google's review teams if issues arise. App Store approval typically takes 1-3 days; Google Play takes 1-7 days.",
    },
    {
      question: "Who owns the code and intellectual property?",
      answer:   "You do, completely. Upon final payment, all source code, design assets, and intellectual property transfer to you in full. We provide a clean GitHub repository handover, documented codebase, and all credentials and access. We have no proprietary lock-in -- you can take the code to any development team you choose. This is a standard term in all our contracts.",
    },
    {
      question: "Can you integrate my app with our existing systems?",
      answer:   "Yes. Integration is one of our core specialisms. We regularly connect mobile apps to CRMs (Salesforce, HubSpot), ERPs (SAP, NetSuite), payment platforms (Stripe, PayPal, regional gateways), authentication systems (Active Directory, Okta), logistics platforms, and bespoke legacy databases. If your system has an API, we can integrate with it. For systems without modern APIs, we can build middleware layers or ETL pipelines to bridge the gap.",
    },
    {
      question: "What happens after the app launches?",
      answer:   "Launch is the beginning, not the end. All packages include post-launch support covering bug fixes, OS compatibility updates (Apple and Google release major OS updates annually that can break apps), and monitoring. Our Professional and Enterprise packages include ongoing growth engineering: A/B testing on key flows, analytics review, feature iteration, and App Store Optimisation to improve discoverability. We also offer standalone maintenance retainers for clients who need a dedicated team on call.",
    },
    {
      question: "How do you handle app security?",
      answer:   "Security is built into every layer of our development process, not added at the end. We follow OWASP Mobile Security Testing Guide standards, implement certificate pinning to prevent man-in-the-middle attacks, use secure storage for sensitive data (Keychain on iOS, EncryptedSharedPreferences on Android), enforce HTTPS for all API communication, implement proper authentication flows with refresh token handling, and conduct code reviews specifically for security vulnerabilities. For regulated industries (FinTech, HealthTech), we conduct or arrange formal penetration testing before launch.",
    },
    {
      question: "Can you build an app that works offline?",
      answer:   "Absolutely. Offline-first architecture is something we specialise in, particularly for field service, logistics, and emerging market applications where connectivity is unreliable. We implement local database layers (SQLite via Drift for Flutter, Realm or SQLite for React Native, Core Data for iOS) with intelligent sync strategies that resolve conflicts gracefully when the device reconnects. We stress-test offline scenarios including partial sync, network interruption mid-operation, and extended offline periods.",
    },
    {
      question: "What if we need to change the scope during development?",
      answer:   "We expect scope to evolve as your team sees the product taking shape -- that's healthy. Our Agile sprint process accommodates change through a structured backlog management process. New requirements go into the backlog, are estimated, and are prioritised collaboratively with you. Significant scope additions are quoted separately and scheduled into future sprints with your agreement. We maintain a change log throughout the project so there are never surprises on the final invoice.",
    },
  ],

  // ─── Contact / CTA ─────────────────────────────────────────────────────────
  contact: {
    ctaTitle:       "Ready to Build Your App?",
    ctaDescription: "Tell us about your app idea and we'll come back with a clear plan, realistic timeline, and transparent pricing. No sales pressure -- just honest advice from experienced engineers.",
    ctaDisclaimer:  "Free discovery call included. We'll scope your project and give you a written proposal at no charge.",
  },
}

// ─── Page Export ──────────────────────────────────────────────────────────────

/** App Development service page -- renders via the shared ServicePageTemplate. */
export default function AppDevelopmentPage() {
  return <ServicePageTemplate config={config} />
}
