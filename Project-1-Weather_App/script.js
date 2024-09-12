const apiKey = "0f02a0dd56e60b2621cd385fbbd175db";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon =document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data)


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/Project-1-Weather_App/images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/Project-1-Weather_App/images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/Project-1-Weather_App/images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/Project-1-Weather_App/images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/Project-1-Weather_App/images/Mist.png"
    }
    else if(data.weather[0].main == "Smoke"){
        weatherIcon.src = "/Project-1-Weather_App/images/Mist.png"
    }
    
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "/Project-1-Weather_App/images/snow.png"
    }
    


}

searchBtn.addEventListener("click",()=> {
    checkWeather(searchBox.value)
})


