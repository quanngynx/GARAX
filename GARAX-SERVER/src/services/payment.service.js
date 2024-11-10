'use strict';
require('dotenv').config()

const PayOS = require('@payos/node');
const { Pointer } = require('pointer-wallet');

const pointer = new Pointer(process.env.POINTER_SECRET_KEY);
// MODEL
// const {} = require('../models/product');

// RESPONSE
const { NotFoundError } = require('../middlewares/error.response');
const { notify } = require('../routes/v1/payment');

const payos = new PayOS(
  'YOUR_PAYOS_CLIENT_ID',
  'YOUR_PAYOS_API_KEY',
  'YOUR_PAYOS_CHECKSUM_KEY'
);
// or
// const payos = new PayOS("YOUR_PAYOS_CLIENT_ID", "YOUR_PAYOS_API_KEY", "YOUR_PAYOS_CHECKSUM_KEY", "YOUR_PARTNER_CODE" );

class PaymentService {
  static async createPaymentLinkPayOS({
    orderCode,
    amount,
    description,
    items = [],
    cancelUrl,
    returnUrl,
  }) {
    // push item to items

    // ==================
    const requestData = {
      orderCode: 234234,
      amount: 1000,
      description: 'Thanh toan don hang',
      items: [
        // {
        //   name: "Mì tôm hảo hảo ly",
        //   quantity: 1,
        //   price: 1000,
        // }
      ],
      cancelUrl: 'https://your-domain.com',
      returnUrl: 'https://your-domain.com',
    };

    try {
      const paymentLinkData = await payos.createPaymentLink(requestData);
      console.log('paymentLinkData::', paymentLinkData);
      return paymentLinkData;
    } catch (error) {
      console.error('createPaymentLinkPayOS::', error);
    }
  }

  static async getPaymentLinkInformationPayOS({ id }) {
    const paymentLinkInfo = await payos.getPaymentLinkInformation(id);
    console.log('paymentLinkInfo::', paymentLinkInfo);
    return paymentLinkInfo;
  }

  static async cancelPaymentLinkPayOS({ orderCode, cancellationReason }) {
    if (!orderCode) throw new NotFoundError(`NOT FOUND orderCode!`);

    try {
      if (cancellationReason !== '') {
        const cancelledPaymentLinkInfo = await payos.cancelPaymentLink(
          orderCode,
          cancellationReason
        );
        return cancelledPaymentLinkInfo;
      }

      const cancelledPaymentLinkInfoWithoutReason =
        await payos.cancelPaymentLink(orderCode);
      return cancelledPaymentLinkInfoWithoutReason;
    } catch (error) {
      console.error('cancelPaymentLinkPayOS::', error);
    }
  }

  static async confirmWebhook({ urlWebhook }) {
    const confirmWebhookUrl = await payos.confirmWebhook(urlWebhook);
    console.log('confirmWebhookUrl::', confirmWebhookUrl);

    return confirmWebhookUrl;
  }

  /**
   *
   * @param {req.body} webhookBody
   * @returns metadata: {
   * orderCode: number;
   * amount: number;
   * description: string;
   * accountNumber: string;
   * reference: string;
   * transactionDateTime: string;
   * currency: string;
   * paymentLinkId: string;
   * code: string;
   * desc: string;
   * counterAccountBankId?: string | null;
   * counterAccountBankName?: string | null;
   * counterAccountName?: string | null;
   * counterAccountNumber?: string | null;
   * virtualAccountName?: string | null;
   * virtualAccountNumber?: string | null;
   * }
   */
  static async verifyPaymentWebhookData(webhookBody) {
    // const webhookBody = req.body;
    const paymentData = payos.verifyPaymentWebhookData(webhookBody);
    console.log('paymentData::', paymentData);
    return paymentData
  }

  static async createPaymentLinkPressPay({
    amount,
    currency,
    message,
    userID,
    orderID,
    returnUrl,
    name,
    image,
    description,
    quantity,
    price,
  }) {
    // get userId
    // get bookingId

    /// ===================================================
    console.log('Nhan thong tin payment::', {
      amount,
      currency,
      message,
      userID,
      orderID,
      returnUrl,
      name,
      image,
      description,
      quantity,
      price,
    });
    try {
      const { url } = await pointer.createPayment({
        amount: amount,
        currency: currency,
        message: message,
        userID: userID,
        orderID: orderID,
        returnUrl: returnUrl,
        orders: [
          {
            name: name,
            image: image,
            description: description,
            quantity: quantity,
            price: price,
          },
        ],
      });
      console.log(url);
      return url;
    } catch (error) {
      console.error("error return url::", error)
    }
  }

  /**
    * @param transactionID: _id
    * @returns { "url":"https://pointer.io.vn/payment-gateway?token={token}", "status":200 }
    */
  static async cancelPaymentPointerWallet({ _id }) {
    const data = await pointer.cancelOrder(_id);
    console.log(data);
    return data
  }

  static async deleteProductById() {}

  static async deleteAllProduct() {}

  static async findAllProductPub() {}

  static async findAllProduct() {}
}

module.exports = PaymentService;
