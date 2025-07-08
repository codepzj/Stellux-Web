"use client";

import Info from "./Info";
import Calendar from "./Calendar";
import { SiteConfigVO } from "@/api/setting";
import AboutComment from "./Comment";
import { Spacer } from "@/components/basic/Spacer";

export default ({ data }: { data: SiteConfigVO }) => {
  return (
    <>
      <AboutComment />
    </>
  );
};
