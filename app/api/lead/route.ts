import { NextRequest, NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone, source } = body

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

    // Check for duplicate
    const { data: existing } = await supabase
      .from("leads")
      .select("id")
      .eq("phone", normalizedPhone)
      .single()

    if (!existing) {
      // Insert new lead
      const { error } = await supabase.from("leads").insert({
        phone: normalizedPhone,
        source: source || "unknown",
      })

      if (error) {
        console.error("Error saving lead:", error)
        return NextResponse.json({ error: "Failed to save lead" }, { status: 500 })
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
    const supabase = getSupabaseClient()

    if (!supabase) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    const { data: leads, error } = await supabase
      .from("leads")
      .select("*")
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
