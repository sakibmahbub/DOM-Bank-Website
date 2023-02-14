// Step 1:  Add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step 2: Get the email address from the html input field
  // Always use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // Step 3: Get the password from input field
  // 3.a: set id on the html element
  // 3.b: get the element
  // 3.c: get the value from the element
  const passField = document.getElementById("user-pass");
  const pass = passField.value;

  // Do not verify email and password on the client side
  // Step 4: Verify email and password
  if (email === "sakib@gmail.com" && pass === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("invalid user");
  }
});
