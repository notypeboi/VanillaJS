const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgName");

}

function genNumber() {

    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genNumber();
    paintImage(randomNumber);
}


init();