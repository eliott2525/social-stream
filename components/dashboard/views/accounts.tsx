"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Check, ExternalLink } from "lucide-react";

// Custom social media icons as components
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.013-5.392 2.866-9.587 7.66-11.118C11.474-.001 14.316-.171 17.12.537c2.548.638 4.7 2.012 6.28 3.982C24.445 5.725 25 7.131 25 8.574c0 1.236-.401 2.379-1.13 3.222-.77.887-1.793 1.363-2.942 1.373-.772.007-1.512-.192-2.15-.575-.391-.233-.656-.465-.785-.643l-.246-.35-.241.354c-.273.401-.688.937-1.228 1.517-1.035 1.113-2.159 1.978-3.367 2.574-1.314.65-2.677.98-4.064.98h-.008l-.016.968v.062c.019 1.958.457 3.397 1.316 4.294.953.993 2.422 1.493 4.367 1.493h.007c1.272-.009 2.516-.209 3.694-.594.141-.046.293.032.338.176.045.143-.031.298-.172.343-1.239.402-2.548.613-3.89.622zm-1.808-8.06c1.272 0 2.526-.31 3.737-.922 1.018-.514 1.982-1.266 2.877-2.236.595-.644 1.037-1.214 1.309-1.611.271-.397.396-.557.404-.563.08-.092.711-.772 1.947-.772h.014c.777-.006 1.483-.331 2.022-.935.504-.584.775-1.353.775-2.194 0-1.092-.429-2.155-1.271-3.163-1.415-1.764-3.324-2.994-5.604-3.57-2.597-.658-5.226-.505-7.148.418-4.291 1.367-6.875 5.138-6.887 10.051v.062c0 3.264.77 5.875 2.214 7.601 1.587 1.898 3.951 2.902 7.171 2.924.74-.005 1.448-.069 2.124-.19.144-.026.28.072.306.219.026.146-.069.286-.212.312-.709.128-1.451.195-2.225.2-3.448-.024-6.017-1.107-7.759-3.193-1.577-1.887-2.419-4.676-2.419-8.06v-.062c.013-5.261 2.791-9.339 7.412-10.822 2.089-.999 4.905-1.162 7.689-.459 2.459.622 4.539 1.968 6.079 3.885.967 1.157 1.473 2.405 1.473 3.72 0 1.067-.353 2.055-1.016 2.811-.711.816-1.666 1.279-2.702 1.286h-.016c-1.7 0-2.571.952-2.717 1.164-.042.061-.167.221-.439.618-.296.432-.763 1.03-1.391 1.712-1.779 1.926-3.938 2.902-6.426 2.902h-.006c-2.763.004-4.423 1.389-4.939 4.122-.052.277-.083.547-.093.802-.01.255-.009.511.001.741.02 1.704.377 2.938 1.065 3.671.807.859 2.047 1.266 3.796 1.248.901-.006 1.781-.134 2.615-.381.142-.042.291.042.333.187.042.145-.041.298-.183.34-.889.262-1.825.397-2.784.403-1.94.02-3.392-.471-4.371-1.507-1.049-.872-1.491-2.291-1.513-4.249-.011-.246-.012-.52-.001-.791.011-.271.044-.558.099-.852.589-3.114 2.564-4.751 5.674-4.756h.006z"/>
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.217-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-7a8.16 8.16 0 004.65 1.48V7.1a4.84 4.84 0 01-1.2.59z"/>
    </svg>
  );
}

const platforms = [
  {
    name: "Twitter",
    icon: Twitter,
    description: "Connect your Twitter account to schedule and post tweets.",
    connected: true,
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Share photos and stories directly to Instagram.",
    connected: false,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    description: "Post updates to your LinkedIn profile or company page.",
    connected: true,
  },
  {
    name: "Facebook",
    icon: Facebook,
    description: "Connect to your Facebook profile or manage your pages.",
    connected: false,
  },
  {
    name: "YouTube",
    icon: Youtube,
    description: "Manage your YouTube channel and schedule video posts.",
    connected: false,
  },
  {
    name: "Threads",
    icon: ThreadsIcon,
    description: "Share text-based updates on Meta's Threads platform.",
    connected: false,
  },
  {
    name: "Pinterest",
    icon: PinterestIcon,
    description: "Share your pins and manage your Pinterest boards.",
    connected: false,
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    description: "Create and schedule content for your TikTok account.",
    connected: false,
  },
];

const connectedAccounts = [
  {
    id: 1,
    platform: "Twitter",
    handle: "@johndoe",
    avatar: "https://github.com/shadcn.png",
    type: "Personal",
  },
  {
    id: 2,
    platform: "LinkedIn",
    handle: "John Doe",
    avatar: "https://github.com/shadcn.png",
    type: "Business",
  },
];

export function Accounts() {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Social Media Accounts</CardTitle>
        <CardDescription>Connect and manage your social media accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Available Platforms */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-muted-foreground">Available Platforms</h3>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-start space-x-4 rounded-lg border p-4"
                >
                  <platform.icon className="h-8 w-8 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium leading-none">{platform.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {platform.description}
                    </p>
                  </div>
                  <Button
                    variant={platform.connected ? "outline" : "default"}
                    className="ml-auto"
                  >
                    {platform.connected ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Connected
                      </>
                    ) : (
                      "Connect"
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Accounts */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-muted-foreground">Connected Accounts</h3>
            <div className="space-y-4">
              {connectedAccounts.map((account) => (
                <div
                  key={account.id}
                  className="flex items-center space-x-4 rounded-lg border p-4"
                >
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{account.platform}</p>
                    <p className="text-sm text-muted-foreground">
                      {account.handle} · {account.type}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {connectedAccounts.length === 0 && (
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <p className="text-muted-foreground">
                    No accounts connected yet
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 