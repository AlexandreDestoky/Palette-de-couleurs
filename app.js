 //SELECTION DU DOM
 let couleurs = document.querySelectorAll(".couleur");


//VARIABLES DE TRAVAIL

let randomCouleurs = () => {
  let redRandom = Math.floor(Math.random()* 256);
  let greenRandom = Math.floor(Math.random()* 256);
  let blueRandom = Math.floor(Math.random()* 256);
  return `rgb(${redRandom},${greenRandom},${blueRandom})`;
}






for (const couleur of couleurs) {
  couleur.style.backgroundColor = randomCouleurs();
  console.log(couleur.style.backgroundColor);
}  



