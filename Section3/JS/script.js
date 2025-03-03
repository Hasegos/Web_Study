let black = {name : "최수호", age : "24", ismarried : true};

console.log(black.age);

/* JAVASCRIPT (데이터 타입 - 실습) */
/*
    값 : 독립적 , 객체 : 병합적 -> 다중적인 의미를 가진다.
    null은 빈 데이터를 의미함으로 값이다
    undefined 는 선언만 되었을 경우
*/
{
    let integer = 1; // 정수
    let float = 10.5; // 실수
    let negative = -20; // 음수

    console.log(integer);
    console.log(float);
    console.log(negative);

    let singleQuote = 'hello';
    console.log(singleQuote);

    let doubleQuote = "helloGoodtoSeeyouAgain";
    console.log(doubleQuote);

    let templateLiteral = `${singleQuote} black`; // 백틱 템플릿리털
    console.log(templateLiteral);

    let isTrue = true;
    console.log(isTrue);

    let isFalse = false;

    console.log(isFalse);

    // 객체 : 병합적인 형태
    let black_2 = {
        name : "canes",
        age : 30,
        isMarried : false    
    };

    console.log(black_2.age);
    console.log(black_2.isMarried);

    let newJeans = ["MinJI", "Haerin", "Honey"];
    console.log(newJeans);

    console.log(newJeans[0]);
    console.log(newJeans[1]);
    console.log(newJeans[2]);

    let emptyValue = null;
    console.log(emptyValue);

    console.log(typeof emptyValue);


    let notAssigned; //선언만 했을 시
    console.log(notAssigned);

    notAssigned = 1;
    console.log(notAssigned);
}


/* JAVASCRIPT (타입변환개념 + 실습) */
/*
           형 변환 

임시적 형변환  
(데이터 크기를 자동으로 확장)

boolean << number << string 순으로 되고 강한쪽으로 변환됨

명시적 형변환
(데이터 크기를 강제적으로 축소)


*/
// 암시적 형변환
let num =1;
let str = "2";
console.log(num + str); // 문자열로 변환 (약한거 -> 강한거)

let boolex = true;
num = 3;
console.log(boolex + num); // true -> 1로 변환

// 명시적 형변환  
// 타입케이스팅할때 일반적으로 하는거에 반대로 변수를 감싸줘야함

str = "123";
num = 456;
console.log(Number(str) + num);

/*
 프로토타입 (Prototype)

 객체 생성자 함수에 의해 생성되는 객체들이 공유하는 속성과 메소드를 저장하는 특수 객체이다.
 쉽게 생각해서 객체 내에 또 다른 함수를 만들어 넣어서 사용함.

 예를 들어서 Object 같은 경우에는 안에 Array, String, Date  내장으로 있어서
 배열을 사용할때 .sort()를 꺼내서 사용이 가능하다.

 사용하는 이유 : 생산성, 객체지향성, 메모리 효율성
 생산성 : 한번 만들어놓으면 다음에 또 만들필요 X
 객체지향성 : 상속과 코드 재사용가능
 메모리 효율성 : 스스로 메소드와 속성을 모두 가지는 대신 여러 객체가 동일한 프로토타입을 공유하도록하고
 이를 사용하면 메모리를 효율적으로 사용할 수 있다.


 프로토체인 : Object에 없는 개발자(사용자)가 만들어낸 프로토타입을 찾아내준다.
*/


function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function h(){
    console.log(this.name);
};

const dog = new Animal('Baddy');

dog.speak();

const person = {
    name : "Black",
    age : 32,
    greet : function(){
        console.log("hello");
        console.log(this.name);
        console.log(this.age);        
    }
};
person.greet();

function showThis(){
   console.log(this);
}
showThis();

