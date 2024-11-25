import { Outlet } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AVTdemo from "../../assets/icons/home/img/team3-150x150.jpg.png";

import LeftSidebar from "./components/leftSidebar";
import RightContent from "./components/profilePage";

import Line from '../../components/line'
function profileUser() {
  return (
    <div className="flex flex-col bg-white justify-start items-center py-8 ">
      <div className="w-[1361.47px]">
        <div className="flex flex-row gap-8 mb-8">
          <div className="">
            <Avatar alt="Remy Sharp" src={AVTdemo} />
          </div>
          <div className="text-[#050b20] text-[32px] font-bold font-['DM Sans'] leading-10">
            Remy Sharp
          </div>
        </div>

        <Line />
        {/* <ComboCleaning /> */}
        <div className="flex flex-row items-start mt-8">
            <LeftSidebar />

            {/* <RightContent /> */}
            <Outlet />
          </div>
      </div>
    </div>
  );
}

export default profileUser;
