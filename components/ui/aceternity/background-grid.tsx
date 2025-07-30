"use client"

import { cn } from "@/lib/utils"

export function BackgroundGrid({
  className,
  gridSize = 50,
  strokeWidth = 1,
  strokeColor = "rgba(120, 119, 198, 0.1)",
  fadeEdges = true,
}: {
  className?: string
  gridSize?: number
  strokeWidth?: number
  strokeColor?: string
  fadeEdges?: boolean
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </pattern>
          {fadeEdges && (
            <radialGradient id="fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          )}
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {fadeEdges && <rect width="100%" height="100%" fill="url(#fade)" />}
      </svg>
    </div>
  )
}
