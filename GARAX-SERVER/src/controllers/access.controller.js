const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');
require('dotenv').config();

const register = async (req, res) => {
    try {
        const { email, password, fullname, phone } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Kiểm tra xem email đã tồn tại chưa
        const user = await User.findByEmail(email);
        if (user) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo user mới
        await User.create(email, hashedPassword, fullname, phone);

        return res.status(201).json({ message: 'User created' });

    } catch (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra xem email có tồn tại không
        const user = await User.findByEmail(email);
        if (!user) {
            console.log("User not found:", email); // Ghi lại email không tìm thấy
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        console.log("Password from request:", password);
        console.log("Hashed password from DB:", user.Password);


        // if (typeof password === 'string' && typeof user.Password === 'string') {
          //  isMatch = await bcrypt.compare(password, user.Password);

        //     console.log("Password match:", isMatch);
        // } else {
        //     console.error("Invalid input for bcrypt.compare():", password, user.Password);
        // }
       const isMatch = await bcrypt.compare(password, user.Password);
        if (isMatch) {
            // Tạo token nếu mật khẩu hợp lệ
            const token = jwt.sign({ IDAcc: user.IDAcc }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login successful', token });
        } else {
            console.log("Password mismatch"); // Ghi lại khi mật khẩu không khớp
            return res.status(400).json({ error: 'Invalid email or password' });
        }

    } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    register,
    login
};
