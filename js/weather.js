const API_KEY = "ba59bd7085aade7575b8f0c971d35a80";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather p:first-child");
        const Temperatures = document.querySelector("#weather p:nth-child(2)");
        const temp = document.querySelector("#weather p:nth-child(3)");
        const tempMin = document.querySelector("#weather p:nth-child(4)");
        const tempMax = document.querySelector("#weather p:nth-child(5)");
        const city = document.querySelector("#weather p:nth-child(6)");
        
        const iconSelect = document.querySelector(".weather .weather__icon");
       
    
        weather.innerText = "날씨 상태 :"+ data.weather[0].main;
        Temperatures.innerText = "날씨 :"+ data.weather[0].description;
        temp.innerText = "현재 온도 :"+ data.main.temp;
        tempMin.innerText = "최저 기온:"+ data.main.temp_min;
        tempMax.innerText = "최고 기온 :"+ data.main.temp_max;
        city.innerText = "현재 위치 : " + data.name;

        iconSelect.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        

    })
};

function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
