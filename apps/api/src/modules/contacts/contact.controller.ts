import { FastifyReply, FastifyRequest } from 'fastify';

import { readBlockedContacts } from '@/modules/blocked-users/blocked-user.service';
import {
  createContactRequest,
  readReceivedRequests,
  readSentRequests,
} from '@/modules/contact-requests/contact-request.service';
import { readUserById } from '@/modules/users/user.service';

import { readContacts } from './contact.service';

export async function getContactsHandler(
  req: FastifyRequest<{ Body: { userId: number } }>,
  reply: FastifyReply,
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

export async function sendContactRequestHandler(
  request: FastifyRequest<{
    Body: { senderId: number; receiverId: number };
    Params: { id: string };
    Querystring: { search: string };
  }>,
  reply: FastifyReply,
) {
  return await createContactRequest({
    senderId: request.body.senderId,
    receiverId: request.body.receiverId,
  });
}

export async function getBlockedContactsHandler(
  req: FastifyRequest<{ Body: { blockerId: number } }>,
  reply: FastifyReply,
) {
  const blockedContacts = await readBlockedContacts(req.body.blockerId);

  const blockedUsers = [];
  for (const contactPair of blockedContacts) {
    const { blockedId } = contactPair;

    const blockedUser = await readUserById(blockedId);
    blockedUsers.push(blockedUser);
  }

  return blockedUsers;
}

export async function getReceivedRequestsHandler(
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply,
) {
  const receivedRequests = await readReceivedRequests(request.params.id);

  const users = [];
  for (const request of receivedRequests) {
    const senderUser = await readUserById(request.senderId);
    users.push(senderUser);
  }

  reply.send(users);
}

export async function getSentRequestsHandler(
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply,
) {
  const sentRequests = await readSentRequests(request.params.id);

  const users = [];
  for (const request of sentRequests) {
    const receiverUser = await readUserById(request.receiverId);
    users.push(receiverUser);
  }

  reply.send(users);
}
