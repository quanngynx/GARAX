import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { cn } from "../../../utils/utils";
import { isTokenExpired } from "../../../pages/auth/checkToken";
import Styles from "./css/header.module.css";
import FlyoutMenus from "./flyoutMenus";
import ModalProfile from "./modalProfile";

import Menu from "../../../assets/iconMenu.svg";
import iconBrand from "../../../assets/GRAX.svg";
import iconPhone from "../../../assets/noun-display-big-notch-4064633.svg";
function Header() {
  const [fullname, setFullname] = useState(localStorage.getItem("fullname"));
  const [token] = useState(localStorage.getItem("token"));
  const getUserData = async () => {
    try {
      const response = await axios.get("/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFullname(response.data.fullname);
    } catch (error) {
      localStorage.clear();
      setFullname(null);
      console.error("Session expired or error fetching user data", error);
    }
  };
  useEffect(() => {
    if (token && isTokenExpired(token)) {
      localStorage.removeItem("fullname");
      localStorage.removeItem("token");
      setFullname(null);
    } else if (fullname === null) {
      getUserData();
    }
  }, [token, fullname]);

  const [hideMenu, setHideMenu] = useState(false);
  const [hideProfile, setHideProfile] = useState(false);

  const handleMenu = () => {
    setHideMenu((prev) => !prev);
  };

  const handleProfile = () => {
    setHideProfile((prev) => !prev);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center border-b-gray-100 border-2 p-4 md:p-7 bg-white shadow-md">
      <div
        className={cn(
          "flex sm:items-center sm:space-x-5 space-x-[270px] justify-between",
          Styles.responsiveMobile,
          Styles.responsiveRange
        )}
      >
        {/* Menu Button */}
        <div className="relative">
          <button
            className="flex items-center"
            type="button"
            aria-expanded="false"
            onClick={handleMenu}
          >
            <img src={Menu} className="w-[20px] h-[20px]" alt="Menu Icon" />
            <span className="pl-2 text-sm text-black">Menu</span>
          </button>

          {hideMenu && <FlyoutMenus />}
        </div>

        {/* Phone Info */}
        <div className="flex items-center">
          <img src={iconPhone} className="w-[20px] h-[20px]" alt="Phone Icon" />
          <span className="text-sm pl-1 text-black">+84 876 787 946</span>
        </div>
      </div>

      {/* Logo Section */}
      <div className="mt-4 md:mr-24 md:mt-0">
        <img src={iconBrand} alt="Logo" className="w-[100px] md:w-auto" />
      </div>

      <div className="text-black mt-6 sm:hidden block">
        Đăng kí thành viên để có nhiều ưu đãi
      </div>

      <div className="mt-4 md:mt-0">
        {fullname ? (
          <div>
            <button
              onClick={handleProfile}
              className="border border-gray-300 text-black hover:border-[#121212] rounded-full px-[100px] sm:px-4 py-2 flex items-center"
            >
              <i className="fas fa-user mr-2"></i>Hi, {fullname}
            </button>
            {hideProfile && <ModalProfile />}
          </div>
        ) : (
          <Link to="/auth/login">
            <button className="border border-gray-300 text-black hover:border-[#121212] rounded-full px-[100px] sm:px-4 py-2 flex items-center">
              <i className="fas fa-user mr-2"></i> Sign in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
