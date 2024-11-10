import AnaylistIcon from "../../../assets/icons/anyalist-icon-solid.svg?react";
// import CursorEffectIcon from "../../../assets/icons/cusor-effect-icon-solid.svg?react";
// import SecurityIcon from "../../../assets/icons/security-solid.svg?react";
// import MultiAppIcon from "../../../assets/icons/multi-app-solid.svg?react";
// import LoadingTinyIcon from "../../../assets/icons/loading-tiny-icon.svg?react";
// import PlayTinyIcon from '../../../assets/icons/play-icon.svg?react'
// import CallingTinyIcon from '../../../assets/icons/calling-tiny.svg?react'

// import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import { Link } from "react-router-dom";

const flyoutMenusData1 = [
  {
    icon: <AnaylistIcon />,
    tit: "Phụ tùng",
    desc: "1",
  },
  {
    icon: <CleaningServicesOutlinedIcon />,
    tit: "Dịch vụ",
    desc: "2",
  },
  {
    icon: <StorageOutlinedIcon />,
    tit: "Khác",
    desc: "3",
  },
];

const flyoutMenusData2 = [
  {
    icon: <SupportAgentOutlinedIcon />,
    tit: "Hỗ trợ trực tuyến",
    desc: "",
  },
  {
    icon: <ScheduleSendOutlinedIcon />,
    tit: "Gửi yêu cầu sửa xe",
    desc: "",
  },
  {
    icon: <FeedbackOutlinedIcon />,
    tit: "gửi phản hồi dịch vụ",
    desc: "",
  },
];

function flyoutMenus() {
  const listCate1 = flyoutMenusData1.map((i) => (
    <div
      key={i}
      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
    >
      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        {i.icon}
      </div>
      <Link to={"/service"}>
        <div className="">
          <a href="#" className="font-semibold text-white hover:text-gray-900">
            {i.tit}
            <span className="absolute inset-0"></span>
          </a>
          <p className="mt-1 text-gray-600">{i.desc}</p>
        </div>
      </Link>
    </div>
  ));

  const listCate2 = flyoutMenusData2.map((i) => (
    <div
      key={i}
      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
    >
      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        {i.icon}
      </div>
      <div>
        <a href="#" className="font-semibold text-white hover:text-gray-900">
          {i.tit}
          <span className="absolute inset-0"></span>
        </a>
        <p className="mt-1 text-gray-600">{i.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex absolute translate-x-[-28px] left-0 right-0 z-10 mt-5 w-[92vw]"
    // style={{ display: isHidden ? 'none' : 'flex' }}
    >
      <div className="w-full max-w-full flex flex-col overflow-hidden rounded-3xl bg-black/90 text-sm/6 shadow-lg ring-1 opacity-90 ring-gray-900/5">
        <div className="flex flex-row" >
        <div className="p-4 w-1/2">{listCate1}</div>
        <div className="p-4 w-1/2">{listCate2}</div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {/* <a
            href="#"
            className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:text-gray-900 hover:bg-gray-100"
          >
            <PlayTinyIcon />
            Watch demo
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:text-gray-900 hover:bg-gray-100"
          >
            <CallingTinyIcon />
            Contact sales
          </a> */}
          <div className="text-black p-3 text-center font-semibold hover:text-gray-900 hover:bg-gray-100">Coming soon</div>
        </div>
      </div>
    </div>
  );
}

export default flyoutMenus;
