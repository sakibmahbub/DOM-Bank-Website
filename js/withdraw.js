/**
 * 1. Add event handler to the withdraw button
 * 2. Get the withdraw input amount from the input field
 */

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountStr = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountStr);

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalStr = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);

  const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawAmount;

  const previousTotalElement = document.getElementById("current-total");
  const previousTotalStr = previousTotalElement.innerText;
  const previousTotal = parseFloat(previousTotalStr);

  const currentTotalAmount = previousTotal - newWithdrawAmount;
  previousTotalElement.innerText = currentTotalAmount;

  withdrawField.value = "";
});
