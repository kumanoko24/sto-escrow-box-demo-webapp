import { web3 } from "./web3";

import { user1pk, user2pk, auth1pk, auth2pk } from "./globals";

export const user1 = web3.eth.accounts.privateKeyToAccount(user1pk);

export const user2 = web3.eth.accounts.privateKeyToAccount(user2pk);

export const auth1 = web3.eth.accounts.privateKeyToAccount(auth1pk);

export const auth2 = web3.eth.accounts.privateKeyToAccount(auth2pk);
