
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
                    // const dataPretty = JSON.stringify(data, null, 2); 

                    // text to display
                    var dataDisplay = "";

                    var main = data["main"];
                    dataDisplay += `Temperature feels like ${main["feels_like"]}<br>`;
                    dataDisplay += `Temperature: ${main["temp"] - 273.15} °C<br>`;
                    dataDisplay += `Humidity: ${main["humidity"]}%<br>`;
                    dataDisplay += `Pressure: ${main["pressure"]} mbar<br>`;
                    cardBody.innerHTML = dataDisplay;
    });
}

function submitCity() {
    var city = document.querySelector("#cityInput").value;
    console.log(`city: ${city}`);

    getWeather(city);
}
