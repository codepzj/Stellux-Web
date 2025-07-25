import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { DocSearchForm } from "./search-form";
import { NavMain } from "./nav-main";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DocTitle } from "./title";
import { DocTreeItem } from "@/utils/document-tree";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export async function DocSidebar({
  docTitle,
  docThumbnail,
  doctree,
  className,
  alias,
  document_id,
}: {
  docTitle: string;
  docThumbnail: string;
  doctree: DocTreeItem[];
  className?: string;
  alias: string;
  document_id: string;
}) {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar" className={className}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/document">
              <Button variant="ghost" size="icon" className="w-full justify-start">
                <ArrowLeftIcon className="w-4 h-4" />
                返回文档列表
              </Button>
            </Link>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <DocTitle docTitle={docTitle} docThumbnail={docThumbnail} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <DocSearchForm alias={alias} id={document_id} />
        <NavMain doctree={doctree} alias={alias} document_id={document_id} />
      </SidebarContent>
    </Sidebar>
  );
}
