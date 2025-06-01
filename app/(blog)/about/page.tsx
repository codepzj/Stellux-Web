import About from "./component";
import { getAboutConfigAPI } from "@/api/config";

export default async () => {
  const res = await getAboutConfigAPI()
  const aboutConfig = res.data

  return (
    <>
      <About data={aboutConfig} />
    </>
  )
}

export const metadata = {
  title: '👋 关于我',
  description: '👋 关于我'
}
