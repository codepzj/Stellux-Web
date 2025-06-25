"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <section
      className="h-screen flex items-center justify-center bg-background px-4 py-12"
      aria-labelledby="error-title"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 text-center lg:flex-row lg:items-start lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-primary">
          <AlertCircle className="w-16 h-16 text-destructive" />
          <h1 id="error-title" className="text-3xl font-bold lg:text-5xl">
            页面不存在
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-md">
            很抱歉，您访问的页面不存在。请检查网址是否正确，或点击下方按钮返回首页。
          </p>
          <Button
            size="lg"
            className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
            onClick={() => router.push("/")}
          >
            返回首页
          </Button>
        </div>
      </div>
    </section>
  );
}
