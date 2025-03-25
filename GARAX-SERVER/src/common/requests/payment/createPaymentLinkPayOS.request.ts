interface itemOrderValues {
  name: string;
  quantity: number;
  price: number;
}

export interface CreatePaymentLinkPayOSRequest {
  orderCode: number;
  amount: number;
  description: string;
  items: itemOrderValues[];
  cancelUrl: string;
  returnUrl: string;
}
