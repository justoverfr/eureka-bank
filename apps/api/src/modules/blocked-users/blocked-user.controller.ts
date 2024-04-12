import { Request, Response } from 'express';

import { readUserById } from '@/modules/users/user.service';

import { deleteBlockedUser, readBlockedUsers } from './blocked-user.service';

export async function getBlockedUsersHandler(
  req: Request<object, object, { blockerId: number }>,
  res: Response,
) {
  const blocked = await readBlockedUsers(req.body.blockerId);

  const blockedUsers = [];
  for (const contactPair of blocked) {
    const { blockedId } = contactPair;

    const blockedUser = await readUserById(blockedId);
    blockedUsers.push(blockedUser);
  }

  return blockedUsers;
}

export async function blockUserHandler(
  req: Request<{ id: string }, object, { blockerId: number; blockedId: number }>,
  res: Response,
) {
  return req.body;
}

export async function unblockUserHandler(
  req: Request<{ id: string }, object, { blockerId: number; blockedId: number }>,
  res: Response,
) {
  return await deleteBlockedUser(req.body.blockerId, req.body.blockedId);
}
