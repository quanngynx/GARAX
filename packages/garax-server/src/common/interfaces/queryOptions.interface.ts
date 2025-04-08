/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ParamQueryOptions {
  orderBy?: string;
  sortBy?: 'ASC' | 'DESC'; // order = sortBy
  keyword?: string;
  field?: string;
}
export interface ParamQueryMustHave extends ParamQueryOptions {
  page: number;
  limit: number;
}

export interface ParamFilters<T> {
  filters: Partial<Record<keyof T, any>>;
}
export interface ParamSearch<T> {
  field: keyof T;
  keyword: string;
}
export interface ParamSort<T> {
  field: keyof T;
  order: 'ASC' | 'DESC';
}
export interface ParamPagination {
  page: number;
  limit: number;
}
export interface QueryOptions<T> {
  filters: Partial<Record<keyof T, any>>;
  search: ParamSearch<T>;
  sort: ParamSort<T>;
  pagination: ParamPagination;
}
