"use strict";var topbar=document.getElementById("topbar"),loginModal=document.getElementById("login-modal"),registerModal=document.getElementById("register-modal"),loginForm=document.getElementById("login-form"),registerForm=document.getElementById("register-form");topbar&&topbar.addEventListener("click",function(e){void 0!==e.target.parentElement.dataset.type&&("login"===e.target.parentElement.dataset.type?loginModal.classList.add("lightbox--show"):"register"===e.target.parentElement.dataset.type&&registerModal.classList.add("lightbox--show"))}),loginModal&&loginModal.addEventListener("click",function(e){e.target.classList.contains("lightbox")&&loginModal.classList.remove("lightbox--show")}),registerModal&&registerModal.addEventListener("click",function(e){e.target.classList.contains("lightbox")&&registerModal.classList.remove("lightbox--show")}),loginForm&&loginForm.addEventListener("submit",function(e){e.preventDefault(),console.log("Send")}),registerForm&&registerForm.addEventListener("submit",function(e){e.preventDefault(),console.log("Send")});var toggleMenu=document.getElementById("toggle-menu"),sidebar=document.getElementById("sidebar");toggleMenu.addEventListener("click",function(e){"toggle-menu"!==e.target.id&&"toggle-menu"!==e.target.parentElement.id||(sidebar.classList.toggle("show"),toggleMenu.classList.toggle("show"))});