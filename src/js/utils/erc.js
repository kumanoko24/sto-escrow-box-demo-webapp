export const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "uint256"
      },
      {
        name: "",
        type: "bytes"
      }
    ],
    name: "transferAndCall",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "balanceOf",
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
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];
