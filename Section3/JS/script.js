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
