import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import API_ROUTES from "../api";
import PageHeader from "../pages/CaiDat/components/pageHeader";
import EditIcon from "@mui/icons-material/Edit";
import { NavLink } from "react-router-dom";


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
  {
    field: "action",
    headerName: "",
    renderCell: (params) => (
      <div className="items-center flex justify-end gap-3">
        <NavLink to={`/orders/details`} aria-label="Details">
          <button  type="button" className="w-28 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs mt-2.5 px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <EditIcon style={{}} />
              Chi tiết
          </button>
        </NavLink>
      </div>
    ),
    sortable: false,
    minWidth: 150,
    maxWidth: 300,
  },
];
const paginationModel = { page: 0, pageSize: 5 };

function DanhSachDonHang() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    // axios
    //   .get(API_ROUTES.GETUSER)
    //   .then((response) => {
    //     const user1 = response.data.map((user) => ({
    //       id: user.IDAcc,
    //       fullName: user.Fullname,
    //       email: user.Email,
    //       phoneNumber: user.Phone,
    //       password: user.Password,
    //     }));
    //     setRows(user1);
    //   })
    //   .catch((error) => console.error("Error fetching users:", error));
    const user1 = [{id:"1",idbooking:"123444",fullName:"Minh",array:"kimi phun, phụt xe, mâm xe",total:"2.000.000 VNĐ"},]
    setRows(user1);
  }, []);

  return (
    <div className="">
      <div className="flex justify-between">
        <NavLink to="/orders/create" aria-label="create">
          <button type="button" className="w-40 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs mt-10 px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <EditIcon style={{}} />
                Tạo đơn hàng
          </button>
        </NavLink>
        <PageHeader />
      </div>
      
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
