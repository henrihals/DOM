/* Modifiez le script.js, ne créez pas de nouveaux nœuds !

1. Sélectionnez le dernier enfant de la balise <ol> et placez-le au début de la liste
2. Déplacez le <h2> de la troisième section dans la seconde et vice-versa
3. Supprimez la dernière section du DOM, nous n'en avons pas besoin de toute façon */

// Mets le li de la dernière place en première position li
document.querySelector('ol').insertBefore(document.querySelector('ol > li:last-child'), document.querySelector('ol > li:first-child')); 

// Intervertit le h2 de la 2ème section avec le h2 de la 3ème 
const sections = document.querySelectorAll('section');
const title2 = sections[1].querySelector('h2');
const title3 = sections[2].querySelector('h2');
sections[1].insertBefore(title3, sections[1].firstElementChild);
sections[2].insertBefore(title2, sections[2].firstElementChild);

// Supprime la dernière section
sections[2].remove();