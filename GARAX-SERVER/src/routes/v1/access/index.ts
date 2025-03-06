import express from 'express';

import { AccessController } from '../../../controllers';
import AsyncHandler from '../../../middlewares/asyncHandler.middleware';
import { authentication } from '../../../services/auth/utils';

const accessController = AccessController.default;
export const routerAccess = express.Router()
// Authentication
// router.use(authentication)
// handle refreshToken
routerAccess.post('/auth/hanlderRefreshToken', AsyncHandler(accessController.handleRefreshToken))

