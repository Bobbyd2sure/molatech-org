-- MolaTech Blog Schema
-- Run this in your Supabase SQL Editor

-- =====================================================
-- Blog Categories Table
-- =====================================================
CREATE TABLE IF NOT EXISTS blog_categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    slug VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO blog_categories (slug, name, description) VALUES
    ('technology', 'Technology', 'Latest trends and insights in technology'),
    ('web-development', 'Web Development', 'Tips, tutorials, and best practices for web development'),
    ('business', 'Business', 'Business insights and digital transformation strategies'),
    ('security', 'Cybersecurity', 'Security best practices and threat awareness'),
    ('cloud', 'Cloud Computing', 'Cloud solutions and infrastructure insights')
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- Blog Posts Table
-- =====================================================
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    slug VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    cover_image VARCHAR(500),
    category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
    author_name VARCHAR(100) DEFAULT 'MolaTech Team',
    author_role VARCHAR(100),
    author_avatar VARCHAR(500),
    tags TEXT[] DEFAULT '{}',
    reading_time VARCHAR(50),
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    featured BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    views INTEGER DEFAULT 0
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured) WHERE featured = true;

-- =====================================================
-- Admin Users Table (for simple admin auth)
-- =====================================================
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('admin', 'editor', 'viewer')),
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- Admin Sessions Table
-- =====================================================
CREATE TABLE IF NOT EXISTS admin_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES admin_users(id) ON DELETE CASCADE,
    token VARCHAR(255) NOT NULL UNIQUE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON admin_sessions(token);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires ON admin_sessions(expires_at);

-- =====================================================
-- Row Level Security (RLS) Policies
-- =====================================================

-- Blog Categories
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read for categories" ON blog_categories
    FOR SELECT USING (true);

CREATE POLICY "Allow service role all for categories" ON blog_categories
    FOR ALL USING (auth.role() = 'service_role');

-- Blog Posts
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can only read published posts
CREATE POLICY "Allow public read published posts" ON blog_posts
    FOR SELECT USING (status = 'published');

-- Service role can do everything
CREATE POLICY "Allow service role all for posts" ON blog_posts
    FOR ALL USING (auth.role() = 'service_role');

-- Admin Users (service role only)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service role for admin_users" ON admin_users
    FOR ALL USING (auth.role() = 'service_role');

-- Admin Sessions (service role only)
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service role for admin_sessions" ON admin_sessions
    FOR ALL USING (auth.role() = 'service_role');

-- =====================================================
-- Triggers
-- =====================================================

CREATE TRIGGER update_blog_categories_updated_at
    BEFORE UPDATE ON blog_categories
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
    BEFORE UPDATE ON admin_users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- Helper Views
-- =====================================================

-- View: Published posts with category info
CREATE OR REPLACE VIEW published_posts_view AS
SELECT
    p.id,
    p.slug,
    p.title,
    p.excerpt,
    p.content,
    p.cover_image,
    p.author_name,
    p.author_role,
    p.author_avatar,
    p.tags,
    p.reading_time,
    p.featured,
    p.published_at,
    p.views,
    c.slug as category_slug,
    c.name as category_name
FROM blog_posts p
LEFT JOIN blog_categories c ON p.category_id = c.id
WHERE p.status = 'published'
ORDER BY p.published_at DESC;

-- View: Blog statistics
CREATE OR REPLACE VIEW blog_stats AS
SELECT
    COUNT(*) AS total_posts,
    COUNT(*) FILTER (WHERE status = 'published') AS published_posts,
    COUNT(*) FILTER (WHERE status = 'draft') AS draft_posts,
    COUNT(*) FILTER (WHERE featured = true AND status = 'published') AS featured_posts,
    COALESCE(SUM(views), 0) AS total_views
FROM blog_posts;
