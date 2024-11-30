// // 조건문
// /**
//  * 어떤 조건에 따라 논리 구조를 나눔
//  * 각 조건을 '분기'라고도 함
//  * 조건에 따라 서로 다른 문장을 실행함
//  */

// // 1. if 문
// // if(조건식) { 조건식이 참이라면 문장을 실행}

// // #1. 단일 if문 (if 1개)
// if (5 > 3) {
//   console.log('옳다');
// }

// let number = Number(prompt('숫자를 입력해주세요!'));
// // 1. prompt()로 사용자로부터 값을 입력 받고(문자열)
// // 2. number() 문자열 -> 숫자형 형변환

// // #2. if ~ else문
// if (number > 10) {
//   console.log('입력한 수는 10보다 크다.');
// } else {
//   console.log('입력한 수는 10보다 작거나 같다.');
// }

// // #3. if ~ "else if" ~ else 문
// if (number > 10) {
//   console.log('입력한 수는 10보다 크다.');
// } else if (number === 10) {
//   console.log('입력한 수는 10이다!');
// } else {
//   console.log('입력한 수는 10보다 작다.');
// }

// // #4. if ~ "else if" * n ~ else 문
// // else는 한번만 사용 가능
// // else if는 여러개 사용 가능

// if (number > 100 || number < 0) {
//   console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
// } else if (number >= 90) {
//   console.log('A');
// } else if (number >= 80) {
//   console.log('B');
// } else if (number >= 70) {
//   console.log('C');
// } else if (number >= 60) {
//   console.log('D');
// } else {
//   console.log('F');
// }

// // #5. 중첩 if문
// let userId = 'user01';
// let userPw = '1234';

// /**
//  * id, pw 검사하는 함수
//  */
// function loginUser() {
//   let inputId = prompt('아이디 입력');
//   let inputPw = prompt('비밀번호 입력');

//   // Q) userId와 inputId가 같다면?
//   // - userPw와 inputPw를 비교

//   // Q) inputId에 빈값이 입력이 됐다면?
//   // - '아이디 입력 안함' 문구를 반환

//   // Q) 두 경우가 아니라면 (inputId가 틀렸을 때)
//   // - '아이디 틀림' 문구 반환

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       return '로그인 성공';
//     } else {
//       return '비번 오류! 로그인 실패!';
//     }
//   } else if (inputId === '') {
//     return '아이디 입력 안함';
//   } else {
//     return '아이디 오류! 로그인 실패!';
//   }
// }
// const result = loginUser();
// console.log(result);

////////////////////////////////////////////////////////
// 2. switch문
// - 하나 이상의 case 문으로 구성
// * default: switch문 내의 모든 case가 매칭 되지 않을 때 실행
//      - 필수는 아니지만, 사용하길 권장
//      - if문의 else 같은 존재
//      - switch 문의 마지막에 두는 것이 일반적!
// * break: 조건을 빠져나갈때 사용하는 키워드
//      - 실행을 중단하고, switch 문 블록을 빠져나감
//      - 생략하면, 다음 case 들이 연달아 실행됨
//          - = 여러개의 case 문을 묶을 수도 있다.

let a = 3;
switch (a) {
  case 1:
  case 2:
  case 3:
    console.log('a가 1~3이군요!');
    break;
  case 4:
    console.log('a가 4이군요!');
    break;
  case 5:
    console.log('a가 5이군요!');
    break;
  default:
    console.log('a가 무슨 값인지 모르겠습니다.');
    break;
}
// break 문이 없으면 조건을 빠져나가지 않고 아래에 있는 모든 case의 코드도 실행된다.

// 3. 삼항연산자
// 조건식 ? A : B
// - 조건식이 참이면 'A', 거짓이면 'B'
// if문을 간단하게!

let num = 5;

// 일반 if문
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}

// 삼항 연산자
num % 2 === 1 ? console.log('홀수') : console.log('짝수');

// 실습 (2번) - new Date
// 내장 함수 - 현재 날짜와 시간을 나타내는 JavaScript Date 객체를 반환
// Q) 내장 함수?
// A) JS 엔진이 기본적으로 제공하는 함수
// A2) 개발자가 별도로 정의하지 않아도 사용할 수 있는 함수
// 전역 객체에 속해 있어 어디서든 접근 가능하고 바로 사용 가능!

let now = new Date();
let now2 = new Date().getHours(); //9
console.log(now);
