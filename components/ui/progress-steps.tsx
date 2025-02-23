"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  id: string;
  label: string;
}

interface ProgressStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep: string;
  className?: string;
}

export function ProgressSteps({ steps, currentStep, className, ...props }: ProgressStepsProps) {
  const getCurrentStepIndex = () => {
    return steps.findIndex(s => s.id === currentStep);
  };

  return (
    <div className={cn("w-full px-6 py-4", className)} {...props}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step indicator */}
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-colors",
                  currentStep === step.id && "border-primary bg-primary text-primary-foreground",
                  getCurrentStepIndex() > index && "border-primary bg-primary text-primary-foreground",
                  getCurrentStepIndex() < index && "text-muted-foreground"
                )}
              >
                {getCurrentStepIndex() > index ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span className="text-sm">{index + 1}</span>
                )}
              </div>
              <span 
                className={cn(
                  "text-xs font-medium",
                  currentStep === step.id && "text-primary",
                  getCurrentStepIndex() > index && "text-primary",
                  getCurrentStepIndex() < index && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
            {/* Connector line */}
            {index < steps.length - 1 && (
            <div className="flex-1 px-2 h-8 flex items-center">
                <div className="relative w-full h-px bg-border">
                <div
                    className={cn(
                    "h-px bg-primary transition-all",
                    getCurrentStepIndex() > index ? "w-full" : "w-0"
                    )}
                />
                </div>
            </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
} 