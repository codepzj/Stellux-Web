"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { LinkGroup } from "./nav-group";
import { useAppConfig } from "@/context/app-provider";
import dynamic from "next/dynamic";
import { AvatarLink } from "@/components/business/avatar/avatar-link";
import { ThemeSwitcher } from "@/components/basic/theme-switcher";
import { BlogSearchProvider } from "@/app/(app)/blog/provider";
import { BlogSearchModal } from "@/app/(app)/blog/modal";
import { BlogSearch } from "@/app/(app)/blog/search";
import { Spacer } from "@heroui/spacer";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const config = useAppConfig();
  return (
    <BlogSearchProvider>
      <Sidebar collapsible="icon" variant="floating" {...props}>
        <SidebarHeader>
          <AvatarLink
            avatar={config?.siteAvatar || ""}
            author={config?.siteAuthor || ""}
          />
          <Spacer y={2} />
        </SidebarHeader>
        <SidebarContent>
          <div className="px-2">
            <BlogSearch />
            <Spacer y={4} />
            <LinkGroup />
          </div>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-2 mx-auto">
            <ThemeSwitcher />
          </div>
        </SidebarFooter>
      </Sidebar>
      <BlogSearchModal />
    </BlogSearchProvider>
  );
}
