// JavaScript Document


/*********************
*** HAMBURGER MENU ***
*********************/

var deButton = document.querySelector("nav button");

deButton.addEventListener("click",toggleMenu);

function toggleMenu(event) {
    deNav = event.target.parentNode;
    deNav.classList.toggle("showNav");
}