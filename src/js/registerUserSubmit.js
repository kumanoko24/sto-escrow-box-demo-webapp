import {
  tokenLedgerContract,
  stoEscrowBoxContract,
  personalEscrowBoxContract
} from "./utils/contractWrapper";

import {
  personalEscrowBoxUser1Address,
  personalEscrowBoxUser2Address
} from "./utils/globals";

import { web3 } from "./utils/web3";

import { user1, user2 } from "./utils/account";

import { BigNumber as BN } from "bignumber.js";

import secureRandom from "secure-random";

async function submit(userNum, value, $, loadBalanceTable, loadSTOEscrowBox) {
  if (!value) {
    return;
  }

  let _value = value + "";

  let signer;
  const senderPersonalEscrowBoxContract = personalEscrowBoxContract.clone();
  let receiverAddress;

  if (userNum === 1) {
    signer = user1;
    senderPersonalEscrowBoxContract.options.address = personalEscrowBoxUser1Address;
    receiverAddress = personalEscrowBoxUser2Address;
  }

  if (userNum === 2) {
    signer = user2;
    senderPersonalEscrowBoxContract.options.address = personalEscrowBoxUser2Address;
    receiverAddress = personalEscrowBoxUser1Address;
  }

  // voteHash = hash
  // to = tokenLedger
  // calldata = transfer ? to receiverAddress (peb)
  const calldataEnocde = await stoEscrowBoxContract.methods
    .encodeCallData(
      "0x" + secureRandom.randomBuffer(32).toString("hex"),
      tokenLedgerContract.options.address,
      tokenLedgerContract.methods
        .transfer(receiverAddress, new BN(_value).shiftedBy(18).toString(10))
        .encodeABI()
    )
    .call();

  // console.log(calldataEnocde);

  // value
  // from
  // mode 0
  // data (calldata)
  const proposeEncode = await stoEscrowBoxContract.methods
    .encodePropose(
      0,
      "0x0000000000000000000000000000000000000000",
      0,
      calldataEnocde
    )
    .call();

  try {
    const toPersonalEscrowBoxEncode = senderPersonalEscrowBoxContract.methods
      .transferAndCallERC(
        tokenLedgerContract.options.address,
        stoEscrowBoxContract.options.address,
        new BN(_value).shiftedBy(18).toString(10),
        proposeEncode
      )
      .encodeABI();

    const toPersonalEscrowBoxGas = await senderPersonalEscrowBoxContract.methods
      .transferAndCallERC(
        tokenLedgerContract.options.address,
        stoEscrowBoxContract.options.address,
        new BN(_value).shiftedBy(18).toString(10),
        proposeEncode
      )
      .estimateGas({
        from: signer.address
      });

    const signedTx = await signer.signTransaction({
      to: senderPersonalEscrowBoxContract.options.address,
      value: 0,
      data: toPersonalEscrowBoxEncode,
      gas: parseInt(toPersonalEscrowBoxGas * 1.2),
      gasPrice: "1000000000"
    });

    const txr = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log(txr);
  } catch (err) {
    console.error(err);
  }

  loadBalanceTable($);

  setTimeout(() => {
    loadSTOEscrowBox($);
  }, 2000);

  $("button").prop("disabled", false);
  $("input").prop("readonly", false);

  $("#user1-s-button").html("User 1 Submits");
  $("#user2-s-button").html("User 2 Submits");
}

export function registerUserSubmit($, loadBalanceTable, loadSTOEscrowBox) {
  $("#user1-s-button").on("click", function(e) {
    e.preventDefault();
    $("button").prop("disabled", true);
    $("input").prop("readonly", true);
    $(this).html("Submitted");
    submit(1, $("#user1-s").val(), $, loadBalanceTable, loadSTOEscrowBox);
  });

  $("#user2-s-button").on("click", function(e) {
    e.preventDefault();
    $("button").prop("disabled", true);
    $("input").prop("readonly", true);
    $(this).html("Submitted");
    submit(2, $("#user2-s").val(), $, loadBalanceTable, loadSTOEscrowBox);
  });
}
