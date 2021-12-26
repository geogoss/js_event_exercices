// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


//1

let input = document.querySelector('input')
let p = document.querySelector('p')

function leP(x) {
    p.innerText = x
}

input.addEventListener('click', function(){
    leP(pContent)
})

//2

let h1 = document.querySelector('h1')

function color(color1, color2) {
    h1.style.backgroundColor = color1
    h1.style.color = color2
}

h1.addEventListener('click', function(){
    color(theBackground, theColor)
})