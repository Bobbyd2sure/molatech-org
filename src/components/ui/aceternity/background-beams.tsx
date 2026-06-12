"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const drawBeam = (x: number, y: number, angle: number, length: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)

      const gradient = ctx.createLinearGradient(0, 0, length, 0)
      gradient.addColorStop(0, `rgba(120, 119, 198, ${opacity})`)
      gradient.addColorStop(0.5, `rgba(120, 119, 198, ${opacity * 0.5})`)
      gradient.addColorStop(1, `rgba(120, 119, 198, 0)`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(length, 0)
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001

      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time + i) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(time + i * 0.5) * 0.5 + 0.5) * canvas.height
        const angle = time + (i * Math.PI) / 3
        const length = 100 + Math.sin(time + i) * 50
        const opacity = 0.1 + Math.sin(time + i) * 0.05

        drawBeam(x, y, angle, length, opacity)
      }

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 z-0 h-full w-full pointer-events-none", className)} />
}
