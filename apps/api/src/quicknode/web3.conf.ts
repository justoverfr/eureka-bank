import Web3 from 'web3';

// Charger les variables d'environnement
require('dotenv').config();

// Vérifier si les variables d'environnement sont définies
const quicknodeUrl = process.env.QUICKNODE_URL;
const ethAccountAddress = process.env.ETH_ACCOUNT_ADDRESS;

// Vérifier si les variables sont définies et non nulles
if (!quicknodeUrl || !ethAccountAddress) {
  throw new Error('Les variables d\'environnement QUICKNODE_URL ou ETH_ACCOUNT_ADDRESS ne sont pas définies.');
}

// Configuration Quicknode en utilisant les variables d'environnement
const web3 = new Web3(new Web3.providers.HttpProvider(quicknodeUrl));
web3.eth.defaultAccount = ethAccountAddress;

// Fonction pour récupérer les transactions en direct
const getTransactions = async () => {
  try {
    // Récupérer les dernières transactions
    const latestBlock = await web3.eth.getBlockNumber();
    const block = await web3.eth.getBlock(latestBlock, true);
    const transactions = block.transactions;

    console.log(transactions);
  } catch (error) {
    console.error('Erreur lors de la récupération des transactions :', error);
  }
};

setInterval(getTransactions, 5000);
