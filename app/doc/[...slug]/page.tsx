import {
  getDocumentContentById,
  getDocumentTreeByID,
  getRootDocumentByID,
} from "@/api/document";

import { Markdown } from "@/components/business/md";
import { ScrollToc } from "@/components/business/toc";
import { DocumentVO } from "@/types/doc";
import { Metadata } from "next";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/basic/sidebar/sidebar";
import { convertToTreeData } from "@/utils/convert";
import DocTool from "@/components/core/tool/doc";
import { Spacer } from "@/components/basic/Spacer";
import { getSiteConfigAPI } from "@/api/setting";

interface DocPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const [alias, document_id, leaf_id] = slug || [];

  const [rootRes, treeRes] = await Promise.all([
    getRootDocumentByID(document_id),
    getDocumentTreeByID(document_id),
  ]);

  const rootDocument = rootRes.data;
  const treeItems = convertToTreeData(treeRes.data, alias);

  let document: DocumentVO | null = null;

  if (leaf_id) {
    const res = await getDocumentContentById(leaf_id);
    document = res.data;
  }

  return (
    <SidebarProvider
      style={{ "--sidebar-width": "256px" } as React.CSSProperties}
    >
      <DocSidebar
        docTitle={rootDocument?.title}
        docThumbnail={rootDocument?.thumbnail}
        doctree={treeItems}
        className="hidden md:block fixed top-0 left-0"
        alias={alias}
        document_id={document_id}
      />
      <SidebarInset>

            <div className="w-full flex flex-col md:flex-row justify-center gap-2">
              <div className="w-full md:max-w-xl lg:max-w-3xl md:mr-4 mb-20 px-4">
                <div className="text-3xl font-bold font-sans py-4 mb-12">
                  {leaf_id ? document?.title || "" : rootDocument.title}
                </div>
                <Markdown
                  className="pl-2 break-words overflow-x-auto"
                  content={
                    leaf_id
                      ? document?.content || ""
                      : rootDocument.description || ""
                  }
                />
                <Spacer y={32} />
              </div>
              {leaf_id && (
                <div className="hidden lg:block sticky top-4 h-[calc(100vh-1rem)] w-48 shrink-0">
                  <ScrollToc content={document?.content || ""} />
                </div>
              )}
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
