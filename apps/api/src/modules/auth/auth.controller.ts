import { Request, Response } from 'express';

import dotenv from 'dotenv';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { SignJWT } from 'jose';

import {
  createUser,
  readUserByEmail,
  updateUserWalletAddress,
  updateUserWalletPrivateKey,
  validateUserCredentials,
} from '@/modules/users/user.service';
import { blockchain } from '@/utils/blockchain';

import { LoginBody, RegisterBody } from './auth.schema';

dotenv.config();

export async function registerHandler(req: Request<object, object, RegisterBody>, res: Response) {
  const user = await createUser(req.body);

  const web3Account = blockchain.eth.accounts.create();

  await updateUserWalletAddress(user.id, web3Account.address);
  const newUser = await updateUserWalletPrivateKey(user.id, web3Account.privateKey);

  res.status(StatusCodes.CREATED).send(newUser);
}

export async function loginHandler(
  req: Request<object, object, LoginBody>,

  res: Response,
) {
  try {
    const user = await validateUserCredentials(req.body.email, req.body.password);

    const accessToken = await new SignJWT(user)
      .setIssuedAt()
      .setExpirationTime('5m')
      .setProtectedHeader({ alg: 'HS256' })
      .sign(new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET as string));

    const refreshToken = await new SignJWT(user)
      .setIssuedAt()
      .setExpirationTime(req.body.rememberMe ? '30d' : '1d')
      .setProtectedHeader({ alg: 'HS256' })
      .sign(new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET as string));

    res
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        path: '/',
        expires: req.body.rememberMe
          ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
          : new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .send({
        user,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    if (error instanceof Error) {
      res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        error: getReasonPhrase(StatusCodes.UNAUTHORIZED),
        message: error.message,
      });
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
        message: 'An unexpected error occurred',
      });
    }
  }
}
