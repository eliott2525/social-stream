"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import { PlusCircle, Search, FileText, CalendarClock, History, Video, Settings } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <UISidebar className={className} variant="sidebar" collapsible="icon">
      <SidebarHeader className="border-b">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="h-6 w-6 rounded-full bg-brand/20" />
          <span className="text-lg font-semibold">Social Stream</span>
        </div>

        {/* Create Post Button */}
        <div className="px-2 pb-2">
          <Button className="w-full justify-start gap-2" size="default">
            <PlusCircle className="h-4 w-4" />
            Create Post
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard/content/new"}
              >
                <Link href="/dashboard/content/new">
                  <FileText className="h-4 w-4" />
                  <span className="text-base">New Post</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard/content/scheduled"}
              >
                <Link href="/dashboard/content/scheduled">
                  <CalendarClock className="h-4 w-4" />
                  <span className="text-base">Scheduled Posts</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard/content/past"}
              >
                <Link href="/dashboard/content/past">
                  <History className="h-4 w-4" />
                  <span className="text-base">Past Posts</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard/content/studio"}
              >
                <Link href="/dashboard/content/studio">
                  <Video className="h-4 w-4" />
                  <span className="text-base">Studio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard/settings"}
              >
                <Link href="/dashboard/settings">
                  <Settings className="h-4 w-4" />
                  <span className="text-base">Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* User Profile */}
        <div className="border-t p-4">
          <div className="flex items-center gap-3 rounded-md bg-muted/50 p-2">
            <div className="h-8 w-8 rounded-full bg-muted" />
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-base font-medium">John Doe</p>
              <p className="truncate text-sm text-muted-foreground">Pro Plan</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </UISidebar>
  );
}