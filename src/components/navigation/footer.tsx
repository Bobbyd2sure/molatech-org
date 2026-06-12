import Link from 'next/link';
import Image from 'next/image';
import { AnimationContainer } from "@/components"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <Image src="/molatech-logo.png" alt="MolaTech" width={28} height={28} className="size-7" />
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Build. Secure. Automate.
                        </p>
                        <span className="mt-4 text-muted-foreground text-sm flex items-center">
                            MolaTech LLC &middot; Wyoming, USA
                        </span>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-foreground">
                                    Services
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/services/cybersecurity" className="hover:text-foreground transition-all duration-300">
                                            Cybersecurity
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/services/web-development" className="hover:text-foreground transition-all duration-300">
                                            Web Development
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/services/cloud-solutions" className="hover:text-foreground transition-all duration-300">
                                            Cloud Solutions
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/services/automation" className="hover:text-foreground transition-all duration-300">
                                            Automation &amp; AI
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/services" className="hover:text-foreground transition-all duration-300">
                                            All Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="/about" className="hover:text-foreground transition-all duration-300">
                                            About
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/projects" className="hover:text-foreground transition-all duration-300">
                                            Projects
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/book" className="hover:text-foreground transition-all duration-300">
                                            Book a Call
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/third-party-risk" className="hover:text-foreground transition-all duration-300">
                                            Third-Party Risk
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-foreground">
                                    Resources
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/blog" className="hover:text-foreground transition-all duration-300">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/faq" className="hover:text-foreground transition-all duration-300">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground">
                                    Legal
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="/contact" className="hover:text-foreground transition-all duration-300">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} MolaTech LLC. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="MOLATECH" />
            </div>
        </footer>
    )
}

export default Footer
