import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'

import { NavMain } from './nav-main'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { DocTitle } from './title'
import { DocTreeItem } from '@/utils/document-tree'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

export async function DocSidebar({
  docTitle,
  doctree,
  className,
}: {
  docTitle: string
  doctree: DocTreeItem[]
  className?: string
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
              <DocTitle docTitle={docTitle} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain doctree={doctree} />
      </SidebarContent>
    </Sidebar>
  )
}
