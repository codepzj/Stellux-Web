"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavGroup } from "./nav-group";
import { NavUser } from "./nav-user";
import { sidebarData } from "./data";
import { useAppConfig } from "@/context/app-provider";
import dynamic from "next/dynamic";
import { AvatarLinkSkeleton } from "@/components/business/avatar/avatar-link";

const AvatarLink = dynamic(
  () => import("@/components/business/avatar/avatar-link"),
  {
    ssr: false,
    loading: () => <AvatarLinkSkeleton />,
  }
);

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const config = useAppConfig();
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        <AvatarLink avatar={config?.siteAvatar || ""} author={config?.siteAuthor || ""} />
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
