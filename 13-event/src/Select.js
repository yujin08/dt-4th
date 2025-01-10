import React from 'react';

export default function Select({ setData }) {
  return (
    <div>
      과일:
      <select
        onChange={(e) => {
          // data state 값의 fruit 값을 변경해주기.
          console.log(e.target.value); // peach / apple / banana

          // spread 연산자 (...연산자)
          // ...data: 이전 값 그대로
          // - 객체의 복사본을 만들 때 유용한 JS 문법
          // - 객체의 모든 속성을 펴쳐서 새로운 객체를 만들어줌.

          // 'fruit' 값만 변경이 일어나서 fruit만 바꿔줌.
          // 'fruit' 속성만 선택된 값으로 덮어 쓰여짐.
          // = 'fruit' 속성만 변경되고 나머지는 그대로 유지
          // -> 불변성 유지!
          setData((data) => {
            return { ...data, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색:
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, background: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
      </select>
      글자색:
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, color: e.target.value };
          });
        }}
      >
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
      </select>
    </div>
  );
}
