"use client"

import { Card, CardBody, CardHeader } from "@heroui/card";
import { cn } from "@/lib/utils";
import { WikiIcon } from "@/components/SvgIcon";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DocumentRootVO } from "@/types/document";

export const DocumentCard = ({
    document,
    className,
}: {
    document: DocumentRootVO;
    className?: string;
}) => {
    const router = useRouter();

    return (
        <Card
            key={document.id}
            isHoverable
            isPressable
            className={cn(
                "p-6 rounded-2xl bg-default-50/30 dark:bg-default-100/70 transition-all shadow-md hover:shadow-md overflow-hidden max-w-3xl",
                className
            )}
            onPress={() => router.push(`/doc/${document.alias}/${document.id}`)}
        >
            <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="flex-1 min-w-0">
                    <CardHeader className="p-0 mb-4 flex items-center gap-2">

                        <WikiIcon className="w-5 h-5 text-primary" />
                        <span
                            className="text-base md:text-lg font-semibold truncate px-2 max-w-full text-title"
                            title={document.title}
                        >
                            {document.title}
                        </span>
                    </CardHeader>

                    <CardBody className="p-0 mb-4 md:min-h-8">
                        <p
                            className="text-sm text-description leading-relaxed px-2 max-w-full line-clamp-2 overflow-hidden text-ellipsis"
                            title={document.description}
                        >
                            {document.description}
                        </p>
                    </CardBody>
                </div>

                {/* Right side: Image */}
                <div className="hidden md:flex justify-center items-center flex-shrink-0">
                    {document.thumbnail && (
                        <Image
                            src={document.thumbnail}
                            alt={document.title}
                            width={96}
                            height={96}
                            loading="lazy"
                            className="max-h-24 object-contain"
                        />
                    )}
                </div>
            </div>
        </Card>
    )
}