// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.


let div = document.getElementById("content")
console.log(div);


// function click(e){
//   // e.target se réfère à l'élément <li> cliqué
//   // C'est différent de e.currentTarget qui doit faire référence au parent <ul> dans ce contexte
//   e.target.style.visibility = 'hidden';
//   e.target.style = "border: 1px";
// }

// // Attache l'écouteur à la liste
// // Il se déclenche pour chaque <li> clické
// div.addEventListener('click', click, false);



function myFunction(event) { 
    console.log (event.target.nodeName);
  }



