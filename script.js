"use strict";

function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "b5f5878f5f20f756ca27a08c0ff251a8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { name } = data;
        const { country } = data.sys;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { description, icon } = data.weather[0];
  
        document.getElementById(
          "weather"
        ).innerHTML = `<p>Location: ${name}, ${country}</p>
                        <p>Temperature: ${temp} °C</p>
                        <p>Humidity: ${humidity}%</p>
                        <p>Wind Speed: ${speed} m/s</p>
                        <p>Description: ${description}</p>
                        <img src="https://openweathermap.org/img/w/${icon}.png" alt="weather icon">`;
      })
      .catch((error) => {
        console.log("Error:", error);
        document.getElementById(
          "weather"
        ).innerHTML = `<p>Sorry, couldn't fetch weather data for ${city}.</p>`;
      });
}
  