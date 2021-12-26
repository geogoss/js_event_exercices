// # 1. 
// - Récupère la div dont l'id est #content
// - Ajoute un h2 dedans
// - Ajout le texte suivant au h2 "Part 6 - Exercice 1" 

let div = document.getElementById("content");
let h2 = document.createElement("h2");
h2.innerHTML = "Part 6 - Exercice 1"
console.log(h2);
div.appendChild(h2)

// document.body.onload = addElement;

// function addElement () {
//   // crée un nouvel élément h2
//   var newh2 = document.createElement("h2");
//   // et lui donne un peu de contenu
//   var newContent = document.createTextNode('checher sur google');
//   // ajoute le nœud texte au nouvea h2 créé
//   newh2.appendChild(newContent);

//   // ajoute le nouvel élément créé et son contenu dans le DOM
//   var currentDiv = document.getElementById('content');
//   document.body.insertBefore(newh2, currentDiv);
// }

// ------------------------------------------------------------------------------
// # 2.
// - Créer un paragraphe avec du lorem ipsum
// - Ajoute le apres le h2

let p = document.createElement("p");
p.innerHTML = "lorem";

div.appendChild(p);

// -----------------------------------------------------------------------------------
// # 3.
// - Créer un h1 
// - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
// - Place le en premier enfant de la div #content

let h1 = document.createElement("h1");
h1.innerHTML = "Le DOM - Création de HTML"

div.insertBefore(h1, h2)

// --------------------------------------------------------------------------------------
// # 4.
// - Prend le contenu de la div #content
// - Copie le dans la div #secondaire
// - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire
let div1 = document.querySelector("div")
console.log(div1);
let div1enfants = div1.children
console.log(div1enfants);
let div2 = document.getElementById("#secondaire")
console.log(div2);
div2.appendChild(div1enfants[0])
console.log(div2);

// let tab = Array.from(div)
// let insert = div.children
// console.log(insert);

// tab.forEach(e => {
//     div2.innerHTML = e.
// });

// console.log(div2);

// -----------------------------------------------------------------------------------
// # 5.
// - Créer une nouvelle div #matiere
// - Créer une liste ordonnée des 3 dernières choses que tu as appris

let divMatiere = document.createElement("div");
divMatiere.setAttribute("Id", "matiere");
console.log(divMatiere);

let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

li1.innerHTML = "Utilise la méthode createElement pour créer un élément";
li2.innerHTML = "Utilise la méthode appendChild pour mettre un élément dans un autre";
li3.innerHTML = "Utilise la méthode insertBefore pour mettre un élément à un endroit précis dans un autre élément"

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
console.log(ul);

divMatiere.appendChild(ul);
let body = document.querySelector("body")
body.appendChild(divMatiere);



