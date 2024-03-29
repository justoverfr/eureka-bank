import { FastifyReply, FastifyRequest } from 'fastify';

import { createUser } from '@/modules/users/user.service';

import { RegisterBody } from './auth.schema';

export async function signupHandler(
  request: FastifyRequest<{ Body: RegisterBody }>,
  reply: FastifyReply,
) {
  const user = await createUser(request.body);

  reply.send(user);
}