/* JAVASCRIPT (배열-실습) */
/*
    배열은 처음과 끝을 제외한 중간 데이터를 삭제하기 X 
    배열, 객체 CRUD 
    배열 공간 자체를 건드는 건 아니라 그 안에 있는 값을 건듬
*/
{
    const fruits = ["사과" , "바나나" , "오렌지"];
    console.log(fruits[1]);

    const Person = {
        name : "홍길동",
        age : 25,
        city : "서울"
    };

    console.log(Person.name);
    console.log(Person.age);
    console.log(Person.city);

    const dogs = ['비숑프리제', '포메라니안' , '푸들', '시바견', '말티즈'];
    console.log(dogs[1]);

    dog[2] = '허스키';
    console.log(dogs[2]);

    dogs.pop();
    console.log(dogs);

    delete dogs[1];
    console.log(dogs);

    dogs.splice(2,1, "dd");
    console.log(dogs);

    let numbers = [1,2,3,4,5];
    let filteredNumbers = numbers.filter(num => num == 3);
    console.log(filteredNumbers);

    numbers.push(6);
    console.log(numbers);

    numbers.pop();
    console.log(numbers);
}

/* JAVASCRIPT (예외처리 */
/*
    try{
        문제가 생길 수 있는 코드
    
    }catch(e){ 에러가 났는지 종류에 대해 알려줌
        문제가 발생하면, 이 부분에서 그 문제를 처리    
    }finally{
        문제가 발생 하든 안하든 항상 실행되는 코드가 들어감
    }

    throw는 에러를 직접 발생
    catch는 에러를 찾아냄


    RestAPI란
     HTTP 메소드 + JSON 객체 웹페이지{key : value}를 가짐

     CRUD   
        HTTP 메소드 방식
     Create -> Post (서버에다가)
     Read -> Get (요청한 페이지 가져옴)
     Update -> Put
     Delete -> Delete (데이터 삭제)

     새로고침없이 작업가능한 fetch() 비동기 통신 방식
     앞전에 있던 작업이 끝나기전에 다음코드 실행
*/

function divideNumbers(){
    try{
        let number = 10;
        let zero = 0;

        // if(zero === 0){
        //     throw new Error("0으로 나눌수 없습니다.");
        // }
        let result = number / zero;
        console.log ("결과: " + result);
    }catch(e){
        console.log("문제가 생겼습니다. " + e.message);
    }
    finally{
        console.log("프로그램이 끝났어요");
    }     
}

divideNumbers();

/* JAVASCRIPT (DOM-개념) */
/*
    이미지, 텍스트, 버튼들의 집합을 객체로 다룰 수 있게끔해줌
    객체에서 CRUD 물리적인 기능을 이용할 수 있게 해주는 기능 또는 모델

    HTML에 있는 태그와 JS안에 있는 코드와 연결시켜야한다.
    (태그명, id, id선택자, class 선택자로 접근)

    태그명 : document.querySelector('태그명'); 
            여기서 #태그명 을 사용시 id선택자가됨
            추가로 .클래스명 을 사용시 class선택자가됨
    id선택자 : document.getElementById("wapper");
    class선택자 : document.getElementByClassName("clasname");
*/

// classname 같은 경우는 collection형태로 나오기때문에 css 처리가 불가능
// 그래서 querySelector를 사용하자
//document.querySelector("input").style.background ="green";

/* JAVASCRIPT (비동기프로그래밍-개념) */
/*
    동기 프로그래밍 
    스레드 -> 구간 -> 데이터가 흐르는 통로

    A                       B
    데이터가 20초 끝나야 다음데이터를 옮기는데 시간이 걸림
    즉, 데이터가 많아질수록 오래걸림 (순차적으로)
    (완료지점을 알수있다.)
    
    비동기 프로그래밍

    A                       B
    데이터가 동시에 옮기는게 가능함
    (중첩적으로 가능) 병행성으로 움직임
    병행성은 단일 스레드내에서 비동기 작업을 처리하는 동안 다른 작업을 중단하지 않고 실행
    
    장점 1. 시간을 짧게 줄일수있다.

    단점 1. 정확하게 완료지점 알 수가 없다.
    비동기작업을 많이사용시 가독성 떨어지고 이해 ↓
*/


