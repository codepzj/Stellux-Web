import { getAllPublicDocument } from "@/api/document";
import { DocumentCard } from "@/components/Card/DocumentCard";
import Empty from "@/components/Empty";

export default async function Document() {
    const res = await getAllPublicDocument();
    const documentList = res.data || [];
    return (
        documentList.length === 0 ? <Empty info="暂无文档" /> : <div className="flex h-full w-full flex-col gap-4 px-4 mx-auto w-full md:w-2/3">
                <div className="w-full flex flex-col gap-4 mb-20">
                    {documentList.map((item) => (
                        <DocumentCard key={item.id} document={item} />
                    ))}
                </div>
        </div>
    );
}
