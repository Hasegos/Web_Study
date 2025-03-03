const wrapper = document.getElementById("wrapper");
const inputFieldGroup = document.getElementsByClassName("inputGroup");
const allnputs = document.querySelector("input");

const userNickname = document.getElementById("nickname"); // 닉네임
const userEmail = document.getElementById("email"); // 이메일
const userPassword = document.getElementById("userPassword"); // 비밀번호
const confirmPassword = document.getElementById("confirmPassword"); // 비밀번호확인
const userPhone = document.getElementById("phone"); // 폰번호
const registrationForm = document.getElementById("registrationForm");


const updateHelperText = (input,message,isValid)=> {
    const inputGroup = input.parentElement;
    console.log(userEmail.parentElement);
    // 한개의 input태그의 부모 태그에 접근하는것
    // 예시로, input태그를 저희가 userEmail로 접근하였다고하면,
    // 아래 태그들의 최상위 태그를 의미함
    const helperText = inputGroup.getElementsByClassName("helperText")[0];

    if(isValid == true){
        inputGroup.classList.remove("invalid");
        inputGroup.classList.add("valid");
        helperText.style.visibility = "hidden";
    }

    if(isValid == false){
        inputGroup.classList.remove("valid");
        inputGroup.classList.add("invalid");
        helperText.style.visibility = "visible";
        helperText.innerText = message;
    }
};

// updateHelperText(allnputs, "hello", true);


// 알림이 사용이되는 것까지는 설정을 했는데, 언제 사용이 되야하냐, 조건을 설정안했음
// 입력필드가 비어있는지 확인하는 함수
const checkEmptyInput = (input) => {
    // trim() 띄어쓰기 삭제
    if(input.value.trim() === ""){
        updateHelperText(input, "값을 입력해주세요", false);
        return false;
    }
    else{
        updateHelperText(input, "", true);
    }
}

// 이메일 형식이 올바른지 확인하는 함수
// 이메일 주소가 규칙에 맞게 작성되었는지 확인하는 것과 같습니다.

const validEmailFormat = (input) => {
    // 정규식 => 마법 특정한 검사를 통헤 true, false를 리턴가능
    // test()는 자동으로 테스트 검사해주는 함수
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(emailPattern.test(input.value.trim()) == true){
        updateHelperText(input,"",true);
        return true;
    }else{
        updateHelperText(input,"유효한 이메일 주소를 입력부탁드립니다.",false);
        return false;
    }
}

// 비밀번호 강도 확인
const checkPasswordStrength = (password) => {
    // 특수 기호 포함 8자리
    const strongPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/; 

    if(strongPattern.test(password.value == true)){
        updateHelperText(password, "비밀번호 강도 : 강함", true);
        return true;
    }
    else{
        updateHelperText(password,
            "비밀번호는 8자리이상이어야하며, 대문자, 소문자, 특수문자를 포함하여야합니다.", false);
        return false;
    }
}

// 비밀번호 확인
const validPasswordMatch = (passwordInput, confirmInput) => {
    if(passwordInput.value != confirmInput.value){
        updateHelperText(confirmInput, "비밀번호가 일치하지 않습니다.", false);
        return false;
    }
    else{
        updateHelperText(confirmInput, "", true);
        return true;
    }
}

// 전화번호가 올바른 형식인지 확인하는 함수
const validPhoneNumber = (input) => {
    const phonePattern =  /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    // 올바를 경우
    if(phonePattern.test(input.value.trim()) == true){
        updateHelperText(input, "", true)
        return false;
    }
    // 틀릴 경우
    else{
        updateHelperText(input, "유효한 전화번호를 입력해주세요(예: 010-1234-1234)", false);
        return false;
    }
}

// 폼제출시 (회원가입버튼 누르면 회원가입되게끔 하는 것)입력 필드가 유효한지 확인하는 함수
// 숙제 검사에서 모든항목을 검토하는 것과 같다.

const validateForm = () => {
    const isNicknameVaild = checkEmptyInput(userNickname);
    // boolean값으로 에러 검사시 문제가 없으면 true를 값으로 가짐 ,문제가 있을시 false로..
    const isEmailVaild = validEmailFormat(userEmail);
    const isPaasswordStrong = checkPasswordStrength(userPassword);
    const isPasswordMatch = validPasswordMatch(userPassword,confirmPassword);
    const isPhoneValid = validPhoneNumber(userPhone);

    // 모든 검사를 해서 통과해야 회원가입이 가능하다.

    return isNicknameVaild && isEmailVaild && isPaasswordStrong
     && isPasswordMatch && isPhoneValid;
} // 전부 true여야 값을 반환한다.

registrationForm.addEventListener("submit",(event) => {
    // 폼안의 submit 타입의 버튼을 눌렀을 때 이벤트가 발생한다.
    // 근데, 여기서 그런 버튼을 눌렀을때 발생하는 기능들을 압축해서 객체{key, value}기능들을
    // 모아놓은것을 e라고 한다.

    event.preventDefault(); // 이걸 사용해줘야 유효성 검사가 가능하다.
    if(validateForm() == true){
        console.log("모든 필드가 유효합니다.");
    }
    else{
        console.log("위 필드중 일부분이 에러가 터집니다. 유효성 검사실패");
    }
    // 기본적으로 폼태그에서 submit버튼을 누르면 자동으로 수행되는 기능이 있다.
    // 폼제출동작을 막습니다. 폼제출 동작에 기본적인 기능이 있는데 새로고침이다. => console에 있던 데이터들이 사라진다.
    
    console.log(event);
})

// 각 input태그 입력을 눌렸을때 테두리색깔이나 알림이 뜨게하고싶다.

document.querySelectorAll("input").forEach(input => {
    // foreach()는 배열안에 데이터를 각각 뽑아오고싶을때
    input.addEventListener("input",() => {
        switch(input.id){
            case 'nickname':
                checkEmptyInput(input);
                break;
            case 'email':
                validEmailFormat(input);
                break;
            case 'userPassword':
                checkPasswordStrength(input);
                break;
            case 'confirmPassword':
                validPasswordMatch(userPassword,confirmPassword);
                break;
            case 'phone':
                validPhoneNumber(input);
                break;
            default : 
                break;
        }
    })
})


