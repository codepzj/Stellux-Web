"use client";

import { Modal, ModalContent } from "@heroui/modal";
import { Input } from "@heroui/input";
import { SearchLinearIcon } from "@/components/SvgIcon";
import { useEffect, useState } from "react";
import { getDocumentByKeyword } from "@/api/document";
import NextLink from "next/link";
import { DocumentVO } from "@/types/doc";
import { Code } from "@heroui/code";

export default function DocSearchModal({ alias, id, docSearchOpen, onDocSearchClose }: { alias: string, id: string, docSearchOpen: boolean, onDocSearchClose: () => void }) {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState<DocumentVO[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const handler = setTimeout(async () => {
            if (!keyword.trim()) {
                setResults([]);
                setLoading(false);
                return;
            }
            setLoading(true);
            try {
                const res = await getDocumentByKeyword({ keyword, document_id: id });
                setResults(res.data || []);
            } finally {
                setLoading(false);
            }
        }, 300);
        return () => clearTimeout(handler);
    }, [keyword]);

    const highlight = (text: string, key: string) => {
        const parts = text.split(new RegExp(`(${key})`, "gi"));
        return parts.map((p, i) =>
            p.toLowerCase() === key.toLowerCase() ? (
                <mark key={i} className="bg-yellow-300 text-black px-1 rounded">{p}</mark>
            ) : (
                <span key={i}>{p}</span>
            )
        );
    };

    const handleClose = () => {
        setKeyword("");
        setResults([]);
        onDocSearchClose();
    };

    return (
        <Modal className="cursor-pointer" isOpen={docSearchOpen} onOpenChange={handleClose} size="xl" placement="top" shouldBlockScroll={false}>
            <ModalContent>
                <div className="px-4 pt-10 pb-4 space-y-6 bg-transparent rounded-xl">
                    <Code color="secondary" className="text-[10px] absolute top-2 left-2">
                        ESC
                    </Code>
                    <Input
                        placeholder="输入关键词搜索..."
                        startContent={<SearchLinearIcon size={18} />}
                        size="lg"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        classNames={{
                            inputWrapper: "bg-default-100 dark:bg-default-500/10 !ring-0 !ring-transparent !ring-offset-0",
                            input: "text-base",
                        }}

                        autoFocus
                    />
                    <div className="max-h-[400px] overflow-y-auto">
                        {loading ? (
                            <div className="text-center text-default-500">加载中...</div>
                        ) : results.length > 0 ? (
                            results.map(doc => (
                                <NextLink key={doc.id} href={`/doc/${alias}/${id}/${doc.id}`} onClick={handleClose}>
                                    <div className="p-3 mb-2 rounded-lg bg-default-100/70 dark:bg-default-500/10 hover:bg-default-200 dark:hover:bg-white/10 transition cursor-pointer border border-transparent hover:border-default-300 dark:hover:border-zinc-800">
                                        <div className="font-medium text-base text-foreground line-clamp-2">
                                            {highlight(doc.title, keyword)}
                                        </div>
                                    </div>
                                </NextLink>
                            ))
                        ) : (
                            keyword && <div className="text-center text-default-500">暂无结果 🕵️‍♂️</div>
                        )}
                    </div>
                </div>
            </ModalContent>
        </Modal>
    );
}
