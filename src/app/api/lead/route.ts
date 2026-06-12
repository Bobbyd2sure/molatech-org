import { NextRequest, NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase"
import { getSession } from "@/lib/admin-auth"

// Rate limiting: Simple in-memory store (for production, use Redis)
const leadRateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5 // 5 requests per minute

/**
 * Checks whether the given IP has exceeded the rate limit for the lead endpoint.
 * Resets the counter after the time window has elapsed.
 */
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = leadRateLimitMap.get(ip)

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    leadRateLimitMap.set(ip, { count: 1, lastReset: now })
    return false
  }

  if (record.count >= MAX_REQUESTS) {
    return true
  }

  record.count++
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown"

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, phone, source } = body

    // Validate name
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 })
    }

    // Clean and validate phone number
    const cleanPhone = phone.replace(/\s/g, "")
    if (!/^(\+234|234|0)?[789]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 })
    }

    // Normalize phone number to +234 format
    let normalizedPhone = cleanPhone
    if (normalizedPhone.startsWith("0")) {
      normalizedPhone = "+234" + normalizedPhone.slice(1)
    } else if (normalizedPhone.startsWith("234")) {
      normalizedPhone = "+" + normalizedPhone
    } else if (!normalizedPhone.startsWith("+")) {
      normalizedPhone = "+234" + normalizedPhone
    }

    const supabase = getSupabaseClient()

    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    // Check for duplicate phone
    const { data: existing } = await supabase
      .from("leads")
      .select("id")
      .eq("phone", normalizedPhone)
      .single()

    if (!existing) {
      // Insert new lead with name and created_at timestamp
      const { error } = await supabase.from("leads").insert({
        name: name.trim(),
        phone: normalizedPhone,
        source: source || "unknown",
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error("Error saving lead:", error)
        return NextResponse.json({ error: "Failed to save lead" }, { status: 500 })
      }
    } else {
      // Update existing lead with new name if provided
      const { error } = await supabase
        .from("leads")
        .update({ name: name.trim() })
        .eq("phone", normalizedPhone)

      if (error) {
        console.error("Error updating lead:", error)
      }
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully" })
  } catch (error) {
    console.error("Error saving lead:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = getSupabaseClient()

    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    const { data: leads, error } = await supabase
      .from("leads")
      .select("id, name, email, phone, source, created_at")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching leads:", error)
      return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 })
    }

    return NextResponse.json({ leads, count: leads?.length || 0 })
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
