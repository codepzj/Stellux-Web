"use client"

import Info from "./Info";
import Calendar from "./Calendar";
import { AboutConfigVO } from "@/types/config";
import AboutComment from "./Comment";
import { Spacer } from "@/components/Spacer";

export default ({ data }: { data: AboutConfigVO }) => {
    return <>
        <div className="w-[90%] lg:w-[950px] mx-auto">
            <Info data={data} />
        </div>
        <Spacer y={16} />
        <div className="flex justify-center px-10">
            <Calendar data={data} />
        </div>
        <Spacer y={16} />
        <AboutComment />
    </>;
};