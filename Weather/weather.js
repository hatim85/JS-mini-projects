import { weatherApiKey } from "../config.js"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchbox = document.querySelector(".search input")
const searchbutton = document.querySelector(".search button")
const textenter=document.querySelector(".inp")
const weathericon = document.querySelector(".weather-icon")
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${weatherApiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
        switch (data.weather[0].main) {
            case "Clouds":
                weathericon.src = "./images/clouds.png"
                break;
            case "Clear":
                weathericon.src = "./images/clear.png"
                break;
            case "Drizzle":
                weathericon.src = "./images/drizzle.png"
                break;
            case "Rain":
                weathericon.src = "./images/rain.png"
                break;
            case "Snow":
                weathericon.src = "./images/snow.png"
                break;
            case "Mist":
                weathericon.src = "./images/mist.png"
                break;
            default:
                console.log("sorry error");
                break;
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}
searchbutton.addEventListener("click", () => {
    checkweather(searchbox.value);
})
textenter.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
    }
});
