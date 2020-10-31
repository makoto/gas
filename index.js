const Web3 = require('web3')
const web3 = new Web3()
// const abi = require('./abis/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c.json')
const abi = require('./abis/0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7.json')

const functions = abi.filter(function(a){ return a["type"] === "function" && a["constant"] === false})

const res = functions.map(function(a){
    let signature = web3.eth.abi.encodeFunctionSignature(a)
    return `SELECT '\\${signature.slice(1)}' as hash, '${a["name"]}' as name `
})
console.log(res.join("\nUNION\n"))



