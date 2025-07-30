import { AboutHeroSection } from "@/components/about-hero-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { NVDATestHelper } from "@/components/nvda-test-helper"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" aria-label="About Kenny Kunma page content">
        <AboutHeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <NVDATestHelper />
    </div>
  )
}
