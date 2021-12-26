// # 1. 
// - Récupère la div dont l'id est #content
// - Ajoute un h2 dedans
// - Ajout le texte suivant au h2 "Part 6 - Exercice 1" 

let div = document.getElementById("content");
let h2 = document.createElement("h2");
h2.innerHTML = "Part 6 - Exercice 1"
div.appendChild(h2)


// # 2.
// - Créer un paragraphe avec du lorem ipsum
// - Ajoute le apres le h2

let p = document.createElement("p");
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, accusamus?"
div.appendChild(p)

// # 3.
// - Créer un h1 
// - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
// - Place le en premier enfant de la div #content

let h1 = document.createElement("h1");
h1.innerText = "Le DOM - Création de HTML"
div.prepend(h1)



// # 4.
// - Prend le contenu de la div #content
// - Copie le dans la div #secondaire
// - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire

let div2 = document.getElementById("secondaire");

div2.innerHTML = div.innerHTML
div2.children[1].innerText = "Part 6 - Exercice 2"

// # 5.
// - Créer une nouvelle div #matiere
// - Créer une liste ordonnée des 3 dernières choses que tu as appris
let body = document.querySelector("body");
let div3 = document.createElement("div");
div3.Id = "matiere"
let ol = document.createElement("ol");
ol.innerHTML = "<li>1ere chose importante à dire</li><li>2eme chose importante à dire</li><li>3eme chose importante à dire</li>"

div3.appendChild(ol)
body.appendChild(div3)
