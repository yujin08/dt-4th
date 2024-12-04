// * 내장 메서드란?
// - 프로그래밍 언어 (= JavaScript)나 프레임워크에서 기본적으로 제공되는 메서드
// - 즉, 프로그래밍 언어의 기본 도구 (= 자체에서 제공되는 기능)
// - 따로 설치하거나 추가 설정할 필요 x

// 문자열 관련 내장 메서드
// - 문자열을 다루는데 유용한 기능들을 제공

let str = 'Happy Birthday';
let str2 = '    Happy Birthday   ';

console.log('str >>>>', str);
console.log('str2 >>>>', str2);

// #1. 문자열 인덱싱
console.log(str[0]); // H
console.log(str[4]); // y
console.log(str[0] + str[9]); // Ht

// Q) Hard
console.log(str[0] + str[1] + str[8] + str[11]);
console.log(`${str[0]}${str[1]}${str[8]}${str[11]}`);

// 백틱은 변수를 출력하기 위해서만 쓰는건 아닙니다.
// 표현식을 평가해서 그 결과 값을 문자열에 삽입할 수 있기 때문에 사용
// str[]처럼 인덱스를 사용한 문자열 접근도 하나의 표현식

// #2. 문자열의 길이 (length는 메서드가 아닌 속성입니다.)
console.log(str.length);
console.log(str2.length);

// #3. 대/소문자 변환
console.log(str.toUpperCase()); // HAPPY BIRTHDAY
console.log(str2.toLowerCase()); // happy birthday

// #4. 양끝 공백 제거
console.log(str2.trim()); // Happy Birthday
console.log(str2.trim().length); // 14
console.log('---------------------');

console.log('str >>>>', str);
console.log('str2 >>>>', str2);

// #5. indexOf() 글자 위치 찾기
// - 위치 (index): 0부터 시작
// - 같은 문자열이 있으면 처음에 나오는 위치
console.log(str.indexOf('y')); // 4
console.log(str.indexOf('i')); // 7
console.log(str.indexOf(' ')); // 5
console.log(str.indexOf('v')); // -1
// 존재하지 않는 문자에 대해 검색하면 -1 반환
console.log(str.indexOf()); // -1 반환
// 매개변수로 아무 값이 들어가지 않는다면 -1 반환

// #6. slice() 문자열 자르기
// - 음수값이 들어간다면 뒤에서부터 순서를 센다.
// - 위치 (index): 0부터 시작
// - slice(start, end): start ~ end - 1 까지 자르기
console.log(str.slice(10)); // hday - 10번 위치의 글자 ~ 끝
console.log(str.slice(1, 5)); // appy - start (1) ~ end-1 (4) 까지 자르기
console.log(str.slice(-6)); // rthday - 뒤에서 6번째 위치의 글자 ~ 끝

// #7. replace() 문자열 바꾸기
console.log(str.replace('p', 'w'));
console.log(str.replace('B', 'w'));
console.log(str.replaceAll('p', 'w'));

// #8. split() 문자열 쪼개기 (배열로 변환)
// - 2개 이상 같은 문자열을 기준으로 쪼갤 시, 남은 문자열 1개는 사라지고, 남은 문자열 수 만큼 빈문자열("") 생성
let str3 = 'dinner';
console.log(str3.split('e')); // ['dinn', 'r']
console.log(str3.split('n')); // ['di', '', 'er']

// #9. repeat()
console.log(str3.repeat(4)); // dinnerdinnerdinnerdinner

////////////////////////////////////////
// * 배열 내장 메서드
let arr = [1, 2, 3, 4, 5];
let arr2 = ['dog', 'panda', 'tiger', 'monkey'];

console.log('arr >>>>', arr);
// How? 배열에 값을 추가하려면?
// 6이라는 인덱스를 추가하고 싶다
arr[5] = 6; // arr 배열의 5번 인덱스에 6이라는 값을 추가
arr[8] = 100; // 인덱스를 건너뛰면 빈 값(empty)이 들어가게 됨

// #1. push(): 맨 끝에 요소 추가
arr.push(6);
arr.push(10);
console.log('arr >>>>', arr);

// #2. pop(): 맨 끝에 요소 제거
arr.pop();
console.log('arr >>>>', arr);

// #3. unshift(): 맨 앞에 요소 추가
arr2.unshift('cat');
console.log('arr2 >>>>', arr2);

// #4. shift(): 맨 앞에 요소 제거
arr2.shift();
console.log('arr2 >>>>', arr2);

// #5. length: 배열의 길이 반환
console.log(arr.length);

// #6. includes(요소): 요소가 있는지 없는지 검사 - (true, false) 반환
console.log(arr2.includes('panda')); // 존재하므로 true
console.log(arr2.includes('lion')); // 존재하므로 false

// #7. reverse()
console.log(arr.reverse()); // 역순으로 바뀜
console.log('arr >>>>', arr); // 원본 배열이 변경됨

// #8. join(): join 안의 문자열 기준으로 병합
console.log('arr2 >>>>', arr2);
console.log(arr2.join('')); // dogpandatigermonkey
console.log(arr2.join('-')); // dog-panda-tiger-monkey

// #9. 메서드 체이닝 (method chaining)
// - 여러 메서드를 연결해서 사용할 수 있다.
console.log('hello'.split('')); //  ['h', 'e', 'l', 'l', 'o']
console.log('hello'.split('').reverse()); //  ['o', 'l', 'l', 'e', 'h']
console.log('hello'.split('').reverse().join('')); //  olleh
