import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "The Challenge",
  description: "Understanding your social media challenges",
}

const challenges = [
  {
    icon: "⏰",
    title: "Time-Consuming",
    description: "Managing multiple social platforms takes hours of your valuable time"
  },
  {
    icon: "🎯",
    title: "Inconsistent Results",
    description: "Posting randomly leads to poor engagement and slow growth"
  },
  {
    icon: "🤹",
    title: "Overwhelming",
    description: "Juggling content creation, scheduling, and analytics is exhausting"
  }
]

const solutions = [
  {
    icon: "⚡️",
    title: "Save 10+ Hours Weekly",
    description: "Schedule a week's worth of content in minutes"
  },
  {
    icon: "📈",
    title: "Grow 3x Faster",
    description: "Our AI helps optimize your posting schedule and content"
  },
  {
    icon: "🎯",
    title: "Stay Consistent",
    description: "Never miss a post with our automated scheduling"
  }
]

export default function ProblemAwarenessPage() {
  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="space-y-2">
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary w-3/4 h-2 rounded-full" />
        </div>
        <p className="text-sm text-muted-foreground text-center">Step 3 of 4</p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            You're not alone in this challenge
          </h1>
          <p className="text-muted-foreground">
            Many social media managers face these common problems
          </p>
        </div>

        {/* Challenges */}
        <div className="grid gap-4">
          {challenges.map((challenge) => (
            <Card key={challenge.title} className="p-6 border-destructive/20 bg-destructive/5">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{challenge.icon}</div>
                <div>
                  <h3 className="font-semibold">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">
            Here's how we can help
          </h2>
          <p className="text-muted-foreground">
            Join 100,000+ social media managers who've solved these challenges
          </p>
        </div>

        {/* Solutions */}
        <div className="grid gap-4">
          {solutions.map((solution) => (
            <Card key={solution.title} className="p-6 border-primary/20 bg-primary/5">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{solution.icon}</div>
                <div>
                  <h3 className="font-semibold">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button variant="ghost" asChild>
          <Link href="/onboarding/personalization">
            ← Back
          </Link>
        </Button>
        <Button asChild>
          <Link href="/onboarding/pricing">
            See Plans →
          </Link>
        </Button>
      </div>
    </div>
  )
} 