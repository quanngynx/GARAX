import iconUser from "../../../assets/iconUser.png";
import iconBell from "../../../assets/icons8-bell-100.png";
import iconSun from "../../../assets/icons8-sun-100.png";
import iconSearch from "../../../assets/icons8-search-50.png";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import BreadCrumbDynamic from './breadcrumb'

function Navbar() {
  return (
    <div className="w-100% h-[120px]">
      <div className="w-100% h-[118px] flex justify-between">
        <div className="w-33$ h-[118px]">
          <div className="w-100% h-[58px] flex  pt-5">
          Home / <BreadCrumbDynamic />
          </div>
          <Xuly></Xuly>
        </div>
        <div className="w-16% h-[118px]"></div>
        <div className="w-50% h-[118px] flex justify-between pt-9">
          <div className="w-50% h-[50px] ">
            <label className=" h-[30px] flex justify-between border border-black rounded-xl mr-3">
              <img
                src={iconSearch}
                className="w-[20px] h-[20px] m-1 "
                alt="Searchlogin"
              />
              <input
                type="text"
                placeholder="Type here . . ."
                className="rounded-xl outline-none w-full bg-white"
              />
            </label>
          </div>
          <div className="w-30% h-[25px] flex justify-between mr-5">
            <img
              src={iconUser}
              className="w-[25px] h-[25px] mr-2"
              alt="Userlogin"
            />
            <div className="font-semibold text-black">Sign in</div>
          </div>
          <div className="w-20% h-[25px] flex justify-between ">
            <img
              src={iconSun}
              className="w-[25px] h-[25px] mr-3"
              alt="Sunlogin"
            />
            <img src={iconBell} className="w-[25px] h-[25px]" alt="Belllogin" />
          </div>
        </div>
      </div>
      <LineNavbar />
    </div>
  );
}
function XuLy2() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Breadcrumbs maxItems={10} aria-label="breadcrumb">
      {currentPath === "/statics" ? (
        <Typography sx={{ color: "text.primary", fontWeight: "bold" }}>
          DashBoard
        </Typography>
      ) : (
        <Link underline="hover" color="inherit" to="/statics">
          DashBoard
        </Link>
      )}
      {currentPath === "/setting" ? (
        <Typography sx={{ color: "text.primary", fontWeight: "bold" }}>
          Account
        </Typography>
      ) : (
        <Link underline="hover" color="inherit" to="/setting">
          Account
        </Link>
      )}

      {currentPath === "/orders" ? (
        <Typography sx={{ color: "text.primary", fontWeight: "bold" }}>
          List Orders
        </Typography>
      ) : (
        <Link underline="hover" color="inherit" to="/orders">
          List Orders
        </Link>
      )}

      {currentPath === "/booking/list" ? (
        <Typography sx={{ color: "text.primary", fontWeight: "bold" }}>
          List Booking
        </Typography>
      ) : (
        <Link underline="hover" color="inherit" to="/booking/list">
          List Booking
        </Link>
      )}
      {currentPath === "/profile" ? (
        <Typography sx={{ color: "text.primary", fontWeight: "bold" }}>
          User Details
        </Typography>
      ) : (
        <Link underline="hover" color="inherit" to="/profile">
          User Details
        </Link>
      )}
    </Breadcrumbs>
  );
}
function Xuly() {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);
  
  if (currentPath === "/setting") {
    return <div className="text-4xl font-semibold"> Account </div>;
  } else if (currentPath === "/statics") {
    return <div className="text-4xl font-semibold"> DashBoard </div>;
  } else if (currentPath === "/booking/list") {
    return <div className="text-4xl font-semibold"> List Booking </div>;
  } else if (currentPath === "/orders") {
    return <div className="text-4xl font-semibold"> List Orders </div>;
  } else {
    return <div className="text-4xl font-semibold"> User Details </div>;
  }
}

function LineNavbar() {
  return <div className="w-100% h-[1px] bg-black"></div>;
}

export default Navbar;
