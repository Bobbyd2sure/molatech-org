export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MolaTech",
    url: "https://www.molatech.org",
    logo: "https://www.molatech.org/logo.png",
    description:
      "Professional web development, app development, website design, digital marketing, cloud solutions, cybersecurity, and automation services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "701 Tillery Street Unit 12 2179",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78702",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@molatech.org",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.facebook.com/molatech",
      "https://www.twitter.com/molatech",
      "https://www.linkedin.com/company/molatech",
      "https://www.instagram.com/molatech",
    ],
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10-50",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MolaTech",
    url: "https://www.molatech.org",
    description:
      "Innovative tech solutions for businesses of all sizes. Transforming ideas into digital reality.",
    publisher: {
      "@type": "Organization",
      name: "MolaTech",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.molatech.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MolaTech",
    image: "https://www.molatech.org/og-image.png",
    url: "https://www.molatech.org",
    telephone: "(123) 456-7890",
    email: "info@molatech.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "701 Tillery Street Unit 12 2179",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78702",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2635,
      longitude: -97.7144,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Technology Services",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "MolaTech",
      url: "https://www.molatech.org",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: "Technology Services",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
