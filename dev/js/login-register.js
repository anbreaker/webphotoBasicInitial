const topbar = document.getElementById("topbar");

const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

if (topbar) {
  topbar.addEventListener("click", (event) => {
    if (event.target.parentElement.dataset.type !== undefined) {
      if (event.target.parentElement.dataset.type === "login") {
        loginModal.classList.add("lightbox--show");
      } else if (event.target.parentElement.dataset.type === "register") {
        registerModal.classList.add("lightbox--show");
      }
    }
  });
}

if (loginModal) {
  loginModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("lightbox")) {
      loginModal.classList.remove("lightbox--show");
    }
  });
}

if (registerModal) {
  registerModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("lightbox")) {
      registerModal.classList.remove("lightbox--show");
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Send");
  });
}

if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Send");
  });
}
