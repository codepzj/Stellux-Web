import { getDocumentByID, getRootDocumentByID } from "@/api/document";
import { getTableOfContents, TableOfContents } from "@/lib/toc";

import { Markdown } from "@/components/Md";
import { ScrollToc } from "@/components/Toc";
import { DocumentRootVO, DocumentVO } from "@/types/document";
import SetDocHandler from "./setDocHandler";


interface DocPageProps {
    params: Promise<{ slug: string[] }>;
}

export default async function DocPage({ params }: DocPageProps) {
    const { slug } = await params;
    const [alias, document_id, leaf_id] = slug as string[] || [];


    let rootDocument: DocumentRootVO | null = null;
    let document: DocumentVO | null = null;
    let toc: TableOfContents = { items: [] };

    // 如果leaf_id为空，则获取根文档
    if (!leaf_id) {
        const res = await getRootDocumentByID(document_id);
        rootDocument = res.data;
        document = null;
        toc = await getTableOfContents(rootDocument.description);
        return (
            <div className="relative w-full mx-auto text-default-600">
                <div className="w-full flex flex-col md:flex-row justify-center gap-2">
                    <div className="flex-1 md:max-w-xl lg:max-w-3xl md:mr-4 mb-20 px-0 md:px-4 mx-auto md:mx-0">
                        <div className="text-3xl font-bold font-sans py-4 mb-12 text-title">{rootDocument.title}</div>
                        <Markdown className="pl-2 md:pl-4 break-words overflow-x-auto" content={rootDocument.description || ""} />
                        <SetDocHandler alias={alias} document_id={document_id} />
                    </div>
                </div>
            </div>
        )
    }

    // 如果leaf_id不为空，则获取子文档
    const res = await getDocumentByID(leaf_id);
    document = res.data;
    toc = await getTableOfContents(document.content);
    return (
        <div className="relative w-full mx-auto text-default-600">
            <div className="w-full flex flex-col md:flex-row justify-center gap-2">
                <div className="flex-1 md:max-w-xl lg:max-w-3xl md:mr-4 mb-20 px-0 md:px-4 mx-auto md:mx-0">
                    <div className="text-3xl font-bold font-sans py-4 mb-12 text-title">{document.title}</div>
                    <Markdown className="pl-2 md:pl-4 break-words overflow-x-auto" content={document.content || ""} />
                </div>
                {leaf_id && (
                    <div className="hidden lg:block sticky top-4 h-[calc(100vh-1rem)] w-48 shrink-0">
                        <ScrollToc toc={toc} />
                    </div>
                )}
                <SetDocHandler alias={alias} document_id={document_id} />
            </div>
        </div>
    )
}