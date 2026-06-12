"use client"

import {
  TrendingUp,
  Search,
  Target,
  Share2,
  FileText,
  Mail,
  BarChart3,
  Users,
  Globe,
  ShoppingCart,
  Building2,
  Shield,
  MousePointerClick,
  LineChart,
  Star,
  Zap,
  CircleDollarSign,
  Gauge,
  RefreshCw,
  BrainCircuit,
  Network,
  Bot,
  Megaphone,
} from "lucide-react"
import ServicePageTemplate, { type ServicePageConfig } from "@/components/services/service-page-template"

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

  hero: {
    badge: "Full-Service Digital Marketing Agency",
    title: "Digital Marketing That Grows Your Business",
    subtitle:
      "Data-driven, results-obsessed digital marketing across SEO, PPC, social media, content, email, and CRO. We build integrated strategies that generate qualified leads, drive revenue, and make your brand the first choice in your market.",
    description:
      "From ambitious start-ups to established brands -- we deliver measurable marketing outcomes, not vanity metrics.",
    ctaText: "Get Your Free Marketing Audit",
    ctaLink: "/start",
    secondaryCtaText: "View Services",
    secondaryCtaLink: "#services",
  },

  benefits: [
    {
      icon: TrendingUp,
      metric: "150-300% increase",
      title: "Traffic Growth",
    },
    {
      icon: CircleDollarSign,
      metric: "3-8x ROAS",
      title: "Return on Ad Spend",
    },
    {
      icon: Target,
      metric: "120% improvement",
      title: "Lead Quality",
    },
    {
      icon: Gauge,
      metric: "30-50% CPA reduction",
      title: "Lower Acquisition Cost",
    },
  ],

  whatIs: {
    badge: "Understanding Digital Marketing",
    title: "What Is Full-Service Digital Marketing?",
    description:
      "Full-service digital marketing means managing every online channel your customers interact with -- coordinated by a single strategic vision, measured by real business outcomes, and continuously optimised as your market evolves.",
    items: [
      {
        icon: Globe,
        title: "Reaching Your Audience Where They Live",
        description:
          "Your customers spend hours every day on search engines, social media, email, and content platforms. Full-service digital marketing puts your brand in front of them at exactly the right moment -- when they're actively searching for solutions you provide, discovering new brands on Instagram, or opening an email tailored to their behaviour. We orchestrate your presence across every relevant channel so no opportunity is missed.",
      },
      {
        icon: BrainCircuit,
        title: "Data-Driven Decisions at Every Step",
        description:
          "Unlike traditional marketing, every digital channel produces measurable data. We know which ad creative drove a purchase, which blog post generated a lead, which email subject line had the highest open rate. This granularity lets us continuously optimise -- moving budget toward what works, cutting what doesn't, and discovering new opportunities as your market evolves. Every pound and dollar spent is accountable.",
      },
      {
        icon: TrendingUp,
        title: "Building Long-Term Brand Equity",
        description:
          "Effective digital marketing isn't just about short-term clicks and conversions. We build brand authority through consistent SEO-driven content that earns trust over time, social proof that compounds through reviews and user-generated content, email relationships that increase customer lifetime value, and a cohesive brand narrative that makes your business the default choice in your category.",
      },
      {
        icon: Network,
        title: "Integrated Multi-Channel Strategy",
        description:
          "Most businesses run their channels in silos -- the PPC team doesn't talk to the SEO team, email campaigns aren't aligned with social media messaging. We design integrated strategies where each channel amplifies the others: SEO content fuels social media, email nurtures PPC leads, retargeting reconnects with organic visitors. The result is a compounding flywheel that grows more efficient over time.",
      },
    ],
    stats: {
      title: "Why Businesses Are Investing in Digital Marketing Now",
      items: [
        {
          value: "63%",
          description:
            "of businesses say generating traffic and leads is their top marketing challenge",
        },
        {
          value: "$786B",
          description:
            "the size of the global digital advertising market by 2026, growing 13% per year",
        },
        {
          value: "4.8x",
          description:
            "higher revenue growth for companies with strong omnichannel digital marketing strategies",
        },
      ],
    },
  },

  techStack: {
    badge: "Platforms We Master",
    title: "Marketing Platforms & Tools",
    description:
      "We are certified experts in the platforms that power modern digital marketing -- selecting the right tools for your channels and making each one perform at its highest level",
    categories: ["all", "analytics", "ppc", "seo", "social", "email", "crm"],
    items: [
      {
        name: "Google Analytics 4",
        description:
          "Next-generation analytics measuring the complete customer journey across web and app.",
        icon: BarChart3,
        category: "analytics",
        features: [
          "Cross-platform tracking",
          "Predictive insights",
          "Audience analysis",
          "Custom reporting",
        ],
      },
      {
        name: "Google Ads",
        description:
          "Search, display, shopping, and YouTube advertising across Google's entire network.",
        icon: Target,
        category: "ppc",
        features: [
          "Search & Display ads",
          "Smart bidding",
          "Conversion tracking",
          "Performance Max",
        ],
      },
      {
        name: "Meta Ads Manager",
        description:
          "Facebook and Instagram advertising with industry-leading audience targeting capabilities.",
        icon: Share2,
        category: "social",
        features: [
          "Custom audiences",
          "Lookalike targeting",
          "Creative A/B testing",
          "Retargeting campaigns",
        ],
      },
      {
        name: "SEMrush",
        description:
          "All-in-one SEO and competitive intelligence platform for data-driven decisions.",
        icon: Search,
        category: "seo",
        features: [
          "Keyword research",
          "Competitor analysis",
          "Rank tracking",
          "Site audit",
        ],
      },
      {
        name: "Ahrefs",
        description:
          "Industry-leading backlink analysis and content gap identification tool.",
        icon: LineChart,
        category: "seo",
        features: [
          "Backlink explorer",
          "Content gap analysis",
          "SERP analysis",
          "Link building",
        ],
      },
      {
        name: "HubSpot",
        description:
          "Full marketing, sales, and CRM platform for end-to-end lead lifecycle management.",
        icon: Users,
        category: "crm",
        features: [
          "Marketing automation",
          "Lead scoring",
          "CRM integration",
          "Reporting dashboards",
        ],
      },
      {
        name: "Mailchimp",
        description:
          "Email marketing and automation platform with powerful segmentation and journey builder.",
        icon: Mail,
        category: "email",
        features: [
          "Drag-and-drop builder",
          "Audience segmentation",
          "Journey automation",
          "A/B testing",
        ],
      },
      {
        name: "LinkedIn Ads",
        description:
          "B2B-focused advertising on the world's largest professional network.",
        icon: Building2,
        category: "social",
        features: [
          "Lead gen forms",
          "Account-based targeting",
          "Sponsored content",
          "InMail campaigns",
        ],
      },
    ],
  },

  services: {
    badge: "Our Services",
    title: "Comprehensive Digital Marketing Services",
    description:
      "From search visibility to social media presence, from email revenue to conversion rate optimisation -- we manage every dimension of your digital marketing with the same rigour and results focus",
    items: [
      {
        icon: Search,
        title: "Search Engine Optimisation (SEO)",
        description:
          "We engineer your online presence to dominate search results for the queries your ideal customers are typing. Our SEO approach is holistic and sustainable -- combining technical excellence, authoritative content, and strategic link acquisition to build rankings that compound over time and are resilient to algorithm changes.",
        features: [
          "Technical SEO audit & Core Web Vitals optimisation",
          "Keyword strategy & search intent mapping",
          "On-page optimisation & content architecture",
          "Authority link acquisition campaigns",
          "Local SEO & Google Business Profile optimisation",
          "International & multilingual SEO",
        ],
        tools: ["SEMrush", "Ahrefs", "Google Search Console"],
        outcome:
          "Achieve page-one rankings for high-intent keywords and drive 150-300% more organic traffic within 6 months.",
      },
      {
        icon: Target,
        title: "Pay-Per-Click & Paid Search (PPC)",
        description:
          "We turn your advertising budget into a reliable lead-generation machine. Through rigorous keyword selection, compelling ad copy, precision bidding strategies, and relentless optimisation, we maximise your return on every pound of ad spend -- whether that's Google Search, Shopping, Display, YouTube, or Microsoft Ads.",
        features: [
          "Google Ads & Microsoft Ads campaign management",
          "Search, Shopping, Display, and YouTube campaigns",
          "Conversion tracking & goal configuration",
          "Smart bidding strategy implementation",
          "Landing page optimisation & A/B testing",
          "Negative keyword management & search term analysis",
        ],
        tools: ["Google Ads", "Microsoft Ads", "Google Analytics 4"],
        outcome:
          "Achieve 3-8x ROAS and reduce cost-per-acquisition by 30-50% through systematic campaign optimisation.",
      },
      {
        icon: Share2,
        title: "Social Media Marketing",
        description:
          "We build brand communities and drive qualified traffic through strategic social media management and paid social advertising. From organic content calendars to high-performance Meta, LinkedIn, and TikTok campaigns, we manage your entire social presence with the goal of turning followers into paying customers.",
        features: [
          "Multi-platform social media strategy",
          "Content creation, design & scheduling",
          "Community management & engagement",
          "Meta (Facebook & Instagram) paid advertising",
          "LinkedIn advertising for B2B lead generation",
          "TikTok & YouTube Shorts growth campaigns",
        ],
        tools: ["Meta Ads Manager", "LinkedIn Ads", "Hootsuite"],
        outcome:
          "Grow engaged audiences and generate qualified social leads with 40-60% lower cost-per-lead than industry average.",
      },
      {
        icon: FileText,
        title: "Content Marketing",
        description:
          "We create and distribute content that earns trust, ranks in search, and moves prospects through the buying journey. From long-form pillar articles to short-form video scripts, our content strategy is built on search demand, competitive gaps, and your unique brand expertise -- content that does measurable commercial work.",
        features: [
          "Content strategy & editorial calendar",
          "SEO-optimised blog posts & pillar pages",
          "Video scripts & YouTube content strategy",
          "Infographics, guides & lead magnets",
          "Content distribution & amplification",
          "Content performance tracking & ROI measurement",
        ],
        tools: ["SEMrush", "HubSpot", "WordPress"],
        outcome:
          "Build topical authority that drives 200% more organic traffic and generates a consistent pipeline of inbound leads.",
      },
      {
        icon: Mail,
        title: "Email Marketing & Automation",
        description:
          "Email remains the highest-ROI digital marketing channel when done properly. We design segmented campaigns and sophisticated automation sequences that nurture leads at scale, re-engage dormant customers, drive repeat purchases, and deliver personalised experiences that make subscribers feel individually understood.",
        features: [
          "Email strategy & audience segmentation",
          "Automated drip campaigns & welcome sequences",
          "Behavioural trigger-based email flows",
          "A/B testing for subject lines, copy & CTAs",
          "Deliverability optimisation & list hygiene",
          "CRM integration & lifecycle tracking",
        ],
        tools: ["Mailchimp", "Klaviyo", "HubSpot"],
        outcome:
          "Achieve 30-50% open rates and 400%+ email ROI through strategic segmentation and personalisation.",
      },
      {
        icon: MousePointerClick,
        title: "Conversion Rate Optimisation (CRO)",
        description:
          "Traffic without conversion is just cost. Our CRO practice systematically identifies why visitors aren't converting and implements evidence-based improvements to your landing pages, checkout flows, and lead capture forms. Every test we run is grounded in analytics data, user behaviour recordings, and proven conversion psychology principles.",
        features: [
          "Heatmap, session recording & user behaviour analysis",
          "Landing page design & copy optimisation",
          "A/B & multivariate testing programmes",
          "Checkout flow & form optimisation",
          "Trust signal & social proof implementation",
          "User journey mapping & funnel analysis",
        ],
        tools: ["Hotjar", "Google Optimize", "Google Analytics 4"],
        outcome:
          "Increase conversion rates by 40-120% without increasing ad spend -- making every channel more profitable.",
      },
      {
        icon: BarChart3,
        title: "Analytics & Marketing Intelligence",
        description:
          "We transform your raw data into clear commercial insight. From setting up accurate tracking across all channels to building custom dashboards that show exactly what's driving revenue, we ensure you always know the true performance of your marketing investment and have the data to make confident strategic decisions.",
        features: [
          "GA4 setup, configuration & enhanced measurement",
          "Multi-touch attribution modelling",
          "Custom dashboard creation (Looker Studio)",
          "Automated performance reporting & alerts",
          "Customer lifetime value & cohort analysis",
          "Channel contribution & budget allocation modelling",
        ],
        tools: ["Google Analytics 4", "Looker Studio", "SEMrush"],
        outcome:
          "Gain complete marketing attribution clarity and make budget decisions that increase blended ROAS by 25-40%.",
      },
      {
        icon: Star,
        title: "Influencer & Affiliate Marketing",
        description:
          "We design and manage influencer partnerships and affiliate programmes that extend your brand's reach through trusted voices in your industry. From micro-influencer campaigns that drive authentic engagement to structured affiliate networks that create scalable, performance-based acquisition channels.",
        features: [
          "Influencer identification, vetting & outreach",
          "Campaign brief creation & content approval",
          "Contract negotiation & compliance management",
          "Performance tracking & ROI measurement",
          "Affiliate programme setup & management",
          "Brand ambassador programme development",
        ],
        tools: ["Meta Ads Manager", "HubSpot", "Ahrefs"],
        outcome:
          "Access new audiences through trusted voices and build a scalable affiliate channel that generates 20-30% of revenue.",
      },
    ],
  },

  outcomes: [
    {
      icon: TrendingUp,
      metric: "150-300% traffic growth",
      title: "Dramatic Traffic Growth",
      description:
        "Our integrated SEO and content strategies consistently deliver 150-300% increases in organic traffic within 6 months. Combined with paid channels, clients typically see total website visits more than double within the first year of working with us.",
    },
    {
      icon: CircleDollarSign,
      metric: "3-8x ROAS achieved",
      title: "Superior Return on Ad Spend",
      description:
        "Through systematic bidding optimisation, audience refinement, and creative testing, we achieve 3-8x ROAS on paid campaigns. Every pound invested is tracked, attributed, and continually optimised to deliver maximum commercial return.",
    },
    {
      icon: Target,
      metric: "120% lead quality improvement",
      title: "More Qualified Leads",
      description:
        "We don't just drive volume -- we attract buyers. Through intent-based targeting, content that speaks to real pain points, and lead qualification workflows, our clients report 60-120% improvements in the quality of inbound leads alongside higher volume.",
    },
    {
      icon: Gauge,
      metric: "30-50% lower CPA",
      title: "Lower Cost Per Acquisition",
      description:
        "As campaigns mature and we build compounding SEO equity, cost per acquisition (CPA) consistently falls. Most clients see CPA reductions of 30-50% within the first 6 months, freeing budget to scale into new channels and audiences.",
    },
    {
      icon: MousePointerClick,
      metric: "40-120% conversion uplift",
      title: "Higher Conversion Rates",
      description:
        "Our CRO programmes turn more of your existing traffic into customers. Through evidence-based testing and landing page optimisation, clients typically see 40-120% conversion rate improvements that make every other marketing channel more profitable.",
    },
    {
      icon: RefreshCw,
      metric: "35-60% CLV increase",
      title: "Increased Customer Lifetime Value",
      description:
        "Email marketing, loyalty campaigns, and retention strategies increase repeat purchase rates and extend customer relationships. Businesses working with us on full-funnel marketing typically see 35-60% improvements in customer lifetime value within 12 months.",
    },
  ],
  outcomesDescription:
    "Digital marketing isn't about impressions and followers -- it's about growing your business. Here are the tangible commercial outcomes our clients consistently achieve.",

  caseStudies: {
    badge: "Case Studies",
    title: "Growth Engines That Fill Themselves",
    description:
      "Compliant, automated demand generation — proven on our own pipeline before we deploy it for clients",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "growth", label: "Lead Generation" },
      { key: "media", label: "Content Ops" },
    ],
    items: [
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
    ],
  },

  industries: [
    {
      name: "E-commerce & Retail",
      icon: ShoppingCart,
      description:
        "Full-funnel digital marketing for product-based businesses: Google Shopping, Meta Ads, email automation, SEO category pages, and retention marketing that maximises customer lifetime value.",
      solutions: [
        "Google Shopping campaigns",
        "Abandoned cart email flows",
        "Product SEO & content",
        "Retargeting & loyalty programmes",
      ],
    },
    {
      name: "SaaS & Technology",
      icon: Zap,
      description:
        "Content-led growth strategies, product-led SEO, LinkedIn advertising for B2B SaaS, and conversion rate optimisation through the entire trial-to-paid customer journey.",
      solutions: [
        "Product-led SEO content",
        "LinkedIn B2B advertising",
        "Trial conversion optimisation",
        "Churn prevention email campaigns",
      ],
    },
    {
      name: "Healthcare & Wellness",
      icon: Shield,
      description:
        "HIPAA-aware digital marketing for healthcare providers: local SEO, reputation management, patient acquisition campaigns, and compliant email marketing for appointment reminders and re-engagement.",
      solutions: [
        "Local SEO for multi-location practices",
        "Google Maps & review strategy",
        "Patient acquisition PPC",
        "Compliant email programmes",
      ],
    },
    {
      name: "Professional Services",
      icon: Building2,
      description:
        "Thought leadership content marketing, LinkedIn strategy, lead magnet funnels, and account-based marketing programmes designed for consulting, legal, financial, and professional service firms.",
      solutions: [
        "Thought leadership content",
        "LinkedIn advertising",
        "Lead magnet development",
        "Account-based marketing",
      ],
    },
    {
      name: "Hospitality & Travel",
      icon: Globe,
      description:
        "Direct booking growth through SEO, Google Hotel Ads, social media storytelling, and email programmes that convert one-time guests into loyal repeat visitors.",
      solutions: [
        "Direct booking SEO strategy",
        "Google Hotel Ads",
        "Guest email automation",
        "Social storytelling campaigns",
      ],
    },
    {
      name: "Education & Training",
      icon: FileText,
      description:
        "Student acquisition campaigns across search and social, content marketing for education authority, email nurture for enrolment funnels, and alumni re-engagement programmes.",
      solutions: [
        "Student acquisition PPC",
        "Course SEO & content",
        "Enrolment nurture sequences",
        "Alumni engagement programmes",
      ],
    },
  ],

  processSteps: [
    {
      step: "1",
      title: "Audit & Strategy",
      duration: "Week 1-2",
      description:
        "We start by conducting a comprehensive audit of your existing digital marketing -- every channel, every campaign, every asset. We analyse your competitors' strategies, map the search landscape for your category, and benchmark your performance against industry standards. The output is a full Digital Marketing Opportunity Report that identifies exactly where you're losing ground and where the highest-impact opportunities lie. We then design a customised strategy with clear priorities, channel allocations, and 90-day targets.",
      deliverables: [
        "Digital marketing audit report",
        "Competitor landscape analysis",
        "Keyword opportunity mapping",
        "90-day strategy & channel plan",
      ],
    },
    {
      step: "2",
      title: "Setup & Campaign Build",
      duration: "Weeks 2-4",
      description:
        "With the strategy approved, we build everything from the ground up. This includes setting up accurate tracking and attribution across all channels, creating campaign structures in Google Ads and Meta, building SEO content briefs, setting up email marketing automation sequences, and configuring your analytics dashboards. We don't launch anything until tracking is verified -- because if you can't measure it, you can't improve it.",
      deliverables: [
        "GA4 & tracking implementation",
        "Campaign builds & ad creative",
        "Email automation sequences",
        "Reporting dashboard setup",
      ],
    },
    {
      step: "3",
      title: "Launch & Optimise",
      duration: "Ongoing (Month 1-3)",
      description:
        "We launch campaigns in a controlled sequence -- starting with the highest-priority channels and scaling budgets as performance data accumulates. Every week we analyse performance, identify underperforming segments, test new creative angles, refine audience targeting, and optimise bidding strategies. SEO content is published on a consistent cadence, and email flows are refined based on engagement data. You receive weekly performance updates and a detailed monthly report with strategic recommendations.",
      deliverables: [
        "Weekly performance reviews",
        "Creative testing cadence",
        "Monthly analytics reports",
        "Continuous bid & audience optimisation",
      ],
    },
    {
      step: "4",
      title: "Scale & Grow",
      duration: "Month 4+",
      description:
        "Once proven performance benchmarks are established, we develop a systematic scaling strategy. This means increasing budgets in high-performing campaigns, expanding into adjacent keyword territories and new audience segments, introducing new channels (TikTok, YouTube, affiliate) as the data justifies, and building compounding SEO equity that reduces your dependence on paid channels over time. Quarterly strategy reviews ensure your marketing evolves with your business.",
      deliverables: [
        "Scaling roadmap & budget recommendations",
        "New channel expansion strategy",
        "Quarterly business reviews",
        "Year-over-year performance benchmarking",
      ],
    },
  ],

  pricing: [
    {
      name: "Growth",
      price: "£1,200/mo",
      description:
        "Perfect for small businesses ready to invest in digital marketing. Ideal for 1-2 channels with a clear focus on measurable ROI.",
      features: [
        "2 marketing channels (SEO or PPC + 1 social)",
        "Monthly content creation (4 pieces)",
        "GA4 setup & basic reporting dashboard",
        "Bi-weekly strategy calls",
        "Monthly performance report",
        "Email support (24hr response)",
        "Quarterly strategy review",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Scale",
      price: "£3,500/mo",
      description:
        "Comprehensive multi-channel marketing for growing businesses aiming to become category leaders in their market.",
      features: [
        "4 marketing channels (SEO, PPC, Social, Email)",
        "Weekly content creation (8-12 pieces)",
        "Full GA4 & multi-touch attribution setup",
        "Dedicated account strategist",
        "Weekly performance calls & reporting",
        "CRO testing (2 experiments/month)",
        "Email automation (up to 5 flows)",
        "Influencer campaign management",
        "Monthly strategy & growth review",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "Full-service digital marketing transformation for established brands with complex needs and ambitious growth targets.",
      features: [
        "All channels managed end-to-end",
        "Dedicated senior strategist + specialist team",
        "Custom content production (20+ pieces/month)",
        "Advanced attribution & revenue modelling",
        "Unlimited CRO testing programme",
        "Affiliate & influencer programme management",
        "Full marketing analytics & BI setup",
        "Weekly executive reporting",
        "SLA-guaranteed response times",
        "Quarterly in-person strategy sessions",
      ],
      popular: false,
      cta: "Get Started",
    },
  ],

  faqs: [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results vary significantly by channel. PPC and paid social can deliver qualified leads within the first week of a campaign going live, though it typically takes 4-8 weeks of optimisation to reach peak efficiency. SEO takes 3-6 months to build meaningful organic traffic, but the results compound over time without proportional cost increases. Email marketing typically shows improved performance within the first campaign. We set honest channel-specific expectations at the outset and ensure you're seeing progress indicators and leading metrics from month one, even before primary KPIs fully mature.",
    },
    {
      question: "What budget do I need for digital marketing?",
      answer:
        "The right budget depends on your goals, market competitiveness, and channels. For PPC-heavy strategies in competitive sectors, we recommend a minimum ad spend of £1,000-2,000/month for meaningful data. For content-and-SEO-led strategies, the investment is primarily in our service fees rather than media spend. We always help you calculate the expected return on different budget levels so your investment decision is evidence-based. We'd rather manage a smaller budget extremely well than stretch a large budget across too many channels prematurely.",
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer:
        "We measure success through a clear hierarchy of metrics aligned to your business goals. Primary KPIs include revenue, leads, and return on ad spend (ROAS). Secondary KPIs include cost per acquisition (CPA), conversion rates, and marketing qualified leads (MQLs). Diagnostic metrics include click-through rates, quality scores, and engagement rates. We set up GA4 and multi-touch attribution from day one so every conversion is accurately credited. You receive a monthly report that connects marketing activity directly to business outcomes -- not vanity metrics.",
    },
    {
      question: "Do you work with businesses in my industry?",
      answer:
        "We have active expertise across e-commerce, SaaS & technology, healthcare, professional services, hospitality, education, and home services. Each industry has distinct buying cycles, compliance considerations, and platform dynamics that we understand deeply. We're selective about the clients we take on -- if we believe your industry requires specialist knowledge we don't possess, we'll tell you honestly rather than overpromise. We always conduct a thorough discovery of your specific market before committing to outcomes.",
    },
    {
      question: "Which digital marketing channels should my business focus on?",
      answer:
        "The right channels depend on your target audience, buying cycle length, and competitive landscape. E-commerce businesses typically see the fastest return from Google Shopping and Meta Ads, supported by email automation for retention. B2B service businesses often find content marketing and LinkedIn most effective for pipeline building. Local service businesses need to prioritise Google Maps SEO and local PPC. Rather than prescribing a channel mix before understanding your business, we always start with an audit and strategy phase that identifies where the highest-impact opportunities exist for your specific situation.",
    },
    {
      question: "How is your approach different from a typical digital marketing agency?",
      answer:
        "Three key differences: first, we are performance-obsessed, not activity-obsessed. We measure success by revenue and ROAS, not impressions and follower counts. Second, we take an integrated approach where every channel is designed to amplify the others, rather than running silos. Third, we build for the long term -- yes, we deliver quick wins in paid channels, but we also build compounding SEO and email assets that become increasingly valuable over time. We are also transparent about what's working and what isn't, and we reallocate budget based on data rather than protecting channels because of existing workflows.",
    },
    {
      question: "Can you manage just one channel, like SEO or Google Ads?",
      answer:
        "Absolutely. While our most successful client relationships involve multi-channel strategy, we regularly provide specialist single-channel services for businesses that have other channels handled internally. Whether you need us to take over and transform your Google Ads account, build an SEO programme from scratch, or design and manage your email marketing -- we can work in whatever configuration makes sense for your situation. We can also start with one channel and expand as results justify increased investment.",
    },
    {
      question: "What reporting will I receive?",
      answer:
        "All clients receive a custom Looker Studio dashboard with real-time access to their marketing performance data. We also provide monthly written performance reports that interpret the data, explain what drove results, identify problems and opportunities, and outline the strategic priorities for the following month. For Scale and Enterprise clients, we hold weekly or bi-weekly calls for live performance reviews and strategy discussion. We believe in radical transparency -- if a campaign isn't performing, you'll hear it from us before you notice it in the data.",
    },
    {
      question: "How do you handle content creation -- do we need to provide anything?",
      answer:
        "We handle the full content production process: keyword research, content briefs, writing, editing, design, and publishing. What we do need from you is a thorough onboarding session to understand your brand voice, audience, competitive positioning, and subject matter expertise. For highly technical industries, we may request subject matter expert interviews to ensure content accuracy and genuine authority. We share all content for your approval before publication and are always open to your feedback to refine the voice and angle.",
    },
    {
      question: "Do you work with businesses outside the UK?",
      answer:
        "Yes. While we are based in the UK, we manage digital marketing for clients across Europe, North America, and Sub-Saharan Africa. For international campaigns, we have experience with multi-language SEO, geo-targeted PPC campaigns, region-specific social media strategies, and international email marketing compliance including GDPR, CAN-SPAM, and CASL. We adjust our working hours and communication cadence to suit clients in different time zones.",
    },
  ],

  contact: {
    ctaTitle: "Ready to Grow Your Business Online?",
    ctaDescription:
      "Let's discuss your digital marketing goals and show you exactly what we'd do to grow your traffic, leads, and revenue. Book a free strategy call and we'll audit your current marketing and identify your top 3 growth opportunities.",
    ctaDisclaimer:
      "No commitment required. You'll receive a free Digital Marketing Opportunity Report regardless of whether you decide to work with us.",
  },
}

export default function DigitalMarketingPage() {
  return <ServicePageTemplate config={config} />
}
