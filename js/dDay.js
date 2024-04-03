const button = document.querySelector(".fa-plus-circle"); // querySelector함수 통해서 fa-plus-circle 요소를 찾아 button에 저장
const dDayForm = document.querySelector("#dDay-form"); // querySelector함수 통해서 dDay-form 요소를 찾아 dDayForm 에 저장
const dDayList = document.querySelector(".dDay-box ul"); // querySelector함수 통해서 dDay-box ul 요소를 찾아 dDayList 에 저장
const displayUl = document.querySelector("#dDay-display"); // querySelector함수 통해서 dDay-display 요소를 찾아 displayUl 에 저장

function createIcon(classes){
    const icon = document.createElement("i");  // i요소를 불러와서 icon에 저장
    icon.classList.add("fas", ...classes);  // icon에 클래스명 추가
    return icon;                            // icon을 리턴한다.
}

function addInputButton(){
    const li = document.createElement("li");   // i요소를 불러와서 icon에 저장
    const deleteIcon = createIcon(["fa-times-circle"]); // createIcon함수의 fa-times-circle 아이콘 클래스를 deleteIcon에 저장
    deleteIcon.addEventListener("click", deleteDday); // click 실행시 deleteDday함수 실행


    const dDayName = document.createElement("input");  // input요소를 불러와서 dDayName에 저장
    dDayName.type = "text";         // dDayName 타입을 text로
    dDayName.className = "dDay-name";   // dDay-name 으로 설정
    
    const dDayInput = document.createElement("input"); // input요소를 불러와서 dDayInput에 저장
    dDayInput.type = "date";  // dDayInput 타입을 date로 설정
    dDayInput.className = "dDay-input"; // dDay-input 으로 설정

    const checkIcon = createIcon(["fa-check-square"]); // createIcon함수의 fa-check-square 아이콘 클래스를 checkIcon에 저장
    checkIcon.addEventListener("click", handleDayFormSubmit.bind(null, li, dDayName, dDayInput)); // click 실행시 handleDayFormSubmit.bind를 통해 해당 this들만 바꾼다.

    li.append(deleteIcon, dDayName, dDayInput, checkIcon); // li에 해당 자식 요소들 설정
    dDayList.appendChild(li);       // li 자식 요소를 추가
}

function handleDayFormSubmit(li, dDayName, dDayInput){
    const newDayName= dDayName.value; // dDayName.value 를 newDayName에 저장
    const chosenDate = new Date(dDayInput.value); // 설정한 날짜 및 시간을 chosenDate에 저장
    const currentDate = new Date();               // 현재 날짜 및 시간을 currentDate에 저장
    const gapDate = chosenDate - currentDate;  // 설정한 날짜 - 현재 날짜 = gapDate에 저장
    
    if(gapDate <= 0){                           // getDate가 0보다 크거나 같으면
        alert("미래의 날짜를 선택해주세요 🔮");  // 해당 alert 발생
    }else if(isNaN(gapDate)){                   // gapDate가 숫자가 아니면 true
        alert("날짜를 선택해주세요 📆");           // 해당 alert 발생
    }else if(newDayName === ""){                //  newDayName가 문자열하고 값 타입이 true면
        alert("이름을 지정해주세요 📁");             // 해당 alert 발생
    }else{                                      
        const millisecondsPerSecond = 1000;                          //  millisecondsPerSecond에 1000을 저장
        const millisecondsPerMinute = millisecondsPerSecond * 60;    // millisecondsPerSecond * 6 을  millisecondsPerMinute에 저장
        const millisecondsPerHour = millisecondsPerMinute * 60;     // millisecondsPerMinute * 60 을  millisecondsPerHour에 저장
        const millisecondsPerDay = millisecondsPerHour * 24;        // millisecondsPerHour * 24 을  millisecondsPerDay에 저장
        
        const remainingDays = Math.floor(gapDate / millisecondsPerDay ) +1;  
        
        const displayLi = document.createElement("li");     // li를 만들어 displayLi 에 저장
        const deleteIcon = createIcon(["fa-times-circle"]);  // "fa-times-circle"를 만들어 displayLi 에 저장
        deleteIcon.addEventListener("click", deleteDday);    // click 실행시 deleteDday함수 실행
        
        const dayDisplay = document.createElement("h4");   // h4를 만들어 dayDisplay에 저장
        const nameDisplay = document.createElement("h5");   // h5를 만들어 nameDisplay에 저장

        if(remainingDays <= 7){                         //  remainingDays이 7보다 작거나 같으면 
            dayDisplay.classList.add("red");            //  dayDisplay에 red 클래스 이름을 추가
        }else if(remainingDays <= 31){                  // remainingDays이 31보다 작거나 같으면 
            dayDisplay.classList.add("blue");           //  dayDisplay에 blue 클래스 이름을 추가
        }else if(remainingDays <= 100){                 // remainingDays이 100보다 작거나 같으면 
            dayDisplay.classList.add("green")           //  dayDisplay에 green 클래스 이름을 추가
        }

        dayDisplay.innerText = `D-${remainingDays}`;    // remainingDays를 text로 표시
        nameDisplay.innerText = newDayName;             // newDayName에 text로 표시

        displayLi.append(deleteIcon, dayDisplay, nameDisplay);   // 마지막 자식 끝에 해당 인자들 삽입
        displayUl.appendChild(displayLi);                       // displayUl 요소 안에 displayLi 자식 요소 추가
        displayLi.style.backgroundColor = "rgba(255, 211, 254)"; // displayLi 컬러 변경
        displayLi.style.marginLeft = "5%";                      // margin 왼쪽 5% 반영
        displayLi.style.height = "30px";                        // 높이 30px 만큼 추가

        li.style.display = "none";                              // li에 display를 none 설정

        console.log(`D-${remainingDays} ${newDayName}`);
    }
}

function deleteDday(event){
    const icon = event.target;   // event.target를 icon에 저장
    const li = icon.parentElement; // icon.parentElement를 li에 저장
    if (li.parentElement === dDayList) { // li.parentElement가 dDayList하고 값하고 타입이 일치하면 
        li.remove();                     // li.remove() 함수 실행
    } else if (li.parentElement === displayUl) { //  li.parentElement가 displayUl하고 값하고 타입이 일치하면
        const h1 = li.querySelector("h4");          // li.querySelector를 통해 h4를 찾아 h1에 저장
        const h2 = li.querySelector("h5");          // li.querySelector를 통해 h5를 찾아 h2에 저장
        
        h1.style.textDecoration = "line-through #FF5757";  // h1에 선을 꾸미는데 중간에 선을 만든다.
        h2.style.textDecoration = "line-through #FF5757";  // h2에 선을 꾸미는데 중간에 선을 만든다.
        
        setTimeout(() => li.remove(), 1000);  // 1초 후에 삭제 함수 실행
    }
}

button.addEventListener("click", addInputButton);  // click 실행시 addInputButton함수 실행