// > https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
// > Avec la methode removeChild()
// ## 1. 
// - Utilise le second bouton pour supprimer le premier enfant
// ## 2. 
// - Utilise le second bouton pour supprimer le dernier enfant 
// ## 3 .
// - Utilise le dernier bouton pour supprimer un enfant au hasard

let btn = document.querySelectorAll("input");

let btn2 = btn[1]
let btn1 = btn[0]
let btn3 = btn[2]
let btn4 = btn[3]
let input = btn[4]
let btn6 = btn[5]
let ul = document.querySelectorAll("ul");
let ul1 = ul[0]
console.log(ul1);
let li = ul1.children

// exo 1 
btn1.addEventListener("click", function () {
    ul1.removeChild(li[0])
})

// exo 2
btn2.addEventListener("click", function () {
    ul1.removeChild(li[li.length-1])
})

// exo 3
btn3.addEventListener("click", function () {
    ul1.removeChild(li[Math.round(Math.random()*(li.length-1))])
    // l'astuce ici c'est de multiplier par le nombre d'enfant de ul c'est à dire ici li.length (et toujours -1 puisque c'est un index qui commence à 0)
})



// > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
// > Avec la methode replaceChild()


// ## 4 . Dans la partie Remplacement de ton HTML
// - Créer un élément li dans ton fichier JS
// - Remplace le deuxième li par celui ci quand on clique sur le button exercice 4

let li_exo4 = document.createElement("li");
li_exo4.innerText = "Geoffrey"
// let ul = document.querySelectorAll("ul");
// let ul1 = ul[0]
let ul2 = ul[1] 
let li2 = ul2.children
// li2 = Array.from(li2)
// li2.forEach(e => {
//     console.log(e.innerText);
// });
btn4.addEventListener("click", function () {
    ul2.replaceChild(li_exo4, li2[1])
})

// ## 5. 
// - Créer un programme qui permet avec l'input de créer un li et de remplacer le "li" 3 par celui ci en appuyant sur le bouton exercice 5

// déjà créé plus haut
// let input = btn[4]
// let btn6 = btn[5]


btn6.addEventListener("click", function () {
    let entree = input.value
    li2[2].innerText = entree
})


