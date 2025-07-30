"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface AccessibilityTestHelperProps {
  children: React.ReactNode
}

export function AccessibilityTestHelper({ children }: AccessibilityTestHelperProps) {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [focusVisible, setFocusVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Detect high contrast mode
    const checkHighContrast = () => {
      if (typeof window !== "undefined") {
        const mediaQuery = window.matchMedia("(prefers-contrast: high)")
        setIsHighContrast(mediaQuery.matches)

        const handleChange = (e: MediaQueryListEvent) => {
          setIsHighContrast(e.matches)
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
      }
    }

    checkHighContrast()

    // Enhanced focus visibility for keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setFocusVisible(true)
      }
    }

    const handleMouseDown = () => {
      setFocusVisible(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleMouseDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleMouseDown)
    }
  }, [])

  // Add accessibility classes to document
  useEffect(() => {
    const classes = []

    if (prefersReducedMotion) classes.push("prefers-reduced-motion")
    if (isHighContrast) classes.push("high-contrast")
    if (focusVisible) classes.push("focus-visible")

    document.documentElement.className = classes.join(" ")

    return () => {
      document.documentElement.className = ""
    }
  }, [prefersReducedMotion, isHighContrast, focusVisible])

  return (
    <>
      {children}

      {/* Accessibility status indicator for testing */}
      <div
        className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50 sr-only focus:not-sr-only"
        role="status"
        aria-live="polite"
        tabIndex={0}
      >
        <div>Reduced Motion: {prefersReducedMotion ? "ON" : "OFF"}</div>
        <div>High Contrast: {isHighContrast ? "ON" : "OFF"}</div>
        <div>Focus Mode: {focusVisible ? "KEYBOARD" : "MOUSE"}</div>
      </div>
    </>
  )
}
