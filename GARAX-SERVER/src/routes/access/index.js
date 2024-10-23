const express = require('express');
const router = express.Router();
const authController = require('../../controllers/access.controller')
const authenticateToken = require('../../middlewares/auth');
const authorizeRole = require('../../middlewares/authorize');

router.post('/register', authController.register);
router.post('/verify',authController.verify)
router.get('/user', authenticateToken , authorizeRole(['user','Admin']), (req, res) => {

  res.send(`User ID: ${req.IDAcc} ${req.role} `);
});
router.post('/login', authController.login);
router.get('/admin', authenticateToken, authorizeRole(['Admin']), (req, res) => {
    res.status(200).json({ message: 'Welcome Admin' });
  });
module.exports = router;
