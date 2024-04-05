import { ErrorRequestHandler, RequestHandler } from 'express';

import { StatusCodes } from 'http-status-codes';
import { PostgresError } from 'postgres';

const unexpectedRequest: RequestHandler = (_req, res) => {
  res.sendStatus(StatusCodes.NOT_FOUND);
};

const addErrorToRequestLog: ErrorRequestHandler = (err, _req, res, next) => {
  // Check if error is a PostgreSQL error
  if (err instanceof PostgresError) {
    res.status(500).json({
      statusCode: 500,
      code: err.code,
      error: 'Internal Server Error',
      message: err.message,
    });

    next(err);
    return;
  }
  res.locals.err = err;
  next(err);
};

export default () => [unexpectedRequest, addErrorToRequestLog];
