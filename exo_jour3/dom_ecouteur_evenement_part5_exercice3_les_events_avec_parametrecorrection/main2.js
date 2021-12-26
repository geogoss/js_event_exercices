// > Sur base de l'html fourni :

// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

let li = document.querySelectorAll("li");
// li.forEach(e => {
//     e.addEventListener("click", function () {
//         alert(e.innerText)
//     })
// });


// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)

li.forEach(e =>{
    e.addEventListener("dblclick", function () {
        let demande = prompt("changer ce contenu ")
        e.innerText = demande
    })
})



// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser
let input = document.getElementsByTagName("input");
let btn = input[2]
let indexA;
let indexB;

li = Array.from(li)

btn.addEventListener("click", function () {
    let input1 = input[0].value 
    let input2 = input[1].value
    li.forEach(e => {
        if (input1 == e.innerText) {
            indexA = li.indexOf(e)
        }
        if (input2 == e.innerText) {
            indexB = li.indexOf(e)
        }
    })
    let temp;
    temp = li[indexB].innerText;
    li[indexB].innerText = li[indexA].innerText
    li[indexA].innerText = temp;
})

// attention 
// ecrire     temp = li[indexB].innerText; est différent de li[indexB].innerText = temp !!!!!!!!!!!!!!!!!!!!!!
