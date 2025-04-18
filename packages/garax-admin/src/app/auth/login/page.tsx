// "use client";

// import { useState } from "react";
import Link from "next/link";
// import axios from "axios";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import API_ROUTES from "../../api";

import { CheckboxCustom } from '../../../components/checkbox'

function LoginPage() {

    return (
        <div className="w-[580px] rounded-2xl sm:border-spacing-4 bg-gray-50 sm:border-2 p-5">
          <div className="text-[#333333] text-[32px] mb-5 font-semibold">Log in</div>
          <label className="block mb-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-[#666666]">
              Email address 
            </span>
            <input
              type="email"
              name="email"
            //   value={email}
            //   onChange={(event)=> setEmail(event.target.value)}
              className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </label>
          
          <label className="block mb-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-[#666666]">
              Password
            </span>
            <input
              type="password"
              name="password"
            //   value={password}
            //   onChange={(event)=>setPassword(event.target.value)}
              className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Password"
            />
            {/* {errorMessage && <p className="font-semibold text-red-500 ">{errorMessage}</p>} */}
            {/* <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
              className="text-[#333333]"
            /> */}
            
            <CheckboxCustom label="Remember me"/>
          </label>
    
          <div className="text-[#333333] text-[14px] font-normal">
            By continuing, you agree to the Terms of use and Privacy Policy.
          </div>
          <div className="w-full mt-4 ">
            <button 
            className="w-full h-[50px] bg-slate-600 rounded-3xl" 
            // onClick={handleLogin} 
            >
              <span>Login</span>
            </button> 
          </div>
          
          <div className="flex flex-col justify-center items-center mt-4">
            <a className="">
              <div className="text-[#333333] text-[14px] font-normal underline">
                Forget your password
              </div>
            </a>
            
            <div className="text-[#333333] text-[14px] font-normal mt-4">
              Don’t have an acount?
                <Link className="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500" href="/auth/register"> Sign up</Link>
            </div>
          </div>
        </div>
      );
}

export default LoginPage;