/* JAVASCRIPT (비동기프로그래밍2-개념) */
/*
    callback()
    ex) 음식을 주문해서 도착하기전까지 다른거하다가 도착하면 알려주는거라 할 수 있다.

    
    function orderFood(food, callback){
        console.log(`${food} 주문을 시작해요`); 1번
        setTimeout(function(){console.log(`${food}가 배달되었습니다.` <- 2번)
            callback(); <- 3번
        }, 3000);
    }

    orderFood('피자',function(){console.log("맛있게드셈") <- 3번});

    먼저 피자라는 인자를 받고 
    1번을 실행후 그다음 2번 3초 뒤 콜백함수인 
    3번을 불러냄

    콜백은 콜백 밖에서 온 비동기 값을 알수없다.
    그리고 매번 비동기를 실행해야지만 그값을 사용가능
*/


function orderFood(food, callback){
        console.log(`${food} 주문을 시작해요`);
        setTimeout(function(){console.log(`${food}가 배달되었습니다.`)
            callback();
        }, 3000);
}

orderFood('피자',function(){console.log("맛있게드셈")});



/* JAVASCRIPT (비동기프로그래밍3-개념) */
/*
    프로미스(Promise) -> 약속

    프로미스는 배달이 올지 말지 약속과같다
    음식이 도착 -> 성공
    음식 X -> 실패

    new Promise((성공, 실패) => {
        
        성공했을때


        실패했을때
    })

    이형태 구조로 갖고 만약 성공했을 경우
    .then 형태로 .then((message) => {}) 형태로 호출이 해야된다.

    실패했을 경우
    .catch 형태로 .catch((error) => {}) 형태로 호출을 해야된다.

    프로미스는 성공과 실패여부를 (객체에 결과값을) 저장이 가능해서 
    저장된 값을 가져오는데 용이하다    
*/

const OrderFood = new Promise((resole, reject) => {
    const isDelivered = false; // 음식이 배달될지 여부
    if(isDelivered == true){
        resole('음식이 배달됨'); // 성공은 message
    }else{
        reject('배달이 실패했습니다.'); // 실패는 error
    }
});

//OrderFood.then((message) => {console.log(message)});

OrderFood.catch((error) => {console.log(error)});


/* JAVASCRIPT (비동기프로그래밍4-개념) */
/*
    Async , Await

    배달을 기다리는 동안 마치 잠시 기다렸다가 음식이 오면,
    먹는 것처럼 동작
    => 주문이 완료될때까지 기다렸다가 그사이에 다른일 가능

    async를 작성하고 await 전까지는 음식이 도착하기전

    await는 음식이 도착한 후에 일을 처리
*/

function deliverFood(){
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve('음식이 배달되었습니다.');
        }, 3000);
    });
}

async function orderAndEat() {
    console.log('음식을 주문했어요');
    const message = await deliverFood();
    console.log(message);
    console.log("async 끝났습니다.");
}

orderAndEat();


/* JAVASCRIPT (비동기프로그래밍-실습) */

function orderFood(food, callback){
    console.log(`${food} 주문을 시작해요`);
    setTimeout(function(){
        console.log(`${food}가 배달 되었습니다.`)
        callback();
    }, 3000);
}

orderFood('피자', function(){console.log("맛있게먹어요")});

/* JAVASCRIPT(fetch - 개념)  */
/*
    fetch() => 데이터를 가져오거나 혹은 보내기도함
    프론트와 백엔드의 데이터간 연결을 fetch함수가 도와줌

    프론트 -> 서버 POST (회원가입) POST는 데이터 (보안 O) body 본문에 들어감

    서버 -> 프론트 GET 있는 그대로 보여줌(보안 x)

    PUT는 데이터 수정 POST body라는 부분에 들어감

    DELETE는 데이터 삭제 GET이랑 비슷함

    body는 post영역의 body라는 곳에 들어감.

    Promise => resolve();
               reject();  
    fetch(url, options).then(response => { response 응답처리(Promise 객체를 처리)});
    .catch(error => {});

    fetch는 자동으로 promise 객체를 반환한다.

    option에는 method : post,get,put,delete
*/

/* JAVASCRIPT(fetch - 실습)  */

