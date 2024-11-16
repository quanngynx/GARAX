import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import API_ROUTES from "../api";
import PageHeader from "../pages/CaiDat/components/pageHeader";
const columns = [
  { field: "id", headerName: "ID Order", minWidth: 20, maxWidth: 200 },
  { field: "idbooking", headerName: "ID Booking", minWidth: 20, maxWidth: 200 },
  {
    field: "fullName",
    headerName: "Tên khách hàng",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    minWidth: 150,
    maxWidth: 400,
  },
  {
    field: "array",
    headerName: "Sản phẩm",
    type: "string",
    minWidth: 100,
    maxWidth: 238,
  },
  {
    field: "total",
    headerName: "Tổng tiền",
    type: "number",
    minWidth: 50,
    maxWidth: 300,
  },
];
const paginationModel = { page: 0, pageSize: 5 };

function DanhSachDonHang() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get(API_ROUTES.GETUSER)
      .then((response) => {
        const user1 = response.data.map((user) => ({
          id: user.IDAcc,
          fullName: user.Fullname,
          email: user.Email,
          phoneNumber: user.Phone,
          password: user.Password,
        }));
        setRows(user1);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="">
      <PageHeader />
      <div>
        <div className="mb-6">
          <div className="p-3 w-full h-[50px] flex my-2">
            <p className="text-2xl font-semibold">Danh sách đơn hàng</p>
          </div>
          <Paper sx={{ height: 400, maxWidth: "97%", overflow: "hidden" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 11]}
              checkboxSelection
              sx={{ border: 0, overflowX: "auto" }}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default DanhSachDonHang;
