import { Account } from '@/common/interfaces';

export type GetInforAccountResponse = Pick<Account, 'id' | 'email' | 'password' | 'userName' | 'phone' | 'roleId'>;
