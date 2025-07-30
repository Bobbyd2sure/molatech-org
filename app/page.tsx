import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { BlogSection } from "@/components/blog-section"
import { ImpactSection } from "@/components/impact-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { SocialMediaSection } from "@/components/social-media-section"
import { AsSeenInSection } from "@/components/as-seen-in-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <BlogSection />
      <SocialMediaSection />
      <AsSeenInSection />
      <ImpactSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
