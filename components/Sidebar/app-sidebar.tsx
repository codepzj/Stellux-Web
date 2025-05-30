"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { NavMain } from "./nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Avatar } from "@heroui/avatar"
import { Spacer } from "@heroui/spacer"
import { Card, CardBody } from "@heroui/card"
import { SidebarInput } from "./input"
import { LinkGroup } from "./link-group"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import useDocStore from "@/store/doc"
import { DocTitle } from "./doc-title"
import { SearchForm } from "./search-form"
import { useEffect, useState } from "react"
import { BlogConfigVO } from "@/types/config"
import { Skeleton } from "@heroui/skeleton"
import { getBlogConfigAPI } from "@/api/config"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { doctree } = useDocStore();
  const [blog_config, setBlogConfig] = useState<BlogConfigVO>();
  const { docTitle, docThumbnail } = useDocStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const fetchBlogConfig = async () => {
      const data = await getBlogConfigAPI().then(res => res.data);
      setBlogConfig(data);
    }
    fetchBlogConfig();
    setMounted(true);
  }, []);
  const { blog_avatar, blog_title, blog_subtitle, blog_welcome, blog_motto } = blog_config || {};
  if (!pathname.includes("/doc/")) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader className="p-4">
          {mounted ? (
            <div className="w-full flex items-center justify-start gap-2">
              <Avatar
                className="w-14 h-14 cursor-pointer border-0.5 border-default-500 hover:scale-95 transition-all duration-500"
                src={blog_avatar}
                showFallback
              />
              <div className="flex flex-col gap-1 h-full justify-end">
                <h1 className="text-2xl font-bold font-sans mt-0.5">{blog_title}</h1>
                <p className="text-sm text-default-500">{blog_subtitle}</p>
              </div>
            </div>
          ) : (
            <div className="w-full flex items-center justify-start gap-2">
              <Skeleton className="w-14 h-14 rounded-full" />
              <div className="flex flex-col gap-3 h-full justify-end">
                <Skeleton className="w-28 h-6 rounded-lg" />
                <Skeleton className="w-20 h-4 rounded-lg" />
              </div>
            </div>
          )}
        </SidebarHeader>
        <SidebarContent className="px-4 py-2" >
          <SidebarInput />
          <Spacer y={2} />
          <LinkGroup />
          <Spacer y={2} />

          {blog_welcome && <div>
            <span className="text-sm pl-3 py-2 text-default-600">欢迎，旅行者🙌</span>
            <Spacer y={2} />
            <Card isHoverable disableAnimation className="shadow-none bg-white dark:bg-default-100/70 rounded-xl">
              <CardBody>
                <p className="text-sm text-description">{blog_welcome}</p>
              </CardBody>
            </Card>
          </div>}
          <Spacer y={2} />
          {blog_motto && <div>
            <span className="text-sm pl-3 py-2 text-default-600">座右铭</span>
            <Spacer y={2} />
            <Card isHoverable disableAnimation className="shadow-none bg-white dark:bg-default-100/70 rounded-xl">
              <CardBody>
                <p className="text-sm text-description">{blog_motto}</p>
              </CardBody>
            </Card>
          </div>}

        </SidebarContent>
        <SidebarFooter>
          <div className="flex justify-center items-center">
            <ThemeSwitcher />
          </div>
        </SidebarFooter>
      </Sidebar>
    )
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <DocTitle thumbnail={docThumbnail} title={docTitle || blog_title || "文档"} />
      </SidebarHeader>
      <SidebarContent>
        <SearchForm />
        <NavMain items={doctree} />
      </SidebarContent>
    </Sidebar>
  )
}
