"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card"
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with MolaTech transformed our online presence completely. Their web development expertise helped us increase conversions by 40% and our customer engagement has never been higher. The team's attention to detail and commitment to excellence is truly remarkable.",
      name: "Sarah Johnson",
      designation: "CEO, TechStart Inc.",
      src: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    {
      quote:
        "The mobile app they developed for us has received outstanding feedback from our users. The user interface is intuitive, the performance is excellent, and the features perfectly match our business needs. Highly recommended for app development projects.",
      name: "Michael Chen",
      designation: "Product Manager, InnovateCorp",
      src="https://images.pexels.com/photos/7652510/pexels-photo-7652510.jpeg"
    },
    {
      quote:
        "Their cybersecurity training program significantly improved our team's awareness and reduced security incidents by 75%. The comprehensive approach and practical exercises made complex security concepts easy to understand and implement.",
      name: "David Wilson",
      designation: "CTO, SecureNet Solutions",
      src: "/placeholder.svg?height=100&width=100&text=DW",
    },
    {
      quote:
        "The digital marketing strategy they implemented for our business exceeded all expectations. Our online visibility increased dramatically, and we saw a 150% increase in qualified leads within just three months of launching the campaign.",
      name: "Emily Rodriguez",
      designation: "Marketing Director, GrowthCo",
      src: "/placeholder.svg?height=100&width=100&text=ER",
    },
    {
      quote:
        "MolaTech's cloud migration services helped us reduce our infrastructure costs by 45% while improving system reliability. Their expertise in AWS and modern DevOps practices made the transition seamless and worry-free.",
      name: "James Thompson",
      designation: "IT Director, CloudFirst Ltd",
      src: "/placeholder.svg?height=100&width=100&text=JT",
    },
    {
      quote:
        "The website design they created for our financial services firm perfectly captures our brand identity while maintaining the professional trust our clients expect. The conversion rate has improved by 60% since the redesign.",
      name: "Aisha Patel",
      designation: "Founder, WealthWise Advisors",
      src: "/placeholder.svg?height=100&width=100&text=AP",
    },
  ]

  const additionalTestimonials = [
    {
      quote:
        "Outstanding service and exceptional results. The team delivered exactly what we needed, on time and within budget.",
      author: "Robert Kim",
      role: "Startup Founder",
      avatar: "RK",
      rating: 5,
    },
    {
      quote:
        "Professional, reliable, and innovative. They turned our vision into reality with remarkable precision and creativity.",
      author: "Lisa Zhang",
      role: "E-commerce Director",
      avatar: "LZ",
      rating: 5,
    },
    {
      quote:
        "The best technology partner we've ever worked with. Their expertise and dedication are unmatched in the industry.",
      author: "Mark Davis",
      role: "Operations Manager",
      avatar: "MD",
      rating: 5,
    },
    {
      quote:
        "Incredible attention to detail and customer service. They went above and beyond to ensure our project's success.",
      author: "Jennifer Lee",
      role: "Product Owner",
      avatar: "JL",
      rating: 5,
    },
    {
      quote:
        "Fast, efficient, and high-quality work. The results speak for themselves - our business has grown significantly.",
      author: "Alex Rodriguez",
      role: "Business Owner",
      avatar: "AR",
      rating: 5,
    },
    {
      quote:
        "Exceptional technical skills combined with excellent communication. A truly professional development team.",
      author: "Maria Santos",
      role: "Tech Lead",
      avatar: "MS",
      rating: 5,
    },
    {
      quote: "They transformed our outdated systems into modern, efficient solutions. Highly recommend their services.",
      author: "John Mitchell",
      role: "IT Manager",
      avatar: "JM",
      rating: 5,
    },
    {
      quote:
        "Creative solutions and flawless execution. Our new platform exceeded all expectations and user feedback is amazing.",
      author: "Sophie Chen",
      role: "UX Director",
      avatar: "SC",
      rating: 5,
    },
    {
      quote:
        "Reliable, innovative, and results-driven. They helped us achieve our digital transformation goals seamlessly.",
      author: "Daniel Brown",
      role: "Digital Strategy Lead",
      avatar: "DB",
      rating: 5,
    },
    {
      quote:
        "Top-notch development team with deep expertise. They delivered a complex project with impressive quality and speed.",
      author: "Rachel Green",
      role: "Project Manager",
      avatar: "RG",
      rating: 5,
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Don't just take our word for it - hear from some of our satisfied clients who have experienced remarkable
              results
            </motion.p>
          </div>
        </div>

        {/* Main Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 mb-16"
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            More Client Feedback
          </h3>
          <InfiniteMovingCards
            items={additionalTestimonials.map((testimonial) => ({
              quote: testimonial.quote,
              name: testimonial.author,
              title: testimonial.role,
            }))}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-8"
          />
        </motion.div>

        {/* Enhanced 3D Testimonial Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Featured Client Stories</h3>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
              >
                <CardContainer className="inter-var h-full">
                  <CardBody className="relative group/card h-full">
                    <Card className="border-0 bg-background shadow-lg h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10">
                        <Quote className="h-12 w-12 text-purple-500" />
                      </div>

                      <CardContent className="pt-8 pb-6 relative">
                        <CardItem translateZ="50">
                          {/* Star Rating */}
                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            "{testimonial.quote.slice(0, 150)}..."
                          </p>
                        </CardItem>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <div className="flex items-center space-x-4 w-full">
                          <CardItem translateZ="60">
                            <Avatar className="border-2 border-purple-500/20 shadow-lg">
                              <AvatarImage src={testimonial.src || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-purple-700 font-semibold">
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          </CardItem>
                          <CardItem translateZ="40" className="flex-1">
                            <div>
                              <p className="text-sm font-semibold leading-none text-foreground">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground mt-1">{testimonial.designation}</p>
                            </div>
                          </CardItem>
                        </div>
                      </CardFooter>
                    </Card>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">Trusted by Leading Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechStart Inc.", "InnovateCorp", "SecureNet", "GrowthCo", "CloudFirst Ltd", "WealthWise"].map(
              (company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="px-4 py-2 bg-background/50 rounded-lg border border-muted text-sm font-medium"
                >
                  {company}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's work together to create your own success story. Our team is ready to help you achieve remarkable
              results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
