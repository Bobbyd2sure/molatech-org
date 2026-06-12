"use client"

import { useState } from "react"
import { Shield, AlertTriangle, CheckCircle2, Download, Calendar, TrendingUp, Lock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import GsapEffects from "@/components/gsap/gsap-effects"

/**
 * ThirdPartyRiskPage — Molatech TPRM landing page.
 * Ported from legacy site with the following changes:
 * - Molatech logo image removed (not appropriate in (marketing) layout)
 * - Named testimonial replaced with generic client quote block
 * - All purple/orange/red Tailwind classes replaced with brand palette:
 *   blue-600, cyan-400/500, emerald-500
 * - Case study refers to a generic "healthcare SaaS client" — no fabricated named company
 * - Heading font updated: font-medium font-heading
 */
export default function ThirdPartyRiskPage() {
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null)

  return (
    <GsapEffects className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container px-4 py-16 mx-auto text-center">
        <div className="hero-reveal inline-block mb-4">
          <Badge variant="secondary">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Critical Risk Assessment
          </Badge>
        </div>
        <h1 className="text-4xl md:text-6xl font-medium font-heading mb-6">
          {["Third-Party", "Risk", "Assessment"].map((word, i) => (
            <span
              key={i}
              className="hero-word inline-block bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            >
              {word}{"\u00A0"}
            </span>
          ))}
        </h1>
        <p className="hero-reveal text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Protect your organisation from vendor vulnerabilities, data breaches, and compliance failures with our
          comprehensive third-party risk management solution.
        </p>
        <div className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/start">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Vendor Diagnostic
            </Link>
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
          <h2 className="text-3xl md:text-4xl font-medium font-heading text-center mb-4">
            The Hidden Dangers of Third-Party Vendors
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Your vendors have access to your systems, data, and customers. Are you confident they&apos;re secure?
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200 dark:border-blue-900">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <CardTitle className="text-blue-600 dark:text-blue-400">60% of Data Breaches</CardTitle>
                    <CardDescription>Originate from third-party vendors with inadequate security controls</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-cyan-200 dark:border-cyan-900">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-cyan-500 mt-1" />
                  <div>
                    <CardTitle className="text-cyan-600 dark:text-cyan-400">$4.35M Average Cost</CardTitle>
                    <CardDescription>Per data breach in 2023, with vendor breaches costing 15% more</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-emerald-200 dark:border-emerald-900">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-emerald-500 mt-1" />
                  <div>
                    <CardTitle className="text-emerald-600 dark:text-emerald-400">Compliance Violations</CardTitle>
                    <CardDescription>
                      GDPR, HIPAA, SOC 2, and ISO 27001 require documented vendor risk assessments
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 dark:border-blue-900">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <CardTitle className="text-blue-600 dark:text-blue-400">Reputation Damage</CardTitle>
                    <CardDescription>
                      Customer trust erodes when your vendor&apos;s security failures expose their data
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-blue-900 dark:text-blue-100">The Reality:</h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Most organisations have 100+ third-party vendors with varying access levels</span>
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
      <section className="bg-muted/30 py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium font-heading text-center mb-4">What We Deliver</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Comprehensive third-party risk assessment and ongoing monitoring to protect your organisation
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-emerald-200 dark:border-emerald-900">
                <CardHeader>
                  <Shield className="h-10 w-10 text-emerald-500 mb-2" />
                  <CardTitle>Initial Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Security posture evaluation (100+ controls)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Compliance framework mapping</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Data access and flow analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Penetration testing results review</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Certificate verification (SOC 2, ISO 27001)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-900">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Risk Scoring &amp; Reporting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Quantified risk scores (0–100 scale)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Executive dashboard with trends</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prioritised remediation roadmap</span>
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

              <Card className="border-cyan-200 dark:border-cyan-900">
                <CardHeader>
                  <Lock className="h-10 w-10 text-cyan-500 mb-2" />
                  <CardTitle>Ongoing Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Continuous security posture tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Quarterly reassessments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Breach and vulnerability alerts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Compliance deadline reminders</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Annual audit support</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 border-2 border-blue-200 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="text-center">Complete Deliverables Package</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Vendor Risk Scorecard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Security Controls Assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Compliance Gap Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Remediation Action Plan</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Executive Summary Report</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Risk Register Documentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Contract Review Recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Ongoing Monitoring Portal Access</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Scorecard Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium font-heading text-center mb-4">Sample Vendor Risk Scorecard</h2>
          <p className="text-center text-muted-foreground mb-12">
            See how we assess and score your third-party vendors across critical security domains
          </p>

          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Acme SaaS Provider</CardTitle>
                  <CardDescription className="text-base">CRM &amp; Marketing Automation Platform</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Overall Risk Score</div>
                  <div className="text-4xl font-medium font-heading text-cyan-600">67/100</div>
                  <Badge variant="secondary">Medium Risk</Badge>
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
                      <span className="font-medium">Security Controls</span>
                    </div>
                    <span className="text-lg font-medium text-emerald-500">82/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: "82%" }}></div>
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
                      <span className="font-medium">Compliance &amp; Certifications</span>
                    </div>
                    <span className="text-lg font-medium text-emerald-500">90/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-emerald-500 h-3 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">SOC 2 Type II, ISO 27001, GDPR compliant</p>
                </div>

                {/* Data Protection */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Data Protection</span>
                    </div>
                    <span className="text-lg font-medium text-cyan-500">65/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-cyan-500 h-3 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Data retention policy unclear, backup encryption needs verification
                  </p>
                </div>

                {/* Incident Response */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Incident Response</span>
                    </div>
                    <span className="text-lg font-medium text-blue-600">45/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    No documented incident response plan, breach notification SLA undefined
                  </p>
                </div>

                {/* Business Continuity */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Business Continuity</span>
                    </div>
                    <span className="text-lg font-medium text-cyan-500">70/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-cyan-500 h-3 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Disaster recovery plan exists, but RTO/RPO targets not aligned with requirements
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Critical Action Items:</h4>
                <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
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
      <section className="bg-muted/30 py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium font-heading text-center mb-4">Transparent Pricing</h2>
            <p className="text-center text-muted-foreground mb-12">
              Choose the package that fits your vendor risk management needs
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Starter */}
              <Card
                className={`border-2 transition-all cursor-pointer ${
                  selectedPricing === "starter"
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-muted hover:border-blue-300"
                }`}
                onClick={() => setSelectedPricing("starter")}
              >
                <CardHeader>
                  <CardTitle>Starter Assessment</CardTitle>
                  <CardDescription>Perfect for evaluating critical vendors</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-medium font-heading">$2,500</span>
                    <span className="text-muted-foreground">/vendor</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">1–5 vendor assessments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Risk scorecard per vendor</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Executive summary report</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Remediation recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">2–3 week delivery</span>
                  </div>
                  <div className="text-sm text-muted-foreground pt-2">
                    <strong>Timeline:</strong> 2–3 weeks per vendor
                  </div>
                </CardContent>
              </Card>

              {/* Professional */}
              <Card
                className={`border-2 transition-all cursor-pointer relative ${
                  selectedPricing === "professional"
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-blue-300 hover:border-blue-400"
                }`}
                onClick={() => setSelectedPricing("professional")}
              >
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
                <CardHeader>
                  <CardTitle>Professional Program</CardTitle>
                  <CardDescription>Comprehensive vendor risk management</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-medium font-heading">$15,000</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">10–25 vendor assessments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Quarterly reassessments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Continuous monitoring dashboard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Breach and vulnerability alerts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated security analyst</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Monthly executive reporting</span>
                  </div>
                  <div className="text-sm text-muted-foreground pt-2">
                    <strong>Timeline:</strong> 4–6 weeks initial setup
                  </div>
                </CardContent>
              </Card>

              {/* Enterprise */}
              <Card
                className={`border-2 transition-all cursor-pointer ${
                  selectedPricing === "enterprise"
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-muted hover:border-blue-300"
                }`}
                onClick={() => setSelectedPricing("enterprise")}
              >
                <CardHeader>
                  <CardTitle>Enterprise Suite</CardTitle>
                  <CardDescription>Full vendor ecosystem management</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-medium font-heading">Custom</span>
                    <span className="text-muted-foreground block text-sm">Contact for quote</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">25+ vendor assessments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated continuous monitoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom risk framework integration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">API integration with GRC tools</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated account team</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24/7 priority support</span>
                  </div>
                  <div className="text-sm text-muted-foreground pt-2">
                    <strong>Timeline:</strong> 6–8 weeks initial setup
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium font-heading text-center mb-4">
            Case Study: Healthcare SaaS Client
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            How we helped a healthcare technology company avoid a $2M+ compliance violation
          </p>

          <Card className="border-2 border-blue-200 dark:border-blue-900">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle className="text-2xl">Series B Healthcare SaaS Platform</CardTitle>
                  <CardDescription className="text-base">
                    150 employees | $20M ARR | HIPAA-regulated environment
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Challenge */}
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                  The Challenge
                </h3>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-900">
                  <ul className="space-y-2 text-sm">
                    <li>
                      Processing PHI (Protected Health Information) through 47 third-party vendors including payment
                      processors, analytics tools, and cloud infrastructure
                    </li>
                    <li>
                      Preparing for HIPAA audit and SOC 2 Type II certification — auditors flagged inadequate vendor
                      risk documentation
                    </li>
                    <li>
                      Manual vendor assessments taking 60+ hours each with inconsistent methodology across different
                      teams
                    </li>
                    <li>
                      12 vendors had subprocessors with unknown security postures, creating hidden compliance gaps
                    </li>
                    <li>Facing potential $2.3M penalty for HIPAA non-compliance if gaps were not remediated within 90 days</li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  Our Solution
                </h3>
                <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-900 space-y-3">
                  <div>
                    <strong className="text-sm font-medium">Week 1–2: Rapid Assessment</strong>
                    <ul className="text-sm mt-1 space-y-1 ml-4">
                      <li>Conducted emergency assessment of all 47 vendors using our standardised HIPAA framework</li>
                      <li>Identified 8 high-risk vendors requiring immediate attention</li>
                      <li>Created prioritised remediation roadmap based on data sensitivity and access levels</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-sm font-medium">Week 3–6: Remediation Sprint</strong>
                    <ul className="text-sm mt-1 space-y-1 ml-4">
                      <li>
                        Worked with the legal team to add BAAs (Business Associate Agreements) for 5 vendors missing
                        proper contracts
                      </li>
                      <li>Replaced 2 non-compliant vendors with HIPAA-certified alternatives</li>
                      <li>Implemented continuous monitoring for all critical vendors</li>
                      <li>Created comprehensive documentation package for auditors</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-sm font-medium">Ongoing: Continuous Programme</strong>
                    <ul className="text-sm mt-1 space-y-1 ml-4">
                      <li>Quarterly reassessments with automated certificate expiration tracking</li>
                      <li>Real-time breach monitoring and vendor security posture changes</li>
                      <li>New vendor onboarding process with security review before contract signature</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Results Achieved
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-medium font-heading text-blue-600 mb-1">$2.3M</div>
                      <div className="text-sm text-blue-900 dark:text-blue-100">
                        Compliance penalty avoided by meeting audit requirements
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-medium font-heading text-emerald-500 mb-1">100%</div>
                      <div className="text-sm text-emerald-900 dark:text-emerald-100">
                        Of vendors now documented with compliant contracts and certifications
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-900">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-medium font-heading text-cyan-600 mb-1">85%</div>
                      <div className="text-sm text-cyan-900 dark:text-cyan-100">
                        Reduction in time spent on vendor assessments (60hrs to 9hrs per vendor)
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-medium font-heading text-blue-600 mb-1">42 Days</div>
                      <div className="text-sm text-blue-900 dark:text-blue-100">
                        Passed HIPAA audit and achieved SOC 2 Type II certification ahead of schedule
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container px-4 py-16 mx-auto">
        <Card className="max-w-4xl mx-auto border-2 border-blue-200 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <CardContent className="pt-12 pb-12 text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-medium font-heading mb-4">
              Get Your Free Vendor Risk Diagnostic
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a 30-minute consultation and we&apos;ll assess one of your critical vendors at no cost. See exactly how
              our framework uncovers hidden risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8"
              >
                <Link href="/start">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Diagnostic Call
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Service Overview
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No obligation &bull; 30-minute consultation &bull; Immediate value
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Trust Badges */}
      <section className="container px-4 py-8 mx-auto border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by companies meeting:</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {["HIPAA", "SOC 2", "ISO 27001", "GDPR", "PCI DSS", "NIST"].map((framework) => (
              <Badge key={framework} variant="outline" className="text-base py-2 px-4">
                {framework}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </GsapEffects>
  )
}
