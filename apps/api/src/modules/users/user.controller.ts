import { Request, Response } from 'express';

import { readUsers, searchUsers } from './user.service';

export async function getUsersHandler(
  req: Request<object, object, object, { search: string }>,
  res: Response,
) {
  if (!req.query.search) {
    res.send(await readUsers());
  }

  res.send(await searchUsers(req.query.search));
}
