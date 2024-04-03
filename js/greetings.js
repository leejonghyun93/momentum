const loginForm = document.querySelector("#login-form");        // querySelector함수 통해서 #login-form 요소를 찾아 loginForm에 저장
const loginInput = document.querySelector("#login-form input"); // querySelector함수 통해서 #login-form input 요소를 찾아 loginInput에 저장
const link = document.querySelector("a");                       // querySelector함수 통해서 a 요소를 찾아 link에 저장
const hiddenText = document.querySelector("#greeting");         // querySelector함수 통해서 #greeting 요소를 찾아 hiddenText에 저장
const logoutBtn = document.querySelector(".logout");            // querySelector함수 통해서 .logout 요소를 찾아 logoutBtn에 저장
const firstWindow = document.querySelector("#first_window");    // querySelector함수 통해서 #first_window 요소를 찾아 firstWindow에 저장

const HIDDEN_CLASSNAME = "hidden" // 자주 사용하는 단어를 변수(상수)로 만들어서 사용
const USERNAME_KEY = "username"    // 자주 사용하는 단어를 변수(상수)로 만들어서 사용
const savedUserName = localStorage.getItem(USERNAME_KEY); // localStorage.getItem(USERNAME_KEY) 를 saveUserName에 저장

function handleBtnClick(event){
    const userName = loginInput.value;  // loginInput.value를 userName에 저장
    console.log(userName);
    loginForm.classList.add(HIDDEN_CLASSNAME); //  loginForm에 HIDDEN_CLASSNAME을 추가
    firstWindow.classList.add(HIDDEN_CLASSNAME); // firstWindow에 HIDDEN_CLASSNAME을 추가
    logoutBtn.classList.remove(HIDDEN_CLASSNAME); //  logoutBtn class를 삭제한다.
    localStorage.setItem(USERNAME_KEY,userName); //  localStorage.setItem(USERNAME_KEY,userName) 저장
  
    paintGreeting(userName); // paintGreeting 함수에 userName 보낸다.
}
function userLogout() {
    logoutBtn.classList.add(HIDDEN_CLASSNAME); //  logoutBtn에 HIDDEN_CLASSNAME을 추가
    localStorage.clear(); // 도메인의 localStorage 값 삭제
    window.location.reload(); // 현재 리소스를 다시 불러온다.
  }
  

function paintGreeting(username){
    hiddenText.innerText=`Hello ${username}`; // username의 text로 변경
    hiddenText.classList.remove(HIDDEN_CLASSNAME); // hiddenText class를 삭제한다.
}

if(savedUserName===null){                                   // savedUserName가 null이면
    logoutBtn.classList.add(HIDDEN_CLASSNAME);              // logoutBtn에 HIDDEN_CLASSNAME을 추가
    loginForm.classList.remove(HIDDEN_CLASSNAME);           // loginForm class를 삭제한다.
    loginForm.addEventListener("submit",handleBtnClick);    //  submit 실행시 handleBtnClick 함수 실행
} else {                                                    //  savedUserName가 null 아니면
    firstWindow.classList.add(HIDDEN_CLASSNAME);            // firstWindow에 HIDDEN_CLASSNAME을 추가
    logoutBtn.addEventListener("click", userLogout);        //  click 실행시 userLogout 함수 실행
    paintGreeting(savedUserName);                           // // paintGreeting 함수에 savedUserName 보낸다.
}
