import { Router } from 'express';

import { validateRequest } from '@/middlewares/validation';

import { registerHandler } from './auth.controller';
import { registerBodySchema } from './auth.schema';

const authRoutes = Router();

authRoutes.post(
  '/register',
  validateRequest({ body: registerBodySchema }),
  registerHandler,
);

const text = 'fromage';

export default text;

export { authRoutes };
