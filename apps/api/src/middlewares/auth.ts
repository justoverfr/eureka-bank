import { NextFunction, Request, Response } from 'express';

import dotenv from 'dotenv';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { jwtVerify } from 'jose';

import { readUserById } from '@/modules/users/user.service';

dotenv.config();

export const verifyAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers['authorization']) {
    try {
      let authorization = req.headers['authorization'].split(' ');
      if (authorization[0] !== 'Bearer') {
        return res.status(StatusCodes.FORBIDDEN).send({
          statusCode: StatusCodes.FORBIDDEN,
          code: 'INVALID_TOKEN',
          error: getReasonPhrase(StatusCodes.FORBIDDEN),
          message: 'Invalid token',
        });
      } else {
        req.jwt = await jwtVerify(
          authorization[1],
          new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET),
        );
        req.user = await readUserById(req.jwt.payload.id);
        return next();
      }
    } catch (err) {
      return res.status(StatusCodes.FORBIDDEN).send({
        statusCode: StatusCodes.FORBIDDEN,
        code: 'INVALID_TOKEN',
        error: getReasonPhrase(StatusCodes.FORBIDDEN),
        message: 'Invalid token',
      });
    }
  } else {
    return res.status(StatusCodes.FORBIDDEN).send({
      statusCode: StatusCodes.FORBIDDEN,
      code: 'NO_TOKEN',
      error: getReasonPhrase(StatusCodes.FORBIDDEN),
      message: 'No token provided',
    });
  }
};

export const verifyRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers['authorization']) {
    try {
      let authorization = req.headers['authorization'].split(' ');
      if (authorization[0] !== 'Refresh') {
        return res.status(StatusCodes.FORBIDDEN).send({
          statusCode: StatusCodes.FORBIDDEN,
          code: 'INVALID_TOKEN',
          error: getReasonPhrase(StatusCodes.FORBIDDEN),
          message: 'Invalid token',
        });
      } else {
        req.jwt = await jwtVerify(
          authorization[1],
          new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET),
        );
        req.user = await readUserById(req.jwt.payload.id);
        return next();
      }
    } catch (err) {
      return res.status(StatusCodes.FORBIDDEN).send({
        statusCode: StatusCodes.FORBIDDEN,
        code: 'INVALID_TOKEN',
        error: getReasonPhrase(StatusCodes.FORBIDDEN),
        message: 'Invalid token',
      });
    }
  } else {
    return res.status(StatusCodes.FORBIDDEN).send({
      statusCode: StatusCodes.FORBIDDEN,
      code: 'NO_TOKEN',
      error: getReasonPhrase(StatusCodes.FORBIDDEN),
      message: 'No token provided',
    });
  }
};

declare global {
  namespace Express {
    interface Request {
      jwt: {
        payload: Awaited<ReturnType<typeof readUserById>> & { iat: number; exp: number };
      };
      user: Awaited<ReturnType<typeof readUserById>>;
    }
  }
}
