const express = require('express')
const router = express.Router()
const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')
const ProductCategoryController = require('../../../controllers/productCategory.controller')

router.get('/category', AsyncHandler(ProductCategoryController.getAllCategory))
// router.get('/products/:id', AsyncHandler(ProductCategoryController.getProductById))

router.post('/category', AsyncHandler(ProductCategoryController.addNewCategory))

// router.put('/products/:id', AsyncHandler(ProductCategoryController.updateProductById))
router.patch('/category/:id', AsyncHandler(ProductCategoryController.updateTitleCategory))

router.delete('/category', AsyncHandler(ProductCategoryController.deleteTitleCategoryByTitle))
router.delete('/category/:id', AsyncHandler(ProductCategoryController.deleteTitleCategoryByTitle))

// router.get('/products/pub', AsyncHandler(ProductCategoryController.findAllProductPub))
// router.get('/products', AsyncHandler(ProductCategoryController.findAllProduct))

module.exports = router
