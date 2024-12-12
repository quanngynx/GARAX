const express = require('express')
const router = express.Router()
const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')
const ProductController = require('../../../controllers/product.controller')

router.get('/orders', AsyncHandler(ProductController.getAllProducts))
router.get('/orders/:id', AsyncHandler(ProductController.getProductById))

router.post('/orders', AsyncHandler(ProductController.addNewProduct))

router.put('/orders/:id', AsyncHandler(ProductController.updateProductById))
router.patch('/orders/:id', AsyncHandler(ProductController.updatePartProductById))

router.delete('/orders', AsyncHandler(ProductController.deleteAllProduct))
router.delete('/orders/:id', AsyncHandler(ProductController.deleteProductById))

router.get('/orders/pub', AsyncHandler(ProductController.findAllProductPub))
router.get('/orders', AsyncHandler(ProductController.findAllProduct))

module.exports = router
