"use client"

import { AnimationContainer, MaxWidthWrapper } from "@/components"
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import GsapEffects from "@/components/gsap/gsap-effects"

/**
 * TermsOfServicePage — Molatech terms of service.
 * Ported from legacy site; content kept verbatim, styling updated to match
 * new template conventions (white bg, font-medium font-heading, brand palette).
 */
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
            "Designate authorised representatives for project communication",
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
          text: "Projects may include third-party software, libraries, or services that are subject to their own licence terms. Clients are responsible for complying with these terms.",
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
          text: "MolaTech warrants that services will be performed in a professional and workmanlike manner. We provide a warranty period (typically 30–90 days) for bug fixes on delivered work as specified in your project agreement.",
        },
        {
          subtitle: "Disclaimer",
          text: 'EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.',
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
    <GsapEffects className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <BackgroundBeams className="opacity-30" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-reveal inline-block mb-4">
              <Badge variant="secondary">
                Legal
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium font-heading mb-6">
              {["Terms", "of", "Service"].map((word, i) => (
                <span
                  key={i}
                  className="hero-word inline-block bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {word}{"\u00A0"}
                </span>
              ))}
            </h1>
            <p className="hero-reveal text-xl text-muted-foreground mb-4">
              Please read these terms carefully before using our services.
            </p>
            <p className="hero-reveal text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <MaxWidthWrapper className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 mb-20">
        <AnimationContainer delay={0.1} className="w-full">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="bg-muted/30 rounded-xl p-6 mb-8 border">
              <p className="text-muted-foreground m-0">
                Welcome to MolaTech. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By
                engaging our services or using our website, you agree to these Terms.
              </p>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-medium font-heading mb-4 text-foreground">{section.title}</h2>
                {section.content.map((item, idx) => (
                  <div key={idx} className="mb-4">
                    {"subtitle" in item && item.subtitle && (
                      <h3 className="text-lg font-medium mb-2 text-foreground">{item.subtitle}</h3>
                    )}
                    {item.text && <p className="text-muted-foreground mb-3">{item.text}</p>}
                    {item.list && (
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        {item.list.map((listItem, listIdx) => (
                          <li key={listIdx}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border">
              <p className="font-medium text-foreground mb-4">MolaTech</p>
              <div className="space-y-2 text-muted-foreground">
                <p>701 Tillery Street Unit 12 2179</p>
                <p>Austin, TX 78702</p>
                <p>
                  Email:{" "}
                  <Link href="mailto:info@molatech.org" className="text-blue-600 hover:text-blue-700">
                    info@molatech.org
                  </Link>
                </p>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-medium mb-4 text-foreground">Related Documents</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>
    </GsapEffects>
  )
}
