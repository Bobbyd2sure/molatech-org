/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.supabase.co",
            },
            {
                protocol: "https",
                hostname: "**.public.blob.vercel-storage.com",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ],
    },
};

export default nextConfig;
