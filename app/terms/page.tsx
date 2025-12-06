"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function TermsOfServicePage() {
  const lastUpdated = "November 23, 2025"

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        {
          text: "By accessing or using MolaTech's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        },
        {
          text: "We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of those changes.",
        },
      ],
    },
    {
      title: "2. Description of Services",
      content: [
        {
          text: "MolaTech provides technology consulting and development services, including but not limited to:",
          list: [
            "Web Development and Design",
            "Mobile Application Development",
            "Cloud Solutions and Infrastructure",
            "Cybersecurity Services",
            "Digital Marketing",
            "IT Training and Consultancy",
            "Automation and Workflow Solutions",
          ],
        },
        {
          text: "The specific scope, deliverables, and terms of any project will be outlined in a separate agreement or statement of work.",
        },
      ],
    },
    {
      title: "3. Client Responsibilities",
      content: [
        {
          text: "As a client of MolaTech, you agree to:",
          list: [
            "Provide accurate and complete information required for your project",
            "Respond to requests for information and feedback in a timely manner",
            "Ensure you have the necessary rights and permissions for any content you provide",
            "Make payments according to the agreed-upon schedule",
            "Designate authorized representatives for project communication",
            "Review and approve deliverables within agreed timeframes",
          ],
        },
      ],
    },
    {
      title: "4. Intellectual Property Rights",
      content: [
        {
          subtitle: "Our Intellectual Property",
          text: "All content on the MolaTech website, including text, graphics, logos, images, and software, is the property of MolaTech or its licensors and is protected by intellectual property laws.",
        },
        {
          subtitle: "Client Work Product",
          text: "Upon full payment of all fees, clients receive ownership of the final deliverables as specified in the project agreement. MolaTech retains the right to:",
          list: [
            "Use project work in our portfolio and marketing materials",
            "Retain ownership of pre-existing tools, frameworks, and methodologies",
            "Reuse generic code and components in other projects",
          ],
        },
        {
          subtitle: "Third-Party Components",
          text: "Projects may include third-party software, libraries, or services that are subject to their own license terms. Clients are responsible for complying with these terms.",
        },
      ],
    },
    {
      title: "5. Payment Terms",
      content: [
        {
          text: "Payment terms are established in individual project agreements. General terms include:",
          list: [
            "Deposits may be required before project commencement",
            "Milestone payments may be required for larger projects",
            "Final payment is due upon project completion and delivery",
            "Late payments may incur interest charges",
            "All fees are exclusive of applicable taxes unless stated otherwise",
          ],
        },
        {
          text: "We accept various payment methods as specified in your project agreement. Refunds are handled according to the terms of your specific agreement.",
        },
      ],
    },
    {
      title: "6. Project Timeline and Delivery",
      content: [
        {
          text: "Project timelines are estimates and may be affected by:",
          list: [
            "Scope changes or additional requirements",
            "Delays in receiving client feedback or materials",
            "Technical complexities discovered during development",
            "Third-party dependencies and integrations",
          ],
        },
        {
          text: "We will communicate any significant delays and work with clients to adjust timelines as needed. MolaTech is not liable for delays caused by circumstances beyond our reasonable control.",
        },
      ],
    },
    {
      title: "7. Warranties and Disclaimers",
      content: [
        {
          subtitle: "Service Warranty",
          text: "MolaTech warrants that services will be performed in a professional and workmanlike manner. We provide a warranty period (typically 30-90 days) for bug fixes on delivered work as specified in your project agreement.",
        },
        {
          subtitle: "Disclaimer",
          text: "EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.",
        },
        {
          text: "We do not guarantee:",
          list: [
            "Specific business results or outcomes",
            "Uninterrupted or error-free service",
            "That our services will meet all your requirements",
            "The accuracy or completeness of third-party content",
          ],
        },
      ],
    },
    {
      title: "8. Limitation of Liability",
      content: [
        {
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOLATECH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:",
          list: [
            "Loss of profits, revenue, or business opportunities",
            "Loss of data or data breaches caused by client systems",
            "Business interruption or downtime",
            "Costs of substitute services",
          ],
        },
        {
          text: "Our total liability for any claim arising from these terms or our services shall not exceed the total fees paid by you for the specific service giving rise to the claim.",
        },
      ],
    },
    {
      title: "9. Confidentiality",
      content: [
        {
          text: "Both parties agree to maintain the confidentiality of proprietary information shared during the course of the engagement. This includes:",
          list: [
            "Business strategies and plans",
            "Technical specifications and source code",
            "Customer data and personal information",
            "Financial information and pricing",
            "Trade secrets and know-how",
          ],
        },
        {
          text: "Confidentiality obligations survive the termination of any agreement for a period of three (3) years, except for trade secrets which remain confidential indefinitely.",
        },
      ],
    },
    {
      title: "10. Termination",
      content: [
        {
          text: "Either party may terminate the engagement:",
          list: [
            "For convenience with 30 days written notice",
            "Immediately for material breach that is not cured within 15 days",
            "Immediately if the other party becomes insolvent",
          ],
        },
        {
          text: "Upon termination:",
          list: [
            "Client shall pay for all services rendered up to the termination date",
            "MolaTech shall deliver all completed work product",
            "Both parties shall return or destroy confidential information",
            "Provisions that by their nature should survive will remain in effect",
          ],
        },
      ],
    },
    {
      title: "11. Indemnification",
      content: [
        {
          text: "You agree to indemnify and hold harmless MolaTech, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from:",
          list: [
            "Your use of our services",
            "Your violation of these terms",
            "Your infringement of any third-party rights",
            "Content you provide for use in projects",
          ],
        },
      ],
    },
    {
      title: "12. Dispute Resolution",
      content: [
        {
          text: "Any disputes arising from these terms or our services shall be resolved as follows:",
          list: [
            "First, through good faith negotiation between the parties",
            "If unresolved, through mediation with a mutually agreed mediator",
            "If still unresolved, through binding arbitration",
            "The prevailing party shall be entitled to recover reasonable attorneys' fees",
          ],
        },
        {
          text: "These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles.",
        },
      ],
    },
    {
      title: "13. General Provisions",
      content: [
        {
          subtitle: "Entire Agreement",
          text: "These terms, together with any project agreements, constitute the entire agreement between you and MolaTech regarding our services.",
        },
        {
          subtitle: "Severability",
          text: "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
        },
        {
          subtitle: "Waiver",
          text: "No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.",
        },
        {
          subtitle: "Assignment",
          text: "You may not assign these terms without our prior written consent. We may assign our rights and obligations without restriction.",
        },
        {
          subtitle: "Force Majeure",
          text: "Neither party shall be liable for delays or failures in performance resulting from circumstances beyond reasonable control.",
        },
      ],
    },
    {
      title: "14. Contact Information",
      content: [
        {
          text: "For questions about these Terms of Service, please contact us:",
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Please read these terms carefully before using our services.
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
                Welcome to MolaTech. These Terms of Service ("Terms") govern your use of our website and services. By engaging our services or using our website, you agree to these Terms.
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
                  href="/privacy"
                  className="text-purple-600 hover:text-purple-700 underline underline-offset-4"
                >
                  Privacy Policy
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
