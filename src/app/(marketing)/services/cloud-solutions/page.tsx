"use client"

import {
  Cloud,
  Server,
  Globe,
  Layers,
  Zap,
  Shield,
  Database,
  BarChart3,
  Building2,
  ShoppingCart,
  Eye,
  CircleDollarSign,
  Network,
  Settings,
  RefreshCw,
  GitBranch,
  Cpu,
  HardDrive,
  MonitorCheck,
  TrendingUp,
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

  // ─── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    badge:            "Cloud Solutions & Infrastructure Services",
    title:            "Transform Your Business With Modern Cloud Infrastructure",
    subtitle:
      "We design, migrate, and manage cloud infrastructure on AWS, Azure, and Google Cloud -- helping businesses achieve greater reliability, scalability, and cost efficiency through modern DevOps practices, Infrastructure as Code, and cloud-native architecture.",
    description:
      "From your first cloud migration to full DevOps transformation and ongoing managed cloud services -- we are your engineering partner for the entire cloud journey.",
    ctaText:          "Start Your Cloud Journey",
    ctaLink:          "/start",
    secondaryCtaText: "View Cloud Services",
    secondaryCtaLink: "#services",
  },

  // ─── Benefits ──────────────────────────────────────────────────────────────
  benefits: [
    { title: "Cost Savings",     metric: "40% avg savings",  icon: CircleDollarSign },
    { title: "High Availability", metric: "99.9% uptime",    icon: MonitorCheck },
    { title: "Faster Releases",  metric: "10x deployments",  icon: Zap },
    { title: "Zero Data Loss",   metric: "100% success",     icon: Shield },
  ],

  // ─── What Is Cloud Transformation ─────────────────────────────────────────
  whatIs: {
    badge:       "Understanding Cloud Transformation",
    title:       "What Is Cloud Transformation?",
    description:
      "Cloud transformation is not simply moving servers from one location to another. It is a fundamental shift in how your business builds, deploys, and operates technology -- unlocking speed, resilience, and economics that are impossible with traditional on-premise infrastructure.",
    items: [
      {
        icon:        Cloud,
        title:       "Moving Beyond On-Premise Limitations",
        description:
          "Traditional on-premise infrastructure locks businesses into fixed capacity, requires expensive hardware refreshes every 3-5 years, and demands dedicated IT staff for routine maintenance. Cloud transformation eliminates these constraints -- you pay for exactly what you use, scale in seconds rather than months, and offload infrastructure management to teams of specialists running some of the world's most reliable systems. The question is no longer whether to move to the cloud, but how to do it strategically to maximise the business benefit.",
      },
      {
        icon:        RefreshCw,
        title:       "Engineering for Resilience and Speed",
        description:
          "Cloud-native architecture means designing applications that are built for the cloud from the ground up -- using microservices, containers, serverless functions, and managed services. Unlike lift-and-shift migrations that simply move existing applications to cloud servers, cloud-native development unlocks genuine agility. Teams can deploy multiple times per day, scale individual components independently, recover from failures automatically, and iterate on features in days instead of quarters.",
      },
      {
        icon:        Layers,
        title:       "Infrastructure as a Strategic Asset",
        description:
          "When infrastructure is defined as code, it becomes versionable, repeatable, and auditable. A new environment that previously took weeks of manual configuration can be provisioned in minutes. Disaster recovery isn't a manual playbook -- it's an automated runbook. Compliance evidence isn't gathered by hand -- it's generated automatically. Infrastructure as Code transforms your cloud estate from a cost centre into a competitive advantage that lets your business move faster than competitors still managing infrastructure manually.",
      },
      {
        icon:        GitBranch,
        title:       "Continuous Delivery and Operational Excellence",
        description:
          "DevOps culture and CI/CD pipelines close the gap between idea and production deployment. Code changes that once took weeks to reach customers can ship in hours -- with automated testing catching regressions before they reach production, progressive deployment reducing blast radius, and monitoring alerting your team before customers notice issues. We engineer these capabilities into your cloud platform from day one, creating an organisation that can innovate continuously without sacrificing stability.",
      },
    ],
    stats: {
      title: "Why Cloud Transformation Delivers Real Business Value",
      items: [
        {
          value:       "40-60%",
          description: "average infrastructure cost reduction for businesses migrating from on-premise to well-architected cloud environments",
        },
        {
          value:       "99.9%",
          description: "uptime SLA consistently achieved across cloud-native workloads with multi-region fault-tolerant architecture",
        },
        {
          value:       "10x",
          description: "improvement in deployment frequency after DevOps transformation -- from quarterly releases to multiple deployments per day",
        },
      ],
    },
  },

  // ─── Tech Stack ────────────────────────────────────────────────────────────
  techStack: {
    badge:       "Cloud Platforms & Tools",
    title:       "Our Cloud Technology Stack",
    description: "We work across the leading cloud providers and DevOps toolchains, selecting the right combination for your workloads, team, and compliance requirements",
    categories:  ["all", "hyperscaler", "iac", "containers", "devops", "paas"],
    items: [
      {
        name:        "Amazon Web Services",
        description: "The world's most comprehensive cloud platform with 200+ fully featured services for compute, storage, databases, machine learning, and more.",
        icon:        Cloud,
        category:    "hyperscaler",
        features:    ["EC2, ECS & Lambda", "S3, RDS & DynamoDB", "CloudFormation & CDK", "IAM & Security Hub"],
      },
      {
        name:        "Microsoft Azure",
        description: "Enterprise-grade cloud with deep Microsoft ecosystem integration. Ideal for organisations using Microsoft 365, Active Directory, and .NET.",
        icon:        Server,
        category:    "hyperscaler",
        features:    ["Azure Virtual Machines", "Azure Kubernetes Service", "Azure DevOps", "Active Directory & Entra ID"],
      },
      {
        name:        "Google Cloud Platform",
        description: "Google's cloud with industry-leading data analytics, AI/ML capabilities, and global network infrastructure for modern applications.",
        icon:        Globe,
        category:    "hyperscaler",
        features:    ["GKE & Cloud Run", "BigQuery & Pub/Sub", "Vertex AI & AutoML", "Cloud Spanner & Firestore"],
      },
      {
        name:        "Terraform",
        description: "Infrastructure as Code tool that enables you to define, provision, and manage cloud resources across any provider using declarative configuration.",
        icon:        Layers,
        category:    "iac",
        features:    ["Multi-cloud provisioning", "State management", "Module registry", "Plan & apply workflows"],
      },
      {
        name:        "Docker & Kubernetes",
        description: "Container-based deployment and orchestration for consistent, scalable application delivery across any environment.",
        icon:        Cpu,
        category:    "containers",
        features:    ["Container image builds", "Pod orchestration", "Helm chart management", "Auto-scaling & self-healing"],
      },
      {
        name:        "Vercel & Edge",
        description: "Modern deployment platform optimised for frontend frameworks and serverless functions with global edge delivery.",
        icon:        Zap,
        category:    "paas",
        features:    ["Next.js & React hosting", "Edge functions", "Preview deployments", "Analytics & monitoring"],
      },
      {
        name:        "DigitalOcean",
        description: "Developer-friendly cloud platform with managed Kubernetes, databases, and App Platform for growing businesses.",
        icon:        HardDrive,
        category:    "paas",
        features:    ["Managed Kubernetes (DOKS)", "Managed databases", "App Platform & Spaces", "Droplets & networking"],
      },
      {
        name:        "GitHub Actions & CI/CD",
        description: "Automated build, test, and deployment pipelines that integrate directly with your source code repository for fast, reliable releases.",
        icon:        GitBranch,
        category:    "devops",
        features:    ["Automated test runners", "Multi-environment deploy", "Secrets management", "Matrix builds & caching"],
      },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    badge:       "Our Services",
    title:       "Comprehensive Cloud Solutions",
    description: "From your first cloud migration to a fully cloud-native architecture with automated DevOps pipelines -- we deliver every dimension of modern cloud engineering",
    items: [
      {
        icon:        Cloud,
        title:       "Cloud Migration & Modernisation",
        description: "We manage end-to-end migration of your workloads from on-premise data centres or legacy hosting to modern cloud infrastructure. Whether you're rehosting, replatforming, or fully re-architecting, we plan each wave meticulously to minimise risk and downtime while maximising the cloud-native value you capture from day one.",
        tools:       ["AWS Migration Hub", "Azure Migrate", "Terraform", "Docker"],
        features: [
          "Infrastructure discovery & dependency mapping",
          "Migration wave planning & risk assessment",
          "Application modernisation & containerisation",
          "Database migration & cutover planning",
          "Network architecture & connectivity setup",
          "Post-migration optimisation & tuning",
        ],
        outcome: "Migrate with zero data loss, 99.9% uptime maintained throughout, and 40% cost reduction within 90 days.",
      },
      {
        icon:        Layers,
        title:       "Cloud-Native Application Development",
        description: "We design and build applications from scratch using cloud-native principles -- microservices, serverless functions, managed databases, event-driven architecture, and API-first design. The result is software that is elastic by nature, resilient by design, and observable by default, with deployment pipelines that let your team ship features continuously.",
        tools:       ["AWS Lambda", "Google Cloud Run", "Kubernetes", "Terraform"],
        features: [
          "Microservices architecture design",
          "Serverless function development (Lambda, Cloud Run)",
          "Managed database selection & schema design",
          "API gateway & service mesh configuration",
          "Event-driven architecture with message queues",
          "Observability: logging, tracing & alerting",
        ],
        outcome: "Deploy new features 5x faster with 99.99% availability and elastic scaling from zero to millions of users.",
      },
      {
        icon:        GitBranch,
        title:       "DevOps & CI/CD Pipeline Engineering",
        description: "We implement end-to-end DevOps practices that close the gap between your development team and production. Automated pipelines test every commit, deploy to staging environments automatically, and ship to production with confidence. We embed security scanning, infrastructure validation, and performance benchmarking directly into every pipeline stage.",
        tools:       ["GitHub Actions", "GitLab CI", "Docker", "Kubernetes"],
        features: [
          "CI/CD pipeline design & implementation",
          "Automated unit, integration & E2E testing",
          "Container build & image registry management",
          "Environment promotion (dev → staging → prod)",
          "Security scanning (SAST, DAST, dependency audit)",
          "Deployment rollback & feature flag management",
        ],
        outcome: "Release code 10x more frequently with 80% fewer production incidents and sub-5-minute mean time to recovery.",
      },
      {
        icon:        Settings,
        title:       "Infrastructure as Code (IaC)",
        description: "We codify your entire cloud infrastructure using Terraform, AWS CDK, or Pulumi -- making it versionable, reviewable, and reproducible. Environments that once took weeks to provision manually are created in minutes. Every infrastructure change goes through pull request review, automated validation, and controlled deployment, eliminating configuration drift and untracked changes.",
        tools:       ["Terraform", "AWS CDK", "Pulumi", "Ansible"],
        features: [
          "Terraform module design & state management",
          "Multi-environment configuration management",
          "Automated infrastructure validation & linting",
          "Drift detection & compliance enforcement",
          "Disaster recovery automation & runbooks",
          "Cost estimation integrated into PRs",
        ],
        outcome: "Provision new environments in under 15 minutes, eliminate configuration drift, and pass infrastructure audits automatically.",
      },
      {
        icon:        Shield,
        title:       "Cloud Security & Compliance",
        description: "Security is not a bolt-on -- it's an architectural principle we embed from the first line of Terraform code. We implement defence-in-depth: identity and access management, network segmentation, encryption at rest and in transit, secrets management, vulnerability scanning, and continuous compliance monitoring against frameworks like SOC 2, ISO 27001, GDPR, and PCI DSS.",
        tools:       ["AWS Security Hub", "Azure Defender", "HashiCorp Vault", "Terraform"],
        features: [
          "Identity & access management (IAM) design",
          "Network segmentation & private networking",
          "Encryption key management (KMS, HSM)",
          "Secrets management (AWS Secrets Manager, Vault)",
          "Continuous compliance monitoring & reporting",
          "Penetration testing & vulnerability remediation",
        ],
        outcome: "Achieve SOC 2 / ISO 27001 compliance, pass security audits, and reduce your attack surface by 90%.",
      },
      {
        icon:        MonitorCheck,
        title:       "Managed Cloud Services & FinOps",
        description: "Once your cloud environment is live, the real work of operating and optimising it begins. We provide ongoing managed services including 24/7 monitoring and incident response, capacity planning, cost optimisation, security patching, and regular architecture reviews. Our FinOps practice ensures you're spending cloud budget where it delivers the highest business value.",
        tools:       ["AWS Cost Explorer", "Datadog", "PagerDuty", "Terraform"],
        features: [
          "24/7 infrastructure monitoring & alerting",
          "Incident response & on-call escalation",
          "Cloud cost analysis & rightsizing",
          "Reserved instance & savings plan management",
          "Security patching & update management",
          "Monthly performance & cost optimisation reports",
        ],
        outcome: "Reduce cloud spend by 30-50%, maintain 99.9% SLA, and eliminate surprise bills with monthly budget governance.",
      },
      {
        icon:        Zap,
        title:       "Serverless Architecture",
        description: "Serverless computing eliminates the operational burden of managing servers entirely. You write code; the cloud runs it. We design serverless systems using Lambda, Cloud Run, Azure Functions, and API Gateway -- creating event-driven architectures that scale to zero when idle and handle millions of concurrent requests during peak periods, with billing only for actual execution time.",
        tools:       ["AWS Lambda", "Azure Functions", "Vercel Edge", "Cloudflare Workers"],
        features: [
          "Serverless function design & development",
          "API Gateway & event trigger configuration",
          "Cold start optimisation strategies",
          "Serverless database integration (DynamoDB, Firestore)",
          "Edge computing & CDN-integrated functions",
          "Cost modelling & usage forecasting",
        ],
        outcome: "Reduce infrastructure costs by 70% for variable workloads and achieve sub-100ms response times globally.",
      },
      {
        icon:        Network,
        title:       "Multi-Cloud & Hybrid Strategy",
        description: "Vendor lock-in is a strategic risk. We help organisations build cloud strategies that span multiple providers -- using AWS for core workloads, Google Cloud for AI/ML, Azure for Microsoft integration, and edge platforms for global delivery. We also design hybrid architectures that keep sensitive data on-premise while running scalable workloads in the cloud.",
        tools:       ["Terraform", "Kubernetes", "AWS", "Azure", "GCP"],
        features: [
          "Multi-cloud architecture design & governance",
          "Cloud-agnostic tooling & abstraction layers",
          "Cross-cloud networking & peering",
          "Unified identity & access management",
          "Hybrid cloud connectivity (VPN, Direct Connect)",
          "Vendor risk assessment & exit strategy planning",
        ],
        outcome: "Achieve vendor independence, optimise spend across providers, and maintain 99.99% uptime through cloud redundancy.",
      },
    ],
  },

  // ─── Outcomes ──────────────────────────────────────────────────────────────
  outcomesDescription:
    "Great cloud engineering is measured in business results -- lower costs, higher availability, faster delivery, and stronger security. Here is what our clients consistently achieve.",
  outcomes: [
    {
      icon:        CircleDollarSign,
      metric:      "30-50% cost reduction",
      title:       "Dramatic Cost Reduction",
      description: "Cloud economics work in your favour when infrastructure is properly architected. Right-sizing, reserved capacity planning, and automated scaling eliminate waste. Our clients typically achieve 30-50% cost reduction versus their previous on-premise or poorly optimised cloud spend.",
    },
    {
      icon:        MonitorCheck,
      metric:      "99.9% uptime SLA",
      title:       "Near-Perfect Availability",
      description: "Distributed, fault-tolerant cloud architecture with automated failover, multi-region redundancy, and health-check-driven routing ensures your systems remain available even during component failures, traffic spikes, or partial outages.",
    },
    {
      icon:        TrendingUp,
      metric:      "Infinite elastic scale",
      title:       "Elastic Scale on Demand",
      description: "Cloud infrastructure scales horizontally in seconds. Whether you're handling Black Friday traffic spikes or growing from 1,000 to 1,000,000 users, your platform expands and contracts automatically -- with costs that match actual usage.",
    },
    {
      icon:        Zap,
      metric:      "10x deployment speed",
      title:       "10x Faster Deployments",
      description: "CI/CD pipelines and Infrastructure as Code mean changes that once took weeks to deploy now go live in minutes. Automated testing, staged rollouts, and instant rollback capability mean teams ship faster with greater confidence.",
    },
    {
      icon:        Shield,
      metric:      "Zero security breaches",
      title:       "Enterprise-Grade Security",
      description: "Cloud security posture management, zero-trust networking, secrets management, and continuous compliance monitoring ensure your infrastructure meets enterprise and regulatory requirements without manual audit burdens.",
    },
    {
      icon:        Eye,
      metric:      "360-degree observability",
      title:       "Complete Operational Visibility",
      description: "Distributed tracing, centralised log aggregation, real-time dashboards, and anomaly detection give your team full observability across every service. Find and fix issues before customers are impacted.",
    },
  ],

  // ─── Case Studies ──────────────────────────────────────────────────────────
  caseStudies: {
    badge: "Case Studies",
    title: "Cloud Work, Running Today",
    description:
      "Cloud platforms and infrastructure we operate in production — with the audit tooling to prove the posture",
    industryFilters: [
      { key: "all", label: "All" },
      { key: "saas", label: "SaaS" },
      { key: "healthcare", label: "Healthcare" },
      { key: "cloud", label: "Cloud Security" },
    ],
    items: [
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
    ],
  },

  // ─── Industries ────────────────────────────────────────────────────────────
  industries: [
    {
      name:        "E-commerce & Retail",
      icon:        ShoppingCart,
      description: "High-availability storefronts, elastic scaling for flash sales, inventory system integrations, CDN-optimised media delivery, and PCI DSS-compliant payment processing.",
      solutions:   ["Auto-scaling for traffic spikes", "Multi-region storefront delivery", "Inventory sync & real-time stock", "Secure payment processing infrastructure"],
    },
    {
      name:        "Financial Services",
      icon:        Building2,
      description: "Hybrid cloud architectures that satisfy regulatory requirements, encrypted data pipelines, audit trails, SOC 2 and PCI DSS compliance, and high-frequency transaction processing.",
      solutions:   ["Regulatory compliance architecture", "Encrypted financial data pipelines", "SOC 2 & PCI DSS readiness", "Low-latency transaction processing"],
    },
    {
      name:        "Healthcare & Life Sciences",
      icon:        Shield,
      description: "HIPAA-compliant cloud infrastructure, secure patient data storage, interoperability with clinical systems, and scalable platforms for telehealth and medical imaging.",
      solutions:   ["HIPAA-compliant data storage", "Secure patient data pipelines", "Telehealth platform infrastructure", "Medical imaging storage & processing"],
    },
    {
      name:        "SaaS & Technology",
      icon:        Cloud,
      description: "Cloud-native multi-tenant architectures, Kubernetes orchestration, feature deployment pipelines, usage-based billing infrastructure, and global low-latency delivery.",
      solutions:   ["Multi-tenant Kubernetes architecture", "Feature flag & A/B test infrastructure", "Usage metering & billing systems", "Global edge delivery networks"],
    },
    {
      name:        "Media & Publishing",
      icon:        Globe,
      description: "Serverless content delivery, video transcoding pipelines, CDN-optimised asset distribution, real-time analytics, and elastic infrastructure for viral traffic events.",
      solutions:   ["Serverless content APIs", "Video transcoding & storage", "Global CDN delivery", "Real-time audience analytics"],
    },
    {
      name:        "Manufacturing & Logistics",
      icon:        Database,
      description: "IoT data ingestion pipelines, real-time operational dashboards, ERP cloud migration, supply chain visibility platforms, and edge computing for factory floor systems.",
      solutions:   ["IoT data ingestion at scale", "Real-time operational dashboards", "ERP & WMS cloud migration", "Supply chain visibility platforms"],
    },
  ],

  // ─── Process ───────────────────────────────────────────────────────────────
  processSteps: [
    {
      step:        "1",
      title:       "Assessment & Cloud Strategy",
      duration:    "Week 1-2",
      description: "We begin with a comprehensive assessment of your current infrastructure, applications, data, and business objectives. We analyse your existing architecture, map application dependencies, evaluate security posture, model cloud costs, and identify migration complexity. The output is a Cloud Readiness Report with a clear strategic recommendation: which workloads to migrate, which to modernise, which to rebuild cloud-native, and which to retire. You'll have a business case with projected costs and ROI before any technical work begins.",
      deliverables: ["Infrastructure & application inventory", "Dependency mapping & complexity scoring", "Cloud cost model & ROI projection", "Cloud strategy recommendation report"],
    },
    {
      step:        "2",
      title:       "Architecture & Planning",
      duration:    "Week 2-4",
      description: "With strategy agreed, we design the target cloud architecture in detail. This includes network topology, compute and storage services selection, database architecture, security controls, identity and access management model, observability stack, and CI/CD pipeline design. We write all infrastructure as Terraform code during this phase so the architecture is reviewable and testable before a single cloud resource is provisioned. We produce a detailed migration runbook for every workload.",
      deliverables: ["Target cloud architecture diagram", "Terraform infrastructure code (reviewed)", "Security & compliance design", "Detailed migration runbook per workload"],
    },
    {
      step:        "3",
      title:       "Migration, Build & Deployment",
      duration:    "Weeks 4-12",
      description: "Execution proceeds in controlled waves, starting with lower-risk workloads to prove the process and build team confidence. Each workload is migrated or built following the runbook, tested extensively in staging, and cut over to production using blue/green or canary deployment strategies that allow instant rollback. CI/CD pipelines go live alongside the workloads, so new deployments are automated from day one. Data migrations are validated byte-by-byte. We maintain parallel running of critical systems through the transition period.",
      deliverables: ["Provisioned cloud infrastructure", "Migrated & tested workloads", "Live CI/CD pipelines", "Validated data migration with checksums"],
    },
    {
      step:        "4",
      title:       "Optimise & Manage",
      duration:    "Ongoing",
      description: "Cloud is not set-and-forget. Post-migration, we monitor performance against established baselines, rightsize resources based on real usage data, implement cost optimisation recommendations, and continuously improve the security posture. Monthly FinOps reviews ensure cloud spend aligns with business value. Quarterly architecture reviews identify opportunities to further leverage cloud-native capabilities as your business evolves. We also upskill your internal team to take increasing ownership over time.",
      deliverables: ["Monthly cost & performance reports", "Rightsizing & optimisation recommendations", "Quarterly architecture review", "Team upskilling & documentation"],
    },
  ],

  // ─── Pricing ───────────────────────────────────────────────────────────────
  pricing: [
    {
      name:        "Cloud Starter",
      price:       "$3,500",
      description: "Perfect for small businesses and startups ready to move their first workloads to the cloud with a solid foundation.",
      popular:     false,
      cta:         "Get Started",
      features: [
        "Cloud readiness assessment",
        "Single cloud provider setup (AWS, Azure or GCP)",
        "Up to 5 servers / services migrated",
        "Basic CI/CD pipeline implementation",
        "Infrastructure as Code (Terraform)",
        "Security baseline configuration",
        "Email support (48hr response)",
        "30 days post-launch monitoring",
        "Handover documentation",
      ],
    },
    {
      name:        "Cloud Professional",
      price:       "$9,500",
      description: "Comprehensive cloud transformation for growing businesses ready to unlock cloud-native architecture and DevOps practices.",
      popular:     true,
      cta:         "Get Started",
      features: [
        "Full cloud strategy & architecture design",
        "Multi-environment setup (dev, staging, prod)",
        "Up to 20 services / workloads migrated",
        "Full CI/CD pipeline with automated testing",
        "Kubernetes or serverless architecture",
        "Security, compliance & IAM design",
        "Observability stack (monitoring, logging, alerting)",
        "Priority support (4hr response)",
        "90 days managed monitoring",
        "Team training & runbook documentation",
        "FinOps baseline & cost dashboard",
      ],
    },
    {
      name:        "Enterprise Cloud",
      price:       "Custom",
      description: "End-to-end cloud transformation and ongoing managed services for complex, regulated, or multi-cloud environments.",
      popular:     false,
      cta:         "Get Started",
      features: [
        "Unlimited workloads & environments",
        "Multi-cloud or hybrid architecture",
        "Custom compliance frameworks (SOC 2, ISO, HIPAA)",
        "Dedicated cloud architect",
        "24/7 managed monitoring & incident response",
        "SLA guarantee (99.9% uptime)",
        "FinOps management & monthly reviews",
        "Quarterly architecture optimisation reviews",
        "Comprehensive team upskilling programme",
        "Custom integrations & tooling development",
        "Strategic cloud roadmap planning",
      ],
    },
  ],

  // ─── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "What is cloud migration and do we actually need it?",
      answer:   "Cloud migration is the process of moving your applications, data, and infrastructure from on-premise servers or legacy hosting environments to cloud platforms like AWS, Azure, or Google Cloud. You need it if you're experiencing infrastructure limitations (capacity, performance, reliability), if your infrastructure costs are high relative to the value delivered, if your team is spending significant time on server maintenance rather than product development, or if you want to scale globally without building data centres. Cloud isn't right for every workload, but for most modern businesses the cost, reliability, and agility advantages are compelling.",
    },
    {
      question: "How long does a cloud migration take?",
      answer:   "Timeline varies significantly based on the complexity and number of workloads. A straightforward single-application migration with limited data can take 4-8 weeks. A mid-complexity migration of 5-15 applications typically takes 8-16 weeks. A full enterprise transformation across dozens of applications and teams may take 6-18 months, typically executed in multiple waves. We always recommend a phased approach that delivers value early -- often you'll see your first workloads live in the cloud within 4 weeks of project start.",
    },
    {
      question: "Which cloud provider should we use -- AWS, Azure, or Google Cloud?",
      answer:   "The right choice depends on your specific requirements. AWS is the most mature and feature-rich platform with the broadest service selection -- it's our default recommendation for most workloads. Azure is the best choice if your organisation is heavily invested in Microsoft technologies (Office 365, Active Directory, .NET). Google Cloud leads in data analytics, AI/ML capabilities, and Kubernetes. For many enterprise clients, a multi-cloud approach using different providers for different workloads is optimal. We assess your technical requirements, existing tooling, team expertise, and budget to make a tailored recommendation.",
    },
    {
      question: "What is Infrastructure as Code and why does it matter?",
      answer:   "Infrastructure as Code (IaC) means your cloud infrastructure is defined in code files (typically Terraform or CloudFormation) rather than configured manually through a web console. This matters enormously: your infrastructure becomes versionable (tracked in Git with a full change history), reproducible (you can create an identical environment in minutes), reviewable (changes go through pull request review before applying), and auditable (every infrastructure change is logged). IaC eliminates configuration drift between environments, makes disaster recovery fast and reliable, and enables your team to provision new environments on demand.",
    },
    {
      question: "How do you ensure zero downtime during migration?",
      answer:   "We use several techniques to achieve zero or near-zero downtime migrations. For databases, we set up continuous replication from the source to the target before cutover, so the target stays in sync until we flip the switch. For applications, we run the new cloud environment in parallel with the existing one, use DNS-based traffic switching for gradual cutover, and maintain the ability to roll back instantly if any issue is detected. For stateless services, blue/green deployments allow us to switch traffic atomically. We always define a tested rollback procedure before any production cutover begins.",
    },
    {
      question: "What is DevOps and CI/CD, and how does it improve our business?",
      answer:   "DevOps is a set of practices that combine software development and IT operations to shorten the time between writing code and getting it into production. CI/CD (Continuous Integration / Continuous Deployment) is the technical implementation -- automated pipelines that test every code change, build deployment packages, and ship to production automatically when tests pass. The business benefits are substantial: faster feature delivery (from quarterly releases to daily), fewer production incidents (automated testing catches bugs before deployment), faster recovery when incidents do occur (automated rollback), and engineers spending more time building features rather than managing deployments.",
    },
    {
      question: "How much can we save by moving to the cloud?",
      answer:   "Cloud cost savings depend heavily on your starting point. Businesses migrating from owned hardware typically save 40-60% on infrastructure costs when you factor in hardware depreciation, data centre costs, and IT labour for maintenance. Businesses migrating from unoptimised cloud environments often save 30-50% through rightsizing, reserved capacity planning, and eliminating waste. We model projected cloud costs as part of our initial assessment so you have a clear financial business case before committing to migration. We also implement FinOps practices from day one to ensure costs stay under control as you scale.",
    },
    {
      question: "How do you handle cloud security and compliance?",
      answer:   "Security is embedded into our architecture from the start, not added as an afterthought. We implement the principle of least privilege for all IAM roles, encrypt all data at rest and in transit, segment networks with private subnets and security groups, manage secrets via AWS Secrets Manager or HashiCorp Vault, enable CloudTrail or equivalent audit logging for all API calls, and configure automated compliance checks using AWS Config or Azure Policy. For regulated industries (healthcare, finance, payments), we design specifically for frameworks like HIPAA, SOC 2, ISO 27001, and PCI DSS.",
    },
    {
      question: "What is Kubernetes and do we need it?",
      answer:   "Kubernetes is an open-source platform for managing containerised applications at scale. It handles automatic deployment, scaling, load balancing, self-healing (restarting failed containers), and rolling updates. You likely need Kubernetes if you have multiple services that need to be deployed and scaled independently, if you need high availability with automatic failover, or if you're deploying frequently and want consistent deployment behaviour across environments. For simpler applications, managed container services like AWS ECS Fargate or serverless functions are often a better fit. We assess your specific needs and recommend the right orchestration approach.",
    },
    {
      question: "What ongoing support do you provide after the cloud migration is complete?",
      answer:   "All our cloud projects include a post-launch period of active monitoring and optimisation. For ongoing managed services, we offer 24/7 monitoring and incident response, monthly cost optimisation reviews, security patching and update management, capacity planning and scaling recommendations, and quarterly architecture reviews to identify improvements. We also provide knowledge transfer and training so your internal team builds cloud expertise over time. Our goal is for your team to be increasingly self-sufficient while having us available for complex architecture decisions and incident escalation.",
    },
  ],

  // ─── Contact / CTA ─────────────────────────────────────────────────────────
  contact: {
    ctaTitle:       "Ready to Transform Your Cloud Infrastructure?",
    ctaDescription: "Tell us about your infrastructure challenges and we'll come back with a cloud strategy, architecture recommendation, and transparent cost model. No sales pressure -- just honest advice from experienced cloud engineers.",
    ctaDisclaimer:  "Free cloud readiness assessment included. We'll scope your migration and give you a written strategy at no charge.",
  },
}

/** Cloud Solutions service page -- renders via the shared ServicePageTemplate. */
export default function CloudSolutionsPage() {
  return <ServicePageTemplate config={config} />
}
