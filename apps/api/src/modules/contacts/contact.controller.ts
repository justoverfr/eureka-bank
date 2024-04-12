import { Request, Response } from 'express';

import {
  createContactRequest,
  readReceivedRequests,
  readSentRequests,
} from '@/modules/contact-requests/contact-request.service';
import { readUserById } from '@/modules/users/user.service';

import { deleteContact, readContacts } from './contact.service';

export async function getContactsHandler(
  req: Request<object, object, { userId: number }>,
  res: Response,
) {
  const contacts = await readContacts(req.body.userId);

  const contactUsers = [];
  for (const contactPair of contacts) {
    const { user1Id, user2Id } = contactPair;

    if (user1Id == req.body.userId) {
      const user2 = await readUserById(user2Id);
      contactUsers.push(user2);
    } else {
      const user1 = await readUserById(user1Id);
      contactUsers.push(user1);
    }
  }

  return contactUsers;
}
export async function deleteContactsHandler(
  req: Request<object, object, { user1Id: number; user2Id: number }>,
  res: Response,
) {
  return await deleteContact(req.body.user1Id, req.body.user2Id);
}
