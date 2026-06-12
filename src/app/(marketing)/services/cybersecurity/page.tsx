"use client"

import {
  Shield,
  Eye,
  FileText,
  Users,
  TrendingUp,
  Target,
  Network,
  Cloud,
  Server,
  Zap,
  Clock,
  Bug,
  Search,
  Layers,
  ShieldCheck,
  ShieldAlert,
  MonitorDot,
  BookOpen,
  Building2,
  HeartPulse,
  Receipt,
  Gauge,
  CircleDollarSign,
  Globe,
  CheckCircle,
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
    badge: "Cybersecurity Services",
    title: "Protect Your Business Before Attackers Do",
    subtitle:
      "From penetration testing and compliance audits to 24/7 managed SOC and incident response -- we deliver comprehensive cybersecurity that keeps your data safe, your customers protected, and your business compliant.",
    description:
      "Covering NIST, ISO 27001, OWASP, CIS Controls, and more -- for businesses that take security seriously.",
    ctaText: "Get a Security Assessment",
    ctaLink: "/start",
    secondaryCtaText: "View Services",
    secondaryCtaLink: "#services",
  },

  benefits: [
    {
      title: "Prevent Breaches",
      metric: "85% fewer incidents",
      icon: Shield,
    },
    {
      title: "Achieve Compliance",
      metric: "100% audit pass rate",
      icon: CheckCircle,
    },
    {
      title: "Detect Fast",
      metric: "15-min MTTD",
      icon: Clock,
    },
    {
      title: "Protect Revenue",
      metric: "10-30x ROI proven",
      icon: TrendingUp,
    },
  ],

  whatIs: {
    badge: "Understanding Cybersecurity",
    title: "What Is Enterprise Cybersecurity?",
    description:
      "Cybersecurity is the systematic practice of protecting your systems, networks, data, and people from digital attacks, unauthorised access, and operational disruption. For modern businesses, it is not optional infrastructure -- it is the foundation upon which trust, revenue, and growth depend.",
    items: [
      {
        title: "Proactive Threat Prevention",
        description:
          "Cybersecurity is not just about reacting to breaches -- it's about systematically preventing them before they happen. Modern threats are sophisticated, persistent, and targeted. Our proactive approach combines threat intelligence, vulnerability management, and security hardening to dramatically reduce your attack surface. We identify weaknesses in your systems before adversaries do and close them permanently.",
        icon: ShieldAlert,
      },
      {
        title: "Regulatory Compliance & Governance",
        description:
          "Businesses today face an increasingly complex landscape of regulatory requirements -- GDPR, ISO 27001, PCI DSS, SOC 2, Cyber Essentials, and more. Non-compliance exposes you to fines, litigation, and reputational damage. We map your security controls to the specific frameworks your business must adhere to, identify gaps, implement remediation, and prepare you for audits with confidence.",
        icon: FileText,
      },
      {
        title: "People, Process, and Technology",
        description:
          "Effective cybersecurity is not just a technology problem -- it's an organisational discipline. The majority of breaches involve human error, weak processes, or misconfigured systems. We address all three layers: implementing technical controls across your infrastructure, building robust security processes and policies, and training your people to recognise and respond to threats like phishing, social engineering, and insider risks.",
        icon: Users,
      },
      {
        title: "Continuous Monitoring & Response",
        description:
          "Threats don't follow business hours. Attackers operate 24/7, and the average time to detect a breach is still over 200 days. Our continuous monitoring capabilities -- through Security Operations Centre (SOC) services, SIEM platforms, and threat intelligence feeds -- ensure that when anomalies occur, your team is alerted in real time and has a tested incident response plan ready to execute.",
        icon: Network,
      },
    ],
    stats: {
      title: "The Cybersecurity Threat Reality",
      items: [
        {
          value: "£3.4M",
          description:
            "average cost of a data breach in the UK in 2024, up 10% year-over-year",
        },
        {
          value: "207 days",
          description:
            "average time to identify a breach without continuous monitoring in place",
        },
        {
          value: "90%",
          description:
            "of successful breaches involve a human element -- phishing, error, or stolen credentials",
        },
      ],
    },
  },

  techStack: {
    badge: "Tools & Frameworks",
    title: "Security Tools & Frameworks We Use",
    description:
      "We work with industry-leading security frameworks, compliance standards, and specialist tools to deliver assessments and protections that meet real-world threat conditions",
    categories: ["all", "framework", "compliance", "pentest", "soc", "appsec"],
    items: [
      {
        name: "NIST Cybersecurity Framework",
        description:
          "The gold-standard framework for managing and reducing cybersecurity risk across critical infrastructure and enterprise environments.",
        icon: ShieldCheck,
        category: "framework",
        features: [
          "Identify, Protect, Detect",
          "Respond & Recover",
          "Risk management",
          "Continuous improvement",
        ],
      },
      {
        name: "ISO 27001",
        description:
          "International standard for establishing, implementing, and certifying an Information Security Management System (ISMS).",
        icon: FileText,
        category: "compliance",
        features: [
          "ISMS implementation",
          "Certification pathway",
          "Risk treatment plans",
          "Audit readiness",
        ],
      },
      {
        name: "CIS Controls",
        description:
          "Prioritised set of actions that collectively form a defence-in-depth approach to cybersecurity best practices.",
        icon: Layers,
        category: "framework",
        features: [
          "18 core controls",
          "Implementation groups",
          "Asset management",
          "Access control",
        ],
      },
      {
        name: "OWASP",
        description:
          "Open-source application security standards used globally to identify and mitigate web application vulnerabilities.",
        icon: Bug,
        category: "appsec",
        features: [
          "OWASP Top 10",
          "Testing guide",
          "Code review",
          "Secure SDLC",
        ],
      },
      {
        name: "Burp Suite",
        description:
          "Industry-leading platform for web application security testing, used by professional penetration testers worldwide.",
        icon: Search,
        category: "pentest",
        features: [
          "Intercepting proxy",
          "Scanner",
          "Intruder & Repeater",
          "Custom extensions",
        ],
      },
      {
        name: "Nessus / Tenable",
        description:
          "Comprehensive vulnerability scanner trusted by over 30,000 organisations to identify misconfigurations and security gaps.",
        icon: Eye,
        category: "pentest",
        features: [
          "70,000+ plugins",
          "Compliance checks",
          "Continuous assessment",
          "Priority reporting",
        ],
      },
      {
        name: "Splunk / SIEM",
        description:
          "Enterprise security information and event management platform for real-time threat detection and incident investigation.",
        icon: MonitorDot,
        category: "soc",
        features: [
          "Log aggregation",
          "Real-time alerting",
          "Threat hunting",
          "Compliance reporting",
        ],
      },
      {
        name: "Wazuh",
        description:
          "Open-source security platform combining XDR and SIEM capabilities for endpoint detection, response, and compliance.",
        icon: Shield,
        category: "soc",
        features: [
          "Endpoint monitoring",
          "File integrity",
          "Threat intelligence",
          "Regulatory compliance",
        ],
      },
    ],
  },

  services: {
    badge: "Our Services",
    title: "Comprehensive Cybersecurity Services",
    description:
      "From proactive threat identification to regulatory compliance, incident response, and continuous monitoring -- our end-to-end security services protect every layer of your business",
    items: [
      {
        title: "Penetration Testing",
        description:
          "Our certified ethical hackers simulate real-world cyberattacks against your network, systems, and applications to identify vulnerabilities before malicious actors do. We don't just run automated scans -- we apply manual, creative attack techniques that replicate what a skilled threat actor would actually do. Every engagement ends with a detailed report prioritised by exploitability and business risk.",
        icon: Target,
        features: [
          "External & internal network penetration testing",
          "Web and mobile application security testing",
          "Social engineering and phishing simulations",
          "Wireless network security assessment",
          "Red team adversarial attack simulations",
          "Post-engagement remediation verification",
        ],
        tools: ["Burp Suite", "Metasploit", "Nmap", "OWASP"],
        outcome:
          "Identify and remediate critical vulnerabilities before attackers exploit them. Average clients reduce critical CVEs by 85%.",
      },
      {
        title: "Vulnerability Assessment",
        description:
          "A structured, systematic scan and analysis of your entire IT estate to identify, classify, and prioritise security vulnerabilities. Unlike penetration testing, vulnerability assessments provide a comprehensive baseline across all your assets -- servers, endpoints, cloud resources, and network devices -- and are designed to run continuously so you always know your current security posture.",
        icon: Search,
        features: [
          "Authenticated and unauthenticated scanning",
          "Cloud infrastructure vulnerability assessment",
          "Container and Kubernetes security scanning",
          "Database and application layer assessment",
          "Risk-prioritised remediation roadmap",
          "Continuous monitoring with monthly reporting",
        ],
        tools: ["Nessus", "Qualys", "OpenVAS", "Trivy"],
        outcome:
          "Gain a complete, risk-prioritised view of your vulnerability landscape and reduce mean time to remediate by 60%.",
      },
      {
        title: "Security Audits & Compliance",
        description:
          "Comprehensive security audits that evaluate your controls, policies, and procedures against leading frameworks including ISO 27001, NIST CSF, CIS Controls, PCI DSS, and GDPR. We identify compliance gaps, quantify risk exposure, and build a detailed remediation roadmap that takes you from your current state to audit-ready with minimal disruption to operations.",
        icon: ShieldCheck,
        features: [
          "ISO 27001 gap analysis and ISMS implementation",
          "SOC 2 Type I and Type II readiness assessment",
          "PCI DSS compliance audit and remediation",
          "GDPR data protection impact assessments",
          "Cyber Essentials and Cyber Essentials Plus",
          "Policy and procedure development",
        ],
        tools: ["NIST CSF", "ISO 27001", "CIS Controls", "PCI DSS"],
        outcome:
          "Achieve and maintain regulatory compliance, avoid costly fines, and demonstrate security maturity to customers and partners.",
      },
      {
        title: "Incident Response",
        description:
          "When a breach occurs, every minute counts. Our incident response team provides rapid containment, forensic investigation, and structured recovery to minimise damage and downtime. We work with your team to identify the root cause, preserve evidence for legal proceedings if required, eradicate the threat, and restore operations securely. We also help you build an incident response plan before you need it.",
        icon: Zap,
        features: [
          "24/7 emergency incident response retainer",
          "Digital forensics and evidence preservation",
          "Breach containment and threat eradication",
          "Business continuity and recovery planning",
          "Root cause analysis and lessons learned",
          "Incident response plan (IRP) development",
        ],
        tools: ["Volatility", "Autopsy", "Splunk", "Wazuh"],
        outcome:
          "Reduce breach impact and recovery time by 70%. Average containment achieved within 4 hours of engagement.",
      },
      {
        title: "Security Operations (SOC)",
        description:
          "Not every business can afford a full-time in-house security operations team. Our managed SOC service provides enterprise-grade continuous monitoring, threat detection, and response without the cost and complexity of building it yourself. We deploy SIEM technology, tune detection rules to your environment, and staff experienced analysts who investigate and respond to alerts on your behalf.",
        icon: MonitorDot,
        features: [
          "24/7 log monitoring and threat detection",
          "SIEM deployment, tuning and management",
          "Threat hunting and anomaly investigation",
          "Automated alerting and escalation playbooks",
          "Monthly security posture reports",
          "Threat intelligence integration",
        ],
        tools: ["Splunk", "Wazuh", "Microsoft Sentinel", "Elastic SIEM"],
        outcome:
          "Detect threats 10x faster than a reactive model. Mean time to detect (MTTD) reduced to under 15 minutes.",
      },
      {
        title: "Cloud Security",
        description:
          "Cloud environments introduce unique security challenges -- misconfigured storage buckets, overly permissive IAM roles, exposed APIs, and insufficient logging are consistently among the top causes of cloud breaches. We assess and harden your cloud environments across AWS, Azure, and GCP, implementing security baselines, identity governance, data protection controls, and continuous cloud security posture management.",
        icon: Cloud,
        features: [
          "Cloud security posture management (CSPM)",
          "IAM and privilege access management review",
          "S3/Blob storage and data exposure assessment",
          "Network security group and firewall auditing",
          "DevSecOps pipeline security integration",
          "Multi-cloud security architecture design",
        ],
        tools: ["AWS Security Hub", "Azure Defender", "Prisma Cloud", "Checkov"],
        outcome:
          "Eliminate cloud misconfigurations that account for 82% of cloud data breaches and enforce least-privilege access.",
      },
      {
        title: "Application Security (AppSec)",
        description:
          "Security must be built into your applications from the ground up, not bolted on at the end. We provide application security reviews at every stage of the development lifecycle -- from threat modelling in design, to secure code review during development, to dynamic testing before release. We also integrate automated security testing into your CI/CD pipeline so every deployment is checked for vulnerabilities.",
        icon: Bug,
        features: [
          "Threat modelling and security architecture review",
          "Secure code review (manual and automated)",
          "OWASP Top 10 vulnerability assessment",
          "API security testing and authentication review",
          "SAST/DAST integration into CI/CD pipelines",
          "Software supply chain and dependency scanning",
        ],
        tools: ["Burp Suite", "SonarQube", "Snyk", "OWASP ZAP"],
        outcome:
          "Shift security left and catch 90% of vulnerabilities before production deployment, reducing remediation cost by 6x.",
      },
      {
        title: "Security Awareness Training",
        description:
          "Your people are both your greatest asset and your biggest security risk. Over 90% of successful cyberattacks begin with a human element -- phishing, pretexting, credential theft, or insider negligence. We deliver engaging, practical security awareness programmes that change real behaviour: simulated phishing campaigns, role-based training modules, and executive briefings that make security personal and relevant.",
        icon: BookOpen,
        features: [
          "Tailored phishing simulation campaigns",
          "Role-based security awareness modules",
          "Executive and board cybersecurity briefings",
          "Security culture assessment and benchmarking",
          "Ongoing micro-learning and reinforcement",
          "Compliance training (GDPR, PCI, ISO)",
        ],
        tools: ["KnowBe4", "Proofpoint", "Custom LMS", "GoPhish"],
        outcome:
          "Reduce phishing click rates by 85% within 90 days and build a culture where security is everyone's responsibility.",
      },
    ],
  },

  outcomes: [
    {
      title: "Breach Prevention",
      description:
        "Proactive penetration testing and vulnerability management identifies and closes attack paths before threat actors exploit them. Our clients experience 85% fewer security incidents compared to the industry average for organisations of comparable size.",
      metric: "85% fewer incidents",
      icon: Shield,
    },
    {
      title: "Compliance Achieved",
      description:
        "We have guided over 40 organisations to regulatory certification including ISO 27001, SOC 2, PCI DSS, and Cyber Essentials. Our structured approach delivers certification faster and with fewer findings than self-managed programmes.",
      metric: "100% audit pass rate",
      icon: CheckCircle,
    },
    {
      title: "Rapid Threat Detection",
      description:
        "Our managed SOC service reduces mean time to detect (MTTD) from the industry average of 207 days down to under 15 minutes. Early detection is the single most effective way to limit breach impact and recovery cost.",
      metric: "15-min MTTD",
      icon: Gauge,
    },
    {
      title: "Reduced Attack Surface",
      description:
        "Through systematic vulnerability assessment and remediation programmes, clients typically reduce their critical vulnerability count by 90% within 90 days. Fewer vulnerabilities mean fewer pathways for attackers to exploit.",
      metric: "90% CVE reduction",
      icon: TrendingUp,
    },
    {
      title: "Protected Revenue",
      description:
        "The average cost of a data breach in the UK is £3.4M. Our security programmes are typically priced at 0.5-2% of that exposure, delivering documented ROI of 10-30x through breach prevention, compliance fines avoided, and business continuity maintained.",
      metric: "10-30x ROI",
      icon: CircleDollarSign,
    },
    {
      title: "Faster Response",
      description:
        "With a tested incident response plan and retainer in place, our clients achieve containment in under 4 hours on average compared to the industry average of 73 days for full containment. Speed of response is the most critical factor in limiting breach damage.",
      metric: "4-hr containment",
      icon: Clock,
    },
  ],
  outcomesDescription:
    "Cybersecurity is not just about risk reduction -- it's a business enabler. Here are the tangible outcomes our clients achieve through a structured, professional security programme.",

  caseStudies: {
    badge: "Case Studies",
    title: "Security Work, Provable Outcomes",
    description:
      "Real security engagements and the practitioner infrastructure behind them — evidence-first, severity-coded, audit-ready",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "cloud", label: "Cloud Security" },
      { key: "secops", label: "Security Operations" },
      { key: "healthcare", label: "Regulated / Healthcare" },
    ],
    items: [
      {
        icon: Cloud,
        title: "Cloud Security Audit Automation",
        client: "Internal tooling · Deployable for clients",
        industry: "cloud",
        challenge:
          "Manual AWS posture reviews take days, are inconsistent between reviewers, and the evidence rarely survives contact with an auditor.",
        solution:
          "We built automated AWS posture review tooling: Terraform-driven inventory plus Python/boto3 audit scripts that sweep IAM, storage, network, and logging configurations and write straight into our severity-coded findings register format.",
        results: [
          "A day of manual cloud review compressed into minutes",
          "Findings land directly in the C/H/M/L register format auditors can use",
          "Repeatable on demand — re-run after every remediation",
        ],
        tools: ["AWS", "Terraform", "Python", "boto3"],
      },
      {
        icon: MonitorDot,
        title: "Dockerized SOC Environment",
        client: "Internal infrastructure · Practitioner lab",
        industry: "secops",
        challenge:
          "Security consulting that has never run a SOC is checkbox consulting — we wanted detection engineering practice on infrastructure we own and break ourselves.",
        solution:
          "We built and operate a Dockerized Splunk SOC simulating a financial-services environment — log ingestion, custom detections, a ticketing workflow, and mail capture — plus a Suricata network-defense sensor with custom rules and hardened Linux, Windows, and macOS baselines.",
        results: [
          "Live Splunk SOC environment with custom detection content",
          "Suricata IDS with hand-written rules, Docker-verified",
          "The person assessing your controls builds and breaks these systems for real",
        ],
        tools: ["Splunk", "Suricata", "Docker", "Linux/Windows/macOS hardening"],
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

  industries: [
    {
      name: "Financial Services",
      description:
        "Banks, insurers, and fintech companies face the highest volume of targeted attacks and the most stringent regulatory requirements including FCA, PRA, PCI DSS, and DORA.",
      icon: Receipt,
      solutions: [
        "PCI DSS compliance",
        "Fraud prevention controls",
        "DORA resilience testing",
        "Privileged access management",
      ],
    },
    {
      name: "Healthcare & Life Sciences",
      description:
        "Patient data and critical medical systems make healthcare a prime target. We secure clinical environments, ensure data protection compliance, and protect connected medical devices.",
      icon: HeartPulse,
      solutions: [
        "NHS DSP Toolkit compliance",
        "HL7/FHIR API security",
        "Medical device security",
        "HIPAA alignment",
      ],
    },
    {
      name: "SaaS & Technology",
      description:
        "Software companies must secure multi-tenant environments, protect customer data, and meet enterprise buyer security requirements including SOC 2 and ISO 27001.",
      icon: Cloud,
      solutions: [
        "SOC 2 Type II certification",
        "Multi-tenant isolation",
        "DevSecOps integration",
        "Vendor risk management",
      ],
    },
    {
      name: "E-commerce & Retail",
      description:
        "Payment data, customer PII, and supply chain integrations create a broad attack surface. We protect the entire transaction lifecycle from storefront to fulfilment.",
      icon: Globe,
      solutions: [
        "PCI DSS Level 1-4",
        "Fraud detection controls",
        "Third-party API security",
        "DDoS protection",
      ],
    },
    {
      name: "Professional Services",
      description:
        "Law firms, accountancies, and consultancies hold highly sensitive client data that makes them high-value targets for ransomware and business email compromise.",
      icon: Building2,
      solutions: [
        "BEC prevention training",
        "Client data protection",
        "ISO 27001 certification",
        "Ransomware resilience",
      ],
    },
    {
      name: "Critical Infrastructure",
      description:
        "Energy, utilities, and manufacturing organisations face state-sponsored threats and must secure both IT and operational technology (OT) environments under NIS2 regulation.",
      icon: Server,
      solutions: [
        "NIS2 compliance",
        "OT/ICS security assessment",
        "Supply chain risk",
        "Business continuity testing",
      ],
    },
  ],

  processSteps: [
    {
      step: "1",
      title: "Assessment & Discovery",
      duration: "Week 1-2",
      description:
        "We begin every engagement with a structured discovery phase. This includes scoping your environment (assets, users, data flows, integrations), reviewing existing security controls and documentation, conducting stakeholder interviews, and performing initial risk identification. The output is a comprehensive Security Assessment Report that tells you exactly where you stand today -- your assets, your risks, and your compliance gaps -- before a single recommendation is made.",
      deliverables: [
        "Asset and data flow mapping",
        "Current controls documentation",
        "Initial risk register",
        "Compliance gap summary",
      ],
    },
    {
      step: "2",
      title: "Strategy & Architecture",
      duration: "Week 2-3",
      description:
        "Based on our findings, we design a security strategy tailored to your business risk profile, regulatory obligations, and budget. This is not a generic framework copy-paste -- it's a prioritised, time-phased security roadmap that addresses your highest risks first, aligns with your business objectives, and lays out exactly what controls will be implemented, when, and at what cost. We present this to your leadership team and refine it based on your input.",
      deliverables: [
        "Security strategy document",
        "Prioritised remediation roadmap",
        "Architecture recommendations",
        "Budget and timeline plan",
      ],
    },
    {
      step: "3",
      title: "Implementation & Hardening",
      duration: "Weeks 3-10",
      description:
        "Our engineers implement the agreed security controls across your environment -- hardening configurations, deploying monitoring tools, implementing access controls, remediating vulnerabilities, and integrating security into your development pipeline. Every change is documented, tested, and validated before being signed off. For compliance programmes, we build and document the policies, procedures, and evidence needed for audit.",
      deliverables: [
        "Security controls implemented",
        "Configuration hardening applied",
        "Monitoring and alerting live",
        "Policy and procedure documentation",
      ],
    },
    {
      step: "4",
      title: "Monitoring & Response",
      duration: "Ongoing",
      description:
        "Security is not a project -- it's an ongoing programme. After implementation, we provide continuous monitoring through our managed SOC service, regular vulnerability scanning, quarterly security reviews, and an annual penetration test. We also conduct tabletop exercises to test your incident response plan, update your controls as threats evolve, and provide regular board-level reporting so leadership always understands your security posture.",
      deliverables: [
        "24/7 SOC monitoring",
        "Quarterly security reviews",
        "Annual penetration test",
        "Board-level security reporting",
      ],
    },
  ],


  pricing: [
    {
      name: "Essential",
      description:
        "Ideal for small businesses and startups that need a security baseline, vulnerability assessment, and compliance foundation.",
      price: "$2,500",
      features: [
        "External vulnerability assessment",
        "Security baseline review",
        "Risk register (initial)",
        "Security policy starter pack",
        "Phishing simulation (1 campaign)",
        "Staff security awareness training",
        "Remediation report with priorities",
        "Email support (48-hr response)",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      description:
        "Comprehensive security programme for growing businesses handling sensitive data or pursuing compliance certification.",
      price: "$7,500",
      features: [
        "Full penetration test (external & internal)",
        "Web application security assessment",
        "ISO 27001 or SOC 2 readiness audit",
        "SIEM deployment and 3-month monitoring",
        "Incident response plan development",
        "Quarterly phishing simulation campaigns",
        "Role-based security awareness training",
        "Monthly security posture reporting",
        "Priority support (4-hr response)",
        "Remediation verification re-test",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      description:
        "Full-spectrum, continuous cybersecurity for organisations with complex environments, strict compliance needs, or critical data.",
      price: "Custom",
      features: [
        "Annual penetration test programme",
        "24/7 managed SOC service",
        "Cloud security posture management",
        "ISO 27001 / SOC 2 certification support",
        "DevSecOps pipeline integration",
        "Incident response retainer (24/7)",
        "Ongoing vulnerability management",
        "Dedicated security engineer",
        "Board-level security reporting",
        "Tabletop exercises & DR testing",
        "SLA guarantee (4-hr critical response)",
      ],
      popular: false,
      cta: "Get Started",
    },
  ],

  faqs: [
    {
      question:
        "What is the difference between a vulnerability assessment and a penetration test?",
      answer:
        "A vulnerability assessment is a systematic, automated scan that identifies and catalogues known vulnerabilities across your systems -- it tells you what could be exploited. A penetration test goes further: our ethical hackers manually attempt to actually exploit identified weaknesses, chain multiple vulnerabilities together, and demonstrate the real-world business impact of a successful attack. Assessments are broader and faster; penetration tests are deeper and more definitive. Most businesses benefit from regular vulnerability assessments (quarterly) plus an annual penetration test.",
    },
    {
      question: "How long does a penetration test take?",
      answer:
        "Timeline depends on scope. A focused external network penetration test typically takes 3-5 days of active testing plus 2-3 days for report writing. A comprehensive engagement covering external network, internal network, and web applications may take 2-3 weeks. A full red team exercise simulating a sustained, multi-vector attack could run for 4-6 weeks. We scope precisely based on your environment size, number of targets, and objectives -- so you know exactly what you're getting before we start.",
    },
    {
      question: "What is ISO 27001 and does my business need it?",
      answer:
        "ISO 27001 is the international standard for Information Security Management Systems (ISMS). Achieving certification demonstrates that your organisation has implemented a systematic, risk-based approach to protecting information assets. You likely need it if: enterprise customers require it as a procurement condition (increasingly common), you're tendering for government contracts, you handle sensitive personal or financial data, or you want to demonstrate security maturity to investors. Even without formal certification, implementing the standard significantly strengthens your security posture.",
    },
    {
      question:
        "What happens if you find something critical during a penetration test?",
      answer:
        "Critical findings are communicated immediately -- we don't wait for the final report. If we discover a high-severity vulnerability during an engagement, we call your designated contact straight away and provide emergency guidance on containment or temporary mitigation. The full written report, delivered within 5 business days of testing completion, includes a detailed description, proof of concept, business impact, and step-by-step remediation instructions for every finding, prioritised by risk. We also include a re-test to verify that critical and high findings are resolved.",
    },
    {
      question: "What is a managed SOC and do I need one?",
      answer:
        "A managed Security Operations Centre (SOC) is an outsourced team of security analysts who monitor your environment 24/7 for threats, investigate alerts, and respond to incidents. You need one if: you cannot build and staff an internal security team, you have compliance obligations requiring continuous monitoring, or you've experienced a security incident and need ongoing protection. Our managed SOC deploys SIEM technology across your environment, tunes detection rules to reduce false positives, and provides experienced analysts who actually investigate and respond -- not just alerts.",
    },
    {
      question: "Can you help us respond to an active cyberattack?",
      answer:
        "Yes -- we offer emergency incident response services. If you're experiencing an active breach, ransomware infection, BEC attack, or data exfiltration event, contact us immediately. Our incident response team will work with you to contain the threat, preserve evidence, investigate root cause, eradicate the attacker's presence, and restore operations securely. Organisations with an existing incident response retainer receive priority response within 2 hours. For new clients, we aim to be engaged within 4 hours of initial contact.",
    },
    {
      question:
        "How do you approach cloud security differently from on-premises?",
      answer:
        "Cloud environments require a fundamentally different security approach. The shared responsibility model means your cloud provider secures the infrastructure, but you are responsible for everything above it -- your data, identities, applications, and configurations. Misconfigurations, not sophisticated attacks, are the leading cause of cloud breaches. We approach cloud security through CSPM (continuous configuration assessment), identity and access management hardening, data classification and encryption, network security controls, and integrating security into your infrastructure-as-code so misconfigurations are caught before deployment.",
    },
    {
      question: "What does security awareness training actually achieve?",
      answer:
        "When done right, security awareness training delivers measurable, lasting behavioural change -- not just a tick-box compliance exercise. The evidence is clear: organisations running regular simulated phishing campaigns and role-based training reduce click rates by 70-90% within 12 months. More importantly, they reduce the frequency and severity of human-factor incidents including BEC, credential phishing, and accidental data exposure. Our programme includes baseline measurement, regular simulations, targeted follow-up training for repeat clickers, and a security champions network to sustain culture between formal training cycles.",
    },
    {
      question:
        "How do you ensure your team stays up to date with evolving threats?",
      answer:
        "The threat landscape evolves continuously -- new CVEs, novel attack techniques, and new threat actor tooling emerge every week. Our team holds current certifications including OSCP, CEH, CISM, ISO 27001 Lead Auditor, and AWS Security Specialty. We maintain active memberships with CREST, CIISec, and OWASP. All team members complete 40+ hours of continuing professional development annually, conduct internal research into emerging threats, participate in CTF competitions, and subscribe to threat intelligence feeds that directly inform our client work.",
    },
    {
      question:
        "What is your approach to data protection and confidentiality during engagements?",
      answer:
        "Every engagement begins with a signed Non-Disclosure Agreement and scope of work that legally defines what we may and may not access. During penetration tests, all activities are logged with timestamps for your records. Any sensitive data we encounter is treated with strict confidentiality -- we do not retain client data beyond the engagement period. Our deliverables are encrypted in transit and at rest. For particularly sensitive environments (e.g., financial records, patient data), we can conduct testing through a dedicated, air-gapped environment. We are fully GDPR-compliant in our own data handling practices.",
    },
  ],

  contact: {
    ctaTitle: "Ready to Secure Your Business?",
    ctaDescription:
      "Don't wait for an incident to take security seriously. Book a free consultation and we'll assess your current security posture, identify your highest risks, and recommend a prioritised path forward.",
    ctaDisclaimer:
      "No commitment required. We'll deliver a free Security Risk Summary after the initial call.",
  },
}

export default function CybersecurityPage() {
  return <ServicePageTemplate config={config} />
}
