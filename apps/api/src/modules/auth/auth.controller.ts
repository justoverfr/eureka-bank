import { FastifyReply, FastifyRequest } from 'fastify';

import { createUser } from '@/modules/users/user.service';

import { RegisterBody } from './auth.schema';

export async function registerHandler(
  request: FastifyRequest<{ Body: RegisterBody }>,
  reply: FastifyReply,
) {
  const user = await createUser(request.body);

  const { password, ...userWithoutPassword } = user;

  reply.send(userWithoutPassword);
}
