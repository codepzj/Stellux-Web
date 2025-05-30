import { getAllPublicDocument } from "@/api/document";
import { DocumentCard } from "@/components/Card/DocumentCard";
import { DocTabs } from "./tabs";
import Empty from "@/components/Empty";

export default async function Document() {
    const res = await getAllPublicDocument();
    const documentList = res.data || [];
    return (
        documentList.length === 0 ? <Empty info="暂无文档" /> : <div className="flex h-full w-full flex-col gap-4">
            <div className="flex flex-col gap-4 px-4">
                <DocTabs className="sticky top-0 z-50 pt-2 bg-white dark:bg-black" />
                <div className="w-full flex flex-col gap-4 px-1 mb-20">
                    {documentList.map((item) => (
                        <DocumentCard key={item.id} document={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
