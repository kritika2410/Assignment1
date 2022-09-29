let totalBalance = 5000;

const amountWithdraw = document.getElementById("amountWithdraw");
const buttonWithdraw = document.getElementById("buttonWithdraw");

buttonWithdraw.addEventListener("click", () => {
  if (document.getElementById("name").value == "") {
    alert("Please enter Valid Payee name");
    return;
  } else if (document.getElementById("email").value == "") {
    alert("please enter valid email address");
    return;
  } else if (document.getElementById("phone").value == "") {
    alert("please enter valid phone number");
    return;
  } else if (document.getElementById("interacQuestion").value == "") {
    alert("please enter valid interac question");
    return;
  } else if (document.getElementById("interacAnswer").value == "") {
    alert("please enter valid interac answer");
    return;
  } else if (
    isNaN(amountWithdraw.value) ||
    amountWithdraw.value <= 0 ||
    amountWithdraw.value == ""
  ) {
    alert("Please enter valid amount.");
    return (amountWithdraw.value = "");
  } else {
    // checks if withdrawal meets parameters
    if (amountWithdraw.value > totalBalance) {
      alert("Not enough Balance.");
      return (amountWithdraw.value = "");
    } else {
      totalBalance -= Number(amountWithdraw.value);

      // format TotalBalance to show $ XX.XX (2 decimal places)
      let totalBalanceFormatted = formatter.format(totalBalance);
      document.getElementById("chequingValue").innerHTML =
        totalBalanceFormatted;

      // print withdrawal to console to verfify success
      console.log("$" + amountWithdraw.value);
      alert("Money send: " + formatter.format(amountWithdraw.value));
      return clearAllValues();
    }
  }
});

function clearAllValues() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("interacQuestion").value = "";
  document.getElementById("interacAnswer").value = "";
  amountWithdraw.value = "";
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
});

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("chequingValue").innerHTML = totalBalanceFormatted;
