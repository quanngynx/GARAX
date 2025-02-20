const express = require('express')
const router = express.Router()
const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')
const ProductController = require('../../../controllers/product.controller')

/**
 * @description authorization
 * @method GET : any user
 * @method POST : staff, admin
 * @method PUT : staff, admin
 * @method PATCH : staff, admin
 * @method DELETE : admin
 */

router.get('/products', AsyncHandler(ProductController.getAllProducts))
router.get('/products/without-options', AsyncHandler(ProductController.getAllProductsWithoutOptions))
router.get('/products/:id', AsyncHandler(ProductController.getProductById))

router.post('/products', AsyncHandler(ProductController.addNewProduct))

router.put('/products/:id', AsyncHandler(ProductController.updateProductById))
router.patch('/products/:id', AsyncHandler(ProductController.updatePartProductById))

router.delete('/products', AsyncHandler(ProductController.deleteAllProduct))
router.delete('/products/:id', AsyncHandler(ProductController.deleteProductById))

router.get('/products/pub', AsyncHandler(ProductController.findAllProductPub))
router.get('/products', AsyncHandler(ProductController.findAllProduct))

module.exports = router
