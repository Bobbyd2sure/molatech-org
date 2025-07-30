import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import FeaturedProjects from "@/components/featured-projects"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  // FAQ data for home page
  const homeFaqs = [
    {
      question: "What services does MolaTech offer?",
      answer:
        "We offer a comprehensive range of technology services including web development, app development, website design, digital marketing, cloud solutions, and cybersecurity services. Each service is tailored to meet the specific needs of your business.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing options including project-based quotes, hourly rates, and retainer agreements. The cost depends on project complexity, timeline, and specific requirements. We provide detailed quotes after understanding your project needs during the initial consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. These include technical support, security updates, performance monitoring, and regular feature enhancements.",
    },
    {
      question: "How do you handle project management and communication?",
      answer:
        "We use an agile project management approach with regular check-ins and updates. Each client is assigned a dedicated project manager who serves as your main point of contact. We use collaboration tools like Slack, Trello, and regular video conferences to ensure transparent communication throughout the project.",
    },
    {
      question: "Can you work with my existing systems and technologies?",
      answer:
        "Yes, we have experience integrating with a wide range of existing systems and technologies. Our team is skilled in various platforms, frameworks, and APIs, allowing us to seamlessly connect with your current infrastructure while implementing new solutions.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Features />
      <FeaturedProjects />
      <Testimonials />
      <FAQSection faqs={homeFaqs} />
      <ContactSection />
      <CallToAction />
    </div>
  )
}
