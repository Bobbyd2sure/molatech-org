"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [waveColors, setWaveColors] = useState<string[]>(
    colors || ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-transparent w-full",
        containerClassName,
      )}
      {...props}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          filter: `blur(${blur}px)`,
        }}
      >
        <rect width="100%" height="100%" fill={backgroundFill || "transparent"}></rect>
        {isClient &&
          waveColors.map((color, i) => (
            <WavySvg key={i} fill={color} opacity={waveOpacity} speed={speed} offset={i * 10} width={waveWidth} />
          ))}
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

const WavySvg = ({
  fill,
  offset = 0,
  opacity = 1,
  speed = "fast",
  width = 50,
}: {
  fill: string
  offset?: number
  opacity?: number
  speed?: "slow" | "fast"
  width?: number
}) => {
  const id = React.useId()
  const [animate, setAnimate] = useState(true)

  return (
    <>
      <defs>
        <path
          id={id}
          d={`M0,0 Q${width / 4},${width / 2} ${width / 2},${width / 2} T${width},${width / 2} V${width * 2} H0 Z`}
          fill={fill}
          fillOpacity={opacity}
        />
      </defs>
      <use
        href={`#${id}`}
        x="0"
        y={offset}
        style={{
          animation: animate ? `wave ${speed === "fast" ? 5 : 15}s infinite linear` : "",
        }}
      />
      <use
        href={`#${id}`}
        x="100%"
        y={offset}
        style={{
          animation: animate ? `wave ${speed === "fast" ? 5 : 15}s infinite linear reverse` : "",
        }}
      />
    </>
  )
}
