"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Sidebar as UISidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { PlusCircle, FileText, CalendarClock, History, Video, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type DashboardView = "new" | "scheduled" | "past" | "studio" | "settings";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const currentView = pathname.split("/").pop() as DashboardView;

  return (
    <UISidebar className={cn("border-r-2 border-border/80", className)} variant="sidebar">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="h-6 w-6 rounded-full bg-brand/20" />
          <span className="text-xl font-semibold">Social Stream</span>
        </div>

        <div className="px-2 pb-2">
          <Button className="w-full justify-start gap-2 text-lg hover:bg-muted/80 transition-colors" size="default">
            <PlusCircle className="h-5 w-5" />
            Create Post
          </Button>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="my-2 bg-border/80 h-[2px]" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-base px-4">Content</SidebarGroupLabel>
          <SidebarMenu className="px-2">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={currentView === "new"}
                className={cn(
                  "text-base transition-colors pl-4",
                  currentView === "new"
                    ? "text-foreground hover:bg-muted/80"
                    : "text-muted-foreground hover:bg-muted/80"
                )}
              >
                <Link href="/dashboard/content/new">
                  <FileText className="h-4 w-4" />
                  <span>New Post</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={currentView === "scheduled"}
                className={cn(
                  "text-base transition-colors pl-4",
                  currentView === "scheduled"
                    ? "text-foreground hover:bg-muted/80"
                    : "text-muted-foreground hover:bg-muted/80"
                )}
              >
                <Link href="/dashboard/content/scheduled">
                  <CalendarClock className="h-4 w-4" />
                  <span>Scheduled Posts</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={currentView === "past"}
                className={cn(
                  "text-base transition-colors pl-4",
                  currentView === "past"
                    ? "text-foreground hover:bg-muted/80"
                    : "text-muted-foreground hover:bg-muted/80"
                )}
              >
                <Link href="/dashboard/content/past">
                  <History className="h-4 w-4" />
                  <span>Past Posts</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={currentView === "studio"}
                className={cn(
                  "text-base transition-colors pl-4",
                  currentView === "studio"
                    ? "text-foreground hover:bg-muted/80"
                    : "text-muted-foreground hover:bg-muted/80"
                )}
              >
                <Link href="/dashboard/content/studio">
                  <Video className="h-4 w-4" />
                  <span>Studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenu className="px-2">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={currentView === "settings"}
                className={cn(
                  "text-base transition-colors pl-4",
                  currentView === "settings"
                    ? "text-foreground hover:bg-muted/80"
                    : "text-muted-foreground hover:bg-muted/80"
                )}
              >
                <Link href="/dashboard/settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <div className="p-4">
          <div className="flex items-center gap-3 rounded-md bg-muted/50 p-2">
            <div className="h-8 w-8 rounded-full bg-muted" />
            <div className="flex-1 overflow-hidden">
              <p className="truncate font-medium">John Doe</p>
              <p className="truncate text-sm text-muted-foreground">Pro Plan</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </UISidebar>
  );
} 