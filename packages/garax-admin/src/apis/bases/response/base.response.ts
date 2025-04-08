export interface BaseResponse<T> {
    message: string;
    status: number;
    metadata: T;
  }