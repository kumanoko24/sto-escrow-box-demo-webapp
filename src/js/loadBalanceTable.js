import {
  authCertLedgerContract,
  userCertLedgerContract,
  tokenLedgerContract,
  personalEscrowBoxContract,
  stoEscrowBoxContract
} from "./utils/contractWrapper";

import { stoEscrowBoxAddress } from "./utils/globals";

import { web3 } from "./utils/web3";

import { auth1, auth2, user1, user2 } from "./utils/account";

import { BigNumber as BN } from "bignumber.js";

export function loadBalanceTable($) {
  const accountMap = {
    seb: { address: stoEscrowBoxAddress },
    auth1: { address: auth1.address },
    auth2: { address: auth2.address },
    user1: { address: user1.address },
    user2: { address: user2.address }
  };

  Object.keys(accountMap)
    .map(k => accountMap[k])
    .map(o => o.address)
    .map(addr => {
      return Promise.all([
        Promise.resolve(addr),
        tokenLedgerContract.methods.balanceOf(addr).call(),
        userCertLedgerContract.methods.balanceOf(addr).call(),
        authCertLedgerContract.methods.balanceOf(addr).call()
      ]);
    })
    .map(async (promiseArr, i) => {
      const arr = await promiseArr;

      $(`#balance-table-${i}-row`)
        .children()
        .each(function(i) {
          if (i === 1)
            $(this).html(
              `<a style="text-decoration: underline;" href="https://kovan.etherscan.io/address/${
                arr[0]
              }" target="_blank">${arr[0]}</a>`
            );
          if (i === 2) $(this).text(new BN(arr[1]).shiftedBy(-18).toFormat(1));
          if (i === 3) $(this).text(arr[2]);
          if (i === 4) $(this).text(arr[3]);
        });
    });
}
