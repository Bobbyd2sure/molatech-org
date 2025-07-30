"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <WavyBackground
      colors={["#6d28d9", "#7c3aed", "#8b5cf6", "#9333ea", "#a855f7"]}
      waveOpacity={0.3}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Let's discuss how our tech solutions can help you achieve your business goals.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 min-[400px]:flex-row"
          >
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/start">
                Start Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </WavyBackground>
  )
}
