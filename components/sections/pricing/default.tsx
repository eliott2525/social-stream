import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { CircleCheckBig, User, Users } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type Plan = {
  name: string;
  icon?: React.ReactNode;
  description: string;
  price: number;
  priceNote: string;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
  };
  features: string[];
  featured: boolean;
};

const plans: Plan[] = [
  {
    name: "Creator",
    icon: <User className="h-4 w-4" />,
    description: "Perfect for content creators and personal brands",
    price: 12,
    priceNote: "per month, billed annually",
    cta: {
      variant: "glow",
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
    featured: false,
  },
  {
    name: "Team",
    icon: <Users className="h-4 w-4" />,
    description: "For growing teams and businesses",
    price: 39,
    priceNote: "per user/month, billed annually",
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
    featured: true,
  },
];

export default function Pricing() {
  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <h2 className="text-2xl font-semibold">
          Choose your plan
        </h2>
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col gap-6 rounded-xl bg-gradient-to-b from-card/60 to-card p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-gradient-to-b hover:from-primary/5 hover:to-card hover:shadow-2xl"
            >
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
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{plan.priceNote}</span>
                </div>
                <Button variant={plan.cta.variant} size="lg" className="w-full" asChild>
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Start with a 14-day free trial. No credit card required.
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
