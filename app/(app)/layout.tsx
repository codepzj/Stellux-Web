"use client";

import { AppProvider } from "@/context/app-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/layout/app-sidebar";
import { cn } from "@/lib/utils";
import { Header } from "@/layout/header";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switcher";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: React.ComponentProps<typeof SidebarProvider>) {
  return (
    <AppProvider>
      <SidebarProvider>
        <AppSidebar />
        <div
          id="content"
          className={cn(
            "ml-auto w-full max-w-full",
            "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
            "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
            "sm:transition-[width] sm:duration-200 sm:ease-linear",
            "flex h-svh flex-col",
            "group-data-[scroll-locked=1]/body:h-full",
            "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh",
            "w-full max-w-6xl mx-auto"
          )}
        >
          <Header>
            <SidebarTrigger
              variant="outline"
              className="scale-125 sm:scale-100 md:hidden"
            />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <ThemeSwitch />
            </div>
          </Header>
          {children}
        </div>
      </SidebarProvider>
    </AppProvider>
  );
}
