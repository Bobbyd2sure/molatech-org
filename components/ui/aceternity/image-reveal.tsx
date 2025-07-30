"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export const ImageReveal = ({
  src,
  alt,
  className,
  overlayClassName,
  direction = "up",
}: {
  src: string
  alt: string
  className?: string
  overlayClassName?: string
  direction?: "up" | "down" | "left" | "right"
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: "100%" }
      case "down":
        return { y: "-100%" }
      case "left":
        return { x: "100%" }
      case "right":
        return { x: "-100%" }
      default:
        return { y: "100%" }
    }
  }

  const getFinalTransform = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: "0%" }
      case "left":
      case "right":
        return { x: "0%" }
      default:
        return { y: "0%" }
    }
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
      <motion.div
        className={cn("absolute inset-0 bg-gradient-to-t from-black/50 to-transparent", overlayClassName)}
        initial={getInitialTransform()}
        animate={isInView ? getFinalTransform() : getInitialTransform()}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  )
}
