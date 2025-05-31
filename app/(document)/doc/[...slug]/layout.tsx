import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/Sidebar/doc/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export default function DocLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider style={{ "--sidebar-width": "272px" } as React.CSSProperties}>
            <DocSidebar className="sticky top-0" />
            <SidebarInset>
                <div className="flex flex-col gap-4 p-0 md:p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}