"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  MessageCircle,
  DollarSign,
  Clock,
  CheckCircle,
  Play,
  Shield,
  Users,
  Zap,
  ChevronDown,
  Star,
  Gift,
  ArrowRight,
  Globe,
  Smartphone,
  CreditCard,
  TrendingUp,
  Lock,
  Award
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ChatMoneyCourseePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Course Modules
  const modules = [
    {
      number: "01",
      title: "Introduction to Paid Companionship",
      duration: "6 mins",
      lessons: [
        "What is virtual companionship and why people pay for it",
        "The loneliness economy - understanding your clients",
        "Legal and ethical considerations",
        "Setting realistic income expectations",
      ],
    },
    {
      number: "02",
      title: "Setting Up Your Profiles",
      duration: "9 mins",
      lessons: [
        "Creating a magnetic profile bio",
        "Choosing the right profile photos",
        "Setting your rates strategically",
        "Optimizing for platform algorithms",
      ],
    },
    {
      number: "03",
      title: "RentAFriend & FriendPC Masterclass",
      duration: "11 mins",
      lessons: [
        "Complete RentAFriend setup walkthrough",
        "FriendPC profile optimization",
        "Platform-specific strategies",
        "Getting your first clients fast",
      ],
    },
    {
      number: "04",
      title: "Conversation Frameworks",
      duration: "8 mins",
      lessons: [
        "Opening conversation templates",
        "Keeping conversations engaging",
        "Handling awkward situations",
        "Building rapport and trust",
      ],
    },
    {
      number: "05",
      title: "Premium Chat & Text Platforms",
      duration: "9 mins",
      lessons: [
        "Premium.Chat setup and optimization",
        "Text-based earning strategies",
        "Maximizing per-message earnings",
        "Building a texting client base",
      ],
    },
    {
      number: "06",
      title: "Building Regular Clients",
      duration: "10 mins",
      lessons: [
        "Converting one-time clients to regulars",
        "Creating booking systems",
        "Client retention strategies",
        "Managing multiple clients",
      ],
    },
    {
      number: "07",
      title: "Scaling Your Income",
      duration: "12 mins",
      lessons: [
        "When and how to raise your rates",
        "Expanding to multiple platforms",
        "Time management for maximum earnings",
        "Building your personal brand",
      ],
    },
    {
      number: "08",
      title: "Advanced Strategies",
      duration: "15 mins",
      lessons: [
        "Premium positioning techniques",
        "Niche specialization opportunities",
        "Passive income streams",
        "Long-term sustainability",
      ],
    },
  ]

  // Bonuses
  const bonuses = [
    {
      title: "50+ Conversation Starter Templates",
      value: "N15,000",
      description: "Never run out of things to say. Copy-paste templates for every situation.",
      icon: MessageCircle,
    },
    {
      title: "Boundary Scripts Collection",
      value: "N10,000",
      description: "Handle difficult clients professionally with these tested scripts.",
      icon: Shield,
    },
    {
      title: "Profile Bio Templates",
      value: "N8,000",
      description: "Proven bio templates that attract high-paying clients.",
      icon: Users,
    },
    {
      title: "Platform Comparison Chart",
      value: "N5,000",
      description: "Know exactly which platform is best for your goals.",
      icon: Globe,
    },
    {
      title: "Payment Setup Checklist",
      value: "N12,000",
      description: "Step-by-step guide for Payoneer, Wise & Nigerian bank setup.",
      icon: CreditCard,
    },
    {
      title: "Income & Client Tracker",
      value: "N7,000",
      description: "Track your earnings, clients, and growth professionally.",
      icon: TrendingUp,
    },
  ]

  // Testimonials
  const testimonials = [
    {
      name: "Chioma A.",
      location: "Lagos",
      image: "/placeholder.svg?height=80&width=80",
      text: "I made my first $347 in just 3 weeks! The scripts in Module 4 are exactly what I needed. Best investment I've made.",
      earnings: "$347 in 3 weeks",
      rating: 5,
    },
    {
      name: "Kemi O.",
      location: "UNILAG Student",
      image: "/placeholder.svg?height=80&width=80",
      text: "I was skeptical at first, but now I'm paying my own school fees. Made $890 last month working just 2-3 hours daily between lectures.",
      earnings: "$890/month",
      rating: 5,
    },
    {
      name: "Adaeze F.",
      location: "Abuja",
      image: "/placeholder.svg?height=80&width=80",
      text: "Just crossed my first $1,000 month! Month 1 was $180, now I'm at $1,247. The growth strategies in Module 7 really work.",
      earnings: "$1,247/month",
      rating: 5,
    },
    {
      name: "Sandra E.",
      location: "Port Harcourt",
      image: "/placeholder.svg?height=80&width=80",
      text: "I quit my 9-5 last month. Making $2,400/month now and I work from my bed. This course changed my life completely.",
      earnings: "$2,400/month",
      rating: 5,
    },
    {
      name: "Blessing N.",
      location: "Ibadan",
      image: "/placeholder.svg?height=80&width=80",
      text: "First week: $127. That's more than I made in a month at my old job. The payment setup guide saved me so much stress.",
      earnings: "$127 first week",
      rating: 5,
    },
    {
      name: "Grace O.",
      location: "Benin City",
      image: "/placeholder.svg?height=80&width=80",
      text: "Now averaging $600/week. The conversation templates are gold - I never run out of things to say anymore.",
      earnings: "$600/week",
      rating: 5,
    },
  ]

  // FAQ
  const faqs = [
    {
      question: "Is this actually legitimate?",
      answer: "Yes, 100%. Platforms like RentAFriend have been operating since 2009 and have paid out millions to companions worldwide. Virtual companionship is a real, growing industry driven by the loneliness epidemic in wealthy countries.",
    },
    {
      question: "Do I need to do anything inappropriate?",
      answer: "Absolutely not. This is strictly platonic companionship - conversation, emotional support, language practice, and friendly interaction. Nothing inappropriate is required or encouraged.",
    },
    {
      question: "Will this work in Nigeria?",
      answer: "Yes! We have a dedicated module on payment setup specifically for Nigeria, Ghana, and Cameroon. You'll learn how to set up Payoneer and Wise to receive USD payments directly to your local bank account.",
    },
    {
      question: "How much can I realistically make?",
      answer: "Beginners typically make $200-500 in their first month. With consistency, most students reach $800-1,500/month within 3-4 months. Top earners make $2,000-3,000+ monthly working 3-4 hours daily.",
    },
    {
      question: "Do I need any special skills or equipment?",
      answer: "No special skills required - just basic English and a friendly personality. Equipment-wise, a smartphone with internet is enough to start. A laptop is helpful but not required.",
    },
    {
      question: "How much time do I need to invest?",
      answer: "You can start with just 1-2 hours daily. Most successful students work 2-4 hours per day. The flexible schedule means you can work whenever suits you best.",
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We offer a 30-day money-back guarantee. If you follow the course, implement the strategies, and don't see results, we'll refund your full payment. No questions asked.",
    },
    {
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to all course materials, including any future updates. Plus, you'll have access to our private WhatsApp community for ongoing support.",
    },
  ]

  // Pain points
  const painPoints = [
    "Tired of sending job applications with no response?",
    "Frustrated with low-paying jobs that don't value your time?",
    "Want to earn in dollars while living in Nigeria?",
    "Need a flexible income that works around your schedule?",
    "Looking for something you can start immediately without capital?",
  ]

  // Stats
  const stats = [
    { value: "200+", label: "Students Enrolled" },
    { value: "$50K+", label: "Student Earnings" },
    { value: "4.9/5", label: "Course Rating" },
    { value: "8+", label: "Video Modules" },
  ]

  // Prevent hydration mismatch by only rendering on client
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative z-10 px-4 mx-auto py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-2 text-sm">
                <Zap className="w-4 h-4 mr-2 inline" />
                Limited Time: 67% Off Launch Price
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Get Paid </span>
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                $20-50/Hour
              </span>
              <br />
              <span className="text-white">Just To Chat Online</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              The complete step-by-step system to earn <span className="text-emerald-400 font-semibold">$500-2,000+ monthly</span> as a virtual companion — even if you have zero experience.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-10 text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span>No inappropriate content</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                <span>Works from Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <span>Phone is enough</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-emerald-500/25"
                onClick={() => window.open('https://molatech.selar.com', '_blank')}
              >
                Get Instant Access - N15,000
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6 rounded-xl"
                onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See What's Inside
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-slate-500"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Does This Sound Like You?
              </h2>
            </motion.div>

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-slate-800/50 border border-slate-700 rounded-xl p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-lg">?</span>
                  </div>
                  <span className="text-slate-300 text-lg">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-xl text-emerald-400 font-semibold">
                There's a better way. And it doesn't require any capital to start.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 relative bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                The Opportunity
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                People Pay <span className="text-emerald-400">Real Money</span> For Conversation
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                The loneliness epidemic is real. Millions of people in wealthy countries are willing to pay $20-50/hour (or more) just for quality conversation and companionship.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Just Chatting",
                  description: "Get paid to have friendly conversations via text, call, or video chat.",
                },
                {
                  icon: Globe,
                  title: "Work From Anywhere",
                  description: "All you need is a phone and internet. Work from your room, campus, anywhere.",
                },
                {
                  icon: DollarSign,
                  title: "Earn In Dollars",
                  description: "Get paid in USD and withdraw to your Nigerian bank account easily.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Real Results
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Students Are Already Earning
            </h2>
            <p className="text-xl text-slate-300">
              Here's what people just like you are achieving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.location}</div>
                      </div>
                      <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                        {testimonial.earnings}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 relative bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Complete Curriculum
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What's Inside The Course
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              8 comprehensive video modules taking you from complete beginner to confident earner
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`module-${index}`} className="border-none">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-700/30">
                          <div className="flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold">{module.number}</span>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Clock className="w-4 h-4" />
                                <span>{module.duration}</span>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <ul className="space-y-2 ml-16">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-start gap-2 text-slate-300">
                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
              <Gift className="w-4 h-4 mr-2 inline" />
              Free Bonuses
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              6 Exclusive Bonuses Included
            </h2>
            <p className="text-xl text-slate-300">
              Worth over N57,000 - yours FREE with the course
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-800/50 border-yellow-500/20 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Value: {bonus.value}
                  </div>
                  <CardContent className="p-6 pt-10">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                      <bonus.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{bonus.title}</h3>
                    <p className="text-slate-400 text-sm">{bonus.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Limited Time Offer
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-slate-300">
              Join 200+ students already earning as virtual companions
            </p>
          </motion.div>

          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-emerald-500/30 overflow-hidden relative">
                {/* Popular Badge */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-center py-2 font-semibold">
                  LAUNCH PRICE - 67% OFF
                </div>

                <CardContent className="p-8 pt-16">
                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="text-slate-400 line-through text-xl mb-1">N45,000</div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-5xl md:text-6xl font-bold text-white">N15,000</span>
                    </div>
                    <div className="text-emerald-400 mt-2">One-time payment. Lifetime access.</div>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-white text-lg">What's Included:</h4>
                    {[
                      "8 Comprehensive Video Modules",
                      "6 Bonus PDF Guides (N57,000 value)",
                      "Private WhatsApp Community Access",
                      "Lifetime Course Updates",
                      "Payment Setup Guide for Nigeria",
                      "30-Day Money-Back Guarantee",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white text-lg py-6 rounded-xl shadow-lg shadow-emerald-500/25"
                    onClick={() => window.open('https://molatech.selar.com', '_blank')}
                  >
                    Get Instant Access Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  {/* Trust Elements */}
                  <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Lock className="w-4 h-4" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>30-Day Guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/30 to-slate-900 border-emerald-500/30">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    30-Day Money-Back Guarantee
                  </h3>
                  <p className="text-lg text-slate-300 mb-6">
                    Try the entire course risk-free. If you follow the steps, implement the strategies, and don't see the potential to earn — simply email us within 30 days for a full refund. No questions asked. Your success is our priority.
                  </p>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-2">
                    100% Risk-Free Investment
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              Got Questions?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`faq-${index}`}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left text-white hover:no-underline hover:bg-slate-700/30">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-slate-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Your Financial Freedom Starts With One Decision
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                This time next month, you could already be earning in dollars. Or you could still be wondering "what if." The choice is yours.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white text-xl px-12 py-8 rounded-xl shadow-lg shadow-emerald-500/25"
                onClick={() => window.open('https://molatech.selar.com', '_blank')}
              >
                Yes, I Want To Start Earning
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>

              <p className="mt-6 text-slate-400">
                Join 200+ students already earning. 30-day money-back guarantee.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-slate-500 text-sm">
            <p>© 2025 Chat Money Course. All rights reserved.</p>
            <p className="mt-2">
              This site is not a part of Facebook, Google, or any social media platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
