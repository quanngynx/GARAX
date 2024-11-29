const express = require('express')
const router = express.Router()
const authController = require('../../../controllers/access.controller')
const authenticateToken = require('../../../middlewares/auth');
const authorizeRole = require('../../../middlewares/authorize');
const AuthController = require('../../../controllers/auth.controller')
const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')

// router.get('/products', AsyncHandler(ProductController.getAllProducts))
// router.get('/products/:id', AsyncHandler(ProductController.getProductById))

// router.post('/products', AsyncHandler(ProductController.addNewProduct))

// router.put('/products/:id', AsyncHandler(ProductController.updateProductById))
// router.patch('/products/:id', AsyncHandler(ProductController.updatePartProductById))

// router.delete('/products', AsyncHandler(ProductController.deleteAllProduct))
// router.delete('/products/:id', AsyncHandler(ProductController.deleteProductById))

// router.get('/products/pub', AsyncHandler(ProductController.findAllProductPub))
// router.get('/products', AsyncHandler(ProductController.findAllProduct))

router.post('/register', authController.register);
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

module.exports = router
