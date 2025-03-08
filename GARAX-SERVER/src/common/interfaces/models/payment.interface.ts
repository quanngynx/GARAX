export interface Payment {
  id: string;
  amount: number;
  desc: string;
  orderId: string;
  currencyId: string;
  created_at: Date;
  updated_at: Date;
}
