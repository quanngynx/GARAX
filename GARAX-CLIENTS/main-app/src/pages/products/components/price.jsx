// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import Button from "../../../components/button";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

// eslint-disable-next-line react/prop-types
function Recommend({ handleClick }) {
  return (
    <div className="mt-6 flex justify-between">
      <div className="flex ">
        <Button onClickHandler={handleClick} value="" title="Tất cả sản phẩm" />
        <Button onClickHandler={handleClick} value="Toyota" title="Toyota" />
        <Button onClickHandler={handleClick} value="BMW" title="BMW" />
        <Button onClickHandler={handleClick} value="T-CRoss" title="T-CRoss" />
        <Button onClickHandler={handleClick} value="C-Class" title="C-Class" />
      </div>

      <div className="flex">
        {/* <Button onClickHandler={handleClick} value="" title="Tất cả sản phẩm" /> */}
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <div className="">
            <TextField
              id="outlined-select-currency"
              select
              label="Giá"
              defaultValue="EUR"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value} onClickHandler={handleClick}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Recommend;
