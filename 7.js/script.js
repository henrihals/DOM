/*
Dans le fichier index.html, ajoutez une balise de script à la fin du <body>. Faites ensuite les exercices 
suivants.

NE PAS MODIFIER LE FICHIER HTML, toutes les modifications doivent être faites en utilisant javascript. 
Les exercices qui commencent par un (*) sont plus difficiles à résoudre, 
vous pouvez garder cela pour la fin.

1. Utilisez childNodes pour lister tous les enfants du <ul>
2. Écrivez une boucle for pour itérer sur chaque enfant. Dans cette boucle :

    a. Utilisez une condition dans la boucle pour itérer uniquement sur les nœuds d'élément 
    (voir : nodeTypes. Use child.nodeType === 1)
    b. Trouvez l'élément qui contient Fast and Furious. Si ce n'est pas le premier élément, déplacez-le 
    en haut de la liste
    3. Étant donné que Fast and Furious est la franchise la plus importante de tous les temps, ajoutez 
    une classe .important à l'élément
    4. Ajoutez un eventListener sur chaque élément de la liste. Si l'élément est cliqué, une alerte () 
    apparaît pour afficher le nom de l'élément cliqué
    5. Ajoutez une condition spéciale à la fonction précédente si l'élément cliqué est Fast and Furious 
    l'alerte () devrait afficher La franchise la plus importante de tous les temps, l'histoire de la 
    famille de DOM (inic) Toretto. Ce n'est pas une question de voiture, c'est une question de famille.
    6. (*) Supprimez les doublons en utilisant removeChild ou remove (les doublons sont des éléments 
    avec le même titre, isEqualNode peut être utile).
    7. (*) Ajoutez un eventListener sur le corps du document, en écoutant keyup. Lorsque vous appuyez 
    sur la touche r du clavier, la liste doit être triée dans un ordre aléatoire, mais Fast and Furious 
    doit rester le premier élément (la franchise la plus importante de tous les temps, vous vous souvenez ?)
    8. (*) Modifiez la fonction précédente pour que lorsque vous appuyez sur la lettre d de votre clavier, 
    l'élément Fast and Furious soit cloné
    9. Créez un nouveau <div> avant la liste, en utilisant createElement et insertBefore
    À l'aide de createElement, créez une balise <select> dans le <div> créé précédemment, avec deux 
    <option> dedans : "importantes franchises" et "normal franchises"
    10. Ajoutez un eventListener au <select>, au changement, si l'option "important franchise" 
    est choisie, n'affiche que les éléments de la liste qui ont la classe .important. 4
    (indice : vous pouvez basculer la visibilité en utilisant element.style.visibility = 'hidden')
*/

const movies = document.querySelector("ul");
const moviesList = [...movies.children].filter(childNode => childNode.nodeType === 1)

// Remove duplicates
const moviesNotDuplicate = new Array();    
for (const li of moviesList) {
  if(!moviesNotDuplicate.find( x => x.isEqualNode(li))){
    moviesNotDuplicate.push(li)
  } else {
    li.remove()
  }
}

movies.childNodes.forEach( (child, i) => {
  if(child.nodeType === 1 && movies.childNodes[i].nodeType === 1) {
    //Fast & Furious first
    if(child.innerText == "Fast and Furious") {
      const fastFurious = child
      movies.replaceChild(
        fastFurious,
        movies.childNodes[0]
        )
        fastFurious.classList.add("important")
      }
      // click alert()
      child.addEventListener("click", e => {
        if(e.target.innerText == "Fast and Furious") {
        alert(`The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.`)
      } else {
        alert(e.target.innerText)
      } 
    })

  }  
});



// Select
const div = document.createElement("div")
document.body.insertBefore(div, movies)
const select = document.createElement("select")
div.appendChild(select)
const optionImportant = document.createElement("option")
const optionNormal = document.createElement("option")
optionImportant.innerText = "Important franchises"
optionNormal.innerText = "Normal franchises"
select.appendChild(optionNormal)
select.appendChild(optionImportant)

select.addEventListener("change", (e) => {
  for(let child of movies.children) {
    child.style.visibility = "visible"
    if(e.target.value == "Important franchises" && !child.matches(".important")) {
      child.style.visibility = "hidden"
    } else if(e.target.value == "Normal franchises" && child.matches(".important")) {
      child.style.visibility = "hidden"
    }
  }
})