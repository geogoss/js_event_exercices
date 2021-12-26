//1

let div = document.getElementById('content')

div.addEventListener('click', function(e){
    console.log(e.target);
    e.target.style = 'border: solid 1px red'
})