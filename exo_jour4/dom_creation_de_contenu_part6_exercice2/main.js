// > https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
// > Avec la methode removeChild()
// ## 1. 
// - Utilise le second bouton pour supprimer le premier enfant
// ## 2. 
// - Utilise le second bouton pour supprimer le dernier enfant 
// ## 3 .
// - Utilise le dernier bouton pour supprimer un enfant au hasard


let ul = document.querySelector("ul");
let li = ul.children
console.log(ul);
console.log(li);
let btn = document.querySelectorAll("input");
let btn1 = btn[0]
let btn2 = btn[1]
let btn3 = btn[2]
console.log(btn[0]);

console.log(li.length);

let round = Math.round(Math.random()*(li.length-1))

btn1.addEventListener("click", function () {
    ul.removeChild(li[0]);
})

btn2.addEventListener("click", function () {
    ul.removeChild(li[li.length-1])
})


btn3.addEventListener("click", function () {
    ul.removeChild(li[Math.round(Math.random()*(li.length-1))]);
    console.log(round);
})

// btn3.addEventListener("click", function () {
//     ul.removeChild(ul.children [Math.floor(Math.random() * ul.children.length)]);
//     console.log(round);
// })



// ------------------------------------------------------------------------------
// > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
// > Avec la methode replaceChild()


// ## 4 . Dans la partie Remplacement de ton HTML
// - Créer un élément li dans ton fichier JS
// - Remplace le deuxième li par celui ci quand on clique sur le button exercice 4

let uldeuxieme = document.querySelectorAll("ul")[1]
let lienfantul = uldeuxieme.children
let licreation = document.createElement("li");
licreation.innerText = "Geoffrey Gosset"
console.log(uldeuxieme);
console.log(lienfantul);
let btn4 = btn[3]

btn4.addEventListener("click", function () {
    uldeuxieme.replaceChild(licreation, lienfantul[1])
})


// ----------------------------------------------------------------------------------
// ## 5. 
// - Créer un programme qui permet avec l'input de créer un li et de remplacer le "li" 3 par celui ci en appuyant sur le bouton exercice 5

let input = document.querySelector("#replaceValue");
// let input_text = document.getElementById("replaceValue").value;
// let uldeuxieme = document.querySelectorAll("ul")[1]
// let lienfantul = uldeuxieme.children
let btn5 = btn[5];
let li_ajout = document.createElement("li")

btn5.addEventListener("click", function () {
    li_ajout.innerText = input.value
    uldeuxieme.replaceChild(li_ajout, lienfantul[2])
})



// function getValue() {
//     // Sélectionner l'élément input et récupérer sa valeur
//     var input = document.getElementById("in").value;
//     // Afficher la valeur
//     alert(input);
// }






// -----------------------------------------------------------
// test random question 3
// let testwalid = Math.floor(Math.random() * ul.children.length)
// let i = 50
// while (i>0) {
//     console.log(Math.floor(Math.random() * ul.children.length));
//     i--
// }


// let round2 = Math.round(Math.random()*(li.length-1))
// let i = 10
// do {
//     console.log(Math.round(Math.random()*(li.length-1)));
//     i--;
// } while (i>0);



