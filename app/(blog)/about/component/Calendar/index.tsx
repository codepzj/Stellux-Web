"use client"

import { AboutConfigVO } from "@/types/config"
import GitHubCalendar from "react-github-calendar"
import { useTheme } from "next-themes"

export default ({ data }: { data: AboutConfigVO }) => {
    const { theme } = useTheme()

    return (
        <>
            <GitHubCalendar username={data.github_username} blockSize={10} colorScheme={theme === "dark" ? "dark" : "light"} hideTotalCount />
        </>
    )
}