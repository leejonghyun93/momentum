const API_KEY = "ba59bd7085aade7575b8f0c971d35a80"; //발급 받은 키 값을 API_KEY에 저장


function onGeoOk(position){
    const lat = position.coords.latitude;  // latitude(위도)를 lat에 저장
    const lon = position.coords.longitude; // latitude(lon)를 lat에 저장
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr` // API
    fetch(url) // fetch 함수를 통해 url 호출
    .then(response => response.json()) 
    .then(data =>{
        const weather = document.querySelector("#weather p:first-child");       // querySelector함수 통해서 #weather p:first-child 요소를 찾아 weather에 저장
        const Temperatures = document.querySelector("#weather p:nth-child(2)"); // querySelector함수 통해서 #weather p:nth-child(2) 요소를 찾아 Temperatures에 저장
        const temp = document.querySelector("#weather p:nth-child(3)");         // querySelector함수 통해서 #weather p:nth-child(3) 요소를 찾아 temp에 저장
        const tempMin = document.querySelector("#weather p:nth-child(4)");      // querySelector함수 통해서 #weather p:nth-child(4) 요소를 찾아 tempMin에 저장
        const tempMax = document.querySelector("#weather p:nth-child(5)");      // querySelector함수 통해서 #weather p:nth-child(5) 요소를 찾아 tempMax에 저장
        const city = document.querySelector("#weather p:nth-child(6)");         // querySelector함수 통해서 #weather p:nth-child(6) 요소를 찾아 city에 저장
        
        const iconSelect = document.querySelector(".weather .weather__icon");   // querySelector함수 통해서 .weather .weather__icon 요소를 찾아 iconSelect에 저장
         
    
        weather.innerText = "날씨 상태 :"+ data.weather[0].main;        // 날씨 상태 표시
        Temperatures.innerText = "날씨 :"+ data.weather[0].description; // 날씨 표시
        temp.innerText = "현재 온도 :"+ data.main.temp;                 // 현재 온도 표시
        tempMin.innerText = "최저 기온:"+ data.main.temp_min;           // 최저 기온 표시
        tempMax.innerText = "최고 기온 :"+ data.main.temp_max;          // 최고 기온 표시
        city.innerText = "현재 위치 : " + data.name;                    // 현재 위치 표시

        iconSelect.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); // 아이콘 속성을 저장한다.
        

    })
};

function onGeoError(){
    alert("Can't find you. No weather for you.");  // 위치 허용이 안되면 해당 문구 스크립트 발생
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);  // getCurrentPosition()에 첫번째 인자는 성공시 두번째 인자는 실패시 사용
