
import AnaylistIcon from "@/assets/icons/anyalist-icon-solid.svg?react";
import CursorEffectIcon from "@/assets/icons/cusor-effect-icon-solid.svg?react";
import SecurityIcon from "@/assets/icons/security-solid.svg?react";
import MultiAppIcon from "@/assets/icons/multi-app-solid.svg?react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

function modalProfile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  // const [func, setFunc] = useState("")

  // const handleListFunc = () => {
  //   setFunc()
  // }

  const navigateToProfile = () => {

    navigate("/user/profile");
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const flyoutMenusData1 = [
    {
      id: 1,
      icon: <AnaylistIcon />,
      tit: "Thông báo",
      desc: "1",
      func: navigateToProfile(),
    },
    {
      id: 2,
      icon: <MultiAppIcon />,
      tit: "Tài khoản",
      desc: "2",
      func: navigateToProfile(),
    },
    {
      id: 3,
      icon: <SecurityIcon />,
      tit: "Trung tâm trợ giúp",
      desc: "3",
      func: navigateToProfile(),
    },
    {
      id: 4,
      icon: <CursorEffectIcon />,
      tit: "Đăng xuất",
      desc: "4",
      func: handleLogout(),
    },
  ];

  const listCate1 = flyoutMenusData1.map((item) => (
    <div
      key={item.id}
      className="group relative flex gap-x-6 rounded-lg px-4 py-1 hover:bg-gray-50"
    >
      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        {item.icon}
      </div>
      <button
        // onClick={item.func}
        className="font-semibold text-white hover:text-gray-900"
      >
        {item.tit}
        <span className="absolute inset-0"></span>
        <p className="mt-1 text-gray-600">{item.desc}</p>
      </button>
    </div>
  ));

  return (
    <div className="flex justify-end absolute translate-x-[-28px] left-0 right-0 z-10 mt-5 w-[98vw]">
      <div className="flex flex-col overflow-hidden rounded-3xl bg-black/90 text-sm/6 shadow-lg ring-1 opacity-90 ring-gray-900/5">
        <div className="p-4">{listCate1}</div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          <div className="text-black p-3 text-center font-semibold hover:text-gray-900 hover:bg-gray-100">
            Menu Tab
          </div>
        </div>
      </div>
    </div>
  );
}

export default modalProfile;
