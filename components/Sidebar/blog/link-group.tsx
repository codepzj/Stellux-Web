"use client";

import { usePathname } from "next/navigation";
import { PostIcon, DocIcon, AboutIcon } from "@/components/SvgIcon";
import clsx from "classnames";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";

export const LinkGroup = () => {
    const { setOpenMobile } = useSidebar();
    const router = useRouter();
    const pathname = usePathname();

    const isPost = pathname === "/" || pathname.includes("/post");
    const isDoc = pathname.includes("/doc");
    const isAbout = pathname.includes("/about");
    return (
        <div className="flex flex-col gap-2">
            <Button
                variant="light"
                className={clsx("flex items-center gap-2 justify-start cursor-pointer rounded-xl", {
                    "bg-default-500/20": isPost
                })} 
                onPress={() => {
                    router.push("/");
                    setOpenMobile(false);
                }}
            >
                <PostIcon
                    aria-label="文章"
                    className="text-default-500"
                />
                <span>文章</span>
            </Button>
            <Button
                variant="light"
                className={clsx("flex items-center gap-2 justify-start cursor-pointer rounded-xl", {
                    "bg-default-500/20": isDoc
                })}
                onPress={() => {
                    router.push("/doc");
                    setOpenMobile(false);
                }}
            >
                <DocIcon
                    aria-label="文档"
                    className="text-default-500"
                />
                <span>文档</span>
            </Button>
            <Button
                variant="light"
                className={clsx("flex items-center gap-2 justify-start cursor-pointer rounded-xl", {
                    "bg-default-500/20": isAbout
                })}
                onPress={() => {
                    router.push("/about");
                    setOpenMobile(false);
                }}
            >
                <AboutIcon aria-label="关于" className="text-default-500" />
                <span>关于</span>
            </Button>
        </div>
    );
}
