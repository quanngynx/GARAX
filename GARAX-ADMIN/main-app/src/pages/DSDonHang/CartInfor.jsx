import { useState } from 'react'
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import { Combobox } from '@headlessui/react'
const people = [
    'Wade Cooper',
    'Arlene McCoy',
    'Devon Webb',
    'Tom Cook',
    'Tanya Fox',
    'Hellen Schmidt',
  ]
  
function CartInfor(){
    const [value, setValue] = useState(null);

    const suggestions = [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Grape",
      "Mango",
      "Orange",
      "Peach",
    ];
    return(
        <div>
            <div className="font-bold text-xl text-center w-96 h-16 py-5">Đơn hàng</div>
            <div className="item-center flex space-x-4">
                <div className='font-semibold text-lg py-4'>
                    Email:
                </div>
                <div>
                    <Autocomplete className="w-80 h-10"
                        options={suggestions} // Danh sách gợi ý
                        value={value} // Giá trị hiện tại
                        onChange={(event, newValue) => setValue(newValue)} // Cập nhật khi chọn gợi ý
                        renderInput={(params) => (
                        <TextField {...params} label="Search fruits" variant="outlined" />
                        )} // Render textbox với label
                        freeSolo // Cho phép nhập tự do không cần chọn từ gợi ý
                    />
                    <p>Selected: {value}</p>
                </div>

            </div>
        </div>
    );
}

export default CartInfor;