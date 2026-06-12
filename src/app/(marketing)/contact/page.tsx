import type { Metadata } from "next"
import Image from "next/image"
import ContactSection from "@/components/contact-section"
import ContactHero from "./_hero"

export const metadata: Metadata = {
  title: "Contact Us | MolaTech",
  description:
    "Get in touch with MolaTech. Contact us for cybersecurity, engineering, and AI automation services. We're here to help secure and build your systems.",
  openGraph: {
    title: "Contact Us | MolaTech",
    description:
      "Get in touch with MolaTech for your security and engineering needs. Based in Austin, TX.",
  },
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />

      {/* Contact Section (shared component — includes form + info) */}
      <ContactSection />
    </div>
  )
}
