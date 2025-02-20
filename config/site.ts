export const siteConfig = {
  name: "Social Stream",
  url: "https://socialstream.app",
  getStartedUrl: "/register",
  loginUrl: "/login",
  dashboardUrl: "/dashboard",
  ogImage: "https://socialstream.app/og.jpg",
  description:
    "Post, grow, and engage on all major platforms in seconds. No ridiculous price tag.",
  links: {
    twitter: "https://twitter.com/socialstream",
    facebook: "https://facebook.com/socialstream",
    instagram: "https://instagram.com/socialstream",
    email: "mailto:contact@socialstream.app",
  },
  pricing: {
    creator: "/pricing/creator",
    team: "/pricing/team",
    agency: "/pricing/agency",
  },
  stats: {
    platforms: 9,
    users: "10k+",
    posts: "1M+",
    engagement: "50M+",
    updated: "14 Feb 2024",
  },
};

export type SiteConfig = typeof siteConfig;
