import {
  authCertLedgerContract,
  userCertLedgerContract,
  tokenLedgerContract,
  personalEscrowBoxContract,
  stoEscrowBoxContract
} from "./utils/contractWrapper";

import { BigNumber as BN } from "bignumber.js";

async function loadNewlyProposed($, newlyProposed) {
  const result = await Promise.all(
    newlyProposed.map(p =>
      stoEscrowBoxContract.methods.voteMap(p.returnValues._id).call()
    )
  );

  console.log(result);

  result.reverse();
  $("#seb-table-body").html(
    result
      .map((p, i) => {
        return `
    <tr class="newly-proposed">
      <td>${newlyProposed[i].returnValues._id}</td>
      <td><a target="_blank" style="text-decoration: underline;" href="https://kovan.etherscan.io/address/${
        p._from
      }">${p._from.toLowerCase()}</a></td>
      <td>${new BN(p._value).shiftedBy(-18).toFormat(1)}</td>
      <td><a target="_blank" style="text-decoration: underline;" href="https://kovan.etherscan.io/address/0x${p._calldata.slice(
        34,
        34 + 40
      )}">0x${p._calldata.slice(34, 34 + 40)}</a></td>
    </tr>`;
      })
      .join("")
  );

  return result;
}

async function loadFinalised($, finalised) {}

async function loadCancelled($, cancelled) {}

export async function loadSTOEscrowBox($) {
  $("#seb-table-body-newly-proposed").on("click", function(e) {
    e.preventDefault();
    $(".newly-proposed").removeClass("noel-hide");
    $(".finalised").addClass("noel-hide");
    $(".cancelled").addClass("noel-hide");
  });

  $("#seb-table-body-finalised").on("click", function(e) {
    e.preventDefault();
    $(".newly-proposed").addClass("noel-hide");
    $(".finalised").removeClass("noel-hide");
    $(".cancelled").addClass("noel-hide");
  });

  $("#seb-table-body-cancelled").on("click", function(e) {
    e.preventDefault();
    $(".newly-proposed").addClass("noel-hide");
    $(".finalised").addClass("noel-hide");
    $(".cancelled").removeClass("noel-hide");
  });

  const [ProposeCreated, ProposeExecuted, ProposeCancelled] = await Promise.all(
    [
      stoEscrowBoxContract.getPastEvents("ProposeCreated", {
        fromBlock: 12791545,
        toBlock: "latest"
      }),
      stoEscrowBoxContract.getPastEvents("ProposeExecuted", {
        fromBlock: 12791545,
        toBlock: "latest"
      }),
      stoEscrowBoxContract.getPastEvents("ProposeCancelled", {
        fromBlock: 12791545,
        toBlock: "latest"
      })
    ]
  );

  console.log("ProposeCreated", ProposeCreated);
  console.log("ProposeExecuted", ProposeExecuted);
  console.log("ProposeCancelled", ProposeCancelled);

  const newlyProposed = ProposeCreated.filter(p => {
    if (
      ProposeExecuted.filter(pp => p.returnValues._id === pp.returnValues._id)
        .length !== 0
    ) {
      if (
        ProposeCancelled.filter(
          pp => p.returnValues._id === pp.returnValues._id
        ).length !== 0
      ) {
        return false;
      }
    }

    return true;
  });

  console.log("newlyProposed", newlyProposed);

  loadNewlyProposed($, newlyProposed);
}
