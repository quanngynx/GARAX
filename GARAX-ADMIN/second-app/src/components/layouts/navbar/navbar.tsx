import { Breadcrumb } from "../../breadcrumb";


import { SearchOutlined } from '../../icons' 
import { UserOutlined } from '../../icons' 
import { SunOutlined } from '../../icons' 
import { LineFullWidth } from '../../line' 

function Navbar() {
    return (
        <div className="w-[100%] h-[120px]">
            <div className="flex justify-between items-start w-[100%]">
                <div className="sm:h-[118px]">
                    <div className="w-100% h-[58px] flex">
                        <Breadcrumb />
                    </div>
                </div>
                {/* <div className="w-16% h-[118px]"></div> */}
                <div className="flex justify-between flex-col-reverse sm:flex-row w-50%">
                    <div className=" sm:h-[50px] ">
                        <label className=" h-[30px] flex justify-between border border-[#9f9f9f] rounded-md mr-3">
                            <SearchOutlined />
                            <input
                                type="text"
                                placeholder="Điền vào đây . . ."
                                className="rounded-xl outline-none w-full bg-white text-black text-base font-medium font-['Inter'] py-2"
                            />
                        </label>
                    </div>
                    <div className=" flex lg:flex sm:block justify-end">
                        <div className="h-[25px] flex justify-between sm:mr-5 mr-1">
                            <UserOutlined />
                            <div className="hidden sm:block font-semibold text-black">
                                Đăng nhập
                            </div>
                        </div>
                        <div className="h-[25px] flex justify-end">
                            <SunOutlined />
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
