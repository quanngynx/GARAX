'use strict';
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
import PayOS from '@payos/node';
import { CheckoutRequestType, WebhookType } from '@payos/node/lib/type';
// import { Pointer } from 'pointer-wallet';
// const pointer = new Pointer(process.env.POINTER_SECRET_KEY);

// MODEL
// import { db } from '@/models';
// MIDDLEWARE
import { InternalServerError, NotFoundError } from '@/middlewares';
// REQUEST/RESPONSE
import { CancelPaymentLinkPayOSRequest, CreatePaymentLinkPayOSRequest } from '@/common/requests/payment';

const payos = new PayOS(
  String(process.env.PAYOS_CLIENT_ID),
  String(process.env.PAYOS_API_KEY),
  String(process.env.PAYOS_CHECKSUM_KEY)
);

// const myDomain = process.env.MY_DOMAIN || '';
// or

// const payos = new PayOS(
//   "YOUR_PAYOS_CLIENT_ID",
//   "YOUR_PAYOS_API_KEY",
//   "YOUR_PAYOS_CHECKSUM_KEY",
//   "YOUR_PARTNER_CODE"
// );

export class PaymentService {
  static async createPaymentLinkPayOS({
    orderCode,
    amount,
    description,
    items = [],
    cancelUrl,
    returnUrl
  }: CreatePaymentLinkPayOSRequest) {
    // push item to items
    const pushItems = items;
    // ==================
    const requestData: CheckoutRequestType = {
      // orderCode: Number(String(Date.now()).slice(-6)),
      orderCode: orderCode,
      amount: amount,
      description: description,
      items: pushItems,
      cancelUrl: cancelUrl,
      returnUrl: returnUrl
    };

    try {
      const paymentLinkData = await payos.createPaymentLink(requestData);
      console.log('paymentLinkData::', paymentLinkData);
      return paymentLinkData;
    } catch (error) {
      console.error('createPaymentLinkPayOS::', error);
    }
  }

  /**
   * Get payment information of an order that has created a payment link
   * @param {number | string} id Order Id
   */
  static async getPaymentLinkInformationPayOS({ id }: { id: number | string }) {
    const paymentLinkInfo = await payos.getPaymentLinkInformation(id);
    // console.log('paymentLinkInfo::', paymentLinkInfo);
    return paymentLinkInfo;
  }

  static async cancelPaymentLinkPayOS({ orderCode, cancellationReason }: CancelPaymentLinkPayOSRequest) {
    if (!orderCode) throw new NotFoundError(`NOT FOUND orderCode!`);

    try {
      if (cancellationReason !== '') {
        const cancelledPaymentLinkInfo = await payos.cancelPaymentLink(orderCode, cancellationReason);
        return cancelledPaymentLinkInfo;
      }

      const cancelledPaymentLinkInfoWithoutReason = await payos.cancelPaymentLink(orderCode);
      return cancelledPaymentLinkInfoWithoutReason;
    } catch (error) {
      console.error('cancelPaymentLinkPayOS::', error);
      throw new InternalServerError(`error::${error}`);
    }
  }

  static async confirmWebhook({ urlWebhook }: { urlWebhook: string }) {
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
  static async verifyPaymentWebhookData(webhookBody: WebhookType) {
    // const webhookBody = req.body;
    const paymentData = payos.verifyPaymentWebhookData(webhookBody);
    console.log('paymentData::', paymentData);
    return paymentData;
  }

  // static async createPaymentLinkPressPay({
  //   amount,
  //   currency,
  //   message,
  //   userID,
  //   orderID,
  //   returnUrl,
  //   name,
  //   image,
  //   description,
  //   quantity,
  //   price,
  // }) {
  //   // get userId
  //   // get bookingId

  //   /// ===================================================
  //   console.log('Nhan thong tin payment::', {
  //     amount,
  //     currency,
  //     message,
  //     userID,
  //     orderID,
  //     returnUrl,
  //     name,
  //     image,
  //     description,
  //     quantity,
  //     price,
  //   });
  //   try {
  //     const { url } = await pointer.createPayment({
  //       amount: amount,
  //       currency: currency,
  //       message: message,
  //       userID: userID,
  //       orderID: orderID,
  //       returnUrl: returnUrl,
  //       orders: [
  //         {
  //           name: name,
  //           image: image,
  //           description: description,
  //           quantity: quantity,
  //           price: price,
  //         },
  //       ],
  //     });
  //     console.log(url);
  //     return url;
  //   } catch (error) {
  //     console.error("error return url::", error)
  //   }
  // }

  /**
   * @param transactionID: _id
   * @returns { "url":"https://pointer.io.vn/payment-gateway?token={token}", "status":200 }
   */
  // static async cancelPaymentPointerWallet(id: string) {
  //   const data = await pointer.cancelOrder(id);
  //   console.log(data);
  //   return data
  // }

  static async deleteProductById() {}

  static async deleteAllProduct() {}

  static async findAllProductPub() {}

  static async findAllProduct() {}
}
