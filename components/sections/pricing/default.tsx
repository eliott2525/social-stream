import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { CircleCheckBig, User, Users, Building2 } from "lucide-react";
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
  classes?: string;
};

const plans: Plan[] = [
  {
    name: "Creator",
    icon: <User className="h-4 w-4" />,
    description: "Perfect for content creators and personal brands",
    price: 9,
    priceNote: "per month, billed annually",
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
    featured: false,
    classes: "glass-1 to-transparent dark:glass-2",
  },
  {
    name: "Team",
    icon: <Users className="h-4 w-4" />,
    description: "For growing teams and businesses",
    price: 29,
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
    classes:
      "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
  },
  {
    name: "Agency",
    icon: <Building2 className="h-4 w-4" />,
    description: "For agencies managing multiple clients",
    price: 99,
    priceNote: "per month, unlimited users",
    cta: {
      variant: "default",
      label: "Contact sales",
      href: siteConfig.pricing.agency,
    },
    features: [
      "Everything in Team plan",
      "Unlimited team members",
      "Client management portal",
      "White-label reports",
      "API access",
      "Custom onboarding",
      "24/7 priority support",
    ],
    featured: false,
    classes:
      "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
  },
];

export default function Pricing() {
  return (
    <Section>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            Choose the perfect plan for your social media management needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex max-w-container flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
                plan.classes,
              )}
            >
              <hr
                className={cn(
                  "absolute left-[10%] top-0 h-[1px] w-[80%] border-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent",
                  plan.featured && "via-brand",
                )}
              />
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <h2 className="flex items-center gap-2 font-bold">
                    {plan.icon && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {plan.icon}
                      </div>
                    )}
                    {plan.name}
                  </h2>
                  <p className="max-w-[220px] text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-muted-foreground">
                      $
                    </span>
                    <span className="text-6xl font-bold">{plan.price}</span>
                  </div>
                  <div className="flex min-h-[40px] flex-col">
                    <span className="text-sm text-muted-foreground">
                      {plan.priceNote}
                    </span>
                  </div>
                </div>
                <Button variant={plan.cta.variant} size="lg" asChild>
                  <Link href={plan.cta.href}>{plan.cta.label}</Link>
                </Button>
                <p className="min-h-[40px] max-w-[220px] text-sm text-muted-foreground">
                  Start with a 14-day free trial. No credit card required.
                </p>
                <hr className="border-input" />
              </div>
              <div>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CircleCheckBig className="h-4 w-4 shrink-0 text-muted-foreground" />
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
