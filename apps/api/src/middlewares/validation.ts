import { NextFunction, Request, Response } from 'express';

import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { ZodError, ZodSchema } from 'zod';

interface IValidation {
  params?: ZodSchema;
  query?: ZodSchema;
  body?: ZodSchema;
}

export const validateRequest =
  (schemas: IValidation) =>
  async (req: Request, res: Response, next: NextFunction) => {
    let errorSource = '';

    try {
      if (schemas.params) {
        try {
          schemas.params.parse(req.params);
        } catch (error) {
          errorSource = 'params';
          throw error;
        }
      }

      if (schemas.query) {
        try {
          schemas.query.parse(req.query);
        } catch (error) {
          errorSource = 'query';
          throw error;
        }
      }

      if (schemas.body) {
        try {
          schemas.body.parse(req.body);
        } catch (error) {
          errorSource = 'body';
          throw error;
        }
      }
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessage = `${errorSource}.${err.errors[0].path.join('.')}: ${err.errors[0].message}`;

        res.status(StatusCodes.BAD_REQUEST).json({
          statusCode: StatusCodes.BAD_REQUEST,
          code: 'VALIDATION_ERROR',
          error: getReasonPhrase(StatusCodes.BAD_REQUEST),
          message: errorMessage,
          detail: err.name,
        });
      }
      next(err);
    }
  };
