import About from "./component";
import { getAboutConfigAPI } from "@/api/config";

export default async () => {
  const res = await getAboutConfigAPI();
  const aboutConfig = res.data;

  return (
    
    <div className="max-w-4xl mx-auto">
        <About data={aboutConfig} />
    </div>
  );
};

export const metadata = {
  title: "👋 关于我",
  description: "👋 关于我",
};
