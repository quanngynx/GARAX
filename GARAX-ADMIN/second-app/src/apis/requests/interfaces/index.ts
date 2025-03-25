export interface IGetAllProduct {
    fields?: string;
    search?: string;
    brand?: string;
    category?: string;
    page: number;
    per_page: number;
    limit: number;
    offset?: number;
    ROUTES: string;
}

export interface IGetAllDataTable {
    fields?: string;
    search?: string;
    brand?: string;
    category?: string;
    page: number;
    per_page: number;
    limit: number;
    offset?: number;
    ROUTES: string;
}