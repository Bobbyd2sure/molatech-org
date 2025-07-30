import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { FloatingDock } from "@/components/ui/aceternity/floating-dock"

export default function Footer() {
  const socialLinks = [
    {
      title: "Facebook",
      icon: <Facebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Instagram",
      icon: <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ]

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                MolaTech
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Innovative tech solutions for businesses of all sizes. Transforming ideas into digital reality.
            </p>
            <div className="flex justify-center">
              <FloatingDock
                items={socialLinks}
                desktopClassName="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-foreground">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="text-muted-foreground hover:text-foreground">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/website-design" className="text-muted-foreground hover:text-foreground">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-foreground">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-muted-foreground hover:text-foreground">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-muted-foreground hover:text-foreground">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-muted-foreground hover:text-foreground">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/services/consultancy" className="text-muted-foreground hover:text-foreground">
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">123 Tech Street, Innovation City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">info@molatech.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} MolaTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
