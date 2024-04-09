import { Request, Response } from 'express';

import { createUser } from '@/modules/users/user.service';

import { RegisterBody } from './auth.schema';

export async function registerHandler(
  request: Request<object, object, RegisterBody>,
  reply: Response,
) {
  const newUser = await createUser(request.body);

  reply.send(newUser);
}
