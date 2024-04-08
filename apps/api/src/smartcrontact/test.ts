// Importez les fonctions des fichiers à tester
import { createAccountAndSendTransaction } from './wallet';
import { deposit, withdraw, transfer, getBalance } from './web3';
import '../quicknode/web3.conf';

// Fonction de test pour créer un compte et envoyer une transaction
async function testCreateAccountAndSendTransaction() {
    console.log("Test de création de compte et envoi de transaction :");
    await createAccountAndSendTransaction();
}

// Fonction de test pour déposer de l'argent
async function testDeposit() {
    console.log("Test de dépôt :");
    const amount = 1; // Montant en ether à déposer
    await deposit(amount);
}

// Fonction de test pour retirer de l'argent
async function testWithdraw() {
    console.log("Test de retrait :");
    const amount = 1; // Montant en ether à retirer
    await withdraw(amount);
}

// Fonction de test pour transférer de l'argent
async function testTransfer() {
    console.log("Test de transfert :");
    const to = '0xAddressDuDestinataire'; // Adresse du destinataire
    const amount = 1; // Montant en ether à transférer
    await transfer(to, amount);
}

// Fonction de test pour obtenir le solde
async function testGetBalance() {
    console.log("Test d'obtention du solde :");
    const account = '0xAdresseDuCompte'; // Adresse du compte dont on veut obtenir le solde
    const balance = await getBalance(account);
    console.log("Solde du compte :", balance);
}

// Exécutez les fonctions de test
testCreateAccountAndSendTransaction();
testDeposit();
testWithdraw();
testTransfer();
testGetBalance();
