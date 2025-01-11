import React, { useState } from 'react';

export default function ExPrac2() {
  const [color, setColor] = useState('black');
  const [text, setText] = useState('검정색 글씨');

  const RedChange = (e) => {
    setColor('red');
    setText('빨간색 글씨');
  };

  const BlueChange = (e) => {
    setColor('blue');
    setText('파란색 글씨');
  };
  return (
    <>
      <div style={{ color: color }}>{text}</div>
      <button onClick={RedChange}>빨간색</button>
      <button onClick={BlueChange}>파란색</button>
    </>
  );
}
