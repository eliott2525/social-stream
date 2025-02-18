import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-[450px] p-6 mx-auto">
        {children}
      </div>
    </div>
  )
} 