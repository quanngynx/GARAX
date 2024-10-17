import React, { useState } from 'react';
import axios from 'axios';
import API_ROUTES from '../../api';

function verified(){
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const email = localStorage.getItem('email')
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
    return (
        <div className='bg-black w-full h-full p-16 justify-center '>
                <form className='bg-red-950 h-full  w-[50%] content-center' onSubmit={handleVerifyOtp}>
                    <input type="text" className='text-black' placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} required />
                    <button className='bg-black ' type="submit">Verify OTP</button>
                </form>
            {message && <p>{message}</p>}
        </div>
    );
}
export default verified;
