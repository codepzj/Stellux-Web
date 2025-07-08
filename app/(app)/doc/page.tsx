import { getAllPublicDocument } from "@/api/document";
import { DocCard } from "@/components/business/card/doc";
import Empty from "@/components/basic/empty";

export default async function Document() {
  const res = await getAllPublicDocument();
  const documentList = res.data || [];
  return documentList.length === 0 ? (
    <Empty info="暂无文档" />
  ) : (
    <div className="flex w-full flex-col my-4 md:gap-8">
      <div className="w-full flex flex-col gap-4 mb-20">
        {documentList.map((item, index) => (
          <DocCard key={item.id} doc={item} idx={index} />
        ))}
      </div>
    </div>
  );
}
