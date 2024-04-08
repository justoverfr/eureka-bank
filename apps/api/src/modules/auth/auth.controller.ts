import { FastifyReply, FastifyRequest } from 'fastify';

import { createUser } from '@/modules/users/user.service';

import { RegisterBody } from './auth.schema';

export async function registerHandler(
  request: FastifyRequest<{ Body: RegisterBody }>,
  reply: FastifyReply,
) {
  const newUser = await createUser(request.body);

  reply.send(newUser);
}
