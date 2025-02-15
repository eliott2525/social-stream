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
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Why Choose Our Scheduling Tool?
        </h2>
        <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <Share2Icon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Post Everywhere
            </ItemTitle>
            <ItemDescription>
              Seamlessly publish content across all major platforms with a single click. Save time and reach a wider audience effortlessly.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <CalendarClockIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Optimal Scheduling
            </ItemTitle>
            <ItemDescription>
              Schedule your posts for the perfect time to maximize engagement. Ensure your content reaches your audience when they're most active.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <PencilRulerIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Platform Customization
            </ItemTitle>
            <ItemDescription>
              Tailor your content for each platform to suit different audience preferences. Stand out with personalized posts that resonate with your followers.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <VideoIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Viral Video Studio
            </ItemTitle>
            <ItemDescription>
              Create engaging videos using our studio templates designed to go viral. Boost your visibility and attract new followers with eye-catching content.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <TrendingUpIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Time-Saving Efficiency
            </ItemTitle>
            <ItemDescription>
              Streamline your content strategy and save hours each week. Focus on creating quality content while we handle the rest.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <SettingsIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              User-Friendly Interface
            </ItemTitle>
            <ItemDescription>
              Intuitive design makes scheduling and customizing content a breeze. No technical skills required – just create and post.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <UsersIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Team Collaboration
            </ItemTitle>
            <ItemDescription>
              Work seamlessly with your team to create, review, and schedule content. Perfect for agencies and marketing teams.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <BarChart3Icon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Analytics & Insights
            </ItemTitle>
            <ItemDescription>
              Track performance across all platforms in one dashboard. Make data-driven decisions to improve your social media strategy.
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
}
