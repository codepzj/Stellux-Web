import BlogSearchModal from "@/components/SearchModal/blog";
import BlogTool from "@/components/Tool/blog";
import Header from "@/components/Header";

// 布局组件
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 p-0 md:p-2 md:w-7/10 mx-auto pt-0 min-h-screen">
      <Header />
      {children}
    </div>
  );
}
