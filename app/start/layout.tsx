import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Ready to start your project with MolaTech? Tell us about your vision and we'll help bring it to life with our expert web development, app development, and digital solutions.",
  openGraph: {
    title: "Start Your Project | MolaTech",
    description:
      "Ready to start? Tell us about your project and let's transform your ideas into digital reality.",
  },
}

export default function StartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
