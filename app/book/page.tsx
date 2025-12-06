import type { Metadata } from "next"
import BookingCalendar from "@/components/booking-calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Video, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a free consultation with MolaTech. Discuss your project requirements, get expert advice, and explore how we can help transform your business.",
  openGraph: {
    title: "Book a Consultation | MolaTech",
    description: "Schedule a free consultation to discuss your project requirements.",
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
    icon: MapPin,
    title: "In-Person",
    description: "Meet us at our Austin office for detailed discussions",
    duration: "1 hour",
  },
]

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Book a Consultation
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Schedule a free consultation with our team. We'll discuss your project
                requirements, answer your questions, and explore how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Consultation Options</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {meetingTypes.map((type) => (
              <Card key={type.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit">
                    <type.icon className="h-6 w-6 text-purple-600" />
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

      {/* Calendar Section */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Select a Time</CardTitle>
                <CardDescription>
                  Choose a convenient time slot for your consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="min-h-[600px]">
                  <BookingCalendar className="h-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">What to Expect</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Discovery Call</h3>
                  <p className="text-muted-foreground">
                    We'll learn about your business, goals, and challenges to understand how we can help.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Solution Discussion</h3>
                  <p className="text-muted-foreground">
                    We'll explore potential solutions and approaches tailored to your needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Next Steps</h3>
                  <p className="text-muted-foreground">
                    We'll outline a clear path forward with timeline and budget estimates.
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
