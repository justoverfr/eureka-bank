import Web3 from 'web3';

const blockchain = new Web3(process.env.QUICKNODE_URL);

export { blockchain };
