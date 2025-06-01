import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Spacer } from "@heroui/spacer"
import { BlogSearch } from "./search"
import { LinkGroup } from "./link-group"
import { getBlogConfigAPI } from "@/api/config"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import Image from "next/image"

export async function BlogSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const blog_config = await getBlogConfigAPI().then(res => res.data);
  const { blog_avatar, blog_title, blog_subtitle } = blog_config || {};
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar" {...props}>
      <SidebarHeader className="p-4">
        <div className="w-full flex items-center justify-start gap-2">
          <Image
            className="w-14 h-14 cursor-pointer border-0.5 border-default-500 hover:scale-95 transition-all duration-500"
            src={blog_avatar}
            alt="blog_avatar"
            width={56}
            height={56}
          />
          <div className="flex flex-col gap-1 h-full justify-end">
            <h1 className="text-2xl font-bold font-sans mt-0.5">{blog_title}</h1>
            <p className="text-sm text-default-500">{blog_subtitle}</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 py-2" >
        <BlogSearch />
        <Spacer y={2} />
        <LinkGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-center items-center">
          <ThemeSwitcher />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
