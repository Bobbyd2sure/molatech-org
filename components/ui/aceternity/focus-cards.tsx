"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

interface Card {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  features: string[]
  technologies: string[]
  timeline: string
  gradient: string
}

interface FocusCardsProps {
  cards: Card[]
  className?: string
}

export function FocusCards({ cards, className }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", className)}>
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="relative group"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className={cn(
              "relative h-96 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
              "bg-gradient-to-br backdrop-blur-sm border border-white/10",
              `bg-gradient-to-br ${card.gradient}`,
              hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50",
            )}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">{card.icon}</div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>

                <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white/80">Key Features:</h4>
                  <ul className="space-y-1">
                    {card.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-white/70 flex items-center">
                        <div className="w-1 h-1 bg-white/60 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="space-y-4">
                {/* Timeline */}
                <div className="flex items-center justify-center text-xs">
                  <div className="flex items-center space-x-1 text-white/80">
                    <Clock className="w-3 h-3" />
                    <span>{card.timeline}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                >
                  <Link href={card.link}>
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hover effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              animate={{ opacity: hovered === index ? 1 : 0 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
