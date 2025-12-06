import ContactSection from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MolaTech. Contact us for web development, app development, digital marketing, and other tech services. We're here to help transform your ideas into reality.",
  openGraph: {
    title: "Contact Us | MolaTech",
    description:
      "Get in touch with MolaTech for your tech needs. Located in Austin, TX.",
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          We'd love to hear from you. Reach out to discuss your project or ask any questions.
        </p>
      </div>

      <ContactSection />
    </div>
  )
}
