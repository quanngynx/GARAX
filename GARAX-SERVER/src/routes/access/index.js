const express = require('express');
const router = express.Router();
const authController = require('../../controllers/access.controller')
const authenticateToken = require('../../middlewares/auth');
const authorizeRole = require('../../middlewares/authorize');

router.post('/register', authController.register);
router.post('/verify',authController.verify)
router.get('/user', authenticateToken, (req, res) => {
  // Sau khi middleware xác thực token thành công, bạn có thể tiếp tục xử lý logic của route này
  res.send(`User ID: ${req.IDAcc} ${req.Role} `);
});
router.post('/login', authController.login);
router.get('/admin', authenticateToken, authorizeRole(['admin']), (req, res) => {
    res.status(200).json({ message: 'Welcome Admin' });
  });
module.exports = router;
