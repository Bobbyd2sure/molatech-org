import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Lightbulb, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function ConsultancyPage() {
  const consultancyServices = [
    "Technology Strategy",
    "Digital Transformation",
    "System Architecture",
    "Security Assessment",
    "Performance Optimization",
    "Vendor Selection",
    "Project Management",
    "Risk Assessment",
    "Compliance Consulting",
    "Innovation Workshops",
  ]

  const consultancyAreas = [
    {
      icon: Lightbulb,
      title: "Technology Strategy",
      description: "Develop comprehensive technology roadmaps aligned with your business objectives.",
      services: [
        "IT strategy development",
        "Technology roadmap planning",
        "Digital transformation strategy",
        "Innovation consulting",
      ],
    },
    {
      icon: Target,
      title: "System Architecture",
      description: "Design scalable and efficient system architectures for your applications.",
      services: [
        "Application architecture design",
        "Infrastructure planning",
        "Microservices strategy",
        "API design and strategy",
      ],
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Analyze and optimize your systems for maximum efficiency and performance.",
      services: [
        "Performance audits",
        "Bottleneck identification",
        "Optimization strategies",
        "Monitoring implementation",
      ],
    },
    {
      icon: Users,
      title: "Process Improvement",
      description: "Streamline your development and operational processes for better outcomes.",
      services: [
        "Workflow optimization",
        "DevOps implementation",
        "Quality assurance processes",
        "Team productivity enhancement",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-full">
            <Users className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology Consultancy Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Expert guidance and strategic advice to help you make informed technology decisions and drive business growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/start?service=consultancy">Book Consultation</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Consultancy Areas */}
      <div id="services" className="grid md:grid-cols-2 gap-8 mb-16">
        {consultancyAreas.map((area, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <area.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{area.title}</CardTitle>
              <CardDescription>{area.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {area.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Consultancy Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Consultancy Services</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {consultancyServices.map((service) => (
            <Badge key={service} variant="secondary" className="px-4 py-2 text-sm">
              {service}
            </Badge>
          ))}
        </div>
      </div>

      {/* Consultancy Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Consultancy Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Discovery",
              description: "Understand your business challenges and technology landscape",
            },
            {
              step: "2",
              title: "Analysis",
              description: "Conduct thorough analysis and identify opportunities for improvement",
            },
            {
              step: "3",
              title: "Strategy",
              description: "Develop customized recommendations and strategic roadmap",
            },
            {
              step: "4",
              title: "Implementation",
              description: "Support you through implementation and provide ongoing guidance",
            },
          ].map((phase) => (
            <div key={phase.step} className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
              <p className="text-muted-foreground text-sm">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Our Consultancy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MolaTech Consultancy?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Industry Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Deep knowledge across multiple industries and technology domains to provide relevant insights.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Practical Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Actionable recommendations that can be implemented effectively within your organization.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Measurable Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Focus on delivering tangible business value and measurable improvements to your operations.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Consultancy Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Manufacturing Digital Transformation</CardTitle>
              <CardDescription>Complete digital transformation strategy for manufacturing company</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">30% increase in operational efficiency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">$2M cost savings in first year</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Successful cloud migration strategy</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Services Security Review</CardTitle>
              <CardDescription>Comprehensive security assessment and compliance strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Achieved regulatory compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Reduced security vulnerabilities by 80%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Implemented robust security framework</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-muted p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Technology Strategy?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Let our experts guide you towards better technology decisions and business outcomes
        </p>
        <Button asChild size="lg">
          <Link href="/start?service=consultancy">Schedule Consultation</Link>
        </Button>
      </div>
    </div>
  )
}
