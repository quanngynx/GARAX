import Menu from "../../../assets/iconMenu.svg";
import iconMenu from "../../../assets/GRAX.svg";
import iconPhone from "../../../assets/noun-display-big-notch-4064633.svg";
import { Link } from "react-router-dom";

function header() {
  return (
   <div className="flex justify-center bg-white shadow-md border-b-gray-100 border-2">
    <div className="flex justify-between w-[1351.47px] p-7">
      <div className="flex ">
        <button className=" flex items-center">
          <img src={Menu} className="w-[20px] h-[20px] " />
          <span className="pl-2 text-sm text-black">Menu</span>
        </button>
        <div className="flex items-center  ml-7 ">
          <img src={iconPhone} className=" w-[20px] h-[20px]" alt="" />
          <span className="text-sm pl-1 text-black">+84 876 787 946</span>
        </div>
      </div>
      <div className="mt-2 mr-36">
        <img src={iconMenu} alt="" />
      </div>

      <div>
        <Link to="/auth/login">
          <button className="border border-gray-300 text-black rounded-full px-4 py-2">
            <i className="fas fa-user mr-2 "></i> Sign in
          </button>
        </Link>
      </div>
    </div>
   </div>
  );
}

export default header;
