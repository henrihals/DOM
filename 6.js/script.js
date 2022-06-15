/* 
1. Ajoutez un keyup listener sur le premier champ de saisie, de sorte qu'une fois que vous avez tapé 
une lettre dans ce champ, elle aille dans le <span id="display-firstname">. Le contenu du champ et 
l'étendue doivent toujours rester les mêmes.

2/ Ajoutez un keyup listener sur la deuxième entrée (l'entrée numérique), de sorte que si l'âge est 
inférieur à 18 ans, le contenu de la section a-hard-truth reste caché, sinon montrez-leur ce fait 
difficile à avaler.

3/ Eh bien, c'est un problème courant. Ajoutez un keyup listener sur les deux champs et affichez un indice 
visuel (par exemple, mettez le champ en rouge) si le mot de passe est trop court (moins de 6 caractères) 
ou si le mot de passe et sa confirmation ne correspondent pas.

4/ Enfin, utilisez un change listener sur le champ <select> pour basculer en mode sombre sur toute 
la page. Pour faciliter l'utilisation, nous dirons que le mode sombre ne fait que rendre l'arrière-plan 
noir et le texte blanc.
*/

const body = document.querySelector("body");
const firstname = document.querySelector("#firstname");
const displayFirstname = document.querySelector("#display-firstname");
const age = document.querySelector("#age");
const hardTruth = document.querySelector("#a-hard-truth");
const passwords = document.querySelectorAll("input[type=password]");
const selectDarkMode = document.querySelector("#toggle-darkmode");

firstname.addEventListener("keyup", (e) => {
    displayFirstname.innerText = e.target.value
})

age.addEventListener("keyup", e => {
   hardTruth.style.visibility = 
   (e.target.value >= 18) ? 
   "visible" : 
   "hidden";
})

// check password
passwords.forEach( el => {
    el.addEventListener("keyup", (e) => {
        el.style.backgroundColor = 
        (e.target.value.length < 6 || passwords[0].value != e.target.value) ?
        "red" :
        "";
    })
})

selectDarkMode.addEventListener("change", e => {
    if(e.target.value == "dark") {
        body.style.background = "black"
        body.style.color = "white"
    } else {
        body.style.background = "white"
        body.style.color = "black"
    }
})