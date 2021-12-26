//1
let div = document.getElementById('content')

div.addEventListener('click', function(e){
    if (e.target.tagName == 'DIV') {
        e.target.style = 'border: solid black 1px'
    } else if (e.target.tagName == 'P') {
        e.target.style = 'color: red;font-weight: bold'
        console.log(e.target.tagName);
    } else if(e.target.tagName == 'H1'){
        e.target.style = 'background-color: red'
    } else if(e.target.tagName == 'H2'){
        e.target.innerText = e.target.innerText.substr(0, e.target.innerText.length-1)
    }
})

//2
let txt = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"

let section = document.querySelector('section')

section.addEventListener('mouseover', function(){
    section.firstElementChild.innerHTML = txt
})
