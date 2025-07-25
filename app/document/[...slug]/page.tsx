import { getDocumentByAlias } from "@/api/document";
import { getAllDocumentContentByDocumentId } from "@/api/document-content";

import { Markdown } from "@/components/business/md";
import { ScrollToc } from "@/components/business/toc";
import { DocumentVO } from "@/types/document";
import { Metadata } from "next";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/basic/sidebar/sidebar";
import { convertToDocumentTreeData } from "@/utils/document-tree";
import DocTool from "@/components/core/tool/doc";
import { Spacer } from "@/components/basic/Spacer";
import { getSiteConfigAPI } from "@/api/setting";
import { DocumentContentVO } from "@/types/document-content";

interface DocPageProps {
  params: Promise<{ slug: string[] }>; // 路径参数
}

export const OverView = () => {
  return (
    <div>
      <h1>Overview</h1>
    </div>
  );
};

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  /* 从路径获取根文档和子文档的别名 
     例如：/doc/root-alias/sub-alias
     rootAlias: root-alias
     subAlias: sub-alias
     如果subAlias为空，则表示访问根文档概览页, 并显示对应的概览页
  */
  const [rootAlias, subAlias] = slug || [];

  const isRoot = subAlias === undefined; // 是否是根文档概览页

  // 获取根文档
  const document = await getDocumentByAlias(rootAlias).then((res) => {
    return res.data;
  });

  // 获取文档列表内容
  const documentContentList = await getAllDocumentContentByDocumentId(
    document.id
  ).then((res) => res.data);

  // 如果当前是子文档, 则获取子文档内容
  let documentContent: DocumentContentVO | undefined;
  if (!isRoot) {
    documentContent = documentContentList.find(
      (item) => item.alias === subAlias
    ) as DocumentContentVO;
  }

  // 检查内容是否包含二级(##)或三级(###)标题
  const hasHeadings = () => {
    if (isRoot) {
      return false;
    } else {
      return /^##\s|^###\s/m.test(documentContent?.content || "");
    }
  };

  const treeItems = convertToDocumentTreeData(documentContentList, rootAlias);

  return (
    <SidebarProvider
      style={{ "--sidebar-width": "256px" } as React.CSSProperties}
    >
      <DocSidebar
        docTitle={document?.title}
        docThumbnail={document?.thumbnail}
        doctree={treeItems}
        className="hidden md:block fixed top-0 left-0"
        alias={rootAlias}
        document_id={document.id}
      />
      <SidebarInset>
        <div className="w-full flex flex-col md:flex-row justify-center gap-2">
          <div
            className={`w-full ${hasHeadings() ? "lg:w-4/5" : "lg:w-full"} md:max-w-xl lg:max-w-3xl md:mr-4 mb-20 px-4`}
          >
            <div className="text-3xl font-bold font-sans py-4 mb-12">
              {isRoot ? document?.title || "" : documentContent?.title || ""}
            </div>
            <Markdown
              className="pl-2 break-words overflow-x-auto"
              content={
                isRoot
                  ? document?.description || ""
                  : documentContent?.content || ""
              }
            />
            <Spacer y={32} />
          </div>
          <div className="hidden lg:block sticky top-4 h-[calc(100vh-1rem)] w-48 shrink-0">
            <ScrollToc
              content={
                isRoot
                  ? document?.description || ""
                  : documentContent?.content || ""
              }
            />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

// export async function generateMetadata({
//   params,
// }: DocPageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const [alias, document_id, leaf_id] = slug || [];

//   if (!leaf_id) {
//     const { data: rootDocument } = await getRootDocumentByID(document_id);
//     const seoConfig = await getSiteConfigAPI();
//     const baseUrl = seoConfig.data.siteUrl;
//     const url = `${baseUrl}/doc/${alias}/${document_id}`;
//     return {
//       title: rootDocument.title,
//       description: rootDocument.description,
//       openGraph: {
//         title: rootDocument.title,
//         description: rootDocument.description,
//         url,
//         type: "article",
//         images: [{ url: rootDocument.thumbnail }],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: rootDocument.title,
//         description: rootDocument.description,
//         images: [{ url: rootDocument.thumbnail }],
//       },
//       metadataBase: new URL(url),
//     };
//   } else {
//     const { data: document } = await getDocumentByID(leaf_id);
//     const seoConfig = await getSiteConfigAPI();
//     const baseUrl = seoConfig.data.siteUrl;
//     const url = `${baseUrl}/doc/${alias}/${document_id}/${leaf_id}`;
//     const description = document.content.slice(0, 150);
//     return {
//       title: document.title,
//       description,
//       openGraph: {
//         title: document.title,
//         description,
//         url,
//         type: "article",
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: document.title,
//         description,
//       },
//       metadataBase: new URL(url),
//     };
//   }
// }
