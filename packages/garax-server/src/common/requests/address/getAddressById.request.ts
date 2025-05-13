import { Address } from '@/common/interfaces';

export type GetAddressByIdRequest = Pick<
  Address,
  'type' | 'streetRoad' | 'wardOrCommune' | 'district' | 'city' | 'userId'
>;
