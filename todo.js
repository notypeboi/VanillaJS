const toDoForm = document.querySelector(".js-toDoForm"),
    toDoinput = toDoForm.querySelector("input"),
    toDolist = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';

function loadToDos() {
    const toDOS = localStorage.getItem(TODOS_LS);
    if (toDOS !== null) {}
}

function paintToDo(text) {
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);

    li.appendChild(delBtn);
    toDolist.appendChild(li);

}

function init() {

    loadToDos();
    toDoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const currentValue = toDoinput.value;
        paintToDo(currentValue);
        toDoinput.value = "";

    })

}

init();