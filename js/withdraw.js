/**
 * 1. Add event handler to the withdraw button
 * 2. Get the withdraw input amount from the input field
 * 3. Get previous withdraw total
 * 4. Calculate total withdraw amount
 * 5. Get previous balance total
 * 6. Calculate new balance total
 * 7. Clear the input field
 */

// Step: 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // Step: 2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountStr = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountStr);

  // Step: 7
  withdrawField.value = "";

  // Validating the withdraw input
  if (isNaN(newWithdrawAmount)) {
    alert("please enter a number");
    return;
  }

  // Step: 3;
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalStr = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);

  // Step: 5
  const previousTotalElement = document.getElementById("current-total");
  const previousTotalStr = previousTotalElement.innerText;
  const previousTotal = parseFloat(previousTotalStr);

  // Validating the withdraw amount
  if (newWithdrawAmount > previousTotal) {
    alert("insufficient fund");
    return;
  }

  // Step: 4
  const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawAmount;

  // Step: 6
  const currentTotalAmount = previousTotal - newWithdrawAmount;
  previousTotalElement.innerText = currentTotalAmount;
});
