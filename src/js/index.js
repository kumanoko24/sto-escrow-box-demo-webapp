import "core-js/stable";
import "regenerator-runtime/runtime";

import "milligram";

import "../style/style.css";

import $ from "jquery";

import { loadBalanceTable } from "./loadBalanceTable";

import { registerUserSubmit } from "./registerUserSubmit";

import { loadSTOEscrowBox } from "./loadSTOEscrowBox";

$(async function() {
  $(".container").show(0);

  loadBalanceTable($);

  registerUserSubmit($, loadBalanceTable);

  loadSTOEscrowBox($);
});
