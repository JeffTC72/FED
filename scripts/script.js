// JavaScript Document


/*********************
*** HAMBURGER MENU ***
*********************/

var deButton = document.querySelector("nav img");
var deNav = document.querySelector("nav")


deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("showNav");
  deButton.classList.toggle("showNav");
}