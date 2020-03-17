const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        //enter를 눌러도 다시 재생되지 않게만드는방법. 즉 새로고침이 안된다.
        const currentValue = input.value;
        paintGreeting(currentValue);
        saveName(currentValue);

    })

}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}




function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`

}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();


    } else {
        paintGreeting(currentUser);

    }
}

function init() {
    loadName();
}

init();