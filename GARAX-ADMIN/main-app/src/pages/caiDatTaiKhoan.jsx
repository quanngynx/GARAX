import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import API_ROUTES from "../api";

// Khai báo columns bên ngoài hàm chính để tối ưu
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Tên đầy đủ",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    minWidth: 160,
    maxWidth:220
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    minWidth: 200,
    maxWidth:238
  },
  {
    field: "password",
    headerName: "Mật khẩu",
    type: "number",
    minWidth: 190,
  },
  {
    field: "phoneNumber",
    headerName: "SĐT",
    type: "number",
    minWidth: 150,
    maxWidth:200
  },
];

const paginationModel = { page: 0, pageSize: 5 };

function caiDatTaiKhoan() {
  const [rows, setRows] = useState([]); // Khai báo useState hợp lệ

  useEffect(() => {
    axios.get(API_ROUTES.GETUSER)
      .then((response) => {
        const user1 = response.data.map(user => ({
          id: user.IDAcc, 
          fullName: user.Fullname,
          email: user.Email,
          phoneNumber: user.Phone,
          password: user.Password
        }));
        setRows(user1);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  
  return (
    <div>
      <div className="mb-6">
        <div className="p-3 w-full h-[50px] flex">
          <p className="text-2xl font-semibold">Danh sách tài khoản cho khách hàng</p>
        </div>
        <Paper sx={{ height: 400, maxWidth: "97%", overflow: "hidden" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 11]}
            checkboxSelection
            sx={{ border: 0 , overflowX: 'auto'}}
          />
        </Paper>
      </div>
    </div>
  );
}

export default caiDatTaiKhoan;
