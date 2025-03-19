import express from 'express';
export const routerV1 = express.Router();

import { routerAccess } from './access';
import { routerAuth } from './auth';
import { routerAccount } from './account';
import { routerCategoryProduct } from './categoryProducts';
import { routerProduct } from './products';
import { routerCart } from './cart';
import { routerOrder } from './order';
import { routerCheckout } from './checkout';

routerV1.use('', routerAccess);
routerV1.use('', routerAuth);
routerV1.use('', routerAccount);
routerV1.use('', routerCart);
routerV1.use('', routerOrder);
routerV1.use('', routerCheckout);
routerV1.use('', routerProduct);
routerV1.use('', routerCategoryProduct);
// routerV1.use('',require('./news'));
// routerV1.use('',require('./categoryNews'));
