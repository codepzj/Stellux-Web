"use client"

import GitHubCalendar from "react-github-calendar"
import { useTheme } from "next-themes"

export default () => {
    const { theme } = useTheme()

    return (
        <>
            <GitHubCalendar username="codepzj" colorScheme={theme === "dark" ? "dark" : "light"} hideTotalCount />
        </>
    )
}