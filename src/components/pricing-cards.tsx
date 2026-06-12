"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn, PLANS } from "@/utils";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

const PricingCards = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6">
            {PLANS.map((plan) => (
                <Card
                    key={plan.name}
                    className={cn(
                        "flex flex-col w-full border-border rounded-xl",
                        plan.highlight && "border-2 border-blue-500"
                    )}
                >
                    <CardHeader className={cn(
                        "border-b border-border",
                        plan.highlight ? "bg-blue-500/[0.07]" : "bg-foreground/[0.03]"
                    )}>
                        <CardTitle className={cn(!plan.highlight && "text-muted-foreground", "text-lg font-medium")}>
                            {plan.name}
                        </CardTitle>
                        <CardDescription>
                            {plan.info}
                        </CardDescription>
                        <h5 className="text-3xl font-semibold">
                            {plan.price}
                            <span className="text-base text-muted-foreground font-normal block">
                                {plan.priceNote}
                            </span>
                        </h5>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                        {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <CheckCircleIcon className="text-emerald-500 w-4 h-4" />
                                <TooltipProvider>
                                    <Tooltip delayDuration={0}>
                                        <TooltipTrigger asChild>
                                            <p className={cn(feature.tooltip && "border-b !border-dashed border-border cursor-pointer")}>
                                                {feature.text}
                                            </p>
                                        </TooltipTrigger>
                                        {feature.tooltip && (
                                            <TooltipContent>
                                                <p>{feature.tooltip}</p>
                                            </TooltipContent>
                                        )}
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="w-full mt-auto">
                        <Link
                            href={plan.btn.href}
                            style={{ width: "100%" }}
                            className={buttonVariants({ className: cn(plan.highlight && "bg-blue-600 hover:bg-blue-600/90 text-white") })}
                        >
                            {plan.btn.text}
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
};

export default PricingCards
