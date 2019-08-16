import Web3 from "web3";

import { infura_provider } from "./globals";

let provider = infura_provider;

// if (window && window.web3) {
//   provider = window.web3.currentProvider;
// }

export const web3 = new Web3(provider);
