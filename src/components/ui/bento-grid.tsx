import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils";
import { ArrowRightIcon, CalendarIcon, SearchIcon, ShieldCheckIcon, WaypointsIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";
import AnimatedIcon from "@/components/gsap/animated-icon";

export const CARDS = [
    {
        Icon: ShieldCheckIcon,
        name: "Cybersecurity & GRC",
        description: "SOC 2, ISO 27001, and NIST assessments that end in audit-ready evidence — not a slide deck.",
        href: "/features/cybersecurity",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
                <CardHeader>
                    <CardTitle>
                        Request an assessment
                    </CardTitle>
                    <CardDescription>
                        Tell us your stack and target framework — we scope it fixed-price.
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <Label>
                        Your stack
                    </Label>
                    <Input
                        type="text"
                        placeholder="AWS, GitHub, Okta, Google Workspace..."
                        className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
                    />
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: SearchIcon,
        name: "Findings you can act on",
        description: "Every issue lands in a findings register with severity, owner, and exit criterion.",
        href: "/features/cybersecurity",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Command className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2">
                <Input placeholder="Search findings..." />
                <div className="mt-1 cursor-pointer">
                    <div className="px-4 py-2 hover:bg-muted rounded-md">C-1 · MFA not enforced on admin accounts</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">H-1 · No vendor risk register</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">H-2 · Offboarding has no access-revocation step</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">M-1 · Logs retained 7 days, policy says 90</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">M-2 · S3 buckets without encryption-at-rest</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">+ · SSO enforced across core SaaS</div>
                </div>
            </Command>
        ),
    },
    {
        Icon: WaypointsIcon,
        name: "We build and automate in your stack",
        description: "Web, cloud, and AI automation — delivered in the tools you already run.",
        href: "/features/automation",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Integrations className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: CalendarIcon,
        name: "Fixed timelines",
        description: "First findings inside two weeks. Every milestone has an owner and a date.",
        className: "col-span-3 lg:col-span-1",
        href: "/pricing",
        cta: "Learn more",
        background: (
            <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
            "bg-white [box-shadow:0_4px_24px_-8px_rgba(15,23,42,0.08)]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <AnimatedIcon>
                <Icon className="h-12 w-12 origin-left text-blue-600 transition-all duration-300 ease-in-out group-hover:scale-75" />
            </AnimatedIcon>
            <h3 className="text-xl font-semibold text-foreground">
                {name}
            </h3>
            <p className="max-w-lg text-muted-foreground">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
