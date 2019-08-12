import { web3 } from "./web3";

import { abi as erc_abi } from "./erc";
import { abi as peb_abi, bytecode as peb_bytecode } from "./personalEscrowBox";
import { abi as seb_abi, bytecode as seb_bytecode } from "./stoEscrowBox";

import {
  authCertLedgerAddress,
  userCertLedgerAddress,
  tokenLedgerAddress,
  stoEscrowBoxAddress
} from "./globals";

export const authCertLedgerContract = new web3.eth.Contract(
  erc_abi,
  authCertLedgerAddress,
  { gasPrice: "1000000000" }
);

export const userCertLedgerContract = new web3.eth.Contract(
  erc_abi,
  userCertLedgerAddress,
  { gasPrice: "1000000000" }
);

export const tokenLedgerContract = new web3.eth.Contract(
  erc_abi,
  tokenLedgerAddress,
  { gasPrice: "1000000000" }
);

export const personalEscrowBoxContract = new web3.eth.Contract(peb_abi, {
  data: peb_bytecode
});

export const stoEscrowBoxContract = new web3.eth.Contract(
  seb_abi,
  stoEscrowBoxAddress,
  {
    data: seb_bytecode
  }
);
