import { getCommentListByPostIdAPI } from "@/api/comment";

export default async function TestPage() {
  const res = await getCommentListByPostIdAPI("64b911111111111111111111");
  console.log(res);
  return <div>TestPage</div>;
}