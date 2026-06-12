"use client"

import ServicePageTemplate, { type ServicePageConfig } from "@/components/services/service-page-template"
import {
  TrendingUp,
  Palette,
  Eye,
  Monitor,
  Smartphone,
  Layers,
  Target,
  Zap,
  Globe,
  ShoppingCart,
  BarChart3,
  Building2,
  Shield,
  FileText,
  Star,
  RefreshCw,
  Layout,
  PenTool,
  Image,
  Clock,
  CircleDollarSign,
  MousePointer,
  Search,
  GraduationCap,
  Sparkles,
} from "lucide-react"

/** Teal/cyan theme — all Tailwind class literals are written in full so JIT detects them. */
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
    badge: "Professional Website Design Services",
    title: "Design That Builds Trust and Converts Visitors",
    subtitle:
      "We design websites, landing pages, and digital experiences that go far beyond aesthetics — creating brand identities, user experiences, and conversion systems that generate measurable business results.",
    description:
      "From brand identity and UX design to e-commerce experiences and full design systems — we help businesses of all sizes look exceptional online and convert at their full potential.",
    ctaText: "Start Your Design Project",
    ctaLink: "/start",
    secondaryCtaText: "View Services",
    secondaryCtaLink: "#services",
  },

  // ─── Benefits ──────────────────────────────────────────────────────────────
  benefits: [
    {
      title: "Avg Conversion Lift",
      metric: "2-5x",
      icon: TrendingUp,
    },
    {
      title: "Bounce Rate Reduction",
      metric: "30-50%",
      icon: MousePointer,
    },
    {
      title: "Design-to-Launch",
      metric: "4-8 weeks",
      icon: Clock,
    },
    {
      title: "Client Satisfaction",
      metric: "98%",
      icon: Star,
    },
  ],

  // ─── What Is ───────────────────────────────────────────────────────────────
  whatIs: {
    badge: "Understanding Design",
    title: "What Is Professional Website Design?",
    description:
      "Professional website design is the strategic discipline of creating digital experiences that communicate your brand's value, build trust with your audience, and systematically convert visitors into customers. It is equal parts art and science.",
    items: [
      {
        title: "Beyond Aesthetics: Design That Drives Business",
        description:
          "Professional website design is not just about making something look attractive. It is the strategic craft of creating digital experiences that communicate your brand's value, guide visitors towards clear actions, and convert interest into revenue. Every colour choice, typography decision, layout pattern, and micro-interaction is made with your business objectives in mind. Good design is invisible — visitors simply find it easy to trust you, understand your offer, and take the next step.",
        icon: Target,
      },
      {
        title: "Brand Identity Brought to Life Digitally",
        description:
          "Your website is the most powerful expression of your brand. We translate your brand identity — your values, personality, and positioning — into a cohesive visual language that resonates with your target audience. This means a consistent colour palette, carefully selected typefaces, purposeful imagery, and a design voice that makes you instantly recognisable and memorable. Businesses with strong brand consistency across their website earn 33% more revenue on average.",
        icon: Palette,
      },
      {
        title: "User Experience That Reduces Friction",
        description:
          "UX design is the architecture of how people navigate and interact with your site. We map user journeys, conduct heuristic evaluations, design clear information hierarchies, and craft intuitive navigation systems. The goal is zero friction — visitors should always know where they are, what they can do next, and why they should. A well-structured UX reduces bounce rates by up to 50% and can double or triple conversion rates compared to a visually-appealing-but-confusing design.",
        icon: Eye,
      },
      {
        title: "Responsive, Accessible, and Performant by Default",
        description:
          "In 2024, over 60% of web traffic comes from mobile devices. Every design we create is mobile-first, meaning it is conceived for small screens and enhanced for larger ones — not the reverse. We also follow WCAG 2.1 accessibility guidelines, ensuring your site serves users with disabilities while improving SEO. And because Google ranks fast sites higher, we optimise every asset, eliminate render-blocking elements, and target Core Web Vitals scores in the top percentile.",
        icon: Smartphone,
      },
    ],
    stats: {
      title: "The Business Case for Professional Design",
      items: [
        {
          value: "50ms",
          description:
            "Time users take to form a first impression of your website — before reading a word",
        },
        {
          value: "94%",
          description:
            "of first impressions are design-related, making visual quality your most powerful trust signal",
        },
        {
          value: "$100:1",
          description:
            "ROI from UX investment — every £1 in UX returns up to £100 in reduced rework and higher conversions",
        },
      ],
    },
  },

  // ─── Tech Stack ────────────────────────────────────────────────────────────
  techStack: {
    badge: "Tools & Technologies",
    title: "Design Tools & Platforms We Use",
    description:
      "We work with industry-leading design and development tools, choosing the right platform for each project based on your specific needs and workflow requirements",
    categories: ["all", "design", "development", "prototype", "brand"],
    items: [
      {
        name: "Figma",
        description:
          "Industry-standard collaborative design tool for UI/UX, prototyping, and design systems.",
        icon: PenTool,
        category: "design",
        features: [
          "Real-time collaboration",
          "Component libraries",
          "Interactive prototypes",
          "Design system tokens",
        ],
      },
      {
        name: "Adobe XD",
        description:
          "Professional UI/UX design and prototyping platform with deep Creative Cloud integration.",
        icon: Layers,
        category: "design",
        features: [
          "Vector design tools",
          "Auto-animate",
          "Voice prototyping",
          "Asset sharing",
        ],
      },
      {
        name: "Webflow",
        description:
          "Visual web design platform that generates clean, production-ready HTML/CSS/JS code.",
        icon: Globe,
        category: "development",
        features: [
          "Visual CSS builder",
          "CMS integration",
          "SEO controls",
          "Hosting included",
        ],
      },
      {
        name: "WordPress",
        description:
          "World's most popular CMS powering 43% of all websites with unlimited extensibility.",
        icon: Layout,
        category: "development",
        features: [
          "10,000+ themes",
          "60,000+ plugins",
          "WooCommerce",
          "Multisite support",
        ],
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first CSS framework enabling rapid, consistent, and highly customisable UI development.",
        icon: Palette,
        category: "development",
        features: [
          "JIT compilation",
          "Responsive utilities",
          "Dark mode",
          "Custom design systems",
        ],
      },
      {
        name: "Framer",
        description:
          "Advanced prototyping tool for high-fidelity animations and interaction design.",
        icon: MousePointer,
        category: "prototype",
        features: [
          "Smart animate",
          "Code components",
          "Real data integration",
          "Handoff ready",
        ],
      },
      {
        name: "Adobe Illustrator",
        description:
          "Vector graphics software for creating logos, icons, and scalable brand assets.",
        icon: Image,
        category: "brand",
        features: [
          "Vector artwork",
          "Logo design",
          "Icon systems",
          "Print-ready assets",
        ],
      },
      {
        name: "Next.js",
        description:
          "React framework for production-grade websites with optimal performance and SEO.",
        icon: Zap,
        category: "development",
        features: [
          "Server-side rendering",
          "Static generation",
          "Image optimisation",
          "Edge runtime",
        ],
      },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    badge: "Our Services",
    title: "Comprehensive Website Design Services",
    description:
      "From brand identity creation to full website design and development, we deliver end-to-end design solutions tailored to your business goals and audience",
    items: [
      {
        title: "Brand Identity & Visual Design",
        description:
          "We create cohesive brand identities that go beyond a logo — encompassing colour systems, typography hierarchies, icon libraries, illustration styles, and comprehensive design guidelines that ensure consistency across every touchpoint. Whether you are starting from scratch or refining an existing identity, we craft a visual language that resonates with your audience and differentiates you from competitors.",
        icon: Palette,
        features: [
          "Logo design and brand mark creation",
          "Colour palette and typography systems",
          "Icon library and illustration direction",
          "Brand style guide documentation",
          "Brand asset creation for all channels",
          "Competitive visual analysis",
        ],
        tools: ["Figma", "Adobe Illustrator", "Adobe XD"],
        outcome:
          "Businesses with strong brand identity see 20% higher customer trust scores and 33% more consistent revenue.",
      },
      {
        title: "UI/UX Design & Prototyping",
        description:
          "User experience design is the backbone of every high-converting website. We conduct user research, map customer journeys, create wireframes, build interactive prototypes, and conduct usability testing before a single line of code is written. Our iterative design process means your final website is validated with real users — reducing costly post-launch revisions.",
        icon: Eye,
        features: [
          "User research and persona development",
          "Customer journey and flow mapping",
          "Low and high-fidelity wireframing",
          "Interactive prototype development",
          "Usability testing and iteration",
          "Accessibility auditing (WCAG 2.1)",
        ],
        tools: ["Figma", "Framer", "Adobe XD"],
        outcome:
          "Investing in UX delivers up to $100 return for every $1 spent by reducing development rework and increasing conversions.",
      },
      {
        title: "Responsive Website Design & Development",
        description:
          "We design and build fully responsive websites that perform flawlessly across all devices — from 320px mobile screens to 4K ultra-wide monitors. Using modern CSS frameworks, our sites adapt gracefully to every screen size, maintaining readability, usability, and visual integrity. Every breakpoint is considered during design, not retrofitted during development.",
        icon: Monitor,
        features: [
          "Mobile-first design approach",
          "Cross-browser compatibility testing",
          "Touch-optimised interactions",
          "Flexible grid and layout systems",
          "Responsive images and media",
          "Core Web Vitals optimisation",
        ],
        tools: ["Figma", "Tailwind CSS", "Next.js"],
        outcome:
          "Responsive design reduces bounce rate by up to 50% for mobile visitors and improves SEO rankings significantly.",
      },
      {
        title: "Landing Page Design",
        description:
          "Landing pages are your highest-value conversion assets. We design focused, distraction-free landing pages built around a single goal — whether that is capturing leads, selling a product, promoting an event, or driving sign-ups. Every element is strategically placed to guide visitors through your value proposition and towards the call to action.",
        icon: Target,
        features: [
          "Conversion-centred layout design",
          "Compelling hero section creation",
          "Social proof and trust signal design",
          "A/B testing variant creation",
          "Form optimisation and UX",
          "Analytics and heatmap integration",
        ],
        tools: ["Figma", "Webflow", "Next.js"],
        outcome:
          "Professionally designed landing pages typically convert at 5-15%, compared to 1-3% for average pages.",
      },
      {
        title: "E-commerce Website Design",
        description:
          "E-commerce design is a specialised discipline that balances trust-building, product showcasing, and frictionless checkout. We design product pages that sell, category pages that guide discovery, cart experiences that reduce abandonment, and checkout flows that complete purchases. Every design decision is grounded in e-commerce conversion psychology.",
        icon: ShoppingCart,
        features: [
          "Product page optimisation design",
          "Category and filter UX design",
          "Cart and checkout flow design",
          "Trust badge and review integration",
          "Upsell and cross-sell positioning",
          "Mobile shopping optimisation",
        ],
        tools: ["Figma", "Shopify", "WooCommerce"],
        outcome:
          "Optimised e-commerce design reduces cart abandonment by 20-35% and increases average order value by 15%.",
      },
      {
        title: "Website Redesign & Refresh",
        description:
          "Is your existing website failing to represent your brand or convert visitors? We conduct comprehensive redesigns that preserve your SEO equity while dramatically improving user experience, visual appeal, and conversion performance. We begin with a full audit of your current site — analytics, heatmaps, user feedback — before designing a solution that addresses specific, measurable weaknesses.",
        icon: RefreshCw,
        features: [
          "Full site audit and performance review",
          "SEO equity preservation strategy",
          "Heatmap and analytics analysis",
          "Information architecture restructure",
          "Visual identity modernisation",
          "Phased rollout planning",
        ],
        tools: ["Figma", "Google Analytics", "Hotjar"],
        outcome:
          "Our redesigns average a 65% improvement in conversion rate and 40% reduction in bounce rate within 90 days.",
      },
      {
        title: "Design Systems & Component Libraries",
        description:
          "For growing businesses and digital products, a design system is the foundation of consistent, scalable design. We build comprehensive component libraries in Figma with matching code implementations, enabling your design and development teams to build new features rapidly without recreating common patterns or compromising on consistency.",
        icon: Layers,
        features: [
          "Atomic design methodology",
          "Figma component library creation",
          "Design token documentation",
          "Storybook component integration",
          "Usage guidelines and rules",
          "Ongoing system governance",
        ],
        tools: ["Figma", "Storybook", "Tailwind CSS"],
        outcome:
          "Teams with design systems ship features 47% faster and maintain 90% higher design consistency across products.",
      },
      {
        title: "SEO-Optimised Web Presence",
        description:
          "Beautiful design means nothing if no one finds your site. We design with SEO in mind from day one — structuring content hierarchies for search intent, optimising for Core Web Vitals, implementing proper heading structures, creating SEO-friendly URL architectures, and building schema markup. Our sites are built to rank and designed to convert.",
        icon: Search,
        features: [
          "Technical SEO architecture design",
          "Core Web Vitals performance design",
          "Schema markup implementation",
          "Content hierarchy and heading structure",
          "Internal linking strategy",
          "Local SEO optimisation",
        ],
        tools: ["Next.js", "Google Search Console", "Semrush"],
        outcome:
          "Sites designed with SEO baked in from the start rank 2-3x higher than retrofitted sites within 6 months.",
      },
    ],
  },

  // ─── Outcomes ──────────────────────────────────────────────────────────────
  outcomesDescription:
    "Great design is not subjective — it is measurable. Here are the tangible business outcomes our clients achieve when they invest in professional website design.",
  outcomes: [
    {
      title: "Higher Conversion Rates",
      description:
        "A professionally designed website converts 2-5x more visitors into leads and customers compared to template or DIY sites. Strategic design guides users toward your goals through clear calls to action, trust signals, and persuasive page structures.",
      metric: "2-5x conversions",
      icon: TrendingUp,
    },
    {
      title: "Reduced Bounce Rate",
      description:
        "When visitors land on a site that loads quickly, is visually appealing, and immediately communicates value, they stay. Our designs consistently reduce bounce rates by 30-50% — meaning more of your traffic actually engages with your content.",
      metric: "30-50% lower bounce",
      icon: MousePointer,
    },
    {
      title: "Stronger Brand Perception",
      description:
        "Users form an opinion about your website in 50 milliseconds. Professional design communicates credibility, expertise, and quality before a word is read. Businesses report that a premium web presence directly improves their ability to charge premium prices.",
      metric: "33% more revenue",
      icon: Star,
    },
    {
      title: "Better SEO Rankings",
      description:
        "Design directly impacts SEO. Sites with better Core Web Vitals scores, lower bounce rates, longer session durations, and higher engagement signals rank higher on Google. Our performance-optimised designs help you climb search rankings without additional ad spend.",
      metric: "Top Core Web Vitals",
      icon: Search,
    },
    {
      title: "Faster Time to Revenue",
      description:
        "A website that converts is a 24/7 sales machine. Every day your underperforming site costs you leads and revenue. Our design-to-launch process delivers in 4-8 weeks, getting your improved conversion rates working for you faster.",
      metric: "4-8 week delivery",
      icon: Clock,
    },
    {
      title: "Lower Customer Acquisition Cost",
      description:
        "When your conversion rate doubles, your cost per lead effectively halves — without spending more on advertising. A well-designed website is the highest-leverage investment in your marketing stack, improving the ROI of every channel you invest in.",
      metric: "50% lower CAC",
      icon: CircleDollarSign,
    },
  ],

  // ─── Case Studies ──────────────────────────────────────────────────────────
  caseStudies: {
    badge: "Case Studies",
    title: "Design Work in Production",
    description:
      "Conversion-focused design delivered as working, maintainable sites — try our public prototypes at molatech.org/demos",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "healthcare", label: "Healthcare" },
      { key: "nonprofit", label: "Nonprofit" },
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
      name: "E-commerce & Retail",
      description:
        "Product pages that sell, category experiences that guide discovery, and checkout flows that complete purchases. Designed to reduce abandonment and increase average order value.",
      icon: ShoppingCart,
      solutions: [
        "Conversion-optimised product pages",
        "Mobile-first shopping experience",
        "Trust and social proof design",
        "Upsell and cross-sell UX",
      ],
    },
    {
      name: "Professional Services",
      description:
        "Credibility-first design for law firms, consultancies, accountants, and agencies. Showcase expertise, build trust, and generate qualified inbound enquiries.",
      icon: Building2,
      solutions: [
        "Thought leadership positioning",
        "Case study and results presentation",
        "Team credibility design",
        "Service clarity and differentiation",
      ],
    },
    {
      name: "Healthcare & Wellness",
      description:
        "Patient-centred design that communicates trust, professionalism, and care. Accessibility-compliant sites with integrated booking and patient portal experiences.",
      icon: Shield,
      solutions: [
        "Trust and credibility signals",
        "WCAG 2.1 accessibility compliance",
        "Online booking UX",
        "Patient journey design",
      ],
    },
    {
      name: "SaaS & Technology",
      description:
        "Product-led growth design for software companies. Websites that communicate complex value propositions clearly and onboarding flows that reach the 'aha moment' faster.",
      icon: Monitor,
      solutions: [
        "Value proposition clarity",
        "Free trial conversion design",
        "Feature benefit storytelling",
        "Dashboard and app UI/UX",
      ],
    },
    {
      name: "Education & Training",
      description:
        "Course platforms, training providers, and educational institutions. Designed to communicate learning outcomes, build enrolment confidence, and streamline registration.",
      icon: FileText,
      solutions: [
        "Course discovery and filtering",
        "Outcomes-first page design",
        "Instructor credibility design",
        "Enrolment funnel optimisation",
      ],
    },
    {
      name: "Hospitality & Events",
      description:
        "Immersive visual design for restaurants, hotels, venues, and event spaces. Showcase ambience, drive bookings, and create anticipation before guests arrive.",
      icon: Globe,
      solutions: [
        "High-impact visual storytelling",
        "Reservation and booking UX",
        "Menu and package presentation",
        "Private events and enquiry design",
      ],
    },
  ],

  // ─── Process Steps ─────────────────────────────────────────────────────────
  processSteps: [
    {
      step: "1",
      title: "Discovery & Brand Analysis",
      duration: "Week 1",
      description:
        "We begin every project with a thorough discovery phase. This includes in-depth stakeholder interviews to understand your business goals, target audience, and competitive positioning. We audit your existing brand assets (if any), analyse competitor websites for visual positioning gaps, review your analytics data for user behaviour insights, and conduct heuristic evaluations of your current site. The output is a comprehensive Creative Brief and Design Direction document that aligns your team before any visual work begins.",
      deliverables: [
        "Creative brief and design direction",
        "Competitor visual analysis",
        "Audience persona documentation",
        "Analytics and heatmap review",
      ],
    },
    {
      step: "2",
      title: "Wireframing & Information Architecture",
      duration: "Weeks 2-3",
      description:
        "With a clear brief agreed, we design the structural blueprint of your website. We create low-fidelity wireframes for every page, establish the information architecture, map user flows for key journeys (e.g., homepage to enquiry, product to checkout), and define the content hierarchy for each page. Wireframes are reviewed and approved before any visual design begins — ensuring that layout and UX decisions are made separately from aesthetic decisions. This prevents expensive rework later in the process.",
      deliverables: [
        "Full-site wireframe set",
        "User flow diagrams",
        "Content outline and structure",
        "Navigation and IA documentation",
      ],
    },
    {
      step: "3",
      title: "Visual Design & Prototyping",
      duration: "Weeks 3-6",
      description:
        "This is where your brand comes to life. Based on approved wireframes, we develop high-fidelity designs in Figma — applying your brand system, crafting bespoke UI components, selecting and integrating photography, and designing micro-interactions. We produce an interactive prototype that simulates the real website experience, enabling stakeholder review and user testing before development. You receive up to 3 rounds of revisions to ensure the design is exactly right.",
      deliverables: [
        "High-fidelity Figma designs",
        "Interactive clickable prototype",
        "Design system and component library",
        "Asset exports and specifications",
      ],
    },
    {
      step: "4",
      title: "Development, Launch & Optimisation",
      duration: "Weeks 6-8+",
      description:
        "Approved designs are handed off to development with detailed specifications and developer-ready Figma files. We work alongside your development team (or our own) to ensure pixel-perfect implementation. Prior to launch, we conduct cross-browser and cross-device testing, performance audits targeting 90+ Lighthouse scores, and accessibility checks. Post-launch, we monitor Core Web Vitals, analyse early user behaviour, and provide optimisation recommendations in a 30-day review.",
      deliverables: [
        "Developer handoff package",
        "Cross-device QA report",
        "Performance and accessibility audit",
        "30-day post-launch review",
      ],
    },
  ],

  // ─── Testimonials ──────────────────────────────────────────────────────────

  // ─── Pricing ───────────────────────────────────────────────────────────────
  pricing: [
    {
      name: "Starter",
      description:
        "Perfect for small businesses and startups needing a professional, conversion-focused website presence.",
      price: "$2,500",
      features: [
        "Up to 6 page designs",
        "Mobile-responsive design",
        "Brand consultation and style guide",
        "Interactive Figma prototype",
        "2 rounds of revisions",
        "Developer handoff package",
        "Basic SEO structure",
        "2 weeks support post-launch",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      description:
        "Comprehensive design for growing businesses that need a full website, design system, and conversion optimisation.",
      price: "$6,500",
      features: [
        "Up to 15 page designs",
        "Full UX research and wireframing",
        "Complete brand identity or refresh",
        "Design system and component library",
        "Interactive prototype with animations",
        "4 rounds of revisions",
        "Accessibility audit (WCAG 2.1)",
        "Performance and SEO optimisation",
        "Developer handoff with Storybook",
        "30-day post-launch review",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      description:
        "End-to-end design and development for organisations with complex requirements and multiple stakeholders.",
      price: "Custom",
      features: [
        "Unlimited pages and templates",
        "Full brand identity creation",
        "Multi-language / multi-region support",
        "User testing and conversion research",
        "Full design system with governance",
        "Dedicated design lead",
        "Development oversight and QA",
        "Monthly design retainer option",
        "Executive stakeholder workshops",
        "Quarterly performance and CRO review",
      ],
      popular: false,
      cta: "Get Started",
    },
  ],

  // ─── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      question:
        "What is the difference between web design and web development, and do you do both?",
      answer:
        "Web design is the visual and UX work — how your site looks, feels, and how users navigate it. This includes brand identity, wireframing, high-fidelity visual design, and prototyping. Web development is the technical implementation — writing code that makes the design work in a browser. We specialise in design and work with a trusted development team to handle implementation. All our packages include a developer-ready handoff package with specifications, assets, and an interactive prototype. We can manage the full project end-to-end or hand off to your own development team.",
    },
    {
      question: "How long does a website design project take?",
      answer:
        "Timeline depends on project scope and your feedback speed. A Starter project (up to 6 pages) typically takes 3-4 weeks. A Professional project with full UX research, wireframing, and design system takes 6-8 weeks. Enterprise projects with user testing, multi-stakeholder reviews, and complex requirements can take 10-16 weeks. The biggest factor is how quickly your team provides feedback during review rounds — prompt feedback keeps projects on schedule.",
    },
    {
      question:
        "Will my new website actually improve conversions, or is good design just about aesthetics?",
      answer:
        "Great design is fundamentally about conversion — aesthetics are one part of the equation. Professional design improves conversion in multiple ways: it builds trust (users form opinions in 50ms), it guides attention towards your calls to action, it reduces cognitive load so users can make decisions more easily, it communicates your value proposition clearly, and it removes friction from key flows like contact forms or checkouts. Our clients typically see 50-150% improvements in conversion rate within 90 days of launching a redesigned site.",
    },
    {
      question: "What do you need from us to get started?",
      answer:
        "To begin discovery, we need: your existing brand assets (logo files, brand guidelines if available), access to your analytics (Google Analytics, Hotjar), examples of websites you admire and why, a description of your target audience, your primary business goals for the new site, and an outline of all pages or sections you need. We will guide you through a structured discovery intake form after signing — most clients can complete it in 45-60 minutes.",
    },
    {
      question:
        "Do you offer logo design and full brand identity as part of the project?",
      answer:
        "Yes. Our Professional and Enterprise packages include brand identity work, and we offer brand identity as an add-on to Starter packages. This covers logo design and alternate mark versions, colour palette, typography system, iconography direction, and a brand style guide that covers how the brand should be applied across digital and print channels. We can also work within an existing brand identity if you already have strong brand assets you want to preserve.",
    },
    {
      question: "What CMS or platform will you design for?",
      answer:
        "We are platform-agnostic and design for whichever CMS or framework best suits your needs. Common choices include WordPress (most flexible, largest plugin ecosystem), Webflow (visual-first, no-code editing, great for marketing sites), Next.js/React (best for performance and SaaS applications), and Shopify (for e-commerce). During discovery we will recommend the right platform based on your content management needs, technical team capabilities, performance requirements, and budget.",
    },
    {
      question:
        "How many revisions are included, and what happens if we need more?",
      answer:
        "Starter packages include 2 rounds of revisions, Professional includes 4, and Enterprise is unlimited within scope. A revision round means you consolidate all feedback from your stakeholders into a single set of comments, and we action all of it in one round. If you need additional revision rounds beyond your package, they are charged at our hourly rate. We find that most projects complete within the included revisions because our discovery and wireframing process aligns expectations before visual design begins.",
    },
    {
      question: "Will the design be accessible to users with disabilities?",
      answer:
        "Accessibility is built into our design process by default, not bolted on at the end. We follow WCAG 2.1 AA guidelines across all projects, which covers colour contrast ratios, keyboard navigation patterns, focus state design, ARIA label specifications, and alt text requirements for images. Professional and Enterprise packages include a formal accessibility audit with a pass/fail report. Beyond compliance, accessible design is simply good design — it improves usability for all users.",
    },
    {
      question: "Do you provide the design files, or is the final design yours?",
      answer:
        "All design files become your intellectual property upon final payment. You receive the complete Figma project file (or Adobe XD, depending on project), all exported assets in appropriate formats, the brand style guide as a PDF, and access to any stock photography or licensed assets we have sourced. We retain the right to display the work in our portfolio unless a non-disclosure agreement is in place.",
    },
    {
      question:
        "Can you redesign part of our site without rebuilding the whole thing?",
      answer:
        "Absolutely. Partial redesigns — redesigning a key landing page, the checkout flow, the homepage, or a specific product page — are often the highest-leverage investment. If your existing site has strong pages and only specific sections are underperforming, a targeted redesign is more cost-effective than a full rebuild. We will recommend the right scope based on your analytics data and conversion goals.",
    },
  ],

  // ─── Contact / CTA ─────────────────────────────────────────────────────────
  contact: {
    ctaTitle: "Ready to Elevate Your Online Presence?",
    ctaDescription:
      "Let's discuss how professional website design can transform your brand, improve your conversions, and accelerate your business growth. Book a free discovery call and we'll audit your current site at no charge.",
    ctaDisclaimer:
      "No commitment required. We'll review your site and deliver a free Design Opportunity Report with specific recommendations.",
  },
}

export default function WebsiteDesignPage() {
  return <ServicePageTemplate config={config} />
}
