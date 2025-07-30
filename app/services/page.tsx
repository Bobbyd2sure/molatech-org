import { Header } from "@/components/header"
import { ServicesHero } from "@/components/services-hero"
import { ServicesSection } from "@/components/services-section"
import { ServicesProcess } from "@/components/services-process"
import { ServicesFAQ } from "@/components/services-faq"
import { ServicesTestimonials } from "@/components/services-testimonials"
import { ServicesImpact } from "@/components/services-impact"
import { ServicesContact } from "@/components/services-contact"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Header />
      <div className="pt-16">
        <ServicesHero />
        <ServicesSection />
        <ServicesProcess />
        <ServicesTestimonials />
        <ServicesImpact />
        <ServicesFAQ />
        <ServicesContact />
      </div>
      <Footer />
    </main>
  )
}
