import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingProvider } from "@/components/loading-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { AccessibilityTestHelper } from "@/components/accessibility-test-helper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kenny Kunma - Educational Leader",
  description: "Empowering students and building futures through education, mentorship, and community support.",
  keywords: "education, mentorship, Nigeria, student support, educational leadership",
  authors: [{ name: "Kenny Kunma" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover",
  robots: "index, follow",
  themeColor: "#10b981",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kenny Kunma",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "msapplication-TileColor": "#10b981",
    "msapplication-tap-highlight": "no",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#10b981" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.className} android-optimize ios-viewport-fix`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingProvider>
            <AccessibilityTestHelper>{children}</AccessibilityTestHelper>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
