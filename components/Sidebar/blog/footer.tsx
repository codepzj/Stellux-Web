import { House, Github, Rss, TrainFrontTunnel } from "lucide-react";
import Link from "next/link";
import { getAboutConfigAPI } from "@/api/config";
import { Tooltip } from "@heroui/tooltip";


export default async function Footer() {
    const about_config = await getAboutConfigAPI();
    const { github_username } = about_config.data;
    return (
        <div className="flex flex-row justify-center items-center gap-2">
            <Tooltip content="个人主页" placement="top">
                <Link href="/">
                    <House size={24} className="cursor-pointer text-default-500 hover:text-default-700 hover:bg-default-100 rounded-full p-1" />
                </Link>
            </Tooltip>
            <Tooltip content={`Github: ${github_username}`} placement="top">
                <Link href={`https://github.com/${github_username}`}>
                    <Github size={24} className="cursor-pointer text-default-500 hover:text-default-700 hover:bg-default-100 rounded-full p-1" />
                </Link>
            </Tooltip>
            <Tooltip content="RSS订阅" placement="top">
                <Link href="/feed.xml">
                    <Rss size={24} className="cursor-pointer text-default-500 hover:text-default-700 hover:bg-default-100 rounded-full p-1" />
                </Link>
            </Tooltip>
            <Tooltip content="开往" placement="top">
                <Link href="https://www.travellings.cn/go.html" target="_blank" rel="noopener noreferrer">
                    <TrainFrontTunnel size={24} className="cursor-pointer text-default-500 hover:text-default-700 hover:bg-default-100 rounded-full p-1" />
                </Link>
            </Tooltip>
        </div>
    );
}