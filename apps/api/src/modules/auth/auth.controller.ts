import { Request, Response } from 'express';

import {
  createUser,
  updateUserWalletAddress,
  updateUserWalletPrivateKey,
} from '@/modules/users/user.service';
import { blockchain } from '@/utils/blockchain';

import { RegisterBody } from './auth.schema';

export async function registerHandler(
  request: Request<object, object, RegisterBody>,
  reply: Response,
) {
  const user = await createUser(request.body);

  const web3Account = blockchain.eth.accounts.create();

  await updateUserWalletAddress(user.id, web3Account.address);
  const newUser = await updateUserWalletPrivateKey(
    user.id,
    web3Account.privateKey,
  );

  reply.send(newUser);
}
