//Selectors
let header = document.querySelector(".header");
let hanburgerMenu = document.querySelector(".hanburger-menu");

hanburgerMenu.addEventListener("click", function () {
  header.classList.toggle("menu-open");
});
