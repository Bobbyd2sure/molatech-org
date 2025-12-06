"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Cloud, Shield, Zap, TrendingUp, Monitor, ChevronDown, PieChart } from "lucide-react"
import Link from "next/link"
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { FocusCards } from "@/components/ui/aceternity/focus-cards"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CallToAction from "@/components/call-to-action"

export default function CloudSolutionsPage() {
  const [activeTab, setActiveTab] = useState("aws")

  const cloudServices = [
    {
      title: "Cloud Migration & Modernization",
      description: "Seamlessly transition your infrastructure to the cloud with zero downtime",
      image: "/service-cloud-solutions.png",
      features: [
        "Legacy System Assessment",
        "Migration Strategy Planning",
        "Application Modernization",
        "Data Migration Services",
        "Performance Optimization",
        "Cost Analysis & Optimization",
      ],
      technologies: ["AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate", "Terraform"],
      timeline: "8-16 weeks",
      outcomes: "40% cost reduction, 99.9% uptime, improved scalability",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "Automate and standardize your cloud infrastructure deployment",
      image: "/devops-automation-flow.png",
      features: [
        "Infrastructure Automation",
        "Configuration Management",
        "Version Control Integration",
        "Environment Provisioning",
        "Disaster Recovery Setup",
        "Compliance Automation",
      ],
      technologies: ["Terraform", "CloudFormation", "Ansible", "Pulumi"],
      timeline: "6-12 weeks",
      outcomes: "90% faster deployments, reduced human error, consistent environments",
    },
    {
      title: "DevOps & CI/CD Implementation",
      description: "Streamline development workflows with automated pipelines",
      image: "/devops-automation-flow.png",
      features: [
        "CI/CD Pipeline Setup",
        "Automated Testing Integration",
        "Container Orchestration",
        "Monitoring & Alerting",
        "Security Integration",
        "Performance Optimization",
      ],
      technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes"],
      timeline: "4-10 weeks",
      outcomes: "75% faster releases, improved code quality, enhanced collaboration",
    },
    {
      title: "Multi-Cloud Architecture",
      description: "Design resilient systems across multiple cloud providers",
      image: "/service-cloud-solutions.png",
      features: [
        "Multi-Cloud Strategy",
        "Vendor Lock-in Prevention",
        "Cross-Cloud Networking",
        "Unified Management",
        "Cost Optimization",
        "Disaster Recovery",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
      timeline: "12-20 weeks",
      outcomes: "Enhanced reliability, vendor independence, optimized costs",
    },
    {
      title: "Cloud Security & Compliance",
      description: "Implement enterprise-grade security across your cloud infrastructure",
      image: "/cybersecurity-protection.png",
      features: [
        "Security Assessment",
        "Identity & Access Management",
        "Data Encryption",
        "Compliance Frameworks",
        "Threat Detection",
        "Incident Response",
      ],
      technologies: ["AWS Security Hub", "Azure Security Center", "Cloud Security Command Center"],
      timeline: "6-14 weeks",
      outcomes: "100% compliance, zero security incidents, enhanced data protection",
    },
    {
      title: "Cloud Cost Optimization",
      description: "Maximize ROI through intelligent resource management and cost control",
      image: "/data-analytics-dashboard.png",
      features: [
        "Cost Analysis & Reporting",
        "Resource Right-sizing",
        "Reserved Instance Planning",
        "Automated Scaling",
        "Waste Elimination",
        "Budget Management",
      ],
      technologies: ["AWS Cost Explorer", "Azure Cost Management", "Google Cloud Billing"],
      timeline: "4-8 weeks",
      outcomes: "30-50% cost reduction, improved resource utilization, predictable spending",
    },
  ]

  const cloudStats = [
    { number: "500+", label: "Cloud Migrations Completed", icon: Cloud },
    { number: "99.9%", label: "Average Uptime Achieved", icon: TrendingUp },
    { number: "45%", label: "Average Cost Reduction", icon: PieChart },
    { number: "24/7", label: "Cloud Support & Monitoring", icon: Monitor },
    { number: "100%", label: "Security Compliance Rate", icon: Shield },
    { number: "90%", label: "Faster Deployment Speed", icon: Zap },
  ]

  const migrationProcess = [
    {
      phase: "🔍 Discovery & Assessment",
      title: "Current State Analysis",
      description: "Comprehensive evaluation of existing infrastructure, applications, and business requirements",
      activities: [
        "Infrastructure inventory and mapping",
        "Application dependency analysis",
        "Performance baseline establishment",
        "Security and compliance assessment",
        "Cost analysis and ROI projections",
      ],
    },
    {
      phase: "📋 Strategy & Planning",
      title: "Migration Roadmap",
      description: "Develop detailed migration strategy and execution plan",
      activities: [
        "Cloud architecture design",
        "Migration wave planning",
        "Risk assessment and mitigation",
        "Timeline and resource planning",
        "Success criteria definition",
      ],
    },
    {
      phase: "🏗️ Design & Architecture",
      title: "Cloud Architecture Design",
      description: "Create scalable, secure, and cost-effective cloud architecture",
      activities: [
        "Reference architecture development",
        "Security framework implementation",
        "Network design and connectivity",
        "Disaster recovery planning",
        "Monitoring and alerting setup",
      ],
    },
    {
      phase: "🚀 Migration Execution",
      title: "Phased Migration",
      description: "Execute migration in controlled phases with minimal business disruption",
      activities: [
        "Pilot migration and testing",
        "Production workload migration",
        "Data synchronization and validation",
        "Performance optimization",
        "User acceptance testing",
      ],
    },
    {
      phase: "🔧 Optimization & Tuning",
      title: "Performance Optimization",
      description: "Fine-tune cloud resources for optimal performance and cost efficiency",
      activities: [
        "Resource right-sizing",
        "Performance monitoring and tuning",
        "Cost optimization implementation",
        "Security hardening",
        "Automation enhancement",
      ],
    },
    {
      phase: "🛡️ Support & Maintenance",
      title: "Ongoing Management",
      description: "Continuous monitoring, support, and optimization of cloud infrastructure",
      activities: [
        "24/7 monitoring and alerting",
        "Regular health checks and reporting",
        "Continuous cost optimization",
        "Security updates and patches",
        "Capacity planning and scaling",
      ],
    },
  ]

  const cloudTechnologies = {
    aws: [
      { name: "Amazon EC2", description: "Scalable virtual servers in the cloud" },
      { name: "AWS Lambda", description: "Serverless compute service" },
      { name: "Amazon RDS", description: "Managed relational database service" },
      { name: "Amazon S3", description: "Object storage service" },
      { name: "AWS CloudFormation", description: "Infrastructure as Code service" },
      { name: "Amazon EKS", description: "Managed Kubernetes service" },
    ],
    azure: [
      { name: "Azure Virtual Machines", description: "On-demand scalable computing resources" },
      { name: "Azure Functions", description: "Event-driven serverless compute" },
      { name: "Azure SQL Database", description: "Fully managed SQL database service" },
      { name: "Azure Blob Storage", description: "Massively scalable object storage" },
      { name: "Azure Resource Manager", description: "Deployment and management service" },
      { name: "Azure Kubernetes Service", description: "Managed Kubernetes service" },
    ],
    gcp: [
      { name: "Compute Engine", description: "Virtual machines running in Google's data centers" },
      { name: "Cloud Functions", description: "Serverless execution environment" },
      { name: "Cloud SQL", description: "Fully managed relational database service" },
      { name: "Cloud Storage", description: "Unified object storage service" },
      { name: "Cloud Deployment Manager", description: "Infrastructure deployment service" },
      { name: "Google Kubernetes Engine", description: "Managed Kubernetes service" },
    ],
    devops: [
      { name: "Docker", description: "Containerization platform" },
      { name: "Kubernetes", description: "Container orchestration platform" },
      { name: "Terraform", description: "Infrastructure as Code tool" },
      { name: "Jenkins", description: "Continuous integration and deployment" },
      { name: "Ansible", description: "Configuration management and automation" },
      { name: "Prometheus", description: "Monitoring and alerting toolkit" },
    ],
  }

  const architecturePatterns = [
    {
      title: "Microservices Architecture",
      description: "Break down monolithic applications into smaller, manageable services",
      benefits: [
        "Independent scaling and deployment",
        "Technology diversity and flexibility",
        "Improved fault isolation",
        "Enhanced team productivity",
        "Better resource utilization",
      ],
      useCase: "Large-scale applications with complex business logic",
      image: "/custom-software-development.png",
    },
    {
      title: "Serverless Architecture",
      description: "Build and run applications without managing server infrastructure",
      benefits: [
        "Zero server management",
        "Automatic scaling",
        "Pay-per-execution pricing",
        "Built-in high availability",
        "Faster time to market",
      ],
      useCase: "Event-driven applications and APIs",
      image: "/artificial-intelligence-technology.png",
    },
    {
      title: "Hybrid Cloud Architecture",
      description: "Combine on-premises and cloud resources for optimal flexibility",
      benefits: [
        "Gradual cloud adoption",
        "Data sovereignty compliance",
        "Cost optimization",
        "Enhanced security control",
        "Business continuity",
      ],
      useCase: "Enterprises with regulatory requirements",
      image: "/service-cloud-solutions.png",
    },
  ]

  const caseStudies = [
    {
      title: "Global E-commerce Platform Migration",
      industry: "Retail & E-commerce",
      challenge: "Legacy infrastructure couldn't handle peak traffic during sales events",
      solution: "Multi-cloud architecture with auto-scaling and global CDN implementation",
      results: [
        "Handled 10x traffic increase during Black Friday",
        "Reduced infrastructure costs by 40%",
        "Improved page load times by 60%",
        "Achieved 99.99% uptime during peak seasons",
      ],
      timeline: "16 weeks",
      image: "/ecommerce-project.png",
      technologies: ["AWS", "CloudFront", "Auto Scaling", "RDS"],
    },
    {
      title: "Healthcare Data Platform Modernization",
      industry: "Healthcare",
      challenge: "HIPAA compliance requirements and data security concerns",
      solution: "Secure cloud migration with end-to-end encryption and compliance automation",
      results: [
        "100% HIPAA compliance maintained",
        "50% reduction in data processing time",
        "Enhanced disaster recovery capabilities",
        "Improved data analytics and insights",
      ],
      timeline: "20 weeks",
      image: "/healthcare-portal-project.png",
      technologies: ["Azure", "Key Vault", "Security Center", "Backup"],
    },
    {
      title: "Financial Services Digital Transformation",
      industry: "Financial Services",
      challenge: "Regulatory compliance and need for real-time transaction processing",
      solution: "Hybrid cloud architecture with enhanced security and monitoring",
      results: [
        "Real-time transaction processing achieved",
        "Regulatory compliance maintained",
        "30% improvement in system performance",
        "Enhanced fraud detection capabilities",
      ],
      timeline: "24 weeks",
      image: "/saas-dashboard-project.png",
      technologies: ["Google Cloud", "BigQuery", "Cloud Security", "Monitoring"],
    },
  ]

  const testimonials = [
    {
      quote:
        "The cloud migration transformed our business operations. We now handle 10x more traffic with 40% lower costs.",
      name: "Adeola Mwandala",
      title: "CEO, Marte Beauty Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "Their expertise in multi-cloud architecture helped us avoid vendor lock-in while optimizing performance.",
      name: "Thomas Ndhlebe",
      title: "Tenderglove Healthcare",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote: "The DevOps implementation reduced our deployment time from days to minutes. Game-changing results.",
      name: "Mary Smith",
      title: "CEO, Marymia Limited",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const movingTestimonials = [
    {
      quote: "Outstanding cloud architecture design and implementation. Exceeded all our expectations.",
      name: "Adeola Mwandala",
      title: "CEO, Marte Beauty Inc.",
    },
    {
      quote: "The cost optimization strategies saved us over $2M annually. Incredible ROI.",
      name: "Thomas Ndhlebe",
      title: "Tenderglove Healthcare",
    },
    {
      quote: "24/7 support and monitoring gives us complete peace of mind.",
      name: "Mary Smith",
      title: "CEO, Marymia Limited",
    },
  ]

  const investmentTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses starting their cloud journey",
      features: [
        "Cloud readiness assessment",
        "Basic migration planning",
        "Single cloud platform setup",
        "Essential security configuration",
        "Basic monitoring setup",
        "Email support",
        "Documentation and training",
      ],
    },
    {
      name: "Professional",
      description: "Comprehensive cloud solutions for growing enterprises",
      popular: true,
      features: [
        "Everything in Starter",
        "Multi-cloud architecture design",
        "Advanced DevOps implementation",
        "Infrastructure as Code setup",
        "Comprehensive security framework",
        "24/7 monitoring and alerting",
        "Priority phone and email support",
        "Quarterly optimization reviews",
      ],
    },
    {
      name: "Enterprise",
      description: "Full-scale cloud transformation for large organizations",
      features: [
        "Everything in Professional",
        "Custom cloud architecture design",
        "Advanced compliance frameworks",
        "Disaster recovery implementation",
        "Cost optimization automation",
        "Dedicated cloud architect",
        "24/7 premium support",
        "Monthly strategic reviews",
        "Custom integrations and automation",
      ],
    },
  ]

  const faqItems = [
    {
      question: "How long does a typical cloud migration take?",
      answer:
        "Migration timelines vary based on complexity, but typically range from 8-24 weeks. We start with a thorough assessment to provide accurate timelines for your specific requirements.",
    },
    {
      question: "What are the main benefits of multi-cloud architecture?",
      answer:
        "Multi-cloud architecture provides vendor independence, enhanced reliability, cost optimization opportunities, and the ability to leverage best-of-breed services from different providers.",
    },
    {
      question: "How do you ensure security during cloud migration?",
      answer:
        "We implement security-first approaches including data encryption, identity management, network security, compliance frameworks, and continuous monitoring throughout the migration process.",
    },
    {
      question: "Can you help optimize our existing cloud costs?",
      answer:
        "Yes, we provide comprehensive cost optimization services including resource right-sizing, reserved instance planning, automated scaling, and waste elimination to reduce costs by 30-50%.",
    },
    {
      question: "Do you provide ongoing support after migration?",
      answer:
        "Absolutely. We offer 24/7 monitoring, regular health checks, continuous optimization, security updates, and strategic guidance to ensure your cloud infrastructure performs optimally.",
    },
    {
      question: "What compliance frameworks do you support?",
      answer:
        "We support major compliance frameworks including SOC 2, HIPAA, PCI DSS, GDPR, ISO 27001, and industry-specific regulations to ensure your cloud infrastructure meets all requirements.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <WavyBackground
          className="max-w-4xl mx-auto pb-40"
          colors={["#3b82f6", "#1d4ed8", "#1e40af", "#1e3a8a"]}
          waveWidth={50}
          backgroundFill="white"
          blur={10}
          speed="slow"
          waveOpacity={0.5}
        >
          <BackgroundBeams className="absolute inset-0" />
          <FloatingParticles className="absolute inset-0" particleCount={50} particleColor="#3b82f6" />
          <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="#3b82f6" />

          <div className="relative z-10 text-center space-y-8 px-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex justify-center mb-8"
            >
              <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-2xl">
                <Cloud className="h-16 w-16 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Cloud Solutions
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Transform Your Infrastructure</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 p-6 rounded-lg"
            >
              Accelerate your digital transformation with enterprise-grade cloud solutions. From migration to
              optimization, we deliver scalable, secure, and cost-effective cloud infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg backdrop-blur-sm">
                <Link href="/start?service=cloud-solutions">Start Migration</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur-sm bg-white/20 border-white/30 text-gray-900 hover:bg-white/30"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </motion.div>

            <CardContainer className="inter-var mt-12">
              <CardBody className="relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/service-cloud-solutions.png"
                    height="400"
                    width="600"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Cloud Solutions Architecture"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="flex flex-col items-center text-blue-600"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </WavyBackground>
      </section>

      {/* Cloud Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Cloud Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From migration to optimization, we provide end-to-end cloud solutions tailored to your business needs
            </p>
          </motion.div>

          <FocusCards cards={cloudServices} />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cloud Success Metrics</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Proven results from our cloud transformation projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gradient-to-br from-blue-50 to-blue-100 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-blue-200 w-full h-auto rounded-xl p-8 border">
                    <CardItem translateZ="50" className="text-center">
                      <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                      <div className="text-gray-700 font-medium">{stat.label}</div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Cloud Migration Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A proven methodology that ensures successful cloud transformation with minimal risk
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationProcess.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-gray-200 w-full h-full rounded-xl p-6 border">
                    <CardItem translateZ="50" className="mb-4">
                      <div className="text-2xl mb-2">{phase.phase}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                      <p className="text-gray-700 mb-4">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <FloatingParticles className="absolute inset-0" particleCount={30} particleColor="#3b82f6" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cloud Technologies & Platforms</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We work with leading cloud platforms and cutting-edge technologies
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="aws">AWS</TabsTrigger>
              <TabsTrigger value="azure">Azure</TabsTrigger>
              <TabsTrigger value="gcp">Google Cloud</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>

            {Object.entries(cloudTechnologies).map(([key, technologies]) => (
              <TabsContent key={key} value={key}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900">{tech.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{tech.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Architecture Patterns Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cloud Architecture Patterns</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Modern architectural approaches for scalable and resilient cloud solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {architecturePatterns.map((pattern, index) => (
              <motion.div
                key={pattern.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-gray-200 w-full h-full rounded-xl p-6 border">
                    <CardItem translateZ="50" className="mb-4">
                      <img
                        src={pattern.image || "/placeholder.svg"}
                        alt={pattern.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{pattern.title}</h3>
                      <p className="text-gray-700 mb-4">{pattern.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {pattern.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Best for:</strong> {pattern.useCase}
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cloud Success Stories</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real-world examples of successful cloud transformations across industries
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <CardContainer className="inter-var">
                    <CardBody className="relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] border-gray-200 w-full h-auto rounded-xl border">
                      <CardItem translateZ="100">
                        <img
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          className="w-full h-80 object-cover rounded-xl"
                        />
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      {study.industry}
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-2 text-gray-700">
                              <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-4 pt-4">
                        <Badge variant="outline">Timeline: {study.timeline}</Badge>
                        <div className="flex gap-2">
                          {study.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from organizations that have transformed their infrastructure with our cloud solutions
            </p>
          </motion.div>

          <AnimatedTestimonials testimonials={testimonials} />

          <div className="mt-16">
            <InfiniteMovingCards items={movingTestimonials} direction="right" speed="slow" />
          </div>
        </div>
      </section>

      {/* Investment Tiers Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Spotlight className="absolute top-0 left-0" fill="#3b82f6" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Investment Tiers</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the cloud solution package that best fits your organization's needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {investmentTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContainer className="inter-var">
                  <CardBody
                    className={`relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] w-full h-full rounded-xl p-8 border ${
                      tier.popular
                        ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <CardItem translateZ="50" className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <p className="text-gray-700 mb-6">{tier.description}</p>
                      <ul className="space-y-3 text-left">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={`w-full mt-8 ${
                          tier.popular
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-gray-900 hover:bg-gray-800 text-white"
                        }`}
                      >
                        <Link href="/start?service=cloud-solutions">Get Started</Link>
                      </Button>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FAQSection faqs={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
