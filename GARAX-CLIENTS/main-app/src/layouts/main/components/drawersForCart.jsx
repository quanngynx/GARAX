import { useState, useEffect  } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import BinTiny from "../../../assets/icons/bin-tiny.svg?react";

function drawersForCart({ open, setOpen, onProceed }) {
  // const [open, setOpen] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchParams] = useSearchParams();
  const GiaVe = parseFloat(searchParams.get("GiaVe")) || 1;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(1);
  const [phuongtien, setPhuongTien] = useState(null);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(GiaVe);
  const [isLoading, setIsLoading] = useState(true);

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
    <Dialog open={open} onClose={() => setOpen(true)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto max-w-2xl relative w-screen  transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-2xl font-semibold text-gray-900">
                    Giỏ hàng
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto">
                  {/* Your content */}
                  {/* Product item */}
                  <div className="flex flex-row justify-between items-center pb-4 mb-4 border-b-[0.5px] border-slate-200">
                    <div className="flex flex-row justify-between items-start">
                      <div className="">
                        <div className="text-[#6d6e72]">
                          <img
                            className="w-[88px] h-auto"
                            src="https://product.hstatic.net/200000722513/product/ava_a3fe472a1c8b4ebbbf00dadad7daa25f.png"
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
                          Toyota Camry New - title
                        </div>
                        <div className="">code product</div>
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

                  {/* ============ */}
                </div>

                <div className="flex flex-row justify-between items-center pt-6 px-4 pb-4 sm:px-6 border-t-[1px] border-slate-200">
                  <DialogTitle className="text-xl font-semibold text-gray-900">
                    Tổng tiền
                  </DialogTitle>

                  <DialogTitle className="text-2xl font-semibold text-red-600">
                    92.480.000₫
                  </DialogTitle>
                </div>

                {/* <Link to={infoCartPath}>
                  
                </Link> */}
                <div className="w-full flex flex-row justify-between items-center px-4 sm:px-6">
                    <button onClick={onProceed} className="text-white bg-[#050B20] w-full rounded-xl py-3 font-semibold">
                      Tiếp tục
                    </button>
                  </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default drawersForCart;
