import { ErrorRequestHandler, RequestHandler } from 'express';

import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import postgres from 'postgres';

const unexpectedRequest: RequestHandler = (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    statusCode: StatusCodes.NOT_FOUND,
    error: getReasonPhrase(StatusCodes.NOT_FOUND),
    message: `Route ${req.method}:${req.url} not found`,
  });
};

const addErrorToRequestLog: ErrorRequestHandler = (err, _req, res, next) => {
  if (err instanceof postgres.PostgresError) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      code: err.code,
      error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
      message: err.message,
      detail: err.detail,
    });
  } else if (err instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
      message: err.message || 'An unexpected error occurred',
      detail: err.name,
    });
  } else {
    res.locals.err = err;
  }
  next(err);
};

export default () => [unexpectedRequest, addErrorToRequestLog];
