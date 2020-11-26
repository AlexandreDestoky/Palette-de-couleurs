//SELECTION DU DOM
let couleurs = document.querySelectorAll(".couleur");
let btnsCopier = document.querySelectorAll(".fa-copy");
let btnsCadena = document.querySelectorAll(".fa-lock-open");
let btns = document.querySelectorAll(".fa");

//VARIABLES DE TRAVAIL

//-------------FONCTIONS -------------------------------------------------

//RETOURNE UNE COULEUR ALEATOIRE
let randomCouleurs = () => {
  let redRandom = Math.floor(Math.random() * 256);
  let greenRandom = Math.floor(Math.random() * 256);
  let blueRandom = Math.floor(Math.random() * 256);
  return `rgb(${redRandom},${greenRandom},${blueRandom})`;
};

//DONNE UN COULEUR A CHAQUE DIV DE COULEURS
let attributionCouleurs = () => {
  for (const couleur of couleurs) {
    let couleurDiv = randomCouleurs();
    couleur.style.backgroundColor = couleurDiv;
    let boutonDansCouleur = couleur.children;
    console.log(boutonDansCouleur);
    //DONNE A CHAQUE BTN dans de le div couleur une couleur opposé
    for (const btn of boutonDansCouleur) {
      btn.style.color = couleurOppose(couleurDiv);
    }
  }
};

let couleurOppose = (rgb) => {
  let colors = rgb.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
  let red = colors[1];
  let green = colors[2];
  let blue = colors[3];
  return `rgb(${255 - red},${255 - green},${255 - blue})`;
};

attributionCouleurs();

//-----------------ECOUTEUR D'EVENEMENTS---------------------------

//Change les couleurs quand on appuie sur espace
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
    setTimeout(() => {
      notifCopie.innerHTML = "Copier le code RGB";
      notifCopie.visibility = "hidden";
    }, 1000);
  });
}

//SWITCH de cadena au click
for (const btn of btnsCadena) {
  console.log(btn);
    btn.addEventListener("click",()=> {
      btn.classList.toggle("fa-lock");
      btn.classList.toggle("fa-lock-open");
      let notifVerrou = btn.firstElementChild;
      if(notifVerrou.textContent == "Verrouillez la couleur") {
        notifVerrou.textContent = "Deverrouillez la couleur";
      } else {
        notifVerrou.textContent = "Verrouillez la couleur";
      }
    })
  }
