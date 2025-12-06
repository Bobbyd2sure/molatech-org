import { NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient, isSupabaseConfigured } from "@/lib/supabase"

// Rate limiting: Simple in-memory store (for production, use Redis)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // 5 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return false
  }

  if (record.count >= MAX_REQUESTS) {
    return true
  }

  record.count++
  return false
}

// Basic email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize input to prevent XSS
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") ||
               request.headers.get("x-real-ip") ||
               "unknown"

    const userAgent = request.headers.get("user-agent") || "unknown"

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be less than 5000 characters." },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      first_name: sanitize(firstName),
      last_name: sanitize(lastName),
      email: sanitize(email),
      phone: phone ? sanitize(phone) : null,
      subject: subject ? sanitize(subject) : "General Inquiry",
      message: sanitize(message),
      ip_address: ip,
      user_agent: userAgent,
      status: "new" as const,
    }

    // Save to Supabase if configured
    if (isSupabaseConfigured()) {
      const supabase = createServerSupabaseClient()

      if (supabase) {
        const { error: dbError } = await supabase
          .from("contact_submissions")
          .insert(sanitizedData)

        if (dbError) {
          console.error("Supabase error:", dbError)
          // Continue anyway - we don't want to fail the user's submission
          // just because of a database error
        } else {
          console.log("Contact submission saved to Supabase")
        }
      }
    } else {
      // Log submission when Supabase is not configured
      console.log("Contact form submission (Supabase not configured):", {
        ...sanitizedData,
        timestamp: new Date().toISOString(),
      })
    }

    // Optional: Send email notification using Resend
    /*
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'MolaTech Contact <contact@molatech.org>',
        to: ['info@molatech.org'],
        subject: `[Contact Form] ${sanitizedData.subject} - ${sanitizedData.first_name} ${sanitizedData.last_name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${sanitizedData.first_name} ${sanitizedData.last_name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Phone:</strong> ${sanitizedData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${sanitizedData.message.replace(/\n/g, '<br />')}</p>
        `,
      })
    }
    */

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you soon."
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  )
}
