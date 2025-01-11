import React, { useRef, useState } from 'react';

export default function RefSample2() {
  const id = useRef(7); // 초기값을 7로 설정
  console.log('id >>>', id);

  const [number, setNumber] = useState(7);

  const plusNumState = () => {
    setNumber(number + 1);
  };

  const plusIdRef = () => {
    id.current += 1; // current의 값을 직접 수정
    console.log('id.current >>>', id.current); // 값 증가 확인
  };

  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭 시 id 값을 1씩 증가</p>
      <h1>Ref</h1>
      <h2>{id.current}</h2>
      <button onClick={plusIdRef}>Plus</button>

      <hr />
      <h1>State</h1>
      <p>비교) State는 ref와 다르게 값이 변경되면 리렌더링 되는 것을 확인</p>
      <h2>{number}</h2>
      <button onClick={plusNumState}>Plus</button>
    </div>
  );
}
