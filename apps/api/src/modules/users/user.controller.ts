import { Request, Response } from 'express';

import {
  readReceivedRequests,
  readSentRequests,
} from '@/modules/contact-requests/contact-request.service';

import { readUserById, readUsers, searchUsers } from './user.service';

export async function getUsersHandler(
  req: Request<
    { id: string },
    object,
    { senderId: number; receiverId: number },
    { search: string }
  >,
  res: Response,
) {
  if (!req.query.search) {
    return await readUsers();
  }

  return await searchUsers(req.query.search);
}
