"use client";

import { Button } from "../../ui/button";
import { ModeToggle } from "../../ui/mode-toggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg transition-all duration-200",
        {
          "border-transparent shadow-lg": scrolled,
          "border-muted": !scrolled,
        }
      )}
    >
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-4">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <span className="text-xl font-bold">Social Stream</span>
        </button>

        {/* Main Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("platforms")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Platforms
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href="/register">Sign up</a>
            </Button>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
