"use client"

import { Card, CardContent } from "@/components/ui/card"
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with MolaTech transformed our online presence completely. Their web development expertise helped us increase conversions by 40% and our customer engagement has never been higher. The team's attention to detail and commitment to excellence is truly remarkable.",
      name: "Adeola Mwandala",
      designation: "CEO, Marte Beauty Inc.",
      initials: "AM",
    },
    {
      quote:
        "The mobile app they developed for us has received outstanding feedback from our users. The user interface is intuitive, the performance is excellent, and the features perfectly match our business needs. Highly recommended for app development projects.",
      name: "Thomas Ndhlebe",
      designation: "Tenderglove Healthcare",
      initials: "TN",
    },
    {
      quote:
        "Their cybersecurity training program significantly improved our team's awareness and reduced security incidents by 75%. The comprehensive approach and practical exercises made complex security concepts easy to understand and implement.",
      name: "Mary Smith",
      designation: "CEO, Marymia Limited",
      initials: "MS",
    },
  ]

  const additionalTestimonials = [
    {
      quote:
        "Working with MolaTech transformed our online presence completely. Their web development expertise helped us increase conversions by 40%.",
      author: "Adeola Mwandala",
      role: "CEO, Marte Beauty Inc.",
      avatar: "AM",
      rating: 5,
    },
    {
      quote:
        "The mobile app they developed for us has received outstanding feedback from our users. Highly recommended for app development projects.",
      author: "Thomas Ndhlebe",
      role: "Tenderglove Healthcare",
      avatar: "TN",
      rating: 5,
    },
    {
      quote:
        "Their cybersecurity training program significantly improved our team's awareness and reduced security incidents by 75%.",
      author: "Mary Smith",
      role: "CEO, Marymia Limited",
      avatar: "MS",
      rating: 5,
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

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

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <Card className="relative border-0 bg-gradient-to-br from-background to-muted shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full translate-x-24 translate-y-24" />

              <CardContent className="relative p-8 md:p-12">
                <Quote className="absolute top-6 left-6 h-12 w-12 text-purple-500/20" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    {/* Star Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-white">
                          {testimonials[activeIndex].initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">
                          {testimonials[activeIndex].name}
                        </p>
                        <p className="text-muted-foreground">
                          {testimonials[activeIndex].designation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={handlePrev}
                    className="h-10 w-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "w-8 bg-gradient-to-r from-purple-600 to-blue-500"
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="h-10 w-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
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

        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Featured Client Stories</h3>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <Card className="h-full border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-purple-500/30 mb-4 group-hover:text-purple-500/50 transition-colors" />

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                      "{testimonial.quote.length > 180
                        ? testimonial.quote.slice(0, 180) + "..."
                        : testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
            {["Marte Beauty Inc.", "Tenderglove Healthcare", "Marymia Limited"].map(
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
