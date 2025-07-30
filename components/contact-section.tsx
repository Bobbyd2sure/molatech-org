import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or ready to start your project? Reach out to our team.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="grid gap-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-muted-foreground">info@molatech.com</p>
                  <p className="text-muted-foreground">support@molatech.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                  <p className="text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Visit Us</h3>
                  <p className="text-muted-foreground">123 Tech Street</p>
                  <p className="text-muted-foreground">Innovation City, TC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">Monday-Friday: 9am-6pm</p>
                  <p className="text-muted-foreground">Saturday-Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              {/* This would be a Google Map in a real implementation */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-muted-foreground">Map Location</p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
