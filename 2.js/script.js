/* 
1. Ajoutez un attribut de titre à chaque élément qui possède la classe important, en indiquant 
Ceci est un élément important. Conseil : ajouter un attribut title à un élément est différent 
de la modification du titre d'un document.

2. Sélectionnez toutes les balises img et parcourez-les en boucle. Si elles n'ont pas de classe important,
mettez leur propriété display sur none.

3. Parcourez tous les paragraphes et affichez leur contenu dans la console. Si le paragraphe a une classe, 
affichez son nom de classe a bien

Donnez à chacun des paragraphes une couleur de texte aléatoire (différente pour chacun d'eux) 
SAUF s'il a une classe, alors laissez-le tel quel.
*/

let change = document.querySelectorAll('.important'); // Sélectionne tous les éléments qui ont la class important
change.forEach(element => {     
    element.setAttribute('Title', 'This is an important item'); 
}); // Ajoute un attribut title à tous les éléments qui ont la class important

let img = document.querySelectorAll('img'); //

img.forEach(element => {
    if (!element.classList.contains("important")) {
        element.style.display = "none"
        }
    }
); // Si l'élément n'a pas la class important, il est caché

let ch = document.querySelectorAll('p'); // Sélectionne tous les éléments qui sont des paragraphes

ch.forEach(element => {
    if (!element.classList.contains("important")) {
        element.style.color = "#" + Math.floor(Math.random() * 10000)
        }
    }
); // Si l'élément n'a pas la class important, il est coloré aléatoirement
