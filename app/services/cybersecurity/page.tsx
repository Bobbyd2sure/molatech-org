"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Eye,
  FileText,
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Target,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
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

export default function CybersecurityPage() {
  const [activeTab, setActiveTab] = useState("compliance")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Cybersecurity Services for FocusCards
  const securityServices = [
    {
      title: "GRC Consulting",
      description:
        "Comprehensive governance, risk, and compliance solutions to strengthen your security posture and ensure regulatory adherence.",
      icon: <FileText className="h-6 w-6" />,
      link: "/start?service=grc",
      features: ["ISO 27001 Implementation", "SOC 2 Compliance", "Risk Assessment & Management", "Policy Development"],
      technologies: ["NIST Framework", "ISO Standards", "COBIT", "COSO"],
      timeline: "3-6 months",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Penetration Testing",
      description:
        "Comprehensive security assessments to identify vulnerabilities and strengthen your defenses against cyber threats.",
      icon: <Target className="h-6 w-6" />,
      link: "/start?service=pentest",
      features: [
        "Network Penetration Testing",
        "Web Application Security",
        "Social Engineering Tests",
        "Wireless Security Assessment",
      ],
      technologies: ["Metasploit", "Burp Suite", "Nmap", "OWASP"],
      timeline: "2-4 weeks",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Security Audits",
      description:
        "Thorough security audits and compliance assessments to ensure your organization meets industry standards.",
      icon: <Eye className="h-6 w-6" />,
      link: "/start?service=audit",
      features: [
        "Compliance Gap Analysis",
        "Security Control Testing",
        "Vulnerability Assessments",
        "Remediation Planning",
      ],
      technologies: ["Nessus", "Qualys", "Rapid7", "OpenVAS"],
      timeline: "4-8 weeks",
      gradient: "from-red-600 to-pink-500",
    },
    {
      title: "Incident Response",
      description:
        "24/7 incident response services to quickly contain, investigate, and recover from security breaches.",
      icon: <Zap className="h-6 w-6" />,
      link: "/start?service=incident",
      features: ["24/7 Emergency Response", "Forensic Investigation", "Breach Containment", "Recovery Planning"],
      technologies: ["SIEM Tools", "Forensic Software", "Threat Intelligence", "EDR"],
      timeline: "Immediate response",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "Security Training",
      description:
        "Comprehensive security awareness training to educate your team and reduce human-related security risks.",
      icon: <Users className="h-6 w-6" />,
      link: "/start?service=training",
      features: ["Phishing Simulation", "Security Awareness Training", "Compliance Training", "Executive Briefings"],
      technologies: ["KnowBe4", "Proofpoint", "Custom LMS", "Simulation Tools"],
      timeline: "Ongoing program",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Cloud Security",
      description:
        "Specialized cloud security services to protect your cloud infrastructure and ensure secure cloud adoption.",
      icon: <Database className="h-6 w-6" />,
      link: "/start?service=cloud-security",
      features: ["Cloud Security Assessment", "CSPM Implementation", "Container Security", "DevSecOps Integration"],
      technologies: ["AWS Security", "Azure Security", "GCP Security", "Kubernetes"],
      timeline: "2-6 months",
      gradient: "from-indigo-500 to-blue-500",
    },
  ]

  // Statistics data
  const securityStats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Shield className="h-8 w-8" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="h-8 w-8" /> },
    { number: "< 15min", label: "Incident Response Time", icon: <Clock className="h-8 w-8" /> },
    { number: "100%", label: "Compliance Success Rate", icon: <CheckCircle className="h-8 w-8" /> },
    { number: "85%", label: "Risk Reduction Average", icon: <TrendingUp className="h-8 w-8" /> },
    { number: "500+", label: "Security Assessments", icon: <Target className="h-8 w-8" /> },
  ]

  // Technologies and frameworks
  const securityTechnologies = {
    compliance: [
      { name: "ISO 27001", description: "International security management standard" },
      { name: "SOC 2", description: "Service organization control framework" },
      { name: "NIST Cybersecurity Framework", description: "Comprehensive security framework" },
      { name: "GDPR", description: "General Data Protection Regulation" },
      { name: "HIPAA", description: "Healthcare data protection standard" },
      { name: "PCI DSS", description: "Payment card industry security standard" },
    ],
    tools: [
      { name: "Splunk", description: "Security information and event management" },
      { name: "CrowdStrike", description: "Endpoint detection and response" },
      { name: "Nessus", description: "Vulnerability assessment platform" },
      { name: "Metasploit", description: "Penetration testing framework" },
      { name: "Burp Suite", description: "Web application security testing" },
      { name: "Wireshark", description: "Network protocol analyzer" },
    ],
    cloud: [
      { name: "AWS Security Hub", description: "Centralized security findings" },
      { name: "Azure Security Center", description: "Cloud security posture management" },
      { name: "Google Cloud Security", description: "GCP security services" },
      { name: "Prisma Cloud", description: "Cloud native security platform" },
      { name: "Aqua Security", description: "Container and cloud security" },
      { name: "Twistlock", description: "Container security platform" },
    ],
    threat: [
      { name: "MITRE ATT&CK", description: "Threat intelligence framework" },
      { name: "Threat Intelligence Platforms", description: "Real-time threat data" },
      { name: "YARA Rules", description: "Malware identification patterns" },
      { name: "STIX/TAXII", description: "Threat information sharing" },
      { name: "OpenIOC", description: "Indicators of compromise" },
      { name: "Cyber Kill Chain", description: "Attack progression model" },
    ],
  }

  // Testimonials
  const testimonials = [
    {
      quote:
        "MolaTech's cybersecurity team transformed our security posture completely. Their GRC consulting helped us achieve SOC 2 compliance in record time, and their ongoing security monitoring has prevented multiple potential breaches. The team's expertise in both technical security and regulatory compliance is unmatched.",
      name: "Sarah Mitchell",
      designation: "CISO, TechCorp Industries",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The penetration testing services provided by MolaTech revealed critical vulnerabilities we never knew existed. Their detailed reports and remediation guidance helped us strengthen our defenses significantly. The incident response training they provided was invaluable when we faced a real security event.",
      name: "David Chen",
      designation: "IT Security Manager, HealthFirst Medical",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Working with MolaTech on our cloud security strategy was a game-changer. They helped us implement comprehensive security controls across our AWS infrastructure and established a robust DevSecOps pipeline. Our security incidents dropped by 90% after their implementation.",
      name: "Maria Rodriguez",
      designation: "Cloud Architect, FinanceFlow Solutions",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The security awareness training program designed by MolaTech significantly improved our team's security consciousness. Phishing attempts that used to succeed are now immediately reported by our staff. Their approach to making security training engaging and practical is exceptional.",
      name: "James Thompson",
      designation: "HR Director, GlobalTech Enterprises",
      src: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Additional testimonials for infinite scroll
  const additionalTestimonials = [
    {
      quote:
        "Outstanding incident response capabilities. When we faced a security breach, MolaTech's team was on-site within hours and had the situation contained quickly.",
      name: "Lisa Wang",
      title: "CTO, DataSecure Inc",
    },
    {
      quote:
        "Their risk assessment methodology is thorough and practical. We now have a clear understanding of our security risks and a roadmap to address them.",
      name: "Robert Kim",
      title: "Risk Manager, SecureBank",
    },
    {
      quote:
        "The compliance consulting services helped us navigate complex regulatory requirements with ease. Highly professional and knowledgeable team.",
      name: "Jennifer Lee",
      title: "Compliance Officer, MedTech Solutions",
    },
    {
      quote:
        "Excellent penetration testing services. The detailed findings and recommendations helped us significantly improve our security posture.",
      name: "Michael Brown",
      title: "Security Engineer, CloudFirst",
    },
    {
      quote:
        "Their security training programs are engaging and effective. Our employees are now much more security-aware and proactive.",
      name: "Amanda Davis",
      title: "Training Manager, EduTech Corp",
    },
  ]

  // FAQ data
  const faqItems = [
    {
      question: "What is the difference between GRC and traditional cybersecurity?",
      answer:
        "GRC (Governance, Risk, and Compliance) takes a holistic approach to security by integrating governance frameworks, risk management processes, and compliance requirements. While traditional cybersecurity focuses on technical controls and threat prevention, GRC ensures that security efforts align with business objectives, regulatory requirements, and risk tolerance levels.",
    },
    {
      question: "How long does it take to achieve SOC 2 compliance?",
      answer:
        "SOC 2 compliance typically takes 3-6 months for the initial implementation, followed by a 3-12 month observation period for Type II certification. The timeline depends on your current security posture, organizational size, and the complexity of your systems. We provide a detailed roadmap and timeline during our initial assessment.",
    },
    {
      question: "What should I expect during a penetration test?",
      answer:
        "A penetration test involves simulated cyber attacks on your systems to identify vulnerabilities. The process includes reconnaissance, vulnerability identification, exploitation attempts, and detailed reporting. We provide comprehensive reports with risk ratings, evidence, and remediation recommendations. All testing is conducted safely with minimal impact on your operations.",
    },
    {
      question: "How do you handle incident response and what's included?",
      answer:
        "Our incident response service includes 24/7 emergency response, immediate threat containment, forensic investigation, evidence preservation, and recovery planning. We follow established frameworks like NIST and provide detailed incident reports, lessons learned, and recommendations to prevent future incidents.",
    },
    {
      question: "What compliance frameworks do you specialize in?",
      answer:
        "We specialize in major frameworks including ISO 27001, SOC 2, NIST Cybersecurity Framework, GDPR, HIPAA, PCI DSS, and industry-specific regulations. Our team has extensive experience helping organizations achieve and maintain compliance across multiple frameworks simultaneously.",
    },
    {
      question: "How do you measure the effectiveness of security training?",
      answer:
        "We use multiple metrics including phishing simulation results, security incident reduction, compliance test scores, and behavioral assessments. Our training programs include baseline measurements, ongoing assessments, and detailed reporting on improvement trends and areas needing additional focus.",
    },
    {
      question: "What's included in your cloud security assessments?",
      answer:
        "Cloud security assessments include configuration reviews, access control analysis, data protection evaluation, network security assessment, compliance gap analysis, and threat modeling. We cover all major cloud platforms (AWS, Azure, GCP) and provide detailed remediation roadmaps with prioritized recommendations.",
    },
    {
      question: "Do you provide ongoing security monitoring services?",
      answer:
        "Yes, we offer 24/7 security monitoring through our Security Operations Center (SOC). Services include real-time threat detection, incident response, vulnerability management, compliance monitoring, and regular security reporting. We can also integrate with your existing security tools and processes.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <WavyBackground
          colors={["#dc2626", "#ea580c", "#f97316", "#fb923c", "#fdba74"]}
          waveOpacity={0.3}
          speed="slow"
          className="absolute inset-0"
        />
        <BackgroundBeams className="absolute inset-0 opacity-20" />
        <FloatingParticles className="absolute inset-0" particleCount={60} colors={["#dc2626", "#ea580c", "#f97316"]} />
        <Spotlight className="absolute inset-0 opacity-30" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex justify-center"
            >
              <div className="p-6 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full backdrop-blur-sm border border-red-500/30">
                <Shield className="h-16 w-16 text-red-500" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Cybersecurity &
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  GRC Solutions
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20"
            >
              Comprehensive cybersecurity solutions combining advanced threat protection, governance frameworks, risk
              management, and compliance expertise to secure your digital assets and ensure regulatory adherence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white shadow-lg backdrop-blur-sm"
              >
                <Link href="/start?service=cybersecurity">
                  Start Security Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur-sm bg-white/10 border-white/30 text-gray-900 hover:bg-white/20"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </motion.div>

            {/* 3D Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16"
            >
              <CardContainer className="inter-var">
                <CardBody className="relative group/card">
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src="/cybersecurity-protection.png"
                      alt="Cybersecurity Protection"
                      className="h-96 w-full object-cover rounded-xl shadow-2xl"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="flex flex-col items-center text-gray-600"
              >
                <span className="text-sm mb-2">Scroll to explore</span>
                <ChevronDown className="h-6 w-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/50 relative">
        <BackgroundBeams className="absolute inset-0 opacity-10" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From governance and compliance to advanced threat protection, we provide end-to-end cybersecurity
              solutions
            </p>
          </motion.div>

          <FocusCards cards={securityServices} className="max-w-7xl mx-auto" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 relative overflow-hidden">
        <Spotlight className="absolute inset-0 opacity-20" />
        <FloatingParticles className="absolute inset-0" particleCount={40} />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Security Excellence by Numbers
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our track record speaks for itself - delivering measurable security improvements and compliance success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <Card className="h-full bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <CardItem translateZ="50" className="mb-4">
                          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                            {stat.icon}
                          </div>
                        </CardItem>
                        <CardItem translateZ="60">
                          <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                          <div className="text-gray-700 font-medium">{stat.label}</div>
                        </CardItem>
                      </CardContent>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process Section */}
      <section className="py-24 bg-muted/50 relative">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Our Security Methodology
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A proven 6-step approach to implementing comprehensive cybersecurity and GRC programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "🔍",
                title: "Assessment & Discovery",
                desc: "Comprehensive security posture evaluation, risk assessment, and compliance gap analysis to understand current state and identify priorities.",
              },
              {
                step: "📋",
                title: "Strategy & Planning",
                desc: "Develop tailored security strategy, compliance roadmap, and implementation plan aligned with business objectives and regulatory requirements.",
              },
              {
                step: "🛠️",
                title: "Implementation",
                desc: "Deploy security controls, policies, procedures, and technologies following industry best practices and compliance frameworks.",
              },
              {
                step: "🧪",
                title: "Testing & Validation",
                desc: "Conduct penetration testing, vulnerability assessments, and compliance audits to validate security effectiveness and identify gaps.",
              },
              {
                step: "📊",
                title: "Monitoring & Response",
                desc: "Implement continuous monitoring, threat detection, incident response capabilities, and regular security reporting and metrics.",
              },
              {
                step: "🔄",
                title: "Optimization & Improvement",
                desc: "Continuous improvement through regular reviews, updates to security controls, and adaptation to emerging threats and regulations.",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <Card className="h-full bg-gradient-to-br from-white to-red-50 border-red-200 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <CardItem translateZ="50" className="mb-6">
                          <div className="text-6xl mb-4">{phase.step}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                        </CardItem>
                        <CardItem translateZ="40">
                          <p className="text-gray-700 leading-relaxed">{phase.desc}</p>
                        </CardItem>
                      </CardContent>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Frameworks Section */}
      <section className="py-24 relative">
        <BackgroundBeams className="absolute inset-0 opacity-10" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Technologies & Frameworks
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage industry-leading tools, frameworks, and standards to deliver comprehensive security solutions
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="tools">Security Tools</TabsTrigger>
              <TabsTrigger value="cloud">Cloud Security</TabsTrigger>
              <TabsTrigger value="threat">Threat Intelligence</TabsTrigger>
            </TabsList>

            {Object.entries(securityTechnologies).map(([key, technologies]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-gradient-to-br from-white to-red-50 border-red-200 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                          <p className="text-gray-700 text-sm">{tech.description}</p>
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

      {/* Threat Landscape Section */}
      <section className="py-24 bg-muted/50 relative">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Current Threat Landscape
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding today's cybersecurity threats and how our solutions protect against them
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Network className="h-12 w-12" />,
                title: "Advanced Persistent Threats",
                description: "Sophisticated, long-term attacks targeting sensitive data and critical infrastructure",
                stats: "68% increase in APT attacks",
                protection: "Multi-layered defense, threat hunting, behavioral analysis",
              },
              {
                icon: <Smartphone className="h-12 w-12" />,
                title: "Ransomware & Malware",
                description: "Evolving ransomware tactics targeting businesses of all sizes with devastating impact",
                stats: "300% increase in ransomware",
                protection: "Endpoint protection, backup strategies, incident response",
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "Cloud Security Threats",
                description: "Misconfigurations, data breaches, and unauthorized access in cloud environments",
                stats: "45% of breaches are cloud-based",
                protection: "Cloud security posture management, access controls",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Social Engineering",
                description: "Human-targeted attacks including phishing, business email compromise, and fraud",
                stats: "85% involve human element",
                protection: "Security awareness training, email security, verification processes",
              },
            ].map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <Card className="h-full bg-gradient-to-br from-white to-red-50 border-red-200 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <CardItem translateZ="50" className="mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white mb-4">
                            {threat.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{threat.title}</h3>
                        </CardItem>
                        <CardItem translateZ="40" className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">{threat.description}</p>
                          <div className="bg-red-100 p-3 rounded-lg">
                            <p className="text-red-800 font-semibold text-sm">{threat.stats}</p>
                          </div>
                          <div className="bg-green-100 p-3 rounded-lg">
                            <p className="text-green-800 font-medium text-sm">
                              <strong>Our Protection:</strong> {threat.protection}
                            </p>
                          </div>
                        </CardItem>
                      </CardContent>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 relative">
        <Spotlight className="absolute inset-0 opacity-20" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Security Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real-world examples of how our cybersecurity and GRC solutions have protected organizations
            </p>
          </motion.div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {[
              {
                industry: "Financial Services",
                company: "Regional Bank",
                challenge: "Needed SOC 2 Type II compliance for regulatory requirements and customer trust",
                solution: "Comprehensive GRC program implementation with security controls and audit preparation",
                results: [
                  "SOC 2 Type II certification achieved in 4 months",
                  "Zero security incidents during audit period",
                  "Enabled $50M in new business opportunities",
                  "Improved customer confidence and retention",
                ],
                timeline: "4 months",
                badge: "SOC 2 Certified",
              },
              {
                industry: "Healthcare",
                company: "Multi-Location Medical Practice",
                challenge: "HIPAA compliance gaps and increasing cybersecurity threats to patient data",
                solution: "HIPAA compliance program, security training, and incident response planning",
                results: [
                  "100% HIPAA compliance achieved",
                  "90% reduction in security incidents",
                  "Staff security awareness improved by 85%",
                  "Avoided potential $2M in HIPAA fines",
                ],
                timeline: "6 months",
                badge: "HIPAA Compliant",
              },
              {
                industry: "Technology",
                company: "SaaS Startup",
                challenge: "Rapid growth requiring scalable security and compliance for enterprise customers",
                solution: "Cloud security implementation, penetration testing, and compliance framework",
                results: [
                  "Enterprise customer acquisition increased 200%",
                  "Security incidents reduced by 95%",
                  "Successful Series B funding round",
                  "ISO 27001 certification achieved",
                ],
                timeline: "8 months",
                badge: "ISO 27001",
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card">
                    <Card className="bg-gradient-to-br from-white to-red-50 border-red-200 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                          <div className="lg:w-1/3">
                            <CardItem translateZ="50">
                              <Badge className="mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-white">
                                {study.badge}
                              </Badge>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.industry}</h3>
                              <p className="text-gray-700 font-medium mb-4">{study.company}</p>
                              <div className="flex items-center text-sm text-gray-600 mb-4">
                                <Clock className="h-4 w-4 mr-2" />
                                {study.timeline}
                              </div>
                            </CardItem>
                          </div>
                          <div className="lg:w-2/3">
                            <CardItem translateZ="40" className="space-y-6">
                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                                <p className="text-gray-700">{study.challenge}</p>
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                                <p className="text-gray-700">{study.solution}</p>
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                                <ul className="space-y-2">
                                  {study.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                      <span className="text-gray-700">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardItem>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={ref} className="py-24 bg-muted/50 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from security leaders who have transformed their organizations with our cybersecurity solutions
            </p>
          </motion.div>

          {/* Main Animated Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </motion.div>

          {/* Infinite Moving Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              More Client Feedback
            </h3>
            <InfiniteMovingCards
              items={additionalTestimonials}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="py-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Investment Packages Section */}
      <section className="py-24 relative">
        <BackgroundBeams className="absolute inset-0 opacity-10" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Security Investment Tiers
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the right level of cybersecurity and GRC services for your organization's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Essential Security",
                description: "Perfect for small businesses starting their security journey",
                features: [
                  "Basic security assessment",
                  "Essential compliance guidance",
                  "Security awareness training",
                  "Incident response planning",
                  "Monthly security reports",
                  "Email and phone support",
                ],
                popular: false,
              },
              {
                name: "Comprehensive Protection",
                description: "Ideal for growing companies with complex security needs",
                features: [
                  "Full security and compliance audit",
                  "GRC program implementation",
                  "Penetration testing (quarterly)",
                  "24/7 security monitoring",
                  "Advanced threat detection",
                  "Compliance certification support",
                  "Dedicated security consultant",
                  "Emergency incident response",
                ],
                popular: true,
              },
              {
                name: "Enterprise Security",
                description: "Complete security solution for large organizations",
                features: [
                  "Comprehensive security program",
                  "Multi-framework compliance",
                  "Continuous penetration testing",
                  "Advanced threat hunting",
                  "Custom security training",
                  "Executive security briefings",
                  "Dedicated security team",
                  "Priority incident response",
                  "Regulatory liaison support",
                ],
                popular: false,
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <Card
                      className={`h-full relative ${tier.popular ? "border-red-500 border-2" : "border-red-200"} bg-gradient-to-br from-white to-red-50 hover:shadow-xl transition-all duration-300`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1">
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      <CardContent className="p-8">
                        <CardItem translateZ="50" className="mb-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                          <p className="text-gray-700 mb-6">{tier.description}</p>
                        </CardItem>
                        <CardItem translateZ="40" className="mb-8">
                          <ul className="space-y-3">
                            {tier.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardItem>
                        <CardItem translateZ="60">
                          <Button
                            asChild
                            className={`w-full ${tier.popular ? "bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600" : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"} text-white`}
                          >
                            <Link href="/start?service=cybersecurity">Get Started</Link>
                          </Button>
                        </CardItem>
                      </CardContent>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/50">
        <FAQSection
          title="Cybersecurity & GRC FAQ"
          description="Common questions about our cybersecurity services, compliance frameworks, and security solutions"
          faqs={faqItems}
        />
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <ContactSection />
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
