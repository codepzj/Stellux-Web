import { queryAllByTypeAPI } from "@/api/label";

export default async function CategoryPage() {
  const res = await queryAllByTypeAPI("category");
  const categoryList = res.data || [];
  console.log(categoryList);
  return (
    <div className="flex w-full flex-col gap-10 my-4 md:gap-8">
      {categoryList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}