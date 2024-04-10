import dotenv from 'dotenv';
import Web3 from 'web3';

dotenv.config();

const blockchain = new Web3(process.env.QUICKNODE_URL);

export { blockchain };
