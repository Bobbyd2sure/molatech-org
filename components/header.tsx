"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronRight } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Add mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile, { passive: true })
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Impact", href: "/impact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const scrollToContact = () => {
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }

    // If not on home page, navigate to home page first
    if (pathname !== "/") {
      window.location.href = "/#contact"
      return
    }

    // Scroll to contact section
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      } ${isMobile ? "ios-safe-area" : ""}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Kenny<span className="text-emerald-600">Kunma</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-emerald-600 bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={scrollToContact}>
            Get In Touch
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isMobile ? "min-h-[48px] min-w-[48px] touch-friendly" : ""}`}
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                Kenny<span className="text-emerald-600">Kunma</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors flex justify-between items-center ${
                    isActive(item.href)
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50"
                  } ${isMobile ? "min-h-[48px] touch-friendly" : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <ChevronRight className="h-5 w-5 opacity-50" />
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={scrollToContact}>
                Get In Touch
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
