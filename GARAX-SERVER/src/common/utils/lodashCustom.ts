import _ from 'lodash';

type GetInfoDataParams<T> = {
  fields?: Array<keyof T>;
  object?: T;
};

export const getInfoData: <T>({ fields, object }: GetInfoDataParams<T>) => Partial<T> = <T>({
  fields = [],
  object = {} as T
}: GetInfoDataParams<T>) => {
  return _.pick(object, fields);
};
