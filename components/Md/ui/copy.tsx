"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@heroui/button";
import { cn } from "@/lib/utils";
import classNames from "classnames";
import { toast } from "sonner";

const CopyButton = ({ id, className }: { id: string, className?: string }) => {
  const [copied, setCopited] = useState(false);

  const onCopy = async () => {
    try {
      setCopited(true);
      const text = document.getElementById(id)!.innerText;
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setCopited(false);
      }, 1500);
      toast.success("复制成功");
    } catch (error) {
      console.log(error);
      toast.error("复制失败");
    }
  };

  return (
    <Button
      onPress={onCopy}
      isIconOnly
      aria-label="Copy"
      variant="light"
      className={cn("p-0 w-8 h-8 min-w-8 min-h-8 rounded-md cursor-pointer hover:bg-default-100 dark:hover:bg-default-500/10", className)}
      disableAnimation
    >
      {copied ? <Check className="transition-transform duration-300 text-green-500" size={16} /> : <Copy className="transition-transform duration-300" size={16} />}
    </Button>
  );
};

export default CopyButton;