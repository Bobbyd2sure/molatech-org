"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const AnimatedBackgroundLines = ({
  children,
  className,
  lineColor = "#18CCFC",
  strokeWidth = 1,
  duration = 8,
  ...props
}: {
  children: React.ReactNode
  className?: string
  lineColor?: string
  strokeWidth?: number
  duration?: number
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)} {...props}>
      {mounted && <AnimatedSVG lineColor={lineColor} strokeWidth={strokeWidth} duration={duration} />}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}

const AnimatedSVG = ({
  lineColor,
  strokeWidth,
  duration,
}: {
  lineColor: string
  strokeWidth: number
  duration: number
}) => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current
    const paths = svg.querySelectorAll("path")

    paths.forEach((path, index) => {
      const length = path.getTotalLength()

      // Set initial styles
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
      path.style.animation = `drawPath ${duration}s ease-in-out infinite`
      path.style.animationDelay = `${index * 0.3}s`
    })

    // Add CSS animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes drawPath {
        0% {
          stroke-dashoffset: ${paths[0]?.getTotalLength() || 0};
          opacity: 0;
        }
        5% {
          opacity: 0.3;
        }
        50% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
        95% {
          opacity: 0.3;
        }
        100% {
          stroke-dashoffset: -${paths[0]?.getTotalLength() || 0};
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [duration])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1200 800"
      fill="none"
      className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-30"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Geometric line patterns */}
      <path
        d="M0 400 L300 100 L600 400 L900 100 L1200 400"
        stroke={lineColor}
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.6"
      />
      <path
        d="M0 500 L200 300 L400 500 L600 300 L800 500 L1000 300 L1200 500"
        stroke={lineColor}
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.4"
      />
      <path
        d="M100 0 L100 800 M300 0 L300 800 M500 0 L500 800 M700 0 L700 800 M900 0 L900 800 M1100 0 L1100 800"
        stroke={lineColor}
        strokeWidth={strokeWidth * 0.5}
        fill="none"
        opacity="0.2"
      />
      <path
        d="M0 200 L1200 200 M0 600 L1200 600"
        stroke={lineColor}
        strokeWidth={strokeWidth * 0.5}
        fill="none"
        opacity="0.2"
      />
      {/* Diagonal lines */}
      <path
        d="M0 0 L400 400 M400 0 L800 400 M800 0 L1200 400"
        stroke={lineColor}
        strokeWidth={strokeWidth * 0.7}
        fill="none"
        opacity="0.3"
      />
      <path
        d="M0 800 L400 400 M400 800 L800 400 M800 800 L1200 400"
        stroke={lineColor}
        strokeWidth={strokeWidth * 0.7}
        fill="none"
        opacity="0.3"
      />
      {/* Circuit-like patterns */}
      <path
        d="M50 50 L150 50 L150 150 L250 150 L250 250 L350 250"
        stroke={lineColor}
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.5"
      />
      <path
        d="M850 550 L950 550 L950 650 L1050 650 L1050 750 L1150 750"
        stroke={lineColor}
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.5"
      />
      <path
        d="M1150 50 L1050 50 L1050 150 L950 150 L950 250 L850 250"
        stroke={lineColor}
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}
