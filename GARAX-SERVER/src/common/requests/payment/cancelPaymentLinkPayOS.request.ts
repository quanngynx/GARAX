import { CancelPaymentLinkRequestType } from '@payos/node/lib/type';

export interface CancelPaymentLinkPayOSRequest extends CancelPaymentLinkRequestType {
  orderCode: number;
}
