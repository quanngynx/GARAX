import express from 'express';
export const router = express.Router();
// import database from '../db/init.mysql.level0'
import { routerV1 } from './v1/index';

//check apikey

//check permissions

router.use('/v1', routerV1);
