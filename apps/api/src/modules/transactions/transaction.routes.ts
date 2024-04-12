import { Router } from 'express';

import { verifyAccessToken } from '@/middlewares/auth';

import { getTransactionsHistoryHandler, sendTransactionHandler } from './transaction.controller';

const transactionRoutes = Router();

transactionRoutes.post('/:receiverWalletAddress', verifyAccessToken, sendTransactionHandler);
transactionRoutes.get('/', verifyAccessToken, getTransactionsHistoryHandler);

export { transactionRoutes };
