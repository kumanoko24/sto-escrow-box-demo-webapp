import { web3 } from "./web3";

import { abi as erc_abi } from "./erc";
import { abi as peb_abi } from "./personalEscrowBox";
import { abi as seb_abi } from "./stoEscrowBox";

import { authCertLedgerAddress, userCertLedgerAddress } from "./globals";

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

export const personalEscrowBoxContract = new web3.eth.Contract(peb_abi);

export const stoEscrowBoxContract = new web3.eth.Contract(seb_abi);
