// Undersøger om siden er loadet færdig og kalder functionen sidenVises, er altid det første vi har
window.addEventListener("load", sidenVises);

// opretter en variabel, skal typisk være i toppen
let minVar;

// Opretter functionen og udskriver i consolen at vi er kommet ind i den function
function sidenVises() {
  console.log("sidenVises");
  //Skriv kode her
}

// giver variabel en værdi en string
minVar = "noget tekst";

// giver variable en værdi et tal
minVar = 12;

// lægger en til tallet i variabelen
minVar++;

// trækker en fra tallet i variabelen
minVar--;

// lægger et tal til værdien af variablen
minVar += 5;

// trækker et tal fra værdien af variablen
minVar -= 8;

// gør et html element klikbar, og hopper til functionen clickHandler (click kan udskiftes til mousedown)
// Husk at oprette functionen som linje 7-11
document.querySelector("#id_fra_html").addEventListener("click", clickHandler);

// gør så man ikke kan klikke på elementet mere
document.querySelector("#id_fra_html").removeEventListener("click", clickHandler);

// tilføjer en class til html elementet
document.querySelector("#id_fra_html").classList.add("class_navn");

// fjener en class fra html elementet
document.querySelector("#id_fra_html").classList.remove("class_navn");

// fjener alle class's fra et html elementet
document.querySelector("#id_fra_html").classList = "";

// Lytter efter en animation har kørt en gang, (infinite i css) og klader functionen genstartElement
// Husk at oprette functionen som linje 7-11
document.querySelector("#id_fra_html").addEventListener("animationiteration", genstartElement);

// Lytter efter en animation er færdig, og klader functionen genstartElement
// Husk at oprette functionen som linje 7-11
document.querySelector("#id_fra_html").addEventListener("animationiteration", genstartElement);

// fjener alle class's fra et html elementet, force reflow (for at computeren når at se at classen er fjernet)
// Tilføjer classen igen, som nu starter forfra
document.querySelector("#id_fra_html").classList = "";
document.querySelector("#id_fra_html").offsetLeft;
document.querySelector("#id_fra_html").classList.add("class_navn");

// laver et nyt random tal mellem 1 og 5, sætter classen på f.eks. class_navn3
minRand = Math.floor(Math.random() * 5) + 1;
document.querySelector("#id_fra_html").classList.add("class_navn" + minRand);
