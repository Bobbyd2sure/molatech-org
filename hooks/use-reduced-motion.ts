"use client"

import { useEffect, useState } from "react"

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return

    // Create media query for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches)

    // Create event handler
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Add listener
    mediaQuery.addEventListener("change", handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return prefersReducedMotion
}
