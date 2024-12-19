// 비동기처리 방법 v.3
// : async/await

// async 키워드: 함수 앞에 작성
// => async를 붙이는 순간 해당 함수는 프로미스가 아닌 값을 반환하더라도 프로미스로 감싸서 반환

async function f1() {
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}
console.log('f1() >>', f1()); // Promise {<fulfilled>: 1}
console.log('f2() >>', f2()); // Promise {<pending>} - 비동기 작업이 아직 완료되지 않은 상태

// 화살표 함수에도 async 키워드를 쓸 수 있음
const f3 = async () => {
  return 3;
};

f1().then(function (result) {
  console.log('f1 >>> ', result);
});
f2().then(function (result) {
  console.log('f2 >>> ', result);
});

////////////////////////////////////////////////
// async/await
// await: 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되길르 기다림
// - await 뒤에는 프로미스가 오게 됨
// - ** 반드시 async 키워드를 사용한 함수 안에서만 await를 사용 가능
// await: async 함수 내에서만 promise가 해결 될 때까지 기다리게 하며,
//        promise의 결과를 반환 값 처럼 다룰 수 있다

// async/await는 세트다!!

function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ['apple', 'peach', 'grape'];
      resolve(fruits);
      reject(new Error('알 수 없는 에러 발생!'));
    }, 100);
  });
}

// i) promise then()
fetchFruits()
  .then(function (f) {
    console.log(f);
  })
  .catch(function (err) {
    console.log(err);
  });

// ii) async/await
// 예외처리를 try-catch 구문으로 하게 됨
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (err) {
    console.log(err);
  }
}
printItems();
