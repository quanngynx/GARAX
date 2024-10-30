import iconUser from "../../../assets/iconUser.png";
import iconBell from "../../../assets/icons8-bell-100.png";
import iconSun from "../../../assets/icons8-sun-100.png";
import iconSearch from "../../../assets/icons8-search-50.png";
import { useLocation } from "react-router-dom";

import BreadCrumbDynamic from './breadcrumb'

function Navbar() {
  return (
    <div className="w-[100%] h-[120px]">
      <div className="flex justify-between w-[100%] sm:h-[118px]">
        <div className="sm:h-[118px]">
          <div className="w-100% h-[58px] flex pt-5">
          Home / <BreadCrumbDynamic />
          </div>
          <Xuly></Xuly>
        </div>
        {/* <div className="w-16% h-[118px]"></div> */}
        <div className="flex justify-between flex-col-reverse sm:flex-row w-50% sm:h-[118px] sm:pt-9 ">
          <div className=" sm:h-[50px] ">
            <label className=" h-[30px] flex justify-between border border-[#9f9f9f] rounded-xl mr-3">
              <img
                src={iconSearch}
                className="w-[20px] h-[20px] m-1"
                alt="Searchlogin"
              />
              <input
                type="text"
                placeholder="Type here . . ."
                className="rounded-xl outline-none w-full bg-white text-black text-base font-medium font-['Inter']"
              />
            </label>
          </div>
          <div className=" flex lg:flex sm:block justify-end">
          <div className="h-[25px] flex justify-between sm:mr-5 mr-1">
            <img
              src={iconUser}
              className="w-[25px] h-[25px] mr-2"
              alt="Userlogin"
            />
            <div className="hidden sm:block font-semibold text-black">Sign in</div>
          </div>
          <div className="h-[25px] flex justify-end">
            <img
              src={iconSun}
              className="w-[25px] h-[25px] mr-3"
              alt="Sunlogin"
            />
            <img src={iconBell} className="w-[25px] h-[25px]" alt="Belllogin" />
          </div>
          </div>
        </div>
      </div>
      <LineNavbar/>
    </div>
  );
}

function Xuly() {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);
  
  if (currentPath === "/setting") {
    return <div className="text-[16px] sm:text-4xl font-semibold"> Tài khoản </div>;
  } else if (currentPath === "/statics") {
    return <div className="text-[16px] sm:text-4xl font-semibold"> Bảng điều khiển </div>;
  } else if (currentPath === "/booking/list") {
    return <div className="text-[16px] sm:text-4xl font-semibold"> Danh sách dặt lịch </div>;
  } else if (currentPath === "/orders") {
    return <div className="text-[16px] sm:text-4xl font-semibold"> Danh sách đơn hàng </div>;
  } else {
    return <div className="text-[16px] sm:text-4xl font-semibold"> Chi tiết người dùng </div>;
  }
}

function LineNavbar() {
  return <div className="w-100% h-[1px] bg-black mt-4 sm:mt-0"></div>;
}

export default Navbar;
