import React, { useState } from "react";
import axios from "axios";
import API_ROUTES from "../../api";
import { Box, Button, FormHelperText, Typography, CircularProgress } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 

function Verified() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); 
  const email = localStorage.getItem('email');
  const navigate = useNavigate(); 
  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  // Hàm xử lý khi xác minh OTP
  const handleVerifyOtp = async (data) => {
    setLoading(true); // Hiển thị loading
    try {
      const response = await axios.post(API_ROUTES.VERIFY, {
        email: email,
        otp: data.otp,  
      });
      setMessage(response.data.message);

      setTimeout(() => {
        navigate('/auth/login');
      }, 2000);
      
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'OTP verification failed');
    }
    setLoading(false); // Tắt loading
  };

  return (
    <Box 
      className="bg-white p-10 flex flex-col justify-center items-center"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h4" gutterBottom color="primary">
        Verify Your OTP
      </Typography>
      <Typography variant="body1" gutterBottom color="textSecondary">
        Enter the OTP sent to your email ({email})
      </Typography>
      
      <form onSubmit={handleSubmit(handleVerifyOtp)} style={{ width: '100%', maxWidth: '400px' }}>
        <Controller
          control={control}
          name="otp"
          rules={{ validate: (value) => value.length === 6 }}
          render={({ field, fieldState }) => (
            <Box mb={3}>
              <MuiOtpInput
                value={field.value}
                onChange={field.onChange}
                length={6}
                gap={1.5}
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: '20px',
                    height: '56px',
                  },
                }}
              />
              {fieldState.invalid && (
                <FormHelperText error>OTP must be 6 digits</FormHelperText>
              )}
            </Box>
          )}
        />

        <Box textAlign="center" mb={2}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ width: '100%', height: '50px' }}
            disabled={loading} 
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Verify OTP'}
          </Button>
        </Box>
      </form>

      {message && (
        <Typography variant="body1" color={message.includes('success') ? 'green' : 'error'} mt={2}>
          {message}
        </Typography>
      )}
    </Box>
  );
}

export default Verified;
