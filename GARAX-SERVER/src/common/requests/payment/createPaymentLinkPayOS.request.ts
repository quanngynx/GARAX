export interface ItemOrderValues {
  name: string;
  quantity: number;
  price: number;
}

export interface CreatePaymentLinkPayOSRequest {
  orderCode: number;
  amount: number;
  description: string;
  items: ItemOrderValues[];
  cancelUrl: string;
  returnUrl: string;
}
