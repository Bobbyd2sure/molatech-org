import { Header } from "@/components/header"
import { GalleryHero } from "@/components/gallery-hero"
import { FeaturedGallery } from "@/components/featured-gallery"
import { PhotoTimeline } from "@/components/photo-timeline"
import { GalleryStats } from "@/components/gallery-stats"
import { InteractiveGallery } from "@/components/interactive-gallery"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Header />
      <GalleryHero />
      <FeaturedGallery />
      <PhotoTimeline />
      <GalleryStats />
      <InteractiveGallery />
      <GallerySection />
      <Footer />
    </main>
  )
}
