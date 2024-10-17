const express = require('express');
const router = express.Router();
const authController = require('../../controllers/access.controller')
const authenticateToken = require('../../middlewares/auth');
const authorizeRole = require('../../middlewares/authorize');

router.post('/register', authController.register);
router.post('/verify',authController.verify)
router.get('/profile', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Welcome to your profile', user: req.user });
  });
router.post('/login', authController.login);
router.get('/admin', authenticateToken, authorizeRole(['admin']), (req, res) => {
    res.status(200).json({ message: 'Welcome Admin' });
  });
module.exports = router;
