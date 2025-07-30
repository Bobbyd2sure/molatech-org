"use client"

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Kenny's dedication to student success is unmatched. His holistic approach to education support has transformed countless lives in our community. I've witnessed firsthand the positive impact of his mentorship programs.",
      name: "Dr. Funmi Adebayo",
      designation: "University Lecturer at University of Lagos",
      src: "/african-woman-teacher.png",
    },
    {
      quote:
        "Working with Kenny has been a privilege. His commitment to educational equity and student welfare is truly inspiring and impactful. The partnerships we've built have benefited hundreds of students.",
      name: "Prof. Chidi Okonkwo",
      designation: "Dean of Students at Federal University of Technology",
      src: "/placeholder-99dwv.png",
    },
    {
      quote:
        "Kenny helped my daughter when we couldn't afford her JAMB form. Today, she's a successful graduate working as a nurse. We are forever grateful for his kindness and continued support.",
      name: "Mrs. Aisha Mohammed",
      designation: "Parent & Community Leader in Abuja",
      src: "/african-woman-leader.png",
    },
    {
      quote:
        "As a student who benefited from Kenny's mentorship program, I can say his guidance was instrumental in my academic success. He believed in me when I didn't believe in myself.",
      name: "Ibrahim Yakubu",
      designation: "Engineering Graduate & Former Mentee",
      src: "/young-african-student.png",
    },
    {
      quote:
        "Kenny's educational initiatives have brought hope to our community. His scholarship programs have enabled many bright minds to pursue higher education despite financial constraints.",
      name: "Mrs. Grace Okafor",
      designation: "Secondary School Principal in Lagos",
      src: "/young-african-woman-student.png",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4">
            <Users className="h-4 w-4 mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What People
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from educators, parents, and community leaders about the impact of our educational support programs.
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  )
}
