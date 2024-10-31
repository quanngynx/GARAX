import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Tên đầy đủ",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 260,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 240,
  },
  {
    field: "password",
    headerName: "Mật khẩu",
    type: "number",
    width: 190,
  },
  {
    field: "phoneNumber",
    headerName: "SĐT",
    type: "number",
    width: 190,
  },
];

const rows = [
  {
    id: 1,
    fullName: "Snow",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
  {
    id: 2,
    fullName: "Lannister",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
  {
    id: 3,
    fullName: "Lannister",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
  {
    id: 4,
    fullName: "Stark",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
  {
    id: 5,
    fullName: "Targaryen",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
  {
    id: 6,
    fullName: "Melisandre",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
  {
    id: 7,
    fullName: "Clifford",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
  {
    id: 8,
    fullName: "Frances",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
  {
    id: 9,
    fullName: "Roxie",
    email: "nguyenvana@gmail.com",
    password: "2342hcxcHVHnhjvb@",
    phoneNumber: "0123456789",
  },
];
const paginationModel = { page: 0, pageSize: 5 };

/**
 * @author
 * @returns fullame email password phone
 */
function caiDatTaiKhoan() {
  return (
    <div className="">
      {/* <div className="w-full h-100% scroll-smooth focus:scroll-auto: ">
        <div className="p-3 w-full h-[50px] flex ">
          <p className="text-2xl mr-1">Customer</p>
          <p className="text-2xl font-semibold">/ Account</p>
        </div>
        <div>
          <Information></Information>
        </div>
        <div className="w-full">
          <Customer></Customer>
        </div>
        <div className="p-3 w-full h-[50px] flex">
          <p className="text-2xl mr-1">Staff</p>
          <p className="text-2xl font-semibold">/ Account</p>
        </div>
        <div>
          <Information></Information>{" "}
        </div>
        <div className="w-full">
          <Staff></Staff>
        </div>
      </div> */}

      {/**
       * @author Nguyen Minh Quan
       */}

      <div className="mb-6">
        <div className="p-3 w-full h-[50px] flex ">
          <p className="text-2xl font-semibold">
            Danh sách tài khoản cho nhân viên
          </p>
        </div>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </div>

      <div className="mb-6 sm:mb-36">
        <div className="p-3 w-full h-[50px] flex ">
          <p className="text-2xl font-semibold">
            Danh sách tài khoản cho nhân viên
          </p>
        </div>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </div>
    </div>
  );
  function Customer() {
    return <div className="overflow-y-auto w-100% h-[250px]"></div>;
  }
  function Staff() {
    return <div className="overflow-y-auto w-100% h-[250px] "></div>;
  }
  function Information() {
    return (
      <div className=" p-2  w-full h-100%">
        <div className="  justify-center gap-x-36 gird-cols-5  flex w-50%">
          <div className="w-100% text-xs">UserName</div>
          <div className="w-100% text-xs">Password</div>
          <div className="w-100% text-xs">Role</div>
          <div className="w-100% text-xs">Email</div>
          <div className="w-100% text-xs">Phone</div>
        </div>
      </div>
    );
  }
}

export default caiDatTaiKhoan;
