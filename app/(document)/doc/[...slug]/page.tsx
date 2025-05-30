"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getDocumentByID, getDocumentTreeByID, getRootDocumentByID } from "@/api/document";
import { getTableOfContents, TableOfContents } from "@/lib/toc";
import { convertToTreeData } from "@/utils/convert";
import useDocStore from "@/store/doc";

import { Markdown } from "@/components/Md";
import { ScrollToc } from "@/components/Toc";
import { DocumentRootVO, DocumentVO } from "@/types/document";
import { Spinner } from "@heroui/spinner";

export default function DocPage() {
    const params = useParams();
    const [alias, document_id, leaf_id] = params.slug as string[] || [];

    const { docId, setDoctree, setDocTitle, setDocThumbnail } = useDocStore();
    const [rootDocument, setRootDocument] = useState<DocumentRootVO | null>(null);
    const [document, setDocument] = useState<DocumentVO | null>(null);
    const [toc, setToc] = useState<TableOfContents>({ items: [] });

    useEffect(() => {
        if (!document_id) return;

        const fetchDocTree = async () => {
            if (docId === document_id) return; // 不重复加载文档树
            try {
                const res = await getDocumentTreeByID(document_id);
                const treeItems = convertToTreeData(res.data, alias);
                setDoctree(document_id, treeItems);
            } catch (error) {
                console.error("获取文档树失败:", error);
            }
        };

        const fetchRoot = async () => {
            if (!leaf_id) {
                try {
                    const res = await getRootDocumentByID(document_id);
                    setRootDocument(res.data);
                    setDocument(null); // 清空之前的子文档数据
                    setDocTitle(res.data.title); // 设置文档标题
                    setDocThumbnail(res.data.thumbnail); // 设置文档缩略图
                } catch (error) {
                    console.error("获取根文档失败:", error);
                }
            }
        };

        const fetchLeaf = async () => {
            if (leaf_id) {
                try {
                    const res = await getDocumentByID(leaf_id);
                    const doc = res.data;
                    const toc = await getTableOfContents(doc.content);
                    setDocument(doc);
                    setToc(toc);
                    setRootDocument(null); // 清空根文档数据
                } catch (error) {
                    console.error("获取子文档失败:", error);
                }
            }
        };

        fetchDocTree();
        fetchRoot();
        fetchLeaf();
    }, [alias, document_id, leaf_id, docId, setDoctree]);

    if (!document_id) return null;

    if (!leaf_id && !rootDocument) return <Loading />;
    if (leaf_id && !document) return <Loading />;


    const renderTitle = leaf_id ? document?.title : rootDocument?.title;
    const renderContent = leaf_id ? document?.content : rootDocument?.description;

    return (
        <div className="relative w-full mx-auto text-default-600">
            <div className="w-full flex flex-col md:flex-row justify-center gap-2">
                <div className="flex-1 md:max-w-xl lg:max-w-3xl mr-6 mb-20">
                    <div className="text-3xl font-bold font-sans py-4 mb-12 text-title">{renderTitle}</div>
                    <Markdown className="pl-4 break-words overflow-x-auto" content={renderContent || ""} />
                </div>
                {leaf_id && (
                    <div className="hidden lg:block sticky top-4 h-[calc(100vh-1rem)] w-48 shrink-0">
                        <ScrollToc toc={toc} />
                    </div>
                )}
            </div>
        </div>
    );
}

function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner classNames={{ label: "text-foreground mt-4" }} label="加载中..." variant="wave" />
        </div>
    );
}
