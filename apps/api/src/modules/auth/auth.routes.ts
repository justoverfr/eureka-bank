import { Router } from 'express';

import { validateRequest } from '@/middlewares/validation';

import { loginHandler, registerHandler } from './auth.controller';
import { loginBodySchema, registerBodySchema } from './auth.schema';

const authRoutes = Router();

authRoutes.post('/register', validateRequest({ body: registerBodySchema }), registerHandler);
authRoutes.post('/login', validateRequest({ body: loginBodySchema }), loginHandler);

export { authRoutes };
