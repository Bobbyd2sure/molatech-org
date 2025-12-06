"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"

interface BookingCalendarProps {
  calLink?: string
  className?: string
}

export default function BookingCalendar({
  calLink = "molatech/consultation",
  className = ""
}: BookingCalendarProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "auto",
        styles: { branding: { brandColor: "#7c3aed" } },
        hideEventTypeDetails: false,
      })
    })()
  }, [])

  return (
    <div className={className}>
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  )
}

// Inline booking button that opens a modal
export function BookingButton({
  calLink = "molatech/consultation",
  children,
  className = ""
}: {
  calLink?: string
  children: React.ReactNode
  className?: string
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "auto",
        styles: { branding: { brandColor: "#7c3aed" } },
      })
    })()
  }, [])

  return (
    <button
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  )
}
