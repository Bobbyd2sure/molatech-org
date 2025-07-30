"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    facebook?: string
  }
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in tech leadership, Sarah founded TechSolutions with a vision to help businesses leverage technology for growth.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael leads our technical strategy and oversees all development projects, bringing 12+ years of experience in software architecture.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Wilson",
      role: "Head of Cybersecurity",
      bio: "Former security consultant for Fortune 500 companies, David ensures our clients' data and systems are protected with cutting-edge security measures.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      bio: "Emily brings her artistic vision and UX expertise to every design project, creating beautiful and functional digital experiences.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "James Thompson",
      role: "Marketing Director",
      bio: "James specializes in digital marketing strategies that drive measurable results, with particular expertise in SaaS and B2B sectors.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Aisha Patel",
      role: "Cloud Solutions Architect",
      bio: "Aisha designs and implements scalable cloud infrastructure solutions, with certifications in AWS, Azure, and Google Cloud.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
      },
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              The experts behind our successful projects and innovative solutions
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="relative group/card h-full">
                  <Card className="overflow-hidden h-full">
                    <CardItem translateZ="100" className="w-full">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover/card:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                      </div>
                    </CardItem>
                    <CardHeader>
                      <CardItem translateZ="50">
                        <CardTitle>{member.name}</CardTitle>
                      </CardItem>
                      <CardItem translateZ="40">
                        <CardDescription>{member.role}</CardDescription>
                      </CardItem>
                    </CardHeader>
                    <CardContent>
                      <CardItem translateZ="30">
                        <p className="text-muted-foreground">{member.bio}</p>
                      </CardItem>
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      {member.social.twitter && (
                        <CardItem translateZ="60">
                          <Link
                            href={member.social.twitter}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                          </Link>
                        </CardItem>
                      )}
                      {member.social.linkedin && (
                        <CardItem translateZ="60">
                          <Link
                            href={member.social.linkedin}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </CardItem>
                      )}
                      {member.social.facebook && (
                        <CardItem translateZ="60">
                          <Link
                            href={member.social.facebook}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </Link>
                        </CardItem>
                      )}
                    </CardFooter>
                  </Card>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
