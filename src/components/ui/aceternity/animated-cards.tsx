"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  items: {
    id: string | number
    content: React.ReactNode
  }[]
  direction?: "horizontal" | "vertical"
  speed?: "fast" | "medium" | "slow"
  pauseOnHover?: boolean
  className?: string
  containerClassName?: string
}

export const AnimatedCards = ({
  items,
  direction = "horizontal",
  speed = "medium",
  pauseOnHover = true,
  className,
  containerClassName,
}: AnimatedCardProps) => {
  const [duplicatedItems, setDuplicatedItems] = useState<typeof items>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    setDuplicatedItems([...items, ...items])
  }, [items])

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    const scrollerContent = scrollerRef.current
    const containerWidth = containerRef.current.offsetWidth
    const scrollerWidth = scrollerContent.scrollWidth

    if (scrollerWidth <= containerWidth) {
      setDuplicatedItems([...items, ...items, ...items, ...items])
    }

    setStart(true)
  }, [items, duplicatedItems])

  const getDirection = () => {
    if (direction === "horizontal") {
      return "right"
    } else {
      return "down"
    }
  }

  const getSpeed = () => {
    if (speed === "fast") {
      return 20
    } else if (speed === "medium") {
      return 40
    } else {
      return 60
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        containerClassName,
      )}
    >
      <motion.ul
        ref={scrollerRef}
        className={cn(
          "flex w-max flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "horizontal" ? "flex-row" : "flex-col",
          className,
        )}
        style={{
          animationDirection: getDirection(),
          animationDuration: `${getSpeed()}s`,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <li key={item.id + "-" + idx} className="w-max flex-shrink-0">
            {item.content}
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
