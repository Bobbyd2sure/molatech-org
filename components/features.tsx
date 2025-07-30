"use client"

import { CheckCircle } from "lucide-react"
import { Spotlight } from "@/components/ui/aceternity/spotlight"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Features() {
  const features = [
    "Expert team with years of industry experience",
    "Tailored solutions for businesses of all sizes",
    "Cutting-edge technologies and methodologies",
    "Ongoing support and maintenance",
    "Transparent communication and project management",
    "Competitive pricing with flexible options",
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <Spotlight className="hidden md:block" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-auto h-auto rounded-xl">
                <CardItem translateZ="100" rotateX={5} rotateY={-5} className="w-full">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-xl group-hover/card:opacity-100 transition duration-1000"></div>
                    <img
                      alt="Team Collaboration"
                      className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl"
                      src="/team-collaboration.jpg"
                    />
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Us</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
