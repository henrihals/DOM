/* 
Ouvrez le fichier script.js et modifiez-le, de sorte que :

1. Chaque fois que l'utilisateur clique sur l'un des carrés d'action
    a. Créez une nouvelle <div> avec une classe .displayedsquare et la couleur cliqué correspondante 
    dans la div ci-dessus ( .displayedsquare-wrapper)
    b. Créez un nouveau <li> dans le journal ci-dessous pour indiquer quand l'action a été effectuée

2. Ajoutez un event listener sur le document <body>, à l'écoute de la keypress événement. 
    a. Lorsque le bouton spacebar est touché, changez au hasard la couleur d'arrière-plan de toute la page
    b. affiche le temps lorsque la spacebar est utilisé de la même manière que vous avez utilisé 
    pour les carrés générés.
    c. Lorsque la touche l est enfoncée, le journal est supprimé (efface les <li> générés). 
    Attention : l'utilisation d'une suppression dans une boucle for peut causer des problèmes 
    (car le nombre d'éléments à boucler change), donc une boucle while peut être un bon choix à la place.
    d. Lorsque la touche s est enfoncée, les carrés sont supprimés (efface les carrés générés)

3. Créez un système pour que lorsqu'un utilisateur clique sur un carré généré, une alerte s'affiche 
avec la couleur de ce carré
*/

const _initTime = Date.now() // initial time
const body = document.querySelector("body");
const displayedSquaresWrapper = document.querySelector(
  ".displayedsquare-wrapper"
);
const actionLogList = document.querySelector("ul");

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const getRandomRgb = () => {
  return `rgb(${[0, 0, 0]
    .map(() => Math.floor(Math.random() * 256))
    .join(",")})`;
}

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
  
const addLog = (e) => {
  const newLi = document.createElement("li");
  let textLog = `[${getElapsedTime()}] `;

  if (e.pointerType == "mouse") {
    textLog += `Created a new ${e.target.classList[1]} square.`;
  } else if (e.key === " ") {
    textLog += `Changed the background color.`;
  } else {
    textLog += `${e.key} pressed with no effect`;
  }
  newLi.innerText = textLog
  actionLogList.append(newLi);
}

// 1
const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  const newDisplayedSquare = document.createElement("div")

  newDisplayedSquare.className = `displayedsquare ${e.target.classList[1]}`;
  displayedSquaresWrapper.append(newDisplayedSquare); 
  
  addLog(e)
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

// 2 keydown
const changeBackground = (e) => {
  if (e.key === " ") {
    e.target.style.background = getRandomRgb();
  }
}

const clickSpacebar = (e) => {
  changeBackground(e)
  addLog(e)
}

const clickL = (e) => {
  if (e.key === "l") {
    removeAllChildNodes(actionLogList);
  }
}

const clickS = (e) => {
  if (e.key === "s") {
    removeAllChildNodes(displayedSquaresWrapper);
  }
};


body.addEventListener("keydown", clickSpacebar);
body.addEventListener("keydown", clickL);
body.addEventListener("keydown", clickS);

const ul = document.querySelector("ul")
ul.onclick = function() {
  console.log("hello")
}

body.addEventListener("click", (e) => {
  if (e.target.classList[0] == "displayedsquare") alert(e.target.classList[1]);
});