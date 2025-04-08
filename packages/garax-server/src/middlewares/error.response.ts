'use strict';
import { ErrorResponseProps } from '@/common/interfaces';
import { ReasonPhrases, StatusCodes } from '@/common/utils';

export class ErrorResponse extends Error {
  status: number | undefined;

  constructor({ message, status }: ErrorResponseProps) {
    super(message);
    this.status = status;
  }
}

export class ConflictRequestError extends ErrorResponse {
  constructor(message = ReasonPhrases.default.CONFLICT, status = StatusCodes.default.CONFLICT) {
    super({ message, status });
  }
}

export class BadRequestError extends ErrorResponse {
  constructor(message = ReasonPhrases.default.BAD_REQUEST, status = StatusCodes.default.BAD_REQUEST) {
    super({ message, status });
  }
}

export class AuthFailureError extends ErrorResponse {
  constructor(message = ReasonPhrases.default.UNAUTHORIZED, status = StatusCodes.default.UNAUTHORIZED) {
    super({ message, status });
  }
}

export class NotFoundError extends ErrorResponse {
  constructor(message = ReasonPhrases.default.NOT_FOUND, status = StatusCodes.default.NOT_FOUND) {
    super({ message, status });
  }
}

export class ForbidenError extends ErrorResponse {
  constructor(message = ReasonPhrases.default.FORBIDDEN, status = StatusCodes.default.FORBIDDEN) {
    super({ message, status });
  }
}

export class InternalServerError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.default.INTERNAL_SERVER_ERROR,
    status = StatusCodes.default.INTERNAL_SERVER_ERROR
  ) {
    super({ message, status });
  }
}
