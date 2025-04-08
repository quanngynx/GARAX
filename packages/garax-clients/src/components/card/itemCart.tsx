import BinTiny from "@/assets/home/icons/bin-tiny.svg?react";

import ImageProd from '@/assets/home/images/fuel-eneos.png'
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const ItemCart = () => {
  const [searchParams] = useSearchParams();
  const GiaVe = parseFloat(searchParams.get("GiaVe") ?? "1");
      const [count, setCount] = useState(1);
  const [, setTotalPrice] = useState(GiaVe);
    
    const increaseCount = () => {
        setCount((prevCount) => {
          const newCount = prevCount < 10 ? prevCount + 1 : 10;
          setTotalPrice(GiaVe * newCount);
          return newCount;
        });
        // setTotalPrice(GiaVe * count);
        // console.log("Gia ve::", GiaVe)
        // console.log("Tong ve::", count)
        // console.log("Tong::", totalPrice)
      };
    
      const decreaseCount = () => {
        setCount((prevCount) => {
          const newCount = prevCount > 1 ? prevCount - 1 : 1;
          setTotalPrice(GiaVe * newCount);
          return newCount;
        });
        // setTotalPrice(GiaVe * count);
        // console.log("Gia ve::", GiaVe)
        // console.log("Tong ve::", count)
        // console.log("Tong::", totalPrice)
      };

    return (
        <div className="flex flex-row justify-between items-center pb-4 mb-4 border-b-[0.5px] border-slate-200">
            <div className="flex flex-row justify-between items-start">
                <div className="">
                    <div className="text-[#6d6e72]">
                        <img
                            className="w-[88px] h-auto"
                            src={ImageProd}
                        ></img>
                    </div>
                    <button className="w-full">
                        <div className=" text-[#6d6e72] flex flex-row justify-center items-center">
                            <BinTiny />
                            <div className="ml-1">xóa</div>
                        </div>
                    </button>
                </div>
                <div className="text-black ml-4">
                    <div className="font-semibold">
                        Toyota Camry New
                    </div>
                    <div className="">ABC-12345-S-BL</div>
                </div>
            </div>

            <div className="flex flex-col justify-start items-end">
                <div className="">
                    <div className="text-[#050B20]">
                        32.990.000₫ - price saled
                    </div>
                    <div className="text-[#6d6e72] line-through">
                        29.490.000₫ - price
                    </div>
                </div>
                <div className="text-[#050B20] mt-2">
                    <div className=" mt-4">
                        {/* <label className="font-bold">Số lượng</label> */}
                        <div className="grid border border-slate-300 bg-white rounded-md mt-2 grid-cols-3 ">
                            <button
                                className="bg-slate-300 p-2 rounded-s-md px-5"
                                onClick={decreaseCount}
                            >
                                -
                            </button>
                            <span className="text-center h-full flex items-center justify-center">
                                <div className="">{count}</div>
                            </span>{" "}
                            <button
                                className="bg-slate-300 rounded-e-md px-5"
                                onClick={increaseCount}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}