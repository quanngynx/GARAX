import { drawersCartInterfaces } from './interfaces'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";


import { ItemCart } from "@/components/card";
function drawersForCart({ open, setOpen, onProceed } : drawersCartInterfaces) {
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
                  <ItemCart />

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
