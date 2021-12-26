//1
let ul = document.querySelectorAll('li')

// ul.forEach(element => {
//     element.addEventListener('click', function(){
//         alert(element.innerText)
//     })
// });

//2
ul.forEach(e => {
    e.addEventListener('dblclick', function(){
        e.innerText = prompt('change le nom: ')
    })
});

//3
// creation d'un tableau
let li = Array.from(ul)
//recuperation du btn
let btn = document.querySelectorAll('input')[2]
 btn.addEventListener('click', function(){
     //recuperation des deux input
     let firstInp = document.querySelector('#li-one').value
     let secondInp = document.querySelector('#li-two').value
     //creation de variable pour recupere les index
     let indexA, indexB
     //boucle pour verifier quel valeur est equivalente a quel entree du tableau
    li.forEach(element => {
        if (firstInp == element.innerText) {
            indexA = li.indexOf(element)
            temp = element.innerText
        }
        if (secondInp == element.innerText) {
            indexB = li.indexOf(element)
        }
    });
    //echange des valeurs entre les differents element du tableau concerner
    [li[indexA].innerText, li[indexB].innerText] = [li[indexB].innerText, li[indexA].innerText]
 })