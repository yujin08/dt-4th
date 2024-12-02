// for (let i = 0; i < 10000; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   }
// }

// const number = () => {
//   let number = prompt('숫자 입력');

//   number % 13 === 0 && number % 2 === 1
//     ? console.log('13의 배수면서 홀수인 숫자')
//     : console.log('13의 배수가 아니면서 홀수가 아닌 숫자');
// };

// number();

// for (let i = 2; i <= 9; i++) {
//   console.log(`-- ${i}단 --`);
//   for (let j = 1; j <= 9; j++) {
//     console.log(i * j);
//   }
// }

// 실습문제 3
let i = 0;
let sum = 0;
while (i <= 100) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum);
