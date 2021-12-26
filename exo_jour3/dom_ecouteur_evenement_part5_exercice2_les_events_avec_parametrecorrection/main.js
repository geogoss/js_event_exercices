// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


//1
let div = document.querySelector('#content')

let btn = document.querySelector('input')

Array.from(div.children).forEach(element => {
    element.addEventListener('click', function(){
        console.log(element);
    })
});

//2
div.addEventListener('dblclick', function(e){
    e.target.innerText = e.target.innerText.toUpperCase()
})

//3
let list = ['border: 1px solid gold;', 'background-color: blue;', 'background-color: red;', 'border: 5px dotted gold;']
let input = document.querySelector('input')

input.addEventListener('click', function(){
    for (let i = 0; i < div.children.length; i++) {
        let random = Math.floor(Math.random()*list.length)
        div.children[i].setAttribute('style', list[random])
        console.log(random);
    }
})