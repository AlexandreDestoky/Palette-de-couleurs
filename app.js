//SELECTION DU DOM
let couleurs = document.querySelectorAll(".couleur");
let btnsCopier = document.querySelectorAll(".fa-copy");

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

//Copie de la couleur rgb
for (const btnCopier of btnsCopier) {
  btnCopier.addEventListener("click", () => {
    let couleurCopier = btnCopier.parentElement.style.backgroundColor;
    let inputT = document.createElement("input");
    inputT.value = couleurCopier;
    document.body.appendChild(inputT);
    inputT.select();
    document.execCommand("copy");
    document.body.removeChild(inputT);
    let notifCopie = btnCopier.firstElementChild;
    notifCopie.innerHTML = "RGB Copié";
    notifCopie.visibility = "visible";
    setTimeout(()=> {
      notifCopie.innerHTML = "Copier le code RGB";
      notifCopie.visibility = "hidden";
    },1000); 
  });
}
