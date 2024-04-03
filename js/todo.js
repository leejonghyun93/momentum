const toDoForm = document.getElementById("todo-form"); // querySelector함수 통해서 todo-form 요소를 찾아 toDoForm에 저장
const toDoList = document.getElementById("todo-list");  // querySelector함수 통해서 todo-list 요소를 찾아 toDoList에 저장
const toDoInput = document.querySelector("#todo-form input");  // querySelector함수 통해서 #todo-form input 요소를 찾아 toDoInput에 저장

let toDos = []; 
// 저장할 to Dos의 배열
// 배열 값이 변경되어야 하므로 기존 const -> let으로 변경
const TODOS_KEY = "todos" // 자주 사용하는 단어를 변수(상수)로 만들어서 사용

function saveToDos() { 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    // stringify는 String 으로 변환
    // 1. JSON.stringify(toDos) 를 문자열로 변환
    // 2.  localStorage.setItem 를 통해 key 값하고 value를 추가
}

function deleteToDo(event) {
    const li = event.target.parentElement; // 누른 button의 부모요소인 li에 저장
    li.remove();  // li를 제거
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  // 삭제 버튼을 클릭한 외의 li는 남겨두고 다시 새 배열로 반환한다.
    saveToDos();// local storage에도 해당 내용을 반영할 수 있도록 saveToDos() 함수를 호출한다.
}

function paintToDo(newTodo) {
    const li = document.createElement("li");  // li요소를 불러옴
    li.id = newTodo.id;                        // li의 id는 newTodo.id;
    const span = document.createElement("span"); // span의 요소를 불러옴
    span.innerText = newTodo.text;              // span의 내용은 newTodo에서 입력한 테스트
    const button = document.createElement("button"); // button요소를 불러옴
    button.innerText = "x";                         // button내용의 x추가
    button.classList.add("btn");                    //  button에 btn을 추가
    button.addEventListener('click', deleteToDo); // button클릭시 deleteToDo 실행
    li.classList.add("box");   // li에 box을 추가
    li.appendChild(span);      // span을 li에 추가
    li.appendChild(button);    // button을 li에 추가
    toDoList.appendChild(li);  // toDolist에 li을 추가
}

function handleToDoSubmit(event) {
    event.preventDefault();      //모든 이벤트 중단
    const newTodo = toDoInput.value; // input의 내용을 담은 newTodo
    toDoInput.value = "";   //내용 초기화
    const newTodoObj = {  // 각 입력을 구분하기 위해 text와 id를 함께 담음
        text: newTodo,    
        id: Date.now(),   // Date.now()는 밀리세컨단위로 현재 시간을 알 수 있다.
    }
    toDos.push(newTodoObj);  // 할일 목록을 배열에 담음
    paintToDo(newTodoObj);   // 화면에 출력
    saveToDos();  // 배열을 저장
}

const savedToDos = localStorage.getItem(TODOS_KEY); // localStorage.getItem(TODOS_KEY)를 savedToDos에 저장

if (savedToDos !== null) {   // savedToDos가 null이 아니면 밑에 코드 실행
	const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;        // 
    parsedToDos.forEach(paintToDo);
  // item을 인자로 넘겨주지 않아도, forEach가 자동적으로 각 요소를 하나씩 실행하며 넘긴다.
  // 기존에 만들어뒀던 to do 요소를 화면에 그려주는 함수인 paintToDo를 호출한다.
}

toDoForm.addEventListener("submit", handleToDoSubmit); // submit 실행시 handleToDoSubmit함수 실행
