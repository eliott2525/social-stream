"use client"

import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { CircleCheckBig, User, Users } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useState } from "react";

type Plan = {
  name: string;
  icon?: React.ReactNode;
  description: string;
  yearlyPrice: number;
  priceNote: string;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
  };
  features: string[];
  featured: boolean;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Creator",
    icon: <User className="h-4 w-4" />,
    description: "Perfect for content creators and personal brands",
    yearlyPrice: 12,
    priceNote: "per month",
    cta: {
      variant: "default",
      label: "Start free trial",
      href: siteConfig.pricing.creator,
    },
    features: [
      "3 social media platforms",
      "30 scheduled posts per month",
      "Basic analytics",
      "Content studio access",
      "Email support",
    ],
    featured: true,
    popular: true,
  },
  {
    name: "Team",
    icon: <Users className="h-4 w-4" />,
    description: "For growing teams and businesses",
    yearlyPrice: 39,
    priceNote: "per user/month",
    cta: {
      variant: "glow",
      label: "Start free trial",
      href: siteConfig.pricing.team,
    },
    features: [
      "Unlimited social platforms",
      "Unlimited scheduled posts",
      "Advanced analytics",
      "Full content studio access",
      "Team collaboration tools",
      "Priority support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const getPrice = (yearlyPrice: number) => {
    return isYearly ? yearlyPrice : Math.round(yearlyPrice / 0.6);
  };

  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Plans and Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Receive unlimited credits when you pay yearly, and save on your plan.
            </p>
          </div>
          
          {/* Billing Toggle */}
          <div className="inline-flex rounded-lg bg-muted p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "relative rounded-md px-6 py-2 text-sm font-medium transition-colors",
                !isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "relative rounded-md px-6 py-2 text-sm font-medium transition-colors",
                isYearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              )}
            >
              Annual
              <span className="absolute -right-5 -top-3 flex h-5 items-center rounded-full bg-brand-foreground px-2 py-0.5 text-[12px] font-medium origin-center">
                Save 40%
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col gap-6 rounded-xl bg-gradient-to-b from-card/60 to-card p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-gradient-to-b hover:from-primary/5 hover:to-card hover:shadow-2xl",
                plan.featured && "border-2 border-primary/20"
              )}
            >
              {plan.popular && (
                <span className="absolute -right-1 -top-1 rounded-full bg-brand-foreground px-3 py-1 text-xs font-medium">
                  Popular
                </span>
              )}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    {plan.icon && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        {plan.icon}
                      </div>
                    )}
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-muted-foreground">$</span>
                  <span className="text-5xl font-bold">{getPrice(plan.yearlyPrice)}</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {plan.priceNote}{isYearly ? ", billed annually" : ""}
                  </span>
                </div>
                <Button variant={plan.cta.variant} size="lg" className="w-full" asChild>
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Get started, asap !
                </p>
                <hr className="border-border/40" />
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CircleCheckBig className="h-5 w-5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
