import { Link } from "react-router-dom";

function profilePanel() {
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
  return (
    <div className="w-[60%]">
      <div className="text-[#212121] text-[32px] font-semibold font-['Roboto'] leading-normal mb-4">
        Thông tin chi tiết
      </div>
      <div className="">
        <form>
          <div className="grid grid-cols-2 gap-6">
            {ListInput.map((label, index) => (
              <div key={index} className="flex flex-col">
                <label className="mb-2 text-gray-700">{label.label}</label>
                <input
                  placeholder={label.placeHolder}
                  type="text"
                  className="p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </form>
      </div>

      <div className="flex justify-between items-center gap-4 mt-8">
        <button className="rounded-full py-2 bg-[#1E1E1E] w-full text-white text-2xl font-extrabold font-['Roboto'] leading-normal">
          Lưu bản nháp
        </button>
        <button className="rounded-full py-2 bg-[#1E1E1E] w-full text-white text-2xl font-extrabold font-['Roboto'] leading-normal">
          Cập nhật thông tin
        </button>
      </div>
    </div>
  );
}

export default profilePanel;
