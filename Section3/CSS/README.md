# CSS 기본 개념

## 목차
    1.CSS란?
    2. 인라인 스타일
    3. 내부 스타일
    4. 외부 스타일    

## css 란 ?

css파일은 stylesheet이랑 똑같다. <br>
-> html에 디자인 적용함

## 인라인 스타일
인라인 스타일 -> div 태그 / label 태그 <br>
&nbsp; 
``` html
예시)

<label style="스타일 속성"> 아이디 </label>
```
&nbsp; 스타일 속성 => color : red; 등 <br>

## 내부 스타일
내부 스타일은 ```<style>``` 태그로 대체함 각 라벨을 적용시킴 <br>
``` html
<!DOCTYPE html>
<head>
    <style>
        label { color :red; }
    </style>
</head>
<body>
    <label name="nickname">사용자이름</label>
</body>

빨간색으로 사용자이름 나옴
```

## 외부 스타일

예를 들어 index.html 파일이 있다고 가정)
``` html
<!DOCTYPE html>
<html>
<head>
    <link style="style.css"> 
    
</head>
</html>    
```
CSS 파일이 같은 폴더에 있을 경우 CSS파일을 적용시킴
``` CSS
label {color : red;}
font-size : 3px;
```

CSS 간에 순서가 있다.

인라인  > 내부스타일 > 외부스타일


## Padding vs Margin

```    
     ____________________
    |  _______________  | <--- border 에서 안쪽은 Padding  
    | |               | |     그 밖은 margin
    | |  Hello World  | |
    | |_______________|<|---- content
    |___________________|   

```
content가 존재하고 그위에 border가 존재 <br>

### Padding 란
content와 border 그사이가 padding  <br>
padding을 키우면 문자간에 간격은 그대로 차지하는 box크기는 늘어남<br>

### Margin 란
margin은 문자와 문자열사이에 간격 <br>
문자와 border간에 간격은 그대로 대신 문자간에 간격이 벌어져서 더 늘어남

### Content
cotent  : width , height 크기를 조절

### Padding
padding : 영역을 가지기에 색상
1. padding-top : 10px; 
2. padding-width : 10px; 등등

### border
1. border : 2px solid red; solid 기본선

### margin 
1. margin-top : 10px;
2. margin-width : 10px; 등등


## CSS 레이아웃 구성

display vs position

레이아웃을 배치하는 포지션

display : 영역은 2차원 레이아웃

```
        ↑
    _________
   |    |    |
   |    |___ |  →  2차원   3차원 표현도 가능
   |         | 
   |_________|
    
```

### display
1. 2차원 : inline , none 테그값 제거
2. 3차원 : block , inline-blocck

### position <br>
위치를 옮기게끔 해줌

1. static
2. relative
3. absolute
4. fixed

static : 모든 요소의 기본값 기본적인 흐름에 맞춰(?)서 배치된다. <br>
position : static 일경우 display : inline  가로로 배치 <br> 
position : static 일경우 display : block 세로로 배치 <br>

postion : static 일경우 top : 10px 등 위치 옮기기 X <br>
postion : relative 좌표 속성 지정하기 가능



## CSS플렉스 박스(flex)

flex => 부모(기능 정의) + 자식(기능 호출) <br>
display : felx; <br>
flex-direction : row; 자식 요소들이 가로로 나열

### flex 요소 이미지 모음
<img src="https://miro.medium.com/v2/resize:fit:1400/0*YeaUsQyhXSL1TCTH.png" width="500px" height =" 600px"
alt ="flex 요소 이미지 모음"></img>

aling-items <- Y축 기준으로 움직이기 <br>
flex-direction <- 가로 기준으로 움직이기 
justify-content <- X축 기준으로 움직이기

CSS처리할시 큰 요소에서 작은 요소로 나가는방향으로 수정하기.

