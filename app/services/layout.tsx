import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore MolaTech's comprehensive tech services including web development, app development, website design, digital marketing, cloud solutions, cybersecurity, training, consultancy, and automation.",
  openGraph: {
    title: "Our Services | MolaTech",
    description:
      "Comprehensive tech services: web development, app development, digital marketing, cloud solutions, cybersecurity, automation and more.",
  },
}

// Force dynamic rendering for service pages
export const dynamic = 'force-dynamic'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
