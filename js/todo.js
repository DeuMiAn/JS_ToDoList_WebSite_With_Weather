const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");
let toDos=[];

const TODOS_KEY="todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter(toDo=>toDo.id!==parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    const button= document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newTodo.text;
    toDoList.appendChild(li);
}


function handleToDOSubmit(event){
    event.preventDefault();  //submit 기본동작 막기
    const tempTodo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:tempTodo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();

}
toDoForm.addEventListener("submit",handleToDOSubmit);

function satHello(item){
    console.log("Hello", item);
}

const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(localStorage.getItem("todos"));
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}