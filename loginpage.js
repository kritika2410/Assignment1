var usernameerror = document.getElementById("username-error");
var passworderror = document.getElementById("password-error");
var carderror = document.getElementById("card-error");
var submitmessage = document.getElementById("submit-message");
var username = document.getElementById("Username");
var password = document.getElementById("Password");
var cardnumber = document.getElementById("CardNumber");
var MessageText = document.getElementById("Message");

var button = document.getElementById("SubmitButton");

var current = new Date();

var time = current.getHours();
if (time >= 1 && time <= 10) {
  MessageText.innerHTML = "Hello! good morning";
} else {
  if (time >= 11 && time < 16) {
    MessageText.innerHTML = "Hello! good afternoon";
  } else {
    MessageText.innerHTML = "Hello! good evening";
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  usernameerror.innerHTML = "";
  passworderror.innerHTML = "";
  submitmessage.innerHTML = "";
  carderror.innerHTML = "";
  if (username.value == "") {
    usernameerror.innerHTML = "Username cannot be empty";
    submitmessage.innerHTML = "Failed Attempt";
    return false;
  } else {
    if (password.value == "") {
      passworderror.innerHTML = "password cannot be empty";
      submitmessage.innerHTML = "Failed Attempt";
      return;
    } else {
      if (cardnumber.value == "") {
        carderror.innerHTML = "Cardnumber cannot be empty";
        submitmessage.innerHTML = "Failed Attempt";
        return;
      }
    }
  }

  if (
    username.value == "Admin123" &&
    password.value == "Admin123" &&
    cardnumber.value == "456789"
  ) {
    window.location.href = "accountDetails.html";
  } else {
    submitmessage.innerHTML = "Invalid credentials, Failed Attempt";
  }
});
