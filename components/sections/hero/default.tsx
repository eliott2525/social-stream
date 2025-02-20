"use client";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { Mockup } from "../../ui/mockup";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
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
        <div className="flex flex-1 flex-col gap-12">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight flex flex-col gap-4">
              <span>Unleash viral content.</span>
              <span>Dominate every platform.</span>
              <span className="relative overflow-hidden">
                <span className="relative z-10">Get millions of views.</span>
                <span 
                  className="absolute inset-0 bg-brand-foreground"
                  style={{ 
                    animation: "highlight 3s ease-out 1s forwards",
                    transform: "translateX(-100%)",
                    left: "-100%",
                    width: "200%"
                  }} 
                />
              </span>
            </h1>
          </div>

          {/* CTA Button */}
          <div className="relative">
            <div className="absolute -left-4 top-0 h-24 w-24 rounded-full bg-brand/20 blur-2xl" />
            <Button size="lg" className="relative h-14 px-8 text-lg" asChild>
              <a href={siteConfig.getStartedUrl} className="flex items-center gap-2">
                Start now
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="relative grid grid-cols-3 gap-8 border-t pt-8">
            <div className="absolute inset-0 -m-8 scale-[0.80] rounded-3xl bg-brand/5 blur-3xl transition-all duration-500 group-hover:scale-100" />
            {[
              { value: siteConfig.stats.platforms + "+", label: "Platforms supported" },
              { value: siteConfig.stats.users, label: "Active users" },
              { value: "4.5", label: "Average rating" }
            ].map((stat, index) => (
              <div key={index} className="group relative flex flex-col gap-2">
                {/* Hover effects container */}
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-brand/10 to-brand/5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100" />
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-brand/10 via-brand/5 to-transparent opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                
                {/* Glowing dot */}
                <div className="absolute -left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 animate-ping rounded-full bg-brand" />
                </div>

                {/* Content */}
                <div className={cn(
                  "relative z-10 text-4xl font-medium transition-all duration-300",
                  "bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent",
                  "group-hover:translate-x-2",
                  "group-hover:from-brand group-hover:to-brand/70"
                )}>
                  {stat.value}
                </div>
                <div className="relative z-10 text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-2">
                  {stat.label}
                </div>
              </div>
            ))}
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
