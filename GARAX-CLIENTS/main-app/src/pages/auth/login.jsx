import axios from "axios";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import { Button } from "@mui/material";

function login() {
  return (
    <div className="w-[580px] p-2">
      <div className="text-[#333333] text-[32px] font-medium mb-5">Log in</div>
      <label className="block mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-[#666666]">
          Email address or user name
        </span>
        <input
          type="email"
          name="email"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>

      <label className="block mb-5">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-[14px] font-medium text-[#666666]">
          Password
        </span>
        <input
          type="email"
          name="email"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter Password"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
          className="text-[#333333]"
        />
      </label>

      <div className="text-[#333333] text-[14px] font-normal">
        By continuing, you agree to the Terms of use and Privacy Policy.
      </div>
      <div className="w-full mt-4 ">
        <ButtonLogin />
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <a className="">
          <div className="text-[#333333] text-[14px] font-normal underline">
            Forget your password
          </div>
        </a>
        <div className="text-[#333333] text-[14px] font-normal mt-4">
          Don’t have an acount? Sign up{" "}
        </div>
      </div>
    </div>
  );
}
 function ButtonLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5001/auth/login", {
        email: email,
        password: password
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });
  };
  return (
    <button
      className="w-full h-[50px] bg-slate-600 rounded-3xl"
      onClick={handleSubmit}
    >
      <span>login</span>
    </button>
  );
}
export default login;
