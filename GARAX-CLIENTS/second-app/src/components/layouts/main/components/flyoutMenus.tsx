function flyoutMenus() {
  return (
    <div className="flex py-0 z-50"
    >
      <div className="w-full max-w-full flex flex-col overflow-hidden text-sm/6 ring-1 opacity-90 ring-gray-900/5">
        <div className="grid grid-cols-2 md:sm:grid-cols-5 gap-8 px-10 py-8">
          {/* row 1 */}
          <div>
            <h3 className="text-black font-semibold mb-4">Tất cả sản phẩm</h3>
            <ul className="text-black">
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  Sản phẩm mới
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  Bán chạy nhất
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* row 2 */}
          <div>
            <h3 className="text-black font-semibold mb-4">Cửa hàng và dịch vụ</h3>
            <ul className="text-black">
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  Đặt lịch sửa chữa & tư vấn
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                Trò chuyện trực tuyến
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  Cho thuê xe
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  Đối tác
                </a>
              </li>
            </ul>
          </div>
          {/* row 3 */}
          <div>
            <h3 className="text-black font-semibold mb-4">Phương tiện truyền thông</h3>
            <ul className="text-black">
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  Tin tức
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  Blog
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-gray-500">
                  Chương trình phát hiện lỗ hổng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-gray-900/5">
          <div className="text-black p-3 text-center font-semibold hover:text-gray-900">Coming soon</div>
        </div>
      </div>
    </div>
  );
}

export default flyoutMenus;
