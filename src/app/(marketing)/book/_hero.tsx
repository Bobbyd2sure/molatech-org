"use client"

import GsapEffects from "@/components/gsap/gsap-effects"

/**
 * Client-side hero for the Book page.
 * Kept separate so the parent page.tsx can remain a Server Component
 * and export its `metadata` object without conflict.
 */
export default function BookHero() {
  return (
    <GsapEffects>
      {/* Hero */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <span className="hero-reveal inline-block text-sm font-medium text-blue-600 uppercase tracking-wider">
              Book
            </span>
            <h1 className="text-4xl md:text-6xl font-medium font-heading !leading-[1.15]">
              {"Book a Consultation".split(" ").map((word, i) => (
                <span
                  key={i}
                  className="hero-word inline-block bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                >
                  {word}{"\u00A0"}
                </span>
              ))}
            </h1>
            <p className="hero-reveal max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Schedule a free consultation with our team. We&apos;ll discuss your requirements,
              answer your questions, and explore how a fixed-scope engagement can help.
            </p>
          </div>
        </div>
      </section>
    </GsapEffects>
  )
}
