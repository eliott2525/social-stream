import { Section } from "../../ui/section";
import { siteConfig } from "@/config/site";

export default function Stats() {
  return (
    <Section>
      <div className="container mx-auto max-w-[960px]">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              Supporting
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                {siteConfig.stats.platforms}
              </div>
              <div className="text-2xl font-semibold text-brand">+</div>
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              major social media platforms
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              Trusted by
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                {siteConfig.stats.users}
              </div>
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              active users worldwide
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              Over
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                {siteConfig.stats.posts}
              </div>
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              posts scheduled and published
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              Driving
            </div>
            <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
              {siteConfig.stats.engagement}
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              total user engagements
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
