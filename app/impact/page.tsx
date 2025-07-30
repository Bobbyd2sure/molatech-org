import { Header } from "@/components/header"
import { ImpactSection } from "@/components/impact-section"
import { ImpactHero } from "@/components/impact-hero"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Header />
      <ImpactHero />
      <div className="pt-16">
        <ImpactSection />
      </div>
      <Footer />
    </main>
  )
}
