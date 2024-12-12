const express = require('express')
const router = express.Router()

const AccessController = require('../../../controllers/access.controller')
const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')
const { authentication } = require('../../../services/auth/utils')

// Authentication
// router.use(authentication)
// handle refreshToken
router.post('/auth/hanlderRefreshToken', AsyncHandler(AccessController.handleRefreshToken))

module.exports = router
