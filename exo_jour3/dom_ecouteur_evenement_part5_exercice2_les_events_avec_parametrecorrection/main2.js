// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

let div = document.querySelector("div");
let div1 = document.querySelectorAll("div")[0].children;

    // Array.from(div1).forEach(e => {
    //     e.addEventListener("click", function () {
    //      console.log(e);   
    //     })
    // });

    // l'exercice demandait de le faire avec une boucle et pas forcément le e.target mais ça revient au même et sa prend moins de ligne de code
    div.addEventListener("click", function (e) {
        console.log(e.target);
    })


// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

div.addEventListener("dblclick", function (e) {
    e.target.innerText = e.target.innerText.toUpperCase()
})



// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;

let propriete1 = "border: 1px solid gold"
let propriete2 = "background-color: blue"
let propriete3 = "background-color: red"
let propriete4 = "border: 5px dotted gold"
let list = [propriete1, propriete2, propriete3, propriete4]
let input = document.querySelector("input");


input.addEventListener("click", function () {
    for (let i = 0; i < div1.length; i++) {
        let nbre = Math.round(Math.random()*(list.length-1))
        div1[i].style = list[nbre]
        // ici c'est une autre manière de faire en utilisant Math.floor et en le mettant avec setAttribute. Encore une fois cette façon de faire est plus longue
        // let random = Math.floor(Math.random()*list.length)
        // div.children[i].setAttribute('style', list[random])
        console.log(nbre);   
    }
})


