"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Pricing from "@/components/sections/pricing/default";
import { OnboardingLayout } from "@/components/layouts/onboarding-layout";

export default function PricingPage() {
  return (
    <OnboardingLayout fullWidth>
      {/* Progress bar */}
      <div className="w-96 max-w-full mx-auto mb-8">
        <div className="h-2 w-full bg-muted rounded-full">
          <div className="h-2 w-full bg-primary rounded-full" />
        </div>
        <p className="text-sm text-muted-foreground text-center mt-2">Final Step</p>
      </div>

      {/* Pricing Component */}
      <Pricing />

      {/* Navigation */}
      <div className="flex justify-between w-full mt-8">
        <Button variant="ghost" size="lg" asChild>
          <Link href="/onboarding/problem-awareness">← Back</Link>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <Link href="/onboarding/success">Maybe Later</Link>
        </Button>
      </div>
    </OnboardingLayout>
  )
} 