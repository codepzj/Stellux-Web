"use client";

import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

export function DocTitle({
  docTitle,
  docThumbnail,
}: {
  docTitle: string;
  docThumbnail: string;
}) {
  return (
    <>
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        {docThumbnail ? (
          <Image
            className="w-full h-full object-cover bg-white dark:bg-black rounded-xs border-0.5 border-default-500"
            src={docThumbnail}
            alt={docTitle}
            width={32}
            height={32}
          />
        ) : (
          <GalleryVerticalEnd className="size-4" />
        )}
      </div>
      <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-medium cursor-pointer">{docTitle}</span>
      </div>
    </>
  );
}
