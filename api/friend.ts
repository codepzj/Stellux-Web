// 获取友链列表
import { request } from "@/utils/request";
import { FriendShowVO } from "@/types/friend";

export const getFriendList = async (): Promise<FriendShowVO[]> => {
    const res = await request.get<FriendShowVO[]>("/friend/list");
    return res.data;
};

