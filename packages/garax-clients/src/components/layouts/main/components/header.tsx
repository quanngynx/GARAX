import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import { cn } from "@/utils/utils";
import Styles from "./sass/header.module.css";
import FlyoutMenus from "./flyoutMenus";
// import ModalProfile from "./modalProfile";
import IconLogin from "@/assets/layout/user-heart-svgrepo-com.svg?react";
import DrawersForCart from "./drawersForCart";
import DrawersInfoForCart from "./drawersInfoCart";
import DrawersPaymentForCart from "./drawersPaymentCart";

import MenuIcon from "@/assets/layout/iconMenu.svg?react";
import iconBrand from "@/assets/layout/GRAX.svg";
import iconPhone from "@/assets/layout/noun-display-big-notch-4064633.svg";
import CartTiny from "@/assets/layout/cart-tity.svg?react";
import { useScrollDirectionV2 } from "./hooks";
import { accountAPI } from "@/api/urls/accountUrl";

function Header() {
  // const [fullname, setFullname] = useState(localStorage.getItem("fullname"));
  const [getEmail, setEmail] = useState(localStorage.getItem("email"));
  // const [token] = useState(localStorage.getItem("token"));
  const [open, setOpen] = useState(false);
  const [openOrderInfo, setOpenOrderInfo] = useState(false);
  const [openOrderPayment, setOpenOrderPayment] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.hash === "#info-cart-order") {
      setOpen(false);
      setOpenOrderInfo(true);
      setOpenOrderPayment(false);
    } else if (window.location.hash === "#info-cart-order#payment-cart-order") {
      setOpen(false);
      setOpenOrderInfo(false);
      setOpenOrderPayment(true);
    } else {
      setOpenOrderInfo(false);
      setOpenOrderPayment(false);
    }
  }, []);

  // useEffect(() => {
  //   if (token && isTokenExpired(token)) {
  //     localStorage.clear()
  //     setFullname(null);
  //   } else if (fullname === null) {
  //     try {
  //       const response: Promise<AxiosResponse<unknown, unknown>> = axios.get("/auth/user", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setFullname(response.data.fullname);
  //     } catch (error) {
  //       localStorage.clear();
  //       setFullname(null);
  //       console.error("Session expired or error fetching user data", error);
  //     }
  //   }
  // }, [token, fullname]);

  // const email = useSelector((state: RootState) => state.accountGeneralInfo);
  // console.log("email:::", email)
  useEffect(() => {
    try {
      if (!getEmail) { return }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = accountAPI.getInfoUserByEmail(getEmail);
      if (response.metadata.userName === '') {
        setEmail(response.metadata.email);
      } else {
        setEmail(response.metadata.userName);
      }

    } catch (error) {
      localStorage.clear();
      setEmail(null);
      console.error("Session expired or error fetching user data", error);
    }
  }, [getEmail])

  const [hideMenu, setHideMenu] = useState(false);
  // const [
  //   hideProfile, 
  //   setHideProfile
  // ] = useState(false);

  const handleMenu = () => {
    setHideMenu((prev) => !prev);
  };

  // const handleProfile = () => {
  //   setHideProfile((prev) => !prev);
  // };

  /**
   * @description Đang chờ xử lý
   */
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const navigate = useNavigate();

  // const handleCartClick = () => {
  //   if (!isLoggedIn) {
  //     navigate("/auth/login");
  //   } else {
  //     setOpen(true)
  //   }
  // };

  const handleProceedToOrderInfo = () => {
    // window.location.hash = "#info-cart-order";
    navigate('/checkout');
    setOpen(false);
  };

  const handleProceedToOrderPayment = () => {
    // history.replaceState(null,
    //   window.location.pathname + window.location.hash,
    //   window.location.pathname);
    window.location.hash = "#info-cart-order#payment-cart-order";
  };

  const scrollDirection = useScrollDirectionV2(10);
  return (
    <div className={
      cn(`bg-white w-full flex fixed z-10 justify-center border-b-gray-100 border-2 shadow-md py-3 ${scrollDirection === "down" ? "top-0" : "top-11"}`,
        hideMenu ? 'h-[400px] items-start top-0 relative' : ''
      )
    }>
      <div className="w-[1351.47px] flex flex-col sm:flex-row justify-between items-center">
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
              {/* <img src={Menu} className="w-[20px] h-[20px]" alt="Menu Icon" /> */}
              <MenuIcon />
              <span className="pl-2 text-sm text-black">Danh mục</span>
            </button>
            <div className="left-0">
              {/* {hideMenu && <FlyoutMenus />} */}
            </div>
          </div>
          {/* Phone Info */}
          <div className="hidden sm:flex items-center space-x-2">
            <img src={iconPhone} className="w-5 h-5" alt="Phone Icon" />
            <span className="text-sm text-black">+84 876 787 946</span>
          </div>
        </div>

        {/* Logo Section */}
        <Link to={"/"}>
          <div className="flex justify-center w-full items-center mt-4 md:mr-24 md:mt-0">
            <div className="">
              <img src={iconBrand} alt="Logo" className="w-[100px] md:w-auto" />
            </div>
          </div>
        </Link>

        <div className="text-black mt-6 sm:hidden block">
          Đăng kí thành viên để có nhiều ưu đãi
        </div>

        <div className="mt-4 md:mt-0 flex flex-row items-center">
          <div className="mr-4">
            <button
              className="flex items-center"
              onClick={() => {
                setOpen(true);
                setOpenOrderInfo(false);
              }}
            >
              <div className="flex flex-row justify-between items-center">
                <div className="p-1">
                  <CartTiny />
                </div>
                <div className="text-black"></div>
              </div>
            </button>
            <DrawersForCart
              open={open}
              setOpen={setOpen}
              onProceed={handleProceedToOrderInfo}
            />
            <DrawersInfoForCart
              open={openOrderInfo}
              setOpen={setOpenOrderInfo}
              onProceed={handleProceedToOrderPayment}
            />
            <DrawersPaymentForCart
              open={openOrderPayment}
              setOpen={setOpenOrderPayment}
            />
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            {getEmail ? (
              <button
                // onClick={handleProfile}
                className="border border-gray-300 text-black hover:border-black rounded-full px-4 py-2 flex items-center text-sm sm:text-base"
              >
                <i className="fas fa-user mr-2"></i>Hi, {getEmail}
              </button>
            ) : (
              <Link to="/auth/login">

                <button className="border border-gray-300 text-black hover:border-black rounded-full px-4 py-2 flex items-center text-sm sm:text-base">
                  <IconLogin />
                  <div className="ml-1">Đăng nhập</div>
                </button>
              </Link>
            )}
          </div>

          {/* <div className="">
            <button
              className=""
              onClick={() => {
                setOpen(true);
                setOpenOrderInfo(false)
              }}
            >
              <div className="flex flex-row justify-between items-center">
                <div className=" p-1">
                  <CartTiny />
                </div>
                <div className="text-black">Giỏ hàng</div>
              </div>
            </button>
            <DrawersForCart open={open} setOpen={setOpen} onProceed={handleProceedToOrderInfo}/>
            <DrawersInfoForCart open={openOrderInfo} setOpen={setOpenOrderInfo} onProceed={handleProceedToOrderPayment}/>
            <DrawersPaymentForCart open={openOrderPayment} setOpen={setOpenOrderPayment} />
          </div> */}
        </div>
      </div>

      {hideMenu ? (
        (
          <div className="absolute z-[100] w-full" style={{ top: '70px' }}>
            <div className="w-full h-[0.5px] bg-slate-200"></div>
            <FlyoutMenus />
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
