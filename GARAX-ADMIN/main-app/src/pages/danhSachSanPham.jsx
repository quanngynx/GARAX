import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import API_ROUTES from "../api";

// Khai báo columns bên ngoài hàm chính để tối ưu
const columns = [
  { field: "id", headerName: "ID", minWidth: 20, maxWidth:200 },
  {
    field: "fullName",
    headerName: "Tên sản phẩm",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    minWidth: 150,
    maxWidth:400
  },
  {
    field: "cate",
    headerName: "Loại",
    type: "string",
    minWidth: 100,
    maxWidth:238
  },
  {
    field: "price",
    headerName: "Đơn giá",
    type: "number",
    minWidth: 50,
    maxWidth: 300,
  },

];

const rows = [
  { id: 1,fullName:"Phụ tùng oto",cate:"nội",price:"123221345"  },
  { id: 3,fullName:"Phụ tùng otos",cate:"nội",price:"123221345"  },
  { id: 2,fullName:"Phụ tùng điện",cate:"ngoại",price:"1232421445"  },

];


const paginationModel = { page: 0, pageSize: 5 };

function danhSachSanPham() {
  const handleRowClick = (params) => {
    
    
  };

  return (
    <div>
      <div className="mb-6">
        <div className="p-3 w-full h-[50px] flex">
          <p className="text-2xl font-semibold">Danh sách sản phẩm hệ thống</p>
        </div>
        <Paper sx={{ height: 400, maxWidth: "97%", overflow: "hidden" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 11]}
            checkboxSelection
            sx={{ border: 0 , overflowX: 'auto'}}
            onRowClick={handleRowClick}
          />
        </Paper>
      </div>
    </div>
  );
}

export default danhSachSanPham;
