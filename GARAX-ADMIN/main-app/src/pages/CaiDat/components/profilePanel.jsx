import { Link } from "react-router-dom";

function profilePanel() {
  const ListInput = [
    {
      label: "Tên đầu",
      placeHolder: "Nguyễn",
    },
    {
      label: "Quốc gia",
      placeHolder: "Việt Nam",
    },
    {
      label: "Tên cuối",
      placeHolder: "A",
    },
    {
      label: "Thành phố",
      placeHolder: "HCM",
    },
    {
      label: "Email",
      placeHolder: "nguyenvân@gmail.com",
    },
    {
      label: "Quận, tỉnh thành",
      placeHolder: "q.12",
    },
    {
      label: "Số điện thoại",
      placeHolder: "0374444252",
    },
    {
      label: "Địa chỉ",
      placeHolder: "abc 12/12/12, phường Trung Mỹ Tây, q.12, HCM",
    },
    {
      label: "Mật khẩu",
      placeHolder: "**********************",
    },
    {
      label: "Ứng dụng được GARAX ủy quyền",
      placeHolder: "SSO-pointer, . . .",
    },
  ];
  return (
    <div className="w-full">
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

      <Link to={"#"}>
        <div className="text-[#1c1c1c] text-[16px] font-black font-['Roboto'] underline leading-normal my-4">
          Đổi mật khẩu
        </div>
      </Link>

      <div className="">
        <button className="rounded-2xl py-2 bg-[#1E1E1E] w-full text-white text-2xl font-extrabold font-['Roboto'] leading-normal">
          Cập nhật thông tin
        </button>
      </div>
    </div>
  );
}

export default profilePanel;
