const toDoForm = document.querySelector(".js-toDoForm"),
    toDoinput = toDoForm.querySelector("input"),
    toDolist = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';
const toDos = [];

function deleteToDo(event) {
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDolist.removeChild(li);
    const cleanToDos = toDos.filter()

}

function loadToDos() {
    const loededtoDOS = localStorage.getItem(TODOS_LS);
    if (loededtoDOS !== null) {

        const parsedToDos = JSON.parse(loededtoDOS);
        //JSON파일로 STRING화된파일을 다시 PARSE를 통해 객체로 만들어 줬다.
        console.log(parsedToDos);
        parsedToDos.forEach((toDo) => {
            //이 PARSED된 객체의 각각의 아이템에 대하여 paintToDo라는 함수를 각각 실행시켜준다..
            paintToDo(toDo.text);

        })
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    // 리스트에 id 추가
    toDolist.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();

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