"use client";

import { Sidebar } from "@/components/dashboard/sidebar/index";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 bg-muted/80">
          <main className="h-full p-16">
            <div className="mx-auto max-w-6xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
} 