/* Modifier le script.js
    1/ Créer une section dans le HTML après "article"
    2/ Dans la section, créer des balises "p" pour afficher le prénom de chaque apprenant
    3/ Créer un "random" pour mélanger les noms à chaque actualisation de la page
    4/ Pour chaque apprenant, la couleur de fond doit changer à chaque actualisation de la page
    5/ Pour chaque fond de couleur foncé, le nom de l'apprenant doit être en blanc et pour chaque fond 
    de couleur clair, le nom de l'apprenant doit être en noir.*/

    let arr = ["Louis", "Kevin", "Marlène", "Latifa", "Antoine"]; // Création d'un tableau contenant les prénoms des apprenants

    const sect = document.createElement("section"); // Création d'une section
    
    while (arr.length > 0) {
        const random = Math.floor(Math.random() * arr.length); // Mélange des noms
        const p = document.createElement("p"); // Création d'un paragraphe
        p.innerHTML = arr[random]; // Ajout du nom aléatoire dans le paragraphe
        sect.appendChild(p); // Ajout du paragraphe dans la section
        arr.splice(random, 1); // Suppression du nom aléatoire du tableau
        var h = Math.floor(Math.random() * 256); // Création d'une couleur aléatoire pour r
        var s = Math.floor(Math.random() * 256); // Création d'une couleur aléatoire pour g
        var l = Math.floor(Math.random() * 256); // Création d'une couleur aléatoire pour b
        p.style.backgroundColor = "rgb(" + h + "," + s + "," + l + ")"; // Création d'une couleur aléatoire
            if (l < 50) { // Si la couleur est foncée "
                p.style.color = "white";
            } else {
                p.style.color = "black";
            }
    };
    
    document.querySelector("article").appendChild(sect); // ajout de la section dans l'article