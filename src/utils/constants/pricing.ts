export const PLANS = [
    {
        name: "Build",
        info: "Websites, apps, and cloud",
        price: "Fixed quote",
        priceNote: "per project",
        features: [
            { text: "Web and app development" },
            { text: "Cloud architecture and migration" },
            { text: "Modern stacks", tooltip: "Next.js, Supabase, AWS, Vercel" },
            { text: "Live prototypes before you commit", tooltip: "See molatech.org/demos" },
            { text: "Full handover with documentation" },
        ],
        btn: {
            text: "Get a quote",
            href: "/contact",
        },
        highlight: false,
    },
    {
        name: "Secure",
        info: "Cybersecurity & GRC — our core",
        price: "from $18k",
        priceNote: "fixed scope, fixed price",
        features: [
            { text: "NIST gap assessment", tooltip: "$18–32k" },
            { text: "SOC 2 readiness", tooltip: "Type I $25–45k · Type II $45–75k" },
            { text: "ISO 27001 full ISMS", tooltip: "$45–85k" },
            { text: "TPRM program build", tooltip: "$30–55k" },
            { text: "Audit-ready evidence pack included" },
            { text: "First findings inside two weeks" },
        ],
        btn: {
            text: "Book a scoping call",
            href: "/contact",
        },
        highlight: true,
    },
    {
        name: "Automate",
        info: "AI agents and workflow automation",
        price: "Retainer",
        priceNote: "or fixed scope",
        features: [
            { text: "AI agents and integrations" },
            { text: "Workflow automation", tooltip: "Any manual task we touch twice gets automated" },
            { text: "Fractional AI leadership" },
            { text: "Systems, not dependencies" },
        ],
        btn: {
            text: "Book a call",
            href: "/contact",
        },
        highlight: false,
    },
];

export const PRICING_FEATURES = [
    {
        text: "Fixed scope, fixed price",
        tooltip: "You know the number before we start",
    },
    {
        text: "Senior hands only",
        tooltip: "The person on the proposal does the work",
    },
    {
        text: "Evidence over assertions",
        tooltip: "Findings registers, screenshots, configs",
    },
    {
        text: "First findings inside two weeks",
        tooltip: "Small, frequent deliveries beat big late ones",
    },
];

export const WORKSPACE_LIMIT = 2;
