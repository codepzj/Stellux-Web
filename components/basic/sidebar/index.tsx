import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar'

import { NavMain } from './nav-main'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { DocTitle } from './title'
import { DocTreeItem } from '@/utils/document-tree'
import { Button } from '@heroui/button'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { ThemeSwitcher } from '@/components/basic/theme-switcher'

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
              <Button variant="light" size="sm" className="w-full justify-start px-2 my-2">
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
      <SidebarFooter>
        <div className="flex items-center justify-center">
          <ThemeSwitcher />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
