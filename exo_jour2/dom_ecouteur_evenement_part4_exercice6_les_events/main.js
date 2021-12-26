// ### 1. Suit scrupuleusement les étapes ci-dessous
// - Récupère la div en passant par son id
let div = document.getElementById("content");

// - Créer une function avec comme paramètre "e" (qui symbolise "event") 
// - L'instruction de ta function est de faire un console.log de ton paramêtre e
function recup(e) {
    console.log(e);
}
// - Créer un écouteur d'événement "click" sur ta div et observe ce que ton console log renvoi quand tu clique sur :
//     - la div
//     - le premier h1
//     - le second h1
// - Ouvre ce que tu récupères dans tes console.log et cherche la propriété target, observe ce qu'il contient



div.addEventListener("click", function () {
    recup(div)
})




