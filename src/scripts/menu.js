const burgerMenu = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");

// Hide the menu initially by adding the "overlay" class
menu.classList.add("overlay");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("close"); // Toggle the "close" class on the burger menu button
  menu.classList.toggle("overlay"); // Toggle the "overlay" class on the menu navigation
});
