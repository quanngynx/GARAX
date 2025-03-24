import { Router } from 'express';
import { asyncHandler } from '@/middlewares';
import { AccountController } from '@/controllers';

export const routerAccount = Router();

const accountController = AccountController.default;
routerAccount.get('/account', asyncHandler(accountController.getInfoUserByEmail));
// routerAccount.use('/account/:id', )
