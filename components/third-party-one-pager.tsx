"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle2, Clock, DollarSign } from "lucide-react"

export default function ThirdPartyOnePager() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 space-y-6" id="one-pager-content">
      {/* Header */}
      <div className="text-center border-b-2 border-purple-600 pb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Shield className="h-12 w-12 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Third-Party Risk Assessment</h1>
        </div>
        <p className="text-xl text-gray-600">Comprehensive Vendor Security Management Services</p>
        <p className="text-sm text-gray-500 mt-2">MolaTech | Protecting Your Business from Vendor Vulnerabilities</p>
      </div>

      {/* Services Overview */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-purple-600" />
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Initial Assessment</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Security posture evaluation</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Compliance mapping</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Data flow analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Certificate verification</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Risk Scoring</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Quantified risk scores</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Executive dashboard</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Remediation roadmap</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Board-ready reports</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Ongoing Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Continuous tracking</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Quarterly reassessments</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Breach alerts</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Compliance tracking</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Deliverables */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-purple-600" />
          Key Deliverables
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Vendor Risk Scorecard (per vendor)</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Security Controls Assessment</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Compliance Gap Analysis</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Remediation Action Plan</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Executive Summary Report</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Risk Register Documentation</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Contract Review Recommendations</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Monitoring Portal Access</span>
          </div>
        </div>
      </div>

      {/* Timelines */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="h-6 w-6 text-purple-600" />
          Project Timelines
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
              <div className="font-semibold text-gray-900">Starter Assessment</div>
              <div className="text-sm text-gray-600">1-5 vendors</div>
            </div>
            <Badge className="bg-purple-100 text-purple-800 text-base">2-3 weeks</Badge>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
              <div className="font-semibold text-gray-900">Professional Program</div>
              <div className="text-sm text-gray-600">10-25 vendors</div>
            </div>
            <Badge className="bg-purple-100 text-purple-800 text-base">4-6 weeks setup</Badge>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
              <div className="font-semibold text-gray-900">Enterprise Suite</div>
              <div className="text-sm text-gray-600">25+ vendors</div>
            </div>
            <Badge className="bg-purple-100 text-purple-800 text-base">6-8 weeks setup</Badge>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-purple-600" />
          Investment
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-2 border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Starter</CardTitle>
              <div className="text-3xl font-bold text-purple-600 mt-2">$2,500</div>
              <p className="text-sm text-gray-600">per vendor</p>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="space-y-1">
                <div>• 1-5 vendor assessments</div>
                <div>• Risk scorecard per vendor</div>
                <div>• Executive summary</div>
                <div>• Remediation plan</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-600">
            <CardHeader className="pb-3">
              <Badge className="mb-2 bg-purple-600">Most Popular</Badge>
              <CardTitle className="text-lg">Professional</CardTitle>
              <div className="text-3xl font-bold text-purple-600 mt-2">$15,000</div>
              <p className="text-sm text-gray-600">per month</p>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="space-y-1">
                <div>• 10-25 vendor assessments</div>
                <div>• Quarterly reassessments</div>
                <div>• Continuous monitoring</div>
                <div>• Dedicated analyst</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Enterprise</CardTitle>
              <div className="text-3xl font-bold text-purple-600 mt-2">Custom</div>
              <p className="text-sm text-gray-600">contact for quote</p>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="space-y-1">
                <div>• 25+ vendor assessments</div>
                <div>• Automated monitoring</div>
                <div>• Custom integration</div>
                <div>• 24/7 support</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Why MolaTech?</h2>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Proven Framework:</strong> NIST, ISO 27001, and SOC 2 aligned methodology
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Expert Team:</strong> Certified security professionals (CISSP, CISM, CISA)
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Fast Results:</strong> Initial assessments completed in 2-3 weeks
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Continuous Value:</strong> Ongoing monitoring keeps you protected
            </span>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center border-t-2 border-purple-600 pt-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Protect Your Organization?</h2>
        <p className="text-gray-600 mb-4">Book your free vendor risk diagnostic today</p>
        <div className="space-y-2 text-sm text-gray-700">
          <div>
            <strong>Email:</strong> info@molatech.org
          </div>
          <div>
            <strong>Phone:</strong> (555) 123-4567
          </div>
          <div>
            <strong>Website:</strong> www.molatech.org/third-party-risk
          </div>
        </div>
      </div>
    </div>
  )
}
