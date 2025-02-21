"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentView = pathname.split("/").pop() || "new";

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex flex-1 flex-col w-full">
          {/* Top Navigation Bar */}
          <header className="flex h-16 items-center justify-between border-b px-6">
            <h1 className="text-xl font-semibold capitalize">{currentView}</h1>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button variant="ghost" size="icon">
                <UserCircle className="h-5 w-5" />
              </Button>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
} 