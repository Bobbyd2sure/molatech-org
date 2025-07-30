import { Header } from "@/components/header"
import { BlogHero } from "@/components/blog-hero"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Header />
      <BlogHero />
      <BlogSection />
      <Footer />
    </main>
  )
}
