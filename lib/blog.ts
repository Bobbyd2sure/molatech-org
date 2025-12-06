// Blog post type definitions and data
// In the future, this can be replaced with a CMS or database

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar?: string
    role?: string
  }
  publishedAt: string
  updatedAt?: string
  coverImage?: string
  category: string
  tags: string[]
  readingTime: string
  featured?: boolean
}

export interface BlogCategory {
  slug: string
  name: string
  description: string
}

// Categories
export const blogCategories: BlogCategory[] = [
  {
    slug: "technology",
    name: "Technology",
    description: "Latest trends and insights in technology",
  },
  {
    slug: "web-development",
    name: "Web Development",
    description: "Tips, tutorials, and best practices for web development",
  },
  {
    slug: "business",
    name: "Business",
    description: "Business insights and digital transformation strategies",
  },
  {
    slug: "security",
    name: "Cybersecurity",
    description: "Security best practices and threat awareness",
  },
  {
    slug: "cloud",
    name: "Cloud Computing",
    description: "Cloud solutions and infrastructure insights",
  },
]

// Sample blog posts
export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-business-needs-a-modern-website",
    title: "Why Your Business Needs a Modern Website in 2025",
    excerpt:
      "In today's digital-first world, your website is often the first impression customers have of your business. Learn why a modern, responsive website is crucial for business success.",
    content: `
# Why Your Business Needs a Modern Website in 2025

In today's digital-first world, your website is often the first impression customers have of your business. A modern website isn't just a nice-to-have—it's essential for credibility, customer acquisition, and growth.

## The Digital First Impression

Studies show that 75% of consumers judge a company's credibility based on their website design. Your website has approximately 50 milliseconds to make a good first impression. That's why professional, modern design matters.

## Key Benefits of a Modern Website

### 1. Mobile Responsiveness
With over 60% of web traffic coming from mobile devices, your website must work seamlessly on all screen sizes.

### 2. Fast Loading Times
Every second of load time delay reduces conversions by 7%. Modern websites are optimized for speed.

### 3. Search Engine Visibility
A well-structured website with proper SEO helps customers find you through Google and other search engines.

### 4. Security and Trust
HTTPS encryption and secure forms build trust with visitors and protect sensitive data.

## Conclusion

Investing in a modern website is investing in your business's future. Contact us to learn how we can help transform your online presence.
    `,
    author: {
      name: "MolaTech Team",
      role: "Web Development",
    },
    publishedAt: "2025-01-15",
    category: "business",
    tags: ["website", "business", "digital transformation", "web design"],
    readingTime: "4 min read",
    featured: true,
  },
  {
    slug: "top-5-web-development-trends-2025",
    title: "Top 5 Web Development Trends to Watch in 2025",
    excerpt:
      "Stay ahead of the curve with these emerging web development trends that are shaping the future of digital experiences.",
    content: `
# Top 5 Web Development Trends to Watch in 2025

The web development landscape continues to evolve rapidly. Here are the top trends shaping how we build for the web.

## 1. AI-Powered Development

AI tools are revolutionizing how developers write code, debug applications, and optimize performance.

## 2. Edge Computing

Moving computation closer to users reduces latency and improves performance for global audiences.

## 3. Progressive Web Apps (PWAs)

PWAs continue to bridge the gap between web and native applications, offering offline capabilities and push notifications.

## 4. Server-Side Rendering Renaissance

Frameworks like Next.js are making server-side rendering more accessible, improving SEO and initial load times.

## 5. WebAssembly Growth

WebAssembly enables high-performance applications in the browser, opening new possibilities for web-based software.

## Conclusion

Staying current with these trends ensures your web projects remain competitive and deliver exceptional user experiences.
    `,
    author: {
      name: "MolaTech Team",
      role: "Technology",
    },
    publishedAt: "2025-01-10",
    category: "web-development",
    tags: ["web development", "trends", "technology", "2025"],
    readingTime: "5 min read",
    featured: true,
  },
  {
    slug: "essential-cybersecurity-practices-small-business",
    title: "Essential Cybersecurity Practices for Small Businesses",
    excerpt:
      "Protect your business from cyber threats with these fundamental security practices that every small business should implement.",
    content: `
# Essential Cybersecurity Practices for Small Businesses

Small businesses are increasingly targeted by cybercriminals. Here's how to protect your organization.

## Why Small Businesses Are Targeted

Many small businesses lack dedicated IT security resources, making them attractive targets for attackers.

## Essential Security Measures

### 1. Strong Password Policies
Implement complex passwords and multi-factor authentication across all accounts.

### 2. Regular Software Updates
Keep all software and systems updated to patch known vulnerabilities.

### 3. Employee Training
Human error is the leading cause of breaches. Regular security awareness training is crucial.

### 4. Data Backup
Maintain regular, tested backups to recover from ransomware and data loss incidents.

### 5. Network Security
Use firewalls, VPNs for remote work, and segment your network to limit breach impact.

## Conclusion

Investing in cybersecurity is essential for business continuity. Start with these fundamentals and build from there.
    `,
    author: {
      name: "MolaTech Team",
      role: "Cybersecurity",
    },
    publishedAt: "2025-01-05",
    category: "security",
    tags: ["cybersecurity", "small business", "security", "best practices"],
    readingTime: "6 min read",
  },
]

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag))
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((cat) => cat.slug === slug)
}
