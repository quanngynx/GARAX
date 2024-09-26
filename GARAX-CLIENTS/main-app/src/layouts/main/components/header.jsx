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
function header() {
    return ( 
        <div className="w-full p-5 bg-white h-[90px]">
            <div className="w-[30%] flex h-[100%]   bg-red-900 p-2">
                <div className="flex w-[30%] p-1 bg-orange-700">
                    <img src={Menu} className="ml-10  w-[30px] h-[30px]" alt="" />
                    <h3 className="font-bolds text-1xl ml-2 mt-[0.6%] text-black">Menu</h3>
                </div>
                <div>
                </div>
            </div>
        </div>
     );
}

export default header;