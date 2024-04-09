import { Router } from 'express';

import { registerHandler } from './auth.controller';

const authRoutes = Router();

authRoutes.post('/register', registerHandler);

const text = 'fromage';

export default text;

export { authRoutes };
