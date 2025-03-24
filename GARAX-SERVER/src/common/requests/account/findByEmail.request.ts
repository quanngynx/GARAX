import { Account } from '@/common/interfaces';

export interface FindByEmail extends Pick<Account, 'email'> {
  select: string[];
}
