export interface Payment {
  id: string;
  amount: number;
  desc: string;
  orderId: number;
  currencyId: number;
  createdAt: Date;
  updatedAt: Date;
}
