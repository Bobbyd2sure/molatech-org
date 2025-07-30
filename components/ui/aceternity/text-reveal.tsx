"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export const TextReveal = ({
  text,
  className = "",
  once = true,
}: {
  text: string
  className?: string
  once?: boolean
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-1">
          <motion.span
            className="inline-block overflow-hidden"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
