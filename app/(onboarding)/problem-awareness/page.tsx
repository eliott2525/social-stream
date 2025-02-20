import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Target, Boxes, Zap, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "The Challenge",
  description: "Understanding your social media challenges",
}

const challenges = [
  {
    icon: <Clock className="w-6 h-6 text-destructive/70" />,
    title: "Time-Consuming",
    description: "Managing multiple social platforms takes hours of your valuable time"
  },
  {
    icon: <Target className="w-6 h-6 text-destructive/70" />,
    title: "Inconsistent Results",
    description: "Posting randomly leads to poor engagement and slow growth"
  },
  {
    icon: <Boxes className="w-6 h-6 text-destructive/70" />,
    title: "Overwhelming",
    description: "Juggling content creation, scheduling, and analytics is exhausting"
  }
]

const solutions = [
  {
    icon: <Zap className="w-6 h-6 text-primary/70" />,
    title: "Save 10+ Hours Weekly",
    description: "Schedule a week's worth of content in minutes"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary/70" />,
    title: "Grow 3x Faster",
    description: "Our AI helps optimize your posting schedule and content"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-primary/70" />,
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
                <div>{challenge.icon}</div>
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
                <div>{solution.icon}</div>
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
          <Link href="/personalization">
            ← Back
          </Link>
        </Button>
        <Button asChild>
          <Link href="/pricing">
            See Plans →
          </Link>
        </Button>
      </div>
    </div>
  )
} 