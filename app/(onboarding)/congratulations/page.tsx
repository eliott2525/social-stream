import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PartyPopper } from "lucide-react"

export const metadata: Metadata = {
  title: "Welcome Aboard!",
  description: "Congratulations on joining us",
}

export default function CongratulationsPage() {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-2">
          <PartyPopper className="w-8 h-8 text-primary" /> Congratulations!
        </h1>
        <p className="text-muted-foreground text-lg">
          You've taken the first step toward mastering your social media presence
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6 border-2 border-primary/20 bg-primary/5">
          <h3 className="font-semibold mb-2">Save Time</h3>
          <p className="text-sm text-muted-foreground">
            Schedule posts across multiple platforms in one go and let automation handle the rest
          </p>
        </Card>
        <Card className="p-6 border-2 border-primary/20 bg-primary/5">
          <h3 className="font-semibold mb-2">Boost Engagement</h3>
          <p className="text-sm text-muted-foreground">
            Get AI-powered suggestions and analytics to optimize your content strategy
          </p>
        </Card>
      </div>

      <Button asChild size="lg" className="mt-8">
        <Link href="/questions">
          Let's Get Started →
        </Link>
      </Button>
    </div>
  )
} 