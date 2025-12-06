import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "MolaTech Terms of Service - Read our terms and conditions for using our website and engaging our technology services.",
  openGraph: {
    title: "Terms of Service | MolaTech",
    description:
      "Terms and conditions for using MolaTech's website and services.",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
