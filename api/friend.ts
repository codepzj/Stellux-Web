// 获取友链列表
import request from "@/utils/request";

export const getFriendList = async () => {
    const res = await request.get("/friend/list");
    return res.data;
};

