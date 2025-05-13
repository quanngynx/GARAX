import { Address } from '@/common/interfaces';

export type AddNewAddressRequest = Pick<
  Address,
  'type' | 'streetRoad' | 'wardOrCommune' | 'district' | 'city' | 'userId'
>;
