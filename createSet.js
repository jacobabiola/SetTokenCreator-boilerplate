require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3")

const infura = 'YOUR INFURA ID HERE'
const mnemonicPhrase = 'Your wallet seedphrase here... METAMASK recommended'



const provider = new HDWalletProvider(
	mnemonicPhrase,
	infura
	)


const web3 = new Web3(provider)

const abi = //SetTokenCreator Contract ABI here
const address =//'SetTokenCreator Contract address here' ;

const SetTokenCreator = new web3.eth.Contract(abi,address)



SetTokenCreator.methods.create(/* create function array example like this=>["0xfbe16ba4e8029b759d3c5ef8844124893f3ae470","0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa"],["3000000000000000000000000","3000000000000000000000000","3000000000000000000000000"],["0x8a070235a4b9b477655bf4eb65a1db81051b3cc1"],"0x0014D8a0c42E5eC5D69B2B9190186C494E2a6905","CRYPTO VALLEY INDEX","CTI"*/).send({from: 'your wallet address- METAMASK'})
.then(console.log);




