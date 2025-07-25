import { request } from "@/utils/request";
import { DocumentVO } from "@/types/document";
import { Response } from "@/types/dto";
import { SiteMapVO } from "@/types/sitemap";

export const getAllPublicDocument: () => Promise<
  Response<DocumentVO[]>
> = () => {
  return request.get("/document/all");
};

// 根据id获取根文档
export const getDocumentById: (id: string) => Promise<Response<DocumentVO>> = (
  id: string
) => {
  return request.get(`/document/${id}`);
};

// 根据alias获取文档
export const getDocumentByAlias: (alias: string) => Promise<Response<DocumentVO>> = (
  alias: string
) => {
  return request.get(`/document/alias/${alias}`);
};

// export const getDocumentByKeyword: (
//   dto: DocumentSearchDTO
// ) => Promise<Response<DocumentVO[]>> = (dto: DocumentSearchDTO) => {
//   return request.get(`/document/search`, {
//     params: {
//       keyword: dto.keyword,
//       document_id: dto.document_id,
//     },
//   });
// };

export const getDocumentSiteMapAPI = () => {
  return request.get<SiteMapVO[]>(`/document/sitemap`);
};
