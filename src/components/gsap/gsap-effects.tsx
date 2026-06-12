"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface Props {
    children: ReactNode
    className?: string
}

/**
 * Page-level GSAP effects, scoped to this wrapper. Opt-in via classes:
 *  - `.hero-reveal`  — staggered entrance on load (hero timeline)
 *  - `.hero-word`    — word-by-word rise + blur-to-sharp (use on split headline words)
 *  - `.stat-count`   — count-up on scroll; reads `data-to` and `data-suffix`
 *  - `.reveal-on-scroll` — batched fade/rise reveal on scroll
 * Honours prefers-reduced-motion by leaving everything in its natural visible state.
 */
const GsapEffects = ({ children, className }: Props) => {
    const root = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            if (reduce) return

            // Hero entrance timeline (runs once on load).
            if (root.current?.querySelector(".hero-reveal, .hero-word")) {
                gsap
                    .timeline({ defaults: { ease: "power3.out" } })
                    .from(".hero-reveal", { y: 24, opacity: 0, duration: 0.7, stagger: 0.12 }, 0)
                    .from(
                        ".hero-word",
                        { y: 40, opacity: 0, filter: "blur(10px)", duration: 0.8, stagger: 0.1 },
                        0.15,
                    )
            }

            // Count-up stats on scroll.
            gsap.utils.toArray<HTMLElement>(".stat-count").forEach((el) => {
                const to = parseFloat(el.dataset.to || "")
                if (!Number.isFinite(to)) return // static metric (e.g. "24/7")
                const suffix = el.dataset.suffix || ""
                const counter = { v: 0 }
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 90%",
                    once: true,
                    onEnter: () =>
                        gsap.to(counter, {
                            v: to,
                            duration: 1.4,
                            ease: "power2.out",
                            onUpdate: () => {
                                el.textContent = String(Math.round(counter.v)) + suffix
                            },
                        }),
                })
            })

            // Scroll reveals — batched so a row animates together.
            if (root.current?.querySelector(".reveal-on-scroll")) {
                gsap.set(".reveal-on-scroll", { opacity: 0, y: 28 })
                ScrollTrigger.batch(".reveal-on-scroll", {
                    start: "top 88%",
                    once: true,
                    onEnter: (els) =>
                        gsap.to(els, {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            ease: "power3.out",
                            stagger: 0.08,
                            overwrite: true,
                        }),
                })
            }
        },
        { scope: root },
    )

    return (
        <div ref={root} className={className}>
            {children}
        </div>
    )
}

export default GsapEffects
