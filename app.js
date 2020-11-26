//SELECTION DU DOM
let couleurs = document.querySelectorAll(".couleur");

//VARIABLES DE TRAVAIL

let randomCouleurs = () => {
  let redRandom = Math.floor(Math.random() * 256);
  let greenRandom = Math.floor(Math.random() * 256);
  let blueRandom = Math.floor(Math.random() * 256);
  return `rgb(${redRandom},${greenRandom},${blueRandom})`;
};

let attributionCouleurs = () => {
  for (const couleur of couleurs) {
    couleur.style.backgroundColor = randomCouleurs();
  }
};

attributionCouleurs();

document.body.addEventListener("keyup", (e) => {
  if (e.code == "Space") {
    attributionCouleurs();
  }
});
