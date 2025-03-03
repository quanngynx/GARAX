import express from 'express'

import AccessController from '../../../controllers/access.controller'
import AsyncHandler from '../../../middlewares/asyncHandler.middleware'
import { authentication } from '../../../services/auth/utils'

export const routerAccess = express.Router()
// Authentication
// router.use(authentication)
// handle refreshToken
routerAccess.post('/auth/hanlderRefreshToken', AsyncHandler(AccessController.handleRefreshToken))

