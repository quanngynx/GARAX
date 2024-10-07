const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');
const uuid = require('uuid');
require('dotenv').config();

const { OK, CREATED, SuccessResponse  } = require("../core/success.response")
const AccessService = require("../services/access.service")

const register = (req, res) => {
    console.log(req.body)
    const { username,  password } = req.body;


    User.findByUsername(username, (err, user) => {
        if (err) return res.status(500).json({ error: 'Internal server error' });
        if (user) return res.status(400).json({ error: 'Username already exists' });

        const IDAcc = uuid.v4()

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error("Error hashing password:", err); // Thêm logging
                return res.status(500).json({ error: 'Error hashing password' });
            }

            // Tạo người dùng mới
            User.create(IDAcc,username , hashedPassword, (err, userId) => {
                if (err) return res.status(500).json({ error: 'Error creating user' });


                const token = jwt.sign({ IDAcc: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
                return res.status(201).json({ message: 'User created', token });
                const refeshToken = jwt.decode({})
            });
        });
    });
};
const login = (req, res) => {
    const { username, password } = req.body;
    username.findByUsername(username, (err, user) => {
        if (err) return res.status(500).json({ error: 'Internal server error' });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ error: 'Error comparing password' });
            if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });
            const token = jwt.sign({ IDAcc: user.IDAcc }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login successful', token });
        });
    });
};
