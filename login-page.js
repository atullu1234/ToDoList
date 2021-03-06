const loginForm = document.getElementById("login");
const createAccountForm = document.getElementById("register");
const registerLink = document.getElementById("register-link");
const signInLink = document.getElementById("sign-in-link");

loginForm.style.display = "inline-block";
createAccountForm.style.display = "none";

registerLink.addEventListener("click", () => {
  console.log("entered");
  loginForm.style.display = "none";
  createAccountForm.style.display = "inline-block";
});

signInLink.addEventListener("click", () => {
  loginForm.style.display = "inline-block";
  createAccountForm.style.display = "none";
});

function store() {
  let name = document.getElementById("name");
  let pw = document.getElementById("pw");
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (pw.value.length > 8) {
    alert("Max of 8");
  } else if (!pw.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!pw.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!pw.value.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("pw", pw.value);
    alert("Your account has been created");
    window.location = "toDoList.html";
    return false;
  }
}

//checking
function check() {
  let storedName = localStorage.getItem("name");
  let storedPw = localStorage.getItem("pw");

  let userName = document.getElementById("userName");
  let userPw = document.getElementById("userPw");
  let userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
    window.location = "toDoList.html";
    alert("You are logged in.");
    return false;
  } else {
    alert("Error on login");
  }
}
