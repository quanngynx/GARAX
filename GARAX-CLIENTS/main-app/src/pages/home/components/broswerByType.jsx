import CardTypeService from "./cardTypeService";

function broswerByType() {
  return (
    <div className="flex mt-36 bg-slate-200 max-h-[600px] w-full h-[600px] rounded-2xl">
      <div className="w-full">
        <div className="flex flex-row justify-between items-center my-4">
          <div className="text-[#050b20] text-[36px] font-bold font-['DM Sans'] leading-10">Chọn Loại Dịch Vụ</div>
          <div className="">
            <a href="#" className="text-center text-[#050b20] text-[15px] font-medium font-['DM Sans'] leading-[15px]">
            Xem tất cả
            icon
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
