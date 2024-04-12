import { Router } from 'express';

import { verifyAccessToken } from '@/middlewares/auth';

import { sendTransactionHandler } from './transaction.controller';

const transactionRoutes = Router();

transactionRoutes.post('/:receiverWalletAddress', verifyAccessToken, sendTransactionHandler);

export { transactionRoutes };
