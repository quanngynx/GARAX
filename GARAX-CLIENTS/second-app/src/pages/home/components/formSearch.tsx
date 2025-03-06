function formSearch() {
  return (
    <div className="text-black md:mt-[508px] lg:mt[600px] w-full lg:w-3/4 sm:w-1/4 mx-auto p-4 bg-opacity-90 shadow-xl backdrop-blur-sm rounded-lg">
      <div className="flex justify-start space-x-2">
        <button className="px-4 py-2 text-white sm:text-neutral-200 rounded-full">Tất cả</button>
        <button className="px-4 py-2 text-white  rounded-full">Mới</button>
        <button className="px-4 py-2 text-white  rounded-full">Đã sử dụng</button>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="w-full">
          <input 
            className="w-full bg-white border-[1px] border-gray-400 h-9 rounded-md px-8" 
            type="search"
            placeholder="Tìm kiếm sản phẩm"
            />
          </div>
  
          <div className="">
            <button className="px-4 py-2 text-center w-max bg-blue-600 border-spacing-y-9 md:min-w-[50px] text-white text-sm rounded-full">
              Tìm kiếm  
            </button>
          </div>
        </div>
    </div>
  );
}

export default formSearch