import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MolaTech Privacy Policy - Learn how we collect, use, and protect your personal information when you use our website and services.",
  openGraph: {
    title: "Privacy Policy | MolaTech",
    description:
      "Learn how MolaTech collects, uses, and protects your personal information.",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
