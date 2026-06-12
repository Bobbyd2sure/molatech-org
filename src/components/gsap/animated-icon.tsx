"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface Props {
    /** Icon component — only usable from client components (functions don't cross the RSC boundary) */
    icon?: LucideIcon
    /** Alternative: pass the rendered icon as children — safe from server components */
    children?: ReactNode
    className?: string
    /** Extra classes on the wrapping span */
    wrapperClassName?: string
    strokeWidth?: number
}

/**
 * Lucide icon that draws its strokes in when scrolled into view, then gives a
 * gentle pop on hover. Honours prefers-reduced-motion (renders static).
 */
const AnimatedIcon = ({ icon: Icon, children, className, wrapperClassName, strokeWidth }: Props) => {
    const ref = useRef<HTMLSpanElement>(null)

    useGSAP(
        () => {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            if (reduce || !ref.current) return

            const shapes = ref.current.querySelectorAll<SVGGeometryElement>(
                "path, circle, rect, line, polyline, polygon, ellipse",
            )
            const drawable: { el: SVGGeometryElement; len: number }[] = []
            shapes.forEach((el) => {
                const len = typeof el.getTotalLength === "function" ? el.getTotalLength() : 0
                if (len > 0) drawable.push({ el, len })
            })
            if (!drawable.length) return

            drawable.forEach(({ el, len }) => {
                gsap.set(el, { strokeDasharray: len, strokeDashoffset: len })
            })

            ScrollTrigger.create({
                trigger: ref.current,
                start: "top 92%",
                once: true,
                onEnter: () =>
                    gsap.to(
                        drawable.map((d) => d.el),
                        {
                            strokeDashoffset: 0,
                            duration: 1.1,
                            ease: "power2.out",
                            stagger: 0.08,
                            clearProps: "strokeDasharray,strokeDashoffset",
                        },
                    ),
            })
        },
        { scope: ref },
    )

    return (
        <span
            ref={ref}
            className={cn(
                "inline-flex transition-transform duration-200 ease-out hover:scale-110 will-change-transform",
                wrapperClassName,
            )}
        >
            {Icon ? <Icon className={className} strokeWidth={strokeWidth} /> : children}
        </span>
    )
}

export default AnimatedIcon
