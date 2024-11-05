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

module.exports = router
