// import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import dayjs from "dayjs";


import { TValuesMediaProduct } from "../types";

function PrimaryGroupColumn() {
    const ListInput = [
        {
          label: "Tên sản phẩm",
          placeHolder: "Nguyễn",
        },
        {
          label: "Danh mục",
          placeHolder: "Việt Nam",
        },
        {
          label: "Thương hiệu",
          placeHolder: "A",
        },
        {
          label: "Giá gốc",
          placeHolder: "HCM",
        },
        {
          label: "Loại sản phẩm",
          placeHolder: "nguyenvân@gmail.com",
        },
        {
          label: "Giá đang sale",
          placeHolder: "q.12",
        },
        {
          label: "Trạng thái sản phẩm",
          placeHolder: "0374444252",
        },
        {
          label: "Mã sản phẩm",
          placeHolder: "abc 12/12/12, phường Trung Mỹ Tây, q.12, HCM",
        },
        {
          label: "Số lượng",
          placeHolder: "**********************",
        },
      ];

    const defaultValues: TValuesMediaProduct = {
            image1: "",
            image2: "",
            image3: "",
            image4: "",
            dimensions: "10 * 10 * 10",
            weight: 0.1,
            description: "",
            productName: "Sport Smart Watch",
            brandName: "Pineapple",
            regularPrice: 1000,
            salePrice: 800,
            productSchedule: [dayjs().startOf("week"), dayjs().endOf("week")],
            productSKU: "SKU-123456",
            qty: 100,
        };

    // const {
    //         register,
    //         handleSubmit,
    //         control,
    //         formState: { errors },
    //     } = useForm({
    //         defaultValues: defaultValues,
    //     });
      return (
        <div className="w-[60%] border-[0.5px] border-solid border-slate-300 rounded-2xl px-[16px] py-[24px]">
          <div className="text-[#212121] text-lg font-semibold font-['Roboto'] leading-normal mb-4">
            Chi tiết sản phẩm
          </div>
          <div className="">
            <form
            >
              <div className="grid grid-cols-2 gap-6">
                {ListInput.map((label, index) => (
                  <div key={index} className="flex flex-col">
                    <label className="mb-1 text-gray-700">{label.label}</label>
                    <input
                      placeholder={label.placeHolder}
                      type="text"
                      className="px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
              <div className="field-wrapper flex flex-col mt-5">
                <label className="field-label mb-[8px] text-gray-700" htmlFor="description">
                    Description
                </label>
                <textarea
                    className={classNames(
                        `field-input !h-[150px] !py-[15px] !overflow-y-auto border-[0.5px]`,
                        // { "field-input--error": errors.description },
                    )}
                    id="description"
                    defaultValue={defaultValues.description}
                    // {...register("description", { required: true })}
                />
            </div>
            </form>
          </div>
    
          <div className="flex justify-between items-center gap-4 mt-8">
            <button className="rounded-full py-2 bg-[#1E1E1E] hover:transition-custom hover:text-[#1E1E1E] hover:shadow-black w-full text-white text-xl border-[0.5px] border-solid border-[#1E1E1E] font-bold font-['Roboto'] leading-normal">
              Lưu bản nháp
            </button>
            <button className="rounded-full py-2 bg-[#1E1E1E] hover:shadow-black w-full text-white text-xl font-bold font-['Roboto'] border-[0.5px] border-solid border-[#1E1E1E] leading-normal">
              Cập nhật thông tin
            </button>
          </div>
        </div>
      );
}

export default PrimaryGroupColumn;