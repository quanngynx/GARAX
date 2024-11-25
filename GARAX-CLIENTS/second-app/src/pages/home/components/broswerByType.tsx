import CardTypeService from "./cardTypeService";

import TopLeftTiny from '../../../assets/home/icons/topRight-vector-tiny.svg?react'

function broswerByType() {
  return (
    <div className="flex mt-36 max-h-[600px] w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[400px] rounded-2xl  ">
      <div className="w-full">
        <div className="flex flex-row justify-between items-center my-5 px-6">
          <div className="text-[#050b20] text-3xl font-bold font-['DM Sans'] leading-10">
            Chọn Loại Dịch Vụ
          </div>
          <div className="">
            <a
              href="/service"
              className="text-center text-[#050b20] text-[15px] font-medium font-['DM Sans'] leading-[15px]"
            >
              <div className=" flex flex-row items-center">
                <div className="mr-2">Xem tất cả</div>
                <>
                  <TopLeftTiny />
                </>
              </div>
            </a>
          </div>
        </div>

        <div className="my-4 overflow-y-auto md:overflow-y-visible max-h-[290px] px-6">
          <CardTypeService />
        </div>
        
      </div>
    </div>
  );
}

export default broswerByType;
