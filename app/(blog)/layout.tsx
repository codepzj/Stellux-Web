import { SidebarProvider } from "@/components/ui/sidebar";
import { BlogSidebar } from "@/components/Sidebar/blog/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import BlogSearchModal from "@/components/SearchModal/blog";
import BlogTool from "@/components/Tool/blog";

// 布局组件
export default async function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider style={{ "--sidebar-width": "256px" } as React.CSSProperties}>
            <BlogSidebar className="sticky top-0" />
            <SidebarInset>
                <div className="flex flex-col gap-4 p-0 md:p-2 pt-0 min-h-screen">
                    <div className="flex-1">{children}</div>
                </div>
                {/* 博客搜索组件 */}
                <BlogSearchModal />
                {/* 博客工具栏 */}
                <BlogTool className="flex z-[999] fixed top-[70%] right-[2%]" />
            </SidebarInset>
        </SidebarProvider>
    )
}