function formSearch() {
  return (
    <div className="text-black md:mt-[650px] lg:mt[700px] w-full lg:w-3/4 sm:w-1/4 mx-auto p-4 bg-opacity-90 shadow-xl backdrop-blur-sm rounded-lg">
      {/* Các nút All, New, Used */}
      <div className="flex justify-start space-x-2">
        <button className="px-4 py-2 text-white sm:text-neutral-200 rounded-full">Tất cả</button>
        <button className="px-4 py-2 text-white  rounded-full">Mới</button>
        <button className="px-4 py-2 text-white  rounded-full">Đã sử dụng</button>
      </div>

      {/* Form phần chọn lọc */}
      <div className="grid  grid-cols-5   md:grid-cols-5 sm:grid-cols-5 gap-5">
        {/* Chọn hãng xe */}
        <div className="w-full">
          <label className="text-white block mb-2 w-max sm:text-white">Loại xe</label>
          <select className="w-full bg-white p-2 border rounded">
            <option>Audi</option>
          </select>
        </div>

        {/* Chọn model xe */}
        <div className="w-full">
          <label className="text-white block mb-2 w-max sm:text-white">Chọn mẫu</label>
          <select className="w-full bg-white p-2 border rounded">
            <option>Q7</option>
          </select>
        </div>

        {/* Chọn năm sản xuất */}
        <div className="w-full">
          <label className="text-white  block mb-2 w-max sm:text-white">Chọn năm</label>
          <select className="w-full bg-white p-2 border rounded">
            <option>0 - 2024</option>
          </select>
        </div>

        {/* Chọn giá */}
        <div className="w-full">
          <label className="text-white block mb-2 w-max sm:text-white">Chọn giá</label>
          <select className="w-full bg-white p-2 border rounded">
            <option>Danh mục sản phẩm</option>
          </select>
        </div>

        {/* Nút tìm kiếm */}
        <div className="w-full flex items-end">
          <button className="px-4 py-2 auto-fit bg-blue-600 border-spacing-y-9  flex-shrink-0  md:min-w-[50px] text-white text-sm rounded-full">
            Tìm kiếm  
          </button>
        </div>
      </div>

      {/* Responsive Styles */}
      {/* <style jsx>{`
        @media (max-width: 768px) {
          .label-select {
            color: white; 
          }

          button {
            padding: 0.5rem 1rem; 
            font-size: 0.875rem; 
          }
        }
      `}</style> */}
    </div>
  );
}

export default formSearch