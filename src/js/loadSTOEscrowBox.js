import {
  authCertLedgerContract,
  userCertLedgerContract,
  tokenLedgerContract,
  personalEscrowBoxContract,
  stoEscrowBoxContract
} from "./utils/contractWrapper";

import { BigNumber as BN } from "bignumber.js";

async function loadProposedToTable($, proposed, className) {
  if (proposed.length === 0) {
    $("#seb-table-body").append(
      `<tr class="${className} noel-hide"><td>(empty)</td></tr>`
    );
    return;
  }

  const result = await Promise.all(
    proposed.map(p =>
      stoEscrowBoxContract.methods.voteMap(p.returnValues._id).call()
    )
  );

  result.reverse();
  $("#seb-table-body").append(
    result
      .map((p, i) => {
        return `
    <tr class="${className} noel-hide">
      <td>${proposed[i].returnValues._id.slice(0, 34)}</td>
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

  console.log(className, proposed);

  return result;
}

async function loadNewlyProposed($, newlyProposed) {
  await loadProposedToTable($, newlyProposed, "newly-proposed");
  loadOptionsToAuths($, newlyProposed);
}

async function loadFinalised($, finalised) {
  await loadProposedToTable($, finalised, "finalised");
}

async function loadCancelled($, cancelled) {
  await loadProposedToTable($, cancelled, "cancelled");
}

function loadOptionsToAuths($, proposed) {
  $(".auth-s-noel").html(
    proposed
      .map(p => {
        return `
          <option value="accept-${
            p.returnValues._id
          }">Accept ${p.returnValues._id.slice(0, 34)}</option>
          <option value="reject-${
            p.returnValues._id
          }">Reject ${p.returnValues._id.slice(0, 34)}</option>
        `;
      })
      .join("")
  );
}

export async function loadSTOEscrowBox($) {
  $("#seb-table-body-newly-proposed").off();
  $("#seb-table-body-newly-proposed").on("click", function(e) {
    e.preventDefault();
    $(".newly-proposed").removeClass("noel-hide");
    $(".finalised").addClass("noel-hide");
    $(".cancelled").addClass("noel-hide");
  });

  $("#seb-table-body-finalised").off();
  $("#seb-table-body-finalised").on("click", function(e) {
    e.preventDefault();
    $(".newly-proposed").addClass("noel-hide");
    $(".finalised").removeClass("noel-hide");
    $(".cancelled").addClass("noel-hide");
  });

  $("#seb-table-body-cancelled").off();
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

  const newlyProposed = ProposeCreated.filter(p => {
    if (
      ProposeExecuted.filter(pp => p.returnValues._id === pp.returnValues._id)
        .length !== 0
    ) {
      return false;
    }

    if (
      ProposeCancelled.filter(pp => p.returnValues._id === pp.returnValues._id)
        .length !== 0
    ) {
      return false;
    }

    return true;
  });

  $("#seb-table-body").html("");
  loadNewlyProposed($, newlyProposed);
  loadFinalised($, ProposeExecuted);
  loadCancelled($, ProposeCancelled);

  setTimeout(() => {
    $(".newly-proposed").removeClass("noel-hide");
  }, 1000);
}
