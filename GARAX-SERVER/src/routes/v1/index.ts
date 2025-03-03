import express from 'express';
export const routerV1 = express.Router();

routerV1.use('',require('./access'))
routerV1.use('',require('./auth'))
routerV1.use('',require('./account'))
// routerV1.use('',require('./cart'))
// routerV1.use('',require('./order'))
// routerV1.use('',require('./checkout'))
// routerV1.use('',require('./products'))
// routerV1.use('',require('./categoryProducts'))
// routerV1.use('',require('./news'))
// routerV1.use('',require('./categoryNews'))
