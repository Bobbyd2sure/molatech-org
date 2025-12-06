# MolaTech Website Integrations Guide

This document contains setup instructions for all integrations installed on the MolaTech website.

---

## Table of Contents

1. [Supabase (Database)](#1-supabase-database)
2. [Google Analytics](#2-google-analytics)
3. [Sentry (Error Tracking)](#3-sentry-error-tracking)
4. [Snyk (Security Scanning)](#4-snyk-security-scanning)
5. [Cal.com (Booking Calendar)](#5-calcom-booking-calendar)
6. [Email Notifications (Resend)](#6-email-notifications-resend)

---

## 1. Supabase (Database)

**Status:** ✅ Configured

Supabase handles the database for contact submissions, blog posts, and admin authentication.

### Setup Steps:

1. Go to [supabase.com](https://supabase.com) and create a project
2. Get your credentials from **Project Settings > API**:
   - Project URL
   - Anon/Public Key
   - Service Role Key (keep secret!)

3. Add to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. Run the database schema in Supabase SQL Editor:
   - `/supabase/schema.sql` - Contact form tables
   - `/supabase/blog-schema.sql` - Blog and admin tables

### Tables Created:
- `contact_submissions` - Contact form entries
- `blog_posts` - Blog articles
- `blog_categories` - Blog categories
- `admin_users` - Admin dashboard users (legacy, now using Supabase Auth)
- `admin_sessions` - Admin sessions (legacy)

---

## 2. Google Analytics

**Status:** ⏳ Ready to configure

Track website traffic, user behavior, and conversions.

### Setup Steps:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property for your website
3. Get your **Measurement ID** (starts with `G-`)
4. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Features Enabled:
- Page view tracking (automatic)
- Custom event tracking (contact form, CTA clicks)
- Session replay integration with Sentry

### Custom Events Available:
```typescript
import { analyticsEvents } from '@/components/analytics'

analyticsEvents.contactFormSubmit()
analyticsEvents.projectInquiry()
analyticsEvents.serviceClick('web-development')
analyticsEvents.ctaClick('start-project')
```

---

## 3. Sentry (Error Tracking)

**Status:** ⏳ Ready to configure

Monitor errors, performance issues, and user sessions.

### Setup Steps:

1. Go to [sentry.io](https://sentry.io) and create an account
2. Create a new project:
   - Select **Next.js** as the platform
   - Name it `molatech`
3. Get your credentials:
   - **DSN** (Data Source Name)
   - **Organization slug**
   - **Project slug**
   - **Auth Token** (for source maps)

4. Add to `.env.local`:
```env
NEXT_PUBLIC_SENTRY_DSN=https://abc123@o123456.ingest.sentry.io/1234567
SENTRY_ORG=your-org-slug
SENTRY_PROJECT=molatech
SENTRY_AUTH_TOKEN=your-auth-token
```

### Features Enabled:
- Automatic error capture (client & server)
- Performance monitoring
- Session replay on errors
- Source maps for readable stack traces

### Configuration Files:
- `sentry.client.config.ts` - Browser-side config
- `sentry.server.config.ts` - Server-side config
- `sentry.edge.config.ts` - Edge runtime config

---

## 4. Snyk (Security Scanning)

**Status:** ⏳ Ready to configure

Scan dependencies for vulnerabilities.

### Setup Steps:

1. Go to [snyk.io](https://snyk.io) and create an account
2. Install Snyk CLI globally (optional):
```bash
npm install -g snyk
```

3. Authenticate:
```bash
npx snyk auth
```

4. Run security scans:
```bash
# Quick audit
pnpm security:audit

# Full Snyk scan
pnpm security:snyk

# Monitor project (adds to Snyk dashboard)
pnpm security:snyk-monitor
```

### Available Scripts:
| Command | Description |
|---------|-------------|
| `pnpm security:audit` | Run pnpm audit |
| `pnpm security:snyk` | Run Snyk vulnerability test |
| `pnpm security:snyk-monitor` | Add project to Snyk dashboard |
| `pnpm security:check` | Run both audit tools |
| `pnpm security:fix` | Auto-fix vulnerabilities |

---

## 5. Cal.com (Booking Calendar)

**Status:** ⏳ Ready to configure

Allow visitors to book consultations directly on the website.

### Setup Steps:

1. Go to [cal.com](https://cal.com) and create a free account
2. Set up your profile:
   - Add your name and photo
   - Set your timezone
   - Configure your availability
3. Create an event type:
   - Name: "Free Consultation"
   - Duration: 30 minutes
   - Location: Google Meet / Zoom
4. Get your booking link:
   - Format: `username/event-type`
   - Example: `molatech/consultation`

5. Update the booking component in `/components/booking-calendar.tsx`:
```typescript
calLink = "your-username/your-event-type"
```

6. Optionally add to `.env.local`:
```env
NEXT_PUBLIC_CAL_LINK=molatech/consultation
```

### Features:
- Embedded calendar on `/book` page
- Popup booking button component
- Automatic timezone detection
- Email confirmations and reminders

### Usage in Components:
```tsx
import BookingCalendar, { BookingButton } from '@/components/booking-calendar'

// Full calendar embed
<BookingCalendar calLink="molatech/consultation" />

// Popup button
<BookingButton calLink="molatech/consultation">
  Book a Call
</BookingButton>
```

### Alternative: Calendly

If you prefer Calendly, replace the Cal.com embed with:
```tsx
// Install: pnpm add react-calendly
import { InlineWidget } from 'react-calendly'

<InlineWidget url="https://calendly.com/your-username/consultation" />
```

---

## 6. Email Notifications (Resend)

**Status:** ⏳ Not yet configured

Send email notifications when contact forms are submitted.

### Setup Steps:

1. Go to [resend.com](https://resend.com) and create an account
2. Verify your domain or use their test domain
3. Get your API key from the dashboard
4. Add to `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

5. Uncomment the email code in `/app/api/contact/route.ts`:
```typescript
if (process.env.RESEND_API_KEY) {
  const { Resend } = await import('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'MolaTech Contact <contact@molatech.org>',
    to: ['info@molatech.org'],
    subject: `[Contact Form] ${sanitizedData.subject}`,
    html: `...email template...`,
  })
}
```

### Features:
- Email notifications for new contact submissions
- Customizable email templates
- Delivery tracking and analytics

---

## Environment Variables Summary

Create a `.env.local` file with these variables:

```env
# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Sentry (Optional)
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
SENTRY_ORG=your-org
SENTRY_PROJECT=molatech
SENTRY_AUTH_TOKEN=your-token

# Cal.com Booking (Optional)
NEXT_PUBLIC_CAL_LINK=molatech/consultation

# Resend Email (Optional)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Admin Setup Key (Change this!)
ADMIN_SETUP_KEY=molatech-admin-setup-2025
```

---

## Admin Dashboard

**URL:** `/admin/login`

### Default Admin Emails:
- `info@molatech.org`
- `admin@molatech.org`

To add more admin emails, edit `/lib/admin-auth.ts`:
```typescript
const ADMIN_EMAILS = [
  'info@molatech.org',
  'admin@molatech.org',
  'new-admin@molatech.org', // Add new admins here
]
```

### Features:
- Dashboard with stats overview
- Blog post management (create, edit, delete)
- Contact message management
- Responsive sidebar navigation

---

## Quick Start Checklist

- [ ] Set up Supabase project and run SQL schemas
- [ ] Create admin user in Supabase Auth
- [ ] Configure Google Analytics (optional)
- [ ] Set up Sentry project (optional)
- [ ] Create Cal.com account and event types (optional)
- [ ] Configure Resend for email notifications (optional)
- [ ] Run `npx snyk auth` for security scanning

---

## Support

For questions about these integrations, contact the development team or refer to:
- [Supabase Docs](https://supabase.com/docs)
- [Sentry Docs](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Cal.com Docs](https://cal.com/docs)
- [Snyk Docs](https://docs.snyk.io/)
- [Resend Docs](https://resend.com/docs)
