import { Cart } from "@/common/interfaces";

export interface CreateUserCartRequest
extends Pick<Cart,
| 'userId'> {}
