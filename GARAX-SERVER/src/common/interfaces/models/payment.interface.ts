export interface Payment {
  id: string;
  amount: number;
  desc: string;
  orderId: string;
  currencyId: string;
  createdAt: Date;
  updatedAt: Date;
}
