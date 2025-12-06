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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
