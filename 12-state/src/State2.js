import React, { useState } from 'react';

export const State2 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 2);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
};
