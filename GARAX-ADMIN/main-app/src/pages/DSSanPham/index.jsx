import {NavLink} from 'react-router-dom';

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect, Component } from "react";
// import API_ROUTES from "../../api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SubmenuTrigger from './components/SubmenuTrigger';
import MainFeat from "./components/mainFeat";
// import SelectFeat from "./components/selectFeat";

const columns = [
  { field: "id", headerName: "ID", minWidth: 20, maxWidth: 200 },
  {
    field: "thumble",
    headerName: "Hình ảnh",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    minWidth: 150,
    maxWidth: 400,
  },
  {
    field: "fullName",
    headerName: "Tên sản phẩm",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    minWidth: 200,
    maxWidth: 400,
  },
  {
    field: "cate",
    headerName: "Loại",
    type: "string",
    minWidth: 100,
    maxWidth: 238,
  },
  {
    field: "price",
    headerName: "Đơn giá",
    type: "number",
    minWidth: 150,
    maxWidth: 300,
  },
  {
    field: "action",
    headerName: "Hành động",
    type: Component,
    minWidth: 150,
    maxWidth: 300,
  },
];

const rows = [
  { id: 1, thumble: "", fullName: "Phụ tùng oto", cate: "nội", price: "123221345", action: () =>
            <div className="flex items-center justify-end gap-11">
                <NavLink to="/product-editor" aria-label="Edit">
                    <i className="icon icon-pen-to-square-regular text-lg leading-none"/>hello
                </NavLink>
                <SubmenuTrigger/>
            </div>
            },
  { id: 3, thumble: "", fullName: "Phụ tùng otos", cate: "nội", price: "123221345", action: () =>
    <div className="flex items-center justify-end gap-11">
        <NavLink to="/product-editor" aria-label="Edit">
            <i className="icon icon-pen-to-square-regular text-lg leading-none"/>hello
        </NavLink>
        <SubmenuTrigger/>
    </div>
   },
];

const paginationModel = { page: 0, pageSize: 5 };

function danhSachSanPham() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleRowClick = (params) => {};

  
  return (
    <div>
      <div className="mb-6">
        {/* <div className="p-3 w-full h-[50px] flex">
          <p className="text-2xl font-semibold">Danh sách sản phẩm hệ thống</p>
        </div> */}

        <MainFeat />

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-0 xl:grid-cols-5 pl-5">
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <div className="flex flex-row items-center w-max">
            <button
              className=" border-[1px] border-slate-400 rounded-3xl py-2 px-8 mx-4"
              // onClick={handleApplyFilters}
            >
              Xác nhận
            </button>
            <button
              className="border-[1px] border-slate-400 rounded-3xl py-2 px-8 mx-4"
              // onClick={handleClearFilters}
            >
              Clear
            </button>
          </div>
        </div>

        <Paper sx={{ height: 400, maxWidth: "97%", overflow: "hidden" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 11]}
            checkboxSelection
            sx={{ border: 0, overflowX: "auto" }}
            onRowClick={handleRowClick}
          />
        </Paper>
      </div>
    </div>
  );
}

export default danhSachSanPham;
