const apiKey = '6a855fd693437533e7714ad54d5b0b61';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon');
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = data.main.temp + '°C';
        document.querySelector('.Humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.Wind').innerHTML = data.wind.speed + ' Km/h';
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.scr = 'clouds.png';
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'clear.png';
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'rain.png';
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'drizzle.png';
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'mist.png';
        } else if (data.weather[0].main == 'Smoke') {
            weatherIcon.src = 'smoke.png';
        } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'snow.png';
        }
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none';
    }
};
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
document.querySelector('.cityDropdown').addEventListener('change', () => {
    const selectedCity = document.querySelector('.cityDropdown').value;
    checkWeather(selectedCity);
});
