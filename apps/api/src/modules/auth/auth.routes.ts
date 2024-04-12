import { Router } from 'express';

import { verifyAccessToken, verifyRefreshToken } from '@/middlewares/auth';
import { validateRequest } from '@/middlewares/validation';

import { loginHandler, refreshHandler, registerHandler } from './auth.controller';
import { loginBodySchema, registerBodySchema } from './auth.schema';

const authRoutes = Router();

authRoutes.post('/register', validateRequest({ body: registerBodySchema }), registerHandler);
authRoutes.post('/login', validateRequest({ body: loginBodySchema }), loginHandler);
authRoutes.post('/refresh', verifyRefreshToken, refreshHandler);

export { authRoutes };
