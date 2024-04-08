import { Request, Response } from 'express';

import { createUser } from '@/modules/users/user.service';

import { RegisterBody } from './auth.schema';

export async function registerHandler(
  request: Request<object, object, RegisterBody>,
  reply: Response,
) {
  const user = await createUser(request.body);

  const { password, ...userWithoutPassword } = user;

  reply.send(userWithoutPassword);
}
