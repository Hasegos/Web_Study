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
document.querySelector("input").style.background ="green";