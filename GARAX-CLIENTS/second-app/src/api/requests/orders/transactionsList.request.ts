import { Order } from "@/api/models"

export type TransactionsModel = Pick<Order,
| 'id'
| 'fullname'
| 'phone'
| 'total'
| 'paymentMethod'
>

export type TransactionsListRequest = Partial<TransactionsModel>
