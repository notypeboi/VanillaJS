const clockedContainer = document.querySelector(".js-clock"),
    clockTitle = clockedContainer.querySelector("h1");

function init() {
    getTime();
    //setInterval(sayHi, 3000);
    setInterval(getTime, 1000);

}

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours <10 ? `0${hours}` : hours}:${
        minutes <10 ? `0${minutes}`:minutes}:${
        seconds < 10 ? `0${seconds}` :seconds}`
}

function sayHi() {
    console.log("say hi")
}
init();