import request from "@/utils/request";
import { Response } from "@/types/dto";
import { LabelVO, LabelWithCountVO } from "@/types/label";

type LabelType = "category" | "tag";

export const queryAllByTypeAPI: (
  label_type: LabelType
) => Promise<Response<LabelVO[]>> = (label_type) => {
  return request.get("/label/all", { params: { label_type } });
};


export const queryCategoryLabelWithCountAPI: () => Promise<Response<LabelWithCountVO[]>> = () => {
  return request.get("/label/allWithCount");
};