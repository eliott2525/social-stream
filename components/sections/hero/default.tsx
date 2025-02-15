"use client";

import { Button } from "../../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "../../ui/section";
import { Mockup } from "../../ui/mockup";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/app-light.png";
      break;
    case "dark":
      src = "/app-dark.png";
      break;
    default:
      src = "/app-dark.png";
      break;
  }

  return (
    <Section className="pt-24 md:pt-32">
      <div className="mx-auto flex max-w-container flex-col gap-8 md:flex-row md:items-center md:gap-16 lg:gap-24">
        {/* Left Content */}
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl sm:leading-tight">
              Put your <span className="underline decoration-brand decoration-4">content</span> first
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Fast, user-friendly and engaging - streamline your social media presence and boost engagement across all platforms with your own branded dashboard.
            </p>
          </div>

          {/* Email Input and CTA */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter work email"
                className="h-12 w-full rounded-lg border bg-background px-4 py-2 text-foreground"
              />
            </div>
            <Button size="lg" className="h-12 px-8" asChild>
              <a href={siteConfig.getStartedUrl} className="flex items-center gap-2">
                Book a demo
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t pt-8">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-medium">{siteConfig.stats.platforms}+</div>
              <div className="text-sm text-muted-foreground">Platforms supported</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-medium">{siteConfig.stats.users}</div>
              <div className="text-sm text-muted-foreground">Active users</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-medium">4.5</div>
              <div className="text-sm text-muted-foreground">Average rating</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted shadow-2xl">
            <Mockup type="responsive">
              <Image
                src={src}
                alt="Social Stream dashboard preview"
                width={800}
                height={600}
                className="object-cover"
              />
            </Mockup>
          </div>
        </div>
      </div>
    </Section>
  );
}
