"use client"

import Image from "next/image"
import GsapEffects from "@/components/gsap/gsap-effects"

/**
 * Client-side hero for the Contact page.
 * Kept separate so the parent page.tsx can remain a Server Component
 * and export its `metadata` object without conflict.
 */
export default function ContactHero() {
  return (
    <GsapEffects>
      {/* Hero */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/contact.jpg"
            alt="Contact MolaTech"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="hero-reveal inline-block text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-6xl font-medium font-heading !leading-[1.15] mb-6">
              {"Let's Talk".split(" ").map((word, i) => (
                <span
                  key={i}
                  className="hero-word inline-block bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {word}{"\u00A0"}
                </span>
              ))}
            </h1>
            <p className="hero-reveal text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We&apos;d love to hear from you. Reach out to discuss your project, ask questions,
              or explore how a fixed-scope engagement could work for your team.
            </p>
          </div>
        </div>
      </section>
    </GsapEffects>
  )
}
