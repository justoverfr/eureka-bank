import { FastifyReply, FastifyRequest } from 'fastify';

import {
  readReceivedRequests,
  readSentRequests,
} from '@/modules/contact-requests/contact-request.service';

import { readUserById, readUsers, searchUsers } from './user.service';

export async function getUsersHandler(
  request: FastifyRequest<{ Querystring: { search: string } }>,
  reply: FastifyReply,
) {
  if (!request.query.search) {
    return await readUsers();
  }

  return await searchUsers(request.query.search);
}
