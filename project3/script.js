const nextButton = document.getElementById("nextButton"); // 다음
const selectButton = document.getElementById("selectButton"); // 선택
const currentQuote = document.getElementById("quote");
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quoteContainer");
const quotePickList = document.getElementById("quotePickList"); // 즐겨찾기 리스트


let currentQuoteText = ""; // 현재 명언
let isQuoteSaved = false; // 즐겨찾기에 저장한건지 확인


// 로딩 X (명언 텍스트 O)
function hideLoader(){
    loader.style.display = "none";
    quoteContainer.style.display ="block";
}

// 로딩중 (명언 텍스트 X)
function showLoader(){
    loader.style.display = "block";
    quoteContainer.style.display ="none";
}
// api키 파싱 (명언 넣기)
async function quote() {
    
    showLoader();

    const quote = await fetch("https://korean-advice-open-api.vercel.app/api/advice");
    try{        
        const response = await quote.json();        
        currentQuoteText = response.message; // 텍스트에 저장
        currentQuote.innerText = currentQuoteText;
        
        localStorage.setItem("currentQuote", currentQuoteText);

        // 로컬스토리지에 저장한거라 X
        isQuoteSaved = false;

    }catch(e){
        console.error(`에러 발생 : ${e}`); // 에러 발생이유
        currentQuote.innerText = "명언을 불러낼수가 없습니다."
    }   

    hideLoader();
}

// 선택 눌렀을시
function saveQuote(){

    const saveQuote = localStorage.getItem("currentQuote");

    // 즐겨찾기에 저장 X , 널 값 x , 
    if(isQuoteSaved == false && saveQuote !== null && !isAlreadyQuote(saveQuote)){
        const listItem = document.createElement("li");
      
        listItem.innerText = saveQuote;
    
        quotePickList.appendChild(listItem);

        isQuoteSaved = true;
    }
    else if(isQuoteSaved == true){
        alert("이 명언은 이미 존재합니다.");
    }
    else {
        alert("이 명언은 즐겨찾기에 추가되었습니다.");
    }   

}

// 존재하는지 확인작업
function isAlreadyQuote(quote){
    const listItem = quotePickList.getElementsByTagName("li");
    for(li of listItem){
        if(li.innerText === quote){
            return true;
        }
    }
}

nextButton.addEventListener("click",quote);
selectButton.addEventListener("click",saveQuote);