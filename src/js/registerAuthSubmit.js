import {
  stoEscrowBoxContract,
  authCertLedgerContract
} from "./utils/contractWrapper";

import { auth1, auth2 } from "./utils/account";

import { web3 } from "./utils/web3";

async function submit(
  authNum,
  selectedAction,
  $,
  loadBalanceTable,
  loadSTOEscrowBox
) {
  if (!selectedAction) {
    $("button").prop("disabled", false);
    $("input").prop("readonly", false);

    $("#auth1-s-button").html("Authority 1 Submits");
    $("#auth2-s-button").html("Authority 2 Submits");
    return;
  }

  let signer;
  let verb;
  let id;

  if (authNum === 1) {
    signer = auth1;
  }

  if (authNum === 2) {
    signer = auth2;
  }

  [verb, id] = selectedAction.split("-");

  if (!(verb === "accept" || verb === "reject")) {
    $("button").prop("disabled", false);
    $("input").prop("readonly", false);

    $("#auth1-s-button").html("Authority 1 Submits");
    $("#auth2-s-button").html("Authority 2 Submits");
    return;
  }

  if (id.length !== 66) {
    $("button").prop("disabled", false);
    $("input").prop("readonly", false);

    $("#auth1-s-button").html("Authority 1 Submits");
    $("#auth2-s-button").html("Authority 2 Submits");
    return;
  }

  // voteHash
  // to
  // calldata
  const calldataEnocde = await stoEscrowBoxContract.methods
    .encodeCallData(id, "0x0000000000000000000000000000000000000000", "0x00")
    .call();

  // value
  // from
  // mode 1 or 2
  // data (calldata)
  const negotiateEncode = (await stoEscrowBoxContract.methods
    .encodePropose(
      0,
      "0x0000000000000000000000000000000000000000",
      verb === "accept" ? 1 : 2,
      calldataEnocde
    )
    .call()).replace("0x9e476d04", "0x3df498d7");

  try {
    const toAuthLedgerEncode = authCertLedgerContract.methods
      .transferAndCall(stoEscrowBoxContract.options.address, 0, negotiateEncode)
      .encodeABI();

    const toAuthLedgerGas = await authCertLedgerContract.methods
      .transferAndCall(stoEscrowBoxContract.options.address, 0, negotiateEncode)
      .estimateGas({
        from: signer.address
      });

    const signedTx = await signer.signTransaction({
      to: authCertLedgerContract.options.address,
      value: 0,
      data: toAuthLedgerEncode,
      gas: parseInt(toAuthLedgerGas * 1.2),
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
  }, 1000);

  $("button").prop("disabled", false);
  $("input").prop("readonly", false);

  $("#auth1-s-button").html("Authority 1 Submits");
  $("#auth2-s-button").html("Authority 2 Submits");
}

export function registerAuthSubmit($, loadBalanceTable, loadSTOEscrowBox) {
  $("#auth1-s-button").on("click", function(e) {
    e.preventDefault();
    $("button").prop("disabled", true);
    $("input").prop("readonly", true);
    $(this).html("Submitted");
    submit(1, $("#auth1-s").val(), $, loadBalanceTable, loadSTOEscrowBox);
  });

  $("#auth2-s-button").on("click", function(e) {
    e.preventDefault();
    $("button").prop("disabled", true);
    $("input").prop("readonly", true);
    $(this).html("Submitted");
    submit(2, $("#auth2-s").val(), $, loadBalanceTable, loadSTOEscrowBox);
  });
}
