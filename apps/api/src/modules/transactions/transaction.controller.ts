import { Request, Response } from 'express';

import {
  readUserById,
  readUserByWalletAddress,
  readUserWalletPrivateKey,
} from '../users/user.service';
import { createTransaction, readUserTransactions } from './transaction.service';
import { makeTransaction } from './transactions';

export async function sendTransactionHandler(
  req: Request<
    { receiverWalletAddress: string },
    object,
    { userId: number; currency: string; amount: string }
  >,
  res: Response,
) {
  const { currency, amount } = req.body;

  const senderWalletPrivateKey = await readUserWalletPrivateKey(req.user.id);
  const receiverInfo = await readUserByWalletAddress(req.params.receiverWalletAddress);

  try {
    const receipt = await makeTransaction(
      req.params.receiverWalletAddress,
      currency,
      amount,
      senderWalletPrivateKey!,
    );

    if (!receipt) {
      res.status(400).send('Transaction failed');
      return;
    }

    const newTransaction = await createTransaction({
      address: receipt.transactionHash as string,
      senderId: req.user.id,
      senderWalletAddress: req.user.walletAddress,
      receiverId: receiverInfo ? receiverInfo.id : null,
      receiverWalletAddress: req.params.receiverWalletAddress,
      currency,
      amount,
    });

    res.status(200).send(newTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

export async function getTransactionsHistoryHandler(req: Request, res: Response) {
  const transactions = await readUserTransactions(req.user.id);

  res.status(200).send(transactions);
}
