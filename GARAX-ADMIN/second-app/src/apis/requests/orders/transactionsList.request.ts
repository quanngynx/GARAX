import { OrderModel } from '@/apis/models';

export type TransactionsModel = Pick<OrderModel,
| 'id'
| 'fullname'
| 'phone'
| 'total'
| 'paymentMethod'
>

export type TransactionsListRequest = Partial<TransactionsModel>
