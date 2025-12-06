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
                  <p className="text-muted-foreground">info@molatech.org</p>
                  <p className="text-muted-foreground">support@molatech.org</p>
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
                  <p className="text-muted-foreground">701 Tillery Street Unit 12 2179</p>
                  <p className="text-muted-foreground">Austin, TX 78702</p>
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

            <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.5088392850944!2d-97.71435492429882!3d30.26349597479969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a6e6c9a3a7%3A0x5c5e0e7c3e7c3e7c!2s701%20Tillery%20St%2C%20Austin%2C%20TX%2078702%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MolaTech Office Location"
                className="w-full h-full"
              />
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
