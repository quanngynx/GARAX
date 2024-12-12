require('dotenv').config();

const {
  OK,
  CREATED,
  SuccessResponse,
} = require('../middlewares/success.response');

const PerrmissionService = require('../services/permission.service')

class PermissionController {
  createAccessForAdmin = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get all product success!',
      metadata: await PerrmissionService.createAccessForAdmin(req.body)
    }).send(res)
  }
}

module.exports = new PermissionController()
