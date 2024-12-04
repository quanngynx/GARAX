import type { AxiosError } from 'axios';

import { StatusCodes } from '@/constants';
import { ReasonPhrases } from '@/constants';

import { handleBadRequestError } from './handleBadRequest';
import { handleUnauthorizedError } from './handleUnauthorizedError';
import { handleUnknownError } from './handleUnknownError';

import { ErrorResponse } from '@/interfaces/error.response';

/**
 * Handle error when calling API
 * @param {AxiosError} error Axios error
 */
export function handleAxiosError(error: AxiosError): void {
    switch (error.response?.status) {
      case StatusCodes.UNAUTHORIZED:
        handleUnauthorizedError(error);
        break;
      case StatusCodes.BAD_REQUEST:
        handleBadRequestError(error as AxiosError<ErrorResponse>);
        break;
      default:
        handleUnknownError();
        break;
    }
  }