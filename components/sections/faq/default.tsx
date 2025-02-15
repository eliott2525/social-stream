import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What platforms do you support?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                We support all major social media platforms including Twitter/X, Instagram, LinkedIn, Facebook, TikTok, YouTube, Bluesky, Threads, and Pinterest.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does the scheduling feature work?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                Our intelligent scheduling system analyzes the best posting times for maximum engagement across all your platforms. You can schedule posts for specific times or let our system optimize posting times automatically.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              What makes your content studio special?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Our content studio features a drag-and-drop interface with proven viral templates. You can create engaging videos and visuals optimized for each platform's requirements.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              How does your pricing work?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                We offer flexible, tiered pricing plans that cater to creators, small teams, and larger agencies. All plans come with our core features, and you can upgrade or downgrade at any time.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                For complete details about our pricing plans, check out{" "}
                <Link href="/pricing" className="text-foreground underline">
                  the pricing page
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Can I customize posts for each platform?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Yes! Our platform allows you to tailor your content for each social media platform while maintaining a single workflow. You can adjust text, images, and formatting to match each platform's best practices.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Do you support carousel posts?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Absolutely! You can create and schedule carousel posts for platforms that support them, such as Instagram and Facebook. Our content studio makes it easy to design multiple slides that tell your story effectively.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
