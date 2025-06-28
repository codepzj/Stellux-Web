import { NextRequest, NextResponse } from "next/server";

const faviconUrl = "https://www.baidu.com/favicon.ico";

// 中间件，用于拦截友链页面，跳转到百度
export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    if (pathname === "/favicon.ico") {
        return NextResponse.redirect(faviconUrl);
    }
}