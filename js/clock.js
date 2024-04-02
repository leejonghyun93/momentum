const clock = document.querySelector("h2#clock");
const Today = document.querySelector("h3#date");

const Hidden = "hidden";

const savedUser = localStorage.getItem("username");

const getDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const tDay = date.getDate();
  const day = getDay[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
  Today.innerText = `${year} . ${month} . ${tDay} . ${day}`;

}

getClock();
setInterval(getClock, 1000);