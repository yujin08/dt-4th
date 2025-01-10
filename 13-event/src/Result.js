import React from 'react';
// import apple from './assets/apple.png';
// import banana from './assets/banana.png';
// import peach from './assets/peach.png';

// #1. (정적) import 방식으로 가져와서 객체에 저장
// - 파일이나 모듈을 컴파일 시점에 미리 가져옴
// - 파일 경로가 고정되어 있어야 함
// const images = {
//   apple,
//   banana,
//   peach,
// };

// #2. (동적) require() 방식
// - Webpack에서 이를 지원함
// - 런타임시에 동적으로 단일 파일을 가져올 수 있음
// - 경로를 동적으로 설정 가능
// - 즉, 파일이나 폴더 경로가 변수로 지정 될 때 유용

// #3. require.context() 방식
/**
 * - webpack에서 제공
 * - 특정 디렉토리의 파일들을 자동으로 탐색, 한 번에 가져옴
 *
 * [구문 분석]
 * require.context(directory, useSubdirectories, regExp)
 * -- directory: 탐색할 디렉토리 경로 (문자열 형태로 입력)
 * -- useSubdirectories: 하위 디렉토리까지 포함할지 여부 (true, false)
 * -- regExp: 파일 이름을 필터링할 정규 표현식
 */
const images2 = require.context('./assets', false, /\.(png|jpe?g|svg)$/);
/**
 * . : 임의의 한 특수문자
 * \.: 점을 일반 문자로 취급하여 실제 점(.)을 찾음
 * ?: 앞에 글자가 있을수도 없을수도 있음
 * $: 문자열의 끝을 의미 -> 끝에 .png로 끝나야만 매칭
 */

console.log('images >>> ', images2);
console.log('모든 파일 경로 배열로 반환 >>>', images2.keys());

export default function Result({ data }) {
  const { fruit, background, color, content } = data;

  return (
    <div>
      {/* 이미지 동적 처리 */}
      {/* #1. 정적 import 방식 */}
      {/* <img src={images[fruit]} alt="" width={100} height={100} /> */}

      {/* #2. 동적 require 방식 */}
      {/* <img
        src={require(`./assets/${fruit}.png`)}
        alt=""
        width={100}
        height={100}
      /> */}

      {/* #3. 동적 require.context() 방식 */}
      <img src={images2(`./${fruit}.png`)} alt="" width={100} height={100} />
      <div style={{ backgroundColor: background, color: color }}>{content}</div>
    </div>
  );
}
