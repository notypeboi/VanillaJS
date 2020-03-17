const CLICKED_CLASS = "clicked";
const title = document.querySelector(".title");
const title_two = document.querySelector(".title_two");


function init() {
    title.addEventListener("click", () => {
        const currentClassName = title.className;
        const currentClassNmae2 = title_two.classList;
        const hasClass = title.classList.contains(CLICKED_CLASS);

        console.log(currentClassName);
        console.log(hasClass);
        title.classList.toggle(CLICKED_CLASS);

    })
}

init();