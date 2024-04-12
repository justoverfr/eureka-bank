import { Router } from 'express';

import {
  blockUserHandler,
  getBlockedUsersHandler,
  unblockUserHandler,
} from './blocked-user.controller';

const blockedUserRoutes = Router();
blockedUserRoutes.get('/', getBlockedUsersHandler);
blockedUserRoutes.post('/:id', blockUserHandler);
blockedUserRoutes.delete('/:id', unblockUserHandler);
export { blockedUserRoutes };
