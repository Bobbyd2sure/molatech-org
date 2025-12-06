"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 23, 2025"

  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. This includes:",
          list: [
            "Name and contact information (email address, phone number, mailing address)",
            "Business information (company name, job title, industry)",
            "Project requirements and specifications",
            "Payment and billing information",
            "Communication preferences",
          ],
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information when you visit, use, or navigate our website. This information does not reveal your specific identity but may include:",
          list: [
            "Device and browser information",
            "IP address and location data",
            "Pages visited and time spent on pages",
            "Referring URLs and exit pages",
            "Operating system and platform information",
          ],
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          text: "We use the information we collect for various business purposes, including:",
          list: [
            "To provide, operate, and maintain our services",
            "To improve, personalize, and expand our services",
            "To understand and analyze how you use our website",
            "To develop new products, services, features, and functionality",
            "To communicate with you about projects, updates, and promotional offers",
            "To process transactions and send related information",
            "To send administrative information and important notices",
            "To respond to inquiries and offer customer support",
            "To protect against fraudulent or illegal activity",
          ],
        },
      ],
    },
    {
      title: "3. Sharing Your Information",
      content: [
        {
          text: "We may share your information in the following situations:",
          list: [
            "With service providers who assist us in operating our business",
            "With business partners for joint marketing initiatives",
            "When required by law or to respond to legal process",
            "To protect our rights, privacy, safety, or property",
            "In connection with a merger, acquisition, or sale of assets",
            "With your consent or at your direction",
          ],
        },
        {
          text: "We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.",
        },
      ],
    },
    {
      title: "4. Cookies and Tracking Technologies",
      content: [
        {
          text: "We use cookies and similar tracking technologies to collect and store information about your interactions with our website. These technologies help us:",
          list: [
            "Remember your preferences and settings",
            "Understand how you interact with our website",
            "Analyze website traffic and performance",
            "Deliver relevant content and advertisements",
            "Improve our services and user experience",
          ],
        },
        {
          text: "You can control cookie settings through your browser preferences. However, disabling cookies may limit your ability to use certain features of our website.",
        },
      ],
    },
    {
      title: "5. Data Security",
      content: [
        {
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:",
          list: [
            "Encryption of data in transit and at rest",
            "Regular security assessments and audits",
            "Access controls and authentication procedures",
            "Employee training on data protection practices",
            "Incident response and breach notification procedures",
          ],
        },
        {
          text: "While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.",
        },
      ],
    },
    {
      title: "6. Data Retention",
      content: [
        {
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When determining retention periods, we consider:",
          list: [
            "The nature and sensitivity of the information",
            "The purposes for which we process the information",
            "Applicable legal, regulatory, and contractual requirements",
            "Our legitimate business interests",
          ],
        },
      ],
    },
    {
      title: "7. Your Privacy Rights",
      content: [
        {
          text: "Depending on your location, you may have certain rights regarding your personal information, including:",
          list: [
            "Right to access and receive a copy of your personal information",
            "Right to correct inaccurate or incomplete information",
            "Right to request deletion of your personal information",
            "Right to restrict or object to processing",
            "Right to data portability",
            "Right to withdraw consent at any time",
            "Right to lodge a complaint with a supervisory authority",
          ],
        },
        {
          text: "To exercise any of these rights, please contact us using the information provided below.",
        },
      ],
    },
    {
      title: "8. Children's Privacy",
      content: [
        {
          text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
        },
      ],
    },
    {
      title: "9. International Data Transfers",
      content: [
        {
          text: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We take appropriate safeguards to ensure that your personal information remains protected in accordance with this privacy policy.",
        },
      ],
    },
    {
      title: "10. Changes to This Privacy Policy",
      content: [
        {
          text: "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new privacy policy on this page and updating the \"Last Updated\" date. We encourage you to review this privacy policy periodically.",
        },
      ],
    },
    {
      title: "11. Contact Us",
      content: [
        {
          text: "If you have questions or concerns about this privacy policy or our privacy practices, please contact us at:",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <BackgroundBeams className="opacity-30" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-gray dark:prose-invert max-w-none"
          >
            <div className="bg-muted/30 rounded-xl p-6 mb-8 border">
              <p className="text-muted-foreground m-0">
                MolaTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-foreground">{section.title}</h2>
                {section.content.map((item, idx) => (
                  <div key={idx} className="mb-4">
                    {item.subtitle && (
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{item.subtitle}</h3>
                    )}
                    {item.text && (
                      <p className="text-muted-foreground mb-3">{item.text}</p>
                    )}
                    {item.list && (
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        {item.list.map((listItem, listIdx) => (
                          <li key={listIdx}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border"
            >
              <p className="font-semibold text-foreground mb-4">MolaTech</p>
              <div className="space-y-2 text-muted-foreground">
                <p>701 Tillery Street Unit 12 2179</p>
                <p>Austin, TX 78702</p>
                <p>Email: <Link href="mailto:info@molatech.org" className="text-purple-600 hover:text-purple-700">info@molatech.org</Link></p>
              </div>
            </motion.div>

            {/* Related Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 pt-8 border-t"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Related Documents</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/terms"
                  className="text-purple-600 hover:text-purple-700 underline underline-offset-4"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/contact"
                  className="text-purple-600 hover:text-purple-700 underline underline-offset-4"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
