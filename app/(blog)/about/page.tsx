import About from "./component";
import { getAboutConfigAPI } from "@/api/config";
import Footer from "@/components/Footer";

export default async () => {
  const res = await getAboutConfigAPI()
  const aboutConfig = res.data

  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-screen">
      <div className="flex-1">
        <About data={aboutConfig} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export const metadata = {
  title: '👋 关于我',
  description: '👋 关于我'
}
