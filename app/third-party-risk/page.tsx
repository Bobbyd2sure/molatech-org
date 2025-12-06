"use client"

import { useState } from "react"
import Image from "next/image"
import { Shield, AlertTriangle, CheckCircle2, Download, Calendar, TrendingUp, Lock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ThirdPartyRiskLanding() {
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/molatech-logo.png"
            alt="MolaTech Logo"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        </div>
        <Badge className="mb-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
          <AlertTriangle className="w-3 h-3 mr-1" />
          Critical Risk Assessment
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Third-Party Risk Assessment
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Protect your organization from vendor vulnerabilities, data breaches, and compliance failures with our
          comprehensive third-party risk management solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            <Calendar className="mr-2 h-5 w-5" />
            Book Free Vendor Diagnostic
          </Button>
          <Button size="lg" variant="outline">
            <Download className="mr-2 h-5 w-5" />
            Download One-Pager
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Hidden Dangers of Third-Party Vendors
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Your vendors have access to your systems, data, and customers. Are you confident they're secure?
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 dark:border-red-900">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <CardTitle className="text-red-600 dark:text-red-400">60% of Data Breaches</CardTitle>
                    <CardDescription>Originate from third-party vendors with inadequate security controls</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-orange-200 dark:border-orange-900">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <CardTitle className="text-orange-600 dark:text-orange-400">$4.35M Average Cost</CardTitle>
                    <CardDescription>Per data breach in 2023, with vendor breaches costing 15% more</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-yellow-200 dark:border-yellow-900">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <CardTitle className="text-yellow-600 dark:text-yellow-400">Compliance Violations</CardTitle>
                    <CardDescription>
                      GDPR, HIPAA, SOC 2, and ISO 27001 require documented vendor risk assessments
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-red-200 dark:border-red-900">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <CardTitle className="text-red-600 dark:text-red-400">Reputation Damage</CardTitle>
                    <CardDescription>
                      Customer trust erodes when your vendor's security failures expose their data
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-900 dark:text-red-100">The Reality:</h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Most organizations have 100+ third-party vendors with varying access levels</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>54% of companies experienced a vendor-related breach in the past 2 years</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Only 35% conduct regular third-party security assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Manual assessments take 40+ hours per vendor and quickly become outdated</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="container px-4 py-16 mx-auto bg-muted/30 -mx-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We Deliver</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive third-party risk assessment and ongoing monitoring to protect your organization
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-green-200 dark:border-green-900">
              <CardHeader>
                <Shield className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Initial Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Security posture evaluation (100+ controls)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Compliance framework mapping</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Data access and flow analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Penetration testing results review</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Certificate verification (SOC 2, ISO 27001)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-900">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Risk Scoring & Reporting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Quantified risk scores (0-100 scale)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Executive dashboard with trends</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Prioritized remediation roadmap</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Board-ready presentation materials</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Detailed technical findings report</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-900">
              <CardHeader>
                <Lock className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Ongoing Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Continuous security posture tracking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Quarterly reassessments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Breach and vulnerability alerts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Compliance deadline reminders</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Annual audit support</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 border-purple-200 dark:border-purple-900">
            <CardHeader>
              <CardTitle className="text-center">Complete Deliverables Package</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Vendor Risk Scorecard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Security Controls Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Compliance Gap Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Remediation Action Plan</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Executive Summary Report</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Risk Register Documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Contract Review Recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Ongoing Monitoring Portal Access</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sample Scorecard Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Sample Vendor Risk Scorecard</h2>
          <p className="text-center text-muted-foreground mb-12">
            See how we assess and score your third-party vendors across critical security domains
          </p>

          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Acme SaaS Provider</CardTitle>
                  <CardDescription className="text-base">CRM & Marketing Automation Platform</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Overall Risk Score</div>
                  <div className="text-4xl font-bold text-yellow-600">67/100</div>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                    Medium Risk
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Security Controls */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">Security Controls</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">82/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Strong encryption, MFA enabled, regular security training
                  </p>
                </div>

                {/* Compliance */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">Compliance & Certifications</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">90/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">SOC 2 Type II, ISO 27001, GDPR compliant</p>
                </div>

                {/* Data Protection */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">Data Protection</span>
                    </div>
                    <span className="text-lg font-bold text-yellow-600">65/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-yellow-600 h-3 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    ⚠️ Data retention policy unclear, backup encryption needs verification
                  </p>
                </div>

                {/* Incident Response */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">Incident Response</span>
                    </div>
                    <span className="text-lg font-bold text-red-600">45/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-red-600 h-3 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    🚨 No documented incident response plan, breach notification SLA undefined
                  </p>
                </div>

                {/* Business Continuity */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">Business Continuity</span>
                    </div>
                    <span className="text-lg font-bold text-yellow-600">70/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-yellow-600 h-3 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Disaster recovery plan exists, but RTO/RPO targets not aligned with requirements
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Critical Action Items:</h4>
                <ul className="space-y-1 text-sm text-red-800 dark:text-red-200">
                  <li>1. Request documented incident response plan within 30 days</li>
                  <li>2. Clarify data retention and deletion policies in contract addendum</li>
                  <li>3. Require quarterly security posture updates</li>
                  <li>4. Add breach notification clause (24-hour SLA)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Download Full Sample Scorecard
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container px-4 py-16 mx-auto bg-muted/30 -mx-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Transparent Pricing</h2>
          <p className="text-center text-muted-foreground mb-12">
            Choose the package that fits your vendor risk management needs
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <Card
              className={`border-2 transition-all cursor-pointer ${
                selectedPricing === "starter"
                  ? "border-purple-500 shadow-lg scale-105"
                  : "border-muted hover:border-purple-300"
              }`}
              onClick={() => setSelectedPricing("starter")}
            >
              <CardHeader>
                <CardTitle>Starter Assessment</CardTitle>
                <CardDescription>Perfect for evaluating critical vendors</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$2,500</span>
                  <span className="text-muted-foreground">/vendor</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">1-5 vendor assessments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Risk scorecard per vendor</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Executive summary report</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Remediation recommendations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">2-3 week delivery</span>
                </div>
                <div className="text-sm text-muted-foreground pt-2">
                  <strong>Timeline:</strong> 2-3 weeks per vendor
                </div>
              </CardContent>
            </Card>

            {/* Professional */}
            <Card
              className={`border-2 transition-all cursor-pointer relative ${
                selectedPricing === "professional"
                  ? "border-purple-500 shadow-lg scale-105"
                  : "border-purple-300 hover:border-purple-400"
              }`}
              onClick={() => setSelectedPricing("professional")}
            >
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle>Professional Program</CardTitle>
                <CardDescription>Comprehensive vendor risk management</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$15,000</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">10-25 vendor assessments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Quarterly reassessments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Continuous monitoring dashboard</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Breach and vulnerability alerts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Dedicated security analyst</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Monthly executive reporting</span>
                </div>
                <div className="text-sm text-muted-foreground pt-2">
                  <strong>Timeline:</strong> 4-6 weeks initial setup
                </div>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card
              className={`border-2 transition-all cursor-pointer ${
                selectedPricing === "enterprise"
                  ? "border-purple-500 shadow-lg scale-105"
                  : "border-muted hover:border-purple-300"
              }`}
              onClick={() => setSelectedPricing("enterprise")}
            >
              <CardHeader>
                <CardTitle>Enterprise Suite</CardTitle>
                <CardDescription>Full vendor ecosystem management</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-muted-foreground block text-sm">Contact for quote</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">25+ vendor assessments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Automated continuous monitoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Custom risk framework integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">API integration with GRC tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Dedicated account team</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">24/7 priority support</span>
                </div>
                <div className="text-sm text-muted-foreground pt-2">
                  <strong>Timeline:</strong> 6-8 weeks initial setup
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Case Study: Healthcare SaaS Company</h2>
          <p className="text-center text-muted-foreground mb-12">
            How we helped a healthcare technology company avoid a $2M+ compliance violation
          </p>

          <Card className="border-2 border-purple-200 dark:border-purple-900">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-purple-600" />
                <div>
                  <CardTitle className="text-2xl">HealthTech Solutions Inc.</CardTitle>
                  <CardDescription className="text-base">
                    Series B Healthcare SaaS Platform | 150 employees | $20M ARR
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Challenge */}
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  The Challenge
                </h3>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-900">
                  <ul className="space-y-2 text-sm">
                    <li>
                      • Processing PHI (Protected Health Information) through 47 third-party vendors including payment
                      processors, analytics tools, and cloud infrastructure
                    </li>
                    <li>
                      • Preparing for HIPAA audit and SOC 2 Type II certification - auditors flagged inadequate vendor
                      risk documentation
                    </li>
                    <li>
                      • Manual vendor assessments taking 60+ hours each with inconsistent methodology across different
                      teams
                    </li>
                    <li>
                      • Discovered 12 vendors had subprocessors with unknown security postures, creating hidden
                      compliance gaps
                    </li>
                    <li>• Facing potential $2.3M penalty for HIPAA non-compliance if gaps not remediated within 90 days</li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Our Solution
                </h3>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-900 space-y-3">
                  <div>
                    <strong className="text-sm font-semibold">Week 1-2: Rapid Assessment</strong>
                    <ul className="text-sm mt-1 space-y-1 ml-4">
                      <li>• Conducted emergency assessment of all 47 vendors using our standardized HIPAA framework</li>
                      <li>• Identified 8 high-risk vendors requiring immediate attention</li>
                      <li>• Created prioritized remediation roadmap based on data sensitivity and access levels</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-sm font-semibold">Week 3-6: Remediation Sprint</strong>
                    <ul className="text-sm mt-1 space-y-1 ml-4">
                      <li>
                        • Worked with legal team to add BAAs (Business Associate Agreements) for 5 vendors missing
                        proper contracts
                      </li>
                      <li>• Replaced 2 non-compliant vendors with HIPAA-certified alternatives</li>
                      <li>• Implemented continuous monitoring for all critical vendors</li>
                      <li>• Created comprehensive documentation package for auditors</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-sm font-semibold">Ongoing: Continuous Program</strong>
                    <ul className="text-sm mt-1 space-y-1 ml-4">
                      <li>• Quarterly reassessments with automated certificate expiration tracking</li>
                      <li>• Real-time breach monitoring and vendor security posture changes</li>
                      <li>• New vendor onboarding process with security review before contract signature</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Results Achieved
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-blue-600 mb-1">$2.3M</div>
                      <div className="text-sm text-blue-900 dark:text-blue-100">
                        Compliance penalty avoided by meeting audit requirements
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                      <div className="text-sm text-green-900 dark:text-green-100">
                        Of vendors now documented with compliant contracts and certifications
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-purple-600 mb-1">85%</div>
                      <div className="text-sm text-purple-900 dark:text-purple-100">
                        Reduction in time spent on vendor assessments (60hrs → 9hrs per vendor)
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-orange-600 mb-1">42 Days</div>
                      <div className="text-sm text-orange-900 dark:text-orange-100">
                        Passed HIPAA audit and achieved SOC 2 Type II certification ahead of schedule
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Client Quote */}
              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-purple-600">
                <p className="text-lg italic mb-3">
                  "MolaTech's vendor risk assessment program saved us from a catastrophic compliance failure. Their
                  systematic approach not only got us audit-ready in 6 weeks, but gave us an ongoing program that
                  scales with our vendor ecosystem. The ROI was immediate and continues to compound."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
                    JS
                  </div>
                  <div>
                    <div className="font-semibold">Jennifer Stevens</div>
                    <div className="text-sm text-muted-foreground">Chief Information Security Officer</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container px-4 py-16 mx-auto">
        <Card className="max-w-4xl mx-auto border-2 border-purple-200 dark:border-purple-900 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
          <CardContent className="pt-12 pb-12 text-center">
            <Shield className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Vendor Risk Diagnostic
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a 30-minute consultation and we'll assess one of your critical vendors at no cost. See exactly how
              our framework uncovers hidden risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg px-8"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Diagnostic Call
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Service Overview
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No obligation • 30-minute consultation • Immediate value
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Trust Badges */}
      <section className="container px-4 py-8 mx-auto border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by companies meeting:</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <Badge variant="outline" className="text-base py-2 px-4">
              HIPAA
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-4">
              SOC 2
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-4">
              ISO 27001
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-4">
              GDPR
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-4">
              PCI DSS
            </Badge>
            <Badge variant="outline" className="text-base py-2 px-4">
              NIST
            </Badge>
          </div>
        </div>
      </section>
    </div>
  )
}
