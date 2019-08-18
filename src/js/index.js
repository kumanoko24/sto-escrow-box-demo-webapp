import "core-js/stable";
import "regenerator-runtime/runtime";

import "milligram";

import "../style/style.css";

import $ from "jquery";

import { loadBalanceTable } from "./loadBalanceTable";

import { loadSTOEscrowBox } from "./loadSTOEscrowBox";

import { registerUserSubmit } from "./registerUserSubmit";

import { registerAuthSubmit } from "./registerAuthSubmit";

$(async function() {
  $(".container").show(0);

  loadBalanceTable($);

  loadSTOEscrowBox($);

  registerUserSubmit($, loadBalanceTable, loadSTOEscrowBox);

  registerAuthSubmit($, loadBalanceTable, loadSTOEscrowBox);
});
