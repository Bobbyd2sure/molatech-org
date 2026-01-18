"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FloatingNav } from "@/components/ui/aceternity/floating-navbar"
import BackToTop from "@/components/back-to-top"

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Start Now", link: "/start", isButton: true },
]

// Routes where we hide the navbar and footer
const hiddenLayoutRoutes = ["/chat-money-course", "/chat-money", "/chatfund"]

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideLayout = hiddenLayoutRoutes.some((route) => pathname?.startsWith(route))

  if (hideLayout) {
    return <main className="flex-1">{children}</main>
  }

  return (
    <>
      <Navbar />
      <FloatingNav navItems={navItems} />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
