import express from 'express';
export const routerV1 = express.Router();

import { routerAccess } from './access';
import { routerAuth } from './auth';
import { routerAccount } from './account';

routerV1.use('', routerAccess)
routerV1.use('', routerAuth)
routerV1.use('', routerAccount)
// routerV1.use('',require('./cart'))
// routerV1.use('',require('./order'))
// routerV1.use('',require('./checkout'))
// routerV1.use('',require('./products'))
// routerV1.use('',require('./categoryProducts'))
// routerV1.use('',require('./news'))
// routerV1.use('',require('./categoryNews'))
