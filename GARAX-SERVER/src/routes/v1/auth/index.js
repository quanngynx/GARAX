const express = require('express')
const router = express.Router()

const AuthController = require('../../../controllers/auth.controller')

const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')

const { authentication } = require('../../../services/auth/utils')

router.post('/auth/register', AsyncHandler(AuthController.register))
router.post('/auth/login', AsyncHandler(AuthController.login))
router.post('/auth/verify/otp', AsyncHandler(AuthController.verifyOtp))

// Authentication
// router.use(authentication)
// Logout
router.post('/auth/logout', AsyncHandler(AuthController.logout))

module.exports = router
