import Image from "next/image";
import DemoAva from "../../../components/images/Kaung-MinnKent.jpg";
function cardProfile() {
  return (
    <div className="w-[342px] px-14 py-[23px] bg-[#e2e8f0] rounded-xl justify-center items-center flex">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <Image src={DemoAva} alt="Demo" className="rounded-full"/>
        </div>
        <div className="my-6 text-black text-[28px] font-semibold font-['Inter'] leading-[18px]">Nguyen Van A</div>
        <div className="text-white text-xl font-medium font-['Inter'] leading-[18px] bg-red-600 py-2 px-3 rounded-2xl">
          Admin
        </div>
        {/* eslint-disable-next-line no-irregular-whitespace */}
        <div className="my-6 text-black text-base font-medium font-['Inter'] leading-[18px]">last visit 12/10/2024</div>
        <div className="">
          <button className="bg-[#1E1E1E] px-14 py-2 rounded-2xl text-white font-['Inter'] text-xl font-semibold leading-[18px]">
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}

export default cardProfile;
