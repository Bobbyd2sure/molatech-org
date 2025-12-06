import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore MolaTech's portfolio of successful projects and case studies. See how we've helped businesses transform with innovative web, mobile, and cloud solutions.",
  openGraph: {
    title: "Projects & Case Studies | MolaTech",
    description:
      "Explore our portfolio of successful projects including e-commerce platforms, healthcare systems, mobile apps, and more.",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
