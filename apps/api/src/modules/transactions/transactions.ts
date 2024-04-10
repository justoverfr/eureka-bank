import { getMaxPriorityFeePerGas } from 'web3/lib/commonjs/eth.exports';

import { blockchain } from '@/utils/blockchain';

export async function makeTransaction(
  receiverHash: string,
  currency: string,
  amount: string,
  senderPrivateKey: string,
) {
  const senderAccount = blockchain.eth.accounts.privateKeyToAccount(senderPrivateKey);

  const transaction = {
    from: senderAccount.address,
    to: receiverHash,
    value: blockchain.utils.toWei(amount, 'ether'),
    gas: '21000',
    gasPrice: await blockchain.eth.getGasPrice(),
  };

  //   return await blockchain.eth
  //     .sendTransaction(transaction)
  //     .then((receipt) => {
  //       return receipt;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  const signedTransaction = await senderAccount.signTransaction(transaction);
  return await blockchain.eth
    .sendSignedTransaction(signedTransaction.rawTransaction!)
    .then((receipt) => {
      return receipt;
    })
    .catch((error) => {
      console.error(error);
    });
}
