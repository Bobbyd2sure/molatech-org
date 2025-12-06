"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  BarChart3,
  Search,
  Mail,
  Share2,
  Target,
  TrendingUp,
  Rocket,
  ArrowRight,
  Play,
  ChevronRight,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { FloatingParticles } from "@/components/ui/aceternity/floating-particles"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { FocusCards } from "@/components/ui/aceternity/focus-cards"
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CallToAction from "@/components/call-to-action"

export default function DigitalMarketingPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const statsRef = useRef(null)
  const processRef = useRef(null)
  const toolsRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const testimonialsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" })
  const isToolsInView = useInView(toolsRef, { once: true, margin: "-100px" })
  const isCaseStudiesInView = useInView(caseStudiesRef, { once: true, margin: "-100px" })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  const marketingServices = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Dominate search results with comprehensive SEO strategies that drive organic traffic and improve your online visibility.",
      icon: <Search className="h-8 w-8 text-green-500" />,
      features: [
        "Keyword Research & Analysis",
        "On-Page Optimization",
        "Technical SEO Audits",
        "Link Building Campaigns",
        "Local SEO",
        "Content Strategy",
      ],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Screaming Frog"],
      timeline: "3-6 months for results",
      gradient: "from-green-500 to-emerald-500",
      results: "Average 150% increase in organic traffic",
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Maximize ROI with targeted advertising campaigns across Google, Facebook, LinkedIn, and other premium platforms.",
      icon: <Target className="h-8 w-8 text-blue-500" />,
      features: [
        "Campaign Strategy",
        "Ad Creation & Testing",
        "Bid Management",
        "Landing Page Optimization",
        "Conversion Tracking",
        "Performance Analysis",
      ],
      technologies: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Microsoft Ads"],
      timeline: "Immediate results, ongoing optimization",
      gradient: "from-blue-500 to-cyan-500",
      results: "Average 300% ROI on ad spend",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build brand awareness and engage your audience with strategic social media campaigns across all major platforms.",
      icon: <Share2 className="h-8 w-8 text-purple-500" />,
      features: [
        "Content Creation",
        "Community Management",
        "Influencer Partnerships",
        "Social Advertising",
        "Analytics & Reporting",
        "Brand Monitoring",
      ],
      technologies: ["Hootsuite", "Buffer", "Sprout Social", "Canva"],
      timeline: "Ongoing engagement strategy",
      gradient: "from-purple-500 to-pink-500",
      results: "Average 250% increase in engagement",
    },
    {
      title: "Content Marketing",
      description:
        "Create compelling content that educates, engages, and converts your target audience into loyal customers.",
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      features: [
        "Content Strategy",
        "Blog Writing",
        "Video Production",
        "Infographic Design",
        "Email Campaigns",
        "Content Distribution",
      ],
      technologies: ["WordPress", "HubSpot", "Mailchimp", "Adobe Creative Suite"],
      timeline: "Ongoing content creation",
      gradient: "from-orange-500 to-red-500",
      results: "Average 200% increase in lead generation",
    },
    {
      title: "Email Marketing Automation",
      description:
        "Nurture leads and retain customers with personalized email campaigns and sophisticated automation workflows.",
      icon: <Mail className="h-8 w-8 text-indigo-500" />,
      features: [
        "Email Design",
        "Automation Workflows",
        "Segmentation",
        "A/B Testing",
        "Performance Tracking",
        "CRM Integration",
      ],
      technologies: ["Mailchimp", "Klaviyo", "ConvertKit", "ActiveCampaign"],
      timeline: "Setup in 2-4 weeks",
      gradient: "from-indigo-500 to-purple-500",
      results: "Average 400% ROI on email campaigns",
    },
    {
      title: "Analytics & Data Intelligence",
      description:
        "Make data-driven decisions with comprehensive analytics, reporting, and business intelligence solutions.",
      icon: <BarChart3 className="h-8 w-8 text-teal-500" />,
      features: [
        "Data Analysis",
        "Custom Dashboards",
        "Performance Reporting",
        "Conversion Tracking",
        "Attribution Modeling",
        "Predictive Analytics",
      ],
      technologies: ["Google Analytics", "Data Studio", "Tableau", "Power BI"],
      timeline: "Ongoing monitoring & reporting",
      gradient: "from-teal-500 to-green-500",
      results: "Average 180% improvement in decision making",
    },
  ]

  const marketingStats = [
    { label: "Increase in Website Traffic", value: 285, suffix: "%" },
    { label: "Average ROI on Campaigns", value: 450, suffix: "%" },
    { label: "Lead Generation Improvement", value: 320, suffix: "%" },
    { label: "Client Retention Rate", value: 95, suffix: "%" },
    { label: "Campaigns Launched", value: 500, suffix: "+" },
    { label: "Years of Experience", value: 12, suffix: "+" },
  ]

  const marketingProcess = [
    {
      step: "1",
      title: "🔍 Discovery & Audit",
      description:
        "Comprehensive analysis of your current marketing efforts, competitor research, and market opportunity assessment.",
      details: [
        "Current performance audit",
        "Competitor analysis",
        "Target audience research",
        "SWOT analysis",
        "Goal setting",
      ],
    },
    {
      step: "2",
      title: "📊 Strategy Development",
      description:
        "Create a customized digital marketing strategy aligned with your business objectives and target audience.",
      details: [
        "Marketing strategy blueprint",
        "Channel selection",
        "Budget allocation",
        "Timeline planning",
        "KPI definition",
      ],
    },
    {
      step: "3",
      title: "🎨 Creative Development",
      description:
        "Design compelling creatives, copy, and content that resonates with your audience and drives engagement.",
      details: ["Ad creative design", "Copy writing", "Landing page creation", "Content calendar", "Brand guidelines"],
    },
    {
      step: "4",
      title: "🚀 Campaign Launch",
      description:
        "Execute multi-channel campaigns with precision timing and coordinated messaging across all platforms.",
      details: [
        "Campaign setup",
        "Tracking implementation",
        "Quality assurance",
        "Soft launch testing",
        "Full deployment",
      ],
    },
    {
      step: "5",
      title: "📈 Monitor & Optimize",
      description: "Continuous monitoring, testing, and optimization to maximize performance and ROI.",
      details: ["Performance monitoring", "A/B testing", "Bid optimization", "Creative refresh", "Strategy refinement"],
    },
    {
      step: "6",
      title: "📋 Report & Scale",
      description: "Detailed reporting and strategic recommendations for scaling successful campaigns.",
      details: [
        "Performance reporting",
        "ROI analysis",
        "Scaling strategies",
        "Future planning",
        "Continuous improvement",
      ],
    },
  ]

  const marketingTools = [
    { name: "Google Analytics", category: "Analytics", description: "Advanced web analytics and reporting" },
    { name: "Google Ads", category: "PPC", description: "Search and display advertising platform" },
    { name: "Facebook Ads Manager", category: "Social", description: "Social media advertising and targeting" },
    { name: "SEMrush", category: "SEO", description: "SEO research and competitive analysis" },
    { name: "HubSpot", category: "CRM", description: "Marketing automation and CRM platform" },
    { name: "Mailchimp", category: "Email", description: "Email marketing and automation" },
    { name: "Hootsuite", category: "Social", description: "Social media management platform" },
    { name: "Ahrefs", category: "SEO", description: "SEO tools and backlink analysis" },
    { name: "Canva", category: "Design", description: "Graphic design and content creation" },
    { name: "Hotjar", category: "Analytics", description: "User behavior and heatmap analysis" },
    { name: "Klaviyo", category: "Email", description: "E-commerce email marketing" },
    { name: "Buffer", category: "Social", description: "Social media scheduling and analytics" },
  ]

  const caseStudies = [
    {
      title: "E-commerce Fashion Brand",
      industry: "Fashion & Retail",
      challenge: "Low online visibility and poor conversion rates",
      solution: "Comprehensive SEO strategy, PPC campaigns, and social media marketing",
      results: [
        "400% increase in organic traffic",
        "250% improvement in conversion rate",
        "300% growth in online sales",
        "150% increase in brand awareness",
      ],
      timeline: "6 months",
      image: "/service-digital-marketing.png",
    },
    {
      title: "SaaS Technology Platform",
      industry: "Technology",
      challenge: "High customer acquisition costs and low lead quality",
      solution: "Content marketing strategy, marketing automation, and targeted PPC",
      results: [
        "60% reduction in CAC",
        "180% increase in qualified leads",
        "95% improvement in lead quality",
        "220% growth in trial signups",
      ],
      timeline: "4 months",
      image: "/service-digital-marketing.png",
    },
    {
      title: "Healthcare Services",
      industry: "Healthcare",
      challenge: "Limited online presence and patient acquisition",
      solution: "Local SEO, reputation management, and targeted advertising",
      results: [
        "500% increase in online appointments",
        "300% growth in local search visibility",
        "85% improvement in online reviews",
        "200% increase in new patient inquiries",
      ],
      timeline: "3 months",
      image: "/service-digital-marketing.png",
    },
  ]

  const testimonials = [
    {
      quote:
        "The digital marketing strategy they developed transformed our online presence completely. Our e-commerce sales increased by 400% within just 6 months, and our brand awareness has never been higher.",
      name: "Adeola Mwandala",
      designation: "CEO, Marte Beauty Inc.",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Their PPC campaigns delivered exceptional ROI. We saw a 300% return on our advertising spend and significantly reduced our customer acquisition costs. Highly recommend their expertise.",
      name: "Thomas Ndhlebe",
      designation: "Tenderglove Healthcare",
      src: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The SEO results were outstanding. Our organic traffic increased by 250% and we're now ranking #1 for our most important keywords. Their team's expertise is unmatched.",
      name: "Mary Smith",
      designation: "CEO, Marymia Limited",
      src: "/placeholder.svg?height=100&width=100",
    },
  ]

  const additionalTestimonials = [
    {
      quote: "Exceptional email marketing campaigns that delivered 450% ROI",
      author: "Adeola Mwandala",
      role: "CEO, Marte Beauty Inc.",
    },
    {
      quote: "Their content marketing strategy generated 300% more qualified leads",
      author: "Thomas Ndhlebe",
      role: "Tenderglove Healthcare",
    },
    {
      quote: "Outstanding analytics and reporting that improved our decision making",
      author: "Mary Smith",
      role: "CEO, Marymia Limited",
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results vary by channel: PPC can show immediate results, SEO typically takes 3-6 months, social media builds momentum over 2-3 months, and email marketing can show results within weeks. We provide detailed timelines for each strategy.",
    },
    {
      question: "What's included in your digital marketing packages?",
      answer:
        "Our packages include strategy development, campaign creation and management, content creation, analytics and reporting, ongoing optimization, and dedicated account management. We customize packages based on your specific needs and goals.",
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer:
        "We track key performance indicators (KPIs) such as website traffic, conversion rates, cost per acquisition, return on ad spend (ROAS), engagement rates, and ultimately, revenue growth. We provide detailed monthly reports with actionable insights.",
    },
    {
      question: "Do you work with businesses in all industries?",
      answer:
        "Yes, we have experience across various industries including e-commerce, SaaS, healthcare, finance, education, and more. We adapt our strategies to meet the unique challenges and opportunities of each industry.",
    },
    {
      question: "What's your approach to budget allocation across different channels?",
      answer:
        "We analyze your business goals, target audience, and competitive landscape to determine optimal budget allocation. Typically, we recommend a diversified approach with 40% for paid advertising, 30% for content and SEO, 20% for social media, and 10% for testing new channels.",
    },
    {
      question: "Can you help with marketing automation and CRM integration?",
      answer:
        "We specialize in marketing automation setup, CRM integration, lead nurturing workflows, and customer journey optimization. We work with platforms like HubSpot, Salesforce, Mailchimp, and others to streamline your marketing processes.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden">
        <WavyBackground
          colors={["#10b981", "#059669", "#047857", "#065f46", "#064e3b"]}
          waveOpacity={0.3}
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
        >
          <BackgroundBeams className="opacity-20" />
          <FloatingParticles count={50} color="#10b981" />
          <Spotlight className="hidden md:block" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="flex justify-center mb-6"
              >
                <div className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full backdrop-blur-sm border border-green-500/30">
                  <BarChart3 className="h-16 w-16 text-green-400" />
                </div>
              </motion.div>

              <div className="max-w-4xl space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                  <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Digital Marketing
                  </span>{" "}
                  <span className="text-white">That Drives Real Results</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-lg p-4"
                >
                  Data-driven marketing strategies that increase your online presence, generate qualified leads, and
                  accelerate business growth through proven digital channels.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg backdrop-blur-sm"
                  >
                    <Link href="/start?service=digital-marketing">
                      Start Your Campaign
                      <Rocket className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                  >
                    <Link href="#case-studies">
                      View Success Stories
                      <Play className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-8"
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card w-auto h-auto rounded-xl">
                    <CardItem translateZ="100" rotateX={5} rotateY={5} className="w-full">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 opacity-75 blur-xl group-hover/card:opacity-100 transition duration-1000"></div>
                        <img
                          alt="Digital Marketing Strategy"
                          className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl w-full max-w-2xl"
                          src="/digital-marketing-strategy.png"
                        />
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="flex flex-col items-center text-white/60"
                >
                  <span className="text-sm mb-2">Scroll to explore</span>
                  <ChevronRight className="h-6 w-6 rotate-90" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </WavyBackground>
      </section>

      {/* Marketing Services Section */}
      <section ref={servicesRef} className="w-full py-12 md:py-24 relative overflow-hidden">
        <BackgroundBeams className="opacity-10" />
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Comprehensive Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From SEO and PPC to social media and content marketing, we offer a full suite of digital marketing
              services designed to grow your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FocusCards cards={marketingServices} />
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        ref={statsRef}
        className="w-full py-12 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden"
      >
        <FloatingParticles count={30} color="#10b981" />
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our data-driven approach consistently delivers exceptional results for businesses across all industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {marketingStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <Card className="text-center p-6 h-full bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300">
                      <CardItem translateZ="50">
                        <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                          {stat.value}
                          {stat.suffix}
                        </div>
                        <div className="text-gray-700 font-medium">{stat.label}</div>
                      </CardItem>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process Section */}
      <section ref={processRef} className="w-full py-12 md:py-24 relative overflow-hidden">
        <Spotlight className="hidden md:block" />
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Our Proven Marketing Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic approach to digital marketing that ensures consistent results and continuous improvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <Card className="h-full bg-gradient-to-br from-white to-green-50 border-green-200 hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardItem translateZ="50">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                              {phase.step}
                            </div>
                            <div className="text-2xl">{phase.title.split(" ")[0]}</div>
                          </div>
                          <CardTitle className="text-xl text-gray-900">{phase.title.substring(2)}</CardTitle>
                        </CardItem>
                      </CardHeader>
                      <CardContent>
                        <CardItem translateZ="30">
                          <p className="text-gray-700 mb-4">{phase.description}</p>
                          <ul className="space-y-2">
                            {phase.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
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

      {/* Tools & Technologies Section */}
      <section
        ref={toolsRef}
        className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden"
      >
        <BackgroundBeams className="opacity-10" />
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isToolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Advanced Tools & Technologies</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage the best marketing tools and platforms to deliver superior results and insights.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Analytics">Analytics</TabsTrigger>
              <TabsTrigger value="PPC">PPC</TabsTrigger>
              <TabsTrigger value="SEO">SEO</TabsTrigger>
              <TabsTrigger value="Social">Social</TabsTrigger>
              <TabsTrigger value="Email">Email</TabsTrigger>
              <TabsTrigger value="Design">Design</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {marketingTools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isToolsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                      <div className="font-semibold text-gray-900 mb-1">{tool.name}</div>
                      <Badge variant="secondary" className="mb-2">
                        {tool.category}
                      </Badge>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {["Analytics", "PPC", "SEO", "Social", "Email", "Design"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {marketingTools
                    .filter((tool) => tool.category === category)
                    .map((tool, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                          <div className="font-semibold text-gray-900 mb-1">{tool.name}</div>
                          <Badge variant="secondary" className="mb-2">
                            {tool.category}
                          </Badge>
                          <p className="text-sm text-gray-600">{tool.description}</p>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" ref={caseStudiesRef} className="w-full py-12 md:py-24 relative overflow-hidden">
        <FloatingParticles count={40} color="#10b981" />
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Success Stories & Case Studies
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from real businesses. See how our digital marketing strategies have transformed companies
              across various industries.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isCaseStudiesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card">
                    <Card
                      className={`overflow-hidden bg-gradient-to-br from-white to-green-50 border-green-200 hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                      <div className="grid lg:grid-cols-2 gap-8 p-8">
                        <div className="space-y-6">
                          <CardItem translateZ="50">
                            <div className="flex items-center gap-4 mb-4">
                              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                                {study.industry}
                              </Badge>
                              <span className="text-sm text-gray-600">{study.timeline}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                          </CardItem>

                          <CardItem translateZ="30">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                                <p className="text-gray-700">{study.challenge}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                                <p className="text-gray-700">{study.solution}</p>
                              </div>
                            </div>
                          </CardItem>

                          <CardItem translateZ="40">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                              <div className="grid grid-cols-2 gap-4">
                                {study.results.map((result, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <span className="text-sm font-medium text-gray-700">{result}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardItem>
                        </div>

                        <CardItem translateZ="60" className="flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 opacity-75 blur-lg"></div>
                            <img
                              src={study.image || "/placeholder.svg"}
                              alt={study.title}
                              className="relative rounded-xl shadow-2xl w-full max-w-md"
                            />
                          </div>
                        </CardItem>
                      </div>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="w-full py-12 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden"
      >
        <BackgroundBeams className="opacity-10" />
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business owners and marketing leaders say about our digital
              marketing services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isTestimonialsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">More Client Success Stories</h3>
            <InfiniteMovingCards
              items={additionalTestimonials.map((testimonial) => ({
                quote: testimonial.quote,
                name: testimonial.author,
                title: testimonial.role,
              }))}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="py-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Investment Packages Section */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        <Spotlight className="hidden md:block" />
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Investment Packages
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the digital marketing package that best fits your business needs and growth objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Growth Starter",
                description: "Perfect for small businesses looking to establish their digital presence",
                features: [
                  "SEO Foundation Setup",
                  "Google Ads Management",
                  "Social Media Strategy",
                  "Monthly Reporting",
                  "Email Marketing Setup",
                  "Basic Analytics Tracking",
                ],
                popular: false,
              },
              {
                name: "Business Accelerator",
                description: "Ideal for growing businesses ready to scale their marketing efforts",
                features: [
                  "Comprehensive SEO Strategy",
                  "Multi-Platform PPC Campaigns",
                  "Content Marketing Program",
                  "Social Media Management",
                  "Marketing Automation",
                  "Advanced Analytics & Reporting",
                  "Conversion Rate Optimization",
                  "Monthly Strategy Calls",
                ],
                popular: true,
              },
              {
                name: "Enterprise Growth",
                description: "For established businesses seeking maximum market dominance",
                features: [
                  "Full-Service Digital Marketing",
                  "Custom Strategy Development",
                  "Dedicated Account Team",
                  "Advanced Attribution Modeling",
                  "Competitive Intelligence",
                  "Custom Dashboard & Reporting",
                  "Priority Support & Consultation",
                  "Quarterly Business Reviews",
                ],
                popular: false,
              },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card h-full">
                    <Card
                      className={`h-full p-8 relative ${tier.popular ? "border-green-500 shadow-xl scale-105" : "border-gray-200"} bg-white hover:shadow-xl transition-all duration-300`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1">
                            Most Popular
                          </Badge>
                        </div>
                      )}

                      <CardItem translateZ="50">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                          <p className="text-gray-600">{tier.description}</p>
                        </div>
                      </CardItem>

                      <CardItem translateZ="30">
                        <ul className="space-y-4 mb-8">
                          {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardItem>

                      <CardItem translateZ="40" className="mt-auto">
                        <Button
                          asChild
                          className={`w-full ${tier.popular ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" : ""}`}
                          variant={tier.popular ? "default" : "outline"}
                        >
                          <Link href="/start?service=digital-marketing">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardItem>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Section */}
      <ContactSection />

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
