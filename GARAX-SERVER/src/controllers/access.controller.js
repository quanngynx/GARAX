const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');
require('dotenv').config();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const {token} = require('morgan');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass:  process.env.EMAIL_PASS,    
    },
  });
  //cai này la register
const register = async (req, res) => {
    try {
        const { email, password, fullname, phone } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+com+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({success: false, message: "Invalid email"})
        }

        const user = await User.findByEmail(email);
        if (user) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        
        const verified = 0;
        const otpTime = new Date(Date.now() + 10 * 60 * 1000);
        const otp = crypto.randomInt(100000, 999999).toString();
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Mã OTP xác nhận đăng ký',
            text: `Mã OTP của bạn là: ${otp}`,
          });
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
       
        // Tạo user mới
       const IDAcc= await User.createAccount(email, hashedPassword, otp, otpTime, verified);
        User.createCustomerDetails(IDAcc, fullname, phone);
        return res.status(200).json({ message: 'User created' });

    } catch (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getCustomerDetails = async (req, res) => {
    try {
        const email = req.query.email; // Lấy email từ query params
        let customers;

        if (email) {
            customers = await User.findAllUsers(email);
            if (!customers) return res.status(404).json({ message: 'Customer not found' });
        } else {
            customers = await User.findAllUsers();
        }

        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: `Error fetching customer details: ${error.message}` });
    }
};

//login ở đây
const login = async (req, res) => {
    try {
        const { email, password} = req.body;

        // Kiểm tra xem email có tồn tại không
        const user = await User.findCusdetails(email);
        if (!user) {
            console.log("User not found:", email); // Ghi lại email không tìm thấy
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        console.log("Password from request:", password);
        console.log("Hashed password from DB:", user.Password);

       
       const isMatch = await bcrypt.compare(password, user.Password);
        if (isMatch) {
            // Tạo token nếu mật khẩu hợp lệ
            const token = jwt.sign({ 
                userID: user.IDAcc ,
                role : user.Role,
                fullname: user.Fullname,
            }, process.env.JWT_SECRET, { expiresIn: '10m' });
            const refreshToken = jwt.sign(
                {  userID: user.IDAcc ,
                    role : user.Role,
                    fullname: user.Fullname,
                }, process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'}
            );
            res.cookie('jwt', refreshToken,
                {
                    httpOnly:true,
                    samSite:'None',secure:true,
                    maxAge:24*60*60*1000
                }
            );
            return res.json({ token, role: user.Role , fullname: user.Fullname});
            
        } else {
            console.log("Password mismatch");
            return res.status(400).json({ error: 'Invalid email or password' });
        }

    } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};



const verify = async (req,res) =>{
  
    try {
        const { email, otp } = req.body;

        // Tìm người dùng theo email
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        if (user.otp !== otp) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }
        else {
            const currentTime = new Date();
            if (currentTime > user.otpTime) {
                return res.status(400).json({ error: 'OTP has expired' });
            }
        await       User.deleteOTP(email);
                    User.updateStatus(email);
            return res.status(200).json({ message: 'OTP verified successfully' });
        }

        
    } catch (err) {
        console.error('Error verifying OTP:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {
    register,
    login,
    verify,
    getCustomerDetails,
};
