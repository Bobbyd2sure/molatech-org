import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MolaTech - a team of passionate technologists dedicated to delivering innovative tech solutions. Discover our mission, vision, values, and company history.",
  openGraph: {
    title: "About Us | MolaTech",
    description:
      "Learn about MolaTech - delivering innovative tech solutions since our founding. Discover our mission, vision, and values.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
