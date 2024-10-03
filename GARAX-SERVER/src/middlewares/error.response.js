'use strict'

const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode')
const { logger0 } = require('../utils/logger')

const StatusCode = {
  FORBIDEN: 403,
  CONFLICT: 409
}

const ReasonStatusCode = {
  FORBIDEN: 'Bad request error',
  CONFLICT: 'Conflict error'
}

class ErrorResponse extends Error {

  constructor(message, status) {
    super(message)
    this.status = status

    // Log the error use the winston
    logger0.error(`${this.status} - ${this.message}`)
  }
}

// 403
class ConflictRequestError extends ErrorResponse {

  constructor(
    message = ReasonStatusCode.CONFLICT,
    statusCode = StatusCode.FORBIDEN
  ) {
    super(message, statusCode)
  }
}

// 403
class BadRequestError extends ErrorResponse {

  constructor(
    message = ReasonStatusCode.CONFLICT,
    statusCode = StatusCode.FORBIDEN
  ) {
    super(message, statusCode)
  }
}

// 401
class AuthFailureError extends ErrorResponse {

  constructor(
    message = ReasonPhrases.UNAUTHORIZED,
    statusCode = StatusCodes.UNAUTHORIZED
  ) {
    super( message, statusCode )
  }
}

// 404
class NotFoundError extends ErrorResponse {

  constructor(
    message = ReasonPhrases.NOT_FOUND,
    statusCode = StatusCodes.NOT_FOUND
  ) {
    super( message, statusCode )
  }
}

// 403
class ForbidenError extends ErrorResponse {

  constructor(
    message = ReasonPhrases.FORBIDDEN,
    statusCode = StatusCodes.FORBIDDEN
  ) {
    super( message, statusCode )
  }
}

// 421
class MisdirectedRequest extends ErrorResponse {

  constructor(
    message = ReasonPhrases.MISDIRECTED_REQUEST,
    statusCode = StatusCodes.MISDIRECTED_REQUEST
  ) {
    super( message, statusCode )
  }
}

module.exports = {
  ConflictRequestError,
  BadRequestError,
  AuthFailureError,
  NotFoundError,
  ForbidenError,
  MisdirectedRequest
}
