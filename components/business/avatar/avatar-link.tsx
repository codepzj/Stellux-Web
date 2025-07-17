"use client";

import Image from "next/image";

type AvatarLinkProps = {
  avatar: string;
  author: string;
};

export function AvatarLink(props: AvatarLinkProps) {
  return (
    <div className="w-full flex items-center justify-start gap-2">
      <Image
        className="w-14 h-14 cursor-pointer border-0.5 border-default-500 hover:scale-95 transition-all duration-500"
        src={props.avatar}
        alt={props.author + "的头像"}
        width={56}
        height={56}
      />
      <div className="flex flex-col gap-1 h-full justify-end">
        <h1 className="text-2xl font-bold font-sans mt-0.5">{props.author}</h1>
        <p className="text-sm text-default-500">{props.author}</p>
      </div>
    </div>
  );
}
