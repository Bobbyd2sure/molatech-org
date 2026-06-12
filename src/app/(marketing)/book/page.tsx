import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Video, Phone } from "lucide-react"
import BookHero from "./_hero"

// Cal.com embed is parked until the molatech Cal.com account exists
// (cal.com/molatech/consultation currently 404s). The request form below
// emails info@molatech.org and stores the message — swap back to
// "@/components/booking-calendar" once the Cal link is live.
const ContactForm = dynamic(() => import("@/components/services/contact-form"), {
  loading: () => (
    <div className="h-[400px] flex items-center justify-center">
      <p className="text-muted-foreground">Loading form...</p>
    </div>
  ),
})

export const metadata: Metadata = {
  title: "Book a Consultation | MolaTech",
  description:
    "Schedule a free consultation with MolaTech. Discuss your security, engineering, or automation requirements and explore how a fixed-scope engagement can work for your team.",
  openGraph: {
    title: "Book a Consultation | MolaTech",
    description:
      "Schedule a free consultation to discuss your project requirements.",
  },
}

const meetingTypes = [
  {
    icon: Video,
    title: "Video Call",
    description: "30-minute video consultation via Google Meet or Zoom",
    duration: "30 min",
  },
  {
    icon: Phone,
    title: "Phone Call",
    description: "Quick phone consultation to discuss your needs",
    duration: "15 min",
  },
  {
    icon: Clock,
    title: "Deep Dive",
    description: "In-depth scoping session for complex engagements",
    duration: "1 hour",
  },
]

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      <BookHero />

      {/* Consultation Options */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-medium font-heading mb-8 text-center">
            Consultation Options
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {meetingTypes.map((type) => (
              <Card key={type.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-blue-50 rounded-full w-fit">
                    <type.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{type.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Request Your Slot</CardTitle>
                <CardDescription>
                  Tell us what you want to cover and when suits you — we confirm within one business day.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium font-heading mb-6 text-center">
              What to Expect
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-1">Discovery</h3>
                  <p className="text-muted-foreground">
                    We&apos;ll learn about your business, goals, and challenges to understand
                    how we can help and what a fixed-scope engagement would look like.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-1">Solution Discussion</h3>
                  <p className="text-muted-foreground">
                    We&apos;ll explore potential approaches and deliverables — whether that&apos;s
                    a security assessment, a compliance programme, an engineering build,
                    or an automation workflow.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-1">Scoped Proposal</h3>
                  <p className="text-muted-foreground">
                    We&apos;ll follow up with a written scope that names every deliverable,
                    the timeline, and a fixed price — so you know exactly what you&apos;re
                    getting before we start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
