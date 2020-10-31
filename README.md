irb(main):037:0> pp abi.select{|a| a["type"] == "function" && a["constant"] == false}.map{|aa| "#{aa["name"]}(#{aa["inputs"].map{|a| a["type"]}.join(',')})"} 
["approve(address,uint256)",
 "decreaseAllowance(address,uint256)",
 "deposit(uint256)",
 "earn()",
 "increaseAllowance(address,uint256)",
 "setController(address)",
 "setGovernance(address)",
 "setMin(uint256)",
 "transfer(address,uint256)",
 "transferFrom(address,address,uint256)",
 "withdraw(uint256)"]
=> ["approve(address,uint256)", "decreaseAllowance(address,uint256)", "deposit(uint256)", "earn()", "increaseAllowance(address,uint256)", "setController(address)", "setGovernance(address)", "setMin(uint256)", "transfer(address,uint256)", "transferFrom(address,address,uint256)", "withdraw(uint256)"]


const Web3 = require('web3')
const web3 = new Web3()
const abi = require('./abis/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c.json')

const functions = abi.filter(function(a){ return a["type"] === "function" && a["constant"] === false})

functions.map(function(a){
    let signature = web3.eth.abi.encodeFunctionSignature(a)
    return `SELECT '${signature.slice(1)}' as hash, '${a["name"]}' as name `
})
web3.eth.abi.encodeFunctionSignature(a)


