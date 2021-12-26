// > Event Target

// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.

let body = document.getElementsByTagName("body")[0];

body.addEventListener("click", function (e) {
    if (e.target.tagName == "DIV") {
        e.target.style = "border: 1px solid black"
    }
    else if (e.target.tagName == "P") {
        e.target.style = "font-weight: bold; color: red;"
    }
    else if (e.target.tagName == "H1") {
        e.target.style = "text-decoration: underline;"
    }
    else if (e.target.tagName == "H2") {
        e.target.innerText = e.target.innerText.substr(0,e.target.innerText.length-1)
    }
})

// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 

let variable = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"

let section = document.querySelector("section");
let p_amettre = section.firstElementChild
section.addEventListener("mouseover", function () {
    p_amettre.innerText = variable
})


