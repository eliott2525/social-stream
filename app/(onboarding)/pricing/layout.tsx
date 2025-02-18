import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose your perfect plan',
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 