"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return
      const rect = divRef.current.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setPosition({ x, y })
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setOpacity(0)
    }

    const element = divRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isMounted])

  return (
    <div ref={divRef} className={cn("relative h-full w-full overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}, transparent 40%)`,
        }}
      />
    </div>
  )
}
