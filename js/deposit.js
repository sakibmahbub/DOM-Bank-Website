// Add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //Get the deposit amount from deposit input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountStr = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountStr);

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalStr = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalStr);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  //Get balance current total
  const balanceTotalElement = document.getElementById("current-total");
  const previousBalanceTotalStr = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

  //Calculate current total
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  //Empty deposit input field
  depositField.value = "";
});
