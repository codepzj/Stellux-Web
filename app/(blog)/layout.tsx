import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// 布局组件
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 p-0 md:p-2 md:w-7/10 mx-auto pt-0 min-h-screen">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
