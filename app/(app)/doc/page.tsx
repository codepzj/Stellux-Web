import { getAllPublicDocument } from "@/api/document";
import { DocumentCard } from "@/components/Card/document";
import Empty from "@/components/Empty";

export default async function Document() {
    const res = await getAllPublicDocument();
    const documentList = res.data || [];
    return documentList.length === 0 ? (
      <Empty info="暂无文档" />
    ) : (
      <div className="flex w-full flex-col gap-10 my-4 md:gap-8">
        <div className="w-full flex flex-col gap-4 mb-20">
          {documentList.map((item) => (
            <DocumentCard key={item.id} document={item} />
          ))}
        </div>
      </div>
    );
}
