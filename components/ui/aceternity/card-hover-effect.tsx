"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter } from "@/components/ui/aceternity/animated-modal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    icon: React.ReactNode
    link: string
    details?: {
      features: string[]
      technologies: string[]
      timeline: string
      startingPrice: string
    }
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null)

  const handleModalOpen = (index: number) => {
    setActiveModalIndex(index)
  }

  const handleModalClose = () => {
    setActiveModalIndex(null)
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => activeModalIndex === null && setHoveredIndex(idx)}
          onMouseLeave={() => activeModalIndex === null && setHoveredIndex(null)}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: activeModalIndex !== null && activeModalIndex !== idx ? 0.3 : 1,
            scale: activeModalIndex !== null && activeModalIndex !== idx ? 0.95 : 1,
            filter: activeModalIndex !== null && activeModalIndex !== idx ? "blur(4px)" : "blur(0px)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && activeModalIndex === null && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-border/50 bg-background p-6 transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <motion.div
                  whileHover={activeModalIndex === null ? { scale: 1.1, rotate: 5 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20"
                >
                  {item.icon}
                </motion.div>
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>

              <div className="flex gap-2 w-full mt-4">
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
                >
                  <Link href={item.link}>Learn More</Link>
                </Button>

                {item.details && (
                  <div className="flex-1">
                    <Modal>
                      <ModalTrigger
                        className="w-full text-xs bg-transparent border border-purple-500/30 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 px-3 py-1 rounded-md transition-all duration-300"
                        onModalOpen={() => handleModalOpen(idx)}
                      >
                        Quick Details
                      </ModalTrigger>
                      <ModalBody onModalClose={handleModalClose}>
                        <ModalContent>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6"
                          >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                                {item.icon}
                              </div>
                              <div>
                                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                                  {item.title}
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
                              </div>
                            </div>

                            {/* Quick Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                                <div className="text-sm text-neutral-600 dark:text-neutral-400">Timeline</div>
                                <div className="font-semibold text-purple-600 dark:text-purple-400 text-lg">
                                  {item.details.timeline}
                                </div>
                              </div>
                              <div className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                                <div className="text-sm text-neutral-600 dark:text-neutral-400">Starting From</div>
                                <div className="font-semibold text-purple-600 dark:text-purple-400 text-lg">
                                  {item.details.startingPrice}
                                </div>
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                                Key Features
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {item.details.features.map((feature, featureIdx) => (
                                  <div key={featureIdx} className="flex items-center gap-3 p-2">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0" />
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                                Technologies
                              </h3>
                              <div className="flex flex-wrap gap-3">
                                {item.details.technologies.map((tech, techIdx) => (
                                  <Badge key={techIdx} variant="outline" className="text-sm px-3 py-1">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </ModalContent>
                        <ModalFooter>
                          <div className="flex gap-2 w-full">
                            <Button asChild variant="outline" className="flex-1">
                              <Link href="/contact">Get Quote</Link>
                            </Button>
                            <Button asChild className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500">
                              <Link href={item.link}>Full Details</Link>
                            </Button>
                          </div>
                        </ModalFooter>
                      </ModalBody>
                    </Modal>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
