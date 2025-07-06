"use client";

import { SearchProvider } from "@/context/search-context";
import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/layout/app-sidebar";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
  ...props
}: React.ComponentProps<typeof SidebarProvider>) {
  return (
    <SearchProvider>
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
            "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh"
          )}
        >
          <div className="flex flex-col min-h-[100dvh] max-w-4xl 2xl:max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </SearchProvider>
  );
}
