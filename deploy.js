const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "negative employ record meadow swamp destroy page surprise upset burden afford flee",
  "https://rinkeby.infura.io/rI75cuEXPEPQ4xWFzoja"
);

const web3 = new Web3(provider);
