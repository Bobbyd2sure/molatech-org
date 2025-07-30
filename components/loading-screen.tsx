"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/components/loading-provider"

export function LoadingScreen() {
  const { isLoading } = useLoading()
  const [progress, setProgress] = useState(0)
  const [showScreen, setShowScreen] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isLoading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 15
          return newProgress > 100 ? 100 : newProgress
        })
      }, 200)
    } else {
      setProgress(100)
      const timeout = setTimeout(() => {
        setShowScreen(false)
      }, 500)
      return () => clearTimeout(timeout)
    }

    return () => clearInterval(interval)
  }, [isLoading])

  if (!showScreen) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center transition-opacity duration-500 ${
        !isLoading && progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-24 h-24 mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-full shadow-2xl">
          <div className="text-white text-3xl font-bold">KK</div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-8">Kenny Kunma</h2>

      <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-emerald-400 text-sm">{Math.round(progress)}%</div>
    </div>
  )
}
