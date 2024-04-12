import e, { Request, Response } from 'express';

import { readUserById } from '@/modules/users/user.service';

import {
  cancelContactRequest,
  createContactRequest,
  declineContactRequest,
  readReceivedRequests,
  readSentRequests,
} from './contact-request.service';

export async function sendContactRequestHandler(
  req: Request<
    { id: string },
    object,
    { senderId: number; receiverId: number },
    { search: string }
  >,
  res: Response,
) {
  return await createContactRequest({
    senderId: req.body.senderId,
    receiverId: req.body.receiverId,
  });
}

export async function getReceivedRequestsHandler(req: Request<{ id: number }>, res: Response) {
  const receivedRequests = await readReceivedRequests(req.params.id);

  const users = [];
  for (const request of receivedRequests) {
    const senderUser = await readUserById(request.senderId);
    users.push(senderUser);
  }

  res.send(users);
}

export async function getSentRequestsHandler(req: Request<{ id: number }>, res: Response) {
  const sentRequests = await readSentRequests(req.params.id);

  const users = [];
  for (const request of sentRequests) {
    const receiverUser = await readUserById(request.receiverId);
    users.push(receiverUser);
  }

  res.send(users);
}

export async function acceptContactRequestHandler(req: Request<{ id: string }>, res: Response) {
  return req.body;
}

export async function declineContactRequestHandler(req: Request<{ id: string }>, res: Response) {
  return await declineContactRequest(req.body.senderId, req.body.receiverId);
}

export async function cancelContactRequestHandler(req: Request<{ id: string }>, res: Response) {
  return await cancelContactRequest(req.body.senderId, req.body.receiverId);
}
