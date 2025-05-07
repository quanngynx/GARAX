
import Link from "next/link";
import { Breadcrumb } from "../../breadcrumb";

import { SearchOutlined } from "../../icons";
import { UserOutlined } from "../../icons";
import { SunOutlined } from "../../icons";
import { ToggleSidenav } from "../../icons";
import { LineFullWidth } from "../../line";
import { MingcuteNotificationLine } from "@/components/icons/notification";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { toggleSidenav } from "@/stores/slices/sidenavSlice";
import { useAppSelector } from "@/stores/hooks";
import { selectAccessToken, selectAccountGeneralInfo } from "@/stores/slices/authSlice";
import { localStorageService } from "@/utils";
import { AccountModel } from "@/apis/models";

interface INavbar {
    collapsed: boolean
    setCollapsed: Dispatch<SetStateAction<boolean>>
}

function Navbar({collapsed, setCollapsed} : INavbar) {
    const dispatch = useDispatch();
    // const isExpanded = useSelector((state: RootState) => state.sidenav.isExpanded);

    const accessToken: string | null = useAppSelector(selectAccessToken) ?? localStorageService.get('accessToken');
    const accountGeneralInfo: AccountModel | null = useAppSelector(
        selectAccountGeneralInfo,
    );

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
      dispatch(toggleSidenav())
    };
    return (
        <div className="w-[100%]">
            <div className="flex justify-between items-center w-[100%] mb-4">
                <div className="flex flex-row items-center">
                    <div className="flex items-center mr-1">
                        <button onClick={toggleCollapsed} className="p-2 hover:bg-slate-200 rounded-lg">
                            {/* <ToggleSidenav /> */}
                            {collapsed ? <ToggleSidenav /> : <ToggleSidenav />}
                        </button>
                    </div>
                    <span className="py-1 font-bold"> | </span>
                    <div className="flex items-center">
                        <Breadcrumb
                            homeElement={"Trang chủ"}
                            separator={
                                <span className="py-1 font-semibold"> / </span>
                            }
                            activeClasses="text-[#2c5282]"
                            parentClasses="flex"
                            childClasses="hover:bg-slate-200 mx-2 font-bold px-1 py-1 rounded-lg"
                            capitalizeLinks
                        />
                    </div>
                </div>
                {/* <div className="w-16% h-[118px]"></div> */}
                <div className="flex justify-between flex-col-reverse sm:flex-row w-50%">
                    <div className="">
                        <label className=" h-[30px] flex justify-between border-[0.5px] border-gray-300 bg-[#E0E6EE] focus-within:bg-white  rounded-md mr-3 focus:border-slate-600">
                            <SearchOutlined classname="w-[20px] h-[20px] m-1 focus:bg-white" styled={{ fontWeight: 600 }}/>
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="rounded-md outline-none w-full bg-[#E0E6EE] focus:bg-white text-black text-base font-medium font-['Inter'] py-2"
                            />
                        </label>
                    </div>
                    <div className=" flex lg:flex sm:block justify-center items-center gap-2">
                        <div className="flex items-center">
                            <SunOutlined />
                        </div>
                        <div className="">
                            <MingcuteNotificationLine />
                        </div>
                        <div className="h-[25px] flex items-center ml-1">
                            <div>
                                <UserOutlined />
                            </div>
                            <Link href={"/auth/login"}>
                                <div className="hidden sm:block font-semibold text-black">
                                    Đăng nhập
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Xuly></Xuly> */}

            <LineFullWidth />
        </div>
    );
}

export default Navbar;
