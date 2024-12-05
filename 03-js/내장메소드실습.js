// let numbers = [];
// let sum = 0;
// let sum2 = 0;
// let sum3 = 0;

// for (let i = 1; i <= 100; i++) {
//   numbers.push(i);
// }
// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// for (let num of numbers) {
//   sum2 += num;
// }
// console.log(sum2);

// numbers.forEach(function (num) {
//   sum3 += num;
// });
// console.log(sum3);

// 실습문제2

let fruits1 = [
  '사과',
  '딸기',
  '파인애플',
  '수박',
  '참외',
  '오렌지',
  '자두',
  '망고',
];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

/* 1. for 문 이용 */
let same = [];
let diff = [];
for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}
console.log(same);
console.log(diff);

/* 2. filter 와 includes 이용 */
let same2 = fruits1.filter((fr) => fruits2.includes(fr));
let diff2 = fruits1.filter((fr) => !fruits2.includes(fr));

console.log(same2);
console.log(diff2);
