"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

type AvatarLinkProps = {
  avatar: string;
  author: string;
};

export default function AvatarLink(props: AvatarLinkProps) {
  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-12 w-12 rounded-lg">
        <AvatarImage
          src={props.avatar}
          alt={props.author + "的头像"}
        />
      </Avatar>
      <div className="flex items-center">{props.author}</div>
    </div>
  );
}

export const AvatarLinkSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
};
