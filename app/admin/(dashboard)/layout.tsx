import { redirect } from "next/navigation"
import { getSession } from "@/lib/admin-auth"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen">
      <AdminSidebar user={session.user} />
      <main className="md:ml-64 p-4 md:p-8 pt-16 md:pt-8">
        {children}
      </main>
    </div>
  )
}
