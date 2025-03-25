export interface PagedListResponse<T> {
    per_page: number,
    limit: number;
    offset: number;
    totalPages: number;
    totalData: number;
  
    listData: T[];
}
