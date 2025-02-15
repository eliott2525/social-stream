import { Section } from "../../ui/section";
import TwitterLogo from "../../logos/social/twitter";
import FacebookLogo from "../../logos/social/facebook";
import InstagramLogo from "../../logos/social/instagram";
import PinterestLogo from "../../logos/social/pinterest";
import LinkedInLogo from "../../logos/social/linkedin";
import ThreadsLogo from "../../logos/social/threads";
import TikTokLogo from "../../logos/social/tiktok";
import YouTubeLogo from "../../logos/social/youtube";

export default function Logos() {
  const platforms = [
    { name: "X (Twitter)", icon: <TwitterLogo /> },
    { name: "Facebook", icon: <FacebookLogo /> },
    { name: "Instagram", icon: <InstagramLogo /> },
    { name: "LinkedIn", icon: <LinkedInLogo /> },
    { name: "TikTok", icon: <TikTokLogo /> },
    { name: "YouTube", icon: <YouTubeLogo /> },
    { name: "Pinterest", icon: <PinterestLogo /> },
    { name: "Threads", icon: <ThreadsLogo /> },
  ];

  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-12">
        <h2 className="text-center text-xl font-medium text-muted-foreground">
          Manage all your social media platforms in one place
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {platform.icon}
              <span className="text-sm font-medium">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
