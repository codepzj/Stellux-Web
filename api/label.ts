import request from "@/utils/request";
import { Response } from "@/types/dto";
import { LabelVO } from "@/types/label";

type LabelType = "category" | "tag";

export const queryAllByTypeAPI: (
  label_type: LabelType
) => Promise<Response<LabelVO[]>> = (label_type) => {
  return request.get("/label/all", { params: { label_type } });
};
