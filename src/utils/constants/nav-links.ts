import { BotIcon, CloudIcon, CodeIcon, GraduationCapIcon, LayoutIcon, MegaphoneIcon, NewspaperIcon, ShieldCheckIcon, SmartphoneIcon, UsersIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Services",
        href: "/services",
        menu: [
            {
                title: "Cybersecurity",
                tagline: "Penetration testing, compliance, SOC, incident response.",
                href: "/services/cybersecurity",
                icon: ShieldCheckIcon,
            },
            {
                title: "Web Development",
                tagline: "Modern, fast websites and web apps that convert.",
                href: "/services/web-development",
                icon: CodeIcon,
            },
            {
                title: "App Development",
                tagline: "iOS, Android, and cross-platform mobile apps.",
                href: "/services/app-development",
                icon: SmartphoneIcon,
            },
            {
                title: "Website Design",
                tagline: "Beautiful, conversion-focused design.",
                href: "/services/website-design",
                icon: LayoutIcon,
            },
            {
                title: "Cloud Solutions",
                tagline: "Cloud architecture, migration, and optimization.",
                href: "/services/cloud-solutions",
                icon: CloudIcon,
            },
            {
                title: "Automation & AI",
                tagline: "AI agents and workflow automation.",
                href: "/services/automation",
                icon: BotIcon,
            },
            {
                title: "Digital Marketing",
                tagline: "SEO, paid media, and growth campaigns.",
                href: "/services/digital-marketing",
                icon: MegaphoneIcon,
            },
            {
                title: "Consultancy",
                tagline: "Senior technology and security consulting.",
                href: "/services/consultancy",
                icon: UsersIcon,
            },
            {
                title: "Training",
                tagline: "Hands-on technology and security training.",
                href: "/services/training",
                icon: GraduationCapIcon,
            },
        ],
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Blog",
        href: "/blog",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];
