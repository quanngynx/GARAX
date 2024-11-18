const express = require('express')
const router = express.Router()
const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')
const ProductCategoryController = require('../../../controllers/productCategory.controller')

router.get('/category-product', AsyncHandler(ProductCategoryController.getAllCategory))
// router.get('/products/:id', AsyncHandler(ProductCategoryController.getProductById))

router.post('/category-product', AsyncHandler(ProductCategoryController.addNewCategory))

// router.put('/products/:id', AsyncHandler(ProductCategoryController.updateProductById))
router.patch('/category-product/:id', AsyncHandler(ProductCategoryController.updateTitleCategory))

router.delete('/category-product', AsyncHandler(ProductCategoryController.deleteTitleCategoryByTitle))
router.delete('/category-product/:id', AsyncHandler(ProductCategoryController.deleteTitleCategoryByTitle))

// router.get('/products/pub', AsyncHandler(ProductCategoryController.findAllProductPub))
// router.get('/products', AsyncHandler(ProductCategoryController.findAllProduct))

module.exports = router
