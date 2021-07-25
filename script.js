var inputTodo = document.getElementsByTagName("input")[0];
var inputButton = document.getElementById("enter-item-button");
var ul = document.getElementsByTagName("ul")[0];
var taskCount=0;
function inputLength(){return inputTodo.value.length;}
function deleteTask(id){ document.getElementById("task"+ id).remove();}

function addItem(){
    var li= document.createElement("li");
    var div=document.createElement("div");
    var delButton= document.createElement("button");
    delButton.innerHTML="<img class=\"delete-icon\"src=\"icon/delete.png\" />";
    delButton.setAttribute("class", "delete-button");
    delButton.setAttribute("id", ""+taskCount);
    delButton.setAttribute("onclick","deleteTask(this.id)");
    li.setAttribute("class","todoText");
    li.appendChild(document.createTextNode(inputTodo.value));
    div.appendChild(li);
    div.appendChild(delButton);
    div.setAttribute("id","task"+ taskCount);
    div.setAttribute("class", "task-div");
    taskCount+=1;
    ul.appendChild(div);
    inputTodo.value = "";
}

function addItemOnClick(){
    if(inputLength() > 0) {addItem();}
}

function addItemOnKeypress(event){
    if(inputLength() > 0 && event.which === 13) addItem();
}
function deleteElement(){

}

inputButton.addEventListener("click",addItemOnClick);
inputTodo.addEventListener("keypress",addItemOnKeypress);  