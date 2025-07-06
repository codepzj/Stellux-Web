"use client";

import Info from "./Info";
import Calendar from "./Calendar";
import { SiteConfigVO } from "@/api/config";
import AboutComment from "./Comment";
import { Spacer } from "@/components/Spacer";

export default ({ data }: { data: SiteConfigVO }) => {
  return (
    <>
      <AboutComment />
    </>
  );
};
