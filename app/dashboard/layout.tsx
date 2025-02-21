"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
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
  const pageName = pathname.split("/").pop() || "Dashboard";

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-1 flex-col w-full">
          {/* Top Navigation Bar */}
          <header className="flex h-16 items-center justify-between border-b px-6">
            <h1 className="text-xl font-semibold capitalize">{pageName}</h1>
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