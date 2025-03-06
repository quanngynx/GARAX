import express from 'express';
export const routerAuth = express.Router();

import { AuthController } from '@/controllers';

import { asyncHandler } from '@/middlewares';

// import { authentication } from '@/services/auth/utils'

const authController = AuthController.default;

routerAuth.post('/auth/register', asyncHandler(authController.register));
routerAuth.post('/auth/login', asyncHandler(authController.login));
routerAuth.post('/auth/verify/otp', asyncHandler(authController.verifyOtp));

// Authentication
// routerAuth.use(authentication);
// Logout

routerAuth.post('/auth/logout', asyncHandler(authController.logout));
