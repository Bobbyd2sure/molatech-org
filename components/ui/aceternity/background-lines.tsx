"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
  ...props
}: {
  children: React.ReactNode
  className?: string
  svgOptions?: {
    duration?: number
  }
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)} {...props}>
      {mounted && <SVGMask svgOptions={svgOptions} />}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}

const SVGMask = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number
  }
}) => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current
    const paths = svg.querySelectorAll("path")
    const duration = svgOptions?.duration || 10

    paths.forEach((path, index) => {
      const length = path.getTotalLength()

      // Set initial styles
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
      path.style.animation = `drawLine ${duration}s ease-in-out infinite`
      path.style.animationDelay = `${index * 0.5}s`
    })

    // Add CSS animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes drawLine {
        0% {
          stroke-dashoffset: ${paths[0]?.getTotalLength() || 0};
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        50% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          stroke-dashoffset: -${paths[0]?.getTotalLength() || 0};
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [svgOptions])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 696 316"
      fill="none"
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m405 315 90-89-46-46M0 166l98-98 98 98"
        stroke="url(#paint0_linear_135_43)"
        strokeOpacity="0.05"
        strokeWidth="1"
      />
      <path
        d="M249 316 139 206l58-58M98 98l46-46 46 46"
        stroke="url(#paint1_linear_135_43)"
        strokeOpacity="0.05"
        strokeWidth="1"
      />
      <path
        d="M696 68 606 158l-46-46M448 316 338 206l58-58M197 148l46-46 46 46"
        stroke="url(#paint2_linear_135_43)"
        strokeOpacity="0.05"
        strokeWidth="1"
      />
      <path
        d="M648 316 538 206l58-58M296 148l46-46 46 46M647 68 557 158l-46-46"
        stroke="url(#paint3_linear_135_43)"
        strokeOpacity="0.05"
        strokeWidth="1"
      />
      <path
        d="M447 68 357 158l-46-46M547 316 437 206l58-58M395 148l46-46 46 46"
        stroke="url(#paint4_linear_135_43)"
        strokeOpacity="0.05"
        strokeWidth="1"
      />
      <path
        d="M546 68 456 158l-46-46M646 316 536 206l58-58M494 148l46-46 46 46"
        stroke="url(#paint5_linear_135_43)"
        strokeOpacity="0.05"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="paint0_linear_135_43" x1="0" y1="0" x2="696" y2="316" gradientUnits="userSpaceOnUse">
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop offset="0.325" stopColor="#18CCFC" />
          <stop offset="1" stopColor="#6344F5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_135_43" x1="0" y1="0" x2="696" y2="316" gradientUnits="userSpaceOnUse">
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop offset="0.325" stopColor="#18CCFC" />
          <stop offset="1" stopColor="#6344F5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_135_43" x1="0" y1="0" x2="696" y2="316" gradientUnits="userSpaceOnUse">
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop offset="0.325" stopColor="#18CCFC" />
          <stop offset="1" stopColor="#6344F5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_135_43" x1="0" y1="0" x2="696" y2="316" gradientUnits="userSpaceOnUse">
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop offset="0.325" stopColor="#18CCFC" />
          <stop offset="1" stopColor="#6344F5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear_135_43" x1="0" y1="0" x2="696" y2="316" gradientUnits="userSpaceOnUse">
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop offset="0.325" stopColor="#18CCFC" />
          <stop offset="1" stopColor="#6344F5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint5_linear_135_43" x1="0" y1="0" x2="696" y2="316" gradientUnits="userSpaceOnUse">
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop offset="0.325" stopColor="#18CCFC" />
          <stop offset="1" stopColor="#6344F5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
