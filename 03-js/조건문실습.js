function ageFn() {
  let age = prompt('나이 입력');

  if (age >= 20) {
    console.log('성인');
  } else if (age >= 17) {
    console.log('고등학생');
  } else if (age >= 14) {
    console.log('중학생');
  } else if (age >= 8) {
    console.log('초등학생');
  } else {
    console.log('유아');
  }
}
// const result = ageFn();

let now = new Date().getHours();
console.log(now);
0 <= now && now <= 12 ? console.log('오전입니다') : console.log('오후입니다');
