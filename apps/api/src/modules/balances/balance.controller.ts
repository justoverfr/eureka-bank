import { Request, Response } from 'express';

import { getAddressBalance } from './utils';

export async function getBalanceHandler(
  req: Request<object, object, object, { currency: string }>,
  res: Response,
) {
  const currency = req.query.currency;
  const balance = await getAddressBalance(req.user.walletAddress!, currency);
  return res.status(200).json({
    balance,
    currency,
  });
}
