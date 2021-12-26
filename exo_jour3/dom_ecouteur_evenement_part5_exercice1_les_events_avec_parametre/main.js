// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section, sert toi du button Exo1

let btn = document.querySelector("input")
console.log(btn);
let p = document.querySelector("p")
console.log(p);

function passer(x) {
    p.innerText = x
}

btn.addEventListener("click", function () {
    passer(pContent)
})


// ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :
// - Les couleurs sont contenu dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1
// - Il faut que ces variables soient envoyés en parametre dans la function via le addEventListener.


let h1 = document.querySelector("h1")
console.log(h1);
function change(x, y) {
    h1.style.color = x
    h1.style.background = y
}

h1.addEventListener("click", function () {
    change(theColor, theBackground)
})



