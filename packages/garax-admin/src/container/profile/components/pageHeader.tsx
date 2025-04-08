"use client";

import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

import dayjs from "dayjs";

import RotateIcon from "@/components/icons/rotateIcon";

function pageHeader() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentTime, setCurrentTime] = useState(new Date());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { width } = useWindowSize();
    const dateFormat = width < 768 ? "MM.DD.YYYY" : "MMMM DD, YYYY";
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);
    return (
        <div className=" w-full h-[80px] mt-6 rounded-2xl">
            <div className="w-full h-full flex justify-between items-center px-4 bg-[#e2e8f0] rounded-lg">
                <div className="text-[#212121] text-[32px] font-semibold font-['Roboto'] leading-normal">
                    Thông tin chi tiết
                </div>
                <div className="border-[0.5px] inline-flex text-[#1c1c1c] text-base font-semibold font-['Inter'] leading-[18px]">
                    <div className="inline-flex items-center mr-6">
                        <div className="">Làm mới dữ liệu</div>
                        <div className="ml-3">
                            <RotateIcon />
                        </div>
                    </div>

                    <div className="h-11 bg-body flex items-center justify-center rounded-2xl px-9 font-heading font-bold text-header text-base border border-slate-400 lg:w-[310px]">
                        {dayjs(currentTime).format(`${dateFormat} HH`)}
                        <span className="animate-pulse-fast">:</span>
                        {dayjs(currentTime).format("mm A")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pageHeader;
