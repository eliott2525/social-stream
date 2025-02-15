import {
  Share2Icon,
  CalendarClockIcon,
  PencilRulerIcon,
  TrendingUpIcon,
  VideoIcon,
  SettingsIcon,
  UsersIcon,
  BarChart3Icon,
} from "lucide-react";
import { Section } from "../../ui/section";

const features = [
  {
    title: "Post Everywhere",
    description: "Seamlessly publish content across all major platforms with a single click. Save time and reach a wider audience effortlessly.",
    icon: <Share2Icon className="h-6 w-6 stroke-1" />,
  },
  {
    title: "Optimal Scheduling",
    description: "Schedule your posts for the perfect time to maximize engagement. Ensure your content reaches your audience when they're most active.",
    icon: <CalendarClockIcon className="h-6 w-6 stroke-1" />,
  },
  {
    title: "Platform Customization",
    description: "Tailor your content for each platform to suit different audience preferences. Stand out with personalized posts that resonate with your followers.",
    icon: <PencilRulerIcon className="h-6 w-6 stroke-1" />,
  },
  {
    title: "Viral Video Studio",
    description: "Create engaging videos using our studio templates designed to go viral. Boost your visibility and attract new followers with eye-catching content.",
    icon: <VideoIcon className="h-6 w-6 stroke-1" />,
  },
  {
    title: "Time-Saving Efficiency",
    description: "Streamline your content strategy and save hours each week. Focus on creating quality content while we handle the rest.",
    icon: <TrendingUpIcon className="h-6 w-6 stroke-1" />,
  },
  {
    title: "User-Friendly Interface",
    description: "Intuitive design makes scheduling and customizing content a breeze. No technical skills required – just create and post.",
    icon: <SettingsIcon className="h-6 w-6 stroke-1" />,
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team to create, review, and schedule content. Perfect for agencies and marketing teams.",
    icon: <UsersIcon className="h-6 w-6 stroke-1" />,
  },
  {
    title: "Analytics & Insights",
    description: "Track performance across all platforms in one dashboard. Make data-driven decisions to improve your social media strategy.",
    icon: <BarChart3Icon className="h-6 w-6 stroke-1" />,
  },
];

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Why Choose Our Scheduling Tool?
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-lg border bg-card p-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand/20 hover:-rotate-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative flex h-full flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold transition-colors duration-300 group-hover:text-brand">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                
                <div className="pt-4">
                  <div className="text-muted-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-brand">
                    {feature.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
