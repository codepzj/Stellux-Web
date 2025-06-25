import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
import { Loading } from "@/components/Loading";

// 布局组件
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 p-0 md:p-2 md:w-7/10 mx-auto pt-0 min-h-screen">
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="flex-1">{children}</div>
      </Suspense>
      <Footer />
    </div>
  );
}
