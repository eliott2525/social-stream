import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Target, MessageCircle, Bot, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Quick Questions",
  description: "Help us personalize your experience",
}

const goals = [
  {
    icon: <Target className="w-6 h-6 text-primary/70" />,
    title: "Grow My Audience",
    description: "Expand reach and gain more followers"
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-primary/70" />,
    title: "Increase Engagement",
    description: "Get more likes, comments, and shares"
  },
  {
    icon: <Bot className="w-6 h-6 text-primary/70" />,
    title: "Save Time",
    description: "Automate posting and content creation"
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary/70" />,
    title: "Track Performance",
    description: "Measure and optimize results"
  }
]

export default function QuestionsPage() {
  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="space-y-2">
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary w-1/4 h-2 rounded-full" />
        </div>
        <p className="text-sm text-muted-foreground text-center">Step 1 of 4</p>
      </div>

      {/* Question */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">
          What's your main goal?
        </h1>
        <p className="text-muted-foreground">
          This will help us tailor your experience
        </p>
      </div>

      {/* Options */}
      <div className="grid gap-4 sm:grid-cols-2">
        {goals.map((goal) => (
          <Card
            key={goal.title}
            className="p-6 cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <div className="space-y-2">
              <div>{goal.icon}</div>
              <h3 className="font-semibold">{goal.title}</h3>
              <p className="text-sm text-muted-foreground">
                {goal.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="ghost" asChild>
          <Link href="/congratulations">
            ← Back
          </Link>
        </Button>
        <Button asChild>
          <Link href="/personalization">
            Continue →
          </Link>
        </Button>
      </div>
    </div>
  )
} 