import React, { useReducer, useState } from 'react';

const initState = { arr: [] };

const reducer = (state, action) => {
  // (새로운 Todo 추가 로직)
  // (Todo 완료 상태 토글 로직)
  // (Todo 삭제 로직)
  //   console.log(state);

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        arr: state.arr.concat({
          id: state.arr.length,
          value: action.value,
          complete: false,
        }),
      };
    case 'DELETE':
      return {
        ...state,
        arr: state.arr.filter((el) => el.id !== action.id),
      };
    case 'LINE':
      return {
        ...state,
      };
    default:
      return { value: state.value };
  }
};

const TodoApp = () => {
  // 상태 관리
  const [state, dispatch] = useReducer(reducer, initState);
  const [input, setInput] = useState('');

  const add = () => dispatch({ type: 'ADD', value: input });
  const del = (idx) => {
    dispatch({ type: 'DELETE', id: idx });
  };
  const line = () => dispatch({ type: 'LINE' });
  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={input}
        placeholder="Add a new todo"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>

      <ul>
        {state.arr?.map((el, idx) => {
          return (
            <li key={idx}>
              {el.value}
              <button
                onClick={() => {
                  del(idx);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
