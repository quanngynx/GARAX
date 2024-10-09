function formSearch() {
  return (
    <div className="text-black  w-full lg:w-3/4 mx-auto p-4 bg-opacity-90 shadow-lg bg-white rounded-lg ">
      {/* Các nút All, New, Used */}
      <div className="flex justify-center space-x-4 mb-4">
        <button className="px-4 py-2 text-white bg-blue-600 rounded-full">All</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-full">New</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-full">Used</button>
      </div>

      {/* Form phần chọn lọc */}
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
        <div className="mt-4 lg:mt-0 lg:col-span-4 flex justify-center">
          <button className="px-6 py-2 bg-blue-600 w-full lg:w-auto text-white rounded-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}