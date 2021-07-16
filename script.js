var inputTodo = document.getElementsByTagName("input")[0];
var inputButton = document.getElementById("enter-item-button");
var ul = document.getElementsByTagName("ul")[0];
function inputLength(){return inputTodo.value.length;}
function addItem(){
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(inputTodo.value));
    ul.appendChild(li);
    inputTodo.value = "";
}

function addItemOnClick(){
    if(inputLength() > 0) {addItem();}
}

function addItemOnKeypress(event){
    if(inputLength() > 0 && event.which === 13) addItem();
}


inputButton.addEventListener("click",addItemOnClick);
inputTodo.addEventListener("keypress",addItemOnKeypress);