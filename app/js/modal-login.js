var loginBtn = document.querySelector(".login-link");
var loginForm = document.querySelector(".modal-login");
var closeBtn = document.querySelector(".modal-close");
var loginInput = loginForm.querySelector("[name=login]");
var passwordInput = loginForm.querySelector("[name=password]");
var loginSave = localStorage.getItem("loginInput");

window.addEventListener("keydown", function(evt){
  if (evt.keyCode===27) {
    evt.preventDefault();

    if (loginForm.classList.contains("js_modal-show")) {
      loginForm.classList.remove("js_modal-show")
    }
  }
})

loginBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginForm.classList.add("js_modal-show");
  if (loginSave) {
    loginInput.value=loginSave;
    passwordInput.focus();
  } else {
    loginInput.focus();
  }
});

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginForm.classList.remove("js_modal-show");
  loginForm.classList.remove("js_modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginInput.value || !passwordInput.value) {
    event.preventDefault();
    loginForm.classList.add("js_modal-error");
    if (!loginInput.value) {
      loginInput.focus();
    } else {
      passwordInput.focus();
    }
  } else {
    localStorage.setItem("loginInput", loginInput.value)
  }
});
