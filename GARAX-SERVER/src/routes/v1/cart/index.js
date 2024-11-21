const express = require('express')
const router = express.Router()
const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')
const ProductController = require('../../../controllers/product.controller')

const CartController = require('../../../controllers/cart.controller')
const asyncHandler = require('../../../middlewares/asyncHandler.middleware')

router.post('', asyncHandler(CartController.addToCart)) //
router.delete('', asyncHandler(CartController.deleteOnCart)) //
router.post('/update', asyncHandler(CartController.updateCart)) //
router.get('', asyncHandler(CartController.listToCart)) //

module.exports = router