// GET 방식
fetch("https://korean-advice-open-api.vercel.app/api/advice",{
    method: 'GET',
}).then(response =>{
        if(!response.ok){
            throw new Error("네트워크가 에러터짐");
        }
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => console.log("fetch" + error));

// POST 방식
/* POST방식에서 보낼때 headers  */
fetch("https://korean-advice-open-api.vercel.app/api/advice", {
    method : 'POST',
    headers : {
        'Content-Type': 'application/json',        
    },
    body: JSON.stringify({
        name : "blck",
        age : 32,
    })
}).then(response => response.json()).then(data =>{console.log("Success",data)})
.catch(error => {console.log("Error", error)});

/* JAVASCRIPT(localstorage, sessionStorage)  */
/*
    데이터가 삭제하기 전까지
    즉, 브라우저 혹은 컴퓨터를 끄거나 닫더라도 데이터 유지(localstroage)
    각 도메인주소마다 loalstorage를 가지고있다.
    url => www.naver.com (도메인이라고도 한다.)

    create는  데이터 저장

    read 키에 해당되는 value값 가져오기

    update는 덮어씌우기
    
    delete는 키값넣으면 삭제

    localStorage.clear() 모든 localstorage 전체 삭제


    SessionStorage : 저장된 데이터는 브라우저 닫을때 까지 유지
    각각의 도메인마다 고유한 sessionstorage를 가지고있다.

    http / https 둘다 다른 고유한 걸 가짐

    CRUD 
    
    Create => sessionStorage.setItem('key', 'value');
    READ => sessionStorage.getIem('key');
    Update => sessionStorage.setItem('key', 'value');
    Delte => sessionStorage.removeItem('SessionID');
    sessionStorage.clear() 전체 삭제
*/
/* JAVASCRIPT(localstorage, sessionStorage - 실습)  */

// localStorage.setItem("username", "canesblack");
// localStorage.getItem("username");
// localStorage.removeItem("username");
// localStorage.clear();

// sessionStorage.setItem("SessionID2", "야호");
// sessionStorage.getItem("SessionID2"); // 야호
// sessionStorage.removeItem("SessionID2"); // 야호 삭제됨
// sessionStorage.clear(); // 전체 삭제

/* JAVASCRIPT(var, let, const(차이, 스코프-개념))  */
/*
    var a = 1; 가능 (에러 발생율 ↑)
    var a = 2; 

    let a = 1; 불가능
    let a = 2;  

    const a = 1; 불가능
    const a = 2;

    스코프 => 범위 (var, let, const의 값을 출력하고자할때,
              어느 범위에 속하냐에따라 출력여부가 다르다.)

    1. 전역 스코프 => 2번과 3번을 제외한 나머지
    2. 함수 스코프 => function(){} -> 함수 스코프
    3. 블럭 스코프 => {} -> 블럭 스코프

    var a = 1; // 전역스코프
    function hello() {
        var b =2; // 함수 스코프
        if(true){
            let c = 3; // 블럭 스코프
            console.log(a);
            console.log(b);
            console.log(c);

            결과 : 123
        }
    }

    전역스코프는 어디서든 접근가능

    전역 -> 함수 -> 블록

    const a = function() { }; => 최상위 위에서 아래로

    const는 스코프에서 최상단에 작성해줘야함
*/

/* JAVASCRIPT(var, let, const(차이, 스코프-실습))  */

var a = 1; // 전역스코프

function hello(){
    var b = 2; // 함수 스코프
    if(true){
        let c = 3; // 블록 스코프
        console.log(a,b,c);
    }    
}
hello();

/*
   전역스코프 -> 함수스코프 -> 블록스코프  
   넓은 범위로 갈때는 변수 출력이 가능한데
   블록스코프 -> 함수스코프 -> 전역스코프
   작은 범위에서 넓은 범위로 갈때는 출력이 불가능
 
   호이스팅이 적용이안되기때문에 항상 함수가 최상단에 위치해야,
   데이터가 위에서 아래로 해야됨
*/
const hello2 = function (){};

console.log(hello2);


hello4();


function hello4(){
    console.log("hello");
}

console.log(g);
var g = 20;

