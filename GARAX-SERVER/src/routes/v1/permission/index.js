const express = require('express')
const router = express.Router()
const PermissionController = require('../../../controllers/permission.controller')
const authenticateToken = require('../../../middlewares/auth');
const authorizeRole = require('../../../middlewares/authorize');
const AuthController = require('../../../controllers/auth.controller')
const AsyncHandler = require('../../../middlewares/asyncHandler.middleware')
const refreshToken = require("../../../middlewares/refreshToken")


// router.get('/permission', AsyncHandler(PermissionController.getAllpermission))
// router.get('/permission/:id', AsyncHandler(PermissionController.getProductById))

router.post('/permission', AsyncHandler(PermissionController.createAccessForAdmin))

// router.put('/permission/:id', AsyncHandler(PermissionController.updateProductById))
// router.patch('/permission/:id', AsyncHandler(PermissionController.updatePartProductById))

// router.delete('/permission', AsyncHandler(PermissionController.deleteAllProduct))
// router.delete('/permission/:id', AsyncHandler(PermissionController.deleteProductById))

module.exports = router
