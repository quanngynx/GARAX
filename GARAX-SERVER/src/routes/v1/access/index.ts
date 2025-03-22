import express from 'express';
import { AccessController } from '@/controllers';
import { asyncHandler } from '@/middlewares';
// import { authentication } from '@/services/auth/utils';

const accessController = AccessController.default;
export const routerAccess = express.Router()
// Authentication
// router.use(authentication)
// handle refreshToken
routerAccess.post('/access/hanlde-refreshToken', asyncHandler(accessController.handleRefreshToken))

