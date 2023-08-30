// alert('hello');

let createbox = document.getElementsByClassName('createbox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userInput');
let i =0;

createbox.addEventListener('keydown',content)

document.getElementById('create').addEventListener("click",function(){
    createbox.style.display = "block";
});

function content(e){
    if(e.keyCode== '13'){
        divStyle(input.value);
        input.value="";
        createbox.style.display = 'none';
    }
}
function color(){
    let randomColors = ["#813cc2","#e0c1fd","#D6A7DC","#861795","#4A294E"]
    if(i>randomColors.length - 1){
        i = 0;

    }
    return randomColors[i++];
}

function divStyle(text){
    let div = document.createElement("div");
    div.className = 'note';
    div.innerHTML = '<div class="details">'+'<h3>'+text+'<h3>'+'</div>';

    div.addEventListener("dblclick",function(){
        div.remove();
    });

    // randomcolors
    div.setAttribute('style','background:'+color()+'');
    notes.appendChild(div);
}