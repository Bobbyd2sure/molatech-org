"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    isButton?: boolean
  }[]
  className?: string
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-4 inset-x-0 mx-auto z-[5000] flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-background/80 px-8 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md",
            className,
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link key={`link-${idx}`} href={navItem.link}>
              {navItem.isButton ? (
                <Button size="sm">{navItem.name}</Button>
              ) : (
                <div className="relative flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary">
                  <span>{navItem.name}</span>
                </div>
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
