
const API_KEY = "56d203bb49b2ee04a9e61a5333fcbab0";

function getWeather(city, stateCode = null, countryCode = null) {
    var url;

    if (stateCode == null) {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
    } else if (countryCode == null) {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode}&APPID=${API_KEY}`;
    } else {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},${countryCode}&APPID=${API_KEY}`;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
                    console.log(data);
                    const cardBody = document.querySelector(".card-body");
                    const dataPretty = JSON.stringify(data, null, 2); 
                    cardBody.textContent = dataPretty;
                    });
}

function submitCity() {
    var city = document.querySelector("#cityInput").value;
    console.log(`city: ${city}`);

    getWeather(city);
}
