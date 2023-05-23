window.addEventListener("load", sidenVises);

const kul1 = document.querySelector("#cirkel_container");

function sidenVises() {
  console.log("sidenVises");
  kul1.classList.add("spin");
}
