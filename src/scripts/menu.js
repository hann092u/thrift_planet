const burgerMenu = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");
const logoLink = document.querySelector(".logo_a");

menu.classList.remove("overlay");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("close");
  menu.classList.toggle("overlay");
});

logoLink.addEventListener("click", function (event) {
  if (menu.classList.contains("overlay")) {
    event.preventDefault(); // Prevents the default behavior of the link
    menu.classList.remove("overlay");
    burgerMenu.classList.remove("close");
  }
});
