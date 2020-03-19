const COORDS = 'coords'
const API_KEY = '2ea1f6edcc2cce07e902a3a9f2188a8d';
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`
        });


}







function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        //기존 loadedCords가 string으로 되어있으니까 parse를 통해 paeseCoords로 객체로 만들어줘야한다.
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);

    }
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)

}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    };
    console.log(position);
    saveCoords(coordsObj);
    //xx`getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('cannot')
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    console.log('can')

}

function handleGeoError() {
    console.log('cannot')
}

function init() {
    loadCoords();

}

init();