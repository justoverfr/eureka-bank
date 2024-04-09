import { Router } from 'express';

import { getUsersHandler } from './user.controller';

const userRoutes = Router();

userRoutes.get('/', getUsersHandler);

export { userRoutes };
