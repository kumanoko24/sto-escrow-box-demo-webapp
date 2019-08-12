import "core-js/stable";
import "regenerator-runtime/runtime";

import "../style/style.css";

import $ from "jquery";

import {
  authCertLedgerContract,
  userCertLedgerContract
} from "./utils/contractWrapper";

$(async function() {
  console.log("hello world");
  console.log(
    await authCertLedgerContract.methods
      .balanceOf("0x970b76e2b457d8f60a4ca7b47be2e8115aabfd26")
      .call()
  );
  console.log(
    await userCertLedgerContract.methods
      .balanceOf("0x970b76e2b457d8f60a4ca7b47be2e8115aabfd26")
      .call()
  );
});
