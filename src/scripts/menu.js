const burgerMenu = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");

menu.classList.remove("overlay");
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("close");
  menu.classList.toggle("overlay");
});
