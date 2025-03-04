//DOM 요소 연결을 시켜야됨
const screen = document.getElementById("screen");
const button = document.querySelectorAll("button");
// document.querySelector(); => 태그한개만 가지고와서 변수에 담는다.
// document.querySelectorAll(); => 태그여러개를 리스트형태로 담아서 변수에 준다.

let currentInput = "";

// 연산자 정규식
const operatorRegex = /^(\d+|\*\*|[+\-*/])$/; 
// 숫자 정규식
const numberRegex = /[0-9]/g;

// input태그 화면에 숫자 또는 연산자를 추가하는 함수
function appendToScreen(value){
    screen.value += value;
}

// 화면 초기화 함수
function clearScreen(){
    screen.value = ""; // 빈 인풋값
}

//연산 수행함수
function calculate(operator, numbers){
    const [num1, num2] = numbers.map(Number);
    // numbers에다가 배열로 된 데이터를 넣음(숫자와 연산자)
    // numbers.map(Number) => 안에있는 배열데이터를 숫자화 시켜줌

    switch(operator){
        case "+" :
            return num1 + num2;
        case "-" :
            return num1 - num2;
        case "*" :
            return num1 * num2;
        case "/" :
            return num2 !== 0 ? num1 / num2 : "Error" ;
        default:
            break;
    }
}