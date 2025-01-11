import React, { useState } from 'react';

export default function Prac3() {
  const [display, setDisplay] = useState(true);

  const displayChange = () => {
    setDisplay(!display);
  };

  return (
    <>
      <button onClick={displayChange}>{display ? '사라져라' : '보여라'}</button>
      <div>{display && '안녕하세요'}</div>
    </>
  );
}
