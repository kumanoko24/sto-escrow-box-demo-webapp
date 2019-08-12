export const abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "voteMap",
    outputs: [
      {
        internalType: "bool",
        name: "_created",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "_passed",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "_executed",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "_cancelled",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "_voteNum",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_ledger",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_voteHash",
        type: "bytes32"
      }
    ],
    name: "finalise",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_authNum",
        type: "uint256"
      }
    ],
    name: "setAuthNum",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_mode",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "negotiate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "userCertVoucherLedgerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      }
    ],
    name: "setAuthCertVoucherLedgerAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "__data",
        type: "bytes"
      }
    ],
    name: "decodePropose",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_mode",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "decodeCallData",
    outputs: [
      {
        internalType: "bytes32",
        name: "_voteHash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "_voteHash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes"
      }
    ],
    name: "encodeCallData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_mode",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "propose",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_mode",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "encodePropose",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "authNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_voteHash",
        type: "bytes32"
      }
    ],
    name: "cancel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "authCertVoucherLedgerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_ledgerAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_holderAddress",
        type: "address"
      }
    ],
    name: "getLedgerBalanceHumanNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address"
      }
    ],
    name: "setUserCertVoucherLedgerAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_authCertVoucherLedgerAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_userCertVoucherLedgerAddress",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32"
      }
    ],
    name: "ProposeCreated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32"
      }
    ],
    name: "ProposePassed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32"
      }
    ],
    name: "ProposeExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32"
      }
    ],
    name: "ProposeCancelled",
    type: "event"
  }
];

