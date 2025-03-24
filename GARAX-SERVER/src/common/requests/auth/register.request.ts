import { Account } from '@/common/interfaces';

export type RegisterRequest = Pick<Account, 'userName' | 'email' | 'password' | 'roleId'>;
