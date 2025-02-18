import { Metadata } from "next";
import { OnboardingLayout } from "@/components/layouts/onboarding-layout";
import OnboardingPricing from "@/components/sections/pricing/onboarding";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the plan that's right for you",
};

export default function PricingPage() {
  return (
    <OnboardingLayout fullWidth>
      <div className="space-y-8">
        {/* Progress Indicator */}
        <div className="space-y-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary w-full h-2 rounded-full" />
          </div>
          <p className="text-sm text-muted-foreground text-center">Step 4 of 4</p>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            Choose the right plan for you
          </h1>
          <p className="text-muted-foreground">
            Select a plan that best fits your social media management needs
          </p>
        </div>

        <OnboardingPricing />
      </div>
    </OnboardingLayout>
  );
}