export const bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017743803806200177483398101604081905262000034916200007d565b60016003819055600080546001600160a01b03199081166001600160a01b039586161790915581541691909216179055620000e8565b80516200007781620000ce565b92915050565b600080604083850312156200009157600080fd5b60006200009f85856200006a565b9250506020620000b2858286016200006a565b9150509250929050565b60006001600160a01b03821662000077565b620000d981620000bc565b8114620000e557600080fd5b50565b61167c80620000f86000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063905eb46911610097578063c4d252f511610066578063c4d252f514610245578063dee10df614610258578063ef3cee7814610260578063f9aaacc61461027357610100565b8063905eb469146101ea5780639e476d041461020a578063b1b431601461021d578063b224015e1461023057610100565b80633e22d754116100d35780633e22d7541461017d578063853f893c146101925780638966dc88146101a55780638dca1255146101c857610100565b806302c3e5bf1461010557806308dff881146101375780630b64698c146101575780633df498d71461016a575b600080fd5b610118610113366004610ffd565b610286565b60405161012e9a999897969594939291906113f0565b60405180910390f35b61014a610145366004610ffd565b610378565b60405161012e91906113e2565b61014a610165366004610ffd565b6103d7565b61014a6101783660046111a7565b6103ee565b6101856104a4565b60405161012e91906113b9565b61014a6101a0366004610f9d565b6104b3565b6101b86101b33660046110db565b6104e6565b60405161012e94939291906114e0565b6101db6101d63660046110db565b610510565b60405161012e93929190611499565b6101fd6101f8366004611080565b610536565b60405161012e91906114cf565b61014a6102183660046111a7565b610566565b6101fd61022b366004611225565b6105af565b610238610624565b60405161012e919061148b565b61014a610253366004610ffd565b61062a565b61018561068b565b61023861026e366004610fc3565b61069a565b61014a610281366004610f9d565b6107b6565b6002602081815260009283526040928390208054600180830154838601546003850154600486015460058701546006880180548c51610100988216158902600019019091169b909b04601f81018b90048b028c018b01909c528b8b5260ff8089169c97890481169b620100008a0482169b6301000000909a049091169996986001600160a01b039687169895979487169690931694909283018282801561036e5780601f106103435761010080835404028352916020019161036e565b820191906000526020600020905b81548152906001019060200180831161035157829003601f168201915b505050505090508a565b600033301461038657600080fd5b600082815260026020526040808220805462ff00001916620100001781559051909184917ffa2c5c71f1ff469a1b1851d7bedec70456819c4c0093672d9a057649eb409d619190a250600192915050565b60003330146103e557600080fd5b50600355600190565b600083600114156104445761043b33878786868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506107e792505050565b61044457600080fd5b83600214156104985761048f33878786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a2e92505050565b61049857600080fd5b50600195945050505050565b6001546001600160a01b031681565b60003330146104c157600080fd5b50600080546001600160a01b0383166001600160a01b03199091161790556001919050565b6000806000606084806020019051610501919081019061112e565b92989197509550909350915050565b600080606083806020019051610529919081019061101b565b9196909550909350915050565b606083838360405160200161054d93929190611499565b60405160208183030381529060405290505b9392505050565b6000836104985761048f33878786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cc392505050565b60606040518060600160405280602681526020016116146026913980519060200120858585856040516024016105e894939291906114e0565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091529050949350505050565b60035481565b600033301461063857600080fd5b600082815260026020526040808220805463ff000000191663010000001781559051909184917f2dbc58ca2931be357e06ae15483f1d7c04789ee72f4f6b1ab0456607f308d8db9190a250600192915050565b6000546001600160a01b031681565b604080518082018252601281527162616c616e63654f6628616464726573732960701b6020909101525160009081906060906001600160a01b038616907f70a08231b98ef4ca268c9cc3f6b4590e4bfec28280db06bb5d45e689f2a360be906107079087906024016113b9565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161074591906113a1565b600060405180830381855afa9150503d8060008114610780576040519150601f19603f3d011682016040523d82523d6000602084013e610785565b606091505b50915091508161079457600080fd5b6000818060200190516107aa9190810190611110565b93505050505b92915050565b60003330146107c457600080fd5b50600180546001600160a01b0383166001600160a01b0319909116178155919050565b600080548190610800906001600160a01b03168561069a565b1161080a57600080fd5b600082806020019051610820919081019061101b565b50506000818152600260205260409020600354600182015492935090911180159061085257508054610100900460ff16155b8015610867575080546301000000900460ff16155b61087057600080fd5b60018082018054909101908190556003541415610a215760058101546040516000916001600160a01b0316906108aa9060068501906113ad565b6000604051808303816000865af19150503d80600081146108e7576040519150601f19603f3d011682016040523d82523d6000602084013e6108ec565b606091505b50509050806108fa57600080fd5b815461ff00191661010017825560405183907f21f27dafc044e6748b0b65bf4ac71b4d7c2357ceae9febee7944e58c51900d5790600090a2604080518082018252601181527066696e616c69736528627974657333322960781b6020909101525160009030907f08dff8818d3ac8ac357e524ad94f568839ce31640225c5de30a867fcbe9542329061099090879060240161148b565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516109ce91906113a1565b6000604051808303816000865af19150503d8060008114610a0b576040519150601f19603f3d011682016040523d82523d6000602084013e610a10565b606091505b5050905080610a1e57600080fd5b50505b5060019695505050505050565b600080548190610a47906001600160a01b03168561069a565b11610a5157600080fd5b600082806020019051610a67919081019061101b565b505060008181526002602052604090206003546001820154929350909111801590610a9957508054610100900460ff16155b8015610aae575080546301000000900460ff16155b610ab757600080fd5b6002810154604080518082018252601981527f7472616e7366657228616464726573732c75696e7432353629000000000000006020909101526004830154600384015491516000936001600160a01b03908116937fa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b93610b3c939216916024016113c7565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610b7a91906113a1565b6000604051808303816000865af19150503d8060008114610bb7576040519150601f19603f3d011682016040523d82523d6000602084013e610bbc565b606091505b5050905080610bca57600080fd5b604080518082018252600f81526e63616e63656c28627974657333322960881b6020909101525160009030907fc4d252f50b443574fd08ee62009955d75a9b1c857437a9df3696d235adce2e3f90610c2690879060240161148b565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610c6491906113a1565b6000604051808303816000865af19150503d8060008114610ca1576040519150601f19603f3d011682016040523d82523d6000602084013e610ca6565b606091505b5050905080610cb457600080fd5b50600198975050505050505050565b6001546000908190610cde906001600160a01b03168561069a565b1180610cfe575060008054610cfc906001600160a01b03168561069a565b115b610d0757600080fd5b600080606084806020019051610d20919081019061101b565b6000838152600260205260409020805493965091945092509060ff1615610d4657600080fd5b805460ff1916600190811782556000908201556002810180546001600160a01b03808c166001600160a01b031992831617909255600383018a90556004830180548a8416908316179055600583018054928616929091169190911790558151610db89060068301906020850190610df3565b5060405184907f3c2fc01380168f9f9c7b2dc1a609d0d7c8d64d5c6ef63b94e8afa08a6739453d90600090a250600198975050505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e3457805160ff1916838001178555610e61565b82800160010185558215610e61579182015b82811115610e61578251825591602001919060010190610e46565b50610e6d929150610e71565b5090565b610e8b91905b80821115610e6d5760008155600101610e77565b90565b80356107b0816115f3565b80516107b0816115f3565b80356107b08161160a565b80516107b08161160a565b60008083601f840112610ecc57600080fd5b50813567ffffffffffffffff811115610ee457600080fd5b602083019150836001820283011115610efc57600080fd5b9250929050565b600082601f830112610f1457600080fd5b8151610f27610f228261154b565b611524565b91508082526020830160208301858383011115610f4357600080fd5b610f4e8382846115b9565b50505092915050565b600082601f830112610f6857600080fd5b8135610f76610f228261154b565b91508082526020830160208301858383011115610f9257600080fd5b610f4e8382846115ad565b600060208284031215610faf57600080fd5b6000610fbb8484610e8e565b949350505050565b60008060408385031215610fd657600080fd5b6000610fe28585610e8e565b9250506020610ff385828601610e8e565b9150509250929050565b60006020828403121561100f57600080fd5b6000610fbb8484610ea4565b60008060006060848603121561103057600080fd5b600061103c8686610eaf565b935050602061104d86828701610e99565b925050604084015167ffffffffffffffff81111561106a57600080fd5b61107686828701610f03565b9150509250925092565b60008060006060848603121561109557600080fd5b60006110a18686610ea4565b93505060206110b286828701610e8e565b925050604084013567ffffffffffffffff8111156110cf57600080fd5b61107686828701610f57565b6000602082840312156110ed57600080fd5b813567ffffffffffffffff81111561110457600080fd5b610fbb84828501610f57565b60006020828403121561112257600080fd5b6000610fbb8484610eaf565b6000806000806080858703121561114457600080fd5b60006111508787610eaf565b945050602061116187828801610e99565b935050604061117287828801610eaf565b925050606085015167ffffffffffffffff81111561118f57600080fd5b61119b87828801610f03565b91505092959194509250565b6000806000806000608086880312156111bf57600080fd5b60006111cb8888610ea4565b95505060206111dc88828901610e8e565b94505060406111ed88828901610ea4565b935050606086013567ffffffffffffffff81111561120a57600080fd5b61121688828901610eba565b92509250509295509295909350565b6000806000806080858703121561123b57600080fd5b60006112478787610ea4565b945050602061125887828801610e8e565b935050604061126987828801610ea4565b925050606085013567ffffffffffffffff81111561128657600080fd5b61119b87828801610f57565b61129b81611591565b82525050565b61129b8161159c565b61129b81610e8b565b60006112be8261157f565b6112c88185611583565b93506112d88185602086016115b9565b6112e1816115e9565b9093019392505050565b60006112f68261157f565b611300818561158c565b93506113108185602086016115b9565b9290920192915050565b600081546001811660008114611337576001811461135a57611399565b607f6002830416611348818761158c565b60ff1984168152955085019250611399565b60028204611368818761158c565b955061137385611573565b60005b8281101561139257815488820152600190910190602001611376565b5050850192505b505092915050565b600061055f82846112eb565b600061055f828461131a565b602081016107b08284611292565b604081016113d58285611292565b61055f60208301846112aa565b602081016107b082846112a1565b61014081016113ff828d6112a1565b61140c602083018c6112a1565b611419604083018b6112a1565b611426606083018a6112a1565b61143360808301896112aa565b61144060a0830188611292565b61144d60c08301876112aa565b61145a60e0830186611292565b611468610100830185611292565b81810361012083015261147b81846112b3565b9c9b505050505050505050505050565b602081016107b082846112aa565b606081016114a782866112aa565b6114b46020830185611292565b81810360408301526114c681846112b3565b95945050505050565b6020808252810161055f81846112b3565b608081016114ee82876112aa565b6114fb6020830186611292565b61150860408301856112aa565b818103606083015261151a81846112b3565b9695505050505050565b60405181810167ffffffffffffffff8111828210171561154357600080fd5b604052919050565b600067ffffffffffffffff82111561156257600080fd5b506020601f91909101601f19160190565b60009081526020902090565b5190565b90815260200190565b919050565b60006107b0826115a1565b151590565b6001600160a01b031690565b82818337506000910152565b60005b838110156115d45781810151838201526020016115bc565b838111156115e3576000848401525b50505050565b601f01601f191690565b6115fc81611591565b811461160757600080fd5b50565b6115fc81610e8b56fe70726f706f73652875696e743235362c616464726573732c75696e743235362c627974657329a365627a7a72315820c7d31504e6ab585f03a04724d7028e8786c4fc9bbb6e869442776c2c27343b2b6c6578706572696d656e74616cf564736f6c634300050b0040";
