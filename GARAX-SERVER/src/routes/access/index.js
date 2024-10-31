const express = require('express');
const router = express.Router();
const authController = require('../../controllers/access.controller')
const authenticateToken = require('../../middlewares/auth');
const authorizeRole = require('../../middlewares/authorize');
const refreshToken = require("../../middlewares/refreshToken")

//đăng ký router register
router.post('/register', authController.register);
//đăng ký router verify
router.post('/verify',authController.verify)
//đăng ký router refresh token
router.get('/user', authenticateToken , authorizeRole(['user','Admin']), (req, res) => {
  res.send(`User ID: ${req.IDAcc} ${req.role} `);
});
router.post('/refreshToken',refreshToken);

//đăng ký router login
router.post('/login', authController.login);

//dăng ký router role admin
router.get('/admin', authenticateToken, authorizeRole(['Admin']), (req, res) => {
    res.status(200).json({ message: 'Welcome Admin' });
  });

router.get('/users',authController.getCustomerDetails);
module.exports = router;
