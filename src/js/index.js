import "core-js/stable";
import "regenerator-runtime/runtime";

import "milligram";

import "../style/style.css";

import $ from "jquery";

import { loadBalanceTable } from "./loadBalanceTable";

$(async function() {
  $(".container").show(0);

  loadBalanceTable($);

  // console.log("hello worldx");
  // console.log(
  //   await authCertLedgerContract.methods
  //     .balanceOf("0x970b76e2b457d8f60a4ca7b47be2e8115aabfd26")
  //     .call()
  // );
  // console.log(
  //   await userCertLedgerContract.methods
  //     .balanceOf("0x970b76e2b457d8f60a4ca7b47be2e8115aabfd26")
  //     .call()
  // );
  // const [a1, a2, u1, u2] = await Promise.all(
  //   [auth1, auth2, user1, user2].map(account =>
  //     web3.eth.getBalance(account.address)
  //   )
  // );
  // console.log(a1, a2, u1, u2);
  // window.noel = {};
  // window.noel.doit = async function() {
  //   const data = personalEscrowBoxContract
  //     .deploy({
  //       arguments: [userCertLedgerAddress]
  //     })
  //     .encodeABI();

  //   const gas = await personalEscrowBoxContract
  //     .deploy({
  //       arguments: [userCertLedgerAddress]
  //     })
  //     .estimateGas();

  //   console.log("gas", gas);

  //   const signedTx = await user1.signTransaction({
  //     data,
  //     gasPrice: "1000000000",
  //     gas: gas * 1.2
  //   });

  //   console.log(signedTx);

  //   console.log(await web3.eth.sendSignedTransaction(signedTx.rawTransaction));
  // };
});
