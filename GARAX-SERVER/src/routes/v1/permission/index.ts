import express from 'express';
export const routerPermission = express.Router();

import { PermissionController } from '@/controllers';
// import authenticateToken from '@/middlewares/auth';
// import authorizeRole from '@/middlewares/authorize';
// import { AuthController } from '@/controllers';
import { asyncHandler } from '@/middlewares';
// import refreshToken from "@/middlewares";

const permissionController = PermissionController.default;

// routerPermission.get('/permission', asyncHandler(permissionController.getAllpermission))
// routerPermission.get('/permission/:id', asyncHandler(permissionController.getProductById))

routerPermission.post('/permission', asyncHandler(permissionController.createAccessForAdmin));
routerPermission.post('/permission', asyncHandler(permissionController.createAccessForUser));

// routerPermission.put('/permission/:id', asyncHandler(permissionController.updateProductById))
// routerPermission.patch('/permission/:id', asyncHandler(permissionController.updatePartProductById))

// routerPermission.delete('/permission', asyncHandler(permissionController.deleteAllProduct))
// routerPermission.delete('/permission/:id', asyncHandler(permissionController.deleteProductById))
