import { Controller, useForm } from "react-hook-form";

import { OtpInputCustom } from "@/components/otpInput";
// function verifyOTP() {
//     return (
//        <div className="flex flex-col">
//         <div className="">Verify Your OTP</div>
//           {/* <div className="">Enter the OTP sent to your email ({email})</div> */}
          
//           <form 
//         //   onSubmit={handleSubmit(handleVerifyOtp)} 
//           style={{ width: '100%', maxWidth: '400px' }}
//           >
//             <Controller
//             //   control={control}
//               name="otp"
//               rules={{ validate: (value: string) => value.length === 6 }}
//               render={({ field, fieldState } : { field: string, fieldState: string}) => (
//                 <div className="mb-3">
//                     {/* <MuiOtpInput
//                     value={field.value}
//                     onChange={field.onChange}
//                     length={6}
//                     gap={1.5}
//                     sx={{
//                       '& .MuiInputBase-root': {
//                         fontSize: '20px',
//                         height: '56px',
//                       },
//                     }}
//                   /> */}

//                   <OtpInputCustom />
//                   {/* {fieldState.invalid && (
//                     <FormHelperText error>OTP must be 6 digits</FormHelperText>
//                   )} */}
//                 </div>
//               )}/>
    
//             {/* <Box textAlign="center" mb={2}>
//               <Button 
//                 type="submit" 
//                 variant="contained" 
//                 color="primary"
//                 sx={{ width: '100%', height: '50px' }}
//                 disabled={loading} 
//               >
//                 {loading ? <CircularProgress size={24} color="inherit" /> : 'Verify OTP'}
//               </Button>
//             </Box> */}

//           </form>
    
//           {/* {message && (
//             <Typography variant="body1" color={message.includes('success') ? 'green' : 'error'} mt={2}>
//               {message}
//             </Typography>
//           )} */}
//        </div>
//       );
// }

// export default verifyOTP;