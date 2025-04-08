// export type EmptyListMetadata = [];

import { BaseResponse } from "../bases/response";

// export const NULLISH_RESPONSE = [];

export const NULLISH_RESPONSE = <T>(): BaseResponse<T> => ({
    message: 'Not found list',
    status: 404,
    metadata: <T>[]
});