const burgerMenu = document.querySelector("#burger-menu");
const menu = document.querySelector("#menu");
const logoLink = document.querySelector(".logo_a");

menu.classList.remove("overlay");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("close");
  menu.classList.toggle("overlay");
});

logoLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior of the logo link (e.g., navigating to a new page)
  menu.classList.remove("overlay");
});
