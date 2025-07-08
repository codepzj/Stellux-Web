import About from "./component";
import { getSiteConfigAPI } from "@/api/setting";

export default async () => {
  const res = await getSiteConfigAPI();
  const siteConfig = res.data;

  return (
    <div className="max-w-4xl mx-auto">
      <About data={siteConfig} />
    </div>
  );
};

export const metadata = {
  title: "👋 关于我",
  description: "👋 关于我",
};
