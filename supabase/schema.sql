-- MolaTech Supabase Schema
-- Run this in your Supabase SQL Editor to create the required tables

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- Contact Submissions Table
-- Stores all contact form submissions
-- =====================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255) DEFAULT 'General Inquiry',
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    notes TEXT -- Internal notes for admin
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- =====================================================
-- Row Level Security (RLS) Policies
-- =====================================================

-- Enable RLS on the table
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert from anyone (for contact form submissions)
CREATE POLICY "Allow public inserts" ON contact_submissions
    FOR INSERT
    WITH CHECK (true);

-- Policy: Only authenticated users can read (for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON contact_submissions
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update (for status changes)
CREATE POLICY "Allow authenticated updates" ON contact_submissions
    FOR UPDATE
    USING (auth.role() = 'authenticated');

-- =====================================================
-- Trigger to update updated_at timestamp
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- Optional: Newsletter Subscribers Table
-- For future newsletter functionality
-- =====================================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100),
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    source VARCHAR(100) DEFAULT 'website'
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(status);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public inserts
CREATE POLICY "Allow public newsletter signup" ON newsletter_subscribers
    FOR INSERT
    WITH CHECK (true);

-- Policy: Allow authenticated reads
CREATE POLICY "Allow authenticated newsletter reads" ON newsletter_subscribers
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- =====================================================
-- Optional: Project Inquiries Table
-- For tracking project-specific inquiries from /start page
-- =====================================================
CREATE TABLE IF NOT EXISTS project_inquiries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service_type VARCHAR(100),
    budget_range VARCHAR(100),
    timeline VARCHAR(100),
    project_description TEXT NOT NULL,
    ip_address VARCHAR(45),
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'converted', 'declined')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_project_inquiries_email ON project_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_status ON project_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_service ON project_inquiries(service_type);

ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public project inquiry inserts" ON project_inquiries
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow authenticated project inquiry reads" ON project_inquiries
    FOR SELECT
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated project inquiry updates" ON project_inquiries
    FOR UPDATE
    USING (auth.role() = 'authenticated');

CREATE TRIGGER update_project_inquiries_updated_at
    BEFORE UPDATE ON project_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- Views for Admin Dashboard (Optional)
-- =====================================================

-- View: Recent contact submissions
CREATE OR REPLACE VIEW recent_contacts AS
SELECT
    id,
    first_name || ' ' || last_name AS full_name,
    email,
    subject,
    status,
    created_at
FROM contact_submissions
ORDER BY created_at DESC
LIMIT 50;

-- View: Contact statistics
CREATE OR REPLACE VIEW contact_stats AS
SELECT
    COUNT(*) AS total_submissions,
    COUNT(*) FILTER (WHERE status = 'new') AS new_submissions,
    COUNT(*) FILTER (WHERE status = 'read') AS read_submissions,
    COUNT(*) FILTER (WHERE status = 'replied') AS replied_submissions,
    COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '7 days') AS last_7_days,
    COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '30 days') AS last_30_days
FROM contact_submissions;
