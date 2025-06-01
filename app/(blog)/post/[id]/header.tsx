"use client"

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs"
import { Card, CardFooter } from "@heroui/card"
import { Link } from "@heroui/link"
import { Divider } from "@heroui/divider"
import dayjs from "dayjs"

export default function PostHeader({
    title,
    created_at,
    updated_at,
}: {
    title: string
    created_at: string
    updated_at: string
}) {
    return (
        <Card className="w-full px-2 mt-2 mb-4 pb-0 shadow-sm bg-default-100 dark:bg-default-100/70" disableAnimation>
            <div className="px-3 pt-3">
                <Breadcrumbs separator="/" className="w-full">
                    <BreadcrumbItem>
                        <Link
                            className="text-sm text-default-700 font-semibold"
                            color="foreground"
                            href="/"
                        >
                            主页
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link
                            className="text-sm text-default-700 font-semibold"
                            color="foreground"
                            href="/"
                        >
                            文章
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumbs>


            </div>
            <div className="px-3 py-2 group flex items-center gap-2 text-sm cursor-pointer">
                <span>
                    发布于&nbsp;
                    <span className="text-default-500">
                        {dayjs(created_at).format("YYYY-MM-DD")}
                    </span>
                </span>
                <Divider orientation="vertical" className="h-4 w-0.5 hidden group-hover:block" />
                <span className="hidden group-hover:block">
                    更新于&nbsp;
                    <span className="text-default-500">
                        {dayjs(updated_at).format("YYYY-MM-DD")}
                    </span>
                </span>
            </div>

            <CardFooter className="px-3 pt-8">
                <h1 className="text-3xl font-bold font-sans">{title}</h1>
            </CardFooter>
        </Card>
    )
}
