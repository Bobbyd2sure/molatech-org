import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CompanyHistory() {
  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description:
        "MolaTech was founded with a mission to provide innovative tech solutions for businesses of all sizes.",
    },
    {
      year: "2023",
      title: "First Major Client",
      description:
        "Secured our first enterprise client and delivered a successful e-commerce platform that increased their sales by 40%.",
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew our team to 15 talented professionals and established our core service offerings.",
    },
    {
      year: "2024",
      title: "Service Portfolio Launch",
      description:
        "Expanded our services to include comprehensive web development, mobile app development, and cybersecurity solutions.",
    },
    {
      year: "2024",
      title: "Cloud Solutions Division",
      description:
        "Established our dedicated cloud solutions division to help businesses migrate and optimize their cloud infrastructure.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received recognition for our innovative solutions and rapid growth in the tech industry.",
    },
    {
      year: "2024",
      title: "Continued Innovation",
      description:
        "Continuing our mission of delivering exceptional tech solutions with a focus on innovation and client success.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From startup to industry innovator - the story of MolaTech
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex justify-end">
                  <div className={`w-full md:max-w-md ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <Badge className="mb-2">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary mt-6"></div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
