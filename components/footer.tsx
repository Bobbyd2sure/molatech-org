"use client"

import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-white text-slate-900 px-4 py-2 rounded font-bold text-lg inline-block">
              KENNY
              <br />
              KUNMA
            </div>
            <p className="text-slate-300">
              Empowering students and building futures through education, mentorship, and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="block text-slate-300 hover:text-white transition-colors duration-200">
                About Me
              </Link>
              <Link href="/services" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Services
              </Link>
              <Link href="/gallery" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Gallery
              </Link>
              <Link href="/blog" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Blog
              </Link>
              <Link href="/impact" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Impact
              </Link>
              <a href="#contact" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <div className="space-y-2 text-slate-300">
              <p>JAMB Form Support</p>
              <p>Financial Assistance</p>
              <p>Mentorship Programs</p>
              <p>Educational Resources</p>
              <p>Career Development</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">kenny@kennykunma.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Kenny</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Facebook className="h-4 w-4 text-blue-400" />
                <a
                  href="https://facebook.com/kennykunma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-pink-400" />
                <a
                  href="https://instagram.com/kennykunma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300 flex items-center justify-center space-x-2">
            <span>© {currentYear} Kenny Kunma. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for education and community.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
