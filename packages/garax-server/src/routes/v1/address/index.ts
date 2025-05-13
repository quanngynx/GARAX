import { Router } from 'express';
import { asyncHandler } from '@/middlewares';
import { AddressController } from '@/controllers';

export const routerAddress = Router();

const addressController = AddressController.default;
routerAddress.get('/addresses/:userId', asyncHandler(addressController.getAllAddressByIdAccount));
routerAddress.get('/address/:id', asyncHandler(addressController.getAddressById));

routerAddress.post('/address', asyncHandler(addressController.addNewAddress));

routerAddress.delete('/address', asyncHandler(addressController.addNewAddress));
