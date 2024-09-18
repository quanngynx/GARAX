import iconUser from '../../../assets/iconUser.png';
import iconBell from '../../../assets/icons8-bell-100.png';
import iconSun from '../../../assets/icons8-sun-100.png';
import iconSearch from '../../../assets/icons8-search-50.png';


function Navbar() {
    return ( 
        <div className="w-100% h-[120px]">
            <div className="w-100% h-[118px] flex justify-between">
                <div className="w-33$ h-[118px]">
                    <div className="w-100% h-[58px] flex justify-between pt-5">
                        <div className="text-gray-600">Pages</div>
                        <div className="text-black font-medium">/Dashboard</div>
                    </div>
                    <div className="w-100% h-[58px] font-semibold text-2xl">Dashboard</div>
                </div>
                <div className="w-16% h-[118px]"></div>
                <div className="w-50% h-[118px] flex justify-between pt-9">
                    <div classname="w-50% h-[50px] ">
                            <label class=" h-[30px] flex justify-between border border-black rounded-xl mr-3">
                                <img src={iconSearch} className="w-[20px] h-[20px] m-1 " alt="Searchlogin"/>
                                <input type="text" placeholder="Type here . . ." className="outline-none w-full bg-white" />
                            </label>
                    </div>
                    <div className="w-30% h-[25px] flex justify-between mr-5">
                        <img src={iconUser} className="w-[25px] h-[25px] mr-2" alt="Userlogin" />
                        <div class="font-semibold text-black">Sign in</div>
                    </div>
                    <div className="w-20% h-[25px] flex justify-between ">
                        <img src={iconSun} className="w-[25px] h-[25px] mr-3" alt="Sunlogin"/>
                        <img src={iconBell} className="w-[25px] h-[25px]" alt="Belllogin"/>
                    </div>
                </div>
            </div>
            <LineNavbar/>
        </div>
     );
}
function LineNavbar(){
    return (
        <div className="w-100% h-[1px] bg-black"></div>
    )
}

export default Navbar;