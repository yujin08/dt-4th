// 상태 관리를 따로따로 하는 방법
import React, { useState } from 'react';

export default function Prac() {
  const [fruit, setFruit] = useState('peach.png');
  const [bgc, setBgc] = useState('red');
  const [color, setColor] = useState('black');
  const [text, setText] = useState('');

  const fruitChange = (e) => {
    setFruit(e.target.value);
  };

  const bgcChange = (e) => {
    setBgc(e.target.value);
  };

  const colorChange = (e) => {
    setColor(e.target.value);
  };

  function Typing(e) {
    setText(e.target.value);
  }
  return (
    <div>
      과일:
      <select onChange={fruitChange}>
        <option value="peach.png">복숭아</option>
        <option value="apple.png">사과</option>
        <option value="banana.png">바나나</option>
      </select>
      배경색:
      <select onChange={bgcChange}>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
      </select>
      글자색:
      <select onChange={colorChange}>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
      </select>
      <div>
        내용: <input type="text" onChange={Typing} />
      </div>
      <div>
        <img src={fruit} alt="" width={200} height={200} />
      </div>
      <div style={{ backgroundColor: bgc, color: color }}>{text}</div>
    </div>
  );
}
