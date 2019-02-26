function createLogInfo() {

  var theWantedArea = document.getElementById("loginBox");

  var usernameText = document.createElement("p");
  usernameText.innerHTML = "Username";

  var usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.name = "usernameInputted";

  var emailText = document.createElement("p");
  emailText.innerHTML = "Email";
  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "emailInputted";

  var passwordText = document.createElement("p");
  passwordText.innerHTML = "Password";
  var passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "passwordInputted";

  var verifyPasswordText = document.createElement("p");
  verifyPasswordText.innerHTML = "Verify Password";
  var verifyPasswordInput = document.createElement("input");
  verifyPasswordInput.type = "password";
  verifyPasswordInput.name = "verifyPasswordInputted";

  var createMyAccountButton = document.createElement("button");
  createMyAccountButton.innerHTML = "Create My Account";
  createMyAccountButton.id = "createAccountButton";
  createMyAccountButton.onclick = createAccountChangePage();

  theWantedArea.appendChild(usernameText);
  theWantedArea.appendChild(usernameInput);
  theWantedArea.appendChild(emailText);
  theWantedArea.appendChild(emailInput);
  theWantedArea.appendChild(passwordText);
  theWantedArea.appendChild(passwordInput);
  theWantedArea.appendChild(verifyPasswordText);
  theWantedArea.appendChild(verifyPasswordInput);
  theWantedArea.appendChild(createMyAccountButton);

}

function createAccountChangePage() {

}
