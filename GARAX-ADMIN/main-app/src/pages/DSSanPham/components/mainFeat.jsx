import { Button } from "@mui/material";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";
import Search from "./search";
const csvData = [
  ["firstname", "lastname", "email"],
  ["John", "Doe", "johndoe@domain.com"],
  ["Jane", "Doe", "janedoe@domain.com"],
];

function mainFeat() {
  const navivate = useNavigate()
  const handleNavToDetail = () => {
    navivate('/products/details')
    console.log("res::",navivate('/products/create'))
  }
  return (
    <div className="p-3 w-full flex justify-between">
      <div className="flex flex-row items-center">
        <div className="">
          <button className="border-[1px] border-slate-400 px-4 py-2 mx-4 my-2 rounded" onClick={handleNavToDetail}>
            Thêm mới sản phẩm <i className="icon-circle-plus-regular" />
          </button>
        </div>
        <div className="border-[1px] border-slate-400 px-4 py-2 rounded">
          <CSVLink
            className="border-[#black] border-0 blue px-4 py-2 mx-4 my-2"
            data={csvData}
          >
            Xuất CSV <i className="icon-file-export-solid" />
          </CSVLink>
        </div>
      </div>
      <div className="flex items-center">
        <Search wrapperClass="lg:w-[326px]" placeholder="Search Product" />
      </div>
    </div>
  );
}

export default mainFeat;
