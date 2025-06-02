"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Info from "./Info";
import Calendar from "./Calendar";
import { AboutConfigVO } from "@/types/config";
import AboutComment from "./Comment";
import { Spacer } from "@heroui/spacer";

export default ({ data }: { data: AboutConfigVO }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return <>
        <div data-aos="zoom-in" className="w-[90%] lg:w-[950px] mx-auto">
            <Info data={data} />
        </div>
        <div data-aos="zoom-in" className="flex justify-center mt-24 px-10">
            <Calendar data={data} />
        </div>
        <Spacer y={32} />
        <AboutComment />
    </>;
};