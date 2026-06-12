export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "MolaTech";

export const APP_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN || "www.molatech.org"}`;

export const APP_HOSTNAMES = new Set([
    process.env.NEXT_PUBLIC_APP_DOMAIN,
    `www.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
]);
