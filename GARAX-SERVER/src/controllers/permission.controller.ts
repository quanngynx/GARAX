require('dotenv').config();

import { OK, CREATED, SuccessResponse } from '../middlewares/success.response';

import PerrmissionService from '../services/permission.service';

class PermissionController {
  createAccessForAdmin = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get all product success!',
      metadata: await PerrmissionService.createAccessForAdmin(req.body)
    }).send(res)
  }
}

module.exports = new PermissionController()
