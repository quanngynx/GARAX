import CardTypeService from "./cardTypeService";

import TopLeftTiny from '../../../assets/icons/topRight-vector-tiny.svg?react'

function broswerByType() {
  return (
    <div className="flex mt-36 max-h-[600px] w-full h-[600px] rounded-2xl">
      <div className="w-full">
        <div className="flex flex-row justify-between items-center my-5 px-6">
          <div className="text-[#050b20] text-[36px] font-bold font-['DM Sans'] leading-10">
            Chọn Loại Dịch Vụ
          </div>
          <div className="">
            <a
              href="/service"
              className="text-center text-[#050b20] text-[15px] font-medium font-['DM Sans'] leading-[15px]"
            >
              <div className="flex flex-row items-center">
                <div className="mr-2">Xem tất cả</div>
                <>
                  <TopLeftTiny />
                </>
              </div>
            </a>
          </div>
        </div>

        <div className="my-4 ">
          <CardTypeService />
        </div>
      </div>
    </div>
  );
}

export default broswerByType;
