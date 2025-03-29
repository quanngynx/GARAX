import { Path } from 'react-hook-form';

export enum SortingType {
  ASC,
  DESC,
}

export interface SortingRequest<T> {
  orderColumnName: Path<T>;
  orderColumnType: SortingType;
}
