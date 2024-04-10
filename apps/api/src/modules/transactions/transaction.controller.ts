import { Request, Response } from 'express';

import { readUserById, readUserByWalletAddress } from '../users/user.service';
import { createTransaction } from './transaction.service';
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

  const senderInfo = await readUserById(req.body.userId);
  const receiverInfo = await readUserByWalletAddress(req.params.hash);

  try {
    const receipt = await makeTransaction(
      req.params.hash,
      currency,
      amount,
      senderInfo.walletPrivateKey!,
    );

    if (!receipt) {
      res.status(400).send('Transaction failed');
      return;
    }

    const newTransaction = await createTransaction({
      address: receipt.transactionHash as string,
      senderId: req.body.userId,
      senderWalletAddress: senderInfo.walletAddress!,
      receiverId: receiverInfo ? receiverInfo.id : null,
      receiverWalletAddress: req.params.hash,
      currency,
      amount,
    });

    res.status(200).send(newTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
