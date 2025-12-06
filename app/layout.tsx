import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FloatingNav } from "@/components/ui/aceternity/floating-navbar"
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/components/structured-data"
import { Toaster } from "@/components/ui/sonner"
import { GoogleAnalytics } from "@/components/analytics"
import BackToTop from "@/components/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.molatech.org"),
  title: {
    default: "MolaTech - Innovative Tech Solutions",
    template: "%s | MolaTech",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MolaTech",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  description:
    "Professional web development, app development, website design, digital marketing, cloud solutions, cybersecurity, and automation services. Transform your ideas into digital reality.",
  keywords: [
    "web development",
    "app development",
    "website design",
    "digital marketing",
    "cloud solutions",
    "cybersecurity",
    "automation",
    "workflow automation",
    "n8n",
    "tech services",
    "Austin",
    "Texas",
    "MolaTech",
  ],
  authors: [{ name: "MolaTech", url: "https://www.molatech.org" }],
  creator: "MolaTech",
  publisher: "MolaTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.molatech.org",
    siteName: "MolaTech",
    title: "MolaTech - Innovative Tech Solutions",
    description:
      "Professional web development, app development, website design, digital marketing, cloud solutions, cybersecurity, and automation services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MolaTech - Innovative Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MolaTech - Innovative Tech Solutions",
    description:
      "Professional web development, app development, website design, digital marketing, cloud solutions, cybersecurity, and automation services.",
    images: ["/og-image.png"],
    creator: "@molatech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Start Now",
      link: "/start",
      isButton: true,
    },
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#7c3aed" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e1b4b" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" href="/molatech-logo.png" />
        <link rel="apple-touch-icon" href="/molatech-logo.png" />
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <FloatingNav navItems={navItems} />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </div>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
