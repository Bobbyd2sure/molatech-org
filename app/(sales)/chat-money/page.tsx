"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ChatMoneyLeadPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate phone number (Nigerian format)
    const cleanPhone = phone.replace(/\s/g, "")
    if (!/^(\+234|234|0)?[789]\d{9}$/.test(cleanPhone)) {
      setError("Please enter a valid Nigerian phone number")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanPhone, source: "chat-money-course" }),
      })

      if (response.ok) {
        // Redirect to sales page on success
        window.location.href = "/chat-money-course"
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-900">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #0d0015 50%, #1a0a2e 100%)",
      }}
      suppressHydrationWarning
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-gradient-to-b from-purple-900/40 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full">
              FREE ACCESS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-4 leading-tight">
            Discover How People Are Making{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              N200K - N500K Monthly
            </span>{" "}
            Just By Chatting Online
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 text-center mb-8">
            Enter your WhatsApp number to get instant access to our exclusive training
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08012345678"
                className="w-full px-4 py-4 bg-black/50 border border-purple-500/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-lg"
                required
              />
              {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                "GET INSTANT ACCESS"
              )}
            </motion.button>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-purple-500/20">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Your information is 100% secure</span>
            </div>
            <p className="text-center text-gray-500 text-xs mt-3">
              By entering your number, you agree to receive WhatsApp messages about the training
            </p>
          </div>

          {/* Social proof */}
          <div className="mt-6 text-center">
            <p className="text-purple-300 text-sm font-medium">
              Join 500+ Nigerians already learning
            </p>
            <div className="flex justify-center mt-2 -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-purple-900 flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-purple-700 border-2 border-purple-900 flex items-center justify-center text-white text-xs">
                +
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-gray-500 text-sm mt-6">
          No experience needed. Works from anywhere in Nigeria.
        </p>
      </motion.div>
    </div>
  )
}
