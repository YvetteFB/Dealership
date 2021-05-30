//login and sign up
const signin__btn = document.querySelector("#signin-button");
const signup__btn = document.querySelector("#signup-button");
const container = document.querySelector(".container");



signin__btn.addEventListener('click', () => {
  container.classList.remove("signup-mode");
});
signup__btn.addEventListener('click', () => {
  container.classList.add("signup-mode");
});

