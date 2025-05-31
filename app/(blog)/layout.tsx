import { SidebarProvider } from "@/components/ui/sidebar";
import { BlogSidebar } from "@/components/Sidebar/blog/sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Tool from "@/components/Tool/blog";

// 布局组件
export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider style={{ "--sidebar-width": "272px" } as React.CSSProperties}>
            <BlogSidebar className="sticky top-0" />
            <SidebarInset>
                <div className="flex flex-col gap-4 p-0 md:p-2 pt-0">
                    {children}
                </div>
                {/* 博客工具栏 */}
                <Tool className="flex z-[999] fixed top-[70%] right-[2%]" />
            </SidebarInset>
        </SidebarProvider>
    )
}