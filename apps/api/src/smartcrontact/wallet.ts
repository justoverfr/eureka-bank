import Web3 from 'web3';

async function createAccountAndSendTransaction() {
  try {
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

    const account = web3.eth.accounts.create();
    console.log('Nouveau compte créé : ', account);

    const tx = {
      // Adresse du destinataire
      to: '0xAdressDestinataire',
      value: web3.utils.toWei('1', 'ether'),
      gas: 3000000,
    };

    const privateKey = 'PRIVATE_KEY_EXPEDITEUR'; // Remplacez par la clé privée de l'expéditeur

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction envoyée :', receipt);
  } catch (error) {
    console.error("Erreur lors de la création du compte ou de l'envoi de la transaction :", error);
  }
}

createAccountAndSendTransaction();
export { createAccountAndSendTransaction };
