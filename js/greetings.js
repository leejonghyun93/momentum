const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const hiddenText = document.querySelector("#greeting")
const logoutBtn = document.querySelector(".logout");
const firstWindow = document.querySelector("#first_window");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
const savedUserName = localStorage.getItem(USERNAME_KEY);

function handleBtnClick(event){
    const userName = loginInput.value;
    console.log(userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    firstWindow.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,userName);
  
    paintGreeting(userName)
}
function userLogout() {
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    localStorage.clear();
    window.location.reload();
  }
  

function paintGreeting(username){
    hiddenText.innerText=`Hello ${username}`;
    hiddenText.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUserName===null){
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleBtnClick);
} else {
    firstWindow.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.addEventListener("click", userLogout);
    paintGreeting(savedUserName);
}
