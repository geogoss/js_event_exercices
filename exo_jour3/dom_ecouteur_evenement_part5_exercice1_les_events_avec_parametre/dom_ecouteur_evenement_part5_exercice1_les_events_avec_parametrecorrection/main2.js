// > Event Target

// ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section, sert toi du button Exo1

let btn = document.querySelector("input");
let p = document.querySelector("p");
let pContent ="Voici du texte à mettre dans un élément"
function mettre(x) {
    p.innerText = x
}
btn.addEventListener("click", function () {
    mettre(pContent)
})

// ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :
// - Les couleurs sont contenu dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1
// - Il faut que ces variables soient envoyés en parametre dans la function via le addEventListener.
let red = "red"
let gold = "gold"

let h1 = document.querySelector("h1");
function h1add(x,y) {
    h1.style.color = red;
    h1.style.backgroundColor = gold;
}

h1.addEventListener("click", function () {
    h1add(red, gold)
})