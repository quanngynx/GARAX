import express from 'express'
export const routerAuth = express.Router()

import AuthController from '../../../controllers/auth.controller'

import AsyncHandler from '../../../middlewares/asyncHandler.middleware'

import { authentication } from '../../../services/auth/utils'

routerAuth.post('/auth/register', AsyncHandler(AuthController.register))
routerAuth.post('/auth/login', AsyncHandler(AuthController.login))
routerAuth.post('/auth/verify/otp', AsyncHandler(AuthController.verifyOtp))

// Authentication
// routerAuth.use(authentication)
// Logout
routerAuth.post('/auth/logout', AsyncHandler(AuthController.logout))
