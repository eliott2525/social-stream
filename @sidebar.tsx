import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import {
  PlusCircle,
  FileText,
  CalendarClock,
  History,
  Video,
  Settings,
  Plus,
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any additional props here
}

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex h-screen w-[300px] flex-col border-r bg-sidebar text-sidebar-foreground",
        className
      )}
      {...props}
    >
      {/* Logo and App Name */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="h-8 w-8 rounded-full bg-brand/20" />
        <span className="text-lg font-semibold">{siteConfig.name}</span>
      </div>

      {/* Create Post Button */}
      <div className="px-4 py-2">
        <Button className="w-full justify-start gap-2" size="lg">
          <PlusCircle className="h-5 w-5" />
          Create Post
        </Button>
      </div>

      <Separator className="my-2" />

      {/* Content Section */}
      <div className="flex-1 space-y-1 px-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          asChild
        >
          <a href="/dashboard/content">
            <Plus className="h-4 w-4" />
            Content
          </a>
        </Button>

        {/* Content Sub-items */}
        <div className="ml-4 space-y-1">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-muted-foreground"
            asChild
          >
            <a href="/dashboard/content/new">
              <FileText className="h-4 w-4" />
              New Post
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-muted-foreground"
            asChild
          >
            <a href="/dashboard/content/scheduled">
              <CalendarClock className="h-4 w-4" />
              Scheduled Posts
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-muted-foreground"
            asChild
          >
            <a href="/dashboard/content/past">
              <History className="h-4 w-4" />
              Past Posts
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-muted-foreground"
            asChild
          >
            <a href="/dashboard/content/studio">
              <Video className="h-4 w-4" />
              Studio
            </a>
          </Button>
        </div>
      </div>

      <Separator className="my-2" />

      {/* Configuration */}
      <div className="px-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          asChild
        >
          <a href="/dashboard/settings">
            <Settings className="h-4 w-4" />
            Configuration
          </a>
        </Button>
      </div>

      {/* User Profile */}
      <div className="mt-auto p-4">
        <div className="flex items-center gap-3 rounded-lg border bg-card p-3">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium">John Doe</p>
            <p className="truncate text-xs text-muted-foreground">Pro Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
} 