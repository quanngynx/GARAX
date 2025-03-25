import { drawersPaymentInterfaces } from './interfaces/index'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";

// import { TextField } from "@mui/material";

import { XMarkIcon } from "@heroicons/react/24/outline";

function drawersForCart({ open, setOpen }: drawersPaymentInterfaces) {
  // const [open, setOpen] = useState(true);
  // const [searchParams] = useSearchParams();

  // const GiaVe: number = parseFloat(searchParams.get("GiaVe") ?? "1");
  // const [count, setCount] = useState(1);
  // const [totalPrice, setTotalPrice] = useState(GiaVe);
  // const [phuongtien, setPhuongTien] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // const [inforOrder, setInforOrder] = useState({
  //   fullName: "",
  //   codeOrder: "",
  //   email: "",
  //   phoneNumber: "",
  //   address: "",
  //   totalAmount: GiaVe || 1,
  //   quantity: count,
  //   typePayment: "",
  // });

  // const increaseCount = () => {
  //   setCount((prevCount) => {
  //     const newCount = prevCount < 10 ? prevCount + 1 : 10;
  //     setTotalPrice(GiaVe * newCount);
  //     return newCount;
  //   });
  //   // setTotalPrice(GiaVe * count);
  //   // console.log("Gia ve::", GiaVe)
  //   // console.log("Tong ve::", count)
  //   // console.log("Tong::", totalPrice)
  // };

  // const decreaseCount = () => {
  //   setCount((prevCount) => {
  //     const newCount = prevCount > 1 ? prevCount - 1 : 1;
  //     setTotalPrice(GiaVe * newCount);
  //     return newCount;
  //   });
  //   // setTotalPrice(GiaVe * count);
  //   // console.log("Gia ve::", GiaVe)
  //   // console.log("Tong ve::", count)
  //   // console.log("Tong::", totalPrice)
  // };

  // const handle_Change = (e) => {
  //   const { name, value } = e.target;
  //   // setInforOrder((prevInforOrder) => ({
  //   //   ...prevInforOrder,
  //   //   [name]: value,
  //   // }));

  //   setInforOrder({
  //     ...inforOrder,
  //     [name]: value,
  //   });
  // };

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
                    Thanh toán
                  </DialogTitle>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-auto">
                  {/* Your content */}
                  <div className="mb-3 flex flex-row justify-between items-center">
                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      Khách hàng
                    </DialogTitle>

                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      Nguyễn Văn A
                    </DialogTitle>
                  </div>

                  <div className="mb-3 flex flex-row justify-between items-center">
                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      Số điện thoại
                    </DialogTitle>

                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      0374444252
                    </DialogTitle>
                  </div>

                  <div className="mb-3 flex flex-row justify-between items-center">
                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      Địa chỉ nhận hàng
                    </DialogTitle>

                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      A2, Phường Trung Mỹ Tây, Quận 12, Hồ Chí Minh
                    </DialogTitle>
                  </div>

                  <div className="mb-3 flex flex-row justify-between items-center">
                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      Tạm tính
                    </DialogTitle>

                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      92.480.000₫
                    </DialogTitle>
                  </div>

                  <div className="mb-3 flex flex-row justify-between items-center">
                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      Tổng tiền
                    </DialogTitle>

                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      92.480.000₫
                    </DialogTitle>
                  </div>

                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-xl font-semibold text-gray-900">
                      Phương thức thanh toán
                    </DialogTitle>

                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="COD"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="COD"
                          control={<Radio />}
                          label="Thanh toán khi giao hàng (COD)"
                          sx={{
                            color: "#000",
                            "& .MuiFormControlLabel-label": { color: "#000" },
                          }}
                        />
                        <FormControlLabel
                          value="PresspayPointer"
                          control={<Radio />}
                          label="Presspay Pointer"
                          sx={{
                            color: "#000",
                            "& .MuiFormControlLabel-label": { color: "#000" },
                          }}
                        />
                        <FormControlLabel
                          value="PayOs"
                          control={<Radio />}
                          label="PayOs"
                          sx={{
                            color: "#000",
                            "& .MuiFormControlLabel-label": { color: "#000" },
                          }}
                        />
                        <FormControlLabel
                          value="Payoneer"
                          control={<Radio />}
                          label="Payoneer"
                          sx={{
                            color: "#000",
                            "& .MuiFormControlLabel-label": { color: "#000" },
                          }}
                        />
                        <FormControlLabel
                          value="Momo"
                          control={<Radio />}
                          label="Momo"
                          sx={{
                            color: "#000",
                            "& .MuiFormControlLabel-label": { color: "#000" },
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
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

                <div className="w-full flex flex-row justify-between items-center px-4 sm:px-6">
                  <button className="text-white bg-[#050B20] w-full rounded-xl py-3 font-semibold">
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

