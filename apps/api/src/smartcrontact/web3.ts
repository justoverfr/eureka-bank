import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const contractABI: any[] = [[
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "DepositMade",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransferMade",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithdrawalMade",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]];
const contractAddress: string = '0xd9145CCE52D386f254917e481eB44e9943F39138';

const bankContract = new web3.eth.Contract(contractABI, contractAddress);

async function deposit(amount: number): Promise<void> {
    try {
        const accounts = await web3.eth.getAccounts();
        const valueInWei = web3.utils.toWei(amount.toString(), 'ether');
        await bankContract.methods.deposit().send({from: accounts[0], value: valueInWei });
    } catch (error) {
        console.error("Deposit failed:", error);
    }
}

async function withdraw(amount: number): Promise<void> {
    try {
        const accounts = await web3.eth.getAccounts();
        await bankContract.methods.withdraw(amount).send({ from: accounts[0] });
    } catch (error) {
        console.error("Withdrawal failed:", error);
    }
}1

async function transfer(to: string, amount: number): Promise<void> {
    try {
        const accounts = await web3.eth.getAccounts();
        await bankContract.methods.transfer(to, amount).send({ from: accounts[0] });
    } catch (error) {
        console.error("Transfer failed:", error);
    }
}

async function getBalance(account: string): Promise<number> {
    try {
        return await bankContract.methods.getBalance(account).call();
    } catch (error) {
        console.error("Failed to get balance:", error);
        return -1;
    }
}

export {deposit, withdraw, transfer, getBalance };