import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s | MolaTech Admin",
  },
  robots: {
    index: false,
    follow: false,
  },
}

// Force dynamic rendering for all admin pages
export const dynamic = 'force-dynamic'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      {children}
    </div>
  )
}
