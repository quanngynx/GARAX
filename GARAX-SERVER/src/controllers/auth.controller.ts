import { OK, CREATED, SuccessResponse } from '../middlewares/success.response';
import AuthJWTService from '../services/auth.service';


class AuthController {
  register = async (req, res, next) => {
    console.log(req.body)
    new SuccessResponse({
      message: 'Success, pls enter otp from your email!',
      metadata: await AuthJWTService.register(req.body),
    }).send(res)
  }

  verifyOtp = async (req, res, next) => {
    console.log(req.body)
    new CREATED({
      message: 'Register OK!',
      metadata: await AuthJWTService.verifyOtp(req.body),
      option: 'Đăng kí thành công!'
    }).send(res)
  }

  login = async (req, res, next) => {
    new SuccessResponse({
      metadata: await AuthJWTService.login( req.body )
    }).send(res)
  }

  logout = async (req, res, next) => {
    new SuccessResponse({
      message: 'Logout success!',
      metadata: await AuthJWTService.logout( req.keyStore )
    }).send(res)
  }
}

module.exports = new AuthController()
