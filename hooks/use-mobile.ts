"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile based on screen width or touch capability
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
