import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const PROCESS = [
    {
        title: "Discover",
        description: "We map your systems, controls, and gaps — and give you the honest read on where things actually stand.",
        icon: FolderOpenIcon,
    },
    {
        title: "Remediate",
        description: "Fixed-scope delivery with named owners, exit criteria, and dates. First findings inside two weeks.",
        icon: WandSparklesIcon,
    },
    {
        title: "Evidence",
        description: "You get an audit-ready evidence pack — findings registers, configs, screenshots. Provable, not vibes.",
        icon: BarChart3Icon,
    },
] as const;

