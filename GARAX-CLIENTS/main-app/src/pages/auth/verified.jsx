import React, { useState } from "react";
import axios from "axios";
import API_ROUTES from "../../api";

import { Box, Button, FormHelperText } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Controller, useForm } from "react-hook-form";

function Verified() {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const email = localStorage.getItem('email');

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_ROUTES.VERIFY, {
        email: email,
        otp: otp
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'OTP verification failed');
    }
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  // Hàm để cập nhật giá trị của OTP khi người dùng nhập
  const handleOtpChange = (e) => {
    setOtp(e); // Cập nhật giá trị OTP
  };

  return (
    <div className="bg-white w-full h-full p-16 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="otp"
          rules={{ validate: (value) => value.length === 6 }}
          render={({ field, fieldState }) => (
            <Box>
              <MuiOtpInput
                value={otp} // Gán giá trị từ state otp
                onChange={handleOtpChange} // Gọi hàm để cập nhật OTP khi nhập
                length={6} // Đảm bảo 6 ô
                sx={{ gap: 1 }}
                {...field}
              />
              {fieldState.invalid && (
                <FormHelperText error>OTP invalid</FormHelperText>
              )}
            </Box>
          )}
        />
        <Box>
          <Button type="submit" onClick={handleVerifyOtp} variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Verified;
