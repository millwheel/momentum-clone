const API_key = "231f3c9e6803b51f0e04d59078346265";

function onGeoOk(position){
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    console.log(lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    fetch(url).then(response => response.json().then(data =>{
        const weatherIconImg = document.querySelector("#weatherIcon");
        const temperature = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const weatherIcon = data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        city.innerText = data.name;
        temperature.innerText = `${data.main.temp}ºC`;
        weatherIconImg.setAttribute('src', weatherIconAdrs);
    }));
}
function onGeoError(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);