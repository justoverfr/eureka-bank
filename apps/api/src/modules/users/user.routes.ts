import { Router } from 'express';

import { getUserHandler, getUsersHandler } from './user.controller';

const userRoutes = Router();

userRoutes.get('/', getUsersHandler);
userRoutes.get('/:id', getUserHandler);

export { userRoutes };
