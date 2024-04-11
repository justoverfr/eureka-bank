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
import { getTokens } from './utils';

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

    const { accessToken, refreshToken } = await getTokens(user, req.body.rememberMe);

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
        tokens: {
          accessToken,
          refreshToken,
        },
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

export async function refreshHandler(req: Request, res: Response) {
  const user = req.user;

  const rememberMe = req.jwt.payload.exp - req.jwt.payload.iat > 60 * 60 * 24 * 30;

  const { accessToken, refreshToken } = await getTokens(user, rememberMe);

  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/',
      expires: rememberMe
        ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        : new Date(Date.now() + 24 * 60 * 60 * 1000),
    })
    .send({
      user,
      tokens: {
        accessToken,
        refreshToken,
      },
    });
}
