import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import useDocStore from "@/store/doc"
import { DocTitle } from "./title"
import { DocSearchForm } from "./search-form"
import { NavMain } from "./nav-main"

export async function DocSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <DocTitle />
            </SidebarHeader>
            <SidebarContent>
                <DocSearchForm />
                <NavMain />
            </SidebarContent>
            <SidebarFooter>
                <div className="flex justify-center items-center">
                    <ThemeSwitcher />
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
