
const { SuccessResponse } = require('../middlewares/success.response')
const PaymentService = require("../services/payment.service")

class PaymentController {
  createPaymentLinkPayOS = async (req, res, next) => {
    new SuccessResponse({
      message: 'Create payment link success (PayOS)!',
      metadata: await PaymentService.createPaymentLinkPayOS(req.body)
    }).send(res)
  }

  getPaymentLinkInformationPayOS = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get payment link for information PAYOS success!',
      metadata: await PaymentService.getPaymentLinkInformationPayOS(req.body)
    }).send(res)
  }

  cancelPaymentLinkPayOS = async (req, res, next) => {
    new SuccessResponse({
      message: 'Cancel payment PayOS success!',
      metadata: await PaymentService.cancelPaymentLinkPayOS(req.body)
    }).send(res)
  }

  confirmWebhook = async (req, res, next) => {
    new SuccessResponse({
      message: 'Confirm webhook success!',
      metadata: await PaymentService.confirmWebhook(req.body)
    }).send(res)
  }

  verifyPaymentWebhookData = async (req, res, next) => {
    new SuccessResponse({
      message: 'Verify payment webhook data success!',
      metadata: await PaymentService.verifyPaymentWebhookData(req.body)
    }).send(res)
  }

  createPaymentLinkPressPay = async (req, res, next) => {
    new SuccessResponse({
      message: 'Create payment link success (PressPay)!',
      metadata: await PaymentService.createPaymentLinkPressPay(req.body),
    }).send(res);
  }

  cancelPaymentPointerWallet = async (req, res, next) => {
    new SuccessResponse({
      message: 'Cancel payment presspay success!',
      metadata: await PaymentService.cancelPaymentPointerWallet(req.params),
    }).send(res);
  }

  // deleteProductById = async (req, res, next) => {
  //   new SuccessResponse({
  //     message: 'Delete product success!',
  //     metadata: await PaymentService.deleteProductById()
  //   }).send(res)
  // }

  // deleteAllProduct = async (req, res, next) => {
  //   new SuccessResponse({
  //     message: 'Delete all product success!',
  //     metadata: await PaymentService.deleteAllProduct()
  //   }).send(res)
  // }

  // findAllProductPub = async (req, res, next) => {
  //   new SuccessResponse({
  //     message: 'Find all public product success!',
  //     metadata: await PaymentService.findAllProductPub()
  //   }).send(res)
  // }

  // findAllProduct = async (req, res, next) => {
  //   new SuccessResponse({
  //     message: 'Find all product success!',
  //     metadata: await PaymentService.findAllProduct()
  //   }).send(res)
  // }
}

module.exports = new PaymentController()
