/* eslint-disable @typescript-eslint/no-explicit-any */
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";

import Button from "@/components/button/button";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface IRecommend {
  handleCategoryClick: (e: any) => void
  // handleDropdownClick: (e: any) => void
  value: string
}

function Recommend({
  handleCategoryClick,
  // handleDropdownClick,
  value
}: IRecommend) {
  return (
    <div className="mt-6 flex flex-col md:flex-row md:justify-between">
      <div className="flex h-[44px]">
        <Button onClickHandler={() => handleCategoryClick(value)} value="" title="Tất cả sản phẩm" />
        <Button onClickHandler={() => handleCategoryClick(value)} value="Toyota" title="Toyota" />
        <Button onClickHandler={() => handleCategoryClick(value)} value="BMW" title="BMW" />
        <Button onClickHandler={() => handleCategoryClick(value)} value="T-CRoss" title="T-CRoss" />
        <Button onClickHandler={() => handleCategoryClick(value)} value="C-Class" title="C-Class" />
      </div>

      <div className="flex">
        {/* <Button onClickHandler={handleClick} value="" title="Tất cả sản phẩm" /> */}
        {/* <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div className="">
            <TextField
              id="outlined-select-currency"
              select
              label="Sắp xếp theo"
              defaultValue="EUR"
              sx={{
                "& .MuiInputBase-root": {
                  height: 40,
                },
              }}
            >
              {currencies.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  onClickHandler={handleClick}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box> */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
              Sắp xếp giá theo
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Giá tăng dần
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Giá giảm dần
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default Recommend;
