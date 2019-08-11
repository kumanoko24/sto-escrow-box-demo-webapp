export const abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "voteMap",
    outputs: [
      {
        name: "_created",
        type: "bool"
      },
      {
        name: "_passed",
        type: "bool"
      },
      {
        name: "_executed",
        type: "bool"
      },
      {
        name: "_cancelled",
        type: "bool"
      },
      {
        name: "_voteNum",
        type: "uint256"
      },
      {
        name: "_ledger",
        type: "address"
      },
      {
        name: "_value",
        type: "uint256"
      },
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_to",
        type: "address"
      },
      {
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
        name: "_voteHash",
        type: "bytes32"
      }
    ],
    name: "finalise",
    outputs: [
      {
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
        name: "_authNum",
        type: "uint256"
      }
    ],
    name: "setAuthNum",
    outputs: [
      {
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
        name: "_value",
        type: "uint256"
      },
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_mode",
        type: "uint256"
      },
      {
        name: "_data",
        type: "bytes"
      }
    ],
    name: "negotiate",
    outputs: [
      {
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
        name: "_addr",
        type: "address"
      }
    ],
    name: "setAuthCertVoucherLedgerAddress",
    outputs: [
      {
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
        name: "__data",
        type: "bytes"
      }
    ],
    name: "decodePropose",
    outputs: [
      {
        name: "_value",
        type: "uint256"
      },
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_mode",
        type: "uint256"
      },
      {
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
        name: "_data",
        type: "bytes"
      }
    ],
    name: "decodeCallData",
    outputs: [
      {
        name: "_voteHash",
        type: "bytes32"
      },
      {
        name: "_to",
        type: "address"
      },
      {
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
        name: "_voteHash",
        type: "bytes32"
      },
      {
        name: "_to",
        type: "address"
      },
      {
        name: "_calldata",
        type: "bytes"
      }
    ],
    name: "encodeCallData",
    outputs: [
      {
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
        name: "_value",
        type: "uint256"
      },
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_mode",
        type: "uint256"
      },
      {
        name: "_data",
        type: "bytes"
      }
    ],
    name: "propose",
    outputs: [
      {
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
        name: "_value",
        type: "uint256"
      },
      {
        name: "_from",
        type: "address"
      },
      {
        name: "_mode",
        type: "uint256"
      },
      {
        name: "_data",
        type: "bytes"
      }
    ],
    name: "encodePropose",
    outputs: [
      {
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
        name: "_voteHash",
        type: "bytes32"
      }
    ],
    name: "cancel",
    outputs: [
      {
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
        name: "_ledgerAddress",
        type: "address"
      },
      {
        name: "_holderAddress",
        type: "address"
      }
    ],
    name: "getLedgerBalanceHumanNumber",
    outputs: [
      {
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
        name: "_addr",
        type: "address"
      }
    ],
    name: "setUserCertVoucherLedgerAddress",
    outputs: [
      {
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
        name: "_authCertVoucherLedgerAddress",
        type: "address"
      },
      {
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
        name: "_id",
        type: "bytes32"
      }
    ],
    name: "ProposeCancelled",
    type: "event"
  }
];
