// Elements on page
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Functions //

// Check if email is valid
function isValidEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Event Listeners //
form.addEventListener("submit", function (e) {
  if (username.value === "") {
    showError(username, "User name is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "email is not valid!");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "Password2 is required");
  } else {
    showSuccess(password2);
  }
  e.preventDefault();
});
