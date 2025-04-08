import express from 'express';
import { asyncHandler } from '@/middlewares';
import { StatictistsController } from '@/controllers';

export const routerStatictists = express.Router();

const statictistsController = StatictistsController.default;

routerStatictists.get('/statictists/status', asyncHandler(statictistsController.getStatus));
routerStatictists.get('/statictists/events', statictistsController.registerUpdates);
routerStatictists.post('/statictists/fact', statictistsController.addFact);
// routerStatictists.get('/statictists/status', asyncHandler(statictistsController.getStatus));
