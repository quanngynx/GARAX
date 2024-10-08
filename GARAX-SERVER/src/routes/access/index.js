// 'use strict'

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('./db');
// const router = express.Router();

// router.post('/')

const express = require('express');
const router = express.Router();
const authController = require('../../controllers/access.controller')

// Route đăng ký
router.post('/register', authController.register);

// Route đăng nhập
router.get('/login', authController.login);

module.exports = router;
