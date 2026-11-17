const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formMessage = document.getElementById("formMessage");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const passwordIsHidden = passwordInput.type === "password";
  passwordInput.type = passwordIsHidden ? "text" : "password";
  togglePassword.textContent = passwordIsHidden ? "Hide" : "Show";
  togglePassword.setAttribute("aria-label", passwordIsHidden ? "Hide password" : "Show password");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  emailInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-invalid");

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  let isValid = true;

  if (!validEmail) {
    emailInput.classList.add("is-invalid");
    isValid = false;
  }

  if (password.length < 6) {
    passwordInput.classList.add("is-invalid");
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = "Your details have been validated. Connect a backend to complete sign-in.";
  }
});

document.getElementById("forgotLink").addEventListener("click", (event) => {
  event.preventDefault();
  formMessage.style.color = "#805d84";
  formMessage.textContent = "Password recovery will be available when an authentication service is connected.";
});

document.getElementById("signupLink").addEventListener("click", (event) => {
  event.preventDefault();
  formMessage.style.color = "#805d84";
  formMessage.textContent = "Connect this link to your registration page.";
});
