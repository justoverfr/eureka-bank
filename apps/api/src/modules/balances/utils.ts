import fs from 'fs';

import dotenv from 'dotenv';

import { blockchain } from '@/utils/blockchain';

dotenv.config();

export async function getAddressBalance(address: string, currency: string) {
  if (currency !== 'erfb') {
    const balance = await blockchain.eth.getBalance(address);
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    return blockchain.utils.fromWei(balance, currency as any);
  } else {
    const contractAddress = '0xb6353EFfEB94353C01a4e7D1c784639C66F34fc7';

    const abiJson = fs.readFileSync(`./src/modules/transactions/contract-abi.json`, 'utf-8');
    const contractAbi = JSON.parse(abiJson);

    const contract = new blockchain.eth.Contract(contractAbi, contractAddress);

    const balance = await contract.methods.balanceOf(address).call();
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    return blockchain.utils.fromWei(balance as any, 'ether');
  }
}
