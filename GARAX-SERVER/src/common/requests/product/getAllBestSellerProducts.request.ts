/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GetAllBestSellerProducts {
  fields?: any;
  limit?: number;
  page?: number;
  filters?: object;
  sortBy?: string;
  sortType?: any;
  getCategoryFilter?: boolean;
  getBrandFilter?: boolean;
  populateCategory?: boolean;
  populateBrand?: boolean;
  fullTextSearch?: boolean;
}
