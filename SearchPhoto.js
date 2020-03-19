const clientid = "nRNbGIZYuossJDoZOXyj9exq8yYjgMYL7NiJ0dFPJc4";

const photoresult = document.querySelector(".photoresult");
const searching = document.querySelector(".searching"),
    searchinginput = searching.querySelector("input");

function SearchPhotos(value) {
    let url = `https://api.unsplash.com/photos/?client_id=${clientid}&query=${value}`;
    console.log(value);
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(element => {
                console.log(element.urls.regular);
                makephoto(element.urls.small);
            });
        });
    url = "";
}

function makephoto(url) {

    const image = new Image();
    image.src = `${url}`;

    photoresult.appendChild(image);

    //image.classList.add("photoresult_li")
}

function init() {
    searching.addEventListener("submit", event => {
        event.preventDefault();
        const currentValue = searchinginput.value;
        SearchPhotos(currentValue);
        searchinginput.value = "";
    });
}

init();