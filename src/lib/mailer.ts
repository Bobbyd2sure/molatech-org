import nodemailer from "nodemailer"

/**
 * SMTP notification mailer. Sends via the molatech.org mailbox.
 * Required env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.
 * Optional: CONTACT_EMAIL (defaults to info@molatech.org).
 * No-ops (returns false) when SMTP env is not configured, so form
 * submissions still succeed via the database even if email is down.
 */
export const NOTIFY_EMAIL = process.env.CONTACT_EMAIL || "info@molatech.org"

export function isMailerConfigured(): boolean {
    return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
}

export async function sendNotification(subject: string, html: string): Promise<boolean> {
    if (!isMailerConfigured()) return false

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: Number(process.env.SMTP_PORT || 465) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })

    await transporter.sendMail({
        from: `MolaTech Website <${process.env.SMTP_USER}>`,
        to: NOTIFY_EMAIL,
        subject,
        html,
    })
    return true
}
