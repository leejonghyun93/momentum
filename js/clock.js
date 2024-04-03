const clock = document.querySelector("h2#clock"); // querySelector함수 통해서 h2#clock 요소를 찾아 clock에 저장
const Today = document.querySelector("h3#date"); // querySelector함수 통해서 h3#date 요소를 찾아 Today에 저장

const Hidden = "hidden"; // hidden을 Hidden에 저장

const savedUser = localStorage.getItem("username");// 로컬 스토리지의 username 아이템을 읽고 savedUser에 저장

const getDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // 일요일 ~ 토요일까지 배열 index를 getDay에 저장


function getClock() {
  const date = new Date(); // 현재 시간을 date에 저장
  const year = date.getFullYear(); // 날짜의 연도를 year에 저장
  const month = date.getMonth() + 1;  // 해당 월을 month에 저장
  const tDay = date.getDate(); // 해당 일을 tDay에 저장
  const day = getDay[date.getDay()]; // 해당 요일을 day에 저장
  const hours = String(date.getHours()).padStart(2, "0"); // 현재 시간을 표시하는데 padStart함수는 숫자가 1자릿수 일때 2 자릿수를 0으로 표시하고 1자릿수가 아니면 0을 표시안한다 그리고 문자열로  hours에 저장
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 현재 분을 표시하는데 padStart함수는 숫자가 1자릿수 일때 2 자릿수를 0으로 표시하고 1자릿수가 아니면 0을 표시안한다 그리고 문자열로  minutes에 저장
  const seconds = String(date.getSeconds()).padStart(2, "0"); // 현재 초을 표시하는데 padStart함수는 숫자가 1자릿수 일때 2 자릿수를 0으로 표시하고 1자릿수가 아니면 0을 표시안한다 그리고 문자열로  seconds에 저장
  clock.innerText = `${hours} : ${minutes} : ${seconds}`; // 현재 시간 : 분 : 초 를 표시
  Today.innerText = `${year} . ${month} . ${tDay} . ${day}`; // 현재 연도 : 월 : 일 : 요일 을 표시

}

getClock(); // 바로 함수 실행
setInterval(getClock, 1000);  // getClock함수를 1초마다 기능을 사용