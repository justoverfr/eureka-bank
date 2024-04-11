import { Router } from 'express';

import { sendTransactionHandler } from './transaction.controller';

const transactionRoutes = Router();

transactionRoutes.post('/:hash', sendTransactionHandler);

export { transactionRoutes };
