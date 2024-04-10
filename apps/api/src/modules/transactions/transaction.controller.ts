import { Request, Response } from 'express';

import { readUserById } from '../users/user.service';
import { makeTransaction } from './transactions';

export async function sendTransactionHandler(
  req: Request<
    { hash: string },
    object,
    { userId: number; userHash: string; currency: string; amount: string }
  >,
  res: Response,
) {
  const { currency, amount } = req.body;

  const userInfo = await readUserById(req.body.userId);

  try {
    const receipt = await makeTransaction(
      req.params.hash,
      currency,
      amount,
      userInfo.walletPrivateKey!,
    );
    res.status(200).send(receipt);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
