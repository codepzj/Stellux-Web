// 二次封装shadcn-ui的button组件，作为全局图标按钮

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  hoverText?: string;
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          onClick={props.onClick}
          className={cn(
            "cursor-pointer relative -ml-2 flex h-9 w-9 items-center justify-center [&_svg]:size-5",
            props.className
          )}
        >
          <props.icon />
        </Button>
      </TooltipTrigger>
      {/* 悬浮提示 */}
      {props.hoverText && (
        <TooltipContent>
          <p>{props.hoverText}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
};
