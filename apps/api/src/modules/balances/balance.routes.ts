import { Router } from 'express';

import { verifyAccessToken } from '@/middlewares/auth';

import { getBalanceHandler } from './balance.controller';

const balanceRoutes = Router();

balanceRoutes.get('/', verifyAccessToken, getBalanceHandler);

export { balanceRoutes };
