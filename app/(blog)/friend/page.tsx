import { getFriendList } from "@/api/friend";

export default async function Friend() {
    const res = await getFriendList();
    console.log(res);
    return (
        <div>
            <h1>Friend</h1>
        </div>
    )
}