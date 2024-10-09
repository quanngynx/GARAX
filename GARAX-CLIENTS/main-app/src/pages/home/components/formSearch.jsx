function formSearch() {
  return (
    <div className="text-black md:mt-[650px] lg:mt[700px] w-full lg:w-3/4 mx-auto p-4 bg-opacity-90 shadow-lg backdrop-blur-sm rounded-lg">
      {/* Các nút All, New, Used */}
      <div className="flex justify-center  space-x-2 mb-4">
        <button className="px-4 py-2 text-white sm:text-neutral-200 rounded-full">All</button>
        <button className="px-4 py-2 text-white  rounded-full">New</button>
        <button className="px-4 py-2 text-white  rounded-full">Used</button>
      </div>

      {/* Form phần chọn lọc */}
      <div className="grid  grid-cols-5    md:grid-cols-5 sm:grid-cols-5 gap-5">
        {/* Chọn hãng xe */}
        <div className="w-full">
          <label className="block mb-2">Select Makes</label>
          <select className="w-full p-2 border rounded">
            <option>Audi</option>
          </select>
        </div>

        {/* Chọn model xe */}
        <div className="w-full">
          <label className="block mb-2">Select Models</label>
          <select className="w-full p-2 border rounded">
            <option>Q7</option>
          </select>
        </div>

        {/* Chọn năm sản xuất */}
        <div className="w-full">
          <label className="block mb-2">Select Year</label>
          <select className="w-full p-2 border rounded">
            <option>0 - 2024</option>
          </select>
        </div>

        {/* Chọn giá */}
        <div className="w-full">
          <label className="block mb-2">Select Price</label>
          <select className="w-full p-2 border rounded">
            <option>All Prices</option>
          </select>
        </div>

        {/* Nút tìm kiếm */}
        <div className="w-full  flex items-end">
          <button className="px-2 py-2 auto-fit bg-blue-600 border-spacing-y-9  flex-shrink-0  md:min-w-[50px] text-black rounded-full">
            Search  
          </button>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .label-select {
            color: white; /* Đổi màu chữ thành trắng */
          }

          button {
            padding: 0.5rem 1rem; /* Điều chỉnh padding cho nhỏ hơn */
            font-size: 0.875rem; /* Điều chỉnh kích thước chữ cho nhỏ hơn */
          }
        }
      `}</style>
    </div>
  );
}

export default formSearch