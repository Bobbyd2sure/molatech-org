import { Metadata } from "next";

export const generateMetadata = ({
    title = "MolaTech - Build. Secure. Automate.",
    description = "Senior security and engineering outcomes for mid-market companies — fixed scope, audit-ready evidence, no surprise invoices.",
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@asapdeji",
    },
    // metadataBase: new URL(process.env.APP_DOMAIN!),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
