"use client"

import ServicePageTemplate, { type ServicePageConfig } from "@/components/services/service-page-template"
import {
  TrendingUp,
  Users,
  CircleDollarSign,
  Award,
  Shield,
  Cloud,
  Code,
  BarChart3,
  Layers,
  BrainCircuit,
  Target,
  Building2,
  Headphones,
  Globe,
  Zap,
  GraduationCap,
  ClipboardCheck,
  UserCheck,
  Gauge,
  BookOpen,
} from "lucide-react"

/** Blue/cyan/emerald theme -- all Tailwind class literals are written in full so JIT detects them. */
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
    iconBg:
      "bg-gradient-to-br from-blue-600 to-cyan-500",
    cardBg:
      "from-background to-blue-50/30 dark:to-blue-950/10",
    cardBorder: "border-blue-200/50",
    statsBg: "bg-blue-50 dark:bg-blue-950/20",
    statsColor: "text-blue-600",
    outcomesBg:
      "bg-gradient-to-r from-blue-600 to-cyan-500",
    outcomeBadgeBg:
      "bg-blue-50 dark:bg-blue-950/20",
    outcomeBadgeText:
      "text-blue-800 dark:text-blue-300",
    filterActive: "bg-blue-600 hover:bg-blue-700",
    pricingPopularBadge: "bg-blue-600",
    pricingPopularBorder: "border-blue-500",
    pricingPriceColor: "text-blue-600",
    pricingPopularBtn: "bg-blue-600 hover:bg-blue-700",
    processStepBg:
      "bg-gradient-to-br from-blue-600 to-cyan-500",
    caseStudyResultsBg:
      "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/20",
    accentText: "text-blue-600",
    ctaBg: "bg-gradient-to-r from-blue-600 to-cyan-500",
    ctaBtn: "bg-white text-blue-600 hover:bg-white/90",
  },

  // ─── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    badge: "Corporate Technology Training & Certification",
    title: "Upskill Your Team. Certify Your Future.",
    subtitle:
      "Close the skills gap and build a high-performing workforce with bespoke corporate technology training. From cybersecurity and cloud certifications to AI literacy, DevOps bootcamps, and data analytics — we design and deliver programmes that transform capability and drive measurable business results.",
    description:
      "Trusted by finance, healthcare, government, and technology organisations across the UK and beyond. 92% first-attempt certification pass rate. Programmes from 1-day intensives to 12-week bootcamps.",
    ctaText: "Build Your Training Programme",
    ctaLink: "/start",
    secondaryCtaText: "Explore Training Tracks",
    secondaryCtaLink: "#services",
  },

  // ─── Benefits ──────────────────────────────────────────────────────────────
  benefits: [
    {
      title: "Certification Pass Rate",
      metric: "92% pass rate",
      icon: Award,
    },
    {
      title: "Productivity Uplift",
      metric: "25–40% uplift",
      icon: TrendingUp,
    },
    {
      title: "Retention Improvement",
      metric: "34% better retention",
      icon: Users,
    },
    {
      title: "Training ROI",
      metric: "£4.53 per £1",
      icon: CircleDollarSign,
    },
  ],

  // ─── What Is Section ───────────────────────────────────────────────────────
  whatIs: {
    badge: "Understanding Corporate Training",
    title: "What Is Corporate Technology Training?",
    description:
      "Corporate technology training is the strategic process of developing your workforce's technical skills to match the demands of your business today and tomorrow. It is not optional — it is the difference between organisations that adapt and those that fall behind.",
    items: [
      {
        title: "Closing the Skills Gap That's Costing You",
        description:
          "Technology evolves faster than traditional hiring can keep up. The skills your team needed two years ago are not the skills that will drive your business forward today. Corporate tech training is the strategic investment that closes this gap — turning your existing workforce into a high-performing, future-ready team without the expense of replacing and recruiting. Every pound spent on training has an average ROI of £4.53 in improved productivity, reduced errors, and higher retention.",
        icon: Target,
      },
      {
        title: "Structured Learning With Real Business Outcomes",
        description:
          "Unlike generic online courses your employees forget in a week, corporate training is designed around your specific tools, workflows, and business objectives. We conduct a needs assessment, design a curriculum aligned to your goals, deliver training in formats that stick (hands-on labs, real scenarios, peer collaboration), and assess outcomes through practical evaluation. The result is measurable competency improvement, not just certificates.",
        icon: ClipboardCheck,
      },
      {
        title: "Certification-Backed Credibility and Compliance",
        description:
          "Industry certifications from AWS, Microsoft, CompTIA, Google, ISC², and others are not just personal achievements — they're organisational assets. A certified team means lower cyber risk, stronger vendor relationships, better compliance posture, and a competitive advantage when pitching clients. We align all training to recognised certification frameworks so your investment produces tangible, verifiable credentials.",
        icon: Award,
      },
      {
        title: "Retention Through Investment in People",
        description:
          "73% of employees say they are more likely to stay with a company that invests in their professional development. Corporate training is one of the highest-leverage retention tools available. When your team knows they are growing, they are more engaged, more productive, and less likely to look elsewhere. Training is not a cost — it is a retention strategy, a culture statement, and a performance multiplier.",
        icon: UserCheck,
      },
    ],
    stats: {
      title: "Why Organisations Are Investing in Training Now",
      items: [
        {
          value: "87%",
          description:
            "of executives say their organisations face skills gaps today or expect to within a few years",
        },
        {
          value: "£4.53",
          description:
            "average return for every pound invested in structured employee training and development",
        },
        {
          value: "73%",
          description:
            "of employees say they would stay longer with an employer who invests in their development",
        },
      ],
    },
  },

  // ─── Tech Stack (Training Programmes Catalogue) ────────────────────────────
  techStack: {
    badge: "Training Catalogue",
    title: "Training Programmes We Offer",
    description:
      "Browse our full catalogue of corporate training tracks. All programmes can be customised, combined, and delivered in the format that suits your team.",
    categories: [
      "all",
      "cybersecurity",
      "cloud",
      "devops",
      "softwaredev",
      "data",
      "ai",
      "leadership",
      "digital",
    ],
    items: [
      {
        name: "Cybersecurity Awareness & Defence",
        description: "2–4 weeks · All Levels",
        icon: GraduationCap,
        category: "cybersecurity",
        features: ["CompTIA Security+", "CEH", "CISSP"],
      },
      {
        name: "Cloud Architecture & Certification Prep",
        description: "4–8 weeks · Intermediate–Advanced",
        icon: GraduationCap,
        category: "cloud",
        features: [
          "AWS Solutions Architect",
          "Azure Fundamentals",
          "Google Cloud Associate",
        ],
      },
      {
        name: "DevOps & CI/CD Engineering",
        description: "6 weeks · Intermediate",
        icon: GraduationCap,
        category: "devops",
        features: [
          "Docker Certified Associate",
          "Kubernetes CKA",
          "AWS DevOps Engineer",
        ],
      },
      {
        name: "Software Development Bootcamp",
        description: "8–12 weeks · Beginner–Intermediate",
        icon: GraduationCap,
        category: "softwaredev",
        features: ["Scrum Master", "Professional Developer"],
      },
      {
        name: "Data Analytics & Business Intelligence",
        description: "4–6 weeks · Intermediate",
        icon: GraduationCap,
        category: "data",
        features: [
          "Google Data Analytics",
          "Microsoft PL-300",
          "Tableau Desktop Specialist",
        ],
      },
      {
        name: "AI & Machine Learning Fundamentals",
        description: "6–8 weeks · Intermediate–Advanced",
        icon: GraduationCap,
        category: "ai",
        features: [
          "AWS ML Specialty",
          "Google Professional ML Engineer",
          "Microsoft AI-900",
        ],
      },
      {
        name: "Leadership & IT Management",
        description: "3–4 weeks · Senior/Management",
        icon: GraduationCap,
        category: "leadership",
        features: ["ITIL 4 Foundation", "PMP", "PRINCE2"],
      },
      {
        name: "Digital Transformation Workshops",
        description: "1–3 days (intensive) · All Levels",
        icon: GraduationCap,
        category: "digital",
        features: ["Digital Transformation Certificate"],
      },
      {
        name: "Product Management Mentorship",
        description: "3–6 months · Beginner–Intermediate",
        icon: GraduationCap,
        category: "leadership",
        features: ["Mola Tech PM Certificate"],
      },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    badge: "Our Training Services",
    title: "Comprehensive Training Services",
    description:
      "From cybersecurity and cloud to AI, DevOps, and leadership — we design and deliver end-to-end training solutions that build real capability and deliver measurable business outcomes.",
    items: [
      {
        title: "Cybersecurity Training",
        description:
          "Cyber threats are the single biggest risk to modern businesses, and the majority of breaches are caused by human error. We deliver comprehensive cybersecurity training that covers threat awareness, phishing defence, secure coding practices, incident response, and hands-on penetration testing techniques — tailored to your industry's specific risk profile.",
        icon: Shield,
        features: [
          "Phishing simulation and awareness campaigns",
          "Secure coding and OWASP Top 10 training",
          "Incident response tabletop exercises",
          "CompTIA Security+, CEH, and CISSP prep",
          "GDPR and data protection compliance training",
          "Hands-on ethical hacking labs",
        ],
        tools: ["CompTIA", "CEH", "CISSP", "OWASP"],
        outcome:
          "Reduce phishing click rates by up to 90% and prepare your team for real-world threats.",
      },
      {
        title: "Cloud Certification Preparation",
        description:
          "Cloud is no longer optional — it's the foundation of modern IT infrastructure. We prepare your engineers and architects for the most in-demand cloud certifications across AWS, Azure, and Google Cloud. Our training combines conceptual depth with hands-on lab environments that mirror real exam scenarios and day-to-day cloud operations.",
        icon: Cloud,
        features: [
          "AWS Solutions Architect (Associate & Professional)",
          "Microsoft Azure Fundamentals and Administrator",
          "Google Cloud Associate and Professional paths",
          "Hands-on cloud lab environments",
          "Practice exams with exam-day strategies",
          "Cost optimisation and architecture best practices",
        ],
        tools: ["AWS", "Azure", "Google Cloud", "Terraform"],
        outcome:
          "Average certification pass rate of 92% within the first attempt across all cloud platforms.",
      },
      {
        title: "Software Development Bootcamps",
        description:
          "Transform your non-technical staff or upskill junior developers with intensive, project-based coding bootcamps. We cover full-stack web development, mobile development, and backend engineering — using the exact frameworks and tools your organisation uses. All bootcamps are delivered by practising software engineers, not theoretical instructors.",
        icon: Code,
        features: [
          "Full-stack JavaScript (React, Node.js, TypeScript)",
          "Python for backend and automation",
          "Mobile development with React Native",
          "Git, version control and code review practices",
          "Agile methodology and Scrum for developers",
          "API design, REST, and database fundamentals",
        ],
        tools: ["React", "Node.js", "Python", "TypeScript", "Git"],
        outcome:
          "Junior developers reach production-ready confidence within 8–12 weeks of bootcamp.",
      },
      {
        title: "Data Analytics Training",
        description:
          "Data is only valuable if your team can understand and act on it. We train your analysts, managers, and executives in the full data analytics lifecycle — from data collection and cleaning through visualisation and insight communication. We cover tools like Power BI, Tableau, Python, and SQL in practical, business-focused contexts.",
        icon: BarChart3,
        features: [
          "SQL and database querying for analysts",
          "Power BI and Tableau dashboard creation",
          "Python for data analysis (pandas, matplotlib)",
          "Statistical thinking and data literacy",
          "Microsoft PL-300 and Google Data Analytics prep",
          "Data storytelling and executive reporting",
        ],
        tools: ["Power BI", "Tableau", "Python", "SQL", "Excel"],
        outcome:
          "Teams report 60% faster insight generation and reduced reliance on external data consultants.",
      },
      {
        title: "Digital Transformation Workshops",
        description:
          "Digital transformation is not a technology project — it's a people and culture change. Our intensive workshops equip leadership teams and change champions with the frameworks, tools, and mindset to lead digital initiatives effectively. We cover AI adoption, automation strategy, change management, and building digital-first cultures.",
        icon: Zap,
        features: [
          "Digital maturity assessment and roadmapping",
          "AI adoption frameworks for executives",
          "Change management and stakeholder engagement",
          "Process mapping and automation identification",
          "Digital product thinking and innovation methods",
          "Building data-driven decision cultures",
        ],
        tools: ["Design Thinking", "Lean", "Agile", "TOGAF"],
        outcome:
          "Leadership teams leave with a concrete 90-day digital transformation action plan.",
      },
      {
        title: "Leadership & IT Management",
        description:
          "Technical expertise alone doesn't make a great IT leader. We offer management-focused training that bridges the gap between technical knowledge and leadership capability. Covering IT governance, project management, team leadership, vendor management, and strategic planning — all mapped to globally recognised management frameworks.",
        icon: Building2,
        features: [
          "ITIL 4 Foundation certification preparation",
          "PMP and PRINCE2 project management",
          "IT governance and risk management",
          "Vendor and contract management",
          "Building and leading high-performance tech teams",
          "Technology budget planning and ROI justification",
        ],
        tools: ["ITIL", "PMP", "PRINCE2", "Scrum", "COBIT"],
        outcome:
          "Certified IT managers reduce project failure rates by 28% and improve team retention by 35%.",
      },
      {
        title: "DevOps & CI/CD Training",
        description:
          "DevOps is a culture, not just a toolset. We train your development and operations teams together to break down silos and build pipelines that deliver software faster, safer, and more reliably. From containerisation with Docker and Kubernetes to CI/CD pipelines with GitHub Actions and Jenkins, your team will learn by building real pipelines.",
        icon: Layers,
        features: [
          "Docker containerisation and orchestration",
          "Kubernetes cluster management (CKA prep)",
          "CI/CD pipeline design with GitHub Actions, Jenkins",
          "Infrastructure as Code with Terraform and Ansible",
          "Monitoring and observability (Prometheus, Grafana)",
          "Site reliability engineering (SRE) fundamentals",
        ],
        tools: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"],
        outcome:
          "Teams deploy 200% more frequently with 60% fewer production incidents after DevOps training.",
      },
      {
        title: "AI & Machine Learning Fundamentals",
        description:
          "AI literacy is becoming a core business competency. We train your technical teams in the foundations of machine learning, model evaluation, and AI implementation — and your non-technical staff in how to work with, prompt, and leverage AI tools effectively. From hands-on ML model building to responsible AI governance and ethics.",
        icon: BrainCircuit,
        features: [
          "Machine learning concepts and algorithms",
          "Python for ML (scikit-learn, TensorFlow, PyTorch)",
          "Prompt engineering for LLMs (GPT, Claude, Gemini)",
          "AWS ML Specialty and Google Professional ML Engineer prep",
          "AI ethics, bias detection, and responsible use",
          "Building AI-powered business applications",
        ],
        tools: ["Python", "TensorFlow", "AWS SageMaker", "OpenAI API", "Claude"],
        outcome:
          "Teams reduce repetitive AI-adjacent work by 40% through effective tool adoption within 30 days.",
      },
    ],
  },

  // ─── Outcomes ──────────────────────────────────────────────────────────────
  outcomes: [
    {
      title: "Dramatic Productivity Gains",
      description:
        "Trained employees execute tasks faster, with fewer errors and less supervision. Teams that complete structured technical training programmes consistently report 25–40% productivity improvements within 90 days. This compounds over time as skills are transferred peer-to-peer within the organisation.",
      metric: "25–40% productivity gain",
      icon: TrendingUp,
    },
    {
      title: "High Certification Pass Rates",
      description:
        "Our curriculum is purpose-built around exam objectives and real-world application. Across all certification tracks we deliver, our learners achieve an average first-attempt pass rate of 92% — far above the industry average of 65%. We stand behind our training with a pass guarantee on key programmes.",
      metric: "92% first-attempt pass rate",
      icon: Award,
    },
    {
      title: "Significant Cyber Risk Reduction",
      description:
        "Organisations that run regular security awareness training see phishing susceptibility drop by up to 90% within 12 months. A security-trained workforce is your first and most cost-effective line of defence against data breaches, ransomware, and social engineering attacks.",
      metric: "90% phishing reduction",
      icon: Shield,
    },
    {
      title: "Measurable ROI on Training Investment",
      description:
        "Every pound invested in structured employee training returns an average of £4.53 in productivity, reduced recruitment costs, lower error rates, and improved retention. Certifications also enable your team to take on higher-value work and reduce reliance on expensive external contractors.",
      metric: "£4.53 return per £1 spent",
      icon: CircleDollarSign,
    },
    {
      title: "Stronger Employee Retention",
      description:
        "Employees who receive regular professional development are 34% more likely to stay with their employer for 5+ years. Training signals investment in people, creating loyalty and engagement that reduces recruitment and onboarding costs — typically £15,000–£30,000 per technology hire.",
      metric: "34% higher retention rate",
      icon: UserCheck,
    },
    {
      title: "Faster Deployment of New Technologies",
      description:
        "When your team is trained before a new system goes live, adoption timelines shrink dramatically. Organisations that invest in pre-deployment training see new technology fully adopted in 6–8 weeks versus 6+ months for untrained rollouts. Fewer change failures, fewer help desk tickets, faster ROI on tech investments.",
      metric: "4x faster tech adoption",
      icon: Gauge,
    },
  ],
  outcomesDescription:
    "Training is not a cost — it is one of the highest-ROI investments your organisation can make. Here are the tangible outcomes our corporate training clients consistently achieve.",

  // ─── Case Studies ──────────────────────────────────────────────────────────
  caseStudies: {
    badge: "Case Studies",
    title: "Teaching From Real Infrastructure",
    description:
      "Practitioner-led programmes — the labs come from systems we build and operate ourselves, not slideware",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "mentorship", label: "Mentorship" },
      { key: "security", label: "Security Training" },
    ],
    items: [
      {
        icon: Users,
        title: "Product Management Mentorship Programme",
        client: "Volunteer-led · 100+ mentees",
        industry: "mentorship",
        challenge:
          "Junior product managers and career transitioners struggle to get senior guidance without paying for expensive bootcamps.",
        solution:
          "A volunteer-led product management mentorship programme with structured guidance, portfolio review, and career coaching — delivered at no cost to participants.",
        results: [
          "100+ junior product managers and career transitioners supported",
          "Structured mentorship with real product casework",
          "Ongoing programme — still running",
        ],
        tools: ["Mentorship framework", "Product casework", "Career coaching"],
      },
      {
        icon: BookOpen,
        title: "Hands-On Security Curriculum & Lab Environments",
        client: "Own teaching assets",
        industry: "security",
        challenge:
          "Most corporate security training is slideware — participants watch demos instead of building and breaking real systems.",
        solution:
          "We built a 37-module hands-on security curriculum backed by lab environments from our own working infrastructure: a Dockerized Splunk SOC, Suricata network defense, Active Directory attack labs, and hardened OS baselines.",
        results: [
          "37-module hands-on curriculum, built and verified",
          "Labs run on real infrastructure we operate ourselves, not slide examples",
          "The person teaching builds and runs these systems commercially",
        ],
        tools: ["Splunk", "Suricata", "Docker", "Active Directory labs"],
      },
    ],
  },

  // ─── Industries ────────────────────────────────────────────────────────────
  industries: [
    {
      name: "Financial Services & FinTech",
      description:
        "Cybersecurity, regulatory compliance training, cloud migration skills, and data governance for banks, insurers, and FinTech firms.",
      icon: CircleDollarSign,
      solutions: [
        "CompTIA Security+ for compliance teams",
        "Cloud architecture for financial workloads",
        "Data protection & GDPR training",
        "AI literacy for financial analysts",
      ],
    },
    {
      name: "Healthcare & Life Sciences",
      description:
        "Digital health training, data security, NHS systems, and clinical informatics for healthcare organisations navigating digital transformation.",
      icon: Shield,
      solutions: [
        "Cybersecurity for healthcare (IG Toolkit)",
        "Data analytics for clinical teams",
        "Digital health systems training",
        "GDPR and patient data compliance",
      ],
    },
    {
      name: "E-commerce & Retail",
      description:
        "Technical upskilling for retail tech teams — cloud infrastructure, data analytics, automation, and digital marketing technology.",
      icon: Globe,
      solutions: [
        "Cloud certification for engineering teams",
        "Data analytics for merchandising",
        "Automation and DevOps training",
        "AI for customer personalisation",
      ],
    },
    {
      name: "Government & Public Sector",
      description:
        "ITIL service management, cybersecurity awareness, cloud adoption, and project management for public sector IT teams.",
      icon: Building2,
      solutions: [
        "ITIL 4 Foundation for service desks",
        "Cyber Essentials preparation training",
        "Cloud adoption readiness training",
        "PMP and PRINCE2 for IT managers",
      ],
    },
    {
      name: "Professional Services",
      description:
        "AI literacy, data analytics, project management, and digital tool adoption for law firms, consultancies, and accountancy practices.",
      icon: Headphones,
      solutions: [
        "AI and automation literacy for advisors",
        "Data visualisation for client reporting",
        "Cybersecurity awareness training",
        "Digital transformation workshops",
      ],
    },
    {
      name: "Technology & SaaS",
      description:
        "Advanced technical training for engineering teams — DevOps, AI/ML, cloud architecture, and software development best practices.",
      icon: Zap,
      solutions: [
        "DevOps and SRE engineering bootcamps",
        "AI/ML engineering training",
        "AWS and GCP certification tracks",
        "Secure software development training",
      ],
    },
  ],

  // ─── Process ───────────────────────────────────────────────────────────────
  processSteps: [
    {
      step: "1",
      title: "Training Needs Assessment",
      duration: "Week 1",
      description:
        "We begin every engagement with a structured Training Needs Assessment (TNA). This involves interviewing key stakeholders, reviewing job roles and responsibilities, assessing current skill levels through diagnostic testing, identifying capability gaps versus business objectives, and understanding any regulatory or compliance training requirements. The output is a clear Skills Gap Report and Training Priority Matrix.",
      deliverables: [
        "Skills gap analysis report",
        "Role-based learning objectives",
        "Regulatory compliance checklist",
        "Training priority matrix",
      ],
    },
    {
      step: "2",
      title: "Curriculum Design & Programme Planning",
      duration: "Week 2",
      description:
        "Based on the TNA, we design a bespoke training curriculum tailored to your organisation, tools, and objectives. We select the optimal delivery format (live workshops, e-learning, bootcamp, blended), map content to certification frameworks where applicable, define assessment methods, set learning milestones, and create a detailed programme schedule that minimises disruption to your team's workload.",
      deliverables: [
        "Bespoke curriculum document",
        "Programme schedule and timetable",
        "Certification pathway mapping",
        "Assessment and evaluation plan",
      ],
    },
    {
      step: "3",
      title: "Training Delivery",
      duration: "Weeks 3–10",
      description:
        "Our expert trainers deliver the programme using a mix of interactive teaching, hands-on lab environments, real-world case studies, and peer collaboration exercises. We use spaced repetition and retrieval practice techniques that modern learning science shows dramatically improve knowledge retention. Progress is tracked throughout with formative assessments, and we adapt delivery pace based on cohort performance.",
      deliverables: [
        "Live training sessions (online or on-site)",
        "Hands-on lab access",
        "Session recordings and materials",
        "Weekly progress reports",
      ],
    },
    {
      step: "4",
      title: "Assessment, Certification & Follow-Up",
      duration: "Week 11+",
      description:
        "Training doesn't end at the last session. We administer final assessments, support learners through official certification exams, deliver completion certificates, and conduct a 30-day and 90-day follow-up to measure knowledge application and business impact. We also provide a post-programme report for your L&D records, HR compliance needs, and ROI measurement.",
      deliverables: [
        "Final assessment results",
        "Certification exam support and vouchers",
        "Post-programme impact report",
        "30/90-day follow-up coaching",
      ],
    },
  ],

  // ─── Pricing ───────────────────────────────────────────────────────────────
  pricing: [
    {
      name: "Team Essentials",
      description:
        "For teams of up to 10 wanting focused upskilling in one technical domain or certification track.",
      price: "£2,500",
      features: [
        "Up to 10 participants",
        "1 training track or certification programme",
        "20 hours of live instructor-led training",
        "Hands-on lab environment access",
        "Training materials and resources",
        "Pre and post assessment",
        "Email support during programme",
        "Programme completion certificates",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional Cohort",
      description:
        "Comprehensive multi-track training for teams of up to 25. Ideal for department-wide upskilling or transformation projects.",
      price: "£7,500",
      features: [
        "Up to 25 participants",
        "Up to 3 training tracks or certification paths",
        "60 hours of live instructor-led training",
        "Full hands-on lab environment",
        "Bespoke curriculum design",
        "Training Needs Assessment included",
        "Priority support (same-day response)",
        "Certification exam vouchers (1 per participant)",
        "30-day follow-up coaching sessions",
        "Post-programme ROI impact report",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise Learning",
      description:
        "Full-scale learning and development partnerships for large organisations with complex, multi-department training requirements.",
      price: "Custom",
      features: [
        "Unlimited participants",
        "Unlimited training tracks and programmes",
        "Dedicated training account manager",
        "Annual Training Needs Assessment",
        "Custom LMS integration and content hosting",
        "Certification exam vouchers for all participants",
        "On-site and remote delivery options",
        "Compliance reporting for L&D records",
        "Quarterly L&D strategy reviews",
        "SLA-backed delivery guarantee",
      ],
      popular: false,
      cta: "Get Started",
    },
  ],

  // ─── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "What types of organisations do you deliver corporate training for?",
      answer:
        "We work with organisations of all sizes — from 10-person startups to enterprise teams of 1,000+. Our clients span financial services, healthcare, retail, government, SaaS, and professional services. We've delivered training for single departments (e.g., a marketing team learning data analytics) and company-wide programmes (e.g., a 200-person cybersecurity awareness rollout). If your team uses technology and needs to develop their skills, we can help.",
    },
    {
      question: "How do you ensure training is relevant to our specific tools and workflows?",
      answer:
        "Every programme begins with a Training Needs Assessment where we understand your tech stack, business objectives, team skill levels, and real-world challenges. We then design curriculum around your actual tools — not generic examples. If you use AWS, our cloud training uses AWS. If your team uses Power BI, our data training uses Power BI. You won't see your team practising on tools they'll never use at work.",
    },
    {
      question:
        "Can you prepare our team for official certifications like AWS, CompTIA, or ITIL?",
      answer:
        "Absolutely. Certification preparation is one of our core specialities. We offer preparation programmes for AWS (Cloud Practitioner, Solutions Architect, SysOps, Developer, DevOps Engineer, ML Specialty), Microsoft Azure (AZ-900, AZ-104, AZ-305), Google Cloud (ACE, Professional Cloud Architect), CompTIA (Security+, Network+, A+, CySA+), CISSP, CEH, ITIL 4, PMP, PRINCE2, Kubernetes (CKA, CKAD), and Docker. Our average first-attempt pass rate is 92%.",
    },
    {
      question: "Do you offer online, on-site, or blended training delivery?",
      answer:
        "We offer all three formats. Live online training via video conferencing with interactive labs and breakout sessions is ideal for distributed or remote teams. On-site delivery is available for organisations who prefer in-person learning — we travel to your location. Blended programmes combine both, typically with live online sessions for content delivery and on-site workshops for hands-on application and assessment. We recommend the format based on your team's learning preferences and the nature of the programme.",
    },
    {
      question: "How long does a typical training programme last?",
      answer:
        "Duration varies by programme type and depth. Intensive workshops for awareness or digital transformation can be 1–3 days. Certification preparation programmes typically run 4–10 weeks of structured learning (2–4 hours per week of instructor-led time plus self-study). Comprehensive bootcamps for software development or DevOps run 8–12 weeks. We work with your operational constraints to design a schedule that delivers the learning without disrupting your team's core responsibilities.",
    },
    {
      question: "How do you measure the effectiveness of training?",
      answer:
        "We use a multi-level evaluation model. Level 1: Learner satisfaction surveys during and after training. Level 2: Knowledge assessments comparing pre and post-training competency. Level 3: Behavioural observation — are learners applying what they learned? Level 4: Business impact measurement at 30 and 90 days (e.g., productivity metrics, error rates, certification pass rates, security incident frequency). We deliver a full post-programme impact report for all Professional and Enterprise programmes.",
    },
    {
      question: "What certification exam support do you provide?",
      answer:
        "For Professional and Enterprise programmes, we include certification exam vouchers. We also provide exam booking guidance, exam-day strategies, practice exam access with performance analysis, and a pre-exam coaching session. If a learner doesn't pass on the first attempt (rare — our pass rate is 92%), we offer additional coaching support to prepare for the retake. Your success is our success.",
    },
    {
      question: "Can you train a team with a mix of skill levels?",
      answer:
        "Yes. We regularly deliver training to mixed-ability cohorts. We conduct pre-training diagnostic assessments to map each learner's starting point, then deliver content in layered tracks where more advanced learners extend into deeper material while newer learners consolidate foundations. We also offer separate streams within the same cohort — for example, running AWS Cloud Practitioner and Solutions Architect simultaneously for different segments of the same engineering team.",
    },
    {
      question: "Do you provide training materials and resources after the programme ends?",
      answer:
        "Yes. All participants receive comprehensive training materials including slide decks, lab guides, reference documentation, practice exercises, and curated external resources. For Professional and Enterprise programmes, we also provide recorded session replays, a private resource portal for 6 months post-programme, and access to our trainer team for follow-up questions during the maintenance period. Learning doesn't stop on the last training day.",
    },
    {
      question: "How do we get started and what's the typical lead time?",
      answer:
        "Getting started is simple. Contact us via the form below or book a free consultation call. We'll conduct a 45-minute discovery session to understand your needs, then deliver a programme proposal within 48 hours. Standard programmes can typically start within 2–3 weeks of proposal sign-off. For large-scale enterprise programmes, we recommend 4–6 weeks lead time to allow for full curriculum design and scheduling coordination.",
    },
  ],

  // ─── Contact / CTA ─────────────────────────────────────────────────────────
  contact: {
    ctaTitle: "Ready to Invest in Your Team's Future?",
    ctaDescription:
      "Let's discuss how a bespoke training programme can close your skills gap, earn your team their certifications, and drive measurable productivity and retention outcomes. Book a free consultation today.",
    ctaDisclaimer:
      "Free Training Needs Assessment included. No commitment required. Results guaranteed.",
  },
}

/**
 * Training service page — rendered via the shared ServicePageTemplate.
 * All content and theming are defined in the `config` object above.
 * Metadata is handled by the sibling layout.tsx.
 */
export default function TrainingPage() {
  return <ServicePageTemplate config={config} />
}
