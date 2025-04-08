import Link from "next/link";

import { FieldProfilePanel } from '../constants'

function profilePanel() {
  return (
    <div className="w-full">
      <div className="">
        <form>
          <div className="grid grid-cols-2 gap-6">
            {FieldProfilePanel.map((label, index) => (
              <div key={index} className="flex flex-col">
                <label className="mb-2 text-gray-700 text-sm">{label.label}</label>
                <input
                  placeholder={label.placeHolder}
                  type="text"
                  className="px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </form>
      </div>

      <Link href={"#"}>
        <div className="text-[#1c1c1c] text-[16px] font-black font-['Roboto'] underline leading-normal my-4">
          Đổi mật khẩu
        </div>
      </Link>

      <div className="">
        <button className="rounded-2xl py-2 bg-[#1E1E1E] w-full text-white text-xl font-extrabold font-['Roboto'] leading-normal">
          Cập nhật thông tin
        </button>
      </div>
    </div>
  );
}

export default profilePanel;
