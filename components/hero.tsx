"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WavyBackground } from "@/components/ui/aceternity/wavy-background"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { FlipWords } from "@/components/ui/aceternity/flip-words"
import { motion } from "framer-motion"
import ProjectModal from "@/components/project-modal"

export default function Hero() {
  const words = ["Solutions", "Services", "Innovation", "Excellence", "Growth", "Success"]

  return (
    <WavyBackground className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="flex flex-col justify-center space-y-4 max-w-4xl">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="relative inline-block mr-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-sm opacity-75"></span>
                  <span className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg border border-purple-400/30 shadow-lg backdrop-blur-sm">
                    Innovative Tech
                  </span>
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  <FlipWords
                    words={words}
                    className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent"
                  />
                </span>{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  for Your Business
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-[600px] mx-auto text-muted-foreground md:text-xl"
              >
                We deliver cutting-edge web development, app solutions, digital marketing, cloud services, and
                cybersecurity expertise to transform your business.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
            >
              <Button asChild size="lg" className="group">
                <Link href="/start">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>

            {/* Featured Project Modal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="pt-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-px bg-gradient-to-r from-purple-600 to-blue-500 flex-1" />
                <span className="text-sm text-muted-foreground">Latest Success Story</span>
                <div className="h-px bg-gradient-to-r from-blue-500 to-purple-600 flex-1" />
              </div>
              <div className="mt-4">
                <ProjectModal />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-auto h-auto rounded-xl">
                <CardItem translateZ="100" rotateX={5} rotateY={5} className="w-full">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-xl group-hover/card:opacity-100 transition duration-1000"></div>
                    <img
                      alt="Collaborative Tech Workspace"
                      className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl"
                      src="/tech-meeting-flatlay.jpg"
                    />
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>
      </div>
    </WavyBackground>
  )
}
