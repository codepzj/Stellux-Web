"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Info from "./Info";
import Calendar from "./Calendar";
import { AboutConfigVO } from "@/types/config";
import AboutComment from "./Comment";
import { Spacer } from "@/components/Spacer";

export default ({ data }: { data: AboutConfigVO }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return <>
        <div data-aos="zoom-in" className="w-[90%] lg:w-[950px] mx-auto">
            <Info data={data} />
        </div>
        <Spacer y={16} />
        <div data-aos="zoom-in" className="flex justify-center px-10">
            <Calendar data={data} />
        </div>
        <Spacer y={16} />
        <AboutComment />
    </>;
};