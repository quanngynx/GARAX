import { Breadcrumb } from "../../breadcrumb";


import { SearchOutlined } from '../../icons' 
import { UserOutlined } from '../../icons' 
import { SunOutlined } from '../../icons' 
import { ToggleSidenav } from "../../icons"
import { LineFullWidth } from '../../line' 
function Navbar() {
    return (
        <div className="w-[100%] h-[120px]">
            <div className="flex justify-between items-center w-[100%] mb-4">
                <div className="flex flex-row items-center">
                    <div className="flex items-center mr-1">
                        <button className="p-2 hover:bg-slate-200  rounded-lg">
                        <ToggleSidenav />
                        </button>
                    </div>
                    <span className="py-1 font-bold"> | </span>
                    <div className="flex items-center">
                        <Breadcrumb
                        homeElement={'Trang chủ'}
                        separator={<span className="py-1 font-semibold"> / </span>}
                        activeClasses='text-[#2c5282]'
                        parentClasses='flex' 
                        childClasses='hover:bg-slate-200 mx-2 font-bold px-1 py-1 rounded-lg'
                        capitalizeLinks 
                        />
                    </div>
                </div>
                {/* <div className="w-16% h-[118px]"></div> */}
                <div className="flex justify-between flex-col-reverse sm:flex-row w-50%">
                    <div className="">
                        <label className=" h-[30px] flex justify-between border-[0.5px] border-gray-300 rounded-md mr-3">
                            <SearchOutlined classname='w-[20px] h-[20px] m-1'/>
                            <input
                                type="text"
                                placeholder=". . ."
                                className="rounded-xl outline-none w-full bg-white  text-black text-base font-medium font-['Inter'] py-2"
                            />
                        </label>
                    </div>
                    <div className=" flex lg:flex sm:block justify-center items-center">
                        <div className="flex items-center">
                            <SunOutlined />
                        </div>
                        <div className="h-[25px] flex items-center sm:ml-5 ml-1">
                            <div>
                                <UserOutlined />
                            </div>
                            <div className="hidden sm:block font-semibold text-black">
                                Đăng nhập
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Xuly></Xuly> */}

           
            <LineFullWidth/>
        </div>
    );
}

export default Navbar;
