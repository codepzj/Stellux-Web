"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PostIcon, DocIcon } from "@/components/SvgIcon";
import clsx from "classnames";

export const LinkGroup = () => {
    const pathname = usePathname();

    const isPost = pathname === "/" || pathname.includes("/post");
    const isDoc = pathname.includes("/doc");

    return (
        <div className="grid grid-cols-4 gap-2">
            <Link
                href="/"
                className={clsx(
                    "h-12 w-full flex items-center justify-center border-0.5 border-default-500 rounded-xl hover:bg-default-500/15 cursor-pointer",
                    { "bg-default-500/15": isPost }
                )}
            >
                <PostIcon
                    size={28}
                    className={clsx("cursor-pointer", {
                        "text-[#1bcdfc]": isPost,
                        "text-default-500": !isPost
                    })}
                />
            </Link>
            <Link
                href="/doc"
                className={clsx(
                    "h-12 w-full flex items-center justify-center border-0.5 border-default-500 rounded-xl hover:bg-default-500/15 cursor-pointer",
                    { "bg-default-500/15": isDoc }
                )}
            >
                <DocIcon
                    size={28}
                    className={clsx("cursor-pointer", {
                        "text-[#3dc550]": isDoc,
                        "text-default-500": !isDoc
                    })}
                />
            </Link>
        </div>
    );
}
