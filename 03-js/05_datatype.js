// 자료형 (data types)
// Q) 데이터(변수)의 종류가 무엇인가?
// - Primitive(원시 타입): string, number, boolean, undefined, null, ...
// - Object(객체 타입): Primitive 타입이 아닌 나머지

// #1. string (문자열)
// - 텍스트 정보, 따옴표로 감싸야 함
// - 숫자, 특수문자도 따옴표 안에 포함되어있다면? -> 문자열
// ex) '1', '$'

let text = '안녕하세요';
let text2 = '하이!';
let gender = '남성';

console.log(text);
console.log(text2);
console.log(text + text2);

// 문자 + 변수를 동시에 쓰고 싶을 때
console.log(text + '저는 Damon 입니다. 저의 성별은' + gender + ' 입니다!');
console.log(text, text2, '야호');

// * 템플릿 리터럴 (= 문자를 표현하는 새로운 문법)
// (ES6) 백틱(`)과 달러($), 중괄호({}) 조합으로 사용한다.
// - 문자열 내에서 변수와 상수를 간결히 표현
console.log(`${text} 저는 Damon 입니다. 저의 성별은 ${gender} 입니다!`);

// 2. number (숫자형)
// - 정수, 실수
// - 연산이 가능하다 (+ - * / %)
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + 1);
console.log(num - 1);
console.log(num * 2);
console.log(num / 2);

// Q) 정수로 나오는 이유?
// A) JS에서는 정수와 실수를 구분하지 않고 모두 "Number" 타입으로 처리한다.
// - 즉, JS에서는 모든 숫자를 같은 타입으로 취급한다.

// 실수의 형태를 유지하고 싶다면. 'toFixed()' 라는 메서드를 사용해야 한다. (나중에 배움)

// #3. boolean (불리언)
// - true, false (참, 거짓) 두 가지 값만 가지는 데이터
let isWater = true;
let haveMoney = false;
console.log(isWater, haveMoney);

// #4. null (빈 값)
// "값이 없음"을 의도적으로 개발자가 명시한 것
let temp = null;
console.log(temp);
temp = 'Hello';
console.log(temp);

// 5. undefined
// 값도 없고, 타입도 지정되지 않은 상태
let x; // 변수 선언만 했을 대 초기 값으로 undefined 할당
console.log(x); // undefined

// [Quiz]
// Q1. 코드 실행 시 q1 변수는 어떤 값이 될까?
let q1 = 3;
console.log(q1 - 2); // 1
console.log(q1); // 3

// Q2. 다음 코드 실행 시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5;
q2 = q2 - 2;
console.log(q2); // 13

// Q3. 다음 코드 실행 시 q3 변수는 어떤 값이 될까? (상수) - 바뀌면 안됨.
const q3 = 1;
// q3 = q3 + 1; // Error
console.log(q3);

// Q4. 다음 실행 값은 무엇일까?
let ex = 2;
let am = '2';
let s = 2;
console.log(ex + am - s);
// 2?
// 20
// JS -> 느슨한 언어의 단점

// 6. 배열 (Array)
// 배열의 이름: fruits
// 배열의 요소(아이템): 배열 안에 있는 데이터 하나하나
// 배열의 위치(인덱스): 0부터 시작 - ero based numbering
// 배열의 길이(크기): 요소의 개수와 동일

const fruits = ['orange', 'pineapple', 'grape', 'apple'];
console.log(fruits); // ['orange', 'pineapple', 'grape', 'apple']
console.log(fruits[0]); // orange // fruits 배열의 위치가 0인 요소 출력
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// JS에서는 배열 원소의 자료형이 달라도 됨!
// Why?
// A) JS의 동적 타입 특성으로 인한 유연성 - "느슨한 언어"
const mixedArray = [1, 'Damon', true, { name: 'Layla' }, null, undefined];
console.log(mixedArray);

// Array 안에 Array 들어갈 수 있음 (중첩 가능) => 2차원 배열
const korean = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];
console.log(korean);
console.log(korean[0]); //
console.log(korean[1]);
console.log(korean[2]);
console.log(korean[0][0]);

// *반짝 실습
// Quiz 1) '바'만 뽑아 내려면?
console.log(korean[1][2]);

// Quiz 2) '가자' 글씨 출력하기
console.log(korean[0][0] + korean[2][2]);

// Quiz 3) 3차원 배열에서 숫자 8 출력하기
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. 객체(object) (key: value)
// - 프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조
// - 속성과 메서드로 구성

// * 속성
// - 키(key)와 값(value)의 쌍으로 이루어져 있다. - 상태나 특징

// * 메서드
// - 함수(function)를 값으로 가진다. - 동작이나 행위

const cat = {
  name: '장화',
  age: 10,
  isCute: true,
  mew: function () {
    return '먕';
  },
};
console.log(cat); // {name: '장화', age: 10, isCute: true, mew: f} - object 자체를 출력

// 객체(object)의 속성(key)에 접근하는 방법
// #1. 점 표기법(.)
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew);

// #2. 대괄호 표기법
console.log(cat['name']);
console.log(cat['isCute']);

// #3. key가 변수에 저장되어 있을 때 사용법
const tempVal = 'name';
console.log(cat[tempVal]); // cat['name'] => cat.name과 동일

// 8. typeof: 자료형을 확인할 수 있는 키워드
// * 구문
// typeof X (X는 어떤 무언가)

console.log(typeof '문자'); // string
console.log(typeof 12345); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // null -> object
// js의 초기 구현 중 하나로서, null 값을 object로 분류하는 것은 공식적으로 인정한 언어의 설계상 오류
console.log(typeof undefined); // undefined
console.log(typeof fruits); // Array -> object
console.log(typeof cat); // object -> object

// 9. 형변환
// 성적 평균 구하는 프로그램 만들기
// prompt() : JS에서 사용자로부터 입력을 받을 때 사용하는 브라우저 내장 함수

// let mathScore = prompt('수학 점수 입력');
// console.log('mathScore > ', mathScore, typeof mathScore);
// let engScore = prompt('영어 점수 입력');
// console.log('engScore >>>> ', engScore, typeof engScore);
// let avg = (mathScore + engScore) / 2;
// console.log(`수학, 영어 평균점수는 ${avg}점 입니다.`);

// 명시적 형변환
// #1. String(): 문자로 형변환
let str1 = true; // boolean
let str2 = 123; // number
let str3 = undefined; // undefined

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));

console.log(str1.toString(), typeof str1.toString());
console.log(str2.toString(), typeof str2.toString());

// #2. Number(): 숫자로 형변환
let n1 = true; // boolean
let n2 = false; // boolean
let n3 = 123.9; // number
console.log(Number(n1), typeof Number(n1)); // 1
console.log(Number(n2), typeof Number(n2)); // 0
console.log(Number(n3), typeof Number(n3)); // 123.9
console.log(parseInt(n3, 10)); // n3 값을 10진수의 정수(int)로 바꾸겠다. // 123
console.log(parseFloat(n3)); // n3 값을 실수(float)로 바꾸겠다. // 123.9

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined)); // NaN, number
// NaN = Not-A-Number (= 숫자가 아님)
// 정의되지 않은 값이 숫자로 변환될 수 없기 때문!
console.log(Number(null), typeof Number(null)); // 0, number
