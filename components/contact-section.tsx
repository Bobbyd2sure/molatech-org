"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Add mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile, { passive: true })
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      content: "kenny@kennykunma.com",
      link: "mailto:kenny@kennykunma.com",
      description: "Best for detailed inquiries",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+234 (0) 123 456 7890",
      link: "tel:+2341234567890",
      description: "Available during office hours",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Lagos, Nigeria",
      link: "#",
      description: "Serving students nationwide",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4">
            <Send className="h-4 w-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Work
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Together
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to make a difference in education? Whether you're a student seeking support, an educator looking to
            collaborate, or someone who shares my passion for educational equity, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                <Send className="h-6 w-6 text-emerald-600 mr-3" />
                Send Me a Message
              </CardTitle>
              <p className="text-slate-600">Fill out the form below and I'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent>
              {isSubmitted && (
                <Alert className="mb-6 border-emerald-200 bg-emerald-50">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <AlertDescription className="text-emerald-800">
                    Thank you for your message! I'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 ${
                        isMobile ? "min-h-[48px] text-base" : ""
                      }`}
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-32 resize-none ${
                      isMobile ? "min-h-[120px] text-base" : ""
                    }`}
                    placeholder="Tell me how I can help you..."
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isMobile ? "min-h-[48px] touch-friendly" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I'm always excited to connect with like-minded individuals who are passionate about education and making
                a positive impact in their communities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 p-3 rounded-xl">
                        <info.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 text-lg mb-1">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 font-medium text-lg"
                        >
                          {info.content}
                        </a>
                        <p className="text-slate-500 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator />

            <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 mr-3" />
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                </div>
                <div className="space-y-2 text-emerald-100">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-500">
                  <p className="text-emerald-100 text-sm">
                    <strong>Response Time:</strong> I typically respond to messages within 24 hours during business
                    days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their academic lives through personalized guidance and
                support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
