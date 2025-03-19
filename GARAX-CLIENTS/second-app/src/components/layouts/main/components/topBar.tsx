import { useEffect, useState } from "react";
import { cn } from '@/utils';

export function TopBar() {
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           const moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? "visible" : "hidden";
  
    return (
        <div className={cn("bg-[#4B4B51] w-full flex z-10 justify-center border-b-gray-100 border-2", cls)}>
            <div className="w-[1350px] flex flex-col sm:flex-row justify-between items-center">
                <div className="flex uppercase font-semibold text-xs">
                    <div className="px-3 py-3 hover:bg-[#2B2B2F] cursor-pointer">Về GARAX</div>
                    <div className="font-light px-3 py-3">|</div>
                    <div className="px-3 py-3 hover:bg-[#2B2B2F] cursor-pointer">Dự án 1</div>
                    <div className="font-light px-3 py-3">|</div>
                    <div className="px-3 py-3 hover:bg-[#2B2B2F] cursor-pointer">Dự án 2</div>
                </div>

                <div className="flex font-semibold text-sm">
                    <div className="px-3 py-3 hover:bg-[#2B2B2F] cursor-pointer">Blog</div>
                    <div className="font-light px-3 py-3">|</div>
                    <div className="px-3 py-3 hover:bg-[#2B2B2F] cursor-pointer">Trung tâm CSKH</div>
                </div>
            </div>
        </div>
    );
};