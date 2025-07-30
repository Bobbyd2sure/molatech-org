"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function ServicesFAQ() {
  const { isLoading } = useLoading()
  const [openItems, setOpenItems] = useState<number[]>([0]) // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Who is eligible for JAMB form support?",
      answer:
        "Students from low-income families who demonstrate academic potential and commitment to their education are eligible. We assess applications based on financial need, academic performance, and personal circumstances. Priority is given to students who show genuine dedication to their studies and have clear educational goals.",
      category: "JAMB Support",
    },
    {
      question: "How much financial assistance can students receive?",
      answer:
        "Financial assistance varies based on individual needs and available resources. Our standard support includes ₦5,000 for transportation and additional funding for educational materials as needed. We also provide emergency financial support for unexpected circumstances that might affect a student's education.",
      category: "Financial Aid",
    },
    {
      question: "What does the mentorship program include?",
      answer:
        "Our mentorship program includes one-on-one sessions with experienced mentors, group workshops, career guidance, study strategy development, and ongoing support throughout your educational journey. Mentors are matched based on academic interests and career goals to ensure the most relevant guidance.",
      category: "Mentorship",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The application review process typically takes 5-7 business days. Once approved, JAMB forms are distributed within 2-3 days, and mentorship matching occurs within one week. We strive to provide timely support to ensure students don't miss important deadlines.",
      category: "Process",
    },
    {
      question: "Can students from any state in Nigeria apply?",
      answer:
        "Yes, our services are available to students nationwide. While we have physical presence in major cities like Lagos, Abuja, and Port Harcourt, we also provide remote support and have partnerships with local organizations in other states to ensure widespread accessibility.",
      category: "Eligibility",
    },
    {
      question: "What support is available after university admission?",
      answer:
        "Our support continues throughout your university journey. We provide ongoing mentorship, connect you with our alumni network, offer career development workshops, and assist with internship and job placement opportunities. We believe in long-term relationships that extend beyond initial admission support.",
      category: "Ongoing Support",
    },
    {
      question: "How can parents or guardians get involved?",
      answer:
        "We encourage family involvement in our programs. Parents and guardians can participate in information sessions, receive regular updates on their child's progress, and access resources to better support their student's educational journey. We also provide guidance on how families can contribute to their child's success.",
      category: "Family Involvement",
    },
    {
      question: "Are there any costs associated with the services?",
      answer:
        "All our core services are provided completely free of charge. This includes JAMB forms, mentorship sessions, educational resources, and basic financial assistance. Our mission is to remove financial barriers to education, not create new ones.",
      category: "Costs",
    },
    {
      question: "How can I track my application status?",
      answer:
        "Once you submit an application, you'll receive a confirmation email with a tracking number. You can check your status through our online portal or contact our support team directly. We also send regular updates via SMS and email throughout the process.",
      category: "Process",
    },
    {
      question: "What happens if I don't get admitted to university?",
      answer:
        "If admission doesn't work out the first time, we don't give up on you. We provide additional support for reapplication, help identify alternative pathways, offer gap year guidance, and continue mentorship to strengthen your application for the following year. Many of our successful students needed multiple attempts.",
      category: "Support",
    },
  ]

  const categories = [...new Set(faqs.map((faq) => faq.category))]

  return (
    <section id="services-faq" className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20">
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
                <HelpCircle className="h-4 w-4 mr-2" />
                Frequently Asked Questions
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Got
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Questions?
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Find answers to common questions about our services, application process, and support programs.
              </p>
            </>
          )}
        </div>

        {/* Category filters */}
        {!isLoading && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-50 cursor-pointer transition-colors duration-200"
              >
                {category}
              </Badge>
            ))}
          </div>
        )}

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {isLoading
            ? [...Array(6)].map((_, i) => <Skeleton key={i} className="h-20 w-full" />)
            : faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <Button
                      variant="ghost"
                      className="w-full p-6 text-left justify-between hover:bg-emerald-50/50 transition-colors duration-200"
                      onClick={() => toggleItem(index)}
                    >
                      <div className="flex items-start space-x-4">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200 mt-1">
                          {faq.category}
                        </Badge>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 text-left">{faq.question}</h3>
                        </div>
                      </div>
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      )}
                    </Button>

                    {openItems.includes(index) && (
                      <div className="px-6 pb-6">
                        <div className="pl-20">
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
        </div>

        {/* Contact CTA */}
        {!isLoading && (
          <div className="text-center mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-emerald-100 mb-6">
                  Can't find the answer you're looking for? I'm here to help! Reach out directly and I'll get back to
                  you as soon as possible.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-50"
                  onClick={() => document.getElementById("services-contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                  <HelpCircle className="h-5 w-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
