import Menu from "../../../assets/iconMenu.svg"
import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import iconMenu from "../../../assets/GRAX.svg"
import iconPhone from "../../../assets/phone.png"
function header() {
    return ( 
  
            <div className="flex justify-around   border-b-gray-100 border-2  p-7 bg-white shadow-md">
                <div className="flex ">
                        <button className=" flex items-center">
                            <img  src={Menu}  className="w-[20px] h-[20px] " />
                            <span className="pl-2 text-sm text-black">Menu</span>
                        </button>
                        <div className="flex items-center  ml-7 ">
                          <img src={iconPhone} className=" w-[20px] h-[20px]" alt="" />
                            <span className="text-sm pl-1 text-black">+84 876 787 946</span>
                        </div>
                </div>
                        <div className="mt-2 mr-36">
                            <img src={iconMenu} alt=""/>
                        </div>
                       
                        <div>
                            <button className="border border-gray-300 text-black rounded-full px-4 py-2">
                                <i className="fas fa-user mr-2 "></i> Sign in
                            </button>
                        </div>
            </div>
        
     );
}

export default header;