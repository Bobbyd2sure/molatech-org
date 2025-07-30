"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  ArrowDown,
  Award,
  Users,
  BookOpen,
  Sparkles,
  Star,
  Heart,
  GraduationCap,
  TrendingUp,
  Keyboard,
  Monitor,
} from "lucide-react"
import { useLoading } from "@/components/loading-provider"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function AboutHeroSection() {
  const { isLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDesktop, setIsDesktop] = useState(false)
  const [isUltraWide, setIsUltraWide] = useState(false)
  const [is4K, setIs4K] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const orientationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const [announcement, setAnnouncement] = useState("")
  const [nvdaAnnouncement, setNvdaAnnouncement] = useState("")
  const heroRef = useRef<HTMLElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  // Add mobile detection state
  const [isMobile, setIsMobile] = useState(false)
  const [touchStartY, setTouchStartY] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Enhanced desktop and ultra-high resolution detection
  useEffect(() => {
    const checkDisplayCapabilities = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const pixelRatio = window.devicePixelRatio || 1
      const isDesktopSize = width >= 1024
      const hasHover = window.matchMedia("(hover: hover)").matches
      const hasPointer = window.matchMedia("(pointer: fine)").matches
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

      setIsDesktop(isDesktopSize && hasHover && hasPointer)
      setIsMobile(width < 768 || isTouchDevice)
      setIsUltraWide(width >= 1920)
      setIs4K(width >= 2560 || (width >= 1920 && pixelRatio >= 2))

      // Mobile-specific announcements
      if (isTouchDevice && width < 768) {
        setTimeout(() => {
          announceToNVDA("Mobile device detected. Touch-optimized interface activated. Swipe up to navigate.", "polite")
        }, 2000)
      }

      // Announce display capabilities for screen readers
      if (width >= 2560) {
        setTimeout(() => {
          announceToNVDA("Ultra-high resolution 4K display detected. Enhanced layout and visuals activated.", "polite")
        }, 2000)
      } else if (width >= 1920) {
        setTimeout(() => {
          announceToNVDA("Ultra-wide display detected. Enhanced layout activated.", "polite")
        }, 2000)
      }
    }

    checkDisplayCapabilities()
    window.addEventListener("resize", checkDisplayCapabilities, { passive: true })
    return () => window.removeEventListener("resize", checkDisplayCapabilities)
  }, [])

  // Enhanced mouse tracking for ultra-wide displays
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDesktop || prefersReducedMotion) return

      const rect = heroRef.current?.getBoundingClientRect()
      if (!rect) return

      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      setMousePosition({ x, y })
    },
    [isDesktop, prefersReducedMotion],
  )

  // Enhanced scroll progress tracking for large displays
  const handleScroll = useCallback(() => {
    if (!isDesktop) return

    const scrolled = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progress = Math.min(scrolled / maxScroll, 1)
    setScrollProgress(progress)
  }, [isDesktop])

  // Enhanced NVDA-specific announcement function
  const announceToNVDA = useCallback((message: string, priority: "polite" | "assertive" = "polite") => {
    setNvdaAnnouncement(message)

    // Create multiple announcement methods for NVDA compatibility
    const announceViaLiveRegion = () => {
      const liveRegion = document.createElement("div")
      liveRegion.setAttribute("aria-live", priority)
      liveRegion.setAttribute("aria-atomic", "true")
      liveRegion.setAttribute("role", "status")
      liveRegion.className = "sr-only"
      liveRegion.textContent = message

      document.body.appendChild(liveRegion)

      setTimeout(() => {
        if (document.body.contains(liveRegion)) {
          document.body.removeChild(liveRegion)
        }
      }, 2000)
    }

    // Use both methods for maximum NVDA compatibility
    setAnnouncement(message)
    announceViaLiveRegion()

    // Clear announcement after delay to allow re-announcement
    setTimeout(() => {
      setAnnouncement("")
      setNvdaAnnouncement("")
    }, 100)
  }, [])

  const announceToScreenReader = useCallback(
    (message: string) => {
      announceToNVDA(message, "polite")
    },
    [announceToNVDA],
  )

  // Optimized orientation change handler with debouncing
  const handleOrientationChange = useCallback(() => {
    if (!prefersReducedMotion) {
      setIsTransitioning(true)

      // Clear existing timeout
      if (orientationTimeoutRef.current) {
        clearTimeout(orientationTimeoutRef.current)
      }

      // Debounce rapid orientation changes
      orientationTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }
  }, [prefersReducedMotion])

  // Add mobile touch handlers
  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!isMobile) return
      setTouchStartY(e.touches[0].clientY)
    },
    [isMobile],
  )

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!isMobile) return

      const touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartY - touchEndY

      // Swipe up gesture to navigate to next section
      if (deltaY > 50 && !isScrolling) {
        setIsScrolling(true)
        announceToNVDA("Navigating to philosophy section")
        document.getElementById("philosophy-section")?.scrollIntoView({ behavior: "smooth" })

        setTimeout(() => setIsScrolling(false), 1000)
      }
    },
    [isMobile, touchStartY, isScrolling, announceToNVDA],
  )

  useEffect(() => {
    setIsVisible(true)

    // Enhanced NVDA announcement for page load with display info
    setTimeout(() => {
      const displayInfo = is4K ? "4K ultra-high resolution" : isUltraWide ? "ultra-wide" : "standard"
      announceToNVDA(
        `About Kenny Kunma page loaded on ${displayInfo} display. Educational leader dedicated to excellence. Use heading navigation to explore content.`,
        "assertive",
      )
    }, 1000)

    // Ultra-high resolution optimized stat rotation
    const rotationInterval = is4K ? 5000 : isUltraWide ? 4500 : isDesktop ? 4000 : prefersReducedMotion ? 5000 : 3000

    const interval = setInterval(() => {
      setCurrentStat((prev) => {
        const newStat = (prev + 1) % 3
        const statInfo = rotatingStats[newStat]
        announceToNVDA(
          `Statistic updated: ${statInfo.number} ${statInfo.label}. This information rotates every ${rotationInterval / 1000} seconds.`,
        )
        return newStat
      })
    }, rotationInterval)

    // Desktop event listeners
    if (isDesktop) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
      window.addEventListener("scroll", handleScroll, { passive: true })
    }

    // Add orientation change listener with performance optimization
    const mediaQuery = window.matchMedia("(orientation: landscape)")
    mediaQuery.addEventListener("change", handleOrientationChange)

    // Add resize listener for rapid changes
    const handleResize = () => {
      if (prefersReducedMotion) return // Skip transition management for reduced motion

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }

      setIsTransitioning(true)
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
      }, 150)
    }

    window.addEventListener("resize", handleResize, { passive: true })

    // Mobile touch listeners
    if (isMobile) {
      document.addEventListener("touchstart", handleTouchStart, { passive: true })
      document.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      clearInterval(interval)
      mediaQuery.removeEventListener("change", handleOrientationChange)
      window.removeEventListener("resize", handleResize)
      if (isDesktop) {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("scroll", handleScroll)
      }

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
      if (orientationTimeoutRef.current) {
        clearTimeout(orientationTimeoutRef.current)
      }
      if (isMobile) {
        document.removeEventListener("touchstart", handleTouchStart)
        document.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [
    handleOrientationChange,
    prefersReducedMotion,
    announceToNVDA,
    isDesktop,
    isUltraWide,
    is4K,
    handleMouseMove,
    handleScroll,
    isMobile,
    handleTouchStart,
    handleTouchEnd,
    announceToNVDA,
  ])

  const rotatingStats = [
    {
      number: "7+ Years",
      label: "Educational Leadership",
      icon: GraduationCap,
      description: "Seven plus years of dedicated educational leadership experience",
      detail: "Leading educational initiatives across Nigeria since 2018",
      ultraDetail:
        "Comprehensive educational leadership spanning multiple institutions and community programs across Nigeria, with focus on sustainable development and student success metrics.",
    },
    {
      number: "500+",
      label: "Students Mentored",
      icon: Users,
      description: "Over five hundred students successfully mentored and supported",
      detail: "Comprehensive mentorship covering academic and career development",
      ultraDetail:
        "Personalized mentorship programs designed for individual student needs, covering academic excellence, career guidance, personal development, and life skills training.",
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: Star,
      description: "Ninety-five percent success rate in student achievement",
      detail: "Exceptional outcomes through personalized support and guidance",
      ultraDetail:
        "Industry-leading success rate achieved through innovative teaching methodologies, continuous assessment, personalized learning paths, and comprehensive support systems.",
    },
  ]

  const CurrentIcon = rotatingStats[currentStat].icon

  // Mobile-optimized transition classes
  const getTransitionClass = (isBase = true) => {
    if (prefersReducedMotion) {
      return "transition-none"
    }

    if (isMobile) {
      // Faster, lighter transitions for mobile
      if (isBase) {
        return isTransitioning ? "transition-all duration-200 ease-out" : "transition-all duration-400 ease-in-out"
      } else {
        return isTransitioning ? "transition-all duration-150 ease-out" : "transition-all duration-300 ease-in-out"
      }
    } else if (is4K) {
      if (isBase) {
        return isTransitioning
          ? "transition-all duration-400 ease-out will-change-transform"
          : "transition-all duration-900 ease-in-out will-change-auto"
      } else {
        return isTransitioning
          ? "transition-all duration-300 ease-out will-change-transform"
          : "transition-all duration-700 ease-in-out will-change-auto"
      }
    } else if (isUltraWide) {
      if (isBase) {
        return isTransitioning
          ? "transition-all duration-350 ease-out will-change-transform"
          : "transition-all duration-800 ease-in-out will-change-auto"
      } else {
        return isTransitioning
          ? "transition-all duration-250 ease-out will-change-transform"
          : "transition-all duration-600 ease-in-out will-change-auto"
      }
    } else if (isDesktop) {
      if (isBase) {
        return isTransitioning
          ? "transition-all duration-300 ease-out will-change-transform"
          : "transition-all duration-700 ease-in-out will-change-auto"
      } else {
        return isTransitioning
          ? "transition-all duration-200 ease-out will-change-transform"
          : "transition-all duration-500 ease-in-out will-change-auto"
      }
    } else {
      if (isBase) {
        return isTransitioning
          ? "transition-all duration-200 ease-out will-change-transform"
          : "transition-all duration-500 ease-in-out will-change-auto"
      } else {
        return isTransitioning
          ? "transition-all duration-150 ease-out will-change-transform"
          : "transition-all duration-300 ease-in-out will-change-auto"
      }
    }
  }

  const baseTransitionClass = getTransitionClass(true)
  const fastTransitionClass = getTransitionClass(false)

  // Mobile-optimized animation classes
  const getAnimationClass = (animationType: string) => {
    if (prefersReducedMotion) {
      return ""
    }

    if (isMobile) {
      // Lighter animations for mobile performance
      switch (animationType) {
        case "pulse":
          return "animate-pulse-mobile"
        case "bounce":
          return "" // Disable bounce on mobile for performance
        case "gradient":
          return "animate-gradient-mobile"
        case "float":
          return "" // Disable float on mobile for performance
        default:
          return ""
      }
    }

    switch (animationType) {
      case "pulse":
        return is4K
          ? "animate-pulse-4k"
          : isUltraWide
            ? "animate-pulse-ultra"
            : isDesktop
              ? "animate-pulse"
              : "animate-pulse"
      case "bounce":
        return is4K
          ? "animate-bounce-4k"
          : isUltraWide
            ? "animate-bounce-ultra"
            : isDesktop
              ? "animate-bounce"
              : "animate-bounce"
      case "gradient":
        return is4K
          ? "animate-gradient-4k"
          : isUltraWide
            ? "animate-gradient-ultra"
            : isDesktop
              ? "animate-gradient"
              : "animate-gradient"
      case "float":
        return is4K ? "animate-float-4k" : isUltraWide ? "animate-float-ultra" : isDesktop ? "animate-float" : ""
      default:
        return ""
    }
  }

  // Mobile-optimized transform classes
  const getTransformClass = (transformType: string) => {
    if (prefersReducedMotion) {
      return ""
    }

    if (isMobile) {
      switch (transformType) {
        case "gpu":
          return "transform-gpu-mobile"
        case "hover-scale":
          return "transform active:scale-105" // Use active instead of hover
        case "hover-scale-lg":
          return "transform active:scale-110"
        case "parallax":
          return "" // Disable parallax on mobile
        default:
          return ""
      }
    }

    switch (transformType) {
      case "gpu":
        return "transform-gpu"
      case "hover-scale":
        return is4K
          ? "transform hover:scale-115"
          : isUltraWide
            ? "transform hover:scale-112"
            : isDesktop
              ? "transform hover:scale-110"
              : "transform hover:scale-105"
      case "hover-scale-lg":
        return is4K
          ? "transform hover:scale-135"
          : isUltraWide
            ? "transform hover:scale-130"
            : isDesktop
              ? "transform hover:scale-125"
              : "transform hover:scale-110"
      case "parallax":
        return isDesktop && !prefersReducedMotion ? "transform-gpu will-change-transform" : ""
      default:
        return ""
    }
  }

  // Ultra-high resolution parallax calculations
  const getParallaxStyle = (intensity = 1) => {
    if (!isDesktop || prefersReducedMotion) return {}

    const multiplier = is4K ? 1.5 : isUltraWide ? 1.3 : 1
    const xOffset = (mousePosition.x - 0.5) * intensity * 20 * multiplier
    const yOffset = (mousePosition.y - 0.5) * intensity * 20 * multiplier

    return {
      transform: `translate3d(${xOffset}px, ${yOffset}px, 0) scale(${1 + intensity * 0.02 * multiplier})`,
    }
  }

  // Mobile-optimized spacing and sizing
  const getMobileSpacing = (size: string) => {
    if (!isMobile) return ""

    switch (size) {
      case "container":
        return "px-4 sm:px-6"
      case "section":
        return "py-12 sm:py-16"
      case "gap":
        return "gap-6 sm:gap-8"
      case "text-large":
        return "text-4xl sm:text-5xl"
      case "text-medium":
        return "text-lg sm:text-xl"
      default:
        return ""
    }
  }

  return (
    <section
      ref={heroRef}
      id="about-hero"
      className={`relative min-h-screen overflow-hidden ${baseTransitionClass}`}
      aria-label="About Kenny Kunma Hero Section"
      role="main"
    >
      {/* Ultra-high resolution display indicator */}
      {(isUltraWide || is4K) && (
        <div className="fixed top-4 left-4 z-40 bg-emerald-600/90 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm border border-emerald-400/30">
          <div className="flex items-center space-x-2">
            <Monitor className="h-4 w-4" />
            <span>{is4K ? "4K Ultra-HD" : "Ultra-Wide"} Experience</span>
          </div>
        </div>
      )}

      {/* Enhanced desktop scroll progress indicator */}
      {isDesktop && (
        <div
          className={`fixed top-0 left-0 ${is4K ? "h-2" : isUltraWide ? "h-1.5" : "h-1"} bg-gradient-to-r from-emerald-500 to-teal-500 z-50 transition-all duration-300 shadow-lg`}
          style={{ width: `${scrollProgress * 100}%` }}
          aria-hidden="true"
        />
      )}

      {/* Enhanced NVDA live regions */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
        aria-label="Screen reader announcements"
      >
        {announcement}
      </div>

      <div
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
        role="alert"
        aria-label="Important announcements"
      >
        {nvdaAnnouncement}
      </div>

      {/* Enhanced skip link with ultra-high resolution support */}
      <a
        href="#about-content"
        className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white ${is4K ? "px-8 py-4 text-lg" : isUltraWide ? "px-7 py-3.5 text-base" : "px-6 py-3"} rounded-lg z-50 focus:outline-none focus:ring-4 focus:ring-emerald-400 shadow-2xl ${baseTransitionClass}`}
        onClick={() => announceToNVDA("Skipping to main about content")}
      >
        Skip to about content (Press Enter or use Alt+C)
      </a>

      {/* Enhanced desktop keyboard shortcuts indicator */}
      {isDesktop && (
        <div
          className={`fixed top-4 right-4 z-40 bg-black/80 text-white ${is4K ? "px-6 py-3 text-base" : isUltraWide ? "px-5 py-2.5 text-sm" : "px-4 py-2 text-sm"} rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300`}
        >
          <div className="flex items-center space-x-2">
            <Keyboard className={`${is4K ? "h-5 w-5" : "h-4 w-4"}`} />
            <span>Alt+C: Contact | Alt+P: Philosophy | Alt+S: Stats</span>
          </div>
        </div>
      )}

      {/* Mobile swipe indicator */}
      {isMobile && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-emerald-600/90 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-emerald-400/30 animate-bounce">
          <div className="flex items-center space-x-2">
            <ArrowDown className="h-4 w-4" />
            <span>Swipe up to continue</span>
          </div>
        </div>
      )}

      {/* First Hero Section - About Spotlight */}
      <div
        className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 ${baseTransitionClass}`}
        role="banner"
        aria-label="Kenny Kunma Introduction and Overview"
      >
        {/* Enhanced animated background elements with ultra-high resolution parallax */}
        <div
          ref={parallaxRef}
          className={`absolute inset-0 ${baseTransitionClass}`}
          aria-hidden="true"
          style={getParallaxStyle(0.5)}
        >
          <div
            className={`absolute top-20 left-10 ${is4K ? "w-80 h-80" : isUltraWide ? "w-64 h-64" : "w-32 h-32 xl:w-48 xl:h-48 2xl:w-64 2xl:h-64"} 3xl:w-72 3xl:h-72 4xl:w-96 4xl:h-96 bg-emerald-400/20 rounded-full blur-3xl ${getAnimationClass("pulse")} ${baseTransitionClass} ${getTransformClass("gpu")}`}
            aria-hidden="true"
            style={getParallaxStyle(1)}
          ></div>
          <div
            className={`absolute top-40 right-20 ${is4K ? "w-96 h-96" : isUltraWide ? "w-80 h-80" : "w-48 h-48 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80"} 3xl:w-88 3xl:h-88 4xl:w-112 4xl:h-112 bg-teal-400/20 rounded-full blur-3xl ${getAnimationClass("pulse")} ${prefersReducedMotion ? "" : "delay-1000"} ${baseTransitionClass} ${getTransformClass("gpu")}`}
            aria-hidden="true"
            style={getParallaxStyle(1.5)}
          ></div>
          <div
            className={`absolute bottom-40 left-20 ${is4K ? "w-88 h-88" : isUltraWide ? "w-72 h-72" : "w-40 h-40 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72"} 3xl:w-80 3xl:h-80 4xl:w-104 4xl:h-104 bg-cyan-400/20 rounded-full blur-3xl ${getAnimationClass("pulse")} ${prefersReducedMotion ? "" : "delay-2000"} ${baseTransitionClass} ${getTransformClass("gpu")}`}
            aria-hidden="true"
            style={getParallaxStyle(0.8)}
          ></div>
          <div
            className={`absolute bottom-20 right-10 ${is4K ? "w-84 h-84" : isUltraWide ? "w-68 h-68" : "w-36 h-36 xl:w-52 xl:h-52 2xl:w-68 2xl:h-68"} 3xl:w-76 3xl:h-76 4xl:w-100 4xl:h-100 bg-emerald-300/20 rounded-full blur-3xl ${getAnimationClass("pulse")} ${prefersReducedMotion ? "" : "delay-500"} ${baseTransitionClass} ${getTransformClass("gpu")}`}
            aria-hidden="true"
            style={getParallaxStyle(1.2)}
          ></div>
        </div>

        {/* Enhanced spotlight effect */}
        <div
          className={`absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/50 ${baseTransitionClass}`}
          aria-hidden="true"
        ></div>

        <div
          className={`container mx-auto ${isMobile ? getMobileSpacing("container") : is4K ? "px-20" : isUltraWide ? "px-16" : "px-4 lg:px-8 xl:px-12 2xl:px-16"} 3xl:px-20 4xl:px-24 relative z-10 ${isMobile ? getMobileSpacing("section") : is4K ? "pt-24" : isUltraWide ? "pt-20" : "pt-8 lg:pt-16 xl:pt-20"} 3xl:pt-24 4xl:pt-28 ${baseTransitionClass}`}
          id="about-content"
        >
          <div
            className={`grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-2 ${is4K ? "gap-32" : isUltraWide ? "gap-28" : "gap-12 xl:gap-16 2xl:gap-24"} 3xl:gap-28 4xl:gap-36 items-center ${baseTransitionClass}`}
          >
            {/* Enhanced Content Side for Ultra-High Resolution */}
            <div
              className={`${is4K ? "space-y-20" : isUltraWide ? "space-y-16" : "space-y-8 xl:space-y-12 2xl:space-y-16"} 3xl:space-y-18 4xl:space-y-24 ${prefersReducedMotion ? "opacity-100 translate-x-0" : `transition-all duration-1000 ease-in-out ${getTransformClass("gpu")} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}`}
              style={isDesktop ? getParallaxStyle(0.3) : {}}
            >
              <div
                className={`${is4K ? "space-y-12" : isUltraWide ? "space-y-10" : "space-y-6 xl:space-y-8 2xl:space-y-10"} 3xl:space-y-12 4xl:space-y-16 ${baseTransitionClass}`}
              >
                {/* Enhanced badges with ultra-high resolution hover effects */}
                {isLoading ? (
                  <div
                    className={`flex flex-wrap items-center ${is4K ? "gap-6" : isUltraWide ? "gap-5" : "gap-4"} 3xl:gap-6 4xl:gap-8 ${baseTransitionClass}`}
                  >
                    <Skeleton
                      className={`${is4K ? "h-16 w-64" : isUltraWide ? "h-14 w-56" : "h-12 w-48"} 3xl:h-16 3xl:w-60 4xl:h-20 4xl:w-72`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-16 w-72" : isUltraWide ? "h-14 w-64" : "h-12 w-56"} 3xl:h-16 3xl:w-68 4xl:h-20 4xl:w-80`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-16 w-56" : isUltraWide ? "h-14 w-48" : "h-12 w-40"} 3xl:h-16 3xl:w-52 4xl:h-20 4xl:w-64`}
                    />
                  </div>
                ) : (
                  <div
                    className={`flex flex-wrap items-center ${is4K ? "gap-6" : isUltraWide ? "gap-5" : "gap-3 xl:gap-4 2xl:gap-5"} 3xl:gap-6 4xl:gap-8 ${baseTransitionClass}`}
                    role="list"
                    aria-label="Page section badges"
                  >
                    <Badge
                      className={`bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-300 border-emerald-400/30 ${is4K ? "px-10 py-5 text-2xl" : isUltraWide ? "px-8 py-4 text-xl" : "px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 2xl:py-4 text-base xl:text-lg 2xl:text-xl"} 3xl:px-10 3xl:py-5 3xl:text-2xl 4xl:px-12 4xl:py-6 4xl:text-3xl backdrop-blur-sm ${fastTransitionClass} ${getTransformClass("hover-scale")} cursor-pointer`}
                      role="listitem"
                      aria-label="My Story section badge"
                      onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      <BookOpen
                        className={`${is4K ? "h-8 w-8 mr-4" : isUltraWide ? "h-7 w-7 mr-3" : "h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 mr-2"} 3xl:h-8 3xl:w-8 3xl:mr-4 4xl:h-10 4xl:w-10 4xl:mr-5 ${fastTransitionClass}`}
                        aria-hidden="true"
                      />
                      My Story
                    </Badge>
                    <Badge
                      className={`bg-gradient-to-r from-teal-500/20 to-teal-600/20 text-teal-300 border-teal-400/30 ${is4K ? "px-10 py-5 text-2xl" : isUltraWide ? "px-8 py-4 text-xl" : "px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 2xl:py-4 text-base xl:text-lg 2xl:text-xl"} 3xl:px-10 3xl:py-5 3xl:text-2xl 4xl:px-12 4xl:py-6 4xl:text-3xl backdrop-blur-sm ${fastTransitionClass} ${getTransformClass("hover-scale")} cursor-pointer`}
                      role="listitem"
                      aria-label="Personal Journey section badge"
                    >
                      <Heart
                        className={`${is4K ? "h-8 w-8 mr-4" : isUltraWide ? "h-7 w-7 mr-3" : "h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 mr-2"} 3xl:h-8 3xl:w-8 3xl:mr-4 4xl:h-10 4xl:w-10 4xl:mr-5 ${fastTransitionClass}`}
                        aria-hidden="true"
                      />
                      Personal Journey
                    </Badge>
                    <Badge
                      className={`bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 text-cyan-300 border-cyan-400/30 ${is4K ? "px-10 py-5 text-2xl" : isUltraWide ? "px-8 py-4 text-xl" : "px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 2xl:py-4 text-base xl:text-lg 2xl:text-xl"} 3xl:px-10 3xl:py-5 3xl:text-2xl 4xl:px-12 4xl:py-6 4xl:text-3xl backdrop-blur-sm ${fastTransitionClass} ${getTransformClass("hover-scale")} cursor-pointer`}
                      role="listitem"
                      aria-label="Mission and Values section badge"
                    >
                      <Sparkles
                        className={`${is4K ? "h-8 w-8 mr-4" : isUltraWide ? "h-7 w-7 mr-3" : "h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 mr-2"} 3xl:h-8 3xl:w-8 3xl:mr-4 4xl:h-10 4xl:w-10 4xl:mr-5 ${fastTransitionClass}`}
                        aria-hidden="true"
                      />
                      Mission & Values
                    </Badge>
                  </div>
                )}

                {/* Enhanced main headline for ultra-high resolution */}
                {isLoading ? (
                  <div
                    className={`${is4K ? "space-y-8" : isUltraWide ? "space-y-7" : "space-y-6"} 3xl:space-y-8 4xl:space-y-10 ${baseTransitionClass}`}
                  >
                    <Skeleton
                      className={`${is4K ? "h-28 w-56" : isUltraWide ? "h-24 w-48" : "h-20 w-40"} 3xl:h-28 3xl:w-52 4xl:h-32 4xl:w-64 mb-4`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-40 w-96" : isUltraWide ? "h-36 w-88" : "h-32 w-80"} 3xl:h-40 3xl:w-92 4xl:h-48 4xl:w-112 mb-4`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-40 w-96" : isUltraWide ? "h-36 w-88" : "h-32 w-80"} 3xl:h-40 3xl:w-92 4xl:h-48 4xl:w-112 mb-4`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-20 w-112" : isUltraWide ? "h-18 w-104" : "h-16 w-96"} 3xl:h-20 3xl:w-108 4xl:h-24 4xl:w-128`}
                    />
                  </div>
                ) : (
                  <header
                    className={`${is4K ? "space-y-8" : isUltraWide ? "space-y-7" : "space-y-4 xl:space-y-6 2xl:space-y-8"} 3xl:space-y-9 4xl:space-y-12 ${baseTransitionClass}`}
                  >
                    <h1
                      className={`${is4K ? "text-10xl" : isUltraWide ? "text-9xl" : "text-6xl xl:text-8xl 2xl:text-9xl"} 3xl:text-10xl 4xl:text-11xl font-bold ${is4K ? "leading-none" : isUltraWide ? "leading-none" : "leading-tight xl:leading-none 2xl:leading-none"} 3xl:leading-none 4xl:leading-none ${baseTransitionClass} ${getTransformClass("gpu")}`}
                      id="main-heading"
                      tabIndex={-1}
                    >
                      <span className={`text-white ${baseTransitionClass}`}>About</span>
                      <br />
                      <span
                        className={`text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 ${getAnimationClass("gradient")} ${baseTransitionClass}`}
                        aria-label="Kenny"
                      >
                        KENNY
                      </span>
                      <br />
                      <span
                        className={`text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 ${getAnimationClass("gradient")} ${baseTransitionClass}`}
                        aria-label="Kunma"
                      >
                        KUNMA
                      </span>
                    </h1>

                    <p
                      className={`${is4K ? "text-6xl" : isUltraWide ? "text-5xl" : "text-2xl xl:text-4xl 2xl:text-5xl"} 3xl:text-6xl 4xl:text-7xl text-emerald-200 font-semibold ${baseTransitionClass} ${getTransformClass("gpu")}`}
                      role="text"
                      aria-label="Subtitle: Dedicated to Educational Excellence"
                    >
                      Dedicated to Educational Excellence
                    </p>
                  </header>
                )}

                {isLoading ? (
                  <div
                    className={`${is4K ? "space-y-4" : isUltraWide ? "space-y-3.5" : "space-y-3"} 3xl:space-y-4 4xl:space-y-5 ${baseTransitionClass}`}
                  >
                    <Skeleton
                      className={`${is4K ? "h-10 w-full" : isUltraWide ? "h-9 w-full" : "h-8 w-full"} 3xl:h-10 4xl:h-12`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-10 w-5/6" : isUltraWide ? "h-9 w-5/6" : "h-8 w-5/6"} 3xl:h-10 3xl:w-5/6 4xl:h-12 4xl:w-5/6`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-10 w-4/6" : isUltraWide ? "h-9 w-4/6" : "h-8 w-4/6"} 3xl:h-10 3xl:w-4/6 4xl:h-12 4xl:w-4/6`}
                    />
                  </div>
                ) : (
                  <p
                    className={`${is4K ? "text-4xl max-w-6xl" : isUltraWide ? "text-3xl max-w-5xl" : "text-xl xl:text-2xl 2xl:text-3xl max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"} 3xl:text-4xl 3xl:max-w-6xl 4xl:text-5xl 4xl:max-w-7xl text-slate-300 leading-relaxed ${baseTransitionClass} ${getTransformClass("gpu")}`}
                    role="text"
                    aria-label="Kenny Kunma introduction and mission statement"
                  >
                    A passionate educator, mentor, and community leader committed to breaking down barriers and creating
                    pathways to success for students across Nigeria. My journey is driven by the belief that every
                    student deserves the opportunity to reach their full potential.
                  </p>
                )}
              </div>

              {/* Enhanced rotating stats for ultra-high resolution */}
              {isLoading ? (
                <Skeleton
                  className={`${is4K ? "h-40 w-full" : isUltraWide ? "h-36 w-full" : "h-32 w-full"} 3xl:h-40 4xl:h-48 ${baseTransitionClass}`}
                />
              ) : (
                <div
                  className={`relative ${baseTransitionClass}`}
                  role="region"
                  aria-labelledby="stats-heading"
                  aria-describedby="stats-description"
                >
                  <h2 id="stats-heading" className="sr-only">
                    Kenny's Achievement Statistics
                  </h2>
                  <p id="stats-description" className="sr-only">
                    Current statistic: {rotatingStats[currentStat].description}.{" "}
                    {is4K && rotatingStats[currentStat].ultraDetail} Statistics rotate automatically every{" "}
                    {is4K ? "5" : isUltraWide ? "4.5" : isDesktop ? "4" : prefersReducedMotion ? "5" : "3"} seconds.
                  </p>

                  <Card
                    className={`${is4K ? "max-w-4xl p-12" : isUltraWide ? "max-w-3xl p-10" : "max-w-lg xl:max-w-xl 2xl:max-w-2xl p-6 xl:p-8 2xl:p-10"} 3xl:max-w-3xl 3xl:p-12 4xl:max-w-5xl 4xl:p-16 mx-auto lg:mx-0 bg-white/10 backdrop-blur-md border-white/20 ${baseTransitionClass} ${getTransformClass("hover-scale")} cursor-pointer group`}
                    role="img"
                    aria-labelledby="current-stat"
                    aria-describedby="stat-description"
                    onClick={() => {
                      const detail = is4K ? rotatingStats[currentStat].ultraDetail : rotatingStats[currentStat].detail
                      announceToNVDA(`Detailed information: ${detail}`)
                    }}
                  >
                    <CardContent className={`p-0 ${baseTransitionClass}`}>
                      <div
                        className={`flex items-center ${is4K ? "space-x-12" : isUltraWide ? "space-x-10" : "space-x-6 xl:space-x-8 2xl:space-x-10"} 3xl:space-x-12 4xl:space-x-16 ${baseTransitionClass}`}
                      >
                        <div
                          className={`bg-gradient-to-r from-emerald-500 to-teal-500 ${is4K ? "p-10 rounded-4xl" : isUltraWide ? "p-8 rounded-3xl" : "p-4 xl:p-6 2xl:p-8 rounded-2xl xl:rounded-3xl"} 3xl:p-10 3xl:rounded-4xl 4xl:p-12 4xl:rounded-5xl ${fastTransitionClass} ${getTransformClass("hover-scale-lg")} group-hover:shadow-2xl group-hover:shadow-emerald-500/50`}
                          aria-hidden="true"
                        >
                          <CurrentIcon
                            className={`${is4K ? "h-20 w-20" : isUltraWide ? "h-16 w-16" : "h-8 w-8 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16"} 3xl:h-20 3xl:w-20 4xl:h-24 4xl:w-24 text-white ${fastTransitionClass}`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className={`${baseTransitionClass}`}>
                          <div
                            id="current-stat"
                            className={`${is4K ? "text-8xl" : isUltraWide ? "text-7xl" : "text-3xl xl:text-5xl 2xl:text-6xl"} 3xl:text-7xl 4xl:text-9xl font-bold text-white ${baseTransitionClass} ${getTransformClass("gpu")} group-hover:text-emerald-300`}
                            aria-label={`Statistic number: ${rotatingStats[currentStat].number}`}
                          >
                            {rotatingStats[currentStat].number}
                          </div>
                          <div
                            id="stat-description"
                            className={`${is4K ? "text-3xl" : isUltraWide ? "text-2xl" : "text-lg xl:text-xl 2xl:text-2xl"} 3xl:text-3xl 4xl:text-4xl text-emerald-300 font-medium ${baseTransitionClass} ${getTransformClass("gpu")} group-hover:text-white`}
                            aria-label={`Category: ${rotatingStats[currentStat].label}`}
                          >
                            {rotatingStats[currentStat].label}
                          </div>
                          {isDesktop && (
                            <div
                              className={`${is4K ? "text-xl mt-4" : isUltraWide ? "text-lg mt-3" : "text-sm xl:text-base 2xl:text-lg mt-2"} 3xl:text-xl 3xl:mt-4 4xl:text-2xl 4xl:mt-5 text-emerald-200/80 opacity-0 group-hover:opacity-100 ${fastTransitionClass}`}
                            >
                              {is4K ? rotatingStats[currentStat].ultraDetail : rotatingStats[currentStat].detail}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Enhanced CTA Buttons for ultra-high resolution */}
              {isLoading ? (
                <div
                  className={`flex flex-col sm:flex-row ${is4K ? "gap-8" : isUltraWide ? "gap-7" : "gap-6"} 3xl:gap-8 4xl:gap-10 ${baseTransitionClass}`}
                >
                  <Skeleton
                    className={`${is4K ? "h-20 w-72" : isUltraWide ? "h-18 w-64" : "h-16 w-56"} 3xl:h-20 3xl:w-68 4xl:h-24 4xl:w-80`}
                  />
                  <Skeleton
                    className={`${is4K ? "h-20 w-72" : isUltraWide ? "h-18 w-64" : "h-16 w-56"} 3xl:h-20 3xl:w-68 4xl:h-24 4xl:w-80`}
                  />
                </div>
              ) : (
                <nav
                  className={`flex flex-col sm:flex-row ${is4K ? "gap-8" : isUltraWide ? "gap-7" : "gap-4 xl:gap-6 2xl:gap-8"} 3xl:gap-9 4xl:gap-12 ${baseTransitionClass}`}
                  role="navigation"
                  aria-label="Main action buttons"
                >
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white ${is4K ? "px-20 py-10 text-4xl" : isUltraWide ? "px-16 py-8 text-3xl" : "px-8 xl:px-12 2xl:px-16 py-4 xl:py-6 2xl:py-8 text-lg xl:text-2xl 2xl:text-3xl"} 3xl:px-18 3xl:py-9 3xl:text-4xl 4xl:px-24 4xl:py-12 4xl:text-5xl rounded-full font-semibold ${prefersReducedMotion ? "transition-colors duration-200" : "transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50"} shadow-2xl ${prefersReducedMotion ? "" : "will-change-transform"} group`}
                    onClick={() => {
                      announceToNVDA("Navigating to philosophy section")
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    aria-describedby="philosophy-button-desc"
                  >
                    My Philosophy
                    <BookOpen
                      className={`${is4K ? "h-12 w-12 ml-6" : isUltraWide ? "h-10 w-10 ml-5" : "h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 ml-3 xl:ml-4 2xl:ml-5"} 3xl:h-12 3xl:w-12 3xl:ml-6 4xl:h-14 4xl:w-14 4xl:ml-7 ${prefersReducedMotion ? "transition-none" : "transition-all duration-300 ease-out group-hover:rotate-12"}`}
                      aria-hidden="true"
                    />
                  </Button>
                  <span id="philosophy-button-desc" className="sr-only">
                    Learn about Kenny's educational philosophy and teaching approach. Navigates to the philosophy
                    section of the page. Keyboard shortcut: Alt+P
                  </span>

                  <Button
                    variant="outline"
                    size="lg"
                    className={`border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-slate-900 ${is4K ? "px-20 py-10 text-4xl" : isUltraWide ? "px-16 py-8 text-3xl" : "px-8 xl:px-12 2xl:px-16 py-4 xl:py-6 2xl:py-8 text-lg xl:text-2xl 2xl:text-3xl"} 3xl:px-18 3xl:py-9 3xl:text-4xl 4xl:px-24 4xl:py-12 4xl:text-5xl rounded-full font-semibold ${prefersReducedMotion ? "transition-colors duration-200" : "transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-400/50"} backdrop-blur-sm ${prefersReducedMotion ? "" : "will-change-transform"} group`}
                    onClick={() => {
                      announceToNVDA("Navigating to contact section")
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    aria-describedby="contact-button-desc"
                  >
                    Get In Touch
                    <Heart
                      className={`${is4K ? "h-12 w-12 ml-6" : isUltraWide ? "h-10 w-10 ml-5" : "h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 ml-3 xl:ml-4 2xl:ml-5"} 3xl:h-12 3xl:w-12 3xl:ml-6 4xl:h-14 4xl:w-14 4xl:ml-7 ${prefersReducedMotion ? "transition-none" : "transition-all duration-300 ease-out group-hover:scale-125 group-hover:text-red-400"}`}
                      aria-hidden="true"
                    />
                  </Button>
                  <span id="contact-button-desc" className="sr-only">
                    Contact Kenny for educational support, mentorship, or collaboration opportunities. Navigates to the
                    contact section. Keyboard shortcut: Alt+C
                  </span>
                </nav>
              )}
            </div>

            {/* Enhanced Kenny's Spotlight Image for Ultra-High Resolution */}
            <div
              className={`relative ${prefersReducedMotion ? "opacity-100 translate-x-0" : `transition-all duration-1000 ease-in-out delay-300 ${getTransformClass("gpu")} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}`}
              role="img"
              aria-labelledby="hero-image-title"
              aria-describedby="hero-image-desc"
              style={isDesktop ? getParallaxStyle(-0.2) : {}}
            >
              <h3 id="hero-image-title" className="sr-only">
                Kenny Kunma Professional Portrait
              </h3>
              <p id="hero-image-desc" className="sr-only">
                Professional portrait of Kenny Kunma with achievement highlights and educational symbols, representing
                his dedication to student success and educational excellence.{" "}
                {is4K && "Displayed in ultra-high resolution for maximum clarity and detail."}
              </p>

              <div className={`relative ${baseTransitionClass}`}>
                {/* Enhanced layered spotlight effects for ultra-high resolution */}
                <div
                  className={`absolute ${is4K ? "-inset-24" : isUltraWide ? "-inset-20" : "-inset-12 xl:-inset-16 2xl:-inset-20"} 3xl:-inset-24 4xl:-inset-32 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-3xl opacity-30 ${getAnimationClass("pulse")} ${baseTransitionClass} ${getTransformClass("gpu")}`}
                  aria-hidden="true"
                  style={getParallaxStyle(0.8)}
                ></div>
                <div
                  className={`absolute ${is4K ? "-inset-20" : isUltraWide ? "-inset-16" : "-inset-8 xl:-inset-12 2xl:-inset-16"} 3xl:-inset-20 4xl:-inset-28 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full blur-2xl opacity-40 ${baseTransitionClass} ${getTransformClass("gpu")}`}
                  aria-hidden="true"
                  style={getParallaxStyle(0.6)}
                ></div>
                <div
                  className={`absolute ${is4K ? "-inset-16" : isUltraWide ? "-inset-12" : "-inset-4 xl:-inset-8 2xl:-inset-12"} 3xl:-inset-16 4xl:-inset-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-full blur-xl opacity-50 ${baseTransitionClass} ${getTransformClass("gpu")}`}
                  aria-hidden="true"
                  style={getParallaxStyle(0.4)}
                ></div>

                {/* Enhanced main image container for ultra-high resolution */}
                {isLoading ? (
                  <div
                    className={`relative bg-gradient-to-r from-white via-emerald-50 to-teal-50 ${is4K ? "p-12" : isUltraWide ? "p-10" : "p-6 xl:p-8 2xl:p-10"} 3xl:p-12 4xl:p-16 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm ${baseTransitionClass} ${getTransformClass("gpu")}`}
                  >
                    <Skeleton
                      className={`w-full ${is4K ? "h-[1100px]" : isUltraWide ? "h-[1000px]" : "h-[500px] xl:h-[700px] 2xl:h-[900px]"} 3xl:h-[1100px] 4xl:h-[1300px] rounded-full ${baseTransitionClass}`}
                    />
                  </div>
                ) : (
                  <div
                    className={`relative bg-gradient-to-r from-white via-emerald-50 to-teal-50 ${is4K ? "p-12" : isUltraWide ? "p-10" : "p-6 xl:p-8 2xl:p-10"} 3xl:p-12 4xl:p-16 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm ${is4K ? "max-w-5xl" : isUltraWide ? "max-w-4xl" : "max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"} 3xl:max-w-5xl 4xl:max-w-6xl mx-auto ${baseTransitionClass} ${getTransformClass("hover-scale")} group cursor-pointer`}
                    onClick={() => announceToNVDA("Kenny Kunma professional portrait - Educational leader and mentor")}
                  >
                    <Image
                      src="/images/kenny-about-hero.png"
                      alt="Kenny Kunma, educational leader, smiling professionally in a portrait photo. He is wearing professional attire and the image represents his dedication to student success and educational excellence in Nigeria."
                      width={is4K ? 1200 : isUltraWide ? 1000 : 800}
                      height={is4K ? 1200 : isUltraWide ? 1000 : 800}
                      className={`rounded-full object-cover w-full ${is4K ? "h-[1100px]" : isUltraWide ? "h-[1000px]" : "h-[500px] xl:h-[700px] 2xl:h-[900px]"} 3xl:h-[1100px] 4xl:h-[1300px] shadow-2xl ${baseTransitionClass} ${getTransformClass("gpu")} group-hover:shadow-emerald-500/30`}
                      priority
                      role="img"
                    />
                  </div>
                )}

                {/* Enhanced floating achievement badges for ultra-high resolution */}
                {!isLoading && (
                  <>
                    <div
                      className={`absolute ${is4K ? "-top-20 -right-20 p-12" : isUltraWide ? "-top-16 -right-16 p-10" : "-top-8 -right-8 xl:-top-12 xl:-right-12 2xl:-top-16 2xl:-right-16 p-4 xl:p-6 2xl:p-8"} 3xl:-top-20 3xl:-right-20 3xl:p-12 4xl:-top-24 4xl:-right-24 4xl:p-16 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-2xl ${prefersReducedMotion ? "" : getAnimationClass("bounce")} ${fastTransitionClass} ${getTransformClass("hover-scale-lg")} cursor-pointer group`}
                      role="img"
                      aria-label="Education achievement badge with book icon, representing Kenny's commitment to learning and teaching"
                      onClick={() =>
                        announceToNVDA("Education achievement: Committed to lifelong learning and teaching excellence")
                      }
                      style={getParallaxStyle(1.5)}
                    >
                      <BookOpen
                        className={`${is4K ? "h-16 w-16" : isUltraWide ? "h-14 w-14" : "h-6 w-6 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"} 3xl:h-16 3xl:w-16 4xl:h-20 4xl:w-20 ${fastTransitionClass} group-hover:rotate-12`}
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className={`absolute ${is4K ? "-bottom-20 -left-20 p-12" : isUltraWide ? "-bottom-16 -left-16 p-10" : "-bottom-8 -left-8 xl:-bottom-12 xl:-left-12 2xl:-bottom-16 2xl:-left-16 p-4 xl:p-6 2xl:p-8"} 3xl:-bottom-20 3xl:-left-20 3xl:p-12 4xl:-bottom-24 4xl:-left-24 4xl:p-16 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full shadow-2xl ${prefersReducedMotion ? "" : `${getAnimationClass("bounce")} delay-1000`} ${fastTransitionClass} ${getTransformClass("hover-scale-lg")} cursor-pointer group`}
                      role="img"
                      aria-label="Award achievement badge with trophy icon, representing Kenny's recognition and success in education"
                      onClick={() =>
                        announceToNVDA(
                          "Award achievement: Recognized leader in educational excellence and student success",
                        )
                      }
                      style={getParallaxStyle(1.8)}
                    >
                      <Award
                        className={`${is4K ? "h-16 w-16" : isUltraWide ? "h-14 w-14" : "h-6 w-6 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"} 3xl:h-16 3xl:w-16 4xl:h-20 4xl:w-20 ${fastTransitionClass} group-hover:rotate-12`}
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className={`absolute top-1/2 ${is4K ? "-left-22 p-10" : isUltraWide ? "-left-18 p-8" : "-left-10 xl:-left-14 2xl:-left-18 p-3 xl:p-5 2xl:p-7"} 3xl:-left-22 3xl:p-10 4xl:-left-26 4xl:p-14 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full shadow-2xl ${prefersReducedMotion ? "" : `${getAnimationClass("bounce")} delay-500`} ${fastTransitionClass} ${getTransformClass("hover-scale-lg")} cursor-pointer group`}
                      role="img"
                      aria-label="Heart achievement badge, representing Kenny's passion and care for student success"
                      onClick={() =>
                        announceToNVDA(
                          "Passion achievement: Dedicated to caring for student success and community development",
                        )
                      }
                      style={getParallaxStyle(1.2)}
                    >
                      <Heart
                        className={`${is4K ? "h-14 w-14" : isUltraWide ? "h-12 w-12" : "h-5 w-5 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10"} 3xl:h-14 3xl:w-14 4xl:h-18 4xl:w-18 fill-current ${fastTransitionClass} group-hover:scale-125 group-hover:text-red-300`}
                        aria-hidden="true"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator for ultra-high resolution */}
        <div
          className={`absolute ${is4K ? "bottom-20" : isUltraWide ? "bottom-16" : "bottom-8 xl:bottom-12 2xl:bottom-16"} 3xl:bottom-20 4xl:bottom-24 left-1/2 transform -translate-x-1/2 ${prefersReducedMotion ? "" : getAnimationClass("bounce")} ${baseTransitionClass} ${getTransformClass("gpu")} group cursor-pointer`}
          role="button"
          tabIndex={0}
          aria-label="Scroll down to continue reading about Kenny's philosophy. Press Enter or Space to navigate to the next section. Desktop users can also use mouse wheel or Page Down key."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              announceToNVDA("Scrolling to philosophy section")
              document.getElementById("philosophy-section")?.scrollIntoView({ behavior: "smooth" })
            }
          }}
          onClick={() => {
            announceToNVDA("Scrolling to philosophy section")
            document.getElementById("philosophy-section")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <div
            className={`bg-white/20 backdrop-blur-sm ${is4K ? "p-8" : isUltraWide ? "p-6" : "p-4 xl:p-5 2xl:p-6"} 3xl:p-8 4xl:p-10 rounded-full shadow-lg border border-emerald-300/30 ${fastTransitionClass} focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-offset-2 group-hover:bg-emerald-500/30 group-hover:border-emerald-400/60 group-hover:shadow-2xl group-hover:shadow-emerald-500/50 ${getTransformClass("hover-scale")}`}
          >
            <ArrowDown
              className={`${is4K ? "h-16 w-16" : isUltraWide ? "h-14 w-14" : "h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"} 3xl:h-16 3xl:w-16 4xl:h-20 4xl:w-20 text-emerald-300 ${fastTransitionClass} group-hover:text-white group-hover:translate-y-1`}
              aria-hidden="true"
            />
          </div>
          {isDesktop && (
            <div
              className={`absolute ${is4K ? "-bottom-16" : isUltraWide ? "-bottom-14" : "-bottom-12"} 3xl:-bottom-16 4xl:-bottom-20 left-1/2 transform -translate-x-1/2 text-emerald-300 ${is4K ? "text-lg" : isUltraWide ? "text-base" : "text-sm"} 3xl:text-lg 4xl:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}
            >
              Continue to Philosophy
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Second Hero Section - Philosophy Showcase for Ultra-High Resolution */}
      <div
        className={`relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center ${baseTransitionClass}`}
        role="region"
        aria-labelledby="philosophy-section-title"
        aria-describedby="philosophy-section-desc"
        id="philosophy-section"
      >
        <h2 id="philosophy-section-title" className="sr-only">
          Kenny's Educational Philosophy Section
        </h2>
        <p id="philosophy-section-desc" className="sr-only">
          This section details Kenny's educational philosophy, approach to teaching, and core principles that guide his
          work with students and communities.{" "}
          {is4K && "Optimized for ultra-high resolution displays with enhanced detail and clarity."}
        </p>

        <div
          className={`container mx-auto ${is4K ? "px-20" : isUltraWide ? "px-16" : "px-4 lg:px-8 xl:px-12 2xl:px-16"} 3xl:px-20 4xl:px-24 ${baseTransitionClass}`}
        >
          <div
            className={`grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-2 ${is4K ? "gap-32" : isUltraWide ? "gap-28" : "gap-12 xl:gap-16 2xl:gap-24"} 3xl:gap-28 4xl:gap-36 items-center ${baseTransitionClass}`}
          >
            {/* Enhanced Kenny's Professional Image for Ultra-High Resolution */}
            <div
              className={`relative order-2 lg:order-1 ${prefersReducedMotion ? "opacity-100 translate-x-0" : `transition-all duration-1000 ease-in-out delay-500 ${getTransformClass("gpu")} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}`}
              style={isDesktop ? getParallaxStyle(-0.3) : {}}
            >
              <div className={`relative ${baseTransitionClass}`}>
                {/* Enhanced decorative background elements for ultra-high resolution */}
                <div
                  className={`absolute ${is4K ? "-inset-24" : isUltraWide ? "-inset-20" : "-inset-12 xl:-inset-16 2xl:-inset-20"} 3xl:-inset-24 4xl:-inset-32 bg-gradient-to-br from-emerald-200/30 via-teal-200/30 to-cyan-200/30 rounded-3xl blur-2xl ${baseTransitionClass} ${getTransformClass("gpu")}`}
                  aria-hidden="true"
                  style={getParallaxStyle(0.5)}
                ></div>

                {/* Enhanced professional image container for ultra-high resolution */}
                <Card
                  className={`relative border-0 shadow-2xl bg-white/90 backdrop-blur-sm ${is4K ? "p-16 rounded-4xl" : isUltraWide ? "p-12 rounded-4xl" : "p-8 xl:p-10 2xl:p-12 rounded-3xl"} 3xl:p-16 3xl:rounded-4xl 4xl:p-20 4xl:rounded-5xl ${baseTransitionClass} ${getTransformClass("hover-scale")} group cursor-pointer`}
                  onClick={() =>
                    announceToNVDA("Kenny Kunma philosophy section image - Professional educator and mentor")
                  }
                >
                  <CardContent className={`p-0 ${baseTransitionClass}`}>
                    {isLoading ? (
                      <Skeleton
                        className={`w-full ${is4K ? "h-[1100px]" : isUltraWide ? "h-[1000px]" : "h-[500px] xl:h-[700px] 2xl:h-[900px]"} 3xl:h-[1100px] 4xl:h-[1300px] rounded-2xl ${baseTransitionClass}`}
                      />
                    ) : (
                      <Image
                        src="/images/kenny-about-hero.png"
                        alt="Kenny Kunma professional portrait in the philosophy section, showing his professional demeanor and commitment to educational excellence"
                        width={is4K ? 1200 : isUltraWide ? 1000 : 800}
                        height={is4K ? 1200 : isUltraWide ? 1000 : 900}
                        className={`rounded-2xl object-cover w-full ${is4K ? "h-[1100px]" : isUltraWide ? "h-[1000px]" : "h-[500px] xl:h-[700px] 2xl:h-[900px]"} 3xl:h-[1100px] 4xl:h-[1300px] shadow-xl ${baseTransitionClass} ${getTransformClass("gpu")} group-hover:shadow-emerald-500/30`}
                      />
                    )}

                    {/* Enhanced overlay stats for ultra-high resolution */}
                    {!isLoading && (
                      <div
                        className={`absolute ${is4K ? "bottom-16 left-16 right-16" : isUltraWide ? "bottom-12 left-12 right-12" : "bottom-8 xl:bottom-10 2xl:bottom-12 left-8 xl:left-10 2xl:left-12 right-8 xl:right-10 2xl:right-12"} 3xl:bottom-16 3xl:left-16 3xl:right-16 4xl:bottom-20 4xl:left-20 4xl:right-20 ${baseTransitionClass}`}
                      >
                        <Card
                          className={`bg-white/95 backdrop-blur-md border-0 shadow-xl ${fastTransitionClass} ${getTransformClass("hover-scale")} group-hover:shadow-2xl`}
                          role="region"
                          aria-labelledby="stats-overlay-title"
                        >
                          <h3 id="stats-overlay-title" className="sr-only">
                            Kenny's Key Statistics Summary
                          </h3>
                          <CardContent
                            className={`${is4K ? "p-10" : isUltraWide ? "p-8" : "p-4 xl:p-6 2xl:p-8"} 3xl:p-10 4xl:p-12 ${fastTransitionClass}`}
                          >
                            <div
                              className={`grid grid-cols-3 ${is4K ? "gap-10" : isUltraWide ? "gap-8" : "gap-4 xl:gap-6 2xl:gap-8"} 3xl:gap-10 4xl:gap-12 text-center ${fastTransitionClass}`}
                              role="list"
                              aria-label="Summary statistics"
                            >
                              <div
                                className={`${fastTransitionClass} group cursor-pointer`}
                                role="listitem"
                                onClick={() => announceToNVDA("Seven plus years of educational leadership experience")}
                              >
                                <div
                                  className={`${is4K ? "text-5xl" : isUltraWide ? "text-4xl" : "text-2xl xl:text-3xl 2xl:text-4xl"} 3xl:text-5xl 4xl:text-6xl font-bold text-emerald-600 ${fastTransitionClass} ${getTransformClass("gpu")} group-hover:scale-110`}
                                  aria-label="Seven plus years"
                                >
                                  7+
                                </div>
                                <div
                                  className={`${is4K ? "text-xl" : isUltraWide ? "text-lg" : "text-sm xl:text-base 2xl:text-lg"} 3xl:text-xl 4xl:text-2xl text-slate-600 ${fastTransitionClass}`}
                                >
                                  Years Experience
                                </div>
                              </div>
                              <div
                                className={`${fastTransitionClass} group cursor-pointer`}
                                role="listitem"
                                onClick={() => announceToNVDA("Over five hundred students successfully mentored")}
                              >
                                <div
                                  className={`${is4K ? "text-5xl" : isUltraWide ? "text-4xl" : "text-2xl xl:text-3xl 2xl:text-4xl"} 3xl:text-5xl 4xl:text-6xl font-bold text-teal-600 ${fastTransitionClass} ${getTransformClass("gpu")} group-hover:scale-110`}
                                  aria-label="Over five hundred"
                                >
                                  500+
                                </div>
                                <div
                                  className={`${is4K ? "text-xl" : isUltraWide ? "text-lg" : "text-sm xl:text-base 2xl:text-lg"} 3xl:text-xl 4xl:text-2xl text-slate-600 ${fastTransitionClass}`}
                                >
                                  Students
                                </div>
                              </div>
                              <div
                                className={`${fastTransitionClass} group cursor-pointer`}
                                role="listitem"
                                onClick={() =>
                                  announceToNVDA("Ninety-five percent success rate in student achievement")
                                }
                              >
                                <div
                                  className={`${is4K ? "text-5xl" : isUltraWide ? "text-4xl" : "text-2xl xl:text-3xl 2xl:text-4xl"} 3xl:text-5xl 4xl:text-6xl font-bold text-cyan-600 ${fastTransitionClass} ${getTransformClass("gpu")} group-hover:scale-110`}
                                  aria-label="Ninety-five percent"
                                >
                                  95%
                                </div>
                                <div
                                  className={`${is4K ? "text-xl" : isUltraWide ? "text-lg" : "text-sm xl:text-base 2xl:text-lg"} 3xl:text-xl 4xl:text-2xl text-slate-600 ${fastTransitionClass}`}
                                >
                                  Success Rate
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Enhanced floating testimonial for ultra-high resolution */}
                {!isLoading && (
                  <Card
                    className={`absolute ${is4K ? "-top-20 -right-20 max-w-2xl" : isUltraWide ? "-top-16 -right-16 max-w-xl" : "-top-8 -right-8 xl:-top-12 xl:-right-12 2xl:-top-16 2xl:-right-16 max-w-sm xl:max-w-md 2xl:max-w-lg"} 3xl:-top-20 3xl:-right-20 3xl:max-w-2xl 4xl:-top-24 4xl:-right-24 4xl:max-w-3xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 shadow-2xl ${fastTransitionClass} ${getTransformClass("hover-scale")} cursor-pointer group`}
                    role="region"
                    aria-labelledby="testimonial-title"
                    onClick={() =>
                      announceToNVDA(
                        "Educational partner testimonial: Kenny's passion for education is truly inspiring",
                      )
                    }
                    style={getParallaxStyle(1.2)}
                  >
                    <h3 id="testimonial-title" className="sr-only">
                      Educational Partner Testimonial
                    </h3>
                    <CardContent
                      className={`${is4K ? "p-10" : isUltraWide ? "p-8" : "p-4 xl:p-6 2xl:p-8"} 3xl:p-10 4xl:p-12 ${fastTransitionClass}`}
                    >
                      <div
                        className={`flex items-center ${is4K ? "space-x-5 mb-6" : isUltraWide ? "space-x-4 mb-5" : "space-x-2 xl:space-x-3 2xl:space-x-4 mb-3 xl:mb-4 2xl:mb-5"} 3xl:space-x-5 3xl:mb-6 4xl:space-x-6 4xl:mb-8 ${fastTransitionClass}`}
                        role="img"
                        aria-label="Five star rating"
                      >
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`${is4K ? "h-8 w-8" : isUltraWide ? "h-7 w-7" : "h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"} 3xl:h-8 3xl:w-8 4xl:h-10 4xl:w-10 fill-current text-yellow-300 ${fastTransitionClass} group-hover:scale-110`}
                            aria-hidden="true"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      <blockquote
                        className={`${is4K ? "text-2xl" : isUltraWide ? "text-xl" : "text-sm xl:text-base 2xl:text-lg"} 3xl:text-2xl 4xl:text-3xl italic ${fastTransitionClass} group-hover:text-emerald-100`}
                      >
                        "Kenny's passion for education is truly inspiring"
                      </blockquote>
                      <cite
                        className={`${is4K ? "text-lg mt-5" : isUltraWide ? "text-base mt-4" : "text-xs xl:text-sm 2xl:text-base mt-2 xl:mt-3 2xl:mt-4"} 3xl:text-lg 3xl:mt-5 4xl:text-xl 4xl:mt-6 text-emerald-200 ${fastTransitionClass}`}
                      >
                        - Educational Partner
                      </cite>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Enhanced Philosophy Content for Ultra-High Resolution */}
            <div
              className={`${is4K ? "space-y-20" : isUltraWide ? "space-y-16" : "space-y-8 xl:space-y-12 2xl:space-y-16"} 3xl:space-y-18 4xl:space-y-24 order-1 lg:order-2 ${prefersReducedMotion ? "opacity-100 translate-x-0" : `transition-all duration-1000 ease-in-out delay-700 ${getTransformClass("gpu")} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}`}
              style={isDesktop ? getParallaxStyle(0.2) : {}}
            >
              <div
                className={`${is4K ? "space-y-12" : isUltraWide ? "space-y-10" : "space-y-6 xl:space-y-8 2xl:space-y-10"} 3xl:space-y-12 4xl:space-y-16 ${baseTransitionClass}`}
              >
                {isLoading ? (
                  <Skeleton
                    className={`${is4K ? "h-16 w-72" : isUltraWide ? "h-14 w-64" : "h-12 w-56"} 3xl:h-16 3xl:w-68 4xl:h-20 4xl:w-80 ${baseTransitionClass}`}
                  />
                ) : (
                  <Badge
                    className={`bg-emerald-100 text-emerald-800 border-emerald-300 ${is4K ? "px-10 py-5 text-2xl" : isUltraWide ? "px-8 py-4 text-xl" : "px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 2xl:py-4 text-base xl:text-lg 2xl:text-xl"} 3xl:px-10 3xl:py-5 3xl:text-2xl 4xl:px-12 4xl:py-6 4xl:text-3xl ${fastTransitionClass} ${getTransformClass("hover-scale")} cursor-pointer`}
                    role="text"
                    aria-label="Philosophy section badge"
                    onClick={() => announceToNVDA("Philosophy section - Learn about Kenny's educational approach")}
                  >
                    <BookOpen
                      className={`${is4K ? "h-8 w-8 mr-5" : isUltraWide ? "h-7 w-7 mr-4" : "h-5 w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 mr-2 xl:mr-3 2xl:mr-4"} 3xl:h-8 3xl:w-8 3xl:mr-5 4xl:h-10 4xl:w-10 4xl:mr-6 ${fastTransitionClass}`}
                      aria-hidden="true"
                    />
                    My Philosophy
                  </Badge>
                )}

                {isLoading ? (
                  <div
                    className={`${is4K ? "space-y-8" : isUltraWide ? "space-y-7" : "space-y-6"} 3xl:space-y-8 4xl:space-y-10 ${baseTransitionClass}`}
                  >
                    <Skeleton
                      className={`${is4K ? "h-20 w-72" : isUltraWide ? "h-18 w-64" : "h-16 w-56"} 3xl:h-20 3xl:w-68 4xl:h-24 4xl:w-80`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-24 w-112" : isUltraWide ? "h-22 w-104" : "h-20 w-96"} 3xl:h-24 3xl:w-108 4xl:h-28 4xl:w-128`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-16 w-96" : isUltraWide ? "h-14 w-88" : "h-12 w-80"} 3xl:h-16 3xl:w-92 4xl:h-20 4xl:w-112`}
                    />
                  </div>
                ) : (
                  <header className={`${baseTransitionClass}`}>
                    <h2
                      className={`${is4K ? "text-10xl" : isUltraWide ? "text-9xl" : "text-5xl xl:text-7xl 2xl:text-8xl"} 3xl:text-9xl 4xl:text-11xl font-bold text-slate-900 leading-tight ${baseTransitionClass} ${getTransformClass("gpu")}`}
                      id="philosophy-heading"
                      tabIndex={-1}
                    >
                      Education is
                      <span
                        className={`block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 ${baseTransitionClass}`}
                        aria-label="Transformation"
                      >
                        Transformation
                      </span>
                      <span
                        className={`block ${is4K ? "text-6xl mt-6" : isUltraWide ? "text-5xl mt-5" : "text-3xl xl:text-4xl 2xl:text-5xl mt-3 xl:mt-4 2xl:mt-5"} 3xl:text-6xl 3xl:mt-6 4xl:text-7xl 4xl:mt-8 text-slate-700 ${baseTransitionClass}`}
                        role="text"
                        aria-label="Subtitle: For Individuals and Communities"
                      >
                        For Individuals & Communities
                      </span>
                    </h2>
                  </header>
                )}

                {isLoading ? (
                  <div
                    className={`${is4K ? "space-y-4" : isUltraWide ? "space-y-3.5" : "space-y-3"} 3xl:space-y-4 4xl:space-y-5 ${baseTransitionClass}`}
                  >
                    <Skeleton
                      className={`${is4K ? "h-10 w-full" : isUltraWide ? "h-9 w-full" : "h-8 w-full"} 3xl:h-10 4xl:h-12`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-10 w-5/6" : isUltraWide ? "h-9 w-5/6" : "h-8 w-5/6"} 3xl:h-10 3xl:w-5/6 4xl:h-12 4xl:w-5/6`}
                    />
                    <Skeleton
                      className={`${is4K ? "h-10 w-4/6" : isUltraWide ? "h-9 w-4/6" : "h-8 w-4/6"} 3xl:h-10 3xl:w-4/6 4xl:h-12 4xl:w-4/6`}
                    />
                  </div>
                ) : (
                  <p
                    className={`${is4K ? "text-4xl max-w-6xl" : isUltraWide ? "text-3xl max-w-5xl" : "text-xl xl:text-2xl 2xl:text-3xl max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"} 3xl:text-4xl 3xl:max-w-6xl 4xl:text-5xl 4xl:max-w-7xl text-slate-600 leading-relaxed ${baseTransitionClass} ${getTransformClass("gpu")}`}
                    role="text"
                    aria-label="Kenny's educational philosophy statement"
                  >
                    I believe that education is the most powerful tool for transformation, not just for individuals but
                    for entire communities. My approach combines practical support with mentorship, ensuring that
                    students not only access education but also develop the skills and confidence needed to excel.
                  </p>
                )}
              </div>

              <Separator
                className={`${is4K ? "my-20" : isUltraWide ? "my-16" : "my-8 xl:my-12 2xl:my-16"} 3xl:my-20 4xl:my-24 ${baseTransitionClass}`}
                aria-hidden="true"
              />

              {/* Enhanced key philosophy points for ultra-high resolution */}
              {isLoading ? (
                <div
                  className={`grid grid-cols-2 ${is4K ? "gap-12" : isUltraWide ? "gap-10" : "gap-8"} 3xl:gap-12 4xl:gap-16 ${baseTransitionClass}`}
                >
                  <Skeleton
                    className={`${is4K ? "h-56 w-full" : isUltraWide ? "h-48 w-full" : "h-40 w-full"} 3xl:h-56 4xl:h-64`}
                  />
                  <Skeleton
                    className={`${is4K ? "h-56 w-full" : isUltraWide ? "h-48 w-full" : "h-40 w-full"} 3xl:h-56 4xl:h-64`}
                  />
                </div>
              ) : (
                <section
                  className={`grid grid-cols-1 lg:grid-cols-2 ${is4K ? "gap-12" : isUltraWide ? "gap-10" : "gap-6 xl:gap-8 2xl:gap-10"} 3xl:gap-12 4xl:gap-16 ${baseTransitionClass}`}
                  role="list"
                  aria-labelledby="principles-heading"
                >
                  <h3 id="principles-heading" className="sr-only">
                    Kenny's Core Educational Principles
                  </h3>

                  <Card
                    className={`border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100 ${prefersReducedMotion ? "hover:shadow-lg" : "hover:shadow-2xl transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-105"} cursor-pointer group`}
                    role="listitem"
                    tabIndex={0}
                    aria-labelledby="equity-title"
                    aria-describedby="equity-desc"
                    onClick={() =>
                      announceToNVDA(
                        "Equity and Access principle: Ensuring financial constraints never prevent deserving students from accessing quality education",
                      )
                    }
                  >
                    <CardContent
                      className={`${is4K ? "p-12" : isUltraWide ? "p-10" : "p-6 xl:p-8 2xl:p-10"} 3xl:p-12 4xl:p-16 ${fastTransitionClass}`}
                    >
                      <div
                        className={`flex items-start ${is4K ? "space-x-10" : isUltraWide ? "space-x-8" : "space-x-4 xl:space-x-6 2xl:space-x-8"} 3xl:space-x-10 4xl:space-x-12 ${fastTransitionClass}`}
                      >
                        <div
                          className={`bg-emerald-200 ${is4K ? "p-6" : isUltraWide ? "p-5" : "p-3 xl:p-4 2xl:p-5"} 3xl:p-6 4xl:p-8 rounded-xl ${fastTransitionClass} ${getTransformClass("hover-scale-lg")} group-hover:bg-emerald-300 group-hover:shadow-lg`}
                          aria-hidden="true"
                        >
                          <Heart
                            className={`${is4K ? "h-12 w-12" : isUltraWide ? "h-10 w-10" : "h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10"} 3xl:h-12 3xl:w-12 4xl:h-16 4xl:w-16 text-emerald-600 ${fastTransitionClass} group-hover:scale-110`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className={`${fastTransitionClass}`}>
                          <h4
                            id="equity-title"
                            className={`font-bold text-emerald-700 ${is4K ? "mb-5 text-3xl" : isUltraWide ? "mb-4 text-2xl" : "mb-2 xl:mb-3 2xl:mb-4 text-lg xl:text-xl 2xl:text-2xl"} 3xl:mb-5 3xl:text-3xl 4xl:mb-6 4xl:text-4xl ${fastTransitionClass} group-hover:text-emerald-800`}
                          >
                            Equity & Access
                          </h4>
                          <p
                            id="equity-desc"
                            className={`${is4K ? "text-2xl" : isUltraWide ? "text-xl" : "text-base xl:text-lg 2xl:text-xl"} 3xl:text-2xl 4xl:text-3xl text-emerald-900/70 ${fastTransitionClass} group-hover:text-emerald-900`}
                          >
                            Ensuring financial constraints never prevent deserving students from accessing quality
                            education.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`border-0 shadow-lg bg-gradient-to-br from-teal-50 to-teal-100 ${prefersReducedMotion ? "hover:shadow-lg" : "hover:shadow-2xl transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-105"} cursor-pointer group`}
                    role="listitem"
                    tabIndex={0}
                    aria-labelledby="holistic-title"
                    aria-describedby="holistic-desc"
                    onClick={() =>
                      announceToNVDA(
                        "Holistic Development principle: Supporting academic achievement alongside personal growth and character development",
                      )
                    }
                  >
                    <CardContent
                      className={`${is4K ? "p-12" : isUltraWide ? "p-10" : "p-6 xl:p-8 2xl:p-10"} 3xl:p-12 4xl:p-16 ${fastTransitionClass}`}
                    >
                      <div
                        className={`flex items-start ${is4K ? "space-x-10" : isUltraWide ? "space-x-8" : "space-x-4 xl:space-x-6 2xl:space-x-8"} 3xl:space-x-10 4xl:space-x-12 ${fastTransitionClass}`}
                      >
                        <div
                          className={`bg-teal-200 ${is4K ? "p-6" : isUltraWide ? "p-5" : "p-3 xl:p-4 2xl:p-5"} 3xl:p-6 4xl:p-8 rounded-xl ${fastTransitionClass} ${getTransformClass("hover-scale-lg")} group-hover:bg-teal-300 group-hover:shadow-lg`}
                          aria-hidden="true"
                        >
                          <Users
                            className={`${is4K ? "h-12 w-12" : isUltraWide ? "h-10 w-10" : "h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10"} 3xl:h-12 3xl:w-12 4xl:h-16 4xl:w-16 text-teal-600 ${fastTransitionClass} group-hover:scale-110`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className={`${fastTransitionClass}`}>
                          <h4
                            id="holistic-title"
                            className={`font-bold text-teal-700 ${is4K ? "mb-5 text-3xl" : isUltraWide ? "mb-4 text-2xl" : "mb-2 xl:mb-3 2xl:mb-4 text-lg xl:text-xl 2xl:text-2xl"} 3xl:mb-5 3xl:text-3xl 4xl:mb-6 4xl:text-4xl ${fastTransitionClass} group-hover:text-teal-800`}
                          >
                            Holistic Development
                          </h4>
                          <p
                            id="holistic-desc"
                            className={`${is4K ? "text-2xl" : isUltraWide ? "text-xl" : "text-base xl:text-lg 2xl:text-xl"} 3xl:text-2xl 4xl:text-3xl text-teal-900/70 ${fastTransitionClass} group-hover:text-teal-900`}
                          >
                            Supporting academic achievement alongside personal growth and character development.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              )}

              {/* Enhanced CTA Buttons for ultra-high resolution */}
              {isLoading ? (
                <div
                  className={`flex flex-col sm:flex-row ${is4K ? "gap-8" : isUltraWide ? "gap-7" : "gap-6"} 3xl:gap-8 4xl:gap-10 ${baseTransitionClass}`}
                >
                  <Skeleton
                    className={`${is4K ? "h-20 w-72" : isUltraWide ? "h-18 w-64" : "h-16 w-56"} 3xl:h-20 3xl:w-68 4xl:h-24 4xl:w-80`}
                  />
                  <Skeleton
                    className={`${is4K ? "h-20 w-72" : isUltraWide ? "h-18 w-64" : "h-16 w-56"} 3xl:h-20 3xl:w-68 4xl:h-24 4xl:w-80`}
                  />
                </div>
              ) : (
                <nav
                  className={`flex flex-col sm:flex-row ${is4K ? "gap-8" : isUltraWide ? "gap-7" : "gap-4 xl:gap-6 2xl:gap-8"} 3xl:gap-9 4xl:gap-12 ${baseTransitionClass}`}
                >
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white ${is4K ? "px-20 py-10 text-4xl" : isUltraWide ? "px-16 py-8 text-3xl" : "px-8 xl:px-12 2xl:px-16 py-4 xl:py-6 2xl:py-8 text-lg xl:text-2xl 2xl:text-3xl"} 3xl:px-18 3xl:py-9 3xl:text-4xl 4xl:px-24 4xl:py-12 4xl:text-5xl rounded-full font-semibold ${prefersReducedMotion ? "transition-colors duration-200" : "transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50"} shadow-lg ${prefersReducedMotion ? "" : "will-change-transform"} group`}
                    onClick={() => {
                      announceToNVDA("Navigating to detailed about section")
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    aria-describedby="learn-more-desc"
                  >
                    Learn More
                    <TrendingUp
                      className={`${is4K ? "h-12 w-12 ml-6" : isUltraWide ? "h-10 w-10 ml-5" : "h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 ml-3 xl:ml-4 2xl:ml-5"} 3xl:h-12 3xl:w-12 3xl:ml-6 4xl:h-14 4xl:w-14 4xl:ml-7 ${prefersReducedMotion ? "transition-none" : "transition-all duration-300 ease-out group-hover:rotate-12 group-hover:scale-110"}`}
                      aria-hidden="true"
                    />
                  </Button>
                  <span id="learn-more-desc" className="sr-only">
                    Learn more about Kenny's educational approach and detailed background information. Keyboard
                    shortcut: Alt+L
                  </span>

                  <Button
                    variant="outline"
                    size="lg"
                    className={`border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white ${is4K ? "px-20 py-10 text-4xl" : isUltraWide ? "px-16 py-8 text-3xl" : "px-8 xl:px-12 2xl:px-16 py-4 xl:py-6 2xl:py-8 text-lg xl:text-2xl 2xl:text-3xl"} 3xl:px-18 3xl:py-9 3xl:text-4xl 4xl:px-24 4xl:py-12 4xl:text-5xl rounded-full font-semibold ${prefersReducedMotion ? "transition-colors duration-200" : "transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-600/50"} ${prefersReducedMotion ? "" : "will-change-transform"} group`}
                    onClick={() => {
                      announceToNVDA("Navigating to contact and support section")
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    aria-describedby="get-support-desc"
                  >
                    Get Support
                    <Heart
                      className={`${is4K ? "h-12 w-12 ml-6" : isUltraWide ? "h-10 w-10 ml-5" : "h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 ml-3 xl:ml-4 2xl:ml-5"} 3xl:h-12 3xl:w-12 3xl:ml-6 4xl:h-14 4xl:w-14 4xl:ml-7 ${prefersReducedMotion ? "transition-none" : "transition-all duration-300 ease-out group-hover:scale-125 group-hover:text-red-400"}`}
                      aria-hidden="true"
                    />
                  </Button>
                  <span id="get-support-desc" className="sr-only">
                    Get educational support, mentorship, or contact Kenny for collaboration opportunities. Keyboard
                    shortcut: Alt+C
                  </span>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ultra-high resolution keyboard shortcuts handler */}
      {isDesktop && (
        <div className="sr-only">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            accessKey="c"
            aria-label="Contact section shortcut"
          />
          <button
            onClick={() => document.getElementById("philosophy-section")?.scrollIntoView({ behavior: "smooth" })}
            accessKey="p"
            aria-label="Philosophy section shortcut"
          />
          <button
            onClick={() => setCurrentStat((prev) => (prev + 1) % 3)}
            accessKey="s"
            aria-label="Next statistic shortcut"
          />
        </div>
      )}
    </section>
  )
}
