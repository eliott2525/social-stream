import { Metadata } from "next"
import { OnboardingLayout } from "@/components/layouts/onboarding-layout"

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'Welcome to your journey with us',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <OnboardingLayout>{children}</OnboardingLayout>
} 