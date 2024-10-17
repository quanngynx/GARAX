import React, { useState } from "react";
import axios from "axios";
import API_ROUTES from "../../api";

import { createRoot } from "react-dom/client";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Controller, useForm } from "react-hook-form";

// import "./styles.css";
import { Box, Button, FormHelperText } from "@mui/material";

function verified() {
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');
//   const email = localStorage.getItem('email')
//   const handleVerifyOtp = async (e) => {
//       e.preventDefault();
//       try {
//       const response = await axios.post(API_ROUTES.VERIFY, {
//               email: email,
//               otp: otp
//           });
//           setMessage(response.data.message);
//       } catch (error) {
//           setMessage(error.response ? error.response.data.message : 'OTP verification failed');
//       }
//   };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="bg-white w-full h-full p-16 flex justify-center items-center">
      {/* <form className='bg-red-950 h-full  w-[50%] content-center' onSubmit={handleVerifyOtp}>
                    <input type="text" className='text-black' placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required />
                    <button className='bg-black ' type="submit">Verify OTP</button>
                </form> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{ validate: (value) => value.length === 6 }}
          render={({ field, fieldState }) => (
            <Box>
              <MuiOtpInput sx={{ gap: 1 }} {...field} length={6} />
              {fieldState.invalid ? (
                <FormHelperText error>OTP invalid</FormHelperText>
              ) : null}
            </Box>
          )}
          name="otp"
        />
        <Box>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </form>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
}
export default verified;
