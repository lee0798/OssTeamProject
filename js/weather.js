const API_KEY="e5cb21e00bb0e5afa2c82552d7893ff6";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText= data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
