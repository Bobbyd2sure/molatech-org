"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Volume2, VolumeX, EyeOff, CheckCircle, AlertCircle, Play, Pause } from "lucide-react"

export function NVDATestHelper() {
  const [isVisible, setIsVisible] = useState(false)
  const [testResults, setTestResults] = useState<Record<string, boolean>>({})
  const [currentTest, setCurrentTest] = useState<string | null>(null)
  const [announcements, setAnnouncements] = useState<string[]>([])
  const announcementRef = useRef<HTMLDivElement>(null)

  // NVDA-specific announcement function
  const announceToNVDA = (message: string, priority: "polite" | "assertive" = "polite") => {
    setAnnouncements((prev) => [...prev.slice(-4), message]) // Keep last 5 announcements

    // Create temporary live region for immediate announcement
    const liveRegion = document.createElement("div")
    liveRegion.setAttribute("aria-live", priority)
    liveRegion.setAttribute("aria-atomic", "true")
    liveRegion.className = "sr-only"
    liveRegion.textContent = message

    document.body.appendChild(liveRegion)

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(liveRegion)
    }, 1000)
  }

  const runTest = (testName: string, testFunction: () => boolean) => {
    setCurrentTest(testName)
    announceToNVDA(`Running test: ${testName}`)

    setTimeout(() => {
      const result = testFunction()
      setTestResults((prev) => ({ ...prev, [testName]: result }))
      announceToNVDA(`Test ${testName} ${result ? "passed" : "failed"}`)
      setCurrentTest(null)
    }, 1000)
  }

  const nvdaTests = {
    "Heading Structure": () => {
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
      const h1Count = document.querySelectorAll("h1").length
      return headings.length > 0 && h1Count === 1
    },

    "Navigation Landmarks": () => {
      const landmarks = document.querySelectorAll(
        '[role="main"], [role="banner"], [role="navigation"], [role="region"], main, nav, header',
      )
      return landmarks.length >= 3
    },

    "ARIA Live Regions": () => {
      const liveRegions = document.querySelectorAll("[aria-live]")
      return liveRegions.length > 0
    },

    "Button Labels": () => {
      const buttons = document.querySelectorAll('button, [role="button"]')
      return Array.from(buttons).every(
        (button) =>
          button.textContent?.trim() || button.getAttribute("aria-label") || button.getAttribute("aria-labelledby"),
      )
    },

    "Image Alt Text": () => {
      const images = document.querySelectorAll("img")
      return Array.from(images).every((img) => img.getAttribute("alt") !== null)
    },

    "Focus Management": () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      return focusableElements.length > 0
    },

    "Skip Links": () => {
      const skipLinks = document.querySelectorAll('a[href^="#"]')
      return skipLinks.length > 0
    },

    "ARIA Descriptions": () => {
      const describedElements = document.querySelectorAll("[aria-describedby]")
      return Array.from(describedElements).every((element) => {
        const describedBy = element.getAttribute("aria-describedby")
        return describedBy && document.getElementById(describedBy)
      })
    },
  }

  const runAllTests = () => {
    announceToNVDA("Starting NVDA compatibility test suite", "assertive")
    Object.entries(nvdaTests).forEach(([testName, testFunction], index) => {
      setTimeout(() => {
        runTest(testName, testFunction)
      }, index * 1500)
    })
  }

  useEffect(() => {
    // Announce when component loads
    announceToNVDA("NVDA Test Helper loaded. Press T to toggle visibility, R to run tests.")

    // Keyboard shortcuts for NVDA users
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case "t":
            e.preventDefault()
            setIsVisible((prev) => !prev)
            announceToNVDA(`Test helper ${!isVisible ? "shown" : "hidden"}`)
            break
          case "r":
            e.preventDefault()
            runAllTests()
            break
          case "c":
            e.preventDefault()
            setTestResults({})
            setAnnouncements([])
            announceToNVDA("Test results cleared")
            break
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isVisible])

  if (!isVisible) {
    return (
      <div className="sr-only" role="region" aria-label="NVDA Test Helper">
        <p>NVDA Test Helper available. Press Alt+T to show, Alt+R to run tests.</p>
      </div>
    )
  }

  return (
    <div
      className="fixed top-4 left-4 max-w-md z-50 bg-white border-2 border-blue-600 rounded-lg shadow-xl"
      role="dialog"
      aria-labelledby="nvda-test-title"
      aria-describedby="nvda-test-description"
    >
      <Card>
        <CardHeader className="pb-3">
          <CardTitle id="nvda-test-title" className="flex items-center gap-2 text-lg">
            <Volume2 className="h-5 w-5" aria-hidden="true" />
            NVDA Test Helper
          </CardTitle>
          <p id="nvda-test-description" className="text-sm text-gray-600">
            Testing screen reader compatibility and accessibility features
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Keyboard Shortcuts */}
          <div role="region" aria-labelledby="shortcuts-title">
            <h3 id="shortcuts-title" className="font-semibold text-sm mb-2">
              Keyboard Shortcuts
            </h3>
            <div className="text-xs space-y-1">
              <div>
                <kbd className="bg-gray-100 px-1 rounded">Alt+T</kbd> Toggle visibility
              </div>
              <div>
                <kbd className="bg-gray-100 px-1 rounded">Alt+R</kbd> Run all tests
              </div>
              <div>
                <kbd className="bg-gray-100 px-1 rounded">Alt+C</kbd> Clear results
              </div>
            </div>
          </div>

          <Separator />

          {/* Test Controls */}
          <div role="region" aria-labelledby="controls-title">
            <h3 id="controls-title" className="font-semibold text-sm mb-2">
              Test Controls
            </h3>
            <div className="flex gap-2">
              <Button size="sm" onClick={runAllTests} aria-describedby="run-tests-desc">
                <Play className="h-4 w-4 mr-1" aria-hidden="true" />
                Run Tests
              </Button>
              <span id="run-tests-desc" className="sr-only">
                Run all NVDA compatibility tests
              </span>

              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setTestResults({})
                  setAnnouncements([])
                  announceToNVDA("Test results cleared")
                }}
                aria-describedby="clear-tests-desc"
              >
                <VolumeX className="h-4 w-4 mr-1" aria-hidden="true" />
                Clear
              </Button>
              <span id="clear-tests-desc" className="sr-only">
                Clear all test results and announcements
              </span>
            </div>
          </div>

          <Separator />

          {/* Test Results */}
          <div role="region" aria-labelledby="results-title" aria-live="polite">
            <h3 id="results-title" className="font-semibold text-sm mb-2">
              Test Results
            </h3>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {Object.entries(nvdaTests).map(([testName]) => {
                const result = testResults[testName]
                const isRunning = currentTest === testName

                return (
                  <div key={testName} className="flex items-center gap-2 text-xs" role="listitem">
                    {isRunning ? (
                      <Pause className="h-3 w-3 text-blue-500" aria-label="Running" />
                    ) : result === true ? (
                      <CheckCircle className="h-3 w-3 text-green-500" aria-label="Passed" />
                    ) : result === false ? (
                      <AlertCircle className="h-3 w-3 text-red-500" aria-label="Failed" />
                    ) : (
                      <div className="h-3 w-3 border border-gray-300 rounded" aria-label="Not tested" />
                    )}
                    <span>{testName}</span>
                    {result !== undefined && (
                      <Badge
                        variant={result ? "default" : "destructive"}
                        className="text-xs"
                        aria-label={`Status: ${result ? "Passed" : "Failed"}`}
                      >
                        {result ? "Pass" : "Fail"}
                      </Badge>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <Separator />

          {/* Live Announcements */}
          <div role="region" aria-labelledby="announcements-title">
            <h3 id="announcements-title" className="font-semibold text-sm mb-2">
              Recent Announcements
            </h3>
            <div
              className="text-xs space-y-1 max-h-24 overflow-y-auto bg-gray-50 p-2 rounded"
              role="log"
              aria-live="polite"
              aria-atomic="false"
              ref={announcementRef}
            >
              {announcements.length === 0 ? (
                <p className="text-gray-500 italic">No announcements yet</p>
              ) : (
                announcements.map((announcement, index) => (
                  <div key={index} className="border-b border-gray-200 pb-1 last:border-b-0">
                    {announcement}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* NVDA-Specific Instructions */}
          <div role="region" aria-labelledby="instructions-title">
            <h3 id="instructions-title" className="font-semibold text-sm mb-2">
              NVDA Testing Instructions
            </h3>
            <div className="text-xs space-y-1 bg-blue-50 p-2 rounded">
              <p>
                <strong>Navigation:</strong> Use H to jump between headings
              </p>
              <p>
                <strong>Landmarks:</strong> Use D to navigate by landmarks
              </p>
              <p>
                <strong>Buttons:</strong> Use B to jump between buttons
              </p>
              <p>
                <strong>Links:</strong> Use K to navigate links
              </p>
              <p>
                <strong>Lists:</strong> Use L to find lists
              </p>
              <p>
                <strong>Graphics:</strong> Use G to navigate images
              </p>
            </div>
          </div>

          {/* Close Button */}
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setIsVisible(false)
              announceToNVDA("NVDA Test Helper hidden")
            }}
            className="w-full"
            aria-describedby="close-helper-desc"
          >
            <EyeOff className="h-4 w-4 mr-1" aria-hidden="true" />
            Hide Helper
          </Button>
          <span id="close-helper-desc" className="sr-only">
            Hide the NVDA test helper dialog
          </span>
        </CardContent>
      </Card>

      {/* Hidden live region for announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
        {announcements[announcements.length - 1]}
      </div>
    </div>
  )
}
