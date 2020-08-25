"use strict";
const toggleMenu = document.getElementById("toggle-menu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", (event) => {
  if (
    event.target.id === "toggle-menu" ||
    event.target.parentElement.id === "toggle-menu"
  ) {
    sidebar.classList.toggle("show");
    toggleMenu.classList.toggle("show");
  }
});
