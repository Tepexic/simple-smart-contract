import Web3 from "web3";
const contractABI = [];
const contractAddress = "0xA8fe7Cd7A7dB9Fb15D98fC8e809610427f8b79eA";

const web3 = new Web3("http://127.0.0.1:8545");

const simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

web3.eth.getAccounts().then(console.log);
console.log(simpleSmartContract);
