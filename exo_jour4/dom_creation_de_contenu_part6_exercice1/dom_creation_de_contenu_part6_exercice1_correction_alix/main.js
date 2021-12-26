// //*Exo1

// let div = document.getElementById("content")
// let h2 = document.createElement("h2")
// h2.innerText = "Part 6 - Exercice 1"
// div.append(h2)

//*EXO1
let div = document.getElementById("content")
let h2 = document.createElement("h2")
h2.innerText = "Part 6 - Exercice 1" 
div.append(h2)

// //*Exo2
// let p = document.createElement("p")
// p.innerText = "lorem ipsum"
// div.append(p)


//*EXO2
let p = document.createElement("p")
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque corrupti excepturi aliquid numquam modi tempora impedit praesentium at aspernatur?"
div.append(p)

// //*Exo3
// let h1 = document.createElement("h1")
// h1.innerText = "Le DOM - Création de HTML"
// div.prepend(h1)


//*EXO3
let h1 = document.createElement("h1")
h1.innerText = "Le DOM - Création de HTML"
div.prepend(h1)
// div.insertBefore(h1, div.firstChild) //methode de Isma


// //*Exo4
// let div2 = document.getElementById("secondaire")
// // let contenu = div.innerHTML
// // div2.innerHTML = contenu
// div2.innerHTML = div.innerHTML
// div2.children[1].innerText = " Part 6 - Exercice 2"
// //done les essais
// //done let contenuh2 = h2.cloneNode(true)
// //done let contenup = p.cloneNode(true)
// //done div2.append(contenuh2, contenup)
// //done contenuh2.innerText = " Part 6 - Exercice 2"

//*EXO4
let div2 = document.getElementById("secondaire")
div2.innerHTML = div.innerHTML
div2.children[1].innerText = "Part 6 -  Exercice 2"


// //*Exo5

// let div3 = document.createElement("div")
// let ol = document.createElement("ol")

// //METHODE 1
// // let li = document.createElement("li")
// // let li2 = document.createElement("li")
// // let li3 = document.createElement("li")
// // ol.children[0].innerText = " On peut créer des éléments"
// // ol.children[1].innerText = " On peut injecter dans ces éléments un autre élement"
// // ol.children[2].innerText = " On peut cloner des éléments"
// //METHODE 2
// for (let i = 0; i < 3; i++) {
//     ol.append(document.createElement("li"))
//     if (ol.children[0]) {
//         ol.children[0].innerText = " On peut créer des éléments"
//     } if (ol.children[1]) {
//         ol.children[1].innerText = " On peut injecter dans ces éléments un autre élement"
//     } if (ol.children[2]) {
//         ol.children[2].innerText = " On peut cloner des éléments"
//     }
// }

// div3.id = "matiere"
// document.body.append(div3)
// div3.append(ol)

//*EXO5
let div3 = document.createElement("div")
let ol = document.createElement("ol")

for (let i = 0; i < 3; i++) {
    ol.append(document.createElement("li"))
    // if (ol.children[0]) {
    //     ol.children[0].innerText = "j'ai appris beaucoup de chose"
    // }if (ol.children[1]) {
    //     ol.children[1].innerText = "j'ai appris beaucoup de chose"
    // }if (ol.children[2]) {
    //     ol.children[2].innerText = "j'ai appris beaucoup de chose"
    // }
}

ol.children[0].innerText = "j'ai appris beaucoup de chose"
ol.children[1].innerText = "j'ai appris beaucoup de chose"
ol.children[2].innerText = "j'ai appris beaucoup de chose"
document.body.append(div3)
div3.append(ol)
div3.id = "matiere"








