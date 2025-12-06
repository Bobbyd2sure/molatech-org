"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle2, XCircle, AlertCircle } from "lucide-react"

export default function VendorAssessmentSample() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 space-y-6" id="vendor-assessment-sample">
      {/* Header */}
      <div className="text-center border-b-2 border-purple-600 pb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Shield className="h-12 w-12 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Vendor Risk Assessment Report</h1>
        </div>
        <p className="text-lg text-gray-600">Comprehensive Third-Party Security Evaluation</p>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-600">
          <div>
            <strong>Assessment Date:</strong> March 15, 2025
          </div>
          <div>
            <strong>Assessor:</strong> MolaTech Security Team
          </div>
          <div>
            <strong>Report ID:</strong> VRA-2025-0342
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
        <Card className="border-2 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">CloudData Analytics Inc.</CardTitle>
                <CardDescription className="text-base mt-1">
                  Business Intelligence & Data Warehousing Platform
                </CardDescription>
                <div className="mt-2 space-y-1 text-sm">
                  <div>
                    <strong>Service Type:</strong> SaaS - Data Analytics
                  </div>
                  <div>
                    <strong>Data Classification:</strong> Confidential (PII, Financial Records)
                  </div>
                  <div>
                    <strong>Contract Value:</strong> $180,000/year
                  </div>
                  <div>
                    <strong>User Access:</strong> 250 active users across Finance, Sales, Marketing
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Overall Risk Score</div>
                <div className="text-5xl font-bold text-yellow-600">62/100</div>
                <Badge className="mt-2 bg-yellow-100 text-yellow-800 text-base px-4 py-1">Medium Risk</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-600">3</div>
                <div className="text-sm text-gray-600">Critical Findings</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-600">7</div>
                <div className="text-sm text-gray-600">Medium Findings</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <AlertCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">5</div>
                <div className="text-sm text-gray-600">Low Findings</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Recommendation:</h4>
              <p className="text-sm text-red-800">
                <strong>Conditional Approval with Remediation Required.</strong> Address 3 critical findings within 30
                days before processing sensitive customer data. Implement enhanced monitoring controls immediately.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Domain Breakdown */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Domain Assessment</h2>
        <div className="space-y-4">
          {/* Security Controls */}
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-600" />
                  <CardTitle className="text-lg">1. Security Controls & Architecture</CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">68/100</div>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ Encryption:</strong> AES-256 at rest, TLS 1.3 in transit
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ Authentication:</strong> MFA enforced for all users, SSO available
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>⚠ Access Controls:</strong> RBAC implemented but overly permissive default roles
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>⚠ Network Security:</strong> No evidence of network segmentation for multi-tenant
                    architecture
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✗ Vulnerability Management:</strong> Last penetration test conducted 14 months ago (industry
                    standard: annually)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-lg">2. Data Protection & Privacy</CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">48/100</div>
                  <Badge className="bg-red-100 text-red-800">High Risk</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ Data Classification:</strong> Documented data handling procedures
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✗ Data Retention:</strong> No documented retention policy; unclear data deletion procedures
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✗ Backup Security:</strong> Backups not encrypted separately; stored in same AWS region as
                    primary data
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>⚠ Data Residency:</strong> Cannot guarantee data stays in specified geographic regions
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>⚠ Privacy Controls:</strong> Limited data subject rights automation (GDPR/CCPA requests
                    manual)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compliance */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-lg">3. Compliance & Certifications</CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">85/100</div>
                  <Badge className="bg-green-100 text-green-800">Low Risk</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ SOC 2 Type II:</strong> Current (expires Dec 2025), clean opinion
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ ISO 27001:</strong> Certified (expires Aug 2025)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ GDPR:</strong> DPA in place, privacy policy compliant
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ Industry Standards:</strong> Follows NIST Cybersecurity Framework
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>ℹ PCI DSS:</strong> Not applicable (no payment card data)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incident Response */}
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-lg">4. Incident Response & Business Continuity</CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">42/100</div>
                  <Badge className="bg-red-100 text-red-800">High Risk</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✗ Incident Response Plan:</strong> No documented IR plan provided despite multiple requests
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✗ Breach Notification:</strong> SLA undefined; contract lacks notification timeline
                    requirements
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>⚠ Disaster Recovery:</strong> DR plan exists but RTO (24hrs) and RPO (12hrs) exceed our
                    requirements
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ Business Continuity:</strong> 99.9% uptime SLA with documented BC procedures
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>⚠ Logging:</strong> Security logs retained for 90 days (our policy requires 1 year)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vendor Management */}
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-600" />
                  <CardTitle className="text-lg">5. Vendor & Subprocessor Management</CardTitle>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">55/100</div>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ Subprocessor List:</strong> Documented list of 8 subprocessors provided
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>⚠ Third-Party Risk:</strong> No evidence of security assessments for critical subprocessors
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>⚠ Notification:</strong> 15-day notice for new subprocessors (contract allows 30 days)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>✓ Cloud Infrastructure:</strong> AWS GovCloud with documented security controls
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Critical Action Items */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Prioritized Remediation Plan</h2>
        <div className="space-y-3">
          <Card className="border-2 border-red-500">
            <CardHeader className="pb-3 bg-red-50">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-900">Critical Priority (30-day deadline)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="font-bold text-red-600 mt-0.5">1.</div>
                <div>
                  <strong>Provide documented Incident Response Plan</strong> with defined roles, escalation procedures,
                  and communication protocols
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="font-bold text-red-600 mt-0.5">2.</div>
                <div>
                  <strong>Add breach notification clause to contract</strong> requiring 24-hour notification of any
                  security incident affecting our data
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="font-bold text-red-600 mt-0.5">3.</div>
                <div>
                  <strong>Implement encrypted backup solution</strong> with separate encryption keys and geographic
                  redundancy
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-500">
            <CardHeader className="pb-3 bg-yellow-50">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
                <CardTitle className="text-yellow-900">High Priority (60-day deadline)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="font-bold text-yellow-600 mt-0.5">4.</div>
                <div>
                  <strong>Conduct annual penetration test</strong> by qualified third-party and share executive summary
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="font-bold text-yellow-600 mt-0.5">5.</div>
                <div>
                  <strong>Document data retention and deletion policy</strong> aligned with GDPR/CCPA requirements
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="font-bold text-yellow-600 mt-0.5">6.</div>
                <div>
                  <strong>Improve RTO/RPO metrics</strong> to align with our requirements (RTO: 4hrs, RPO: 1hr)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="font-bold text-yellow-600 mt-0.5">7.</div>
                <div>
                  <strong>Implement network segmentation</strong> between tenant environments with documented controls
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500">
            <CardHeader className="pb-3 bg-blue-50">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-900">Medium Priority (90-day deadline)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="font-bold text-blue-600 mt-0.5">8.</div>
                <div>
                  <strong>Extend security log retention</strong> from 90 days to 1 year minimum
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="font-bold text-blue-600 mt-0.5">9.</div>
                <div>
                  <strong>Review and tighten default RBAC permissions</strong> following principle of least privilege
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="font-bold text-blue-600 mt-0.5">10.</div>
                <div>
                  <strong>Conduct third-party assessments</strong> of critical subprocessors (AWS, Analytics Provider)
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ongoing Monitoring */}
      <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Recommended Ongoing Monitoring</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Quarterly security posture reassessments</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Continuous compliance certificate tracking</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Real-time breach and vulnerability alerts</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <span>Annual contract and SLA review</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center border-t-2 border-purple-600 pt-6 text-sm text-gray-600">
        <p className="mb-2">
          <strong>Confidential Report</strong> - For internal use only
        </p>
        <p>Prepared by MolaTech Security Team | Questions? Contact info@molatech.org</p>
      </div>
    </div>
  )
}
