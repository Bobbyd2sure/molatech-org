"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function ServicesContact() {
  const { isLoading } = useLoading()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const services = [
    "JAMB Form Support",
    "Financial Assistance",
    "Mentorship Programs",
    "Educational Resources",
    "Career Development",
    "Community Building",
    "General Inquiry",
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      content: "kenny@kennykunma.com",
      description: "Best for detailed inquiries and document sharing",
      response: "Within 24 hours",
      color: "emerald",
    },
    {
      icon: Phone,
      title: "Phone Support",
      content: "+234 (0) 123 456 7890",
      description: "Direct line for urgent matters and consultations",
      response: "Mon-Fri, 9AM-6PM",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "Office Visits",
      content: "Lagos, Nigeria",
      description: "Schedule in-person meetings and consultations",
      response: "By appointment",
      color: "purple",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600 bg-emerald-50 text-emerald-600",
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="services-contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-4">
              <Skeleton className="h-10 w-40 mx-auto" />
              <Skeleton className="h-16 w-96 mx-auto" />
              <Skeleton className="h-8 w-[500px] max-w-full mx-auto" />
            </div>
          ) : (
            <>
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4">
                <Send className="h-4 w-4 mr-2" />
                Get Started Today
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready to Begin Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Educational Journey?
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Take the first step towards achieving your educational goals. Reach out today and let's discuss how our
                services can support your success.
              </p>
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                  <Send className="h-6 w-6 text-emerald-600 mr-3" />
                  Request Support
                </CardTitle>
                <p className="text-slate-600">
                  Fill out the form below to get started with our services. I'll respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <Alert className="mb-6 border-emerald-200 bg-emerald-50">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <AlertDescription className="text-emerald-800">
                      Thank you for your request! I'll get back to you within 24 hours with next steps.
                    </AlertDescription>
                  </Alert>
                )}

                {isLoading ? (
                  <div className="space-y-6">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                ) : (
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
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                          placeholder="+234 (0) 123 456 7890"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-slate-200 rounded-md focus:border-emerald-500 focus:ring-emerald-500 bg-white"
                          disabled={isSubmitting}
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                        Tell me about your situation *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 h-32 resize-none"
                        placeholder="Please describe your educational goals, current situation, and how I can help you..."
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Submit Request
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Multiple Ways to Connect</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Choose the contact method that works best for you. I'm committed to responding promptly and providing
                the support you need.
              </p>
            </div>

            <div className="space-y-6">
              {isLoading
                ? [...Array(3)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
                : contactMethods.map((method, index) => {
                    const colorClasses = getColorClasses(method.color)
                    return (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div
                              className={`bg-gradient-to-r ${colorClasses.split(" ")[0]} ${colorClasses.split(" ")[1]} p-3 rounded-xl`}
                            >
                              <method.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 text-lg mb-1">{method.title}</h4>
                              <div className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 font-medium text-lg mb-2">
                                {method.content}
                              </div>
                              <p className="text-slate-600 text-sm mb-2">{method.description}</p>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-slate-400" />
                                <span className="text-slate-500 text-sm">{method.response}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
            </div>

            {/* Quick Stats */}
            {!isLoading && (
              <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 mr-3" />
                    <h4 className="font-semibold text-lg">Join Our Community</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-emerald-100 text-sm">Students Helped</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-emerald-100 text-sm">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">24hr</div>
                      <div className="text-emerald-100 text-sm">Response Time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
