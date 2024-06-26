import fs from 'fs';

import dotenv from 'dotenv';

import { blockchain } from '@/utils/blockchain';

dotenv.config();

export async function makeTransaction(
  receiverHash: string,
  currency: string,
  amount: string,
  senderPrivateKey: string,
) {
  const senderAccount = blockchain.eth.accounts.privateKeyToAccount(senderPrivateKey);

  let transaction = {};
  if (currency === 'erfb') {
    const contractAddress = '0xb6353EFfEB94353C01a4e7D1c784639C66F34fc7';

    const abiJson = fs.readFileSync(`./src/modules/transactions/contract-abi.json`, 'utf-8');
    const contractAbi = JSON.parse(abiJson);

    const contract = new blockchain.eth.Contract(contractAbi, contractAddress);

    // convert amount to uint256
    amount = blockchain.utils.toWei(amount, 'ether');

    const tx = contract.methods.transfer(receiverHash, amount);
    const data = tx.encodeABI();

    transaction = {
      from: senderAccount.address,
      to: contractAddress,
      data,
      gas: await tx.estimateGas({ from: senderAccount.address }),
      gasPrice: await blockchain.eth.getGasPrice(),
    };
  } else {
    transaction = {
      from: senderAccount.address,
      to: receiverHash,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: blockchain.utils.toWei(amount, currency as any),
      gas: '21000',
      gasPrice: await blockchain.eth.getGasPrice(),
    };
  }

  const signedTransaction = await senderAccount.signTransaction(transaction);
  return await blockchain.eth
    .sendSignedTransaction(signedTransaction.rawTransaction!)
    .then((receipt) => {
      return receipt;
    })
    .catch((error) => {
      return error;
    });
}
